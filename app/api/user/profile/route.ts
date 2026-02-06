import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const supabase = await createClient()

    // Fetch user with profile relation
    const { data: user, error: userError } = await supabase
      .from('User')
      .select('*, profile:UserProfile(*)')
      .eq('email', session.user.email)
      .single()

    if (userError || !user) {
      console.error('Error fetching user from Supabase:', userError)
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Handle both object and potentially array format from joined relation
    const profile = Array.isArray(user.profile) ? user.profile[0] : user.profile

    return NextResponse.json({
      fullName: user.fullName,
      email: user.email,
      birthDate: user.birthDate,
      birthTime: user.birthTime,
      birthCity: user.birthCity,
      avatar: user.avatar,
      zodiacSign: profile?.zodiacSign || null,
      numerologyNumber: profile?.numerologyNumber || null,
    })
  } catch (error) {
    console.error('Error in GET /api/user/profile:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { fullName, birthDate, birthTime, birthCity } = body

    // Validate input
    if (!fullName || fullName.trim() === '') {
      return NextResponse.json(
        { error: 'Full name is required' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Update user
    const { data: user, error: updateError } = await supabase
      .from('User')
      .update({
        fullName: fullName.trim(),
        birthDate: birthDate ? new Date(birthDate).toISOString() : null,
        birthTime: birthTime || null,
        birthCity: birthCity || null,
      })
      .eq('email', session.user.email)
      .select()
      .single()

    if (updateError) {
      console.error('Error updating profile in Supabase:', updateError)
      return NextResponse.json(
        { error: 'Failed to update profile' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        fullName: user.fullName,
        email: user.email,
        birthDate: user.birthDate,
        birthTime: user.birthTime,
        birthCity: user.birthCity,
      },
    })
  } catch (error) {
    console.error('Error in PUT /api/user/profile:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
