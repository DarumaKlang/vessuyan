'use client'

import { useState, useEffect } from 'react'
import { getAllTarotCards, TarotCard } from '@/data/tarotData'
import Navbar from '@/components/Navbar'

export default function TarotGame() {
    const [allCards, setAllCards] = useState<TarotCard[]>([])
    const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null)
    const [isReversed, setIsReversed] = useState(false)
    const [isShuffling, setIsShuffling] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const [deck, setDeck] = useState<TarotCard[]>([])

    useEffect(() => {
        const cards = getAllTarotCards()
        setAllCards(cards)
        setDeck([...cards].sort(() => Math.random() - 0.5).slice(0, 15))
    }, [])

    const handlePickCard = (card: TarotCard) => {
        if (selectedCard) return

        setIsShuffling(true)
        setTimeout(() => {
            const reversed = Math.random() < 0.4
            setIsReversed(reversed)
            setSelectedCard(card)
            setIsShuffling(false)
            setTimeout(() => {
                setIsFlipped(true)
            }, 500)
        }, 800)
    }

    const resetGame = () => {
        setSelectedCard(null)
        setIsReversed(false)
        setIsFlipped(false)
        setDeck([...allCards].sort(() => Math.random() - 0.5).slice(0, 15))
    }

    return (
        <div className="min-h-screen bg-gradient-cosmic text-white">
            <Navbar />

            <main className="container mx-auto px-4 pt-24 pb-12 flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-12 space-y-4 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text drop-shadow-glow-purple">🔮 สุ่มไพ่ยิปซี</h1>
                    <p className="text-purple-200 text-lg md:text-xl font-light">
                        ตั้งสมาธิ นึกถึงสิ่งที่ต้องการคำแนะนำ แล้วเลือกไพ่ 1 ใบจากในสำรับ
                    </p>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-violet to-accent-cyan rounded-full opacity-60"></div>
                </div>

                {/* Game Area */}
                {!selectedCard ? (
                    <div className="relative w-full max-w-6xl">
                        <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-8 transition-opacity duration-1000 ${isShuffling ? 'opacity-50 scale-105 blur-sm' : 'opacity-100'}`}>
                            {deck.map((card, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handlePickCard(card)}
                                    className="group relative cursor-pointer aspect-[2/3.5] rounded-xl overflow-hidden glass-md border border-white/10 hover:border-neon-violet/50 transition-all transform hover:-translate-y-4 hover:shadow-glow-purple active:scale-95"
                                    style={{ transitionDelay: `${idx * 50}ms` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-mystic flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full border-2 border-secondary-gold/30 flex items-center justify-center group-hover:border-secondary-gold">
                                            <span className="text-2xl group-hover:scale-125 transition-transform">✨</span>
                                        </div>
                                        <div className="absolute inset-2 border border-white/5 rounded-lg"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-full max-w-4xl space-y-12 animate-fade-in">
                        {/* Result Card with Flip Animation */}
                        <div className="perspective-1000 w-[240px] h-[400px] md:w-[320px] md:h-[540px]">
                            <div className={`relative w-full h-full transition-all duration-1000 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}>
                                {/* Front (Shown after flip) */}
                                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a0f2e] border-2 border-secondary-gold/40 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                                        <img
                                            src={selectedCard.image}
                                            alt={selectedCard.name}
                                            className={`w-full h-full object-cover opacity-90 transition-transform duration-700 ${isReversed ? 'rotate-180' : ''}`}
                                        />
                                        {isReversed && (
                                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs text-secondary-gold font-bold animate-pulse">
                                                REVERSED
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-4 md:p-6 text-center bg-black/40 backdrop-blur-sm h-full">
                                        <h2 className="text-xl md:text-2xl font-bold text-secondary-gold drop-shadow-lg mb-2">
                                            {selectedCard.nameThai} {isReversed ? '(กลับหัว)' : ''}
                                        </h2>
                                        <div className="w-12 h-1 bg-secondary-gold/30 mx-auto rounded-full"></div>
                                    </div>
                                </div>

                                {/* Back (Hide after flip) */}
                                <div className="absolute inset-0 backface-hidden bg-gradient-mystic border-2 border-white/20 rounded-2xl flex items-center justify-center shadow-glow-purple">
                                    <span className="text-4xl md:text-6xl animate-pulse">✨</span>
                                </div>
                            </div>
                        </div>

                        {/* Meaning Display */}
                        {isFlipped && (
                            <div className="glass-lg p-8 rounded-3xl border border-white/10 shadow-glow-purple w-full animate-slide-up space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-secondary-gold">
                                            <span className="text-2xl">🔮</span>
                                            <h3 className="text-xl font-bold">ความหมายโดยรวม</h3>
                                        </div>
                                        <p className="text-purple-100 leading-relaxed text-lg">
                                            {isReversed ? selectedCard.meaningReversed?.general : selectedCard.meaning.general}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-pink-400">
                                            <span className="text-2xl">💖</span>
                                            <h3 className="text-xl font-bold">ด้านความรัก</h3>
                                        </div>
                                        <p className="text-purple-100 leading-relaxed text-lg">
                                            {isReversed ? selectedCard.meaningReversed?.love : selectedCard.meaning.love}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-cyan-400">
                                            <span className="text-2xl">💼</span>
                                            <h3 className="text-xl font-bold">ด้านการงาน</h3>
                                        </div>
                                        <p className="text-purple-100 leading-relaxed text-lg">
                                            {isReversed ? selectedCard.meaningReversed?.work : selectedCard.meaning.work}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-yellow-400">
                                            <span className="text-2xl">💰</span>
                                            <h3 className="text-xl font-bold">ด้านการเงิน</h3>
                                        </div>
                                        <p className="text-purple-100 leading-relaxed text-lg">
                                            {isReversed ? selectedCard.meaningReversed?.money : selectedCard.meaning.money}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10 flex justify-center">
                                    <button
                                        onClick={resetGame}
                                        className="px-10 py-4 bg-gradient-to-r from-neon-violet to-accent-cyan text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-glow-purple active:scale-95 shadow-lg"
                                    >
                                        ✨ สุ่มไพ่ใหม่อีกครั้ง
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Footer Advice */}
                <div className="mt-20 text-center text-purple-300/60 text-sm max-w-xl italic">
                    * การดวงดวงด้วยไพ่ยิปซีควรทำด้วยจิตใจที่สงบ และใช้ผลคำทำนายเพื่อเป็นแนวทางในการดำเนินชีวิตอย่างมีสติ
                </div>
            </main>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
                .animate-slide-up {
                    animation: slide-up 1s ease-out 0.5s forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    )
}
