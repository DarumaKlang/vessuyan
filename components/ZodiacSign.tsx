import React from 'react';

interface ZodiacSignProps {
    title: string;
    symbol: string;
    rulingPlanet: string;
    personality: string;
    bodyShape: string;
    recommendedFoods: string[];
    avoidFoods: string[];
    healthConcerns: string[];
}

const ZodiacSign: React.FC<ZodiacSignProps> = ({
    title,
    symbol,
    rulingPlanet,
    personality,
    bodyShape,
    recommendedFoods,
    avoidFoods,
    healthConcerns,
}) => {
    return (
        <section className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col">
            <h2 className="text-2xl font-bold text-secondary-gold mb-4">{title}</h2>
            <ul className="space-y-2">
                <li>
                    <strong className="text-secondary-gold">สัญลักษณ์:</strong> {symbol}
                </li>
                <li>
                    <strong className="text-secondary-gold">ดาวเกษตร:</strong> {rulingPlanet}
                </li>
                <li>
                    <strong className="text-secondary-gold">ลักษณะนิสัย:</strong> {personality}
                </li>
                <li>
                    <strong className="text-secondary-gold">รูปร่าง:</strong> {bodyShape}
                </li>
                <li>
                    <strong className="text-secondary-gold">อาหารที่แนะนำ:</strong> {recommendedFoods.join(', ')}
                </li>
                <li>
                    <strong className="text-secondary-gold">อาหารที่ควรเลี่ยง:</strong> {avoidFoods.join(', ')}
                </li>
                <li>
                    <strong className="text-secondary-gold">โรคภัยที่ควรระวัง:</strong> {healthConcerns.join(', ')}
                </li>
            </ul>
        </section>
    );
};

export default ZodiacSign;