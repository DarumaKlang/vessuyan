'use client'

import React, { useState, Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

function ManualCheckoutContent() {
    const { data: session } = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    const tier = searchParams.get('tier') || 'PREMIUM'

    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0]
            setFile(selectedFile)
            setPreview(URL.createObjectURL(selectedFile))
            setError(null)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!file) {
            setError('กรุณาอัปโหลดรูปภาพสลิป')
            return
        }

        try {
            setUploading(true)
            setError(null)

            const formData = new FormData()
            formData.append('slip', file)
            formData.append('tier', tier)

            const response = await fetch('/api/payments/slip', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || 'การอัปโหลดล้มเหลว')
            }

            setSuccess(true)
            // Redirect after a short delay
            setTimeout(() => {
                router.push('/dashboard')
            }, 3000)

        } catch (err: any) {
            setError(err.message)
        } finally {
            setUploading(false)
        }
    }

    if (success) {
        return (
            <main className="relative min-h-screen bg-[#0a0612] text-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="max-w-md w-full glass-effect p-10 rounded-[2.5rem] border border-yellow-500/30 text-center space-y-6">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-4xl">
                            ✅
                        </div>
                        <h1 className="text-2xl font-bold">อัปโหลดสลิปสำเร็จ!</h1>
                        <p className="text-gray-400">
                            AI และทีมงานกำลังตรวจสอบสลิปของคุณ <br />
                            เมื่อตรวจสอบเรียบร้อย สิทธิ์ของคุณจะถูกอัปเกรดโดยอัตโนมัติ
                        </p>
                        <p className="text-yellow-500 text-sm font-medium animate-pulse">
                            กำลังพาท่านกลับไปยัง Dashboard...
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="relative min-h-screen bg-[#0a0612] text-white overflow-hidden flex flex-col">
            <Navbar />

            <div className="flex-1 container mx-auto max-w-4xl px-4 pt-32 pb-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left: Bank Info */}
                    <div className="space-y-8 animate-fade-in">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">ชำระเงินผ่านการโอนเงิน</h1>
                            <p className="text-gray-400">
                                โอนเงินเข้าบัญชีตามรายละเอียดด้านล่าง <br />
                                และอัปโหลดสลิปเพื่อให้ AI ตรวจสอบทันที
                            </p>
                        </div>

                        <div className="glass-effect p-6 rounded-3xl border border-white/10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center font-bold">K</div>
                                <div>
                                    <p className="text-sm text-gray-400">ธนาคารกสิกรไทย</p>
                                    <p className="font-bold text-lg">123-4-56789-0</p>
                                    <p className="text-sm font-medium">บจก. เวสสุวัณ เทคโนโลยี</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5 space-y-4">
                                <p className="text-sm text-gray-400 text-center">สแกนเพื่อจ่าย (QR PromptPay)</p>
                                <div className="bg-white p-4 rounded-xl max-w-[200px] mx-auto">
                                    {/* Placeholder QR Code image or using a library */}
                                    <div className="aspect-square bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                                        QR CODE
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-500/10 p-4 rounded-2xl border border-yellow-500/20">
                                <p className="text-xs text-yellow-500 font-medium leading-relaxed">
                                    * ยอดโอนที่ต้องการ: <span className="text-lg font-bold">฿299.00</span> <br />
                                    กรุณาโอนยอดเงินให้ตรงตามที่ระบุเพื่อให้ AI ตรวจสอบได้แม่นยำที่สุด
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Upload Section */}
                    <div className="animate-fade-in-delay">
                        <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-[2.5rem] border border-white/10 space-y-6 flex flex-col h-full">
                            <h2 className="text-xl font-bold">อัปโหลดสลิป</h2>

                            {!preview ? (
                                <label className="flex-1 border-2 border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center p-8 cursor-pointer hover:border-purple-500/50 hover:bg-white/5 transition-all group">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                                        📸
                                    </div>
                                    <p className="font-bold">กดเพื่อเลือกรูปภาพสลิป</p>
                                    <p className="text-sm text-gray-500 mt-2">ไฟล์ JPG, PNG หรือ PDF</p>
                                    <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                </label>
                            ) : (
                                <div className="relative flex-1 rounded-3xl overflow-hidden border border-white/10">
                                    <img src={preview} alt="Slip Preview" className="w-full h-full object-contain bg-black/40" />
                                    <button
                                        type="button"
                                        onClick={() => { setFile(null); setPreview(null) }}
                                        className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )}

                            {error && (
                                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-200 text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={uploading || !file}
                                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center ${uploading || !file
                                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20 hover:scale-[1.02]'
                                    }`}
                            >
                                {uploading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-3"></div>
                                        กำลังตรวจสอบโดย AI...
                                    </>
                                ) : (
                                    'ยืนยันการโอนเงิน'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fade-in-delay {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
                .animate-fade-in-delay {
                    animation: fade-in-delay 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                    animation-delay: 0.2s;
                    opacity: 0;
                }
            `}</style>
        </main>
    )
}

export default function ManualCheckoutPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0a0612] text-white flex items-center justify-center">Loading...</div>}>
            <ManualCheckoutContent />
        </Suspense>
    )
}
