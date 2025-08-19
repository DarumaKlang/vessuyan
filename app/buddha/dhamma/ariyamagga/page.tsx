// src/app/buddha/dhamma/ariyamagga/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';

// Data for the 4 stages of enlightenment (Ariya-puggala)
const ariyaPersonaData = [
    {
        title: '๑. พระโสดาบัน',
        intro: 'เป็นอริยบุคคลขั้นต้นที่เข้าสู่กระแสแห่งพระนิพพานอย่างแท้จริง ท่านจะสามารถละสังโยชน์ได้ 3 ประการอย่างเด็ดขาด ได้แก่:',
        sanyojana: [
            'สักกายทิฏฐิ: ความเห็นว่าร่างกายและจิตใจนี้เป็นตัวตนของเรา',
            'วิจิกิจฉา: ความลังเลสงสัยในพระรัตนตรัย (พระพุทธ, พระธรรม, พระสงฆ์)',
            'สีลัพพตปรามาส: ความยึดมั่นในศีลพรตหรือพิธีกรรมที่งมงายโดยไม่มีปัญญา'
        ]
    },
    {
        title: '๒. พระสกทาคามี',
        intro: 'เป็นอริยบุคคลที่สูงขึ้นมาจากพระโสดาบัน ท่านละสังโยชน์ 3 ข้อแรกได้เช่นกัน และยังทำให้กิเลสที่เป็นเหตุแห่งความขัดเคือง (ปฏิฆะ) และความติดข้องในกาม (กามราคะ) เบาบางลงไปอย่างมาก ท่านจะเกิดอีกเพียงแค่ 1 ชาติเท่านั้นก็จะบรรลุอรหันต์',
        sanyojana: [
            'สังโยชน์ 3 ข้อแรก',
            'กามราคะ และ ปฏิฆะ (เบาบางลง)'
        ]
    },
    {
        title: '๓. พระอนาคามี',
        intro: 'เป็นอริยบุคคลที่ไม่กลับมาเกิดในภพภูมิของมนุษย์อีก ท่านละสังโยชน์ได้ถึง 5 ประการอย่างเด็ดขาด ได้แก่:',
        sanyojana: [
            'สักกายทิฏฐิ, วิจิกิจฉา, สีลัพพตปรามาส',
            'กามราคะ: ความพอใจในกาม',
            'ปฏิฆะ: ความขัดเคืองใจ'
        ]
    },
    {
        title: '๔. พระอรหันต์',
        intro: 'เป็นอริยบุคคลขั้นสูงสุดที่บรรลุธรรมขั้นสูงสุดและเข้าถึงนิพพานอย่างสมบูรณ์ ท่านได้ละสังโยชน์ได้ครบทั้ง 10 ประการ ได้แก่:',
        sanyojana: [
            'สังโยชน์ 5 ประการแรก',
            'รูปราคะ: ความพอใจในรูปธรรม',
            'อรูปราคะ: ความพอใจในอรูปธรรม',
            'มานะ: ความถือตัว',
            'อุทธัจจะ: ความฟุ้งซ่าน',
            'อวิชชา: ความไม่รู้แจ้งเห็นจริงในอริยสัจ'
        ]
    }
];

export default function AriyaMaggaPage() {
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

            {/* Content Container */}
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-4 drop-shadow-lg text-center">อริยบุคคล 4</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">เส้นทางสู่การบรรลุธรรม</h2>

                {/* Main Content Card */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
                    <h3 className="text-xl font-bold text-secondary-gold mb-4 text-center">ลำดับขั้นการบรรลุธรรม</h3>

                    {/* Render ariya-puggala stages dynamically from the data array */}
                    {ariyaPersonaData.map((stageData, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            <h4 className="text-xl font-bold text-secondary-gold mb-2 border-b border-secondary-gold/30 pb-2">{stageData.title}</h4>
                            <p className="text-white mt-4 text-sm">{stageData.intro}</p>
                            <ul className="list-disc list-inside mt-2 text-sm text-white">
                                {stageData.sanyojana.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
