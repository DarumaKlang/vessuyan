import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        // Security check: Only admin@vessuyan.com can access this
        if (!session?.user?.email || session.user.email !== 'admin@vessuyan.com') {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const { userId, tier, endDate } = await request.json()

        if (!userId || !tier) {
            return NextResponse.json(
                { error: 'Missing userId or tier' },
                { status: 400 }
            )
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        )
        const now = new Date().toISOString()

        // 1. Check if subscription exists
        const { data: existingSub } = await supabase
            .from('Subscription')
            .select('id')
            .eq('userId', userId)
            .maybeSingle()

        let subId;

        if (existingSub) {
            subId = existingSub.id;
            // Update subscription
            const { error: updateError } = await supabase
                .from('Subscription')
                .update({
                    tier,
                    endDate: endDate || null,
                    status: 'active',
                    updatedAt: now
                })
                .eq('id', subId)

            if (updateError) throw updateError
        } else {
            subId = crypto.randomUUID();
            // Create subscription
            const { error: insertError } = await supabase
                .from('Subscription')
                .insert({
                    id: subId,
                    userId,
                    tier,
                    endDate: endDate || null,
                    status: 'active',
                    createdAt: now,
                    updatedAt: now
                })

            if (insertError) throw insertError
        }

        // 2. Clear or set usage limits based on tier
        // For simplicity, we just reset them if they exist, or create new ones
        // Limits: FREE: 2/1/0, PREMIUM: 999/999/999
        const limits = tier === 'PREMIUM'
            ? { h: 999, q: 999, c: 999 }
            : (tier === 'FREE_MEMBER' ? { h: 2, q: 1, c: 0 } : { h: 1, q: 0, c: 0 });

        const { data: existingLimit } = await supabase
            .from('UsageLimit')
            .select('id')
            .eq('subscriptionId', subId)
            .single()

        if (existingLimit) {
            await supabase
                .from('UsageLimit')
                .update({
                    horoscopeRemainingThisWeek: limits.h,
                    questionsRemainingThisWeek: limits.q,
                    consultationsRemainingThisWeek: limits.c,
                    updatedAt: now,
                    lastResetDate: now
                })
                .eq('id', existingLimit.id)
        } else {
            await supabase
                .from('UsageLimit')
                .insert({
                    id: crypto.randomUUID(),
                    subscriptionId: subId,
                    horoscopeRemainingThisWeek: limits.h,
                    questionsRemainingThisWeek: limits.q,
                    consultationsRemainingThisWeek: limits.c,
                    createdAt: now,
                    updatedAt: now,
                    lastResetDate: now
                })
        }

        return NextResponse.json({ success: true, message: `Updated user to ${tier}` })
    } catch (error) {
        console.error('Error in POST /api/admin/users/update-tier:', error)
        return NextResponse.json(
            { error: 'Internal Server Error', details: String(error) },
            { status: 500 }
        )
    }
}
