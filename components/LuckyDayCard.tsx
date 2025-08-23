'use client';

import React from 'react';

// กำหนดประเภทของ props สำหรับ LuckyDayCard เพื่อความปลอดภัยของข้อมูล
interface LuckyDayCardProps {
    day: string;
    meaning: string;
    status: 'ดี' | 'ไม่ดี';
}

/**
 * คอมโพเนนต์สำหรับแสดงข้อมูลดิถีฤกษ์ไชยในแต่ละวัน
 * @param {LuckyDayCardProps} props - ข้อมูลวัน, ความหมาย, และสถานะ
 */
const LuckyDayCard: React.FC<LuckyDayCardProps> = ({ day, meaning, status }) => {
    // กำหนดสีตามสถานะ 'ดี' หรือ 'ไม่ดี'
    const statusColor = status === 'ดี' ? 'text-secondary-gold' : 'text-red-400';

    return (
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md border border-secondary-gold/20 flex flex-col items-start space-y-1">
            <p className="text-lg font-semibold">
                <span className={`font-bold ${statusColor}`}>{day} :</span>
                <span className="text-white ml-2">{meaning} ({status})</span>
            </p>
        </div>
    );
};

export default LuckyDayCard;
