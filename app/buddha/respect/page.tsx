// src/app/buddha/dhamma/threefold-training/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function RespectPage() {
    
    const respectActions = [
        {
            title: '๑. พระแก้ว มรกต วัดพระแก้ว :',
            text: '...',
        },
        {
            title: '๒. ศาลเจ้าพ่อหลักเมือง กรุงเทพ :',
            text: '...',
        },
        {
            title: '๓. พระพรหม ที่ โรงแรม เอราวัณ :',
            text: '...',
        },
                {
            title: '๔. พระแม่อุมา วัดแขก สีลม :',
            text: '...',
        },
                {
            title: '๕. เจ้าแม่กวนอิม วัด เล่งไนยี่ เยาวราช :',
            text: '...',
        },
                {
            title: '๖. พระบรมสารีกธาตุ เจดีย์ วัดภูเขาทอง :',
            text: '...',
        },
                {
            title: '๗. พระปฐมเจดีย์ นครปฐม (ทิศใต้) :',
            text: '...',
        },
                {
            title: '๘. วัดป่าเรไลย์ สุพรรณบุรี (ทิศตะวันตก) :',
            text: '...',
        },
                {
            title: '๙. หลวงพ่อโสธร (ทิศตะวันออก) :',
            text: '...',
        },
                {
            title: '๑๐. หลวงพ่อโต วัดมงคลบพิธ อยุธยา (ทิศเหนือ) :',
            text: '...',
        },
                {
            title: '๑๑. พระสงฆ์ ที่ยังมีชีวิตอยู่ 1 รูป :',
            text: '...',
        },
                {
            title: '๑๒. พ่อแม่ถ้ายังมีชีวิตอยู่ แต่ถ้าเสียชีวิตแล้วให้เอาอาหารไปถวายพระสงฆ์ที่วัด :',
            text: '...',
        },
    ];

    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Buddhism Articles Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-primary-purple opacity-70"></div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg">แนะนำไหว้พระเพื่อความเจริญรุ่งเรือง</h1>

                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">

                    {respectActions.map((item, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-2">{item.title}</h2>
                            <p className="text-white">{item.text}</p>
                        </div>
                    ))}
                    <p className="mt-6">
                        ขอให้ท่านทั้งหลายจงประสบแต่ความสุขความเจริญหวั่งสิ่งใดถ้าคิดดีทำดี ขอให้ประสบความสำเร็จทุกๆอย่างดังใจปรารถนาเทอญ
                    </p>
                </div>
            </div>
        </main>
    );
}