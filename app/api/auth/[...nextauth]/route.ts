import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import LineProvider from "next-auth/providers/line"
import bcrypt from "bcryptjs"
import { createClient } from "@/utils/supabase/server"

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

        const supabase = await createClient()

        // Find user in database using Supabase Client
        const { data: user } = await supabase
          .from('User')
          .select('*, subscription:Subscription(*)')
          .eq('email', credentials.email)
          .single()

        if (!user || !user.password) {
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
      if (account?.provider !== 'credentials' && user.email) {
        try {
          const supabase = await createClient()

          // Check if user exists
          const { data: existingUser } = await supabase
            .from('User')
            .select('*, subscription:Subscription(*)')
            .eq('email', user.email)
            .single()

          if (!existingUser) {
            // Create new user
            const { data: newUser, error: createError } = await supabase
              .from('User')
              .insert({
                email: user.email,
                password: '',
                fullName: user.name || user.email.split('@')[0],
                avatar: user.image,
              })
              .select()
              .single()

            if (newUser) {
              // Create subscription
              const { data: sub } = await supabase
                .from('Subscription')
                .insert({
                  userId: newUser.id,
                  tier: 'FREE_MEMBER',
                  status: 'active',
                })
                .select()
                .single()

              if (sub) {
                // Create usage limit
                await supabase
                  .from('UsageLimit')
                  .insert({
                    subscriptionId: sub.id,
                    horoscopeRemainingThisWeek: 2,
                    questionsRemainingThisWeek: 1,
                    consultationsRemainingThisWeek: 0,
                  })
              }
              console.log('Created new user via OAuth:', newUser.email)
            }
          } else if (!existingUser.subscription || existingUser.subscription.length === 0) {
            // Create subscription if missing
            const { data: sub } = await supabase
              .from('Subscription')
              .insert({
                userId: existingUser.id,
                tier: 'FREE_MEMBER',
                status: 'active',
              })
              .select()
              .single()

            if (sub) {
              await supabase
                .from('UsageLimit')
                .insert({
                  subscriptionId: sub.id,
                  horoscopeRemainingThisWeek: 2,
                  questionsRemainingThisWeek: 1,
                  consultationsRemainingThisWeek: 0,
                })
            }
          }
        } catch (error) {
          console.error('Error in signIn event:', error)
        }
      }
    }
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      return true
    },
    async jwt({ token, user, account }) {
      if (user) {
        if (account?.provider !== 'credentials' && user.email) {
          const supabase = await createClient()
          const { data: dbUser } = await supabase
            .from('User')
            .select('id')
            .eq('email', user.email)
            .single()

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
