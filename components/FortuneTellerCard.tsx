'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FortuneTeller } from '@/lib/fortune-tellers'

interface FortuneTellerCardProps {
    teller: FortuneTeller
}

export default function FortuneTellerCard({ teller }: FortuneTellerCardProps) {
    return (
        <div className="group relative flex flex-col bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:-translate-y-2">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black flex items-center justify-center">
                    <span className="text-white/10 text-6xl font-bold">{teller.name[0]}</span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${teller.isOnline
                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                            : 'bg-white/10 text-white/50 border-white/10'
                        }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${teller.isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                        {teller.isOnline ? 'Online' : 'Offline'}
                    </div>
                </div>

                {/* Actual Image (commented out until user provides assets) */}
                {/* <Image 
                    src={teller.image} 
                    alt={teller.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                /> */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-transparent to-transparent " />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6 space-y-4">
                <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {teller.name}
                    </h3>
                    <p className="text-yellow-500/80 text-sm font-medium tracking-wide border-b border-white/5 pb-2">
                        {teller.title}
                    </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {teller.bio}
                </p>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-2">
                    {teller.specialties.map((spec) => (
                        <span
                            key={spec}
                            className="text-[10px] bg-white/5 text-purple-300 px-2 py-0.5 rounded-md border border-white/5"
                        >
                            {spec}
                        </span>
                    ))}
                </div>

                <div className="flex-1" />

                {/* Action Section */}
                <div className="pt-4 flex items-center justify-between gap-4">
                    {teller.price && (
                        <div className="text-white font-bold">
                            <span className="text-xs text-gray-500 block font-normal">ค่าบูชาครู</span>
                            {teller.price}
                        </div>
                    )}

                    <Link
                        href={teller.id === 'abdul' ? '/horoscopes/abdul' : '/contact'}
                        className="flex-1"
                    >
                        <button className="w-full py-3 px-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-primary-purple font-bold rounded-xl transition-all shadow-lg active:scale-95 text-sm uppercase tracking-wider">
                            {teller.id === 'abdul' ? 'คุยฟรี!' : 'จองคิว'}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
