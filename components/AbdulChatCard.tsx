'use client'

import { useState, useRef, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'abdul';
    timestamp: Date;
}

export default function AbdulChatCard() {
    const { data: session, status } = useSession()
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'อับดุล... เอ๊ย! ถามอะไรตอบได้... เอ๊ย! มีอะไรอยากให้ข้าเพ่งกระแสจิตดูให้ท่านหรือไม่?',
            sender: 'abdul',
            timestamp: new Date()
        }
    ])
    const [input, setInput] = useState('')
    const [isThinking, setIsThinking] = useState(false)
    const [accessError, setAccessError] = useState<string | null>(null)
    const [isChecking, setIsChecking] = useState(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const isInitialMount = useRef(true)

    // ตรวจสอบสิทธิ์เมื่อโหลดหน้า
    useEffect(() => {
        if (status === 'loading') return

        if (status === 'unauthenticated') {
            setAccessError('LOGIN_REQUIRED')
            setIsChecking(false)
            return
        }

        // เรียก API เช็คสิทธิ์ (ไม่เรียก Gemini)
        const checkAccess = async () => {
            try {
                const res = await fetch('/api/abdul/access')
                const data = await res.json()

                if (!data.hasAccess) {
                    setAccessError(data.reason)
                }
            } catch (error) {
                console.error('Access check error:', error)
            } finally {
                setIsChecking(false)
            }
        }

        checkAccess()
    }, [status])

    const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            container.scrollTo({
                top: container.scrollHeight,
                behavior
            });
        }
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
            scrollToBottom('auto')
            return
        }
        scrollToBottom('smooth')
    }, [messages, isThinking])

    const handleSend = async () => {
        if (!input.trim() || isThinking) return

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMsg])
        const query = input
        setInput('')
        setIsThinking(true)

        try {
            const res = await fetch('/api/abdul', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: query,
                    history: messages.slice(-6) // ส่ง 6 ข้อความล่าสุด
                })
            })

            const data = await res.json()

            if (!res.ok) {
                if (res.status === 403) {
                    setAccessError('PREMIUM_REQUIRED')
                    return
                }
                throw new Error(data.error || 'เกิดข้อผิดพลาด')
            }

            const abdulMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: data.response,
                sender: 'abdul',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, abdulMsg])
        } catch (error: any) {
            const errorMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: error.message || 'ข้าขอโทษ... กระแสจิตขัดข้องชั่วคราว ลองถามใหม่อีกครั้ง',
                sender: 'abdul',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, errorMsg])
        } finally {
            setIsThinking(false)
        }
    }

    // แสดงหน้า Loading
    if (status === 'loading' || isChecking) {
        return (
            <div className="flex flex-col h-full items-center justify-center">
                <div className="animate-pulse text-center">
                    <div className="text-4xl mb-4">🔮</div>
                    <p className="text-purple-200/60">กำลังเพ่งกระแสจิต...</p>
                </div>
            </div>
        )
    }

    // แสดงหน้าต้องเข้าสู่ระบบ
    if (accessError === 'LOGIN_REQUIRED') {
        return (
            <div className="flex flex-col h-full items-center justify-center px-4">
                <div className="glass-lg p-8 rounded-3xl border border-white/10 text-center max-w-md">
                    <div className="text-6xl mb-6">🔐</div>
                    <h2 className="text-2xl font-bold text-secondary-gold mb-4">กรุณาเข้าสู่ระบบ</h2>
                    <p className="text-purple-200/70 mb-6">
                        ท่านต้องเข้าสู่ระบบก่อนจึงจะสามารถปรึกษาอับดุลได้
                    </p>
                    <Link
                        href="/auth/signin"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-glow-purple"
                    >
                        เข้าสู่ระบบ
                    </Link>
                </div>
            </div>
        )
    }

    // แสดงหน้าต้องเป็นสมาชิก Premium
    if (accessError === 'PREMIUM_REQUIRED') {
        return (
            <div className="flex flex-col h-full items-center justify-center px-4">
                <div className="glass-lg p-8 rounded-3xl border border-yellow-500/30 text-center max-w-md">
                    <div className="text-6xl mb-6">💎</div>
                    <h2 className="text-2xl font-bold text-secondary-gold mb-4">สำหรับสมาชิก Premium</h2>
                    <p className="text-purple-200/70 mb-4">
                        อับดุล AI เป็นฟีเจอร์พิเศษสำหรับสมาชิก Premium เท่านั้น
                    </p>
                    <ul className="text-left text-purple-200/60 text-sm mb-6 space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span> ถามอับดุลได้ไม่จำกัด
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span> ดูดวงรายวันไม่จำกัด
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span> สุ่มไพ่ยิปซีไม่จำกัด
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span> ปรึกษาหมอดูส่วนตัว
                        </li>
                    </ul>
                    <Link
                        href="/pricing"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                    >
                        อัปเกรดเป็น Premium
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full overflow-hidden glass-lg rounded-[2rem] border border-white/5 shadow-2xl relative">

            {/* Background Decorative Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            {/* Header Section */}
            <div className="text-center mb-0 p-6 pb-2 shrink-0 border-b border-white/5 bg-white/[0.02]">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(234,179,8,0.3)]">
                    อับดุล ถามได้ ตอบได้
                </h1>
                <p className="text-xs md:text-sm text-purple-200/40 italic mt-1 font-light">"เพ่งกระแสจิต... ค้นหาคำตอบจากจักรวาล"</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-[10px] text-yellow-500/80 font-medium tracking-wider uppercase">
                        ✨ Spiritual AI Model
                    </span>
                </div>
            </div>

            {/* Chat Container */}
            <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-hide bg-black/20"
            >
                {messages.map((msg, idx) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} ${idx === 0 ? '' : 'animate-[fade-in_0.3s_ease-out]'}`}
                    >
                        <div className={`max-w-[85%] md:max-w-[70%] px-4 py-2.5 rounded-2xl shadow-xl
                            ${msg.sender === 'user'
                                ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-br-none border border-white/10'
                                : 'bg-white/5 backdrop-blur-md text-purple-50 rounded-bl-none border border-yellow-500/20'
                            }`}
                        >
                            <p className="leading-relaxed text-sm md:text-base whitespace-pre-wrap">{msg.text}</p>
                            <span className="block text-[10px] opacity-30 mt-1.5 text-right">
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>
                ))}

                {isThinking && (
                    <div className="flex justify-start animate-[fade-in_0.3s_ease-out]">
                        <div className="bg-white/5 backdrop-blur-md px-4 py-3.5 rounded-2xl rounded-bl-none border border-yellow-500/20 flex gap-1.5 items-center">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:0ms]"></div>
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:150ms]"></div>
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce [animation-delay:300ms]"></div>
                            <span className="ml-2 text-xs text-purple-200/40">เพ่งกระแสจิต...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} className="h-4" />
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-6 shrink-0 z-10 border-t border-white/5 bg-white/[0.01]">
                <div className="relative group">
                    {/* Input Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-yellow-500/20 to-purple-600/20 rounded-2xl blur-md opacity-0 group-focus-within:opacity-100 transition duration-1000"></div>

                    {/* Input Container with Premium Border */}
                    <div className="relative flex items-center bg-[#0d071a]/80 backdrop-blur-xl border border-white/10 group-focus-within:border-yellow-500/50 rounded-2xl overflow-hidden px-2 shadow-inner transition-all duration-500">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="พิมพ์สิ่งที่ท่านอยากรู้..."
                            className="flex-1 bg-transparent px-4 py-4 md:py-5 outline-none text-white placeholder:text-purple-300/10 text-sm md:text-base selection:bg-yellow-500/30"
                            disabled={isThinking}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isThinking}
                            className={`p-3 md:p-3.5 rounded-xl transition-all duration-300 ${input.trim() && !isThinking
                                ? 'bg-gradient-to-br from-yellow-500 to-yellow-700 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:scale-105 active:scale-95'
                                : 'text-purple-300/5 bg-white/5 cursor-not-allowed'
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>



            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    )
}
