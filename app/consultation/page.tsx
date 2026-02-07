'use client'

import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FortuneTellerGrid from '@/components/FortuneTellerGrid'

export default function ConsultationPage() {
    return (
        <main className="relative min-h-screen bg-[#0a0612] text-white overflow-x-hidden">
            <Navbar />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 pt-32 pb-20 relative z-10">
                {/* Header Section */}
                <div className="text-center space-y-4 mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                        ทีมหมอดูผู้เชี่ยวชาญ
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        รวบรวมสุดยอดนักพยากรณ์และหมอดูระดับประเทศ ศาสตร์ทุกแขนงพร้อมช่วยเหลือคุณ
                        ปรึกษาปัญหาชีวิต ความรัก การงาน และการเงิน อย่างเจาะลึก
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-yellow-500 font-medium tracking-widest uppercase">
                        <span className="w-8 h-px bg-yellow-500/50" />
                        Vessuyan Master Team
                        <span className="w-8 h-px bg-yellow-500/50" />
                    </div>
                </div>

                {/* Fortune Teller Selection */}
                <FortuneTellerGrid />

                {/* Help Section */}
                <div className="mt-20 p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md text-center space-y-6 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white">ต้องการคำปรึกษาเร่งด่วน?</h2>
                    <p className="text-gray-400">
                        หากคุณไม่แน่ใจว่าจะเลือกคุยกับหมอคนไหน หรือต้องการสอบถามรายละเอียดเพิ่มเติม
                        ทีมงานของเราพร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://line.me/R/ti/p/@014rfhez"
                            target="_blank"
                            className="w-full sm:w-auto px-8 py-3 bg-[#06C755] hover:bg-[#05b14c] text-white rounded-full font-bold transition-all transform hover:scale-105"
                        >
                            สอบถามผ่าน LINE
                        </a>
                        <a
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold border border-white/20 transition-all transform hover:scale-105"
                        >
                            ส่งข้อความถึงเรา
                        </a>
                    </div>
                </div>
            </div>

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
