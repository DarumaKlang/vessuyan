'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import SocialButtons from '@/components/SocialButtons';
import YamaAthaganClock from '@/components/YamaAthaganClock'; // นำเข้า Component นาฬิกายามอัฐกาล
import CurrentDayCard from '@/components/CurrentDayCard';
import CurrentZodiactCard from '@/components/CurrentZodiactCard';

export default function Home() {
    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
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

            {/* Header and Navigation */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center text-white p-8">
                {/* Site Title and Slogan */}
                <div className="mb-8 mt-16 md:mt-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-secondary-gold drop-shadow-lg">VESSUYAN</h1>
                    <p className="mt-2 text-md md:text-xl text-white drop-shadow">ศาสตร์แห่งการทำนายที่น่าเชื่อถือ</p>
                </div>

                {/* Section for Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-4 md:px-0">
                    {/* Card 1: ดูดวงรายวัน */}
                    <Link href="/horoscopes/daily" passHref>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 cursor-pointer hover:bg-white/20 transition-all">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ดูดวงรายวัน</h2>
                            <p className="text-white">ตรวจสอบดวงชะตาประจำวันของคุณได้ที่นี่</p>
                        </div>
                    </Link>

                    {/* Card 2: ไพ่ยิปซี */}
                    <Link href="/horoscopes/tarot" passHref>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 cursor-pointer hover:bg-white/20 transition-all">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ไพ่ยิปซี</h2>
                            <p className="text-white">เปิดไพ่ทำนายเรื่องรัก การเงิน และการงาน</p>
                        </div>
                    </Link>

                    {/* Card 3: ศาสตร์ตัวเลข */}
                    <Link href="/horoscopes/numerology" passHref>
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 cursor-pointer hover:bg-white/20 transition-all">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ศาสตร์ตัวเลข</h2>
                            <p className="text-white">ความหมายของตัวเลขที่คุณไม่เคยรู้</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Card Component YamaAthaganClock */}
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">
                    บริการของเรา
                </h1>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-8 p-4 items-stretch justify-center">
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
            </div>

            {/* Social Buttons Section at the bottom */}
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <SocialButtons />
            </div>
        </main>
    );
}