// src/app/astrology/wednesday/time/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AuspiciousTimeCard from '../../../../components/AuspiciousTimeCard';
import BackButton from '@/components/BackButton'; // <-- นำเข้า Component ใหม่

const WednesdayAuspiciousTimes = () => {
    // ข้อมูลฤกษ์ยามวันพุธ (กลางวัน) พร้อมข้อมูลยามสามตา
    const dayTimes = [
        { time: 'ยาม ๑ พุธะ ๔ 06.00 น. - 07.30 น.', auspicious: 'พุธะโพธิสัตว์พระฉัตทันต์ จากสวรรค์มาเกิดในไพรระหง เป็นใหญ่กว่าฝูงช้างในกลางดง พระองค์ทรงสิลาบารมี', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๒ จันเทา ๒ 07.30 น. - 09.00 น.', auspicious: 'จันเทานางช้างทั้งหลายล้อม สพรั่งพร้อมเป็นชะนัดล้วนหัตถี ก็อยู่เย็นเป็นสุขทุกราตรี มิได้มีภยันต์อันตราย', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๓ เสารี ๗ 09.00 น. - 10.30 น.', auspicious: 'เสารีได้เมื่อนางจุลสุพัตรา ผูกเวราเวรไว้เหมือนใจหมาย ปองจะฆ่าพญาฉัตทันต์พลาย ยามนี้ร้ายศัตรูมักดูแคลน', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๔ ครู ๕ 10.30 น. - 12.00 น.', auspicious: 'ยามครูนางช้างไม่วางโศก บังเกิดโรคในทรวงเพราะหวงแหน อกแตกตายวายชีวงในดงแดน ยามนี้แสนร้ายสุดไม่อุดม', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๕ ภุมมะ ๓ 12.00 น. - 13.30 น.', auspicious: 'ภุมมะจุลสุบัติอุบัติแล้ว เป็นนางแก้วเจ้าถนอมจอมสนม ได้สมบัติพัสถานสำราญรมณ์ นางก็ชมเชยชื่นทุกคืนวัน', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๖ สุริชะ ๑ 13.30 น. - 15.00 น.', auspicious: 'สุริชะนางกษัตริย์จึงตรัสว่า จะใคร่นอนแท่นงาอันเฉิดฉัน เฝ้าอ้อนวอนบิดาแล้วจาบัลย์ ด้วยยามนั้นไม่ร้ายพอใช้การ', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๗ ศุกระ ๖ 15.00 น. - 16.30 น.', auspicious: 'ศุกระพรานไพรน้ำใจกล้า รับอาสาท้าวไทเข้าไพรสาณฑ์ เป็นยามดีและได้สมอารมณ์พราน ไปพบพานโพธิสัตว์พระฉัตทันต์', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๘ พุธะ ๔ 16.30 น. - 18.00 น.', auspicious: 'โพธิสัตว์ยอดหัตถา ก็ถอดงาออกให้ขมีขมัน แล้วพระองค์มรณาในป่าวัน ในยามนั้นต้องห้ามตามนิยาย', samTaUp: '๒', samTaRam: '๓' },
    ];

    // ข้อมูลฤกษ์ยามวันพุธ (กลางคืน) พร้อมข้อมูลยามสามตา
    const nightTimes = [
        { time: 'ยาม ๑ พุโธ ๔ 18.00 น. - 19.30 น.', auspicious: 'พุโธโพล้เพล้ราวพลบค่ำ พระลอล้ำงามเลิศอันเฉิดฉาย จากนครจรมาเอกากายค่อยผันผายตามไก่เข้าในดง', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๒ ระวิ ๑ 19.30 น. - 21.00 น.', auspicious: 'ระวิยามตามมาในป่ากว้าง ได้พบนางพี่น้องสองนวลหง เจรจาพาทีไมตรีตรง ให้พระองค์อาศัยในอุทยาน', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๓ ชีโว ๕ 21.00 น. - 22.30 น.', auspicious: 'ชีโวยามดีไม่มีแหนง เจ้าเพื่อนแพงโฉมงามทรามสงสาร ปรพคองเคียงเลี้ยงดูพระกุมาร แสรสำราญพระทัยไม่ไคลคลา', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๔ ศศิ ๒ 22.30 น. - 24.00 น.', auspicious: 'ศศิตริตรองไม่นึกแหนง สองเพื่อนแพงปลอบไธ้ให้หรรษา เกษมสรวลชวนชมภิรมยา อยู่ในป่าสำราญบานพระทัย', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๕ ศุโกร ๖ 24.00 น. - 01.30 น.', auspicious: 'ศุโกรโอ้ท้าวเธอเศร้าจิต คนึงคิดถึงมารดาน้ำตาไหล ไม่สู้ดียามนี้มักตรอมใจ อุปมัยเหมือนความตามเรื่องราว', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๖ ภุมโม ๓ 01.30 น. - 03.00 น.', auspicious: 'ภุมโมเมื่อพระลอเธอพลัดพราก กำจัดจากมารดานิราสถาน เพราะปู่เจ้าเข้าดลกมลมาน อย่าทำการยามนี้ผีคนอง', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๗ โสโร ๗ 03.00 น. - 04.30 น.', auspicious: 'โสโรโอ้พระลอวรนาถ คิดถึงนุชสุดสวาทเธอทั้งสอง จรจากพารามาหาน้อง ยามนี้ต้องต้นร้ายตอนปลายดี', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๘ พุโธ ๔ 04.30 น. - 06.00 น.', auspicious: 'พุโธพระลอเฉลิมภพ มาประสบพบนางอยู่ปรางค์ศรี สุขเกษมเปรมปราทุกราตรี เป็นยามดีจงจำเอาตำรา', samTaUp: '๑', samTaRam: '๒' },
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ฤกษ์ยามวันพุธ</h1>

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

                {/* ใช้งาน Component BackButton ใหม่ */}
                <BackButton href="/astrology" label="กลับไปที่บทความโหราศาสตร์" />

            </div>
        </main>
    );
};

export default WednesdayAuspiciousTimes;