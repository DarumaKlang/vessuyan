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
                    {/* Article Card 1: lucky-day */}
                    <Link href="/astrology/lucky-day" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ดิถีฤกษ์ไชย</h2>
                            <p className="text-white">ปฏิทินแห่งความมงคลสำหรับกิจกรรมสำคัญ</p>
                        </div>
                    </Link>

                    {/* Article Card 2: Sunday Time */}
                    <Link href="/astrology/sunday/time" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันอาทิตย์ ๑</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 3: Monday Time */}
                    <Link href="/astrology/monday/time" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันจันทร์ ๒</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 4: Tuesday Time */}
                    <Link href="/astrology/tuesday/time" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันอังคาร ๓</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 5: Wednesday Time */}
                    <Link href="/astrology/wednesday/time" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันพุธ ๔</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 6: Thursday Time */}
                    <Link href="/astrology/thursday/time" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันพฤหัส ๕</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 7: Friday Time */}
                    <Link href="/astrology/friday/time" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันศุกร์ ๖</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 8: Saturday Time */}
                    <Link href="/astrology/saturday/time" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ยามอัฐกาลประจำวันเสาร์ ๗</h2>
                            <p className="text-white">ความหมายของยามอัฐกาล</p>
                        </div>
                    </Link>

                    {/* Article Card 9: domicile */}
                    <Link href="/astrology/domicile" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ดาวเกษตร และ ดาวประเกษตร</h2>
                            <p className="text-white">ความหมายของดาวเกษตร และ ดาวประเกษตร</p>
                        </div>
                    </Link>

                    {/* Article Card 10: exaltation */}
                    <Link href="/astrology/exaltation" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ดวงมหาอุจจ์</h2>
                            <p className="text-white">ความแข็งแกร่งในผลงาน และ หน้าที่การงาน</p>
                        </div>
                    </Link>

                    {/* Article Card 11: fall */}
                    <Link href="/astrology/fall" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ดวงนิจจ์</h2>
                            <p className="text-white">ตำแหน่งที่ดาวเคราะห์ โคจรไปอยู่ในจุดที่ต่ำที่สุด ในจักรราศี</p>
                        </div>
                    </Link>

                    {/* Article Card 12: mahajak */}
                    <Link href="/astrology/mahajak" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ดวงมหาจักร</h2>
                            <p className="text-white">ตำแหน่งดาวที่ให้คุณอย่างยิ่ง ในด้านความเจริญรุ่งเรือง</p>
                        </div>
                    </Link>

                    {/* Article Card 13: circular-horoscope (Work in Progress) */}
                    {/*
                    <Link href="/astrology/circular-horoscope" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">จักราศี</h2>
                            <p className="text-white">ตำแหน่งดาวที่ให้คุณอย่างยิ่ง ในด้านความเจริญรุ่งเรือง</p>
                        </div>
                    </Link>
                    */}
                </div>
            </div>
        </main>
    );
}