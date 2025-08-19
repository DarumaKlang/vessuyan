// src/app/astrology/fall/page.tsx
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ดวงนิจจ์: ความอับเฉาและวิบัติ</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">หลักการโหราศาสตร์เบื้องต้น</h2>

                {/* Section for Fall Planets */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    <p className="text-white mb-4">
                        ในโหราศาสตร์ไทย **"ดวงนิจจ์"** คือตำแหน่งที่ดาวเคราะห์โคจรไปอยู่ในจุดที่ต่ำที่สุดในจักรราศี ซึ่งเป็นตำแหน่งที่ให้โทษร้าย นำมาซึ่งความตกต่ำและอับเฉา เปรียบเสมือนดาวที่ไร้แสงและพลังงาน
                    </p>

                    <div className="flex justify-center my-6">
                        <Image
                            src="/fall.png"
                            alt="Fall Chart"
                            width={400}
                            height={400}
                        />
                    </div>

                    <h3 className="text-xl font-bold text-secondary-gold mt-6 mb-2">ตำแหน่งดาวนิจจ์ในจักรราศี</h3>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li><strong>ดาวอาทิตย์ (๑)</strong> เป็นนิจใน ราศีตุล</li>
                        <li><strong>ดาวจันทร์ (๒)</strong> เป็นนิจใน ราศีพิจิก</li>
                        <li><strong>ดาวอังคาร (๓)</strong> เป็นนิจใน ราศีกรกฎ</li>
                        <li><strong>ดาวพุธ (๔)</strong> เป็นนิจใน ราศีมีน</li>
                        <li><strong>ดาวพฤหัสบดี (๕)</strong> เป็นนิจใน ราศีมังกร</li>
                        <li><strong>ดาวศุกร์ (๖)</strong> เป็นนิจใน ราศีกันย์</li>
                        <li><strong>ดาวเสาร์ (๗)</strong> เป็นนิจใน ราศีเมษ</li>
                        <li><strong>พระราหู (๘)</strong> เป็นนิจใน ราศีพฤษภ</li>
                    </ul>

                    <h3 className="text-xl font-bold text-secondary-gold mb-2">ความหมายที่เกี่ยวข้องกับงานและชีวิต</h3>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li><strong>ความต่ำต้อยและอับเฉา :</strong> ผู้ที่มีดาวนิจจ์ในดวงชะตา มักจะรู้สึกขาดความมั่นคงและไม่ได้รับความเชื่อมั่นในหน้าที่การงาน</li>
                        <li><strong>อุปสรรคและวิบัติ :</strong> โชคชะตาจะนำมาซึ่งความยากลำบาก ความผิดหวัง และอุปสรรคต่าง ๆ ที่ทำให้ชีวิตไม่ราบรื่น</li>
                        <li><strong>การเงินที่ติดขัด :</strong> ความพยายามในการหาทรัพย์สินอาจไม่ได้ผลตามที่คาดหวัง และมีแนวโน้มที่จะเสียทรัพย์บ่อยครั้ง</li>
                        <li><strong>ความสัมพันธ์ที่ไม่สมหวัง :</strong> อาจมีปัญหาในเรื่องความรักหรือคู่ครอง และความสัมพันธ์กับคนรอบข้างไม่มั่นคง</li>
                    </ul>

                    <p className="text-white mt-6">
                        กล่าวโดยสรุป "ดวงนิจจ์" เป็นหนึ่งในตำแหน่งที่อ่อนแอที่สุดในดวงชะตา บ่งบอกถึงจุดอ่อนที่ต้องใช้ความพยายามอย่างมากในการเอาชนะ และเตรียมรับมือกับความไม่ราบรื่นในชีวิตครับ
                    </p>
                </div>
            </div>
        </main>
    );
}