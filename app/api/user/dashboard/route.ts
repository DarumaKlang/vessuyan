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

    // Handle both object and array formats from Supabase relation joins
    const sub = Array.isArray(user.subscription) ? user.subscription[0] : (user.subscription || null)
    const usage = sub && Array.isArray(sub.usageLimit) ? sub.usageLimit[0] : (sub?.usageLimit || null)

    // Adapt to the response format expected by the frontend
    return NextResponse.json({
      fullName: user.fullName,
      email: user.email,
      subscriptionTier: sub?.tier || 'NON_MEMBER',
      horoscopeViewsUsed: 0,
      horoscopeViewsLimit: usage?.horoscopeRemainingThisWeek || 2,
      questionsUsed: 0,
      questionsLimit: usage?.questionsRemainingThisWeek || 1,
      consultationsUsed: 0,
      consultationsLimit: usage?.consultationsRemainingThisWeek || 0,
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
