// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/40 border-b border-accent-magenta/20">
            <nav className="w-full px-4 sm:px-6 py-4">
                {/* Mobile & Desktop Container */}
                <div className="flex items-center justify-between">
                    {/* Logo - Mobile First */}
                    <Link 
                        href="/" 
                        className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-accent via-secondary-gold to-accent-cyan bg-clip-text text-transparent hover:scale-105 transition-transform"
                    >
                        ✨ Vessuyan
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-8">
                        <li><Link href="/" className="text-sm text-text-light hover:text-neon-violet transition-colors font-medium">หน้าแรก</Link></li>
                        <li><Link href="/astrology" className="text-sm text-text-light hover:text-neon-violet transition-colors font-medium">บทความ</Link></li>
                        <li><Link href="/buddha" className="text-sm text-text-light hover:text-neon-violet transition-colors font-medium">พุทธศาสนา</Link></li>
                        <li><Link href="/contact" className="text-sm text-text-light hover:text-accent-cyan transition-colors font-medium">ติดต่อ</Link></li>
                    </ul>

                    {/* Right Side - Auth Buttons & Menu Toggle */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {session?.user ? (
                            <Link href="/dashboard">
                                <button className="text-xs sm:text-sm px-3 sm:px-4 py-2 bg-primary-accent hover:bg-primary-accent/80 text-white rounded-lg transition-colors font-semibold">
                                    {session.user.name || 'Dashboard'}
                                </button>
                            </Link>
                        ) : (
                            <>
                                <Link href="/auth/signin">
                                    <button className="text-xs sm:text-sm px-3 sm:px-4 py-2 text-text-light hover:text-neon-violet transition-colors font-medium">
                                        เข้าสู่ระบบ
                                    </button>
                                </Link>
                                <Link href="/auth/signup">
                                    <button className="text-xs sm:text-sm px-3 sm:px-4 py-2 bg-primary-accent hover:bg-primary-accent/80 text-white rounded-lg transition-colors font-semibold">
                                        สมัครสมาชิก
                                    </button>
                                </Link>
                            </>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-text-light hover:text-neon-violet transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-accent-magenta/20 pt-4">
                        <ul className="space-y-3">
                            <li><Link href="/" className="block text-sm text-text-light hover:text-neon-violet transition-colors font-medium py-2">หน้าแรก</Link></li>
                            <li><Link href="/astrology" className="block text-sm text-text-light hover:text-neon-violet transition-colors font-medium py-2">บทความ</Link></li>
                            <li><Link href="/buddha" className="block text-sm text-text-light hover:text-neon-violet transition-colors font-medium py-2">พุทธศาสนา</Link></li>
                            <li><Link href="/contact" className="block text-sm text-text-light hover:text-accent-cyan transition-colors font-medium py-2">ติดต่อ</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
