// src/app/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                    {/* Card 1: ดูดวงรายวัน */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
                        <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ดูดวงรายวัน</h2>
                        <p className="text-white">ตรวจสอบดวงชะตาประจำวันของคุณได้ที่นี่</p>
                    </div>

                    {/* Card 2: ไพ่ยิปซี */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
                        <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ไพ่ยิปซี</h2>
                        <p className="text-white">เปิดไพ่ทำนายเรื่องรัก การเงิน และการงาน</p>
                    </div>

                    {/* Card 3: ศาสตร์ตัวเลข */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
                        <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ศาสตร์ตัวเลข</h2>
                        <p className="text-white">ความหมายของตัวเลขที่คุณไม่เคยรู้</p>
                    </div>
                </div>
            </div>
        </main>
    );
}