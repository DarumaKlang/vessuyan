// src/app/astrology/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AstrologyPage() {
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg">บทความโหราศาสตร์และไพ่ยิปซี</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Article Card 1: Sunday Time */}
                    <Link href="/astrology/sunday/time" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันอาทิตย์ ๑</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 2: Monday Time */}
                    <Link href="#" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันจันทร์ ๒</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 3: Tuesday Time */}
                    <Link href="#" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันอังคาร ๓</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 4: Wednesday Time */}
                    <Link href="#" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันพุธ ๔</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 5: Thursday Time */}
                    <Link href="#" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันพฤหัส ๕</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 6: Friday Time */}
                    <Link href="#" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันศุกร์ ๖</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 7: Saturday Time */}
                    <Link href="#" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันเสาร์ ๗</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Add more cards here */}

                </div>
            </div>
        </main>
    );
}