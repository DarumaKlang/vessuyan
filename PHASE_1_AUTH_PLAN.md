# 🔐 Phase 1: Authentication System Implementation Plan

## ✅ ที่เสร็จแล้ว (Phase 1 Setup)

1. **Supabase Project Setup**
   - ✅ ติดตั้ง @supabase/supabase-js
   - ✅ ติดตั้ง @prisma/client และ prisma
   - ✅ สร้าง Prisma Schema (13 models, 21 tables)
   - ✅ สร้าง `.env` configuration
   - ✅ สร้าง `lib/supabase.ts` client
   - ✅ สร้าง `lib/prisma.ts` singleton

2. **Database Setup**
   - ✅ สร้าง Prisma Schema ที่มี Users, Subscriptions, Consultations, Payments เป็นต้น
   - ⏳ รอการเชื่อมต่อ Supabase และ run migration
   - ⏳ ตั้งค่า authentication policies ใน Supabase (Row Level Security)

3. **NextAuth Integration**
   - ✅ ติดตั้ง next-auth และ bcryptjs
   - ✅ สร้าง `app/api/auth/[...nextauth].ts`
   - ⏳ ตั้งค่า PrismaAdapter (รอการ setup Supabase)

---

## 🛠️ ขั้นต่อไป: Immediate Tasks (Phase 1 Completion)

### Task 1: เชื่อมต่อ Supabase และ Run Migration

**ขั้นตอน:**
1. สร้าง Supabase account: https://app.supabase.com
2. ดึง credentials (URL, Keys, DATABASE_URL)
3. ใส่ใน `.env.local` และ `.env`
4. Run migration:
```bash
npx prisma migrate dev --name init
```

**ผลลัพธ์ที่คาดหวัง:**
- Supabase database ตั้งค่าเสร็จ
- ตาราง 13 ตาราง สร้างสำเร็จ
- Prisma Client generate สำเร็จ

---

### Task 2: สร้าง Sign Up Page

**ไฟล์ที่ต้องสร้าง:** `app/auth/signup/page.tsx`

```tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { AuditLog } from '@/lib/prisma'

export default function SignUpPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    confirmPassword: '',
  })

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match')
      }

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
        })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Sign up failed')
      }

      // Redirect to sign in or auto-login
      router.push('/auth/signin?message=Signup successful')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="glass-effect w-full max-w-md p-8 rounded-xl">
          <h1 className="text-3xl font-bold gradient-text mb-6">สมัครสมาชิก</h1>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-4">
            <input
              type="text"
              placeholder="ชื่อเต็ม"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-2 bg-white/10 border border-accent-cyan/30 rounded-lg text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              placeholder="อีเมล"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-white/10 border border-accent-cyan/30 rounded-lg text-white placeholder-gray-400"
              required
            />
            <input
              type="password"
              placeholder="รหัสผ่าน"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 bg-white/10 border border-accent-cyan/30 rounded-lg text-white placeholder-gray-400"
              required
            />
            <input
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-4 py-2 bg-white/10 border border-accent-cyan/30 rounded-lg text-white placeholder-gray-400"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-gradient-to-r from-neon-violet to-accent-magenta rounded-lg font-bold hover:shadow-glow-purple disabled:opacity-50"
            >
              {loading ? 'กำลังสมัคร...' : 'สมัครสมาชิก'}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-400">
            มีบัญชีแล้ว? <a href="/auth/signin" className="text-accent-cyan hover:text-neon-violet">เข้าสู่ระบบ</a>
          </p>
        </div>
      </div>
    </div>
  )
}
```

---

### Task 3: สร้าง Sign In Page

**ไฟล์ที่ต้องสร้าง:** `app/auth/signin/page.tsx`

- Login form สำหรับ email/password
- "Remember me" option
- "Forgot password?" link

---

### Task 4: สร้าง API Routes

**ไฟล์ที่ต้องสร้าง:** 

1. `app/api/auth/signup.ts`
   - Hash password ด้วย bcryptjs
   - สร้าง User และ Subscription (FREE_MEMBER)
   - ส่ง verification email (Phase 3)

2. `app/api/auth/forgot-password.ts`
   - ส่ง reset password email
   - ตั้งค่า password reset token

3. `app/api/user/profile.ts`
   - GET: ดึง profile ปัจจุบัน
   - PUT: อัพเดท profile (birthDate, birthTime, zodiac เป็นต้น)

---

### Task 5: สร้าง User Context & Hooks

**ไฟล์ที่ต้องสร้าง:** `lib/hooks/useAuth.ts`

```typescript
export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  return {
    user: session?.user,
    isLoading: status === 'loading',
    isSignedIn: status === 'authenticated',
    signOut: () => signOut({ callbackUrl: '/' }),
    signIn: (email: string, password: string) => 
      signIn('credentials', { email, password, redirect: false })
  }
}
```

---

### Task 6: สร้าง Protected Routes Middleware

**ไฟล์ที่ต้องสร้าง:** `middleware.ts`

```typescript
import { withAuth } from "next-auth/middleware"

export const config = {
  matcher: [
    "/profile/:path*",
    "/horoscopes/:path*",
    "/consultations/:path*"
  ]
}

export default withAuth(async function middleware(req) {
  // Redirect to signin if not authenticated
  return req.nextauth
})
```

---

## 📊 Testing Checklist (Phase 1)

- [ ] Supabase connected ✓
- [ ] Database migrations successful ✓
- [ ] Sign Up page created and working
- [ ] Sign In page created and working
- [ ] Passwords hashed correctly
- [ ] User profile created on signup
- [ ] Free tier subscription assigned automatically
- [ ] Session management working
- [ ] Protected routes blocking anonymous users
- [ ] Logout functionality working
- [ ] Error messages displaying correctly

---

## 🚀 Timeline Estimate

| Task | Hours | Status |
|------|-------|--------|
| Supabase Setup | 1 | ✅ In Progress |
| Sign Up Page | 2 | ⏳ Pending |
| Sign In Page | 1.5 | ⏳ Pending |
| API Routes | 2 | ⏳ Pending |
| Auth Hooks | 1 | ⏳ Pending |
| Middleware & Protection | 1 | ⏳ Pending |
| Testing | 1.5 | ⏳ Pending |
| **Total Phase 1** | **9.5** | |

---

## 📝 Notes

- **Password Security**: ใช้ bcryptjs hash ทั้งหมด ห้ามเก็บ plaintext
- **Session Duration**: 30 days (configurable in `authOptions.session.maxAge`)
- **Email Verification**: บวกใน Phase 3
- **Social Login**: (Google, Facebook) บวกภายหลัง (Phase 2?)

---

**ถัดไป:** รอการตั้งค่า Supabase แล้วเริ่มสร้าง Sign Up / Sign In pages

