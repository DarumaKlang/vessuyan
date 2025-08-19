'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ThaiZodiacTable from '@/components/ThaiZodiacTable';

export default function MahajakPage() {
    const mahajakData = [
        { title: 'ราศีเมษ', number: '๗' },
        { title: 'ราศีพฤษภ', number: '๓' },
        { title: 'ราศีมิถุน', number: '๑' },
        { title: 'ราศีกรกฎ', number: '๖' },
        { title: 'ราศีสิงห์', number: '๕' },
        { title: 'ราศีกันย์', number: '๒' },
        { title: 'ราศีตุลย์', number: '๘' },
        { title: 'ราศีพิจิก', number: '๔' },
        { title: 'ราศีธนู', number: '๗' },
        { title: 'ราศีมังกร', number: '๓' },
        { title: 'ราศีกุมภ์', number: '๙' },
        { title: 'ราศีมีน', number: '๑' },
    ];

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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ดวงมหาจักร: ตำแหน่งแห่งความยิ่งใหญ่</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">หลักการโหราศาสตร์เบื้องต้น</h2>

                {/* Section for Mahajak */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    <p className="text-white mb-4">
                        ในโหราศาสตร์ไทย **"ดวงมหาจักร"** คือตำแหน่งดาวที่ให้คุณอย่างยิ่งใหญ่และแน่นอนในด้านความเจริญรุ่งเรือง ความมั่งคั่ง และอำนาจ เปรียบเสมือนดาวที่มีพลังงานมหาศาลที่พร้อมจะขับเคลื่อนชีวิตไปสู่ความสำเร็จที่ยิ่งใหญ่
                    </p>

                    <div className="flex justify-center my-6">
                        http://googleusercontent.com/image_generation_content/19
                    </div>

                    <h3 className="text-xl font-bold text-secondary-gold mt-6 mb-2">ตำแหน่งดาวมหาจักรในจักรราศี</h3>
                    <p className="text-white mb-4">
                        ตำแหน่งมหาจักรเป็นตำแหน่งสำคัญที่ส่งผลให้ผู้ที่มีดาวอยู่ในตำแหน่งนี้มีชีวิตที่รุ่งเรืองอย่างยิ่งใหญ่ในด้านที่ดาวนั้นควบคุม ตัวอย่างเช่น
                    </p>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li>**ดาวอาทิตย์ (มหาจักร):** แสดงถึงอำนาจและวาสนาที่ยิ่งใหญ่</li>
                        <li>**ดาวจันทร์ (มหาจักร):** แสดงถึงความมั่งคั่งและทรัพย์สินอย่างอุดมสมบูรณ์</li>
                        <li>**ดาวอังคาร (มหาจักร):** แสดงถึงความสำเร็จในการเป็นผู้นำและผู้สร้าง</li>
                    </ul>

                    {/* ตารางจักรราศี */}
                    <div className="flex justify-center my-6">
                        <ThaiZodiacTable zodiacData={mahajakData} />
                    </div>

                    <p className="text-white mt-6">
                        การมีดาวมหาจักรในดวงชะตาถือเป็นเรื่องที่ดีอย่างยิ่ง เพราะจะช่วยเสริมพลังให้สามารถเอาชนะอุปสรรคและประสบความสำเร็จได้อย่างมั่นคงครับ
                    </p>
                </div>
            </div>
        </main>
    );
}