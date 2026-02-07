'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SuccessPage() {
    return (
        <main className="relative min-h-screen bg-[#0a0612] text-white flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center container mx-auto px-4 pt-20">
                <div className="max-w-md w-full glass-effect p-10 rounded-[2.5rem] border border-yellow-500/30 text-center space-y-8 animate-fade-in relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_20px_rgba(234,179,8,0.5)]" />

                    <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto text-5xl shadow-inner border border-yellow-500/20">
                        ✨
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                            ยินดีต้อนรับสู่ Premium!
                        </h1>
                        <p className="text-gray-400">
                            การชำระเงินของคุณสำเร็จแล้ว สิทธิ์ความเป็นพรีเมียมของคุณถูกเปิดใช้งานเรียบร้อย ขอให้มีความสุขกับคำพยากรณ์ที่แม่นยำที่สุด
                        </p>
                    </div>

                    <div className="pt-4 space-y-3">
                        <Link href="/dashboard" className="block">
                            <button className="w-full py-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-primary-purple font-bold rounded-2xl transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                                ไปที่ Dashboard
                            </button>
                        </Link>
                        <Link href="/horoscopes/abdul" className="block">
                            <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/10">
                                คุยกับอับดุล AI ทันที
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
            `}</style>
        </main>
    )
}
