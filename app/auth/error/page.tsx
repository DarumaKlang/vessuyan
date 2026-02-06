import { Suspense } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

async function ErrorContent({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  const errorCode = params.error || 'unknown'

  const errorMessages: Record<string, { title: string; description: string }> = {
    Callback: {
      title: 'ข้อผิดพลาดในการเรียกกลับ',
      description: 'มีปัญหาในการเชื่อมต่อกับ OAuth provider',
    },
    OAuthSignin: {
      title: 'ข้อผิดพลาด OAuth',
      description: 'มีปัญหาในการลงชื่อเข้าใช้ OAuth',
    },
    OAuthCallback: {
      title: 'ข้อผิดพลาด OAuth Callback',
      description: 'มีปัญหาในการประมวลผลการตอบกลับ OAuth',
    },
    EmailCreateAccount: {
      title: 'ไม่สามารถสร้างบัญชี',
      description: 'ไม่สามารถสร้างบัญชีผู้ใช้ด้วยที่อยู่อีเมล',
    },
    Callback_new_user: {
      title: 'ผู้ใช้ใหม่',
      description: 'ปัญหาในการเชื่อมต่อผู้ใช้ใหม่',
    },
    EmailSignInError: {
      title: 'ข้อผิดพลาดในการลงชื่อเข้าใช้ Email',
      description: 'ไม่สามารถส่งอีเมลการลงชื่อเข้าใช้ได้',
    },
    AccessDenied: {
      title: 'เข้าถึงถูกปฏิเสธ',
      description: 'คุณไม่มีสิทธิ์ในการเข้าถึงทรัพยากรนี้',
    },
    Verification: {
      title: 'ข้อผิดพลาดในการตรวจสอบ',
      description: 'โทเค็นการตรวจสอบหมดอายุหรือไม่ถูกต้อง',
    },
    SessionCallback: {
      title: 'ข้อผิดพลาดในการตั้งค่าเซสชั่น',
      description: 'มีปัญหาในการตั้งค่าเซสชั่น',
    },
    CredentialsSignin: {
      title: 'เข้าสู่ระบบไม่สำเร็จ',
      description: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
    },
    unknown: {
      title: 'ข้อผิดพลาดที่ไม่ทราบ',
      description: 'เกิดข้อผิดพลาดที่ไม่คาดคิด โปรดลองใหม่',
    },
  }

  const error = errorMessages[errorCode] || errorMessages['unknown']

  return (
    <div className="flex items-center justify-center min-h-screen pt-20 px-4">
      <div className="glass-effect rounded-lg p-8 max-w-md w-full">
        <div className="text-center">
          <div className="text-6xl font-bold text-red-400 mb-4">🔐</div>
          <h1 className="text-3xl font-bold text-white mb-2">{error.title}</h1>
          <p className="text-purple-200 mb-6">{error.description}</p>

          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
            <p className="text-red-200 text-sm">รหัสข้อผิดพลาด: {errorCode}</p>
          </div>

          <div className="flex gap-4 flex-col">
            <Link href="/auth/signin">
              <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                ← กลับไปลงชื่อเข้าใช้
              </button>
            </Link>
            <Link href="/">
              <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                ← กลับหน้าแรก
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <Navbar />

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-300 mx-auto mb-4"></div>
              <p className="text-purple-300">กำลังโหลด...</p>
            </div>
          </div>
        }
      >
        <ErrorContent searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
