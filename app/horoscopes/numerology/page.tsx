// the science of numbers : /app/horoscopes/numerology/page.tsx
// src/app/horoscopes/numerology/page.tsx
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function NumerologyPage() {
    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Vessuyan Website Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-primary-purple opacity-70"></div>
            </div>

            {/* Header and Navigation */}
            <Navbar />

            {/* Page Content */}
            <div className="relative z-10 flex flex-col items-center min-h-[calc(100vh-100px)] text-center text-white p-8 pt-24 md:pt-32">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-secondary-gold/30 max-w-4xl w-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-gold drop-shadow-lg mb-4">ศาสตร์ตัวเลข</h1>
                    <p className="text-lg text-white mb-6">ความหมายของตัวเลขที่คุณไม่เคยรู้</p>
                    {/* Add content for numerology here */}
                    <div className="mt-8 text-left">
                        <p className="text-white">เนื้อหาและฟังก์ชันของศาสตร์ตัวเลขจะถูกเพิ่มในภายหลัง...</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
