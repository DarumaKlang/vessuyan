import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const SOLANA_WALLET_ADDRESS = process.env.SOLANA_WALLET_ADDRESS

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        if (!SOLANA_WALLET_ADDRESS) {
            return NextResponse.json({ error: 'Solana wallet not configured' }, { status: 500 })
        }

        // Return the target wallet and a unique reference/memo for the user to include
        // In a real app, you'd use Solana Pay or verify tx on-chain
        return NextResponse.json({
            success: true,
            wallet: SOLANA_WALLET_ADDRESS,
            memo: `Vessuyan-PREMIUM-${session.user.email.substring(0, 8)}`,
            priceInSol: 0.05, // Rough estimate for 299 THB (Adjust as needed)
            priceInUsdc: 9.00
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
