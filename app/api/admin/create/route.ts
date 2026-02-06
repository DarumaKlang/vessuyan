import { createClient } from '@/utils/supabase/server'
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { secret } = await request.json()

        // Simple security check
        if (secret !== 'create-admin-2026') {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const email = 'admin@vessuyan.com'
        const password = 'Admin@2026'
        const hashedPassword = await bcrypt.hash(password, 10)

        const supabase = await createClient()

        // Check if admin already exists
        const { data: existingUser } = await supabase
            .from('User')
            .select('id')
            .eq('email', email)
            .single()

        if (existingUser) {
            return NextResponse.json({
                message: 'Admin user already exists!',
                email,
            })
        }

        // Create admin user
        const { data: admin, error: adminError } = await supabase
            .from('User')
            .insert({
                email,
                password: hashedPassword,
                fullName: 'Admin',
            })
            .select()
            .single()

        if (adminError || !admin) {
            throw adminError || new Error('Failed to create admin user')
        }

        // Create subscription
        const { data: subscription, error: subError } = await supabase
            .from('Subscription')
            .insert({
                userId: admin.id,
                tier: 'PREMIUM',
                status: 'active',
                autoRenew: true,
            })
            .select()
            .single()

        if (subError || !subscription) {
            throw subError || new Error('Failed to create subscription')
        }

        // Create usage limit
        const { error: limitError } = await supabase
            .from('UsageLimit')
            .insert({
                subscriptionId: subscription.id,
                horoscopeRemainingThisWeek: 999,
                questionsRemainingThisWeek: 999,
                consultationsRemainingThisWeek: 999,
            })

        if (limitError) {
            throw limitError
        }

        return NextResponse.json({
            success: true,
            message: 'Admin user created successfully!',
            credentials: {
                email,
                password,
                tier: 'PREMIUM',
                loginUrl: '/auth/signin'
            }
        })
    } catch (error) {
        console.error('Error creating admin:', error)
        return NextResponse.json(
            { error: 'Internal Server Error', details: String(error) },
            { status: 500 }
        )
    }
}
