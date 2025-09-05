// src/app/astrology/galakini/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import GalakiniCard from '@/components/GalakiniCard';

export default function GalakiniPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Astrology Articles Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-primary-purple opacity-70"></div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center p-8">
                <h1 className="text-4xl font-bold text-secondary-gold drop-shadow-lg">รายละเอียด 27 ฤกษ์</h1>
                
                {/* GalakiniCard Component */}
                <div className="space-y-8">
                    <GalakiniCard />
                </div>

            </div>
        </main>
    );
}