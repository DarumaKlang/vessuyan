'use client'

import Link from 'next/link'

interface LineOAWidgetProps {
    lineOAId?: string
    position?: 'bottom-right' | 'bottom-left'
    showText?: boolean
}

export default function LineOAWidget({
    lineOAId = '@014rfhez', // Updated to correct ID
    position = 'bottom-right',
    showText = true,
}: LineOAWidgetProps) {
    // LINE OA URL format
    const lineUrl = `https://line.me/R/ti/p/${lineOAId}`

    const positionClasses = {
        'bottom-right': 'bottom-6 right-6',
        'bottom-left': 'bottom-6 left-6',
    }

    return (
        <>
            {/* LINE OA Widget Button */}
            <Link href={lineUrl} target="_blank" rel="noopener noreferrer">
                <button
                    className={`fixed ${positionClasses[position]} z-40 group`}
                    aria-label="Contact us on LINE"
                    title="ติดต่อเราผ่าน LINE OA"
                >
                    {/* Button */}
                    <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00B900] to-[#00C300] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-gradient-to-r from-[#00B900] to-[#00C300] rounded-full p-4 shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110">
                                {/* LINE Icon */}
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0C5.37 0 0 4.32 0 9.67c0 4.58 3.8 8.43 8.93 9.4.35.08.82.25 1.04.57.2.3.12.77.06 1.18l-.43 2.54c-.08.48.37.42.78.2l3.56-2.1c.3-.18.78-.35 1.06-.35h.01c.3 0 .78.17 1.08.35l3.56 2.1c.4.24.86.28.78-.2l-.43-2.54c-.06-.4-.14-.88.06-1.18.22-.32.68-.5 1.04-.57 5.13-.97 8.93-4.83 8.93-9.4C24 4.32 18.63 0 12 0zm3.89 12.23h-2.82v4.23h-1.38v-4.23H8.88v-1.32h5.01v1.32z" />
                                </svg>
                            </div>
                        </div>

                        {/* Text Label - Hidden on small screens */}
                        {showText && (
                            <div className="hidden sm:block bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-semibold text-white border border-white/20 group-hover:bg-white/20 transition-all whitespace-nowrap">
                                ติดต่อเราผ่าน LINE
                                <div className="text-xs text-gray-300 mt-0.5">24/7 Support</div>
                            </div>
                        )}
                    </div>

                    {/* Animated ripple effect on hover */}
                    <div className="absolute inset-0 rounded-full group-hover:animate-ping opacity-0 group-hover:opacity-20 bg-[#00B900]" />
                </button>
            </Link>

            {/* LINE QR Code Modal (Optional) */}
            <style jsx>{`
                @media (max-width: 640px) {
                    button {
                        padding: 0.5rem;
                    }
                }
            `}</style>
        </>
    )
}
