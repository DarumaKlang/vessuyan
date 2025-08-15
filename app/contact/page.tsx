// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        birthdate: '',
        birthtime: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        // Google Apps Script Web App URL
        const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbwE4huYFIfOG5xr4QHwaxQC9UGUtHUSMYQeNUmLJXzkdL_kupHY32C0zMLSFpc4ueo/exec';

        try {
            const response = await fetch(appsScriptUrl, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script web apps to avoid CORS issues
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            });

            // Since we use 'no-cors', we can't check response status directly.
            // We'll assume success if the fetch call doesn't throw an error.
            setStatus('success');
            console.log('Form data sent successfully to Google Apps Script.');

            // Optionally reset the form after successful submission
            // setFormData({ name: '', email: '', phone: '', message: '' });

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Contact Page Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-primary-purple opacity-70"></div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ติดต่อและจองคิวดูดวง</h1>

                {/* Contact Form Card */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-secondary-gold/30 w-full max-w-2xl text-center">
                    {status === 'success' ? (
                        <div className="text-center p-8">
                            <h2 className="text-2xl font-bold text-secondary-gold mb-4">ขอบคุณสำหรับข้อมูลครับ!</h2>
                            <p className="text-lg">เราได้รับข้อความของคุณแล้วและจะติดต่อกลับโดยเร็วที่สุด</p>
                        </div>
                    ) : status === 'error' ? (
                        <div className="text-center p-8">
                            <h2 className="text-2xl font-bold text-red-500 mb-4">เกิดข้อผิดพลาด!</h2>
                            <p className="text-lg text-red-300">ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้ง</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <p className="text-lg text-left">
                                กรุณากรอกข้อมูลเพื่อจองคิวดูดวง
                            </p>

                            {/* Name Input */}
                            <input
                                type="text"
                                name="name"
                                placeholder="ชื่อ-นามสกุล"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/20 border border-secondary-gold/50 text-white placeholder-text-light/80 focus:outline-none focus:border-secondary-gold"
                                required
                            />

                            {/* Email Input */}
                            <input
                                type="email"
                                name="email"
                                placeholder="อีเมล"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/20 border border-secondary-gold/50 text-white placeholder-text-light/80 focus:outline-none focus:border-secondary-gold"
                                required
                            />

                            {/* Phone Input */}
                            <input
                                type="tel"
                                name="phone"
                                placeholder="เบอร์โทรศัพท์"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/20 border border-secondary-gold/50 text-white placeholder-text-light/80 focus:outline-none focus:border-secondary-gold"
                                required
                            />

                            {/* Birthdate Input */}
                            <label htmlFor="birthdate" className="text-left text-sm text-white/70">วันเดือนปีเกิด</label>
                            <input
                                type="date"
                                name="birthdate"
                                id="birthdate"
                                value={formData.birthdate}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/20 border border-secondary-gold/50 text-white placeholder-text-light/80 focus:outline-none focus:border-secondary-gold"
                                required
                            />

                            {/* Birthtime Input */}
                            <label htmlFor="birthtime" className="text-left text-sm text-white/70">เวลาเกิด</label>
                            <input
                                type="time"
                                name="birthtime"
                                id="birthtime"
                                value={formData.birthtime}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/20 border border-secondary-gold/50 text-white placeholder-text-light/80 focus:outline-none focus:border-secondary-gold"
                                required
                            />

                            {/* Message Textarea */}
                            <textarea
                                name="message"
                                placeholder="ข้อความเพิ่มเติม (เช่น วันเวลาที่สะดวกให้ติดต่อกลับ)"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-white/20 border border-secondary-gold/50 text-white placeholder-text-light/80 focus:outline-none focus:border-secondary-gold"
                                required
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full px-6 py-3 rounded-lg text-lg font-semibold transition-colors
                           bg-secondary-gold text-primary-purple border border-secondary-gold
                           disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed
                           hover:bg-primary-purple hover:text-secondary-gold"
                            >
                                {status === 'submitting' ? 'กำลังส่ง...' : 'ส่งข้อมูล'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}
