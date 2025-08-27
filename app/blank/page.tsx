'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BlankPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Background Image"
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg">
                    หัวข้อบทความ
                </h1>
                
                {/* เนื้อหาจะถูกเพิ่มที่นี่ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* ตัวอย่าง Card/Component */}
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col">
                        <h2 className="text-2xl font-bold text-secondary-gold mb-2">หัวข้อย่อย</h2>
                        <p>
                            ใส่รายละเอียดเนื้อหาของคุณที่นี่
                        </p>
                    </div>

                    {/* เพิ่ม Card หรือ Component อื่นๆ ที่นี่ */}
                </div>
            </div>
        </main>
    );
}