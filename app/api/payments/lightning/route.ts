import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createClient } from '@/utils/supabase/server'

const LNBITS_URL = process.env.LNBITS_URL || 'https://legend.lnbits.com'
const LNBITS_API_KEY = process.env.LNBITS_API_KEY

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { amount, tier } = await request.json() // amount in Sats or THB? 
        // Let's assume input is THB and we convert to Sats here or just use a fixed Sats amount.
        // For 299 THB, let's use a rough estimate of 25,000 Sats (Adjust as needed)
        const satsAmount = amount || 25000

        if (!LNBITS_API_KEY) {
            return NextResponse.json({ error: 'Lightning configuration missing' }, { status: 500 })
        }

        const response = await fetch(`${LNBITS_URL}/api/v1/payments`, {
            method: 'POST',
            headers: {
                'X-Api-Key': LNBITS_API_KEY,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                out: false,
                amount: satsAmount,
                memo: `Vessuyan ${tier} Subscription - ${session.user.email}`,
                expiry: 3600, // 1 hour
                unit: 'sat',
                webhook: `${process.env.NEXTAUTH_URL}/api/payments/lightning/webhook`,
            }),
        })

        if (!response.ok) {
            const err = await response.text()
            console.error('LNbits API error:', err)
            throw new Error('Failed to create Lightning invoice')
        }

        const data = await response.json()

        // 1. Store payment record in DB linked to user
        const supabase = await createClient()
        const { data: user } = await supabase
            .from('User')
            .select('id')
            .eq('email', session.user.email)
            .single()

        if (user) {
            await supabase
                .from('Payment')
                .insert({
                    userId: user.id,
                    amount: 299, // Store original THB price for reference
                    method: 'CRYPTO', // Web3 / Crypto payment
                    status: 'PENDING',
                    transactionId: data.payment_hash,
                    description: `Lightning Payment (${satsAmount} Sats) for ${tier}`
                })
        }

        // 2. Return payment_request (bolt11) and payment_hash (checking_id)
        return NextResponse.json({
            success: true,
            payment_request: data.payment_request,
            payment_hash: data.payment_hash,
            sats: satsAmount
        })

    } catch (error: any) {
        console.error('Error in Lightning payment:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

// GET method to check payment status
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const paymentHash = searchParams.get('hash')

    if (!paymentHash || !LNBITS_API_KEY) {
        return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }

    try {
        const response = await fetch(`${LNBITS_URL}/api/v1/payments/${paymentHash}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': LNBITS_API_KEY,
            },
        })

        if (!response.ok) {
            throw new Error('Failed to check payment status')
        }

        const data = await response.json()
        // If paid, data.paid will be true
        return NextResponse.json({ paid: data.paid })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
