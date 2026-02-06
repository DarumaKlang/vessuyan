import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)

        // Security check: Only admin@vessuyan.com can access this
        if (!session?.user?.email || session.user.email !== 'admin@vessuyan.com') {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        )

        // Fetch all users with their current membership status
        const { data: users, error: usersError } = await supabase
            .from('User')
            .select(`
        id,
        email,
        fullName,
        createdAt,
        subscription:Subscription (
          id,
          tier,
          status,
          endDate,
          usageLimit:UsageLimit (*)
        )
      `)
            .order('createdAt', { ascending: false })

        if (usersError) {
            console.error('Error fetching users from Supabase:', usersError)
            return NextResponse.json(
                { error: 'Failed to fetch users' },
                { status: 500 }
            )
        }

        // Adapt the response format
        const formattedUsers = users.map(user => {
            // Handle both object and array formats from Supabase relation joins
            const sub = Array.isArray(user.subscription) ? user.subscription[0] : (user.subscription || null)
            const usage = sub && Array.isArray(sub.usageLimit) ? sub.usageLimit[0] : (sub?.usageLimit || null)

            return {
                id: user.id,
                email: user.email,
                fullName: user.fullName || 'Anonymous User',
                createdAt: user.createdAt,
                tier: sub?.tier || 'NON_MEMBER',
                status: sub?.status || 'N/A',
                endDate: sub?.endDate || null,
                usage: usage || null
            }
        })

        return NextResponse.json(formattedUsers)
    } catch (error) {
        console.error('Error in GET /api/admin/users:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
