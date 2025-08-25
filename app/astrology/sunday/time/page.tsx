// src/app/astrology/sunday/time/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AuspiciousTimeCard from '../../../../components/AuspiciousTimeCard';
import BackButton from '@/components/BackButton'; // <-- นำเข้า Component ใหม่

const SundayAuspiciousTimes = () => {
    // ข้อมูลฤกษ์ยามวันอาทิตย์ (กลางวัน) พร้อมข้อมูลยามสามตา
    const dayTimes = [
        { time: 'ยาม ๑ สุริชะ ๑ 06.00 น. - 07.30 น.', auspicious: 'สุริชะแรกรุ่นแดดอุ่นอ่อน เมื่อวานรเนระคุณลิงจุ่นจิ๋ว เห็นรังนกกระจาบรายบนปลายงิ้ว ก็ไพร่พลิ้วเข้าอาศัยอยู่ในรัง', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๒ ศุกระ ๖ 07.30 น. - 09.00 น.', auspicious: 'ศุกระลิงไพรใจโกหก ลวงให้นกรักใคร่เหมือนใจหวัง จนปักษีมีไข่มิได้ระวัง เพราะเชื่อฟังลมลิงไม่กริ่งใจ', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๓ พุธะ ๔ 09.00 น. - 10.30 น.', auspicious: 'พุธะลิงป่าอุลามก เห็นไข่นกนึกหมายน้ำลายไหล จับขึ้นลูบคลำแล้วกำไว้ อยากจะใคร่ได้กินแลบลิ้นเลีย', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๔ จันเทา ๒ 10.30 น. - 12.00 น.', auspicious: 'จันเทาเอาไข่เข้าใส่ปาก กระโดดจากต้นงิ้วพลิ้วไปเสีย แล้วซ่อนตัวกลัววิหคนกตัวเมีย เอาทรายเกลี่ยกลบไข่เสียให้ลับ', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๕ เสารี ๗ 12.00 น. - 13.30 น.', auspicious: 'เสารีสกุณีไม่เห็นไข่ ก็สงสัยลิงจุ่นมุ่นไปจับ พบลิงไพรถามไตร่ก็ไม่รับ ก็เถียงกับนกกระจาบถึงหยาบคาย', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๖ ครู ๕ 13.30 น. - 15.00 น.', auspicious: 'ยามครูมุนีพิพากษา ว่ามึงมาอาศัยไข่เขาหาย บอกจริง ๆ ลิงจุ่นอย่าวุ่นวาย ลิงผู้ร้ายกลับเถียงขึ้นเสียงดัง', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๗ ภุมมะ ๓ 15.00 น. - 16.30 น.', auspicious: 'ภุมมะพระสิทธาคว้าเชือกเข้า มัดลิงเฒ่าศอกชิดติดสันหลัง จึงคืนไข่ให้นกกระจาบคาบไปรัง แต่ลิงยังไม่พ้นทนทรมา', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๘ สุริชะ ๑ 16.30 น. - 18.00 น.', auspicious: 'สุริชะฤาษีจึงสอนว่า ทีนี้อย่าโว้เว้อ้ายเดระฉาน แล้วปล่อยลิงวิ่งโผนโจนทะยาน ไปสำราญอยู่ที่เขาลำเนาดง', samTaUp: '๒', samTaRam: '๓' },
    ];

    // ข้อมูลฤกษ์ยามวันอาทิตย์ (กลางคืน) พร้อมข้อมูลยามสามตา
    const nightTimes = [
        { time: 'ยาม ๑ ระวิ ๑ 18.00 น. - 19.30 น.', auspicious: 'ระวิยามงามเลิศประเสริฐทรัพย์ ตามฉบับบอกไว้อย่าไหลหลง มโหสถคิดอ่านการณรงค์ ขุดอุโมงค์เข้าเมืองท้าวจุลนี', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๒ ชีโว ๕ 19.30 น. - 21.00 น.', auspicious: 'ชีโวพลโฮ่กระหึ่มฮืก ออกสอึกองอาจดังราชสีห์ ก็ยกทัพเคลื่อนคลาจากธานี ไปถึงที่ประทับตั้งทัพไชย', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๓ ศะศิ ๒ 21.00 น. - 22.30 น.', auspicious: 'ศะศิตริกล่าวท้าววิเท่ห์ สมคะเนนึกอนงค์ยังหลงไหล ถึงนิเวศน์เวียงวังตั้งพระทัย ตามมโหสถไปไม่ช้าที', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๔ ศุโกร ๖ 22.30 น. - 24.00 น.', auspicious: 'ศุโกรโอ้ท้าวเธอทุกข์เทวษ ทอดพระเนตรนกไม้ในไพรสี แล้วคนึงถึงลูกสาวท้าวจุลนี จนถึงที่กองทัพพลับพลาไชย', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๕ ภุมโม ๓ 24.00 น. - 01.30 น.', auspicious: 'ภุมโมโยธาสิบห้าแสน เสทือนแน่นโลกาสุธาไหว ทั้งแตรสังข์กึกก้องแซ่ซ้องไพร แห่ห้อมล้อมไปจนถึงเมือง', samTaUp: '๑', samTaRam: '๒' },
        { time: 'ยาม ๖ โสโร ๗ 01.30 น. - 03.00 น.', auspicious: 'เสารีรีบรุดมุดขึ้นได้ ก็จับชาวเวียงไชยมาแน่นเนือง ทั้งลูกสาวเข้าของก็นองเนือง ได้บ้านเมืองหมดทั่วทั้งรั้ววัง', samTaUp: '๒', samTaRam: '๓' },
        { time: 'ยาม ๗ พุโธ ๔ 03.00 น. - 04.30 น.', auspicious: 'พุโธโอ้ท้าวจุลนีราช แพ้เจ้าปราชญ์คิดไว้ไม่สมหวัง เธอเสียลูกเสียเมียเสียเวียงวัง ก็เสียทั้งไพร่พลแลมนตรี', samTaUp: '๓', samTaRam: '๑' },
        { time: 'ยาม ๘ ระวิ ๑ 04.30 น. - 06.00 น.', auspicious: 'ระวิยามงามสุดปัจจุสมัย จวนจะใกล้รุ่งรางสว่างศรี ได้เมื่อครั้งคราวท้าวจุลนี เธอเสียทีกับองค์พระทรงญาณ', samTaUp: '๑', samTaRam: '๒' },
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center md:text-left">ฤกษ์ยามวันอาทิตย์</h1>

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

export default SundayAuspiciousTimes;