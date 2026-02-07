import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { createClient } from '@/utils/supabase/server'
import { prisma } from '@/lib/prisma' // Assuming prisma is exported here or I create a lib/prisma

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const formData = await request.formData()
        const file = formData.get('slip') as File
        const tier = formData.get('tier') as string // PREMIUM

        if (!file) {
            return NextResponse.json({ error: 'No slip file uploaded' }, { status: 400 })
        }

        // 1. Upload to Supabase Storage
        const supabase = await createClient()
        const fileName = `${Date.now()}-${file.name}`
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('slips')
            .upload(fileName, file)

        if (uploadError) {
            console.error('Supabase upload error:', uploadError)
            return NextResponse.json({ error: 'Failed to upload slip' }, { status: 500 })
        }

        const { data: { publicUrl } } = supabase.storage
            .from('slips')
            .getPublicUrl(fileName)

        // 2. Analyze with Gemini Vision
        const geminiApiKey = process.env.GEMINI_API_KEY
        const fileBuffer = await file.arrayBuffer()
        const base64Image = Buffer.from(fileBuffer).toString('base64')

        const prompt = `
            Analyze this Thai bank transfer slip and extract the following information in JSON format:
            {
                "amount": number,
                "date": "DD/MM/YYYY",
                "time": "HH:MM",
                "refNo": "string",
                "bank": "string"
            }
            Only return the JSON object, no other text.
        `

        const geminiResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: prompt },
                                {
                                    inlineData: {
                                        mimeType: file.type,
                                        data: base64Image
                                    }
                                }
                            ]
                        }
                    ]
                })
            }
        )

        if (!geminiResponse.ok) {
            const err = await geminiResponse.text()
            console.error('Gemini API error:', err)
            return NextResponse.json({ error: 'AI Verification failed' }, { status: 500 })
        }

        const aiResult = await geminiResponse.json()
        const rawAiText = aiResult.candidates?.[0]?.content?.parts?.[0]?.text
        let parsedAiData = { amount: 0, confidence: 0 }

        try {
            // Remove markdown code blocks if AI included them
            const jsonText = rawAiText.replace(/```json|```/g, '').trim()
            parsedAiData = JSON.parse(jsonText)
        } catch (e) {
            console.error('JSON Parse error from AI:', rawAiText)
        }

        // 3. Create/Update Payment record using Prisma Client (or Supabase directly)
        // Note: Using createClient for DB might be easier if Prisma is not fully setup in this environment
        const { data: user } = await supabase
            .from('User')
            .select('id')
            .eq('email', session.user.email)
            .single()

        if (!user) throw new Error('User not found')

        // Determine initial status based on AI confidence or matching amount
        // For Premium, price is 299 THB
        const price = 299
        let status = 'REQUIRES_ADMIN'
        if (parsedAiData.amount === price) {
            status = 'VERIFYING' // Set to verifying and wait for manual/automated double check if needed
            // Actually, let's set to REQUIRES_ADMIN for safety but indicate AI matched
        }

        const { data: payment, error: dbError } = await supabase
            .from('Payment')
            .insert({
                userId: user.id,
                amount: parsedAiData.amount || 0,
                method: 'BANK_TRANSFER',
                status: status,
                slipUrl: publicUrl,
                aiVerifiedData: parsedAiData,
                description: `Upgrade to ${tier}`
            })
            .select()
            .single()

        if (dbError) {
            console.error('Database error:', dbError)
            return NextResponse.json({ error: 'Failed to record payment' }, { status: 500 })
        }

        return NextResponse.json({
            success: true,
            message: 'Slip uploaded and being verified by AI',
            data: {
                paymentId: payment.id,
                aiExtracted: parsedAiData,
                status: status
            }
        })

    } catch (error) {
        console.error('Error in slip payment:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
