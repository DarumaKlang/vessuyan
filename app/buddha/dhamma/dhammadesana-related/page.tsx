// src/app/buddha/dhamma/dhammadesana-related/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function DhammadesanaRelatedPage() {
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
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-primary-purple opacity-70"></div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Content Container */}
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ธัมมเทสนาปฏิสังยุตต์</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">มารยาท 16 ข้อในการแสดงธรรม</h2>

                {/* Main Content Area */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    {/* Introduction Section */}
                    <section className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-4">
                        <p className="text-lg leading-relaxed">
                            ธัมมเทสนาปฏิสังยุตต์ คือ หมวดที่ ๓ ของเสขิยวัตรในพระวินัยของพระสงฆ์ ซึ่งมี ๑๖ ข้อ บัญญัติเป็นมารยาทของภิกษุเกี่ยวกับการแสดงธรรมแก่คนที่ไม่เป็นไข้ ว่าด้วยการไม่แสดงธรรมแก่บุคคลเหล่านั้นในสถานการณ์ต่างๆ เช่น เมื่อเขาถือร่มหรืออาวุธ เดินในยาน หรือนั่งบนที่สูงกว่าภิกษุ
                        </p>
                    </section>

                    {/* The 16 Rules Section */}
                    <section className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
                        <h3 className="text-2xl font-bold text-secondary-gold mb-4">
                            16 ข้อของธัมมเทสนาปฏิสังยุตต์
                        </h3>
                        <ul className="list-decimal list-inside space-y-2 text-lg">
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่มีร่มในมือ</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่มีไม้พลองในมือ</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่มีของมีคมในมือ</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่มีอาวุธในมือ</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่สวมเขียงเท้า (รองเท้าไม้)</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่สวมรองเท้า</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่ไปในยาน</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่อยู่บนที่นอน</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่นั่งรัดเข่า</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่โพกศีรษะ</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่คลุมศีรษะ</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่อยู่บนอาสนะ (หรือเครื่องปูนั่ง) โดยภิกษุอยู่บนแผ่นดิน</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่นั่งบนอาสนะสูงกว่าภิกษุ</li>
                            <li>ไม่แสดงธรรมแก่คนไม่เป็นไข้ที่นั่งอยู่ แต่ภิกษุยืน</li>
                            <li>ภิกษุเดินไปข้างหลังไม่แสดงธรรมแก่คนไม่เป็นไข้ที่เดินไปข้างหน้า</li>
                            <li>ภิกษุเดินไปนอกทางไม่แสดงธรรมแก่คนไม่เป็นไข้ที่ไปในทาง</li>
                        </ul>
                    </section>

                </div>

            </div>
        </main>
    );
}