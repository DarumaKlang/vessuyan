'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { QRCodeSVG } from 'qrcode.react'

type PaymentMethod = 'lightning' | 'solana'

export default function CryptoCheckoutPage() {
    const { data: session } = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    const tier = searchParams.get('tier') || 'PREMIUM'

    const [method, setMethod] = useState<PaymentMethod>('solana')
    const [loading, setLoading] = useState(false)
    const [invoice, setInvoice] = useState<string | null>(null)
    const [paymentHash, setPaymentHash] = useState<string | null>(null)
    const [solanaData, setSolanaData] = useState<any>(null)
    const [paid, setPaid] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Handlers
    const initLightning = async () => {
        setLoading(true)
        setInvoice(null)
        try {
            const res = await fetch('/api/payments/lightning', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 25000, tier })
            })
            const data = await res.json()
            if (data.success) {
                setInvoice(data.payment_request)
                setPaymentHash(data.payment_hash)
            } else {
                setError(data.error)
            }
        } catch (err) {
            setError('Failed to load Lightning Invoice')
        } finally {
            setLoading(false)
        }
    }

    const initSolana = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/payments/solana')
            const data = await res.json()
            if (data.success) {
                setSolanaData(data)
            } else {
                setError(data.error)
            }
        } catch (err) {
            setError('Failed to load Solana info')
        } finally {
            setLoading(false)
        }
    }

    // Polling for Lightning payment status
    useEffect(() => {
        if (!paymentHash || method !== 'lightning' || paid) return

        const interval = setInterval(async () => {
            try {
                const res = await fetch(`/api/payments/lightning?hash=${paymentHash}`)
                const data = await res.json()
                if (data.paid) {
                    setPaid(true)
                    clearInterval(interval)
                    setTimeout(() => router.push('/payments/success'), 2000)
                }
            } catch (err) {
                console.error('Polling error:', err)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [paymentHash, method, paid, router])

    useEffect(() => {
        // if (method === 'lightning') initLightning()
        // else initSolana()
        if (method === 'solana') initSolana()
    }, [method])

    if (paid) {
        return (
            <main className="relative min-h-screen bg-[#0a0612] text-white flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="max-w-md w-full glass-effect p-10 rounded-[2.5rem] border border-yellow-500/30 text-center space-y-6 animate-bounce-slow">
                        <div className="text-6xl">⚡️</div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">ชำระเงินสำเร็จ!</h1>
                        <p className="text-gray-400">ระบบตรวจพบการชำระเงินแล้ว กำลังอัปเกรดสถานะของคุณ...</p>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="relative min-h-screen bg-[#0a0612] text-white overflow-hidden flex flex-col">
            <Navbar />

            <div className="flex-1 container mx-auto max-w-5xl px-4 pt-32 pb-20 relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent">ชำระด้วย Crypto</h1>
                    <p className="text-gray-400">เลือกช่องทางที่รวดเร็วและเป็นส่วนตัวที่สุด</p>
                </div>

                <div className="flex justify-center gap-4 mb-12">
                    {/* <button
                        onClick={() => setMethod('lightning')}
                        className={`px-8 py-3 rounded-full font-bold transition-all ${method === 'lightning' ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                    >
                        ⚡️ Lightning (Sats)
                    </button> */}
                    <button
                        onClick={() => setMethod('solana')}
                        className={`px-8 py-3 rounded-full font-bold transition-all ${method === 'solana' ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                    >
                        🪄 Solana (SOL/USDC)
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* QR Area */}
                    <div className="glass-effect p-10 rounded-[3rem] border border-white/10 flex flex-col items-center justify-center space-y-8 animate-fade-in relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />

                        {loading ? (
                            <div className="aspect-square w-64 flex flex-col items-center justify-center space-y-4">
                                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500/30 border-t-purple-500"></div>
                                <p className="text-sm text-gray-400">กำลังสร้างข้อมูลการชำระเงิน...</p>
                            </div>
                        ) : method === 'lightning' && invoice ? (
                            <>
                                <div className="bg-white p-6 rounded-3xl shadow-[0_0_40px_rgba(249,115,22,0.2)]">
                                    <QRCodeSVG value={invoice} size={240} level="H" includeMargin />
                                </div>
                                <div className="text-center space-y-2">
                                    <p className="text-orange-500 font-bold text-xl">25,000 Sats</p>
                                    <p className="text-xs text-gray-500">สแกนด้วยกระเป๋า Lightning ของคุณ</p>
                                </div>
                                <div className="w-full">
                                    <p className="text-[10px] text-gray-600 mb-2 truncate max-w-xs">{invoice}</p>
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(invoice); alert('Copied!') }}
                                        className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-medium transition-colors"
                                    >
                                        Copy Invoice
                                    </button>
                                </div>
                            </>
                        ) : method === 'solana' && solanaData ? (
                            <>
                                <div className="bg-white p-6 rounded-3xl shadow-[0_0_40px_rgba(147,51,234,0.2)]">
                                    <QRCodeSVG value={solanaData.wallet} size={240} level="H" includeMargin />
                                </div>
                                <div className="text-center space-y-2">
                                    <p className="text-purple-400 font-bold text-xl">{solanaData.priceInSol} SOL / 9 USDC</p>
                                    <p className="text-xs text-gray-500">ที่อยู่กระเป๋า Solana</p>
                                </div>
                                <div className="w-full space-y-3">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <p className="text-[10px] text-gray-500 mb-1">Memo (สำคัญมาก):</p>
                                        <p className="text-sm font-mono text-yellow-500">{solanaData.memo}</p>
                                    </div>
                                    <button
                                        onClick={() => { navigator.clipboard.writeText(solanaData.wallet); alert('Address Copied!') }}
                                        className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-medium transition-colors"
                                    >
                                        Copy Wallet Address
                                    </button>
                                </div>
                            </>
                        ) : (
                            <p className="text-red-400">{error || 'เกิดข้อผิดพลาดในการโหลดข้อมูล'}</p>
                        )}
                    </div>

                    {/* Instructions */}
                    <div className="space-y-8 animate-slide-up">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">ขั้นตอนการชำระเงิน</h2>
                            <div className="space-y-4">
                                <Step num="1" title="เปิดแอป Wallet" desc={method === 'lightning' ? 'ใช้แอปอย่าง Phoenix, Wallet of Satoshi หรือ Alby' : 'ใช้ Phantom, Solflare หรือกระเป๋า Solana ของคุณ'} />
                                <Step num="2" title="สแกนหรือคัดลอก" desc="ใช้ QR Code หรือคัดลอกข้อมูลกระเป๋า/Invoice ไปที่แอปของคุณ" />
                                <Step num="3" title="ยืนยันการโอน" desc={method === 'lightning' ? 'ยอดเงินจะถูกจ่ายทันที และระบบจะอัปเกรดให้คุณอัตโนมัติ' : 'กรุณาระบุ Memo ที่แจ้งไว้เพื่อให้ทีมงานตรวจสอบและอัปเกรดให้คุณ'} />
                            </div>
                        </div>

                        <div className="p-6 bg-purple-500/10 rounded-3xl border border-purple-500/20">
                            <p className="text-sm text-purple-200 leading-relaxed italic">
                                "การชำระด้วยคริปโตคือการตัดตัวกลางออกไป เพื่อให้คุณเชื่อมต่อกับพลังงานแห่งจักรวาลได้โดยตรง รวดเร็ว และเป็นส่วนตัวที่สุด"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx global>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                @keyframes fade-in {
                    from { opacity: 0; scale: 0.9; }
                    to { opacity: 1; scale: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-up {
                    animation: slide-up 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
                }
            `}</style>
        </main>
    )
}

function Step({ num, title, desc }: { num: string, title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-purple-500/20">
                {num}
            </div>
            <div>
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}
