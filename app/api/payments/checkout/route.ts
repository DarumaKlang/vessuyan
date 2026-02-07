import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Stripe from 'stripe'



export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        const { searchParams } = new URL(request.url)
        const tier = searchParams.get('tier')

        if (!session?.user?.email) {
            return NextResponse.redirect(new URL('/auth/signin', request.url))
        }

        if (tier !== 'PREMIUM') {
            return NextResponse.json({ error: 'Invalid tier' }, { status: 400 })
        }

        if (!process.env.STRIPE_SECRET_KEY) {
            console.error('Missing STRIPE_SECRET_KEY')
            return NextResponse.json({ error: 'Internal configuration error' }, { status: 500 })
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2025-02-24.acacia' as any,
        })

        // Create Stripe Checkout Session
        const checkoutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'promptpay' as any], // Support PromptPay
            line_items: [
                {
                    price_data: {
                        currency: 'thb',
                        product_data: {
                            name: 'Vessuyan Premium Membership',
                            description: 'Unlimited AI predictions and exclusive astrology features',
                        },
                        unit_amount: 29900, // 299 THB
                        recurring: {
                            interval: 'month',
                        },
                    },
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXTAUTH_URL}/payments/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXTAUTH_URL}/pricing`,
            customer_email: session.user.email,
            metadata: {
                userId: session.user.email, // Or use actual ID if available in session
                tier: 'PREMIUM',
            },
        })

        if (!checkoutSession.url) {
            throw new Error('Failed to create stripe session url')
        }

        return NextResponse.redirect(checkoutSession.url)

    } catch (error) {
        console.error('Error in Stripe Checkout:', error)
        return NextResponse.json(
            { error: 'เกิดข้อผิดพลาดในการเชื่อมต่อกับระบบชำระเงิน' },
            { status: 500 }
        )
    }
}
