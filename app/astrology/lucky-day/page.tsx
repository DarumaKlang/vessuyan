// src/app/astrology/lucky-day/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

// ข้อมูลดิถีฤกษ์ไชยทั้งหมดในรูปแบบ Array of Objects
const luckyDaysData = [
    { day: '๑ ค่ำ', meaning: 'ขี่ม้าแก้วสู่โรงธรรม', status: 'ดี' },
    { day: '๒ ค่ำ', meaning: 'ฟังธรรมกลางป่าช้า', status: 'ไม่ดี' },
    { day: '๓ ค่ำ', meaning: 'ล้างมือคอยท่า', status: 'ดี' },
    { day: '๔ ค่ำ', meaning: 'ฝ่าตีนตากแดด', status: 'ไม่ดี' },
    { day: '๕ ค่ำ', meaning: 'ผีแวดล้อมเอา', status: 'ไม่ดี' },
    { day: '๖ ค่ำ', meaning: 'สู่สำเภาพ่อค้า', status: 'ดี' },
    { day: '๗ ค่ำ', meaning: 'บ่ายหน้าควายชน', status: 'ไม่ดี' },
    { day: '๘ ค่ำ', meaning: 'ทำวนบ่ทันเมี้ยน', status: 'ไม่ดี' },
    { day: '๙ ค่ำ', meaning: 'ต้องเสี้ยนพระราม', status: 'ไม่ดี' },
    { day: '๑๐ ค่ำ', meaning: 'หาความบ่มิได้', status: 'ไม่ดี' },
    { day: '๑๑ ค่ำ', meaning: 'ทุกข์ภัยบ่มี', status: 'ดี' },
    { day: '๑๒ ค่ำ', meaning: 'บ่ดีแต่สักคาบ', status: 'ไม่ดี' },
    { day: '๑๓ ค่ำ', meaning: 'ชัยปราบชมภู', status: 'ดี' },
    { day: '๑๔ ค่ำ', meaning: 'ศัตรูปองฆ่า', status: 'ไม่ดี' },
    { day: '๑๕ ค่ำ', meaning: 'วายชีวาบ่คืน', status: 'ไม่ดี' },
];

// Component ย่อยสำหรับแสดงผลข้อมูลดิถีฤกษ์ไชย
const LuckyDayCard = ({ day, meaning, status }) => {
    // กำหนดสีตามสถานะ 'ดี' หรือ 'ไม่ดี'
    const statusColor = status === 'ดี' ? 'text-secondary-gold' : 'text-red-400';

    return (
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md border border-secondary-gold/20 flex flex-col items-start space-y-1">
            <p className="text-lg font-semibold">
                <span className={`font-bold ${statusColor}`}>{day} :</span>
                <span className="text-white ml-2">{meaning} ({status})</span>
            </p>
        </div>
    );
};

export default function LuckydayPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
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

            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 container mx-auto p-8 pt-20 pb-[100px] text-white max-w-7xl">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ดิถีฤกษ์ไชย</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ปฏิทินแห่งความมงคลสำหรับกิจกรรมสำคัญ</h2>

                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    <p className="text-white mb-4">
                        **ดิถีฤกษ์ไชย** เป็นความเชื่อทางโหราศาสตร์ไทยที่ใช้ในการพิจารณาฤกษ์ยามสำหรับกิจกรรมมงคล
                        โดยเฉพาะอย่างยิ่งการเดินทางไกลและการขึ้นบ้านใหม่ ดิถีฤกษ์ไชยจะพิจารณาจากข้างขึ้นและข้างแรม ซึ่งแต่ละวันจะมีคำทำนายและข้อควรพิจารณาที่แตกต่างกันไป
                    </p>
                    <h3 className="text-xl font-bold text-secondary-gold mt-6 mb-2">ความหมายของดิถีฤกษ์ไชย (ข้างขึ้นและข้างแรม)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {luckyDaysData.map((item, index) => (
                            <LuckyDayCard key={index} {...item} />
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-secondary-gold mt-6 mb-2">ข้อควรพิจารณา</h3>
                    <p className="text-white mt-6">
                        การเลือกฤกษ์ยามที่ดีควรพิจารณาถึงความเหมาะสมกับกิจกรรมที่จะทำ และความเชื่อส่วนบุคคล
                        สำหรับกิจกรรมมงคลต่างๆ เช่น การขึ้นบ้านใหม่ การเดินทางไกล หรือการเปิดกิจการ ควรเลือกดิถีที่เป็นมงคลและหลีกเลี่ยงดิถีที่ไม่เป็นมงคล
                    </p>
                </div>
            </div>
        </main>
    );
}
