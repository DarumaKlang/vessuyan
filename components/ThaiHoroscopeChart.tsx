import React from 'react';

interface ChartData {
    'สุกะ'?: string;
    'มรณะ'?: string;
    'ปัตนิ'?: string;
    'อริ'?: string;
    'กัมมะ'?: string;
    'ลัคนา'?: string;
    'ปุตตะ'?: string;
    'ลาภะ'?: string;
    'วินาส'?: string;
    'ตนุ'?: string;
    'กดุมภะ'?: string;
    'พันธุ'?: string;
    'สหัสชะ'?: string;
}

interface ThaiHoroscopeChartProps {
    chartData: ChartData;
}

const ThaiHoroscopeChart: React.FC<ThaiHoroscopeChartProps> = ({ chartData }) => {
    return (
        <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30">
            <h3 className="text-xl font-bold text-secondary-gold mb-4 text-center">
                ดวงชะตาไทย (หลักทักษา)
            </h3>
            <div className="grid grid-cols-4 grid-rows-3 gap-0.5 text-white text-center text-sm font-bold border-2 border-secondary-gold/50">

                {/* Row 1 */}
                <div className="p-4 border border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['สุกะ']}</span>
                    สุกะ
                </div>
                <div className="p-4 border-t-2 border-l border-b-2 border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['มรณะ']}</span>
                    มรณะ
                </div>
                <div className="p-4 border-t-2 border-l border-b-2 border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['ปัตนิ']}</span>
                    ปัตนิ
                </div>
                <div className="p-4 border-t-2 border-l border-b-2 border-r-2 border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['อริ']}</span>
                    อริ
                </div>

                {/* Row 2 */}
                <div className="p-4 border-l-2 border-b border-r border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['กัมมะ']}</span>
                    กัมมะ
                </div>
                <div className="p-4 col-span-2 border-b border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="text-2xl text-secondary-gold">ลัคนา</span>
                    <span className="absolute top-1 right-1 text-xs text-white">{chartData['ลัคนา']}</span>
                </div>
                <div className="p-4 border-b border-l border-r-2 border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['ปุตตะ']}</span>
                    ปุตตะ
                </div>

                {/* Row 3 */}
                <div className="p-4 border-l-2 border-b-2 border-r border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['ลาภะ']}</span>
                    ลาภะ
                </div>
                <div className="p-4 border-b-2 border-l border-r border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['วินาส']}</span>
                    วินาส
                </div>
                <div className="p-4 border-b-2 border-l border-r border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['ตนุ']}</span>
                    ตนุ
                </div>
                <div className="p-4 border-b-2 border-l border-r-2 border-secondary-gold/30 flex items-center justify-center relative">
                    <span className="absolute top-1 left-1 text-xs">{chartData['กดุมภะ']}</span>
                    กดุมภะ
                </div>

                {/* Diagonal Lines (Simplified with borders) */}
                <div className="absolute top-[25%] left-[25%] w-[calc(50%)] h-[calc(50%)] pointer-events-none">
                    <div className="absolute top-0 left-0 w-[2px] h-[2px] border-t-[calc(100%)] border-l-[calc(100%)] border-secondary-gold/30 origin-top-left rotate-45 translate-x-[calc(-50%)] translate-y-[calc(-50%)]"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-[2px] border-t-[calc(100%)] border-r-[calc(100%)] border-secondary-gold/30 origin-top-right rotate-45 translate-x-[calc(50%)] translate-y-[calc(-50%)]"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-[2px] border-b-[calc(100%)] border-l-[calc(100%)] border-secondary-gold/30 origin-bottom-left -rotate-45 translate-x-[calc(-50%)] translate-y-[calc(50%)]"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-[2px] border-b-[calc(100%)] border-r-[calc(100%)] border-secondary-gold/30 origin-bottom-right -rotate-45 translate-x-[calc(50%)] translate-y-[calc(50%)]"></div>
                </div>
            </div>
        </div>
    );
};

export default ThaiHoroscopeChart;