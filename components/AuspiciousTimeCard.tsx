// src/components/AuspiciousTimeCard.tsx
import React from 'react';

interface AuspiciousTimeCardProps {
    time: string;
    auspicious: string;
    samTaUp: string;
    samTaRam: string;
}

const AuspiciousTimeCard: React.FC<AuspiciousTimeCardProps> = ({ time, auspicious, samTaUp, samTaRam }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col">
            <h3 className="text-xl font-bold text-secondary-gold mb-2 drop-shadow">{time}</h3>
            <p className="text-sm font-light mb-4">{auspicious}</p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/20">
                <span className="text-sm">ยามสามตา ข้างขึ้น: <span className="font-bold text-lg">{samTaUp}</span></span>
                <span className="text-sm">ยามสามตา ข้างแรม: <span className="font-bold text-lg">{samTaRam}</span></span>
            </div>
        </div>
    );
};

export default AuspiciousTimeCard;