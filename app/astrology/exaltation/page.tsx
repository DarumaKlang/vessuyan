// src/app/astrology/exaltation/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ExaltationPage() {

    return (
        <main className="relative min-h-screen">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-vessuyan.png"
                    alt="Astrology Background"
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ดวงมหาอุจจ์: ความแข็งแกร่งในผลงาน และ หน้าที่การงาน</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">หลักการโหราศาสตร์เบื้องต้น</h2>

                {/* Section for Exalted Planets */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    <p className="text-white mb-4">
                        ในโหราศาสตร์ไทย <strong>"ดวงอุจ"</strong> หรือ <strong>"ดวงมหาอุจจ์"</strong> คือตำแหน่งที่ดาวเคราะห์โคจรไปอยู่ในจุดที่สูงที่สุดในท้องฟ้า ซึ่งเป็นตำแหน่งที่ให้คุณอย่างรุนแรงและรวดเร็ว เปรียบเสมือนดาวที่เปล่งประกายเจิดจ้าและมีพลังงานเต็มที่
                    </p>

                    <div className="flex justify-center my-6">
                        <Image
                            src="/exaltation.png"
                            alt="Exaltation Chart"
                            width={400}
                            height={400}
                        />
                    </div>

                    <h3 className="text-xl font-bold text-secondary-gold mt-6 mb-2">ตำแหน่งดาวอุจในจักรราศี</h3>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li><strong>ดาวอาทิตย์ (๑)</strong> เป็นอุจใน ราศีเมษ</li>
                        <li><strong>ดาวจันทร์ (๒)</strong> เป็นอุจใน ราศีพฤษภ</li>
                        <li><strong>ดาวอังคาร (๓)</strong> เป็นอุจใน ราศีมังกร</li>
                        <li><strong>ดาวพุธ (๔)</strong> เป็นอุจใน ราศีกันย์</li>
                        <li><strong>ดาวพฤหัสบดี (๕)</strong> เป็นอุจใน ราศีกรกฎ</li>
                        <li><strong>ดาวศุกร์ (๖)</strong> เป็นอุจใน ราศีมีน</li>
                        <li><strong>ดาวเสาร์ (๗)</strong> เป็นอุจใน ราศีตุล</li>
                        <li><strong>พระราหู (๘)</strong> เป็นอุจใน ราศีพิจิก</li>
                    </ul>

                    <h3 className="text-xl font-bold text-secondary-gold mb-2">ความหมายที่เกี่ยวข้องกับงานและอาชีพ</h3>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li><strong>ความแข็งแกร่งในผลงาน :</strong> ผู้ที่มีดาวอุจในดวงชะตา มักจะมีความสามารถโดดเด่นในหน้าที่การงาน สร้างผลงานได้อย่างมีคุณภาพสูงและเป็นที่ประจักษ์แก่ผู้อื่น</li>
                        <li><strong>ตำแหน่งหน้าที่การงานที่รุ่งโรจน์ :</strong> ส่งผลให้มีโอกาสก้าวหน้าในตำแหน่งอย่างรวดเร็ว ได้รับการเลื่อนขั้นเลื่อนตำแหน่ง หรือมีอำนาจในการปกครองดูแลผู้อื่น</li>
                        <li><strong>ความสำเร็จและชื่อเสียง :</strong> โชคชะตาจะนำพาไปสู่ความสำเร็จที่ยิ่งใหญ่ มีชื่อเสียงโด่งดังในสายอาชีพของตนเอง และเป็นที่นับหน้าถือตาในสังคม</li>
                        <li><strong>โภคทรัพย์และความมั่งคั่ง :</strong> ความสำเร็จในหน้าที่การงานจะนำมาซึ่งความมั่งคั่งและทรัพย์สินที่เพิ่มพูนขึ้นอย่างต่อเนื่อง</li>
                    </ul>

                    <p className="text-white mt-6">
                        กล่าวโดยสรุป <strong>"ดวงมหาอุจจ์"</strong> เป็นหนึ่งในตำแหน่งที่ดีที่สุดในดวงชะตา บ่งบอกถึงศักยภาพที่ไร้ขีดจำกัดในการสร้างความสำเร็จและความก้าวหน้าในอาชีพการงานครับ
                    </p>
                </div>
            </div>
        </main>
    );
}