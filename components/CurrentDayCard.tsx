'use client';

import React from 'react';
import { DateTime } from 'luxon';
import { dayOfWeekData, starPower } from '@/data/data';

const CurrentDayCard: React.FC = () => {
    // กำหนดเวลาท้องถิ่นให้เป็นโซน Asia/Bangkok (+7)
    const today = DateTime.local().setZone('Asia/Bangkok');
    
    // ปรับ dayIndex ให้ตรงกับการนับวันของไทย (วันอาทิตย์ = 0, วันจันทร์ = 1,...)
    const weekday = today.weekday;
    let dayIndex = weekday % 7;
    
    let currentDayData;
    let starSymbol = null;

    // ตรวจสอบวันพุธกลางคืน (หลัง 18:00 น.)
    if (weekday === 3 && today.hour >= 18) {
        currentDayData = dayOfWeekData.find(item => item.day.includes('วันพุธกลางคืน'));
        const starSymbolMatch = currentDayData?.day.match(/\(.*\)/);
        starSymbol = starSymbolMatch ? starSymbolMatch[0].replace(/[\(\)]/g, '') : null;
    } else {
        currentDayData = dayOfWeekData[dayIndex];
        const starSymbolMatch = currentDayData?.day.match(/\(.*\)/);
        starSymbol = starSymbolMatch ? starSymbolMatch[0].replace(/[\(\)]/g, '') : null;
    }

    if (!currentDayData) {
        return (
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white text-center max-w-sm mx-auto my-8">
                <p className="text-lg text-gray-400">ไม่พบข้อมูลสำหรับวันนี้</p>
            </div>
        );
    }

    const displayOrder = [
        'บริวาร',
        'อายุ',
        'เดช',
        'ศรี',
        'มูละ',
        'อุตสาหะ',
        'มนตรี',
        'กาลกิณี',
    ];
    
    // ตรวจสอบข้อมูลกำลังของดาว
    const power = starSymbol ? starPower[starSymbol as keyof typeof starPower] : 'N/A';

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col justify-start h-full w-full">
            <h2 className="text-2xl font-bold text-secondary-gold mb-4 text-left">
                ข้อมูลประจำวัน
            </h2>
            <div className="flex flex-col space-y-2 w-full text-left">
                <p className="text-md font-bold text-secondary-gold">{currentDayData.day}</p>
                <p className="text-md font-bold">ธาตุประจำวัน : <span className="text-md font-light text-secondary-gold">{currentDayData.element}</span></p>
                <p className="text-md font-bold">กำลังของดาว : <span className="text-md font-light text-secondary-gold">{power}</span></p>
                <p className="text-md font-bold">ทิศประจำวัน : <span className="text-md font-light text-secondary-gold">{currentDayData.direction}</span></p>
                
                {/* เพิ่มส่วนแสดงคาถาบูชาเป็น card มี border */}
                <div className="bg-white/10 p-4 rounded-md mt-4 border border-secondary-gold/30 text-center">
                    <p className="text-xl font-bold text-secondary-gold">{currentDayData.mantraName}</p>
                    <p className="text-xl font-light mt-1 text-gray-200">{currentDayData.mantra}</p>
                </div>

                {/* ตารางสีมงคลยังคงอยู่ใน card มี border */}
                <div className="grid grid-cols-4 gap-2 mt-4 bg-white/10 p-2 rounded-md border border-secondary-gold/30">
                    {displayOrder.map((key) => {
                        const value = currentDayData.luckyColors[key as keyof typeof currentDayData.luckyColors];
                        return (
                            <div key={key} className="flex flex-col items-center text-center p-1">
                                <span
                                    className="w-10 h-10 rounded-full border-2 border-secondary-gold/50"
                                    style={{ backgroundColor: value }}
                                ></span>
                                <span className="mt-1 text-sm font-light">{key}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CurrentDayCard;