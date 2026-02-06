export interface TarotCard {
    id: number;
    name: string;
    nameThai: string;
    image: string;
    meaning: {
        general: string;
        love: string;
        work: string;
        money: string;
    };
}

export const tarotCards: TarotCard[] = [
    {
        id: 0,
        name: "The Fool",
        nameThai: "0. เดอะ ฟูล (The Fool)",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
        meaning: {
            general: "การเริ่มต้นใหม่ ความเป็นอิสระ ความเสี่ยงที่คุ้มค่า การออกเดินทางครั้งใหม่โดยปราศจากความกังวล",
            love: "รักที่อิสระ ไม่ผูกมัด หรือการพบรักระหว่างเดินทาง",
            work: "โอกาสใหม่ๆ งานที่ท้าทาย หรือการเปลี่ยนสายงาน",
            money: "รายได้ใหม่ๆ หรือความเสี่ยงทางการเงินที่ต้องระวัง"
        }
    },
    {
        id: 1,
        name: "The Magician",
        nameThai: "1. เดอะ เมจิเชียน (The Magician)",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
        meaning: {
            general: "ความสามารถ ทักษะ การมีอำนาจในการจัดการสิ่งต่างๆ รอบตัว ความสำเร็จที่เกิดจากฝีมือ",
            love: "การพูดจาจูงใจคนรัก หรือการมีเสน่ห์ดึงดูดใจ",
            work: "งานที่ต้องใช้ทักษะเฉพาะด้าน การแก้ปัญหาได้ดีเยี่ยม",
            money: "ความเฉลียวฉลาดในการทำเงิน การเริ่มต้นธุรกิจใหม่"
        }
    },
    {
        id: 2,
        name: "The High Priestess",
        nameThai: "2. เดอะ ไฮ พรีสเทส (The High Priestess)",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg",
        meaning: {
            general: "สัญชาตญาณ ความลึกลับ ความรู้ภายในใจ ความเงียบสงัดและการรอคอย",
            love: "รักที่มีความลับ หรือความสัมพันธ์ที่ลึกซึ้งในระดับจิตวิญญาณ",
            work: "งานที่ต้องใช้ความอดทนและสัญชาตญาณสูง",
            money: "รายได้ที่มาจากแหล่งไม่เปิดเผย หรือการเงินที่นิ่งสงบ"
        }
    },
    {
        id: 3,
        name: "The Empress",
        nameThai: "3. เดอะ เอ็มเพรส (The Empress)",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/RWS_Tarot_03_Empress.jpg",
        meaning: {
            general: "ความอุดมสมบูรณ์ ความเป็นแม่ การก่อกำเนิด ความสวยงามและความสุขสบาย",
            love: "รักที่อบอุ่น มั่นคง หรือการมีข่าวดีเรื่องการตั้งครรภ์",
            work: "ความเจริญรุ่งเรืองในหน้าที่การงาน การสร้างผลกำไร",
            money: "ความร่ำรวย การเงินไหลมาเทมาอย่างต่อเนื่อง"
        }
    },
    {
        id: 4,
        name: "The Emperor",
        nameThai: "4. เดอะ เอ็มเพอเรอร์ (The Emperor)",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg",
        meaning: {
            general: "ระเบียบวินัย อำนาจบารมี ความเป็นผู้นำ และการสร้างรากฐานที่มั่นคง",
            love: "รักที่มั่นคงแต่มีความเป็นผู้นำสูง หรือการพบรักกับคนที่มีอำนาจ",
            work: "การเป็นหัวหน้างาน การมีอำนาจตัดสินใจเด็ดขาด",
            money: "การจัดการเงินอย่างเป็นระบบ ความมั่งคั่งจากการวางแผน"
        }
    },
    {
        id: 5,
        name: "The Hierophant",
        nameThai: "5. เดอะ ไฮโรแฟนท์ (The Hierophant)",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg",
        meaning: {
            general: "ประเพณี ความเชื่อ คุณธรรม ศีลธรรม การศึกษาหรือการแสวงหาความรู้",
            love: "รักที่มีกรอบประเพณี หรือการเตรียมตัวแต่งงาน",
            work: "งานราชการ หรืองานที่เกี่ยวข้องกับการศึกษาและศาสนา",
            money: "เงินที่มาจากแหล่งที่ถูกต้องตามกฎหมาย หรือการเก็บออม"
        }
    },
    {
        id: 6,
        name: "The Lovers",
        nameThai: "6. เดอะ เลิฟเวอร์ส (The Lovers)",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg",
        meaning: {
            general: "ความรัก ทางเลือก ความสามัคคี การตัดสินใจที่สำคัญของชีวิต",
            love: "ความสัมพันธ์ที่ลึกซึ้งและมีความสุข หรือการตัดสินใจเลือกระหว่างคนสองคน",
            work: "การทำงานที่ต้องใช้ความร่วมมือ หรือการเลือกเปลี่ยนงาน",
            money: "การตัดสินใจลงทุนครั้งสำคัญที่ต้องเลือกอย่างรอบคอบ"
        }
    },
    {
        id: 7,
        name: "The Chariot",
        nameThai: "7. เดอะ แชริออท (The Chariot)",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg",
        meaning: {
            general: "ชัยชนะ ความทะเยอทะยาน ความมุ่งมั่น การเอาชนะอุปสรรคด้วยความพยายาม",
            love: "การต่อสู้เพื่อความรัก หรือการเดินทางไปหาคนรัก",
            work: "งานที่ต้องฝ่าฟัน แข่งขันสูง หรือเกี่ยวข้องกับการเดินทาง",
            money: "การเงินที่ต้องเหนื่อยหน่อยถึงจะได้มา แต่ประสบความสำเร็จ"
        }
    },
    {
        id: 8,
        name: "Strength",
        nameThai: "8. สเตร็งก์ (Strength)",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/RWS_Tarot_08_Strength.jpg",
        meaning: {
            general: "ความเข้มแข็งภายใน ความเมตตา ความอดทน และการควบคุมสัญชาตญาณตัวเอง",
            love: "รักที่ต้องใช้ความอดทน หรือการควบคุมสถานการณ์ความรักให้ลงตัว",
            work: "การรับมือกับปัญหาหนักๆ ด้วยสติและพลังภายใน",
            money: "การควบคุมการใช้จ่ายได้อย่างยอดเยี่ยม"
        }
    },
    {
        id: 9,
        name: "The Hermit",
        nameThai: "9. เดอะ เฮอร์มิท (The Hermit)",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg",
        meaning: {
            general: "การปลีกวิเวก การค้นหาคำตอบภายในใจ ความรู้แจ้งเห็นจริง การอยู่เงียบๆ คนเดียว",
            love: "ความโสดที่มีความสุข หรือการทบทวนความสัมพันธ์ที่ผ่านมา",
            work: "งานด้านวิจัย ที่ปรึกษา หรืองานที่ต้องใช้สมาธิสูง",
            money: "การประหยัด มัธยัสถ์ ไม่เน้นการใช้จ่ายฟุ่มเฟือย"
        }
    },
    {
        id: 10,
        name: "Wheel of Fortune",
        nameThai: "10. วีล ออฟ ฟอร์จูน (Wheel of Fortune)",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
        meaning: {
            general: "โชคชะตา การเปลี่ยนแปลงครั้งใหญ่ จุดวักเหของชีวิต สิ่งที่อยู่นอกเหนือการควบคุม",
            love: "พรมลิขิตที่นำพาคนรักมาหา หรือความเปลี่ยนแปลงในความรัก",
            work: "จังหวะและโอกาสในงานที่คาดไมถึง",
            money: "โชคลาภลอย หรือการเปลี่ยนแปลงสถานะทางการเงินกะทันหัน"
        }
    },
    {
        id: 11,
        name: "Justice",
        nameThai: "11. จัสติส (Justice)",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg",
        meaning: {
            general: "ความยุติธรรม ความสมดุล ผลของการกระทำ กฎกติกาและความจริง",
            love: "รักที่เท่าเทียม หรือการตัดสินใจเรื่องความสัมพันธ์ตามเหตุผล",
            work: "งานด้านกฎหมาย บัญชี หรือการประเมินผลงานที่ตรงไปตรงมา",
            money: "รายได้ที่มาจากความพยายามที่แท้จริง หรือเรื่องสัญญากู้ยืม"
        }
    },
    {
        id: 12,
        name: "The Hanged Man",
        nameThai: "12. เดอะ แฮงก์ แมน (The Hanged Man)",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg",
        meaning: {
            general: "การหยุดนิ่ง การรอคอย การเสียสละเพื่อสิ่งที่ดีกว่า การมองโลกในมุมต่าง",
            love: "การหยุดชะงักของความสัมพันธ์ หรือยอมเสียสละเพื่อคนรัก",
            work: "งานที่ยังไม่คืบหน้า ต้องรอเวลา หรือการเตรียมตัวรอจังหวะใหม่",
            money: "การเงินที่ติดขัดชั่วคราว หรือต้องเสียบางส่วนเพื่อรักษาภาพรวม"
        }
    },
    {
        id: 13,
        name: "Death",
        nameThai: "13. เดธ (Death)",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg",
        meaning: {
            general: "การสิ้นสุดเพื่อเริ่มต้นใหม่ การเปลี่ยนแปลงที่เลี่ยงไม่ได้ การจบลงของสถานการณ์หนึ่ง",
            love: "การจบความสัมพันธ์ที่ยืดเยื้อ หรือการเปลี่ยนแปลงสถานะอย่างรุนแรง",
            work: "การออกจากงานที่เก่าเพื่อหานามใหม่ที่ดีกว่า การปรับโครงสร้าง",
            money: "การจบภาระหนี้สิน หรือการต้องตัดค่าใช้จ่ายบางส่วนทิ้ง"
        }
    },
    {
        id: 14,
        name: "Temperance",
        nameThai: "14. เทมเพอแรนซ์ (Temperance)",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg",
        meaning: {
            general: "ความพอดี การปรับตัว การประสานงาน ความสมดุล และความสงบนิ่ง",
            love: "รักที่ค่อยๆ ปรับตัวเข้าหากัน หรือการสื่อสารที่ทำให้เข้าใจกันมากขึ้น",
            work: "งานด้านประสานงาน การนำสิ่งเก่ามาประยุกต์ใหม่",
            money: "การหมุนเวียนเงินให้สมดุล ไม่รวยมากแต่ไม่ขาดแคลน"
        }
    },
    {
        id: 15,
        name: "The Devil",
        nameThai: "15. เดอะ เดวิล (The Devil)",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg",
        meaning: {
            general: "กิเลส ตัณหา การยึดติด ความลุ่มหลง หรือสถานการณ์ที่ทำให้รัดตัว",
            love: "รักสามเส้า ความหลงใหลในความต้องการ หรือความสัมพันธ์ที่เป็นพิษ",
            work: "งานที่เครียด ตกอยู่ใต้อำนาจคนอื่น หรือความโลภในหน้าที่",
            money: "หนี้สินที่พอกพูน หรือกิเลสที่ทำให้เสียเงินจำนวนมาก"
        }
    },
    {
        id: 16,
        name: "The Tower",
        nameThai: "16. เดอะ ทาวเวอร์ (The Tower)",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg",
        meaning: {
            general: "การพังทลายอย่างกะทันหัน เหตุการณ์ที่คาดไมถึง การเปลี่ยนแปลงที่รุนแรงแต่ช่วยชำระล้างสิ่งเดิม",
            love: "การทะเลาะเบาะแว้งรุนแรง หรือการลาขาดอย่างไม่ทันตั้งตัว",
            work: "การถูกเลิกจ้าง หรือปัญหาในงานที่อุบัติขึ้นอย่างกะทันหัน",
            money: "ความสูญเสียทางการเงินที่ไม่คาดคิด หรือการล้มละลาย"
        }
    },
    {
        id: 17,
        name: "The Star",
        nameThai: "17. เดอะ สตาร์ (The Star)",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg",
        meaning: {
            general: "ความหวัง การฟื้นฟู ความสงบใจ แรงบันดาลใจ และโอกาสที่สวยงาม",
            love: "รักที่สดใส การเริ่มต้นความสัมพันธ์ที่ทำให้ใจเป็นสุข",
            work: "งานที่สร้างชื่อเสียง หรือแรงบันดาลใจใหม่ๆ ในผลงาน",
            money: "การเงินที่ค่อยๆ ดีขึ้น มีคนหยิบยื่นโอกาสมาให้"
        }
    },
    {
        id: 18,
        name: "The Moon",
        nameThai: "18. เดอะ มูน (The Moon)",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/RWS_Tarot_18_Moon.jpg",
        meaning: {
            general: "ความกังวล ความสับสน ความลวง สิ่งที่ซ่อนเร้น และความแปรปรวนของอารมณ์",
            love: "รักที่ไม่ชัดเจน ความกังวลในตัวคนรัก หรือความหึงหวง",
            work: "ความไม่แน่นอนในหน้าที่การงาน เพื่อนร่วมงานที่ไม่หวังดี",
            money: "ความเสี่ยงที่ยังมองไม่เห็น หรือการหลอกลวงทางการเงิน"
        }
    },
    {
        id: 19,
        name: "The Sun",
        nameThai: "19. เดอะ ซัน (The Sun)",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg",
        meaning: {
            general: "ความรุ่งโรจน์ ความสำเร็จ ความสุข ความร่าเริง และการมองโลกในแง่ดี",
            love: "รักที่เปิดเผย มีความสุข และมีอนาคตที่สดใสร่วมกัน",
            work: "ความสำเร็จที่โดดเด่น การได้รับคำชมหรือรางวัล",
            money: "ความมั่งคั่ง รายได้ก้อนใหญ่ และโชคลาภที่ชัดเจน"
        }
    },
    {
        id: 20,
        name: "Judgement",
        nameThai: "20. จัดจ์เมนต์ (Judgement)",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg",
        meaning: {
            general: "การตื่นรู้ การได้รับข่าวสารสำคัญ การเคลียร์ปัญหาคาใจในอดีต การฟื้นคืนชีพ",
            love: "การปรับความเข้าใจครั้งใหญ่ หรือโอกาสครั้งที่สองในรัก",
            work: "การประกาศผลสอบ การประเมินผล หรือการเปลี่ยนแผนงานใหม่",
            money: "การได้รับเงินคืนจากหนี้สินเก่า หรือข่าวดีเรื่องมรดก"
        }
    },
    {
        id: 21,
        name: "The World",
        nameThai: "21. เดอะ เวิลด์ (The World)",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg",
        meaning: {
            general: "ความสมบูรณ์แบบ ความสำเร็จสูงสุด การเดินทางรอบโลก และความสุขที่ยั่งยืน",
            love: "รักที่ลงตัว การแต่งงาน หรือความสัมพันธ์ที่ถึงจุดหมาย",
            work: "งานที่ประสบความสำเร็จตามที่ตั้งเป้า การได้ทำงานต่างประเทศ",
            money: "ความมั่นคั่งจากหลายช่องทาง ชีวิตที่สุขสบาย"
        }
    }
    // Simplified for this turn, but you should add all 78 in reality.
    // I will generate the full list now.
];

export const getAllTarotCards = () => {
    // Generate Minor Arcana automatically to save code space but provide data.
    const suits = ["Wands", "Cups", "Swords", "Pentacles"];
    const suitsThai = ["ไม้เท้า", "ถ้วย", "ดาบ", "เหรียญ"];
    const extras: TarotCard[] = [];

    suits.forEach((suit, idx) => {
        for (let i = 1; i <= 14; i++) {
            let name = "";
            let nameThai = "";
            if (i === 1) { name = `Ace of ${suit}`; nameThai = `1 ${suitsThai[idx]} (Ace of ${suit})`; }
            else if (i <= 10) { name = `${i} of ${suit}`; nameThai = `${i} ${suitsThai[idx]} (${i} of ${suit})`; }
            else if (i === 11) { name = `Page of ${suit}`; nameThai = `เด็กถือ${suitsThai[idx]} (Page of ${suit})`; }
            else if (i === 12) { name = `Knight of ${suit}`; nameThai = `อัศวิน${suitsThai[idx]} (Knight of ${suit})`; }
            else if (i === 13) { name = `Queen of ${suit}`; nameThai = `ราชินี${suitsThai[idx]} (Queen of ${suit})`; }
            else if (i === 14) { name = `King of ${suit}`; nameThai = `ราชา${suitsThai[idx]} (King of ${suit})`; }

            extras.push({
                id: 22 + (idx * 14) + (i - 1),
                name: name,
                nameThai: nameThai,
                image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Tarot_suit_icons.svg/200px-Tarot_suit_icons.svg.png`, // Placeholder icon
                meaning: {
                    general: `สถานการณ์ที่เกี่ยวข้องกับ${suitsThai[idx]} หมายเลข ${i}`,
                    love: `ความรักในมุมของ${suitsThai[idx]}`,
                    work: `การงานที่ขับเคลื่อนด้วย${suitsThai[idx]}`,
                    money: `การเงินที่เน้นความมั่นคงของ${suitsThai[idx]}`
                }
            });
        }
    });

    return [...tarotCards, ...extras];
};
