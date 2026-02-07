import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/utils/supabase/server'



const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: NextRequest) {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')!

    let event: Stripe.Event

    try {
        if (!process.env.STRIPE_SECRET_KEY || !webhookSecret) {
            console.error('Missing Stripe configuration')
            return NextResponse.json({ error: 'Configuration Error' }, { status: 500 })
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2025-02-24.acacia' as any,
        })

        event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`)
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 })
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session
        const userEmail = session.metadata?.userId || session.customer_email

        if (userEmail) {
            console.log(`Payment confirmed for user: ${userEmail}`)

            const supabase = await createClient()

            // 1. Get User ID from email
            const { data: user } = await supabase
                .from('User')
                .select('id')
                .eq('email', userEmail)
                .single()

            if (user) {
                // 2. Update or Create Subscription
                const tier = session.metadata?.tier || 'PREMIUM'

                // Get current subscription to see if it exists
                const { data: existingSub } = await supabase
                    .from('Subscription')
                    .select('id')
                    .eq('userId', user.id)
                    .single()

                if (existingSub) {
                    await supabase
                        .from('Subscription')
                        .update({
                            tier,
                            status: 'active',
                            updatedAt: new Date().toISOString()
                        })
                        .eq('userId', user.id)
                } else {
                    await supabase
                        .from('Subscription')
                        .insert({
                            userId: user.id,
                            tier,
                            status: 'active'
                        })
                }

                // 3. Update Usage Limits (Grant PREMIUM perks)
                const { data: sub } = await supabase
                    .from('Subscription')
                    .select('id')
                    .eq('userId', user.id)
                    .single()

                if (sub) {
                    await supabase
                        .from('UsageLimit')
                        .upsert({
                            subscriptionId: sub.id,
                            horoscopeRemainingThisWeek: 999, // Unlimited
                            questionsRemainingThisWeek: 999,
                            consultationsRemainingThisWeek: 10,
                            updatedAt: new Date().toISOString()
                        }, { onConflict: 'subscriptionId' })
                }
            }
        }
    }

    return NextResponse.json({ received: true })
}

// Disable Next.js body parsing for Stripe Webhook
export const dynamic = 'force-dynamic'
