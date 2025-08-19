'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ThaiHoroscopeChart from '@/components/ThaiHoroscopeChart'; // ตรวจสอบว่า import ถูกต้อง

export default function JakraseePage() {
    // สร้างข้อมูลสำหรับตารางดวงชะตา
    const jakraseeData = {
        'สุกะ': '๖',
        'มรณะ': '๘',
        'ปัตนิ': '',
        'อริ': '',
        'กัมมะ': '๐, ๓',
        'ลัคนา': 'ล',
        'ปุตตะ': '๕',
        'ลาภะ': '๑, ๒, ๔',
        'วินาส': '๗',
        'ตนุ': '๙',
        'กดุมภะ': '',
        'พันธุ': '',
        'สหัสชะ': '',
    };

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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ดวงชะตาจักรราศี</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">หลักการโหราศาสตร์เบื้องต้น</h2>

                {/* แสดงตารางดวงชะตา */}
                <div className="flex justify-center my-6">
                    <ThaiHoroscopeChart chartData={jakraseeData} />
                </div>
            </div>
        </main>
    );
}