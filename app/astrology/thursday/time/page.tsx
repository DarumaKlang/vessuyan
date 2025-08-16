// src/app/astrology/thursday/time/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AuspiciousTimeCard from '../../../../components/AuspiciousTimeCard';

const ThursdayAuspiciousTimes = () => {
    // ข้อมูลฤกษ์ยามวันพฤหัสบดี (กลางวัน) พร้อมข้อมูลยามสามตา
    const dayTimes = [
        { time: 'ยาม ๑ ครู ๕ 06.00 น. - 07.30 น.', auspicious: 'พระครูเรียงความตามนิบาต กุศราชเรืองฤทธิทุกทิศา เกิดในวงพงษ์กษัตริย์ขัติยา เป็นมหาสมมุติวงศ์ผู้ทรงนาม', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๒ ภูมมะ ๓ 07.30 น. - 09.00 น.', auspicious: 'ภุมมะพระได้เสวยราช ทั้งเปรื่องปราชญ์ฤาเลื่องเรืองสนาม แต่รูปทรงของพระองค์ไม่สู้งาม แต่ว่ายามนี้ดีดังมีมา', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๓ สุริชะ ๑ 09.00 น. - 10.30 น.', auspicious: 'สุริชะพระได้มเหสี ชื่อประภาวดีเสน่หา ประคองเคียงเพียงดวงนัยนา ครองพาราเป็นสุขสนุกสบาย', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๔ ศุกระ ๖ 10.30 น. - 12.00 น.', auspicious: 'ศุกระประภาวดีหนี ไปบุรีบิตุเรศอันเรืองฉาย กุศราชร้อนใจไม่สบาย เป็นยามร้ายร้อนรนพ้นประมาณ', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๕ พุธะ ๔ 12.00 น. - 13.30 น.', auspicious: 'พุธะยามพระกุศราช ไปตามนาฏถึงประเทศเขตสถาน จนพบองค์นงเยาว์ลำเภาพาน แต่ภูบาลยังมิได้เข้าใกล้นาง', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๖ จันเทา ๒ 13.30 น. - 15.00 น.', auspicious: 'จันเทาท้าวไทพิไรร่ำ ทุกคืนค่ำกำสดสลดหมาง ไม่สู้ดียามนี้ก็เป็นกลาง มักจะร้างแรมรักษ์ประจักษ์ใจ', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๗ เสารี ๗ 15.00 น. - 16.30 น.', auspicious: 'เสารีกุศราชชนะศึก ก็สมนึกยินดีจะมีไหน ทำสงครามยามนี้จะมีไชย จงจำไว้เป็นอย่างอย่าคลางแคลง', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๘ ครู ๕ 16.30 น. - 18.00 น.', auspicious: 'ยามครูบริสุทธิ์พระกุศราช เสวยราชฤาทั่วกลัวแสยง สมดังจิตคิดไว้มิได้แคลง กุศลแต่งให้ดีมีบุญญษ', samTaUp: '๒', samTaRam: '๓' },
    ];

    // ข้อมูลฤกษ์ยามวันพฤหัสบดี (กลางคืน) พร้อมข้อมูลยามสามตา
    const nightTimes = [
        { time: 'ยาม ๑ ชีโว ๕ 18.00 น. - 19.30 น.', auspicious: 'ชีโวอุตโมโอฬาร์ล้ำ เวลาค่ำยามนี้ดีหนักหนา ได้เมื่อสุทธนูกุมารา อาชาพาลดเลี้ยวเที่ยวหาเมีย', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๒ ศศิ ๒ 19.30 น. - 21.00 น.', auspicious: 'ศศิได้พบประสบพักตร์ อารีรักร่วมใจจนได้เสีย ไม่อิ่มหนำค่ำเช้าเฝ้าเคล้าเคลีย หาลูกเมียยามนี้ดีสุดใจ', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๓ ศุโกร ๖ 21.00 น. - 22.30 น.', auspicious: 'ศุโกรสุทธนูพาคู่ชื่น เสด็จคืนพาราอันผ่องใส อยู่ด้วยประภาเป็นยาใจ ในเวียงไชยชื่นชมภิรมยา', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๔ ภุมโม ๓ 22.30 น. - 24.00 น.', auspicious: 'ภุมโมชมชิดพิศวาท ด้วยนางนาฏน้องน้อยเสน่หา เสวยรมณ์ชมแสนสวรรยา ทั้งสองรารื่นเริงบรรเทิงใจ', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๕ โสโร ๗ 24.00 น. - 01.30 น.', auspicious: 'โสโรเมื่อม้าอาชาชาติ พานางนาฏข้ามเขิมเนินไศล ไปหามารดาด้วยอาลัย แต่ว่าไปไม่ถึงได้กึ่งทาง', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๖ พุโธ ๔ 01.30 น. - 03.00 น.', auspicious: 'พุโธอาศัยอยู่ในป่า พลัดกับม้านุชน้องก็หมองหมาง มีโจรไพรใจกล้ามาลักนาง อย่าเดินทางไปไกลภัยจะมี', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๗ ระวิ ๑ 03.00 น. - 04.30 น.', auspicious: 'ระวินี้นงเยาว์สำเภาแตก ลำบากกายว่ายแวกวารีศรี ห้ามมิให้เดินทางกลางนัทธี เหตุจะมีเหมือนกันดังพรรณา', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๘ ชีโว ๕ 04.30 น. - 06.00 น.', auspicious: 'ชีโวสุริโยอโณภาส อนงค์นาฏเดินไพรไกลหนักหนา ได้พบม้าชื่นชมสมจินดา ก็พักพากันไปดังใจปอง', samTaUp: '๑', samTaRam: '๒' },
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ฤกษ์ยามวันพฤหัสบดี</h1>

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

export default ThursdayAuspiciousTimes;