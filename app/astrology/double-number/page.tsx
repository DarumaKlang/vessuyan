// src/app/astrology/double-number/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ExaltationPage() {

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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ดวงมหาอุจจ์: ความแข็งแกร่งในผลงาน และ หน้าที่การงาน</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">หลักการโหราศาสตร์เบื้องต้น</h2>

                {/* Section for Thai Numerology - Number Pairs */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    <h2 className="text-2xl font-bold text-secondary-gold mb-4">คู่เลข</h2>

                    <p>"คู่เลข" หรือ "เลขคู่มงคล" หมายถึงการนำเลขสองตัวมาจับคู่กันเพื่อเสริมดวงในด้านต่างๆ ตามความเชื่อและหลักเลขศาสตร์ โดยแต่ละคู่เลขจะมีพลังและอิทธิพลที่แตกต่างกันไป ซึ่งมักถูกนำไปใช้ในการเลือกเบอร์โทรศัพท์ หรือเลขที่เกี่ยวข้องกับชีวิตประจำวัน เพื่อเสริมโชคลาภ ความสำเร็จ หรือความมงคลในด้านต่างๆ</p>
                    
                    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                        <ul className="list-none space-y-2">
                            <li><strong>๑ ๑ :</strong> คู่เจ้าระเบียบ</li>
                            <li><strong>๑ ๒ :</strong> คู่ครัวเรือน คู่สมรส</li>
                            <li><strong>๑ ๓ :</strong> คู่ศัตรู วิปัสสนา (ให้ทาน รักษาศีล เจริญภาวนา ลงไปดูหน้างาน รู้ตามความเป็นจริง) หัวแตก</li>
                            <li><strong>๑ ๔ :</strong> คู่แผนการ</li>
                            <li><strong>๑ ๕ :</strong> คู่มิตร (ศิษย์ อาจารย์) ให้ผลด้านคู่ครอง คนช่วยเหลือ</li>
                            <li><strong>๑ ๖ :</strong> คู่สมพล (ให้ผลด้านการงานทุกครั้ง) ดีภายหลัง</li>
                            <li><strong>๑ ๗ :</strong> คู่ธาตุ ไฟ รุ่งเรืองปัญญา (ญาติ ยานพาหนะ)</li>
                            <li><strong>๑ ๘ :</strong> คู่ฆาต สว่างไปมืดมาก มืดมาก็สว่างไป (สุริยฆาต)</li>
                            <li><strong>๒ ๒ :</strong> คู่บริการ คู่งอน</li>
                            <li><strong>๒ ๓ :</strong> คู่ชู้ คู่ทะเยอทะยาน ชู้จับได้</li>
                            <li><strong>๒ ๔ :</strong> คู่มิตร ฉันและเธอ ให้ผลด้านคู่ครอง คนช่วยเหลือ</li>
                            <li><strong>๒ ๕ :</strong> คู่ธาตุดิน ทรัพย์สินมั่นคง กระทบกระทั่งเล็กน้อย (ถ้ารถยนต์ = ชน)</li>
                            <li><strong>๒ ๖ :</strong> คู่สุริ สุร่าย</li>
                            <li><strong>๒ ๗ :</strong> คู่พลัดพราก จะต้องแยกจากกัน</li>
                            <li><strong>๒ ๘ :</strong> คู่สมพล คู่หนี้ ประกอบกิจการต้องยืมเขามา</li>
                            <li><strong>๓ ๓ :</strong> คู่การงาน งานช่าง คู่ทหารช่าง</li>
                            <li><strong>๓ ๔ :</strong> คู่วิวาทะ ปากเบี้ยว (เลื่อยงา ผ่าท้อง)</li>
                            <li><strong>๓ ๕ :</strong> สมพล ได้ผลทางการงาน</li>
                            <li><strong>๓ ๖ :</strong> คู่มิตร คู่เม้าท์</li>
                            <li><strong>๓ ๗ :</strong> คู่แตกหัก ขาดตอน (ปวดเท้า ปวดขา)</li>
                            <li><strong>๓ ๘ :</strong> คู่ธาตุ ลม มีชื่อเสียง คล่องแคล่ว ว่องไว มีทรัพย์สิน ลมๆแล้ง (ไฟไหม้)</li>
                            <li><strong>๔ ๔ :</strong> คู่เจรจา เดินทาง</li>
                            <li><strong>๔ ๕ :</strong> คู่วิชาการ</li>
                            <li><strong>๔ ๖ :</strong> คู่ธาตุน้ำ มนต์ กามรมณ์ เข้าวัดเข้าวา</li>
                            <li><strong>๔ ๗ :</strong> คู่สมพล (ให้ผลการงานระยะยาว)</li>
                            <li><strong>๔ ๘ :</strong> คู่ศัตรู</li>
                            <li><strong>๕ ๕ :</strong> คู่เรียนรู้ คู่สอนสั่ง คู่มานะทิฐิ คู่บวชเรียน ลาออกจากงาน</li>
                            <li><strong>๕ ๖ :</strong> คู่สุภาพราบรื่น</li>
                            <li><strong>๕ ๗ :</strong> คู่พระ คู่ โจร (มีคุณธรรม มีพวกเยอะ)</li>
                            <li><strong>๕ ๘ :</strong> คู่โลกธรรม แจ่มแจ้ง เอาดีทั้งทางโลก และทางธรรม</li>
                            <li><strong>๖ ๖ :</strong> คู่รัก คู่เงิน</li>
                            <li><strong>๖ ๗ :</strong> คู่ศัตรู</li>
                            <li><strong>๖ ๘ :</strong> คู่ค้าขาย คู่ล้มละลาย ลงมือจะมือลงหุ้นกันแต่ไม่ดูให้ดีก็ล้มละลาย</li>
                            <li><strong>๗ ๗ :</strong> คู่เก็บเบี้ยใต้ถุนร้าน สะสมทรัพย์ คู่ขุมทรัพย์</li>
                            <li><strong>๗ ๘ :</strong> คู่มิตร ค้าขาย</li>
                            <li><strong>๘ ๘ :</strong> คู่กลับตัว คู่มืด คู่พนัน</li>
                        </ul>
                    </div>

                    <hr className="my-6 border-secondary-gold/30" />

                    <h2 className="text-2xl font-bold text-secondary-gold mb-4">เพิ่มเติม</h2>
                    
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