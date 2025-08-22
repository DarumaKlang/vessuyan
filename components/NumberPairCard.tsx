// src/components/NumberPairCard.tsx
// Component ใหม่ที่ต้องสร้างขึ้นมาเพื่อใช้แสดงผลคู่เลขแต่ละคู่
import React from 'react';

interface NumberPairCardProps {
    pair: string;
    meaning: string;
}

const NumberPairCard: React.FC<NumberPairCardProps> = ({ pair, meaning }) => {
    return (
        <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 flex flex-col items-start space-y-2">
            <h3 className="text-2xl font-bold text-secondary-gold">{pair}</h3>
            <p className="text-white text-base">{meaning}</p>
        </div>
    );
};

export default NumberPairCard;