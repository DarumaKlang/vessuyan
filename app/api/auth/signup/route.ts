import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, fullName } = body

    // Validation
    if (!email || !password || !fullName) {
      return NextResponse.json(
        { error: 'Email, password, and full name are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user with subscription and usage limit in a transaction
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        subscription: {
          create: {
            tier: 'FREE_MEMBER',
            status: 'active',
            usageLimit: {
              create: {
                horoscopeRemainingThisWeek: 2,
                questionsRemainingThisWeek: 1,
                consultationsRemainingThisWeek: 0,
              },
            },
          },
        },
      },
      include: {
        subscription: {
          include: {
            usageLimit: true,
          },
        },
      },
    })

    // Return success response (excluding password)
    const { password: _, ...userWithoutPassword } = user
    return NextResponse.json(
      {
        message: 'User created successfully',
        user: userWithoutPassword,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
