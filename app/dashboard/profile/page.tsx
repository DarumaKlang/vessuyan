'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

interface UserProfile {
  fullName: string
  email: string
  birthDate: string | null
  birthTime: string | null
  birthCity: string | null
  avatar: string | null
  zodiacSign: string | null
  numerologyNumber: number | null
}

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    birthTime: '',
    birthCity: '',
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.email) {
      fetchProfile()
    }
  }, [status, session])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/user/profile')
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile')
      }

      const data = await response.json()
      setProfile(data)
      setFormData({
        fullName: data.fullName || '',
        birthDate: data.birthDate?.split('T')[0] || '',
        birthTime: data.birthTime || '',
        birthCity: data.birthCity || '',
      })
      setError(null)
    } catch (err) {
      console.error('Error fetching profile:', err)
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setSubmitting(true)
      setError(null)
      setSuccess(null)

      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to update profile')
      }

      setSuccess('อัปเดตโปรไฟล์สำเร็จ')
      await fetchProfile()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setSubmitting(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-300 mx-auto mb-4"></div>
            <p className="text-purple-300">กำลังโหลด...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="glass-effect rounded-lg p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">แก้ไขโปรไฟล์</h1>
                <p className="text-purple-200">{session.user?.email}</p>
              </div>
              <Link href="/dashboard">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  ← กลับไปแดชบอร์ด
                </button>
              </Link>
            </div>
          </div>

          {/* Messages */}
          {error && (
            <div className="glass-effect rounded-lg p-4 mb-6 bg-red-500/20 border border-red-500">
              <p className="text-red-200">{error}</p>
            </div>
          )}

          {success && (
            <div className="glass-effect rounded-lg p-4 mb-6 bg-green-500/20 border border-green-500">
              <p className="text-green-200">{success}</p>
            </div>
          )}

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="glass-effect rounded-lg p-6">
              <label className="block text-white font-semibold mb-3">
                ชื่อ-นามสกุล
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="กรอกชื่อ-นามสกุล"
                className="w-full px-4 py-3 bg-purple-900/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
              />
            </div>

            {/* Birth Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Birth Date */}
              <div className="glass-effect rounded-lg p-6">
                <label className="block text-white font-semibold mb-3">
                  วันเกิด
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-purple-900/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Birth Time */}
              <div className="glass-effect rounded-lg p-6">
                <label className="block text-white font-semibold mb-3">
                  เวลาเกิด (HH:MM)
                </label>
                <input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-purple-900/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Birth City */}
              <div className="glass-effect rounded-lg p-6">
                <label className="block text-white font-semibold mb-3">
                  สถานที่เกิด
                </label>
                <input
                  type="text"
                  name="birthCity"
                  value={formData.birthCity}
                  onChange={handleChange}
                  placeholder="เช่น กรุงเทพ"
                  className="w-full px-4 py-3 bg-purple-900/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-purple-400"
                />
              </div>
            </div>

            {/* Zodiac & Numerology Info (Display Only) */}
            {profile && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-effect rounded-lg p-6">
                  <label className="block text-white font-semibold mb-3">
                    ♈ จักราศี
                  </label>
                  <p className="text-purple-200">
                    {profile.zodiacSign || 'ยังไม่ได้กำหนด'}
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <label className="block text-white font-semibold mb-3">
                    🔢 เลขศาสตร์
                  </label>
                  <p className="text-purple-200">
                    {profile.numerologyNumber || 'ยังไม่ได้กำหนด'}
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'กำลังอัปเดต...' : 'บันทึกการเปลี่ยนแปลง'}
              </button>
              <button
                type="button"
                onClick={() => fetchProfile()}
                className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
              >
                ยกเลิก
              </button>
            </div>
          </form>

          {/* Danger Zone */}
          <div className="mt-12 glass-effect rounded-lg p-6 border border-red-500/50">
            <h2 className="text-xl font-bold text-red-400 mb-4">⚠️ โซนอันตราย</h2>
            <p className="text-purple-200 mb-4">
              การออกจากระบบจะลบเซสชันปัจจุบันของคุณ
            </p>
            <button
              onClick={async () => {
                if (confirm('คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?')) {
                  await signOut({ redirect: true, callbackUrl: '/auth/signin' })
                }
              }}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              ออกจากระบบ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
