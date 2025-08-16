// src/app/buddha/dhamma/meritorious-actions/page.tsx
'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function MeritoriousActionsPage() {
    // Array containing the 10 Meritorious Actions and their descriptions, rearranged as per new data
    const meritoriousActions = [
        {
            title: '๑. ให้ทาน หรือ ทานมัย',
            text: 'การให้ การสละ หรือการเผื่อแผ่แบ่งปัน ไม่ว่าจะเป็นเงินทอง ข้าวของเครื่องใช้หรือสิ่งอื่นใด และไม่ว่าจะให้แก่ใครก็ถือเป็นบุญทั้งสิ้น เพราะการให้ทานเป็นการลดความเห็นแก่ตัว ...',
        },
        {
            title: '๒. การให้ผู้อื่นมาร่วมทำบุญกับเรา หรือ ปัตติทานมัย',
            text: 'กล่าวคือ ไม่ว่าจะทำบุญอะไร ก็เปิดโอกาสให้คนอื่นได้มาร่วมทำบุญด้วย ไม่ขี้เหนียว หรืองกบุญเพราะอยากได้บุญใหญ่ไว้คนเดียว ...',
        },
        {
            title: '๓. การฟังธรรม หรือ ธรรมสวนมัย',
            text: 'การฟังธรรม จะทำให้เราได้ฟังเรื่องที่ดี มีประโยชน์ทั้งต่อสติปัญญา และการดำเนินชีวิต ซึ่งการฟังธรรมนี้ ไม่จำเป็นต้องไปฟังที่วัด หรือจากพระท่านโดยตรง ...',
        },
        {
            title: '๔. รักษาศีล หรือ สีลมัย',
            text: 'คำว่า ศีล หมายถึง ข้อบัญญัติทางพระพุทธศาสนา ที่กำหนดการปฏิบัติทางกายและวาจา เช่น ศีล 5 ศีล 8 หรืออาจจะหมายถึงการรักษากายวาจาให้เรียบร้อย การรักษาศีล เป็นการฝึกฝนมิให้ไปเบียดเบียนผู้อื่น ...',
        },
        {
            title: '๕. การอ่อนน้อมถ่อมตน หรือ อปจายนมัย',
            text: 'หลายคนคงคิดไม่ถึงว่า การประพฤติตนเป็นคนอ่อนน้อมถ่อมตน จะถือเป็นบุญอย่างหนึ่ง ทั้งนี้ ก็เพราะว่าการอ่อนน้อมถ่อมตน ไม่ว่าจะเป็นผู้น้อยประพฤติต่อผู้ใหญ่ ...',
        },
        {
            title: '๖. การช่วยขวนขวายทำในกิจที่ชอบ หรือ ไวยาวัจจมัย',
            text: 'พูดง่ายๆ ว่า เป็นการให้ความช่วยเหลือแก่สังคมรอบข้าง ในการทำกิจกรรมความดีต่างๆ เช่น ช่วยพ่อแม่ค้าขายไม่นิ่งดูดาย ช่วยสอดส่องดูแลบ้านให้เพื่อนบ้าน ...',
        },
        {
            title: '๗. เจริญภาวนา หรือภาวนามัย',
            text: 'เป็นการทำบุญอีกรูปแบบ ที่มุ่งพัฒนาจิตใจและปัญญา ทำให้จิตใจสงบ เห็นคุณค่าสิ่งต่างๆ ตามความเป็นจริง ซึ่งในข้อนี้หลายคนอาจจะทำเป็นประจำอยู่แล้ว เช่น นั่งสมาธิ วิปัสสนา ...',
        },
        {
            title: '๘. การแสดงธรรม หรือ ธรรมเทศนามัย',
            text: 'คือการให้ธรรมะหรือข้อคิดที่ดีๆ แก่ผู้อื่น ด้วยการนำธรรมะหรือเรื่องดีๆ ที่เป็นประโยชน์ไปบอกต่อ หรือให้คำแนะนำให้เขาได้รู้จักวิธีการดำเนินชีวิตที่ดี ...',
        },
        {
            title: '๙. การอนุโมทนาส่วนบุญ หรือ ปัตตานุโมทนามัย',
            text: 'คือ การยอมรับหรือยินดีในการทำความดีหรือทำบุญของผู้อื่น เมื่อใครไปทำบุญมาก็รู้สึกชื่นชมยินดีไปด้วย โดยไม่คิดอิจฉาหรือระแวงสงสัยในการทำความดีของผู้อื่น ...',
        },
        {
            title: '๑๐. การทำความเห็นให้ถูกต้อง เหมาะสม หรือ ทิฏฐุชุกรรม',
            text: 'คือ การไม่ถือทิฐิ เอาแต่ความคิดเห็นของตนเป็นใหญ่ แต่ให้รู้จักแก้ไข ปรับปรุงพัฒนาความคิดเห็น และความเข้าใจในเรื่องต่างๆ ให้ถูกต้องตามธรรมอยู่เสมอ ...',
        },
    ];

    // Array for daily practices to achieve the 10 meritorious actions
    const dailyPractices = [
        { practice: 'ไหว้พระ, สวัสดีผู้คน', result: 'ศีล, อปจายนมัย' },
        { practice: 'สมาทานศีล', result: 'ศีล, สีลมัย' },
        { practice: 'สวดมนต์ นั่งสมาธิ กำมัฐฐาน', result: 'ภาวนา, ภาวนามัย' },
        { practice: 'พับผ้าห่ม, ช่วยเหลือคนในครอบครัว', result: 'ศีล, ไวยาวัจจมัย' },
        { practice: 'ใส่บาตร, ตักข้าวให้ผู้อื่น, การให้ การสงเคราะห์ญาติเป็นมงคล, เลี้ยงน้ำเพื่อนก็ได้', result: 'ทาน, ทานมัย' },
        { practice: 'ให้ส่วนบุญ, กรวดน้ำ', result: 'ทาน, ปัตติทานมัย' },
        { practice: 'การฟังคนอื่น', result: 'ทาน, ธรรมสวนมัย' },
        { practice: 'การชื่นชมผู้อื่น', result: 'ภาวนา, ปัตตานุโมทนามัย' },
        { practice: 'ทำความคิดเห็นของตน ให้ตรงกับคำสอนของพระพุทธเจ้า', result: 'ภาวนา, ทิฏฐุชุกรรม' },
        { practice: 'กล่าวแนะนำ สั่งสอน สิ่งดีดี', result: 'ภาวนา, ธรรมเทศนามัย' },
    ];

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

            {/* Content */}
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">บุญกิริยาวัตถุ 10</h1>
                <h2 className="text-2xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">หลักการทำบุญ 10 วิธี</h2>

                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    {meritoriousActions.map((item, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-xl font-bold text-secondary-gold mb-2">{item.title}</h3>
                            <p className="text-white">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 mb-8">
                    <h3 className="text-2xl font-bold text-secondary-gold mb-4 text-center">ทำอย่างไรได้บุญ 10 อย่างในทุกๆวัน</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {dailyPractices.map((item, index) => (
                            <div key={index} className="bg-white/10 p-4 rounded-lg">
                                <p className="text-white"><span className="font-bold text-secondary-gold">การปฏิบัติ:</span> {item.practice}</p>
                                <p className="text-white mt-2"><span className="font-bold text-secondary-gold">ได้บุญ:</span> {item.result}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-center">
                    <p className="italic text-lg text-secondary-gold">
                        "สุโข ปุญฺญสฺส อุจฺจโย"
                    </p>
                    <p className="italic text-white mt-2">
                        (Sukho puññassa ucciayo)
                    </p>
                    <p className="mt-4 text-white">
                        การพอกพูนขึ้นของบุญ เป็นความสุข
                    </p>
                </div>
            </div>
        </main>
    );
}
