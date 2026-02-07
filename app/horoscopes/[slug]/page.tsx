'use client'

import { use } from 'react'
import Navbar from '@/components/Navbar'
import AbdulChatCard from '@/components/AbdulChatCard'
import BirthdayCalculatorCard from '@/components/BirthdayCalculatorCard'
import YamaAthaganClock from '@/components/YamaAthaganClock'
import CurrentDayCard from '@/components/CurrentDayCard'
import CurrentZodiactCard from '@/components/CurrentZodiactCard'
import TarotGame from './TarotGame'
import { notFound } from 'next/navigation'
import Image from 'next/image'

// Config สำหรับแต่ละ slug
const pageConfig = {
    abdul: {
        title: 'อับดุล ถามได้ ตอบได้',
        subtitle: '"เพ่งกระแสจิต... ค้นหาคำตอบจากจักรวาล"',
        layout: 'abdul'
    },
    daily: {
        title: 'ดูดวงรายวัน',
        subtitle: 'ตรวจสอบดวงชะตาประจำวันของคุณได้ที่นี่',
        layout: 'daily'
    },
    numerology: {
        title: '🔮 ศูนย์รวมข้อมูลมงคล',
        subtitle: 'เช็คดวงชะตา เลขมงคล และแนวทางเสริมบุญประจำวัน',
        layout: 'numerology'
    },
    tarot: {
        title: '🔮 สุ่มไพ่ยิปซี',
        subtitle: 'ตั้งสมาธิ นึกถึงสิ่งที่ต้องการคำแนะนำ แล้วเลือกไพ่ 1 ใบจากในสำรับ',
        layout: 'tarot'
    }
} as const

type PageSlug = keyof typeof pageConfig

export default function HoroscopesPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const config = pageConfig[slug as PageSlug]

    if (!config) {
        notFound()
    }

    // Render content based on layout type
    const renderContent = () => {
        switch (config.layout) {
            case 'abdul':
                return (
                    <div className="flex flex-col h-[100dvh] text-white font-sans selection:bg-purple-500/30 overflow-hidden">
                        <Navbar />
                        <main className="flex-1 flex flex-col container mx-auto max-w-4xl px-4 pt-20 overflow-hidden">
                            <AbdulChatCard />
                        </main>
                    </div>
                )

            case 'daily':
                return (
                    <main className="relative min-h-screen">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/background-vessuyan.png"
                                alt="Vessuyan Website Background"
                                fill
                                className="object-cover"
                                quality={100}
                            />
                            <div className="absolute inset-0 bg-primary-purple opacity-70"></div>
                        </div>
                        <Navbar />
                        <div className="relative z-10 flex flex-col items-center min-h-[calc(100vh-100px)] text-center text-white p-8 pt-24 md:pt-32">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-secondary-gold/30 max-w-4xl w-full">
                                <h1 className="text-4xl md:text-5xl font-bold text-secondary-gold drop-shadow-lg mb-4">{config.title}</h1>
                                <p className="text-lg text-white mb-6">{config.subtitle}</p>
                                <div className="mt-8">
                                    <BirthdayCalculatorCard />
                                </div>
                            </div>
                        </div>
                    </main>
                )

            case 'numerology':
                return (
                    <main className="relative min-h-screen bg-gradient-cosmic overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-delayed"></div>
                        </div>
                        <Navbar />
                        <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 overflow-hidden">
                            <div className="text-center mb-12 space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold gradient-text drop-shadow-glow-purple">{config.title}</h1>
                                <p className="text-purple-200 text-lg md:text-xl font-light">{config.subtitle}</p>
                                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-violet to-accent-cyan rounded-full opacity-60"></div>
                            </div>
                            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                                <div className="flex flex-col md:flex-row md:space-x-4 p-4 gap-4 items-stretch justify-center">
                                    <div className="flex-1"><YamaAthaganClock /></div>
                                    <div className="flex-1"><CurrentDayCard /></div>
                                    <div className="flex-1"><CurrentZodiactCard /></div>
                                </div>
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="glass-sm p-4 rounded-lg text-center">
                                        <h3 className="text-sm font-bold text-accent-cyan mb-2">Glass SM</h3>
                                        <p className="text-xs text-text-muted">Blur: 4px</p>
                                    </div>
                                    <div className="glass-md p-4 rounded-lg text-center">
                                        <h3 className="text-sm font-bold text-secondary-gold mb-2">Glass MD</h3>
                                        <p className="text-xs text-text-muted">Blur: 10px</p>
                                    </div>
                                    <div className="glass-lg p-4 rounded-lg text-center">
                                        <h3 className="text-sm font-bold text-neon-violet mb-2">Glass LG</h3>
                                        <p className="text-xs text-text-muted">Blur: 16px</p>
                                    </div>
                                    <div className="glass-glow-purple p-4 rounded-lg text-center">
                                        <h3 className="text-sm font-bold text-neon-violet mb-2">Glass Glow</h3>
                                        <p className="text-xs text-text-muted">With neon border</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-16 text-center text-purple-300/40 text-[10px] md:text-xs">
                                ข้อมูลนี้เป็นความเชื่อส่วนบุคคลและสถิติตามโหราศาสตร์ไทยเพื่อใช้เป็นแนวทางเบื้องต้น
                            </div>
                        </div>
                    </main>
                )

            case 'tarot':
                return <TarotGame />

            default:
                notFound()
        }
    }

    return renderContent()
}
