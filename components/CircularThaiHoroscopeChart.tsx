import React from 'react';

const CircularThaiHoroscopeChart = () => {
    const radius = 100;
    const centerX = 150;
    const centerY = 150;
    const numSegments = 12;

    const getCoordinates = (angle: number, r: number) => {
        const rad = (angle - 90) * Math.PI / 180.0;
        return {
            x: centerX + r * Math.cos(rad),
            y: centerY + r * Math.sin(rad),
        };
    };

    const segments = Array.from({ length: numSegments }, (_, i) => {
        const startAngle = i * 360 / numSegments;
        const endAngle = (i + 1) * 360 / numSegments;
        const midAngle = (startAngle + endAngle) / 2;
        const outerPointStart = getCoordinates(startAngle, radius);
        const outerPointEnd = getCoordinates(endAngle, radius);
        const midPoint = getCoordinates(midAngle, radius * 0.7); // ตำแหน่งข้อความ

        return (
            <React.Fragment key={i}>
                <line x1={centerX} y1={centerY} x2={outerPointStart.x} y2={outerPointStart.y} stroke="gold" strokeWidth="1" />
                <path
                    d={`M ${outerPointStart.x} ${outerPointStart.y} A ${radius} ${radius} 0 0 1 ${outerPointEnd.x} ${outerPointEnd.y}`}
                    stroke="gold"
                    fill="none"
                    strokeWidth="1"
                />
                <text x={midPoint.x} y={midPoint.y} textAnchor="middle" fill="white" fontSize="12">
                    {/* ใส่ชื่อเรือน/ดาว ที่นี่ */} ช่อง {i + 1}
                </text>
            </React.Fragment>
        );
    });

    // เส้นแนวนอนและแนวตั้ง
    const horizontalLineStart = { x: centerX - radius, y: centerY };
    const horizontalLineEnd = { x: centerX + radius, y: centerY };
    const verticalLineStart = { x: centerX, y: centerY - radius };
    const verticalLineEnd = { x: centerX, y: centerY + radius };

    // เส้นทแยงมุม (ตัวอย่าง - อาจต้องปรับตำแหน่งให้ตรงกับที่คุณต้องการ)
    const diagonal1Start = getCoordinates(45, radius);
    const diagonal1End = getCoordinates(225, radius);
    const diagonal2Start = getCoordinates(135, radius);
    const diagonal2End = getCoordinates(315, radius);

    return (
        <div className="bg-primary-purple/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 flex justify-center items-center">
            <svg width={300} height={300}>
                <circle cx={centerX} cy={centerY} r={radius} stroke="gold" strokeWidth="2" fill="transparent" />
                {segments}
                <line x1={horizontalLineStart.x} y1={horizontalLineStart.y} x2={horizontalLineEnd.x} y2={horizontalLineEnd.y} stroke="gold" strokeWidth="1" />
                <line x1={verticalLineStart.x} y1={verticalLineStart.y} x2={verticalLineEnd.x} y2={verticalLineEnd.y} stroke="gold" strokeWidth="1" />
                <line x1={diagonal1Start.x} y1={diagonal1Start.y} x2={diagonal1End.x} y2={diagonal1End.y} stroke="gold" strokeWidth="1" />
                <line x1={diagonal2Start.x} y1={diagonal2Start.y} x2={diagonal2End.x} y2={diagonal2End.y} stroke="gold" strokeWidth="1" />
                {/* เพิ่มเส้นทแยงมุมอื่นๆ ตามที่คุณต้องการ */}
            </svg>
        </div>
    );
};

export default CircularThaiHoroscopeChart;