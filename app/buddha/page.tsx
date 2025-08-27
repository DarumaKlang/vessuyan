// src/app/buddha/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BuddhaPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Buddhism Articles Background"
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg">บทความพุทธศาสนา</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Article Card 1 */}
                    <Link href="/buddha/dhamma" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">หลักธรรมเบื้องต้นในพุทธศาสนา</h2>
                            <p className="text-white">ทำความเข้าใจในหลักธรรมสำคัญ เช่น อริยสัจ 4</p>
                        </div>
                    </Link>

                    {/* Article Card 2 The Buddha that you should pay respect to */}
                    <Link href="/buddha/respect" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">พระที่ควรไปไหว้</h2>
                            <p className="text-white">พระที่ควรไปไหว้</p>
                        </div>
                    </Link>

                    {/* Article Card 3 */}
                    <Link href="/buddha/meditate" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">การทำสมาธิ</h2>
                            <p className="text-white">ประโยชน์และวิธีการฝึกสมาธิเบื้องต้น</p>
                        </div>
                    </Link>

                    {/* Add more cards here */}

                </div>
            </div>
        </main>
    );
}