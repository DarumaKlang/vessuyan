'use client'

import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'

function SignInContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<string>('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    // Show success message if user just registered
    if (searchParams.get('registered') === 'true') {
      setSuccess('สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบด้วยอีเมลและรหัสผ่านของคุณ')
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.email.trim() || !formData.password) {
      setError('Please enter email and password')
      return
    }

    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (!result?.ok) {
        setError(result?.error || 'Invalid email or password')
        return
      }

      // Redirect to dashboard
      router.push('/dashboard')
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      {/* Background image */}
      <Image
        src="/background-vessuyan.png"
        alt="Background"
        fill
        className="object-cover"
        quality={75}
        priority
      />

      {/* Glass card container */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass-lg rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-purple via-secondary-gold to-primary-purple bg-clip-text text-transparent mb-2">
              เข้าสู่ระบบ
            </h1>
            <p className="text-gray-300 text-sm">ยินดีต้อนรับกลับมา Vessuyan</p>
          </div>

          {/* Success message */}
          {success && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-200 text-sm">{success}</p>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                อีเมล
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-gold focus:ring-2 focus:ring-secondary-gold/30 transition"
                placeholder="your@email.com"
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                รหัสผ่าน
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary-gold focus:ring-2 focus:ring-secondary-gold/30 transition"
                placeholder="••••••"
                disabled={isLoading}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-primary-purple to-secondary-gold hover:from-primary-purple/80 hover:to-secondary-gold/80 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0f0a1c] text-gray-400">หรือเข้าสู่ระบบด้วย</span>
            </div>
          </div>

          {/* Social login buttons */}
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => signIn('google')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button
              onClick={() => signIn('line')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 text-white rounded-lg transition"
            >
              <svg className="w-5 h-5 fill-[#06C755]" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.017 10 8.951 0 4.935-4.486 8.951-10 8.951-1.001 0-1.956-.126-2.839-.364l-2.756 1.144c-.235.1-.497.108-.731-.01-.235-.119-.404-.34-.457-.597l-.234-1.125c-1.841-1.821-3.143-4.46-3.143-7.5l.001-.499c0-4.934 4.487-8.951 10.001-8.951zm-4.706 7.827c-.394 0-.713.319-.713.713v3.313c0 .394.319.712.713.712.394 0 .713-.318.713-.712v-3.313c0-.394-.319-.713-.713-.713zm2.597 0c-.394 0-.713.319-.713.713v3.313c0 .189.075.37.209.504.134.133.314.209.504.209h2.387c.394 0 .713-.319.713-.713 0-.394-.319-.713-.713-.713h-1.674v-1.141h1.674c.394 0 .713-.319.713-.713 0-.393-.319-.712-.713-.712h-1.674v-1.047h1.674c.394 0 .713-.319.713-.713s-.319-.713-.713-.713h-2.387zm6.732 0c-.394 0-.713.319-.713.713v1.86l-2.022-2.289c-.116-.131-.274-.216-.445-.24-.17-.024-.343.018-.485.117-.116.08-.2.199-.241.334s-.034.281.018.411l1.459 3.633c.066.166.196.3.361.371.077.034.159.051.242.051h.001c.219 0 .425-.101.558-.274l1.119-1.464v1.026c0 .394.319.713.713.713.394 0 .713-.319.713-.713v-3.313c0-.394-.319-.713-.713-.713z" />
              </svg>
              LINE
            </button>
            <button
              onClick={() => signIn('tiktok')}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg transition"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c.01 2.32-.41 4.67-1.95 6.44-1.54 1.77-3.9 2.72-6.22 2.65-2.32.07-4.68-.89-6.22-2.65-1.54-1.77-1.96-4.12-1.95-6.44.01-2.32.41-4.67 1.95-6.44 1.54-1.77 3.9-2.72 6.22-2.65 1.05-.03 2.11.17 3.09.61V.02z" />
              </svg>
              TikTok
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-gray-300 text-sm mt-6">
            ยังไม่มีบัญชี?{' '}
            <Link href="/auth/signup" className="text-secondary-gold hover:text-secondary-gold/80 font-medium transition">
              สมัครสมาชิก
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SignInContent />
    </Suspense>
  )
}
