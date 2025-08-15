// src/app/buddha/dhamma/threefold-training/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ThreefoldTrainingPage() {
    const meritoriousActions = [
        {
            title: '๑. ศีล (อธิสีลสิกขา):',
            text: 'การฝึกอบรมด้านความประพฤติทางกาย วาจา และการรักษาระเบียบวินัย.',
        },
        {
            title: '๒. สมาธิ (อธิจิตตสิกขา):',
            text: 'การฝึกอบรมจิตใจให้มีความตั้งมั่น สงบ และมีพลังในการทำงาน.',
        },
        {
            title: '๓. ปัญญา (อธิปัญญาสิกขา):',
            text: 'การฝึกอบรมเพื่อให้เกิดความรู้ความเข้าใจในสิ่งต่างๆ ตามความเป็นจริง และสามารถนำความรู้นั้นไปใช้ในการดำเนินชีวิตได้อย่างถูกต้อง.',
        },
    ];

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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg">ไตรสิกขา หรือ สิกขา ๓ หลักการการฝึกฝนเพื่อพัฒนาตนเอง</h1>

                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">

                    {meritoriousActions.map((item, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2">{item.title}</h2>
                            <p className="text-white">{item.text}</p>
                        </div>
                    ))}
                    <p className="mt-6">
                        ไตรสิกขาจึงเป็นหลักการพัฒนาตนเองแบบองค์รวม ครอบคลุมทั้งการพัฒนาพฤติกรรม จิตใจ และปัญญา เพื่อให้เกิดความสมบูรณ์ทั้งทางโลกและทางธรรม. 
                    </p>
                </div>
            </div>
        </main>
    );
}