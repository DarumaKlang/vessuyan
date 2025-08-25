// src/app/astrology/tuesday/time/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AuspiciousTimeCard from '../../../../components/AuspiciousTimeCard';
import BackButton from '@/components/BackButton'; // <-- นำเข้า Component ใหม่

const TuesdayAuspiciousTimes = () => {
    // ข้อมูลฤกษ์ยามวันอังคาร (กลางวัน) พร้อมข้อมูลยามสามตา
    const dayTimes = [
        { time: 'ยาม ๑ ภุมมะ ๓ 06.00 น. - 07.30 น.', auspicious: 'ภุมมะรุ่งรางกระจ่างฉาย ดีกับร้ายกึ่งกันจงหันหา เมื่อกระบือชื่อพญาทรพา อยู่ในป่าตัวเดียวเที่ยวกระเจิง', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๒ สุริชะ ๑ 07.30 น. - 09.00 น.', auspicious: 'สุริชะเมื่อได้บริวาร แสนสำราญวิ่งโลดโดดเถลิง เกิดกำลังตั้งท่าทำร่าเริง เที่ยวแลเบิ่งเป็นใหญ่ในฝูงควาย', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๓ ศุกระ ๖ 09.00 น. - 10.30 น.', auspicious: 'ศุกระยามนี้เมื่อมีบุตร มารดาสุดรักใคร่ไม่ขยาย สู้ถนอมกล่อมเกลี้ยงเลี้ยงลูกชาย ไม่กล้ำกลายกลัวพ่อทรพา', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๔ พุธะ ๔ 10.30 น. - 12.00 น.', auspicious: 'พุธะมารดาพาไปซ่อน ในดงดอนเข้าอยู่ใต้คูหา เป็นยามดีมิให้ได้ระอา เทวดาผดุงบำรุงตน', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๕ จันเทา ๒ 12.00 น. - 13.30 น.', auspicious: 'จันเทาทรพีมันมีฤทธิ์ ออกเที่ยวขวิดภูผาโกลาหล แล้ววัดรอยพ่อดูจะสู้ชน เป็นยามคนคิดร้ายเอาปลายมือ', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๖ เสารี ๗ 13.30 น. - 15.00 น.', auspicious: 'เสารีทรพีไม่ย่อท้อ เข้าสู้พ่อชนได้ไม่ใช่หรือ เป็นยามร้ายรุมใจดังไฟฮือ ตอนปลายมือแพ้คนทุพลพาล', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๗ ครู ๕ 15.00 น. - 16.30 น.', auspicious: 'ยามครูทรพาก็อาสัญ ด้วยลูกมันขวิดขวับดับสังขาร ร้ายนักหนาสารพรรณจะบันดาล อย่าทำการยามนี้ชีวาวาย', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๘ ภุมมะ ๓ 16.30 น. - 18.00 น.', auspicious: 'ภุมมะทรพีมีชัยพ่อ ในใจคอสำราญบานขยาย ก็ตั้งตัวเป็นใหญ่ในฝูงควาย แสนสบายยามนี้เห็นดีครัน', samTaUp: '๒', samTaRam: '๓' },
    ];

    // ข้อมูลฤกษ์ยามวันอังคาร (กลางคืน) พร้อมข้อมูลยามสามตา
    const nightTimes = [
        { time: 'ยาม ๑ ภุมโม ๓ 18.00 น. - 19.30 น.', auspicious: 'ภุมโมยามค่ำร่ำว่าให้ปรากฏ เหมือนพระรถปรีเปรมเกษมสันติ์ ขึ้นจากอุโมงทรงม้าอาชาพลัน ในยามนั้นดีแท้เป็นแน่นอน', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๒ โสโร ๗ 19.30 น. - 21.00 น.', auspicious: 'โสโรเหมือนพระรสยศไกร เล่นสบ้ามีไชยสโมสร เป็นยามดีมีสง่าสถาพร เล่นพะนันผันผ่อนจะมีไชย', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๓ พุโธ ๔ 21.00 น. - 22.30 น.', auspicious: 'พุโธโอ้พระรถยศยิ่ง ได้ทรัพย์สิ่งโภคาเป็นไหนๆ มาเลี้ยงดูมารดาอันยาใจ ยามนี้ใช้ได้ดอกบอกอาการ', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๔ ระวิ ๑ 22.30 น. - 24.00 น.', auspicious: 'ระวิตริตรองดึกสงัด บิดาตรัสใช้ให้ถือหนังสือสาร หวังจะให้ลูกชายนั้นวายปราน ไม่ได้การยามนี้ไม่ดีเลย', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๕ ชีโว ๕ 24.00 น. - 01.30 น.', auspicious: 'ชีโวฤาษีอันมีเวท ได้ทราบเหตุแปลงสารเสียเฉย ๆ หวังจะให้ได้เมรีมาชมเชย พระรถเลยไปตามเป็นยามดี', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๖ ศศิ ๒ 01.30 น. - 03.00 น.', auspicious: 'ศศิริรักประจักษ์แล้ว จึงม้าแก้วพาเหาะระเห็จหนี ข้ามคงคาเหาะคว้างกลางเมฆี ยามนี้ดีกับร้ายระคนกัน', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๗ ศุโกร ๖ 03.00 น. - 04.30 น.', auspicious: 'ศุโกรเมื่อเมรีไม่เห็นผัว ให้หมองมัวตามหาถึงอาสัญ ยามนี้ร้ายอย่าได้จรจรัล อย่าผูกพันไมตรีจะมีภัย', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๘ ภุมโม ๓ 04.30 น. - 06.00 น.', auspicious: 'ภุมโมเมื่อม้าพาพระรถ ข้ามบรรพตโขดเขินเนินไสล มาถึงเมืองบิดานราไทย สำราญใจพระรสยศยง', samTaUp: '๑', samTaRam: '๒' },
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ฤกษ์ยามวันอังคาร</h1>

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

export default TuesdayAuspiciousTimes;