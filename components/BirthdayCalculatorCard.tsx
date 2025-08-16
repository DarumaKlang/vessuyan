// src/components/BirthdayCalculatorCard.tsx
'use client';

import React, { useState } from 'react';
import { dayMap, getZodiacSign } from '@/constants';
import HoroscopeCard from './HoroscopeCard';

const BirthdayCalculatorCard = () => {
    const [b_day, setB_day] = useState('');
    const [b_date, setB_date] = useState('');
    const [b_month, setB_month] = useState('');
    const [b_year, setB_year] = useState('');
    const [b_time, setB_time] = useState('');
    const [calculatedData, setCalculatedData] = useState<{
        b_day: string;
        b_date: string;
        b_month: string;
        b_year: string;
        b_time: string;
        ageYears: number;
        ageMonths: number;
        ageDays: number;
        zodiacSign: string;
    } | null>(null);

    const calculateNumber = () => {
        // Basic validation
        if (!b_day || !b_date || !b_month || !b_year) {
            setCalculatedData(null);
            alert('กรุณากรอกข้อมูลวัน, วันที่, เดือน และปีเกิด');
            return;
        }

        // Convert day of the week to a number
        const dayValue = dayMap[b_day.trim()];
        if (!dayValue) {
            setCalculatedData(null);
            alert('กรุณากรอกวันเกิดให้ถูกต้อง (อาทิตย์-เสาร์)');
            return;
        }

        // Convert Buddhist year to Gregorian year
        const birthYearAD = parseInt(b_year, 10) - 543;
        const birthDate = new Date(birthYearAD, parseInt(b_month, 10) - 1, parseInt(b_date, 10));
        const today = new Date();

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            ageDays += prevMonthLastDay;
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        const zodiacSign = getZodiacSign(parseInt(b_year, 10));

        setCalculatedData({
            b_day,
            b_date,
            b_month,
            b_year,
            b_time,
            ageYears,
            ageMonths,
            ageDays,
            zodiacSign
        });
    };

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-secondary-gold mb-4 drop-shadow">คำนวณอายุ</h2>

            <div className="space-y-4 w-full">
                {/* Input fields */}
                <div className="flex items-center space-x-2">
                    <label htmlFor="b_day" className="w-1/4 text-white">วัน:</label>
                    <input
                        type="text"
                        id="b_day"
                        value={b_day}
                        onChange={(e) => setB_day(e.target.value)}
                        className="w-3/4 p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                        placeholder="เช่น วันอาทิตย์"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <label htmlFor="b_date" className="w-1/4 text-white">วันที่:</label>
                    <input
                        type="text"
                        id="b_date"
                        value={b_date}
                        onChange={(e) => setB_date(e.target.value)}
                        className="w-3/4 p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                        placeholder="เช่น 12"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <label htmlFor="b_month" className="w-1/4 text-white">เดือน:</label>
                    <input
                        type="text"
                        id="b_month"
                        value={b_month}
                        onChange={(e) => setB_month(e.target.value)}
                        className="w-3/4 p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                        placeholder="เช่น 1 (มกราคม)"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <label htmlFor="b_year" className="w-1/4 text-white">ปี:</label>
                    <input
                        type="text"
                        id="b_year"
                        value={b_year}
                        onChange={(e) => setB_year(e.target.value)}
                        className="w-3/4 p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                        placeholder="เช่น 2568"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <label htmlFor="b_time" className="w-1/4 text-white">เวลา:</label>
                    <input
                        type="text"
                        id="b_time"
                        value={b_time}
                        onChange={(e) => setB_time(e.target.value)}
                        className="w-3/4 p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-gold"
                        placeholder="เช่น 14:30 (ถ้าทราบ)"
                    />
                </div>

                {/* Button to calculate */}
                <button
                    onClick={calculateNumber}
                    className="w-full mt-4 px-6 py-3 text-lg rounded-full text-white font-bold drop-shadow-lg transition-all transform hover:scale-105 bg-secondary-gold hover:bg-gold-600 cursor-pointer"
                >
                    คำนวณ
                </button>
            </div>

            {/* Display results */}
            {calculatedData && (
                <>
                    <div className="mt-4 p-4 rounded-md bg-white/20 border border-secondary-gold/50 text-white text-center w-full whitespace-pre-line">
                        <h3 className="text-xl font-bold mb-2">ข้อมูลที่คำนวณได้:</h3>
                        <p className="text-xl font-medium">
                            วัน: {calculatedData.b_day} ({dayMap[calculatedData.b_day]})
                            <br />
                            วันที่: {calculatedData.b_date}
                            <br />
                            เดือน: {calculatedData.b_month}
                            <br />
                            ปี: {calculatedData.b_year}
                            <br />
                            ปีนักษัตร: {calculatedData.zodiacSign}
                            <br />
                            เวลา: {calculatedData.b_time || 'ไม่ได้ระบุ'}
                            <br />
                            อายุ: {calculatedData.ageYears} ปี {calculatedData.ageMonths} เดือน {calculatedData.ageDays} วัน
                        </p>
                    </div>
                    <HoroscopeCard {...calculatedData} />
                </>
            )}
        </div>
    );
};

export default BirthdayCalculatorCard;
