'use client';

import React, { useState, useEffect } from 'react';
import { yamAthagranData, DayType, YamaType } from '../data/data';
import { getThaiAstrologyInfo } from '@/lib/thai-astrology';

// Interface สำหรับข้อมูลที่คืนค่าจาก Server Action.
interface AstrologyResult {
    html: string;
    dayOfWeekIndex: number;
    yamNumber: number;
    yamPeriod: "กลางวัน" | "กลางคืน";
}

// ฟังก์ชันสำหรับแปลงเลขอะราบิกเป็นเลขไทย
const toThaiNumerals = (num: number): string => {
    const thaiNumerals = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
    return num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');
};

const YamaAthaganClock: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [astrologyData, setAstrologyData] = useState<AstrologyResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    // Initial mount and time update
    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Fetch astrology data from server action every minute
    useEffect(() => {
        const fetchAstrologyData = async () => {
            try {
                // ส่งค่าวันที่ปัจจุบันไปยัง Server Action
                const result = await getThaiAstrologyInfo(new Date().toISOString());
                if (typeof result === 'string') {
                    // Handle error string returned by the server action
                    console.error('Error fetching astrology data:', result);
                    setAstrologyData(null);
                } else {
                    setAstrologyData(result);
                }
            } catch (error) {
                console.error('Failed to fetch astrology data:', error);
                setAstrologyData(null);
            } finally {
                setIsLoading(false);
            }
        };

        // Fetch initially and then every minute
        fetchAstrologyData();
        const minuteInterval = setInterval(fetchAstrologyData, 60000);

        // Clear interval on component unmount
        return () => clearInterval(minuteInterval);
    }, []);

    // คำนวณเวลาที่เหลือในยามปัจจุบันแบบเรียลไทม์
    const calculateRemainingTime = () => {
        if (!astrologyData) return null;

        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        let endHour = 0;
        let endMinute = 0;

        if (astrologyData.yamPeriod === "กลางวัน") {
            const startHour = 6 + (astrologyData.yamNumber - 1) * 1.5;
            endHour = startHour + 1.5;
            endMinute = (endHour - Math.floor(endHour)) * 60;
            endHour = Math.floor(endHour);
        } else {
            const startHour = 18 + (astrologyData.yamNumber - 1) * 1.5;
            endHour = startHour + 1.5;
            endMinute = (endHour - Math.floor(endHour)) * 60;
            endHour = Math.floor(endHour);
            if (endHour >= 24) {
                endHour -= 24;
            }
        }
        
        const nowInMinutes = hours * 60 + minutes;
        const endInMinutes = endHour * 60 + endMinute;

        let remainingMinutes = endInMinutes - nowInMinutes;
        if (remainingMinutes < 0) {
            remainingMinutes += (astrologyData.yamPeriod === "กลางวัน") ? 1440 : 1440; // 24 hours
        }

        const remainingHours = Math.floor(remainingMinutes / 60);
        const remainingMin = Math.floor(remainingMinutes % 60);
        const remainingSec = 60 - seconds;

        return `${String(remainingHours).padStart(2, '0')} ชั่วโมง ${String(remainingMin).padStart(2, '0')} นาที ${String(remainingSec).padStart(2, '0')} วินาที`;
    };

    const remainingTime = calculateRemainingTime();
    const dayOfWeek = astrologyData ? yamAthagranData[Object.keys(yamAthagranData)[astrologyData.dayOfWeekIndex] as DayType] : null;
    const yamaData = dayOfWeek ? dayOfWeek[astrologyData!.yamPeriod][astrologyData!.yamNumber - 1] : null;

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col">
            <h2 className="text-2xl font-bold text-secondary-gold mb-2">
                นาฬิกายามอัฐกาล
            </h2>
            <div className="flex flex-col space-y-4">
                {isLoading && (
                    <p>กำลังคำนวณยาม...</p>
                )}
                {!isLoading && astrologyData && (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: astrologyData.html }} />
                        
                        {/* จัดกึ่งกลางสำหรับข้อมูลยาม */}
                        <div className="bg-white/10 p-4 rounded-md mt-4 border border-secondary-gold/30 text-center">
                            <p className="text-xl font-bold">
                                ยามที่: <span className="text-secondary-gold text-3xl">{toThaiNumerals(astrologyData?.yamNumber || 0)}</span>
                                {' '}
                                {astrologyData?.yamPeriod}
                            </p>
                            <p className="text-sm font-light my-2">
                                เวลาที่เหลือในยามนี้
                            </p>
                            <p className="text-2xl font-bold text-secondary-gold drop-shadow-lg">
                                {remainingTime}
                            </p>
                        </div>
                        {/* จัดกึ่งกลางสำหรับคำทำนาย */}
                        {yamaData && (
                            <div className="bg-white/10 p-4 rounded-md mt-4 border border-secondary-gold/30 text-center">
                                <h3 className="text-lg font-bold text-secondary-gold drop-shadow-lg my-2">
                                    {yamaData.ชื่อ}
                                </h3>
                                <p className="text-sm text-gray-200 mt-2">
                                    {yamaData.คำทำนาย}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default YamaAthaganClock;