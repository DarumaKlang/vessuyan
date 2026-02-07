'use client'

import Navbar from '@/components/Navbar'
import AbdulChatCard from '@/components/AbdulChatCard'

export default function HoroscopesPage() {
    return (
        <div className="flex flex-col h-[100dvh] bg-[#0a0612] text-white font-sans selection:bg-purple-500/30 overflow-hidden">
            <Navbar />

            <main className="flex-1 flex flex-col container mx-auto max-w-4xl px-4 pt-20 overflow-hidden">
                <AbdulChatCard />
            </main>
        </div>
    )
}
