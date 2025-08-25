// src/app/astrology/taksa/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Card3x3 from '@/components/Card3x3';

const TaksaPage = () => {
    const numbersToDisplay = ['๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘'];

    return (
        <main className="relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Astrology Articles Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-primary-purple opacity-70"></div>
            </div>

            <Navbar />

            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto flex flex-col items-center">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">
                    มหาทักษา
                </h1>
                
                <Card3x3 numbers={numbersToDisplay} />

            </div>
        </main>
    );
};

export default TaksaPage;