import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Fetch user with subscription and usage limits
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        subscription: {
          include: {
            usageLimit: true,
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      fullName: user.fullName,
      email: user.email,
      subscriptionTier: user.subscription?.tier || 'NON_MEMBER',
      horoscopeViewsUsed: 0, // Placeholder - would need to query HoroscopeView model
      horoscopeViewsLimit: user.subscription?.usageLimit?.horoscopeRemainingThisWeek || 2,
      questionsUsed: 0, // Placeholder - would need to query Question model
      questionsLimit: user.subscription?.usageLimit?.questionsRemainingThisWeek || 1,
      consultationsUsed: 0, // Placeholder - would need to query Consultation model
      consultationsLimit: user.subscription?.usageLimit?.consultationsRemainingThisWeek || 0,
      createdAt: user.createdAt,
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
