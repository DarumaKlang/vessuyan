// src/app/horoscopes/daily/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import BirthdayCalculatorCard from '@/components/BirthdayCalculatorCard';

export default function DailyHoroscopePage() {
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

            {/* Page Content */}
            <div className="relative z-10 flex flex-col items-center min-h-[calc(100vh-100px)] text-center text-white p-8 pt-24 md:pt-32">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-secondary-gold/30 max-w-4xl w-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-gold drop-shadow-lg mb-4">ดูดวงรายวัน</h1>
                    <p className="text-lg text-white mb-6">ตรวจสอบดวงชะตาประจำวันของคุณได้ที่นี่</p>
                    
                    {/* Birthday Calculator Card Component */}
                    <div className="mt-8">
                        <BirthdayCalculatorCard />
                    </div>
                    
                </div>
            </div>
        </main>
    );
}
