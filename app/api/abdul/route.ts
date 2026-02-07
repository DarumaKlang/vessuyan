import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createClient } from '@/utils/supabase/server'
import { ABDUL_SYSTEM_PROMPT, GEMINI_CONFIG, SAFETY_SETTINGS } from '@/lib/abdul-prompt'

export async function POST(request: NextRequest) {
    try {
        // 1. ตรวจสอบ Session
        const session = await getServerSession(authOptions)

        if (!session?.user?.email) {
            return NextResponse.json(
                { error: 'กรุณาเข้าสู่ระบบก่อนใช้งานอับดุล', code: 'UNAUTHENTICATED' },
                { status: 401 }
            )
        }

        // 2. ตรวจสอบสิทธิ์ (PREMIUM หรือ ADMIN เท่านั้น)
        const supabase = await createClient()
        const { data: user } = await supabase
            .from('User')
            .select('*, subscription:Subscription(*)')
            .eq('email', session.user.email)
            .single()

        if (!user) {
            return NextResponse.json(
                { error: 'ไม่พบข้อมูลผู้ใช้', code: 'USER_NOT_FOUND' },
                { status: 404 }
            )
        }

        // Handle both object and array formats from Supabase relation joins
        const sub = Array.isArray(user.subscription) ? user.subscription[0] : (user.subscription || null)
        const tier = sub?.tier || 'NON_MEMBER'
        const isAdmin = user.email === 'admin@vessuyan.com'
        const isPremium = tier === 'PREMIUM'

        if (!isAdmin && !isPremium) {
            return NextResponse.json(
                {
                    error: 'ฟีเจอร์นี้สำหรับสมาชิก Premium เท่านั้น',
                    code: 'INSUFFICIENT_TIER',
                    currentTier: tier
                },
                { status: 403 }
            )
        }

        // 3. รับข้อความจากผู้ใช้
        const { message, history } = await request.json()

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'กรุณาพิมพ์คำถาม', code: 'INVALID_MESSAGE' },
                { status: 400 }
            )
        }

        // 4. เรียก Gemini API
        const geminiApiKey = process.env.GEMINI_API_KEY
        if (!geminiApiKey) {
            console.error('GEMINI_API_KEY is not set')
            return NextResponse.json(
                { error: 'ระบบขัดข้อง กรุณาลองใหม่ภายหลัง', code: 'API_KEY_MISSING' },
                { status: 500 }
            )
        }

        // สร้าง conversation history สำหรับ Gemini
        const contents = [
            {
                role: 'user',
                parts: [{ text: ABDUL_SYSTEM_PROMPT }]
            },
            {
                role: 'model',
                parts: [{ text: 'เข้าใจแล้วครับ ข้าพร้อมเป็นอับดุลหมอดูลึกลับแล้ว เอ๊ย!' }]
            }
        ]

        // เพิ่ม history ถ้ามี
        if (history && Array.isArray(history)) {
            for (const msg of history.slice(-6)) { // เก็บแค่ 6 ข้อความล่าสุด
                contents.push({
                    role: msg.sender === 'user' ? 'user' : 'model',
                    parts: [{ text: msg.text }]
                })
            }
        }

        // เพิ่มข้อความปัจจุบัน
        contents.push({
            role: 'user',
            parts: [{ text: message }]
        })

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_CONFIG.model}:generateContent?key=${geminiApiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents,
                    generationConfig: {
                        temperature: GEMINI_CONFIG.temperature,
                        topP: GEMINI_CONFIG.topP,
                        topK: GEMINI_CONFIG.topK,
                        maxOutputTokens: GEMINI_CONFIG.maxOutputTokens,
                    },
                    safetySettings: SAFETY_SETTINGS
                })
            }
        )

        if (!response.ok) {
            const errorData = await response.text()
            console.error('Gemini API error:', errorData)

            // Handle Rate Limit (429)
            if (response.status === 429) {
                // ใช้ fallback response แทน
                const fallbackResponses = [
                    "เอ๊ย! กระแสจิตของข้าถูกใช้งานหนักไปสักหน่อย... ท่านลองถามใหม่อีกครั้งในอีกสักครู่นะ",
                    "อืม... พลังงานจักรวาลกำลังฟื้นฟู ท่านรอสักครู่แล้วถามใหม่ได้เลย",
                    "เอ๊ย! ข้าต้องพักเพ่งกระแสจิตสักครู่... ลองถามใหม่ในอีก 1 นาทีนะท่าน"
                ]
                return NextResponse.json({
                    success: true,
                    response: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
                    isRateLimited: true
                })
            }

            return NextResponse.json(
                { error: 'กระแสจิตขัดข้อง... กรุณาลองใหม่อีกครั้ง', code: 'GEMINI_ERROR' },
                { status: 500 }
            )
        }

        const data = await response.json()
        const abdulResponse = data.candidates?.[0]?.content?.parts?.[0]?.text

        if (!abdulResponse) {
            return NextResponse.json(
                { error: 'ข้าไม่สามารถเพ่งกระแสจิตได้ในขณะนี้...', code: 'EMPTY_RESPONSE' },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            response: abdulResponse
        })

    } catch (error) {
        console.error('Error in POST /api/abdul:', error)
        return NextResponse.json(
            { error: 'เกิดข้อผิดพลาด กรุณาลองใหม่', code: 'INTERNAL_ERROR' },
            { status: 500 }
        )
    }
}
