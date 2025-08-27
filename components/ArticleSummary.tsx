import React from 'react';

const ArticleSummary: React.FC = () => {
    return (
        <div className="mt-12 flex flex-col">
            <h2 className="text-3xl font-bold text-secondary-gold mb-6">สรุปความแตกต่าง</h2>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white overflow-x-auto flex flex-col">
                <table className="min-w-full text-left table-auto">
                    <thead>
                        <tr className="border-b border-secondary-gold/30">
                            <th className="p-3 font-semibold text-lg">ประเภทของปี</th>
                            <th className="p-3 font-semibold text-lg">ยึดตามการโคจรของ</th>
                            <th className="p-3 font-semibold text-lg">ระยะเวลาโดยประมาณ</th>
                            <th className="p-3 font-semibold text-lg">การปรับแก้</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-white/20">
                            <td className="p-3">สุริยคติ</td>
                            <td className="p-3">โลกโคจรรอบดวงอาทิตย์</td>
                            <td className="p-3">365 วัน</td>
                            <td className="p-3">ปีอธิกสุรทิน (+1 วัน)</td>
                        </tr>
                        <tr className="border-b border-white/20">
                            <td className="p-3">จันทรคติ</td>
                            <td className="p-3">ดวงจันทร์โคจรรอบโลก</td>
                            <td className="p-3">354 วัน</td>
                            <td className="p-3">ปีอธิกมาส (+1 เดือน)</td>
                        </tr>
                        <tr>
                            <td className="p-3">นักษัตร</td>
                            <td className="p-3">วัฏจักร 12 ปี</td>
                            <td className="p-3">365 วัน (ตามปีสุริยคติ)</td>
                            <td className="p-3">ไม่มี</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArticleSummary;