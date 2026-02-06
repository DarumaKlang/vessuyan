'use client';

import Navbar from '@/components/Navbar';
import YamaAthaganClock from '@/components/YamaAthaganClock'; // นำเข้า Component นาฬิกายามอัฐกาล
import CurrentDayCard from '@/components/CurrentDayCard';
import CurrentZodiactCard from '@/components/CurrentZodiactCard';

export default function NumerologyPage() {
    return (
        <main className="relative min-h-screen bg-gradient-cosmic overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-delayed"></div>
            </div>

            <Navbar />

            {/* Page Content */}
            <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 overflow-hidden">
                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text drop-shadow-glow-purple">
                        🔮 ศูนย์รวมข้อมูลมงคล
                    </h1>
                    <p className="text-purple-200 text-lg md:text-xl font-light">
                        เช็คดวงชะตา เลขมงคล และแนวทางเสริมบุญประจำวัน
                    </p>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-violet to-accent-cyan rounded-full opacity-60"></div>
                </div>

                {/* 3-Column Layout (Desktop) / 1-Column (Mobile) */}
                {/* Card Component YamaAthaganClock */}
                <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:space-x-4 p-4 gap-4 items-stretch justify-center">
                        <div className="flex-1">
                            <YamaAthaganClock />
                        </div>
                        <div className="flex-1">
                            <CurrentDayCard />
                        </div>
                        <div className="flex-1">
                            <CurrentZodiactCard />
                        </div>
                    </div>

                    {/* Glassmorphism Demo Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Glass SM */}
                        <div className="glass-sm p-4 rounded-lg text-center">
                            <h3 className="text-sm font-bold text-accent-cyan mb-2">Glass SM</h3>
                            <p className="text-xs text-text-muted">Blur: 4px</p>
                        </div>

                        {/* Glass MD */}
                        <div className="glass-md p-4 rounded-lg text-center">
                            <h3 className="text-sm font-bold text-secondary-gold mb-2">Glass MD</h3>
                            <p className="text-xs text-text-muted">Blur: 10px</p>
                        </div>

                        {/* Glass LG */}
                        <div className="glass-lg p-4 rounded-lg text-center">
                            <h3 className="text-sm font-bold text-neon-violet mb-2">Glass LG</h3>
                            <p className="text-xs text-text-muted">Blur: 16px</p>
                        </div>

                        {/* Glass Glow */}
                        <div className="glass-glow-purple p-4 rounded-lg text-center">
                            <h3 className="text-sm font-bold text-neon-violet mb-2">Glass Glow</h3>
                            <p className="text-xs text-text-muted">With neon border</p>
                        </div>
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-16 text-center text-purple-300/40 text-[10px] md:text-xs">
                    ข้อมูลนี้เป็นความเชื่อส่วนบุคคลและสถิติตามโหราศาสตร์ไทยเพื่อใช้เป็นแนวทางเบื้องต้น
                </div>
            </div>
        </main>
    );
}
