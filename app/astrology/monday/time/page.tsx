// src/app/astrology/monday/time/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AuspiciousTimeCard from '../../../../components/AuspiciousTimeCard';
import BackButton from '@/components/BackButton'; // <-- นำเข้า Component ใหม่

const MondayAuspiciousTimes = () => {
    // ข้อมูลฤกษ์ยามวันจันทร์ (กลางวัน) พร้อมข้อมูลยามสามตา
    const dayTimes = [
        { time: 'ยาม ๑ จันเทา ๒ 06.00 น. - 07.30 น.', auspicious: 'จันเทาสว่างกระจ่างแจ้ง สุริย์แสงส่องฟ้าสุธาสถาน ได้เมื่อโฆษกผู้กุมาร เกิดในครรภ์จัณฑาลทรพล', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๒ เสารี ๗ 07.30 น. - 09.00 น.', auspicious: 'เสารีว่าแม่แต่คลอดบุตร ก็แสนสุดยากไร้ไม่เป็นผล ร้อนรุ่มกลุ้มอกยกลูกตน กระเสือกกระสนซ่อนไว้อยู่ในรก', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๓ ครู ๕ 09.00 น. - 10.30 น.', auspicious: 'ยามครูเศรษฐีมาพบเข้าก็อุ้มเอาอิงแอบไว้แนบอก เลี้ยงเป็นบุตรสุดสวาดิ์ในทารก ก็ยอมยกสมบัติให้ครอบครอง', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๔ ภุมมะ ๓ 10.30 น. - 12.00 น.', auspicious: 'ภุมมะเศรษฐีกลับพิโรธ จะทำโทษเฆี่ยนขับให้อับหมอง เป็นยามร้ายหมายจำเอาทำนอง ท่านหมายปองคิดร้ายเมื่อปลายมือ', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๕ สุริชะ ๑ 12.00 น. - 13.30 น.', auspicious: 'สุริชะยามนี้เศรษฐีใช้ เป็นความลึกลับกับหนังสือ หมายจะให้ตายในกลางไฟฮือ ให้เจ้าโฆษกถือเอาไปพลัน', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๖ ศุกระ ๖ 13.30 น. - 15.00 น.', auspicious: 'ศุกระมาปะบุตรเศรษฐี เป็นยามดีชีวาไม่อาสัญ ลูกเศรษฐีมาตายวายชีวัน เจ้าโฆษกผายผันมาเรือนตน', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๗ พุธะ ๔ 15.00 น. - 16.30 น.', auspicious: 'พุธะเศรษฐีสิ้นชีวิต ถึงอนิจกรรมสัตว์วิบัติผล อีกสมบัติวัตถาทั้งข้าคน ยามนี้ร้ายแรงรนไม่สู้ดี', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๘ จันเทา ๒ 16.30 น. - 18.00 น.', auspicious: 'จันเทาเจ้ากุมภะโฆษก ได้ป้องปกสมบัติแห่งเศรษฐี มีเงินทองบ่าวไพร่ได้เป็นดี อยู่แทนที่เศรษฐีสำราญใจ', samTaUp: '๒', samTaRam: '๓' },
    ];

    // ข้อมูลฤกษ์ยามวันจันทร์ (กลางคืน) พร้อมข้อมูลยามสามตา
    const nightTimes = [
        { time: 'ยาม ๑ ศะศิ ๒ 18.00 น. - 19.30 น.', auspicious: 'ศศิยามค่ำคืนคลุ้มชอุ่มศรี เป็นยามดีมั่นคงไม่สงสัย พระเตมีย์มาเถิดกำเนิดใน ชื่นพระทัยชนนียินดีครัน', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๒ ศุโกร ๖ 19.30 น. - 21.00 น.', auspicious: 'ศุโกรเมื่อพระองค์ทรงผนวช เป็นยวดยิ่งยอดงามยามขยัน ทำสิ่งไรก็สำเร็จเสร็จทุกอัน จะรำพรรณทายเทียบเปรียบพิปราย', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๓ ภุมโม ๓ 21.00 น. - 22.30 น.', auspicious: 'ภุมโมเมื่อพระองค์ทรงทำใบ้ ด้วยพระทัยมิได้ตรัสเป็นอรรถฐาน พระตรึกตรองปองประโยชน์โพธิญาณ ตามนิทานว่าไว้ไม่สู้ดี', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๔ โสโร ๗ 22.30 น. - 24.00 น.', auspicious: 'โสโรปางพระโพธิสัตว์นั้น เธอหมายมั่นมัธยัสไม่ถอยดี เมื่อคชสารหาญกล้าเข้าราวี ร้ายกับดีกึ่งกันจงหันตาม', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๕ พุโธ ๔ 24.00 น. - 01.30 น.', auspicious: 'พุโธโอ้พระโพธิสัตว์ไม่ตรัสเหตุ พระปิตุเรศแค้นเคืองด้วยเรื่องถาม ให้ขุดหลุมฝังเสียจะเกลี่ยความ ด้วยเป็นยามร้ายแรงอย่าแคลงใจ', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๖ ระวิ ๑ 01.30 น. - 03.00 น.', auspicious: 'ระวิยามงามเลิศประเสริฐศรี พระเตมีย์แผลงศักดาสุธาไหว แล้วตรัสว่าสารถีที่ตามไป ให้อยู่ในยุติธรรมเป็นสำคัญ', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๗ ชีโว ๕ 03.00 น. - 04.30 น.', auspicious: 'ชีโวโพธิสัตว์เธอตรัสรู้ ได้เป็นครูสิ้นสุดมนุษย์สวรรค์ ในยามนี้ดีเลิศประเสริฐครัน เป็นมหันตมหาโอฬาราน', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๘ ศะศิ ๒ 04.30 น. - 06.00 น.', auspicious: 'ศศิธรค่อนรุ่งอร่ามศรี เป็นยามดีสารพันจะบรรหาร เมื่อพระองค์ทรงบำเพ็ญเล็งพระญาณ จะโปรดปรานสรรพสัตว์โลกา', samTaUp: '๑', samTaRam: '๒' },
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
            <div className="relative z-10 conapp/astrology/thursday/time/page.tsxtainer mx-auto p-8 pt-20 pb-[100px] text-white max-w-7xl">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ฤกษ์ยามวันจันทร์</h1>

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

export default MondayAuspiciousTimes;