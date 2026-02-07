'use client'

import React from 'react'
import FortuneTellerCard from './FortuneTellerCard'
import { fortuneTellers } from '@/lib/fortune-tellers'

export default function FortuneTellerGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {fortuneTellers.map((teller) => (
                <FortuneTellerCard key={teller.id} teller={teller} />
            ))}
        </div>
    )
}
