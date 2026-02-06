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

                {/* Call To Action for New Users */}
                <div className="mb-12 glass-md p-6 rounded-2xl border border-white/10 max-w-2xl animate-fade-in">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">🎁 ของขวัญพิเศษสำหรับสมาชิกใหม่</h3>
                    <p className="text-purple-200 mb-6">เข้าสู่ระบบตอนนี้ รับสิทธิ์ดูดวงฟรี 2 ครั้ง และปรึกษาผู้เชี่ยวชาญทันที!</p>
                    <Link href="/auth/signin">
                        <button className="px-8 py-3 bg-gradient-to-r from-neon-violet to-accent-cyan text-white font-bold rounded-full shadow-lg hover:shadow-glow-purple transition-all transform hover:scale-105">
                            เข้าสู่ระบบด้วย LINE / Google เพื่อรับสิทธิ์
                        </button>
                    </Link>
                </div>

                {/* Section for Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-4 md:px-0 mt-8">
                    {/* Card 1: ดูดวงรายวัน */}
                    <Link href="/horoscopes/daily" passHref>
                        <div className="glass-effect p-6 rounded-xl cursor-pointer hover:shadow-glow-purple hover:shadow-glow-cyan transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-accent-magenta/20 group relative overflow-hidden">
                            <div className="absolute top-2 right-2 z-20">
                                <span className="bg-neon-violet/80 text-[10px] text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Login to Unlock</span>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-accent-cyan opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                                <h2 className="text-2xl font-bold text-secondary-gold mb-3 drop-shadow group-hover:text-neon-violet transition-colors">✨ ดูดวงรายวัน</h2>
                                <p className="text-text-muted group-hover:text-text-light transition-colors">ตรวจสอบดวงชะตาประจำวันของคุณได้ที่นี่</p>
                            </div>
                        </div>
                    </Link>

                    {/* Card 2: ไพ่ยิปซี */}
                    <Link href="/horoscopes/tarot" passHref>
                        <div className="glass-effect p-6 rounded-xl cursor-pointer hover:shadow-glow-magenta hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-accent-magenta/20 group relative overflow-hidden">
                            <div className="absolute top-2 right-2 z-20">
                                <span className="bg-green-500/80 text-[10px] text-white px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-glow-cyan animate-pulse">ดูฟรี</span>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-magenta to-secondary-gold opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                                <h2 className="text-2xl font-bold text-secondary-gold mb-3 drop-shadow group-hover:text-accent-magenta transition-colors">🔮 ไพ่ยิปซี</h2>
                                <p className="text-text-muted group-hover:text-text-light transition-colors">เปิดไพ่ทำนายเรื่องรัก การเงิน และการงาน</p>
                            </div>
                        </div>
                    </Link>

                    {/* Card 3: ศาสตร์ตัวเลข */}
                    <Link href="/horoscopes/numerology" passHref>
                        <div className="glass-effect p-6 rounded-xl cursor-pointer hover:shadow-glow-cyan hover:shadow-neon transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-accent-magenta/20 group relative overflow-hidden">
                            <div className="absolute top-2 right-2 z-20">
                                <span className="bg-green-500/80 text-[10px] text-white px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-glow-cyan animate-pulse">ดูฟรี</span>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-neon-violet opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                                <h2 className="text-2xl font-bold text-secondary-gold mb-3 drop-shadow group-hover:text-accent-cyan transition-colors">🔢 ดูดวงฟรี</h2>
                                <p className="text-text-muted group-hover:text-text-light transition-colors">ความหมายของตัวเลขที่คุณไม่เคยรู้</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Social Buttons Section at the bottom */}
            <div className="relative z-10 p-10 text-white max-w-7xl mx-auto">
                <SocialButtons />
            </div>
        </main>
    );
}