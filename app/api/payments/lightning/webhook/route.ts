import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { payment_hash, paid } = body

        if (paid && payment_hash) {
            console.log(`Lightning payment confirmed: ${payment_hash}`)

            const supabase = await createClient()

            // 1. Find user by search in metadata or memo (LNbits doesn't send metadata in webhook easily)
            // In a production app, you'd store the payment_hash in a Payment table upon creation 
            // and link it to the user.

            const { data: payment } = await supabase
                .from('Payment')
                .select('userId, description')
                .eq('transactionId', payment_hash)
                .single()

            if (payment) {
                // 2. Update Subscription
                const { data: existingSub } = await supabase
                    .from('Subscription')
                    .select('id')
                    .eq('userId', payment.userId)
                    .single()

                if (existingSub) {
                    await supabase
                        .from('Subscription')
                        .update({
                            tier: 'PREMIUM',
                            status: 'active',
                            updatedAt: new Date().toISOString()
                        })
                        .eq('userId', payment.userId)

                    // 3. Update Usage Limits
                    await supabase
                        .from('UsageLimit')
                        .upsert({
                            subscriptionId: existingSub.id,
                            horoscopeRemainingThisWeek: 999,
                            questionsRemainingThisWeek: 999,
                            updatedAt: new Date().toISOString()
                        }, { onConflict: 'subscriptionId' })

                    // 4. Update Payment Status
                    await supabase
                        .from('Payment')
                        .update({ status: 'COMPLETED' })
                        .eq('transactionId', payment_hash)
                }
            }
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Lightning Webhook error:', error)
        return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
    }
}
