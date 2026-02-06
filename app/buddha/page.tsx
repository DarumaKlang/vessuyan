// src/app/buddha/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function BuddhaPage() {
    const articles = [
        { href: "/buddha/dhamma", title: "หลักธรรมเบื้องต้น", desc: "ทำความเข้าใจในหลักธรรมสำคัญ เช่น อริยสัจ 4", color: "cyan" },
        { href: "/buddha/respect", title: "พระที่ควรไปไหว้", desc: "รวบรวมสถานที่ศักดิ์สิทธิ์และพระพุทธรูปปางสำคัญ", color: "violet" },
        { href: "/buddha/meditate", title: "การทำสมาธิ", desc: "ประโยชน์และวิธีการฝึกสมาธิเบื้องต้นเพื่อสงบใจ", color: "magenta" },
    ];

    return (
        <main className="relative min-h-screen bg-gradient-cosmic overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0 text-white">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-delayed"></div>
            </div>

            <Navbar />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 overflow-hidden">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text drop-shadow-glow-purple">
                        ☸️ บทความพุทธศาสนา
                    </h1>
                    <p className="text-purple-200 text-lg md:text-xl font-light">
                        แนวทางแห่งปัญญาและความสงบสุข เพื่อการใช้ชีวิตที่สมดุล
                    </p>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-violet to-accent-cyan rounded-full opacity-60"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <Link key={idx} href={article.href} className="group block">
                            <div className="relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.03]">
                                {/* Mirror Border Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-white/40 via-${article.color === 'cyan' ? 'accent-cyan' : article.color === 'violet' ? 'neon-violet' : 'accent-magenta'}/20 to-transparent opacity-60`}></div>

                                <div className="relative glass-lg rounded-2xl h-full overflow-hidden border border-white/10 group-hover:shadow-glow-purple transition-shadow transition-colors">
                                    <div className="bg-gradient-to-br from-black/40 to-black/80 p-8 h-full flex flex-col items-start space-y-3">
                                        <div className={`p-2 rounded-lg bg-${article.color === 'cyan' ? 'cyan' : article.color === 'violet' ? 'purple' : 'pink'}-500/20 text-white border border-white/5`}>
                                            <span className="text-xl">📿</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-secondary-gold group-hover:text-white transition-colors drop-shadow-sm">{article.title}</h2>
                                        <p className="text-purple-100/70 font-light text-sm line-clamp-2 leading-relaxed">
                                            {article.desc}
                                        </p>
                                        <div className="pt-4 flex items-center gap-2 text-xs font-bold text-accent-cyan uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                            เรียนรู้เพิ่มเติม <span>→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-20 text-center text-purple-300/40 text-[10px] md:text-xs italic">
                    * เนื้อหาเพื่อการศึกษาหลักธรรมเบื้องต้นและส่งเสริมความสงบทางจิตใจ
                </div>
            </div>
        </main>
    );
}