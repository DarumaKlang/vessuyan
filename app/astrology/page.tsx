// src/app/astrology/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AstrologyPage() {
    const articles = [
        { href: "/astrology/lucky-day", title: "ดิถีฤกษ์ไชย", desc: "ปฏิทินแห่งความมงคลสำหรับกิจกรรมสำคัญ", color: "cyan" },
        { href: "/astrology/yamathaglan", title: "ยามอัฐกาล", desc: "เวลาแห่งความเจริญรุ่งเรือง", color: "violet" },
        { href: "/astrology/double-number", title: "\"คู่เลข\" หรือ \"เลขคู่มงคล\"", desc: "การนำเลขสองตัวมาจับคู่กันเพื่อเสริมดวงในด้านต่างๆ", color: "magenta" },
        { href: "/astrology/taksa", title: "ทักษา", desc: "ตำแหน่งทักษาดาว ที่จะบอกคุณและโทษ", color: "cyan" },
        { href: "/astrology/domicile", title: "ดาวเกษตร และ ดาวประเกษตร", desc: "ความหมายของดาวเกษตร และ ดาวประเกษตร", color: "violet" },
        { href: "/astrology/exaltation", title: "ดวงมหาอุจจ์", desc: "ความแข็งแกร่งในผลงาน และ หน้าที่การงาน", color: "magenta" },
        { href: "/astrology/fall", title: "ดวงนิจจ์", desc: "ตำแหน่งที่ดาวเคราะห์ โคจรไปอยู่ในจุดที่ต่ำที่สุด ในจักรราศี", color: "cyan" },
        { href: "/astrology/mahajak", title: "ดวงมหาจักร", desc: "ตำแหน่งดาวที่ให้คุณอย่างยิ่ง ในด้านความเจริญรุ่งเรือง", color: "violet" },
        { href: "/astrology/year", title: "เกี่ยวกับ ปี", desc: "เกี่ยวกับ ปีจันทรคติ ปีสุริยคติ และ ปีนักษัตร", color: "magenta" },
        { href: "/astrology/zodiact", title: "จักราศี", desc: "คำทำนายเกี่ยวกับ ๑๒ ราศี", color: "cyan" },
        { href: "/astrology/starlore", title: "กลุ่มดาวฤกษ์ ๒๗", desc: "คำทำนายดาวฤกษ์ทั้ง ๒๗ กลุ่มดาว", color: "violet" },
        { href: "/astrology/galakini", title: "ทักษา กาลกิณี", desc: "คำทำนายดาวทั้ง ๘ ที่ตก กาลกิณี", color: "magenta" },
    ];

    return (
        <main className="relative min-h-screen bg-gradient-cosmic overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0 text-white">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse-delayed"></div>
            </div>

            <Navbar />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 overflow-hidden">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text drop-shadow-glow-purple">
                        📜 บทความยอดนิยม
                    </h1>
                    <p className="text-purple-200 text-lg md:text-xl font-light">
                        ศาสตร์แห่งดวงดาวที่สืบทอดมารุ่นต่อรุ่น เพื่อความสำเร็จและมงคลชีวิต
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
                                            <span className="text-xl">📖</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-secondary-gold group-hover:text-white transition-colors drop-shadow-sm">{article.title}</h2>
                                        <p className="text-purple-100/70 font-light text-sm line-clamp-2 leading-relaxed">
                                            {article.desc}
                                        </p>
                                        <div className="pt-4 flex items-center gap-2 text-xs font-bold text-accent-cyan uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                            อ่านเพิ่มเติม <span>→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-20 text-center text-purple-300/40 text-[10px] md:text-xs italic">
                    * บทความเหล่านี้รวบรวมจากสถิติและคัมภีร์ดวงชะตาโบราณเพื่อใช้เป็นความรู้เบื้องต้น
                </div>
            </div>
        </main>
    );
}
