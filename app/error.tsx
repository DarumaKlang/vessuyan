'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '@/components/Navbar'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="glass-effect rounded-lg p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="text-6xl font-bold text-red-400 mb-4">⚠️</div>
            <h1 className="text-3xl font-bold text-white mb-2">เกิดข้อผิดพลาด</h1>
            <p className="text-purple-200 mb-4">
              ขออภัย เกิดข้อผิดพลาดขึ้นในการโหลดหน้านี้
            </p>

            {error.message && (
              <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
                <p className="text-red-200 text-sm">{error.message}</p>
              </div>
            )}

            <div className="flex gap-4 flex-col">
              <button
                onClick={() => reset()}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                ลองใหม่อีกครั้ง
              </button>
              <Link href="/">
                <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  ← กลับหน้าแรก
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
