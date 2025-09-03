// src/app/starlore/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import StarLoreCard from '@/components/StarLoreCard';

export default function StarlorePage() {
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
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg">รายละเอียด 27 ฤกษ์</h1>

                {/* StarLoreCard Component */}
                <div className="space-y-12">
                    <StarLoreCard />
                </div>
            </div>
        </main>
    );
}