// src/app/buddha/dhamma/nyan/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';

// Data for the 16 stages of Yana (Ñāṇa)
const yanaData = [
    {
        category: '๑. ปริเฉทญาณ (ญาณเครื่องกำหนด)',
        stages: [
            {
                title: 'นามรูปปริจเฉทญาณ',
                description: 'ญาณที่รู้และแยกความแตกต่างระหว่าง รูป (ร่างกาย) กับ นาม (จิตใจ)'
            },
            {
                title: 'ปัจจยปริคคหญาณ',
                description: 'ญาณที่รู้เหตุปัจจัยที่ทำให้รูปและนามเกิดขึ้น'
            }
        ]
    },
    {
        category: '๒. วิปัสสนาญาณ 9 (ญาณที่ทำให้เกิดความเห็นแจ้ง)',
        stages: [
            {
                title: 'สัมมสนญาณ',
                description: 'ญาณที่พิจารณาเห็นรูปและนามตามไตรลักษณ์ ได้แก่ อนิจจัง (ไม่เที่ยง), ทุกขัง (เป็นทุกข์), และ อนัตตา (ไม่ใช่ตัวตน)'
            },
            {
                title: 'อุทยัพพยญาณ',
                description: 'ญาณที่เห็นความเกิดขึ้นและดับไปของรูปนาม'
            },
            {
                title: 'ภังคานุปัสสนาญาณ',
                description: 'ญาณที่เห็นความดับไปของสังขารอย่างชัดเจน'
            },
            {
                title: 'ภยตูปัฏฐานญาณ',
                description: 'ญาณที่เห็นสังขารเป็นของน่ากลัว'
            },
            {
                title: 'อาทีนวานุปัสสนาญาณ',
                description: 'ญาณที่เห็นโทษของสังขาร'
            },
            {
                title: 'นิพพิทานุปัสสนาญาณ',
                description: 'ญาณที่รู้สึกเบื่อหน่ายในสังขาร'
            },
            {
                title: 'มุจจิตุกัมยตาญาณ',
                description: 'ญาณที่อยากจะหลุดพ้นจากสังขาร'
            },
            {
                title: 'ปฏิสังขานุปัสสนาญาณ',
                description: 'ญาณที่พิจารณาสังขารเพื่อหาทางหลุดพ้นอีกครั้ง'
            },
            {
                title: 'สังขารุเปกขาญาณ',
                description: 'ญาณที่วางเฉยต่อสังขาร'
            }
        ]
    },
    {
        category: '๓. โลกุตตรญาณ 4 (ญาณขั้นโลกุตระ)',
        stages: [
            {
                title: 'อนุโลมญาณ',
                description: 'ญาณที่เป็นไปตามคลองแห่งอริยสัจ 4'
            },
            {
                title: 'โคตรภูญาณ',
                description: 'ญาณที่เปลี่ยนจากปุถุชนไปสู่อริยบุคคล'
            },
            {
                title: 'มรรคญาณ',
                description: 'ญาณในมรรค 4 ที่ทำให้เกิดความรู้แจ้งในอริยสัจ 4 และละกิเลสได้'
            },
            {
                title: 'ผลญาณ',
                description: 'ญาณที่เป็นผลจากการละกิเลสด้วยมรรคญาณ'
            },
            {
                title: 'ปัจจเวกขณญาณ',
                description: 'ญาณที่พิจารณาทบทวนมรรค, ผล, และกิเลสที่ละได้แล้ว'
            }
        ]
    }
];

export default function NyanPage() {
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
                <h1 className="text-4xl font-bold text-secondary-gold mb-4 drop-shadow-lg text-center">โสฬสญาณ</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ญาณ 16 ขั้น ลำดับการปฏิบัติทางปัญญา</h2>

                {/* Main Content Card */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
                    <h3 className="text-xl font-bold text-secondary-gold mb-4 text-center">วิปัสสนาญาณ 16 (โสฬสญาณ)</h3>

                    {/* Render Yana categories and stages dynamically from the data array */}
                    {yanaData.map((categoryData, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            {/* Category Heading */}
                            <h4 className="text-xl font-bold text-secondary-gold mb-2 border-b border-secondary-gold/30 pb-2">{categoryData.category}</h4>

                            {/* List of stages */}
                            {categoryData.stages.map((stage, stageIndex) => (
                                <div key={stageIndex} className="mb-4 last:mb-0 pl-4">
                                    <p className="font-bold text-lg text-secondary-gold">{stage.title}</p>
                                    <p className="text-white mt-1 text-sm">{stage.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
