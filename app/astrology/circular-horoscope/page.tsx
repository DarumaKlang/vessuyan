// src/app/circular-horoscope/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import CircularThaiHoroscopeChart from '@/components/CircularThaiHoroscopeChart';

export default function CircularHoroscopePage() {
    return (
        <main className="relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Astrology Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-primary-purple opacity-70"></div>
            </div>
            <Navbar />

            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ดวงชะตาจักรราศี (วงกลม)</h1>
                <div className="flex justify-center my-6">
                    <CircularThaiHoroscopeChart />
                </div>
            </div>
        </main>
    );
}