'use client';

import { useState } from 'react';
import { starLores, StarLore } from '@/data/dataStarLore';

const StarLoreCard = () => {
    const [selectedLore, setSelectedLore] = useState<StarLore | null>(null);
    const [dropdownValue, setDropdownValue] = useState<string>('');

    const handleShowDetails = () => {
        const selected = starLores.find(lore => lore.thaiName === dropdownValue);
        setSelectedLore(selected || null);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen">
            <div className="w-full max-w-xl bg-white/10 backdrop-blur-sm rounded-lg shadow-md p-6 border border-secondary-gold/20">
                <h2 className="text-2xl font-bold text-center text-secondary-gold mb-6 drop-shadow-md">ค้นหารายละเอียดฤกษ์</h2>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                    <select
                        className="flex-grow w-full px-4 py-2 bg-white/20 text-white border border-secondary-gold/50 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-gold/50"
                        value={dropdownValue}
                        onChange={(e) => setDropdownValue(e.target.value)}
                    >
                        <option value="" disabled className="bg-black text-gray-200">เลือกชื่อฤกษ์...</option>
                        {starLores.map((lore) => (
                            <option key={lore.order} value={lore.thaiName} className="bg-black text-gray-200">
                                {lore.thaiName}
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
                        <h3 className="text-xl font-semibold text-secondary-gold mb-4">{selectedLore.thaiName}</h3>

                        <div className="space-y-4 text-sm text-gray-200">
                            <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                <strong>กลุ่มดาว:</strong>
                                <ul className="list-disc list-inside ml-4 mt-1">
                                    {selectedLore.constellatedStars.map((star, index) => (
                                        <li key={index}>{star}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                <strong>ความหมาย:</strong> <span className="block mt-1">{selectedLore.meaning}</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                    <strong>ราศี:</strong> {selectedLore.zodiac}
                                </div>
                                <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                    <strong>ธาตุ:</strong> {selectedLore.element}
                                </div>
                                <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                    <strong>ดาวเกษตรบดี:</strong> {selectedLore.rulingLord}
                                </div>
                            </div>
                            <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                <strong>การตีความ:</strong> <span className="block mt-1">{selectedLore.interpretation}</span>
                            </div>
                            <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                <strong>ลักษณะเด่น:</strong> <span className="block mt-1">{selectedLore.noteworthyTraits}</span>
                            </div>
                            <div className="p-3 bg-white/5 rounded-md shadow-inner">
                                <strong>อาชีพที่เหมาะสม:</strong>
                                <ul className="list-disc list-inside ml-4 mt-1">
                                    {selectedLore.professions.map((prof, index) => (
                                        <li key={index}>{prof}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StarLoreCard;