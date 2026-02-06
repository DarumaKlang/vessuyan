'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

interface DashboardData {
  fullName: string
  email: string
  subscriptionTier: string
  horoscopeViewsUsed: number
  horoscopeViewsLimit: number
  questionsUsed: number
  questionsLimit: number
  consultationsUsed: number
  consultationsLimit: number
  createdAt: string
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.email) {
      fetchDashboardData()
    }
  }, [status, session])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/user/dashboard')

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data')
      }

      const data = await response.json()
      setDashboardData(data)
      setError(null)
    } catch (err) {
      console.error('Error fetching dashboard:', err)
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/auth/signin' })
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
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="glass-effect rounded-lg p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  ยินดีต้อนรับ, {session.user?.name || 'ผู้ใช้'}
                </h1>
                <p className="text-purple-200">{session.user?.email}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
              >
                ออกจากระบบ
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="glass-effect rounded-lg p-4 mb-8 bg-red-500/20 border border-red-500">
              <p className="text-red-200">{error}</p>
            </div>
          )}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Subscription Card */}
            <div className="glass-effect rounded-lg p-6 lg:col-span-1">
              <h2 className="text-xl font-bold text-white mb-4">สมาชิก</h2>
              {dashboardData ? (
                <>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-500 text-white font-semibold">
                      {dashboardData.subscriptionTier === 'PREMIUM' && '⭐ สมาชิกพรีเมียม'}
                      {dashboardData.subscriptionTier === 'FREE_MEMBER' && '📱 สมาชิกฟรี'}
                      {dashboardData.subscriptionTier === 'NON_MEMBER' && '🔓 ไม่ใช่สมาชิก'}
                    </span>
                  </div>
                  <p className="text-purple-200 mb-4">
                    สมัครสมาชิก: {new Date(dashboardData.createdAt).toLocaleDateString('th-TH')}
                  </p>
                  <div className="flex flex-col gap-4">
                    <Link href="/dashboard/profile" className="block w-full">
                      <button className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold">
                        แก้ไขโปรไฟล์
                      </button>
                    </Link>
                    {session.user?.email === 'admin@vessuyan.com' && (
                      <Link href="/admin/users" className="block w-full">
                        <button className="w-full px-4 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors font-bold shadow-lg shadow-pink-500/20">
                          ⚙️ จัดการผู้ใช้ (Admin)
                        </button>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-purple-300">กำลังโหลด...</p>
              )}
            </div>

            {/* Usage Stats Cards */}
            {dashboardData && (
              <>
                <div className="glass-effect rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">🔮 ดูหนังสือชะตา</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-purple-200">ใช้ไปแล้ว</span>
                        <span className="text-white font-semibold">
                          {dashboardData.horoscopeViewsUsed} / {dashboardData.horoscopeViewsLimit}
                        </span>
                      </div>
                      <div className="w-full bg-purple-900 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          style={{
                            width: `${(dashboardData.horoscopeViewsUsed / dashboardData.horoscopeViewsLimit) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">❓ คำถาม</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-purple-200">ใช้ไปแล้ว</span>
                        <span className="text-white font-semibold">
                          {dashboardData.questionsUsed} / {dashboardData.questionsLimit}
                        </span>
                      </div>
                      <div className="w-full bg-purple-900 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                          style={{
                            width: `${(dashboardData.questionsUsed / dashboardData.questionsLimit) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">👨‍💼 ปรึกษาผู้เชี่ยวชาญ</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-purple-200">ใช้ไปแล้ว</span>
                        <span className="text-white font-semibold">
                          {dashboardData.consultationsUsed} / {dashboardData.consultationsLimit}
                        </span>
                      </div>
                      <div className="w-full bg-purple-900 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
                          style={{
                            width: `${(dashboardData.consultationsUsed / dashboardData.consultationsLimit) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Quick Links */}
          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">ลิงค์ด่วน</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/horoscopes/daily">
                <div className="glass-effect rounded-lg p-4 hover:bg-purple-700/50 cursor-pointer transition-all">
                  <p className="text-white font-semibold">📅 หนังสือชะตาประจำวัน</p>
                </div>
              </Link>
              <Link href="/astrology/zodiact">
                <div className="glass-effect rounded-lg p-4 hover:bg-purple-700/50 cursor-pointer transition-all">
                  <p className="text-white font-semibold">♈ จักราศี</p>
                </div>
              </Link>
              <Link href="/astrology/yamathaglan">
                <div className="glass-effect rounded-lg p-4 hover:bg-purple-700/50 cursor-pointer transition-all">
                  <p className="text-white font-semibold">🕐 ยามอัฐกาล</p>
                </div>
              </Link>
              <Link href="/horoscopes/tarot">
                <div className="glass-effect rounded-lg p-4 hover:bg-purple-700/50 cursor-pointer transition-all">
                  <p className="text-white font-semibold">🎴 ไพ่ยิปซี</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
