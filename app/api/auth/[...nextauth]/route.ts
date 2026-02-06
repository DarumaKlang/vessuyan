import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import LineProvider from "next-auth/providers/line"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials")
        }

        // Find user in database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: {
            subscription: {
              include: { usageLimit: true }
            }
          }
        })

        if (!user) {
          throw new Error("Invalid email or password")
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordValid) {
          throw new Error("Invalid email or password")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.fullName,
          image: user.avatar,
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
    }),
    {
      id: "tiktok",
      name: "TikTok",
      type: "oauth",
      clientId: process.env.TIKTOK_CLIENT_ID!,
      clientSecret: process.env.TIKTOK_CLIENT_SECRET!,
      authorization: {
        url: "https://www.tiktok.com/v2/auth/authorize/",
        params: { scope: "user.info.basic" },
      },
      token: "https://open.tiktokapis.com/v2/oauth/token/",
      userinfo: "https://open.tiktokapis.com/v2/user/info/",
      profile(profile: any) {
        return {
          id: profile.data.user.open_id,
          name: profile.data.user.display_name,
          email: profile.data.user.email,
          image: profile.data.user.avatar_url,
        }
      },
    } as any,
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      // Only handle OAuth providers (not credentials)
      if (account?.provider !== 'credentials' && user.email) {
        try {
          // Check if user exists
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
            include: { subscription: true }
          })

          if (!existingUser) {
            // Create new user with subscription
            const newUser = await prisma.user.create({
              data: {
                email: user.email,
                password: '', // Empty password for OAuth users
                fullName: user.name || user.email.split('@')[0],
                avatar: user.image,
                subscription: {
                  create: {
                    tier: 'FREE_MEMBER',
                    status: 'active',
                    usageLimit: {
                      create: {
                        horoscopeRemainingThisWeek: 2,
                        questionsRemainingThisWeek: 1,
                        consultationsRemainingThisWeek: 0,
                      }
                    }
                  }
                }
              }
            })
            console.log('Created new user via OAuth:', newUser.email)
          } else if (!existingUser.subscription) {
            // User exists but no subscription, create one
            await prisma.subscription.create({
              data: {
                userId: existingUser.id,
                tier: 'FREE_MEMBER',
                status: 'active',
                usageLimit: {
                  create: {
                    horoscopeRemainingThisWeek: 2,
                    questionsRemainingThisWeek: 1,
                    consultationsRemainingThisWeek: 0,
                  }
                }
              }
            })
            console.log('Created subscription for existing user:', existingUser.email)
          }
        } catch (error) {
          console.error('Error in signIn event:', error)
        }
      }
    }
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Allow all sign-ins
      return true
    },
    async jwt({ token, user, account }) {
      if (user) {
        // For OAuth, fetch the user from database to get the correct ID
        if (account?.provider !== 'credentials' && user.email) {
          const dbUser = await prisma.user.findUnique({
            where: { email: user.email }
          })
          if (dbUser) {
            token.id = dbUser.id
          }
        } else {
          token.id = user.id
        }
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id as string
      }
      return session
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
