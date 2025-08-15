// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative z-20 w-full p-6">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-secondary-gold drop-shadow-lg">
                    Vessuyan
                </Link>

                {/* Hamburger Menu Button for Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-lg">
                    <li><Link href="/" className="text-white hover:text-secondary-gold transition-colors">หน้าแรก</Link></li>
                    <li><Link href="/astrology" className="text-white hover:text-secondary-gold transition-colors">บทความ</Link></li>
                    <li><Link href="/buddha" className="text-white hover:text-secondary-gold transition-colors">พุทธศาสนา</Link></li>
                    <li><Link href="/contact" className="text-white hover:text-secondary-gold transition-colors">ติดต่อ</Link></li>
                </ul>
            </nav>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
                <div className="md:hidden bg-primary-purple bg-opacity-80 backdrop-blur-sm mt-4 rounded-lg p-4">
                    <ul className="flex flex-col space-y-4 text-center">
                        <li><Link href="/" className="block text-white hover:text-secondary-gold transition-colors">หน้าแรก</Link></li>
                        <li><Link href="/astrology" className="block text-white hover:text-secondary-gold transition-colors">บทความ</Link></li>
                        <li><Link href="/buddha" className="block text-white hover:text-secondary-gold transition-colors">พุทธศาสนา</Link></li>
                        <li><Link href="/contact" className="block text-white hover:text-secondary-gold transition-colors">ติดต่อ</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}