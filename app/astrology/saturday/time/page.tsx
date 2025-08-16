// src/app/astrology/sturday/time/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AuspiciousTimeCard from '../../../../components/AuspiciousTimeCard';

const SaturdayAuspiciousTimes = () => {
    // ข้อมูลฤกษ์ยามวันเสาร์ (กลางวัน) พร้อมข้อมูลยามสามตา
    const dayTimes = [
{ time: 'ยาม ๑ เสารี ๗ 06.00 น. - 07.30 น.', auspicious: 'เสารีมีกำลังดังช้างสาร กำแหงหาญฤทธาอันปรากฏ เมื่อนางอัสมูขีมีพยศ เป็นกำหนดในยามตามเรื่องราว', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๒ ครู ๕ 07.30 น. - 09.00 น.', auspicious: 'พระครูยามพบพราหมณ์เอาเป็นผัว จำแลงตัวตุ้งติ้งเป็นหญิงสาว บำเรอรักภักดีไม่มีดาว ทุกค่ำเช้าเชยชิดสนิทนอน', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๓ ภุมมะ ๓ 09.00 น. - 10.30 น.', auspicious: 'ภุมมะเกิดบุตรอันสุดที่รัก ชื่อบุญลักษณ์เรืองฤทธิมหิศร สุขเกษมเปรมปราสถาพร ยังไม่จรจากสถานของมารดา', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๔ สุริชะ ๑ 10.30 น. - 12.00 น.', auspicious: 'สุริชะลักพาบิดาหนี ข้ามคีรีห้วยธารละหานผา ไม่รั้งรอตั้งแต่จะรีบมา ยามหนีหนาพากันหนีดีสุดใจ', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๕ ศุกระ ๖ 12.00 น. - 13.30 น.', auspicious: 'ศุกระมาปะแม่น้ำกว้าง ยืนอยู่ข้างมหาชลาไหล เป็นยามดีหนีรอดเปล่าปลอดไป ไม่มีภัยแผ้วพาลสำราญกาย', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๖ พุธะ ๔ 13.30 น. - 15.00 น.', auspicious: 'พุธะนางยักษ์ประจักษ์เหตุ ชลเนตรคลอคลองลงนองสาย ไปตามลูกกับผัวแทบตัวตาย เป็นยามร้ายเร่งจำเอาทำนอง', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๗ จันเทา ๒ 15.00 น. - 16.30 น.', auspicious: 'จันเทานางถึงแก่วินาสน์ โอรสราชทดแทนพระคุณสนอง ไม่สู้ดียามนี้ชี้ทำนอง นางจึงต้องมรณาพิลาลัย', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๘ เสารี ๗ 16.30 น. - 18.00 น.', auspicious: 'เสารีนี้ได้เมื่อพระลูกรัก เจริญศักดิ์โสภาจะหาไหน ได้ครอบครองบุรีไม่มีภัย สำราญใจทุกวันนิรันดร', samTaUp: '๒', samTaRam: '๓' },    ];

    // ข้อมูลฤกษ์ยามวันเสาร์ (กลางคืน) พร้อมข้อมูลยามสามตา
    const nightTimes = [
        { time: 'ยาม ๑ โสโร ๗ 18.00 น. - 19.30 น.', auspicious: 'โสโรหนุมานอันชาญกล้า รับอาสาทรงฤทธิ์มหิศร พบฤาษีกราบก้มประนมกร อาศัยนอนที่ศาลาในราตรี', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๒ พุโธ ๔ 19.30 น. - 21.00 น.', auspicious: 'พุโธหนุมานทยานเหาะ หมายเอาเกาะลงกาอันเรืองศรี ก็เหาะลงตรงราชธานี เป็นยามดีติดสมอารมณ์ลิง', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๓ ระวิ ๑ 21.00 น. - 22.30 น.', auspicious: 'ระวิตริตรองมองเขม่น ก็แลเห็นสีดาพระยาหญิง สังเกตุดูยลแยบคอยแอบอิง เป็นความจริงซื่อสัตย์ต่อภัสดา', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๔ ชีโว ๕ 22.30 น. - 24.00 น.', auspicious: 'ชีโวยอมกายถวายแหวน แต่นางแสนเศร้าสร้อยละห้อยหา', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๕ ศะศิ ๒ 24.00 น. - 01.30 น.', auspicious: 'ศศิหนุมานชาญศักดา เข้าฉุดคร่าปั่นป่วนสวนมาลี', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๖ ศุกโร ๖ 01.30 น. - 03.00 น.', auspicious: 'ศุโกรฆ่าสหัสสบุตร์ลงม้วยมรณ์ ข่าวขจรฤาชาถึงทศศรี', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๗ ภุมโม ๓ 03.00 น. - 04.30 น.', auspicious: 'ภุมโมอินทรชิตเข้าต่อตี จับได้กระบี่ก็มัดมา', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๘ โสโร ๗ 04.30 น. - 06.00 น.', auspicious: 'โสโรเกือบจะใกล้อรุณรุ่ง หนุมานเผากรุงท้าวยักษา อัฏฐกาลสองสถานรำพรรณมา แม้ยาตราเลือกเดินที่ยามดี', samTaUp: '๑', samTaRam: '๒' },
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ฤกษ์ยามวันเสาร์</h1>

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

export default SaturdayAuspiciousTimes;