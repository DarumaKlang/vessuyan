'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const tiers = [
    {
        name: 'Free Member',
        id: 'FREE_MEMBER',
        price: '฿0',
        description: 'เริ่มต้นเส้นทางแห่งจิตวิญญาณ',
        features: [
            'ดูดวงรายวัน (2 ครั้ง/สัปดาห์)',
            'ถามคำถาม AI (1 ข้อ/สัปดาห์)',
            'เข้าถึงบทความดูดวงพื้นฐาน',
            'ระบบบันทึกดวงชะตาส่วนตัว'
        ],
        buttonText: 'เริ่มต้นใช้งานฟรี',
        highlight: false,
    },
    {
        name: 'Premium Member',
        id: 'PREMIUM',
        price: '฿299',
        pricePeriod: '/ เดือน',
        description: 'เปิดประตูสู่ความหยั่งรู้ขั้นสูงสุด',
        features: [
            'อับดุล AI (Unlimited Predictions)',
            'ดูดวงรายวัน ไม่จำกัดจำนวนครั้ง',
            'ถามคำถามเจาะลึกกับปรมาจารย์',
            'สิทธิพิเศษในการจองคิวหมอดูทีม Master',
            'ไม่มีโฆษณาคั่น',
            'วิเคราะห์ดวงชะตาแบบ Exclusive'
        ],
        buttonText: 'อัปเกรดเป็นพรีเมียม',
        highlight: true,
    }
]

export default function PricingPage() {
    const { data: session } = useSession()
    const router = useRouter()

    const handleUpgrade = (tierId: string, method: 'stripe' | 'bank' | 'crypto' = 'bank') => {
        if (!session) {
            router.push(`/auth/signin?callbackUrl=/pricing`)
            return
        }
        if (tierId === 'FREE_MEMBER') {
            router.push('/dashboard')
            return
        }

        if (method === 'stripe') {
            router.push(`/api/payments/checkout?tier=${tierId}`)
        } else if (method === 'crypto') {
            router.push(`/checkout/crypto?tier=${tierId}`)
        } else {
            router.push(`/checkout?tier=${tierId}`)
        }
    }

    return (
        <main className="relative min-h-screen bg-[#0a0612] text-white overflow-hidden">
            <Navbar />

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-7xl px-4 pt-32 pb-20 relative z-10">
                <div className="text-center space-y-4 mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                        ยกระดับดวงชะตาของคุณ
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        เลือกแพ็กเกจที่ใช่ เพื่อเข้าถึงคำพยากรณ์ที่แม่นยำและลึกซึ้งที่สุดจาก Vessuyan
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`relative flex flex-col p-8 rounded-[2.5rem] border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${tier.highlight
                                ? 'bg-gradient-to-b from-purple-900/40 to-black/60 border-yellow-500/30 shadow-[0_0_40px_rgba(234,179,8,0.1)]'
                                : 'bg-white/5 border-white/10 hover:border-white/20'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-primary-purple text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                <p className="text-gray-400 text-sm">{tier.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline">
                                <span className="text-5xl font-extrabold text-white tracking-tight">{tier.price}</span>
                                {tier.pricePeriod && (
                                    <span className="text-gray-400 ml-2">{tier.pricePeriod}</span>
                                )}
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                                        <svg className={`w-5 h-5 shrink-0 ${tier.highlight ? 'text-yellow-500' : 'text-purple-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-3">
                                <button
                                    onClick={() => handleUpgrade(tier.id, 'bank')}
                                    className={`w-full py-4 px-6 rounded-2xl font-bold transition-all transform active:scale-95 flex items-center justify-center gap-2 ${tier.highlight
                                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-400 text-primary-purple hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                                        }`}
                                >
                                    {tier.id === 'PREMIUM' && <span>📱</span>}
                                    {tier.id === 'PREMIUM' ? 'โอนเงินแจ้งสลิป (AI ตรวจสอบ)' : tier.buttonText}
                                </button>

                                {tier.id === 'PREMIUM' && (
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => handleUpgrade(tier.id, 'stripe')}
                                            className="py-3 px-4 rounded-2xl font-bold text-[10px] bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5 transition-all"
                                        >
                                            💳 บัตร / Stripe
                                        </button>
                                        {/* <button
                                            onClick={() => handleUpgrade(tier.id, 'crypto')}
                                            className="py-3 px-4 rounded-2xl font-bold text-[10px] bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 hover:text-white border border-purple-500/10 transition-all"
                                        >
                                            🪙 Crypto (Solana/BTC)
                                        </button> */}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-500 text-sm">
                        * ระบบชำระเงินมีความปลอดภัยสูง เข้ารหัสข้อมูลระดับมาตรฐานสากล <br />
                        ต้องการความช่วยเหลือเพิ่มเติม? <a href="/contact" className="text-purple-400 hover:underline">ติดต่อฝ่ายสนับสนุน</a>
                    </p>
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
