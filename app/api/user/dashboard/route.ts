import { getServerSession } from 'next-auth'
import { createClient } from '@/utils/supabase/server'
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

    const supabase = await createClient()

    // Fetch user with subscription and usage limits using Supabase Client
    const { data: user, error: userError } = await supabase
      .from('User')
      .select(`
        *,
        subscription:Subscription (
          *,
          usageLimit:UsageLimit (*)
        )
      `)
      .eq('email', session.user.email)
      .single()

    if (userError || !user) {
      console.error('Error fetching user from Supabase:', userError)
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Adapt to the response format expected by the frontend
    return NextResponse.json({
      fullName: user.fullName,
      email: user.email,
      subscriptionTier: user.subscription?.[0]?.tier || 'NON_MEMBER',
      horoscopeViewsUsed: 0,
      horoscopeViewsLimit: user.subscription?.[0]?.usageLimit?.[0]?.horoscopeRemainingThisWeek || 2,
      questionsUsed: 0,
      questionsLimit: user.subscription?.[0]?.usageLimit?.[0]?.questionsRemainingThisWeek || 1,
      consultationsUsed: 0,
      consultationsLimit: user.subscription?.[0]?.usageLimit?.[0]?.consultationsRemainingThisWeek || 0,
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
