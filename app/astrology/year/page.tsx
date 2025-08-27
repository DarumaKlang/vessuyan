// src/app/astrology/year/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import ArticleSection from '@/components/ArticleSection';
import ArticleSummary from '@/components/ArticleSummary';

export default function YearPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Astrology Articles Background"
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg">บทความโหราศาสตร์และไพ่ยิปซี</h1>

                {/* Article Content */}
                <div className="space-y-12">
                    <p className="text-lg">
                        ปี (Year) เป็นหน่วยเวลาที่ใช้กันทั่วไป โดยมีนิยามที่แตกต่างกันไปตามหลักการคำนวณและวัตถุประสงค์ในการใช้งาน ซึ่งสามารถแบ่งออกเป็นประเภทหลัก ๆ ได้ดังนี้ครับ
                    </p>

                    {/* Article Sections */}
                    <ArticleSection
                        title="ปีสุริยคติ (Solar Year)"
                        content="เป็นปีที่ยึดการโคจรของโลก รอบดวงอาทิตย์ เป็นหลัก เป็นรูปแบบที่ใช้กันมากที่สุดในปัจจุบัน โดยเฉพาะในปฏิทินเกรกอเรียน (Gregorian Calendar) ที่เราใช้กันอยู่"
                        definitions={[
                            { term: "นิยาม", description: "เวลาที่โลกโคจรกลับมาถึงตำแหน่งเดิมในรอบดวงอาทิตย์" },
                            { term: "ระยะเวลา", description: "ประมาณ 365.2425 วัน" },
                            { term: "การปรับแก้", description: "เนื่องจากระยะเวลาไม่ได้เป็นจำนวนเต็ม ทำให้ต้องมีการปรับแก้เพื่อไม่ให้ฤดูกาลคลาดเคลื่อน โดยการเพิ่มวันในเดือนกุมภาพันธ์อีก 1 วัน ทุก ๆ 4 ปี ซึ่งเรียกว่า 'ปีอธิกสุรทิน' หรือ 'ปีมี 366 วัน'" },
                            { term: "การใช้งาน", description: "ใช้ในการนับเวลาตามฤดูกาล, ปฏิทินสากล, และกิจกรรมประจำวันทั่วไป" },
                        ]}
                    />

                    <ArticleSection
                        title="ปีจันทรคติ (Lunar Year)"
                        content="เป็นปีที่ยึดการโคจรของดวงจันทร์ รอบโลก เป็นหลัก ซึ่งเป็นพื้นฐานของปฏิทินในหลายวัฒนธรรม รวมถึงปฏิทินไทยโบราณที่ใช้นับวันสำคัญทางศาสนา"
                        definitions={[
                            { term: "นิยาม", description: "เวลาที่ดวงจันทร์โคจรครบ 12 รอบ (12 เดือนจันทรคติ)" },
                            { term: "ระยะเวลา", description: "ประมาณ 354 วัน" },
                            { term: "การปรับแก้", description: "เนื่องจากปีจันทรคติสั้นกว่าปีสุริยคติถึง 11 วัน ทำให้ทุก ๆ 2-3 ปี จะมีการเพิ่มเดือนเข้ามาอีก 1 เดือน (ส่วนใหญ่คือเดือน 8) เพื่อให้ปีจันทรคติสอดคล้องกับฤดูกาลที่อ้างอิงจากดวงอาทิตย์ การเพิ่มเดือนนี้เรียกว่า 'ปีอธิกมาส' ทำให้ปีนั้นมี 13 เดือนและมี 384 วัน" },
                            { term: "การใช้งาน", description: "ใช้ในการกำหนดวันสำคัญทางศาสนา เช่น วันวิสาขบูชา วันเข้าพรรษา หรือวันขึ้นปีใหม่ของจีน" },
                        ]}
                    />

                    <ArticleSection
                        title="ปีนักษัตร (Zodiacal Year)"
                        content="เป็นปีที่อ้างอิงตามวัฏจักร 12 ปี โดยแต่ละปีจะมีสัตว์ประจำปีเป็นสัญลักษณ์ ซึ่งใช้กันอย่างแพร่หลายในวัฒนธรรมเอเชีย รวมถึงไทยและจีน"
                        definitions={[
                            { term: "นิยาม", description: "วัฏจักรของปีที่กำหนดตามหลักโหราศาสตร์" },
                            { term: "ระยะเวลา", description: "12 ปี ต่อ 1 รอบ โดยแต่ละปีจะมีชื่อเรียกตามสัตว์ต่าง ๆ เช่น ปีชวด (หนู), ปีฉลู (วัว), ปีขาล (เสือ) ฯลฯ" },
                            { term: "การปรับแก้", description: "ไม่มีการปรับแก้เหมือนปีสุริยคติหรือจันทรคติ" },
                            { term: "การใช้งาน", description: "ใช้ในการดูดวง, วัฒนธรรม, และการบอกอายุ" },
                        ]}
                    />
                </div>

                {/* Summary Table */}
                <ArticleSummary />

            </div>
        </main>
    );
}