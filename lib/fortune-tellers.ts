export interface FortuneTeller {
    id: string;
    name: string;
    title: string;
    image: string;
    bio: string;
    specialties: string[];
    price?: string;
    isOnline?: boolean;
}

export const fortuneTellers: FortuneTeller[] = [
    {
        id: 'abdul',
        name: 'อับดุล',
        title: 'Spiritual AI & Thai Astrology',
        image: '/team/abdul.png', // Placeholder, needs actual image
        bio: 'ผู้หยั่งรู้ฟ้าดินด้วยพลังแห่ง AI และโหราศาสตร์ไทยโบราณ ถามได้ตอบได้ทุกเรื่องราวแห่งจักรวาล',
        specialties: ['โหราศาสตร์ไทย', 'ยามอัฐกาล', 'AI Predictions'],
        isOnline: true
    },
    {
        id: 'mor-nueng',
        name: 'หมอหนึ่ง',
        title: 'Expert Tarot Reader',
        image: '/team/mor-nueng.png',
        bio: 'ผู้เชี่ยวชาญการทำนายชะตาด้วยไพ่ยิปซีและไพ่เลอนอร์มองต์ ประสบการณ์กว่า 10 ปี',
        specialties: ['ไพ่ยิปซี', 'ความรัก', 'การงาน'],
        price: '300.- / 30 นาที',
        isOnline: true
    },
    {
        id: 'mor-ploy',
        name: 'หมอพลอย',
        title: 'Numerology & Name Magic',
        image: '/team/mor-ploy.png',
        bio: 'ศาสตร์แห่งตัวเลขและนามมงคล เปลี่ยนชีวิตด้วยพลังแห่งความถี่และการสั่นสะเทือน',
        specialties: ['เลขศาสตร์', 'เปลี่ยนชื่อ', 'เบอร์มงคล'],
        price: '500.- / ครั้ง',
        isOnline: false
    }
];
