'use client';

import { useState } from 'react';
import { galakiniData, GalakiniData } from '@/data/galakiniData';

const GalakiniCard = () => {
    // กำหนดประเภทของ state เป็น GalakiniData หรือ null
    const [selectedLore, setSelectedGalakini] = useState<GalakiniData | null>(null);
    const [dropdownValue, setDropdownValue] = useState<string>('');

    const handleShowDetails = () => {
        // ค้นหาข้อมูลจาก galakiniData โดยใช้ dropdownValue
        const selected = galakiniData.find(lore => lore.name === dropdownValue);
        setSelectedGalakini(selected || null);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen">
            <div className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-lg shadow-md p-6 border border-secondary-gold/20">
                <h2 className="text-2xl font-bold text-center text-secondary-gold mb-6 drop-shadow-md">ค้นหารายละเอียดดาวกาลกิณี</h2>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                    <select
                        className="flex-grow w-full px-4 py-2 bg-white/20 text-white border border-secondary-gold/50 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-gold/50"
                        value={dropdownValue}
                        onChange={(e) => setDropdownValue(e.target.value)}
                    >
                        <option value="" disabled className="bg-black text-gray-200">เลือกดาว...</option>
                        {/* ใช้ lore.name เป็น value และแสดงผลใน dropdown */}
                        {galakiniData.map((lore) => (
                            <option key={lore.name} value={lore.name} className="bg-black text-gray-200">
                                {lore.name}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={handleShowDetails}
                        className="w-full sm:w-auto px-6 py-2 text-white bg-secondary-gold/70 rounded-md hover:bg-secondary-gold focus:outline-none focus:ring-2 focus:ring-secondary-gold transition-colors duration-200"
                    >
                        แสดงรายละเอียด
                    </button>
                </div>

                {selectedLore && (
                    <div className="border border-secondary-gold/20 rounded-lg p-6 bg-white/5 transition-all duration-300 transform scale-100">
                        {/* แสดงผล name, day, impact และ solution จาก GalakiniData */}
                        <h3 className="text-xl font-semibold text-secondary-gold mb-4">{selectedLore.name}</h3>

                        <div className="space-y-4 text-sm text-gray-200">
                            <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                <strong>สำหรับ:</strong> <span className="block mt-1">{selectedLore.day}</span>
                            </div>
                            <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                <strong>ผลกระทบ:</strong> <span className="block mt-1">{selectedLore.impact}</span>
                            </div>
                            <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                <strong>วิธีแก้ไข:</strong> <span className="block mt-1">{selectedLore.solution}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalakiniCard;