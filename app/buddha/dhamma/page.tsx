// src/app/buddha/dhamma/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function DhammaPage() {
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
                    <Link href="/buddha/dhamma/meritorious-actions" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">บุญกิริยาวัตถุ ๑๐</h2>
                            <p className="text-white">สิ่งอันเป็นที่ตั้งแห่งการทำบุญ 10 ประการ</p>
                        </div>
                    </Link>

                    {/* Article Card 2 */}
                    <Link href="/buddha/dhamma/threefold-training" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ธรรมในหมวด ๓ ไตรสิกขา</h2>
                            <p className="text-white">ไตรสิกขา หลักการการฝึกฝนเพื่อพัฒนาตนเอง</p>
                        </div>
                    </Link>

                    {/* Article Card 3 */}
                    <Link href="/buddha/dhamma/nyan" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ญาณ ๑๖</h2>
                            <p className="text-white">ลำดับการปฏิบัติทางปัญญาในแนวทางของวิปัสสนากรรมฐาน</p>
                        </div>
                    </Link>

                    {/* Article Card 4 */}
                    <Link href="/buddha/dhamma/ariyamagga" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">อริยบุคคล ๔</h2>
                            <p className="text-white">เส้นทางสู่การบรรลุธรรม</p>
                        </div>
                    </Link>

                    {/* Article Card 5 */}
                    <Link href="/buddha/dhamma/dhammadesana-related" className="block">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 hover:bg-white/20 transition-colors">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow">ธัมมเทสนาปฏิสังยุตต์ ๑๖</h2>
                            <p className="text-white">มารยาทของภิกษุเกี่ยวกับการแสดงธรรม 16 ข้อ</p>
                        </div>
                    </Link>

                    {/* Add more cards here */}

                </div>
            </div>
        </main>
    );
}