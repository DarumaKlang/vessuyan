// src/app/astrology/friday/time/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AuspiciousTimeCard from '../../../../components/AuspiciousTimeCard';

const FridayAuspiciousTimes = () => {
    // ข้อมูลฤกษ์ยามวันศุกร์ (กลางวัน) พร้อมข้อมูลยามสามตา
    const dayTimes = [
        { time: 'ยาม ๑ ศุกระ ๖ 06.00 น. - 07.30 น.', auspicious: 'ศุกระยามมหาสถาผล พระสุทนมาเกิดกำเนิดสนอง เป็นกษัตริย์ฟุ้งเฟื่องอันเรืองรอง ได้ครอบครองสมบัติสวัสดี', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๒ พุธะ ๔ 07.30 น. - 09.00 น.', auspicious: 'พุธะพระได้มะโนเรศ เป็นปิ่นเกษไกรลาศคีริศรี โฉมสำอางค์นางฟ้ากุมารี พระภูมีเชยชมภิรมย์ทรวง', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๓ จันเทา ๒ 09.00 น. - 10.30 น.', auspicious: 'จันเทาเยาวเรศเหตุจะมี พบฤาษีนางสั่งถึงวังหลวง เป็นยามเศร้าโศกาน้ำตาตวง ประดุจดวงชีวิตจะปลิดปลง', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๔ เสารี ๗ 10.30 น. - 12.00 น.', auspicious: 'เสารีสามีเที่ยวตามหา แสนโศกามาในไพรระหง ถึงอาศรมฤาษีที่กลางดง พระนงลักษณ์ถามไถ่อยู่ไปมา', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๕ ครู ๕ 12.00 น. - 13.30 น.', auspicious: 'ยามครูมุนีก็ชี้ช่อง เหมือนทำนองนางสั่งไม่กังขา พระจดจำถ้อยคำแล้วอำลา ยามนี้หนาลำบากด้วยจากกัน', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๖ ภุมมะ ๓ 13.30 น. - 15.00 น.', auspicious: 'ภุมมะพระไปเหมือนใจหวัง ขึ้นขี่หลังนกใหญ่ข้ามไพรสันฑ์ ถึงไกรลาศยาร์ตเยื้องจรจรัล เข้าเขตขันฑ์เสมาพระธานี', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๗ สุริชะ ๑ 15.00 น. - 16.30 น.', auspicious: 'สุริชะมาปะเมื่อนางสรง แล้วให้พระธำรงค์อันเรื่องศรี รู้ว่าอธิบดินทร์ก็ยินดี กินนรีสอดดูพระภูธร', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๘ ศุกระ ๖ 16.30 น. - 18.00 น.', auspicious: 'ศุกระพระได้เสวยสุข นิราศทุกข์ภิญโญสโมสร ได้นางคืนชื่นจิตต์สนิทนอน สถาพรพูลสวัสดิ์เป็นอัตรา', samTaUp: '๒', samTaRam: '๓' },
    ];

    // ข้อมูลฤกษ์ยามวันศุกร์ (กลางคืน) พร้อมข้อมูลยามสามตา
    const nightTimes = [
        { time: 'ยาม ๑ ศุโกร ๖ 18.00 น. - 19.30 น.', auspicious: 'ศุโกรโอฬาร์มหาวิเศษ เหมือนพระเวสสันดรนาถา ครองพิภพสีพีเธอปรีดา ฝูงประชาชนชื่นทุกคืนวัน', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๒ ภุมโม ๓ 19.30 น. - 21.00 น.', auspicious: 'ภุมโมยามร้ายให้ขัดขวาง เธอให้ช้างเผือกผู้ตัวขยัน พลเมืองกริ้วโกรธต้องโทษทัณฑ์ ก็ชวนกันปรึกษาว่าไม่ดี', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๓ โสโร ๗ 21.00 น. - 22.30 น.', auspicious: 'โสโรร้ายได้เมื่อบิดาโกรธ คุมโทษสำทับต้องขับหนี ไม่เอาไว้ให้อยู่ในบุรี ด้วยทำผิดประเพณีแต่บุราณ', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๔ พุโธ ๔ 22.30 น. - 24.00 น.', auspicious: 'พุโธสี่กษัตริย์กำจัดจาก แสนลำบากบุกป่านิราสถาน ละห้อยให้โหยใจในดงดาร ถึงสถานวงกตคีรีราย', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๕ ระวิ ๑ 24.00 น. - 01.30 น.', auspicious: 'ระวิชูชกไปตามขอ สองพระหน่อน้อยนาฏดังมาตร์หมาย ได้แล้วพามาเมืองอันเรืองพราย ฝูงอำมาตย์ทั้งหลายก็จับเอา', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๖ ชีโว ๕ 01.30 น. - 03.00 น.', auspicious: 'ชีโวกรุงสญไชยไถ่พระหลาน ด้วยแสนทรัพย์ศฤงคารให้พราหมณ์เฒ่า เป็นยามดีมีลาภไม่บันเทา จงจดจำเอาตำหรับฉบับครู', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๗ ศะศิ ๒ 03.00 น. - 04.30 น.', auspicious: 'ศศิตรวจตราช้างม้าเสด็จ รับพระเวสสันดรนเรนทร์สูรย์ ไพร่พลแห่ห้อมไปพร้อมมูล เสด็จยูรยาตร์สู่บุรีรมย์', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๘ ศุโกร ๖ 04.30 น. - 06.00 น.', auspicious: 'ศุโกรพระบิดาราชาภิเษก เป็นองค์เอกกษัตริย์อันสูงสม เเิมมิ่งมงกุฏอันอุดม เป็นบรมสุโขภิญโญยศ', samTaUp: '๑', samTaRam: '๒' },
    ];

    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Auspicious Times Background"
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ฤกษ์ยามวันศุกร์</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-secondary-gold drop-shadow-md">ฤกษ์ยาม (เวลากลางวัน)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dayTimes.map((item, index) => (
                            <AuspiciousTimeCard key={index} {...item} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-secondary-gold drop-shadow-md">ฤกษ์ยาม (เวลากลางคืน)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {nightTimes.map((item, index) => (
                            <AuspiciousTimeCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FridayAuspiciousTimes;