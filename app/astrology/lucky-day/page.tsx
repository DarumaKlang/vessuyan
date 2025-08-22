// src/app/astrology/double-number/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import NumberPairCard from '@/components/NumberPairCard'; // Import component ใหม่

// ข้อมูลคู่เลขทั้งหมดในรูปแบบ Array of Objects
const numberPairsData = [
    { pair: '๑ ๑', meaning: 'คู่เจ้าระเบียบ' },
    { pair: '๑ ๒', meaning: 'คู่ครัวเรือน คู่สมรส' },
    { pair: '๑ ๓', meaning: 'คู่ศัตรู วิปัสสนา (ให้ทาน รักษาศีล เจริญภาวนา ลงไปดูหน้างาน รู้ตามความเป็นจริง) หัวแตก' },
    { pair: '๑ ๔', meaning: 'คู่แผนการ' },
    { pair: '๑ ๕', meaning: 'คู่มิตร (ศิษย์ อาจารย์) ให้ผลด้านคู่ครอง คนช่วยเหลือ' },
    { pair: '๑ ๖', meaning: 'คู่สมพล (ให้ผลด้านการงานทุกครั้ง) ดีภายหลัง' },
    { pair: '๑ ๗', meaning: 'คู่ธาตุ ไฟ รุ่งเรืองปัญญา (ญาติ ยานพาหนะ)' },
    { pair: '๑ ๘', meaning: 'คู่ฆาต สว่างไปมืดมาก มืดมาก็สว่างไป (สุริยฆาต)' },
    { pair: '๒ ๒', meaning: 'คู่บริการ คู่งอน' },
    { pair: '๒ ๓', meaning: 'คู่ชู้ คู่ทะเยอทะยาน ชู้จับได้' },
    { pair: '๒ ๔', meaning: 'คู่มิตร ฉันและเธอ ให้ผลด้านคู่ครอง คนช่วยเหลือ' },
    { pair: '๒ ๕', meaning: 'คู่ธาตุดิน ทรัพย์สินมั่นคง กระทบกระทั่งเล็กน้อย (ถ้ารถยนต์ = ชน)' },
    { pair: '๒ ๖', meaning: 'คู่สุริ สุร่าย' },
    { pair: '๒ ๗', meaning: 'คู่พลัดพราก จะต้องแยกจากกัน' },
    { pair: '๒ ๘', meaning: 'คู่สมพล คู่หนี้ ประกอบกิจการต้องยืมเขามา' },
    { pair: '๓ ๓', meaning: 'คู่การงาน งานช่าง คู่ทหารช่าง' },
    { pair: '๓ ๔', meaning: 'คู่วิวาทะ ปากเบี้ยว (เลื่อยงา ผ่าท้อง)' },
    { pair: '๓ ๕', meaning: 'สมพล ได้ผลทางการงาน' },
    { pair: '๓ ๖', meaning: 'คู่มิตร คู่เม้าท์' },
    { pair: '๓ ๗', meaning: 'คู่แตกหัก ขาดตอน (ปวดเท้า ปวดขา)' },
    { pair: '๓ ๘', meaning: 'คู่ธาตุ ลม มีชื่อเสียง คล่องแคล่ว ว่องไว มีทรัพย์สิน ลมๆแล้ง (ไฟไหม้)' },
    { pair: '๔ ๔', meaning: 'คู่เจรจา เดินทาง' },
    { pair: '๔ ๕', meaning: 'คู่วิชาการ' },
    { pair: '๔ ๖', meaning: 'คู่ธาตุน้ำ มนต์ กามรมณ์ เข้าวัดเข้าวา' },
    { pair: '๔ ๗', meaning: 'คู่สมพล (ให้ผลการงานระยะยาว)' },
    { pair: '๔ ๘', meaning: 'คู่ศัตรู' },
    { pair: '๕ ๕', meaning: 'คู่เรียนรู้ คู่สอนสั่ง คู่มานะทิฐิ คู่บวชเรียน ลาออกจากงาน' },
    { pair: '๕ ๖', meaning: 'คู่สุภาพราบรื่น' },
    { pair: '๕ ๗', meaning: 'คู่พระ คู่ โจร (มีคุณธรรม มีพวกเยอะ)' },
    { pair: '๕ ๘', meaning: 'คู่โลกธรรม แจ่มแจ้ง เอาดีทั้งทางโลก และทางธรรม' },
    { pair: '๖ ๖', meaning: 'คู่รัก คู่เงิน' },
    { pair: '๖ ๗', meaning: 'คู่ศัตรู' },
    { pair: '๖ ๘', meaning: 'คู่ค้าขาย คู่ล้มละลาย ลงมือจะมือลงหุ้นกันแต่ไม่ดูให้ดีก็ล้มละลาย' },
    { pair: '๗ ๗', meaning: 'คู่เก็บเบี้ยใต้ถุนร้าน สะสมทรัพย์ คู่ขุมทรัพย์' },
    { pair: '๗ ๘', meaning: 'คู่มิตร ค้าขาย' },
    { pair: '๘ ๘', meaning: 'คู่กลับตัว คู่มืด คู่พนัน' },
];

export default function DoubleNumberPage() {
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">คู่เลขศาสตร์</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ความหมายของคู่เลขแต่ละคู่</h2>

                <div className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {numberPairsData.map((item, index) => (
                            <NumberPairCard key={index} {...item} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-secondary-gold drop-shadow-md">เพิ่มเติม</h2>
                    <ul className="list-none text-white space-y-2">
                        <li><strong>คู่มิตร :</strong> ให้ผลด้านคู่ครอง คนช่วยเหลือ</li>
                        <li><strong>คู่ธาตุ :</strong> ให้ผลด้านญาติ ยานพาหนะ</li>
                        <li><strong>คู่ศัตรู :</strong> ให้ผลด้านการหักล้าง</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
```
---
```react
// src/components/NumberPairCard.tsx
// Component ใหม่ที่ต้องสร้างขึ้นมาเพื่อใช้แสดงผลคู่เลขแต่ละคู่
import React from 'react';

interface NumberPairCardProps {
    pair: string;
    meaning: string;
}

const NumberPairCard: React.FC<NumberPairCardProps> = ({ pair, meaning }) => {
    return (
        <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 flex flex-col items-start space-y-2">
            <h3 className="text-2xl font-bold text-secondary-gold">{pair}</h3>
            <p className="text-white text-base">{meaning}</p>
        </div>
    );
};

export default NumberPairCard;
