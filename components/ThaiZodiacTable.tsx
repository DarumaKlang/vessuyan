import React from 'react';

// กำหนด type ของข้อมูลที่จะนำมาใช้ใน Component
interface ZodiacItem {
    title: string;
    number: string;
}

interface ThaiZodiacTableProps {
    zodiacData: ZodiacItem[];
}

const ThaiZodiacTable: React.FC<ThaiZodiacTableProps> = ({ zodiacData }) => {
    return (
        <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
            <h3 className="text-xl font-bold text-secondary-gold mb-4 text-center">
                ตารางจักรราศีและดาวประจำเรือน
            </h3>
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-white/10 text-secondary-gold">
                        <th className="px-4 py-2 border border-secondary-gold/30">ราศี</th>
                        <th className="px-4 py-2 border border-secondary-gold/30">ดาว</th>
                    </tr>
                </thead>
                <tbody>
                    {zodiacData.map((item, index) => (
                        <tr key={index} className="hover:bg-white/5">
                            <td className="px-4 py-2 border border-secondary-gold/30 text-white text-center">
                                {item.title}
                            </td>
                            <td className="px-4 py-2 border border-secondary-gold/30 text-white text-center">
                                {item.number}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ThaiZodiacTable;