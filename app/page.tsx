'use client';

import Navbar from '@/components/Navbar';
import Link from 'next/link';
import SocialButtons from '@/components/SocialButtons';
import YamaAthaganClock from '@/components/YamaAthaganClock'; // นำเข้า Component นาฬิกายามอัฐกาล
import CurrentDayCard from '@/components/CurrentDayCard';
import CurrentZodiactCard from '@/components/CurrentZodiactCard';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-gradient-cosmic overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-cosmic opacity-80"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-delayed"></div>
            </div>

            {/* Header and Navigation */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(80vh-80px)] text-center p-8">
                {/* Site Title and Slogan */}
                <div className="mb-8 mt-16 md:mt-0 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold gradient-text drop-shadow-lg animate-pulse">
                        VESSUYAN
                    </h1>
                    <p className="mt-2 text-lg md:text-2xl text-secondary-violet drop-shadow-lg font-light">
                        ศาสตร์แห่งการทำนายที่ลึกลับและน่าค้นหา
                    </p>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-violet via-accent-cyan to-secondary-gold rounded-full opacity-60"></div>
                </div>

                {/* Section for Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-4 md:px-0 mt-12">
                    {/* Card 1: ดูดวงรายวัน */}
                    <Link href="/horoscopes/daily" passHref>
                        <div className="glass-effect p-6 rounded-xl cursor-pointer hover:shadow-glow-purple hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-accent-magenta/20 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-accent-cyan opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                                <h2 className="text-2xl font-bold text-secondary-gold mb-3 drop-shadow group-hover:text-neon-violet transition-colors">✨ ดูดวงรายวัน</h2>
                                <p className="text-text-muted group-hover:text-text-light transition-colors">ตรวจสอบดวงชะตาประจำวันของคุณได้ที่นี่</p>
                            </div>
                        </div>
                    </Link>

                    {/* Card 2: ไพ่ยิปซี */}
                    <Link href="/horoscopes/tarot" passHref>
                        <div className="glass-effect p-6 rounded-xl cursor-pointer hover:shadow-glow-magenta hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-accent-magenta/20 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-magenta to-secondary-gold opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                                <h2 className="text-2xl font-bold text-secondary-gold mb-3 drop-shadow group-hover:text-accent-magenta transition-colors">🔮 ไพ่ยิปซี</h2>
                                <p className="text-text-muted group-hover:text-text-light transition-colors">เปิดไพ่ทำนายเรื่องรัก การเงิน และการงาน</p>
                            </div>
                        </div>
                    </Link>

                    {/* Card 3: ศาสตร์ตัวเลข */}
                    <Link href="/horoscopes/numerology" passHref>
                        <div className="glass-effect p-6 rounded-xl cursor-pointer hover:shadow-glow-cyan hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-accent-magenta/20 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-neon-violet opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                                <h2 className="text-2xl font-bold text-secondary-gold mb-3 drop-shadow group-hover:text-accent-cyan transition-colors">🔢 ศาสตร์ตัวเลข</h2>
                                <p className="text-text-muted group-hover:text-text-light transition-colors">ความหมายของตัวเลขที่คุณไม่เคยรู้</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Card Component YamaAthaganClock */}
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold gradient-text mb-8 drop-shadow-lg text-center">
                    บริการของเรา
                </h2>
                <div className="flex flex-col md:flex-row md:space-x-4 p-4 gap-4 items-stretch justify-center">
                    <div className="flex-1">
                        <YamaAthaganClock />
                    </div>
                    <div className="flex-1">
                        <CurrentDayCard />
                    </div>
                    <div className="flex-1">
                        <CurrentZodiactCard />
                    </div>
                </div>

                {/* Glassmorphism Demo Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Glass SM */}
                    <div className="glass-sm p-4 rounded-lg text-center">
                        <h3 className="text-sm font-bold text-accent-cyan mb-2">Glass SM</h3>
                        <p className="text-xs text-text-muted">Blur: 4px</p>
                    </div>

                    {/* Glass MD */}
                    <div className="glass-md p-4 rounded-lg text-center">
                        <h3 className="text-sm font-bold text-secondary-gold mb-2">Glass MD</h3>
                        <p className="text-xs text-text-muted">Blur: 10px</p>
                    </div>

                    {/* Glass LG */}
                    <div className="glass-lg p-4 rounded-lg text-center">
                        <h3 className="text-sm font-bold text-neon-violet mb-2">Glass LG</h3>
                        <p className="text-xs text-text-muted">Blur: 16px</p>
                    </div>

                    {/* Glass Glow */}
                    <div className="glass-glow-purple p-4 rounded-lg text-center">
                        <h3 className="text-sm font-bold text-neon-violet mb-2">Glass Glow</h3>
                        <p className="text-xs text-text-muted">With neon border</p>
                    </div>
                </div>
            </div>

            {/* Social Buttons Section at the bottom */}
            <div className="relative z-10 p-10 text-white max-w-7xl mx-auto">
                <SocialButtons />
            </div>
        </main>
    );
}