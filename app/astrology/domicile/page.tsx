// src/app/astrology/domicile/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AstrologyPage() {
    // Data for Daokaset (Exalted Planet)
    const exaltedPlanets = [
        {
            title: '1. ดาวเกษตร: ตำแหน่งแห่งความมั่นคงและโชคดี',
            text: 'ดาวเกษตรคือตำแหน่งที่ดาวเคราะห์โคจรอยู่ใน "บ้าน" หรือ "เรือน" ของตัวเองในจักรราศี ซึ่งถือว่าเป็นตำแหน่งที่แข็งแกร่งที่สุดและให้ผลดีกับดวงชะตา',
            details: [
                {
                    subtitle: 'ความหมายโดยรวม',
                    description: 'แสดงถึงความมั่นคง, ความอุดมสมบูรณ์, ความสำเร็จ, และวาสนาในด้านต่างๆ',
                },
                {
                    subtitle: 'ลักษณะเด่น',
                    description: 'ผู้ที่มีดาวเกษตรเด่นในดวงชะตามักจะมีบุคลิกที่โดดเด่นตามความหมายของดาวนั้นๆ เช่น **ดาวอาทิตย์ (เกษตร)** จะแสดงถึงเกียรติยศและตำแหน่ง, **ดาวจันทร์ (เกษตร)** แสดงถึงเสน่ห์และความสุภาพ, **ดาวพฤหัสบดี (เกษตร)** แสดงถึงความรู้และคุณธรรม',
                },
                {
                    subtitle: 'ข้อสรุป',
                    description: 'ดาวเกษตรเปรียบเสมือนดาวที่อยู่ในบ้านของตัวเอง ทำให้มีพลังเต็มที่ ส่งเสริมให้เจ้าชะตามีความมั่นคงและประสบความสำเร็จในด้านที่ดาวนั้นๆ ควบคุม',
                },
            ],
        },
    ];

    // Data for Daoprakaset (Debilitated Planet)
    const debilitatedPlanets = [
        {
            title: '2. ดาวประเกษตร: ตำแหน่งแห่งอุปสรรคและความอาภัพ',
            text: 'ดาวประเกษตรคือตำแหน่งที่ดาวเคราะห์โคจรอยู่ในราศีที่ตรงข้ามกับเรือนเกษตรของตัวเอง ซึ่งถือว่าเป็นตำแหน่งที่อ่อนแอและส่งผลในทางลบ',
            details: [
                {
                    subtitle: 'ความหมายโดยรวม',
                    description: 'แสดงถึงอุปสรรค, ความล่าช้า, ความไม่สมหวัง, และความอาภัพในด้านต่างๆ',
                },
                {
                    subtitle: 'ลักษณะเด่น',
                    description: 'ผู้ที่มีดาวประเกษตรในดวงมักจะประสบปัญหาในด้านที่ดาวนั้นๆ เกี่ยวข้อง เช่น **ดาวอาทิตย์ (ประเกษตร)** จะทำให้ขาดเกียรติและมิตรสหาย, **ดาวจันทร์ (ประเกษตร)** ทำให้ชีวิตขาดหลักฐานและต้องพึ่งพาตนเอง, **ดาวศุกร์ (ประเกษตร)** อาจส่งผลให้มีปัญหาสุขภาพหรือรูปลักษณ์',
                },
                {
                    subtitle: 'ข้อสรุป',
                    description: 'ดาวประเกษตรเปรียบเสมือนดาวที่หลงทางหรือไปอยู่ในบ้านที่ไม่ใช่ของตัวเอง ทำให้ไม่มีพลังในการส่งเสริมดวงชะตา ส่งผลให้เกิดความไม่ราบรื่นและต้องใช้ความพยายามอย่างมากในการเอาชนะอุปสรรคเหล่านั้น',
                },
            ],
        },
    ];

    // Overall summary
    const summary = [
        { title: 'ดาวเกษตร', description: 'ดีและแข็งแกร่ง นำมาซึ่งความมั่นคงและสำเร็จ' },
        { title: 'ดาวประเกษตร', description: 'เสื่อมและอ่อนแอ นำมาซึ่งความยากลำบากและอุปสรรค' },
    ];

    // Data for original-domicile
    const originalDomicile = [
        {
            title: 'มาตรฐานดาวเกษตร',
            text: 'ดาวมาตรฐาน หรือ ดวงมาตรฐาน เป็นการแบ่งตำแหน่ง และ ความสัมพันธ์ของดวงดาวในจักรราศี เพื่อใช้ในการพยากรณ์ลักษณะนิสัย บุคลิกภาพ และ เหตุการณ์สำคัญในชีวิตของเจ้าชะตา แต่ละดวงมีลักษณะเฉพาะที่สื่อถึงพลังบวก และ ลบในดวงชะตา',
            details: [
                {
                    subtitle: 'ราศีเมษ',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๓ (ดาวอังคาร)',
                },
                {
                    subtitle: 'ราศีพฤษภ',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๖ (ดาวศุกร์)',
                },
                {
                    subtitle: 'ราศีเมถุน',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๔ (ดาวพุธ)',
                },
                {
                    subtitle: 'ราศีกรกฎ',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๒ (ดาวจันทร์)',
                },
                {
                    subtitle: 'ราศีสิงห์',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๑ (ดาวอาทิตย์)',
                },
                {
                    subtitle: 'ราศีกันย์',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๔ (ดาวพุธ)',
                },
                {
                    subtitle: 'ราศีตุลย์',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๖ (ดาวศุกร์)',
                },
                {
                    subtitle: 'ราศีพิจิก',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๓ (ดาวอังคาร)',
                },
                {
                    subtitle: 'ราศีธนู',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๕ (ดาวพฤหัสบดี)',
                },
                {
                    subtitle: 'ราศีมังกร',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๗ (ดาวเสาร์)',
                },
                {
                    subtitle: 'ราศีกุมภ์',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๘ (ดาวราหู)',
                },
                {
                    subtitle: 'ราศีมีน',
                    description: 'ดาวเกษตรเจ้าเรือน คือ ๕ (ดาวพฤหัสบดี)',
                },
            ],
        },
    ];

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
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">ดาวเกษตรและดาวประเกษตร</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">หลักการโหราศาสตร์เบื้องต้น</h2>

                {/* Section for Exalted Planets */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    {exaltedPlanets.map((item, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-bold text-secondary-gold mb-2">{item.title}</h3>
                            <p className="text-white mb-4">{item.text}</p>
                            {item.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="mb-4">
                                    <h4 className="text-lg font-bold text-secondary-gold">{detail.subtitle}</h4>
                                    <p className="text-white">{detail.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Section for Debilitated Planets */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    {debilitatedPlanets.map((item, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-bold text-secondary-gold mb-2">{item.title}</h3>
                            <p className="text-white mb-4">{item.text}</p>
                            {item.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="mb-4">
                                    <h4 className="text-lg font-bold text-secondary-gold">{detail.subtitle}</h4>
                                    <p className="text-white">{detail.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Overall Summary */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-center mb-8">
                    <h3 className="text-2xl font-bold text-secondary-gold mb-4">สรุปโดยรวม</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {summary.map((item, index) => (
                            <div key={index} className="bg-white/10 p-4 rounded-lg">
                                <p className="text-white"><span className="font-bold text-secondary-gold">{item.title}:</span> {item.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-white text-base">
                        การศึกษาตำแหน่งของดาวทั้งสองแบบในดวงชะตาจึงช่วยให้เข้าใจจุดแข็งและจุดอ่อนของแต่ละบุคคลได้ชัดเจนขึ้น ทำให้สามารถเตรียมรับมือกับโชคชะตาได้อย่างเหมาะสมครับ
                    </p>
                </div>

                {/* Section for original-domicile */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">

                    {/* Image at the bottom */}
                    <div className="flex justify-center mb-8">
                        <Image
                            src="/original-domicile.png"
                            alt="Original Domicile Chart"
                            width={400} // Adjust width as needed
                            height={400} // Adjust height as needed
                        />
                    </div>

                    {originalDomicile.map((item, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-bold text-secondary-gold mb-2">{item.title}</h3>
                            <p className="text-white mb-4">{item.text}</p>
                            {item.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="mb-4">
                                    <h4 className="text-lg font-bold text-secondary-gold">{detail.subtitle}</h4>
                                    <p className="text-white">{detail.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* New Section for Thai Astrology Summary */}
                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
                    <h3 className="text-2xl font-bold text-secondary-gold mb-4">ประเภทของดวงมาตรฐาน</h3>
                    <p className="text-white mb-4">
                        ในการทำนายโหราศาสตร์ไทย **ดวงมาตรฐาน** หรือ **ดาวมาตรฐาน** คือการพิจารณาตำแหน่งของดาวเคราะห์ในจักรราศี ซึ่งแต่ละตำแหน่งจะมีอิทธิพลต่อโชคชะตาและบุคลิกภาพของเจ้าชะตาแตกต่างกันไป โดยสามารถแบ่งประเภทหลักๆ ได้ดังนี้ครับ
                    </p>

                    <h4 className="text-xl font-bold text-secondary-gold mb-2">1. ตำแหน่งดาวที่ให้คุณ (ฝ่ายดี)</h4>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li>
                            <span className="font-bold text-secondary-gold">ดวงเกษตร:</span> ดาวที่อยู่ในเรือนตัวเอง ให้ความหมายถึงความมั่นคงในชีวิต การงาน และฐานะ เป็นสัญลักษณ์แห่งความดีงามและความสมบูรณ์ ตัวอย่างเช่น:
                            <ul className="list-disc list-inside ml-4">
                                <li>**อาทิตย์ (เกษตร):** มีเกียรติยศ, อำนาจ, และความมั่นใจในตนเอง</li>
                                <li>**จันทร์ (เกษตร):** มีเสน่ห์, ความนิ่มนวล, และได้รับความรักจากคนทั่วไป</li>
                                <li>**พฤหัสบดี (เกษตร):** มีปัญญา, ความยุติธรรม, และความรู้สูง</li>
                            </ul>
                        </li>
                        <li><span className="font-bold text-secondary-gold">ดวงอุจ:</span> ดาวที่โคจรถึงจุดสูงสุด ให้คุณอย่างรุนแรงและรวดเร็วในด้านอำนาจ, โภคทรัพย์ และชื่อเสียง</li>
                        <li><span className="font-bold text-secondary-gold">ดวงอุจจาวิลาศ:</span> ดาวที่กำลังไต่เต้าสู่จุดสูงสุด ให้คุณในลักษณะที่กำลังจะเจริญก้าวหน้า มีพลังงานสูงในการผลักดันชีวิต</li>
                        <li><span className="font-bold text-secondary-gold">ดวงอุจจาภิมุข:</span> ดาวที่กำลังโคจรลงจากจุดสูงสุด ให้คุณอยู่บ้างแต่ไม่เต็มที่ มักเป็นไปในลักษณะของ "ทุกขลาภ"</li>
                        <li><span className="font-bold text-secondary-gold">ดวงมหาจักร:</span> ให้คุณอย่างยิ่งใหญ่และแน่นอนในด้านความเจริญรุ่งเรือง ความมั่งคั่ง และอำนาจ</li>
                        <li><span className="font-bold text-secondary-gold">ดวงราชาโชค:</span> เป็นดวงที่มีวาสนาดี มักได้รับการช่วยเหลืออุปถัมภ์จากผู้ใหญ่หรือผู้มีอำนาจ ทำให้มีโอกาสดีๆ เข้ามาในชีวิต</li>
                    </ul>

                    <h4 className="text-xl font-bold text-secondary-gold mb-2">2. ตำแหน่งดาวที่ให้โทษ (ฝ่ายเสีย)</h4>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li>
                            <span className="font-bold text-secondary-gold">ดวงประเกษตร:</span> ดาวที่อยู่ในราศีตรงข้ามกับเรือนตัวเอง ให้ความหมายถึงความผันแปร, อุปสรรค และความไม่ราบรื่นในชีวิต เช่น:
                            <ul className="list-disc list-inside ml-4">
                                <li>**อาทิตย์ (ประเกษตร):** ทรัพย์น้อย, มิตรสหายเบียดเบียน, ทำดีไม่ได้ดี</li>
                                <li>**จันทร์ (ประเกษตร):** รูปร่างไม่สวยงาม, หาหลักฐานไม่ได้, ต้องพึ่งตัวเอง</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold text-secondary-gold">ดวงนิจ:</span> ดาวที่โคจรถึงจุดต่ำสุด ให้โทษร้ายและนำมาซึ่งความตกต่ำ, ความอับเฉา และความวิบัติในด้านต่างๆ เช่น:
                            <ul className="list-disc list-inside ml-4">
                                <li>**จันทร์ (นิจ):** มีโรคภัยไข้เจ็บ, ทรัพย์สินวิบัติ, มักได้คู่ครองเป็นหม้าย</li>
                                <li>**เสาร์ (นิจ):** ใช้จ่ายเก่ง, พึ่งพาญาติไม่ได้, เสียทรัพย์บ่อย</li>
                            </ul>
                        </li>
                    </ul>

                    <h4 className="text-xl font-bold text-secondary-gold mb-2">3. กลุ่มดาวคู่ที่ส่งผลต่อดวงชะตา</h4>
                    <ul className="list-disc list-inside text-white mb-4">
                        <li><span className="font-bold text-secondary-gold">คู่ธาตุ:</span> ให้คุณอย่างสูงในด้านความร่ำรวยและมั่นคง</li>
                        <li><span className="font-bold text-secondary-gold">คู่สมพล:</span> ให้ความเข้มแข็งและอำนาจวาสนา</li>
                        <li><span className="font-bold text-secondary-gold">คู่มิตร:</span> ให้คุณในด้านการอุปถัมภ์ช่วยเหลือจากมิตรสหายและคนใกล้ชิด</li>
                        <li><span className="font-bold text-secondary-gold">คู่ศัตรู:</span> ให้โทษในด้านความขัดแย้ง ทะเลาะวิวาท และอุปสรรคต่างๆ</li>
                    </ul>

                    <p className="mt-6 text-white text-base">
                        การพิจารณาดวงมาตรฐานเหล่านี้ช่วยให้เข้าใจถึงศักยภาพและข้อควรระวังในดวงชะตา ทำให้สามารถเตรียมตัวรับมือกับสถานการณ์ต่างๆ ได้อย่างเหมาะสมครับ
                    </p>
                </div>
            </div>
        </main>
    );
}