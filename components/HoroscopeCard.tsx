// src/components/HoroscopeCard.tsx
'use client';

import React from 'react';
import { dayMap, zodiacMap, getZodiacSign, numMap } from '@/constants';

interface HoroscopeCardProps {
    b_day: string;
    b_date: string;
    b_month: string;
    b_year: string;
    b_time: string;
}

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({ b_day, b_date, b_month, b_year, b_time }) => {
    // Convert day of the week to a number
    const dayValue = dayMap[b_day.trim()];
    const dayThaiNumeral = numMap[dayValue];

    // Get the zodiac sign
    const zodiacSign = getZodiacSign(parseInt(b_year, 10));

    // A simple prediction based on the day of the week and zodiac sign
    const getPrediction = (day: string, zodiac: string) => {
        let prediction = '';
        switch (day) {
            case 'อาทิตย์':
                prediction = 'วันนี้คุณมีเกณฑ์จะได้รับข่าวดีจากผู้ใหญ่ การเงินราบรื่นดี แต่ควรระวังเรื่องการใช้จ่ายที่ไม่จำเป็น';
                break;
            case 'จันทร์':
                prediction = 'มีโอกาสในเรื่องงานเข้ามาใหม่ๆ ให้ลองพิจารณา การเดินทางราบรื่นดี สุขภาพแข็งแรง';
                break;
            case 'อังคาร':
                prediction = 'ต้องใช้ความอดทนในการทำงานเป็นพิเศษ อาจมีเรื่องที่ต้องแก้ไขปัญหาเฉพาะหน้า ให้ระวังคำพูด';
                break;
            case 'พุธ':
                prediction = 'ความรักสดใส คนโสดมีโอกาสได้เจอคนที่ถูกใจ การงานต้องใช้ความคิดสร้างสรรค์จะนำมาซึ่งความสำเร็จ';
                break;
            case 'พฤหัสบดี':
                prediction = 'มีโชคลาภจากการเสี่ยงโชคเล็กน้อย การลงทุนต้องพิจารณาอย่างรอบคอบ มีโอกาสได้เดินทางท่องเที่ยว';
                break;
            case 'ศุกร์':
                prediction = 'การงานประสบความสำเร็จดี มีผู้ใหญ่ให้การสนับสนุน การเงินมีรายรับเข้ามาจากหลายทาง';
                break;
            case 'เสาร์':
                prediction = 'ควรพักผ่อนให้เพียงพอ อาจมีเรื่องให้ต้องเหน็ดเหนื่อย การทำงานเป็นทีมจะช่วยให้บรรลุเป้าหมายได้ดี';
                break;
            default:
                prediction = 'ไม่สามารถคำนวณคำทำนายได้ กรุณาตรวจสอบข้อมูลวันเกิด';
        }

        // Add a specific detail based on the zodiac sign
        if (zodiac === 'ชวด') {
            prediction += ' (ปีชวด: มีเกณฑ์จะได้รับลาภลอย)';
        } else if (zodiac === 'เถาะ') {
            prediction += ' (ปีเถาะ: การงานมีเกณฑ์ก้าวหน้าอย่างรวดเร็ว)';
        }

        return prediction;
    };

    const predictionText = getPrediction(b_day, zodiacSign);

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 flex flex-col items-center mt-8">
            <h3 className="text-xl font-bold text-secondary-gold mb-4 drop-shadow">คำทำนายดวงชะตา</h3>
            <div className="text-left w-full space-y-4">
                <p className="text-white">
                    <span className="font-bold">วันเกิด:</span> {b_day} ({dayValue})
                </p>
                <p className="text-white">
                    <span className="font-bold">ปีนักษัตร:</span> {zodiacSign}
                </p>
                <p className="text-white">
                    <span className="font-bold">คำทำนาย:</span>
                </p>
                <p className="text-lg text-white/90 leading-relaxed indent-8">
                    {predictionText}
                </p>
            </div>
        </div>
    );
};

export default HoroscopeCard;