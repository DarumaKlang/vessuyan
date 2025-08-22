// src/app/astrology/lucky-day/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

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
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ดิถีฤกษ์ไชย</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ปฏิทินแห่งความมงคลสำหรับกิจกรรมสำคัญ</h2>

                {/* Section for lucky-day */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    <p className="text-white mb-4">
                        **ดิถีฤกษ์ไชย** เป็นความเชื่อทางโหราศาสตร์ไทยที่ใช้ในการพิจารณาฤกษ์ยามสำหรับกิจกรรมมงคล
                        โดยเฉพาะอย่างยิ่งการเดินทางไกลและการขึ้นบ้านใหม่ ดิถีฤกษ์ไชยจะพิจารณาจากข้างขึ้นและข้างแรม ซึ่งแต่ละวันจะมีคำทำนายและข้อควรพิจารณาที่แตกต่างกันไป
                    </p>

                    <h3 className="text-xl font-bold text-secondary-gold mt-6 mb-2">ความหมายของดิถีฤกษ์ไชย (ข้างขึ้นและข้างแรม)</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li><span className="text-secondary-gold">๑ ค่ำ : ขี่ม้าแก้วสู่โรงธรรม (ดี)</span></li>
                        <li><span className="text-red-400">๒ ค่ำ : ฟังธรรมกลางป่าช้า (ไม่ดี)</span></li>
                        <li><span className="text-secondary-gold">๓ ค่ำ : ล้างมือคอยท่า (ดี)</span></li>
                        <li><span className="text-red-400">๔ ค่ำ : ฝ่าตีนตากแดด (ไม่ดี)</span></li>
                        <li><span className="text-red-400">๕ ค่ำ : ผีแวดล้อมเอา (ไม่ดี)</span></li>
                        <li><span className="text-secondary-gold">๖ ค่ำ : สู่สำเภาพ่อค้า (ดี)</span></li>
                        <li><span className="text-red-400">๗ ค่ำ : บ่ายหน้าควายชน (ไม่ดี)</span></li>
                        <li><span className="text-red-400">๘ ค่ำ : ทำวนบ่ทันเมี้ยน (ไม่ดี)</span></li>
                        <li><span className="text-red-400">๙ ค่ำ : ต้องเสี้ยนพระราม (ไม่ดี)</span></li>
                        <li><span className="text-red-400">๑๐ ค่ำ : หาความบ่มิได้ (ไม่ดี)</span></li>
                        <li><span className="text-secondary-gold">๑๑ ค่ำ : ทุกข์ภัยบ่มี (ดี)</span></li>
                        <li><span className="text-red-400">๑๒ ค่ำ : บ่ดีแต่สักคาบ (ไม่ดี)</span></li>
                        <li><span className="text-secondary-gold">๑๓ ค่ำ : ชัยปราบชมภู (ดี)</span></li>
                        <li><span className="text-red-400">๑๔ ค่ำ : ศัตรูปองฆ่า (ไม่ดี)</span></li>
                        <li><span className="text-red-400">๑๕ ค่ำ : วายชีวาบ่คืน (ไม่ดี)</span></li>
                    </ul>

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