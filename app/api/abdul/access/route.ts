import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createClient } from '@/utils/supabase/server'

/**
 * API สำหรับเช็คสิทธิ์การใช้งานอับดุล (ไม่เรียก Gemini)
 */
export async function GET() {
    try {
        const session = await getServerSession(authOptions)

        if (!session?.user?.email) {
            return NextResponse.json(
                { hasAccess: false, reason: 'LOGIN_REQUIRED' },
                { status: 200 }
            )
        }

        const supabase = await createClient()
        const { data: user } = await supabase
            .from('User')
            .select('*, subscription:Subscription(*)')
            .eq('email', session.user.email)
            .single()

        if (!user) {
            return NextResponse.json(
                { hasAccess: false, reason: 'USER_NOT_FOUND' },
                { status: 200 }
            )
        }

        const subscription = user.subscription?.[0]
        const tier = subscription?.tier || 'NON_MEMBER'
        const isAdmin = user.email === 'admin@vessuyan.com'
        const isPremium = tier === 'PREMIUM'

        if (!isAdmin && !isPremium) {
            return NextResponse.json(
                { hasAccess: false, reason: 'PREMIUM_REQUIRED', tier },
                { status: 200 }
            )
        }

        return NextResponse.json({
            hasAccess: true,
            tier: isAdmin ? 'ADMIN' : tier
        })

    } catch (error) {
        console.error('Error in GET /api/abdul/access:', error)
        return NextResponse.json(
            { hasAccess: false, reason: 'ERROR' },
            { status: 500 }
        )
    }
}
