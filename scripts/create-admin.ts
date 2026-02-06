import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
    const email = 'admin@vessuyan.com'
    const password = 'Admin@2026'
    const hashedPassword = await bcrypt.hash(password, 10)

    // Check if admin already exists
    const existingUser = await prisma.user.findUnique({
        where: { email }
    })

    if (existingUser) {
        console.log('❌ Admin user already exists!')
        console.log('Email:', email)
        return
    }

    // Create admin user with subscription
    const admin = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            fullName: 'Admin',
            subscription: {
                create: {
                    tier: 'PREMIUM',
                    status: 'active',
                    usageLimit: {
                        create: {
                            horoscopeRemainingThisWeek: 999,
                            questionsRemainingThisWeek: 999,
                            consultationsRemainingThisWeek: 999,
                        }
                    }
                }
            }
        },
        include: {
            subscription: {
                include: {
                    usageLimit: true
                }
            }
        }
    })

    console.log('✅ Admin user created successfully!')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📧 Email:', email)
    console.log('🔑 Password:', password)
    console.log('👤 Name:', admin.fullName)
    console.log('⭐ Tier:', admin.subscription?.tier)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('\n🔐 Login credentials:')
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('\n🌐 Login at: http://localhost:3001/auth/signin')
}

main()
    .catch((e) => {
        console.error('Error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
