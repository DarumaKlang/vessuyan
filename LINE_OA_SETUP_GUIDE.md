# 📱 LINE Official Account (OA) Setup Guide

**วันที่เขียน:** ${new Date().toLocaleDateString('th-TH')}

---

## 🎯 Overview

Vessuyan ได้เพิ่มการอินทิเกรต **LINE Official Account** เพื่อให้ลูกค้าสามารถติดต่อได้ 24/7 ผ่านแอปพลิเคชัน LINE ที่พวกเขาใช้อยู่แล้ว

---

## 📋 Step-by-Step Setup

### 1️⃣ Create LINE Official Account

#### A. Register at LINE Business
1. ไปที่ https://official.line.biz/
2. คลิก "Sign Up"
3. เลือก "LINE Official Account"
4. กรอกข้อมูล:
   - Company Name: **Vessuyan** (หรือชื่อธุรกิจของคุณ)
   - Country: **Thailand**
   - Industry: **Horoscope & Astrology Services**
   - Purpose: **Customer Support & Service**

#### B. Choose Plan
```
┌─────────────────────────────────────────┐
│ Plan Options:                           │
├─────────────────────────────────────────┤
│ • Free Tier        (Basic support)      │
│ • Lite             (¥2,500/month)       │
│ • Standard         (¥5,000/month)       │
│ • Premium          (¥15,000/month)      │
└─────────────────────────────────────────┘

Recommended: Start with Free or Lite tier
```

#### C. Verify Account
- Confirm email
- Upload company documents
- Wait for LINE approval (1-2 days)

---

### 2️⃣ Get Your LINE OA ID

After account approval:

1. Login to **LINE Official Account Manager**
   - URL: https://manager.line.biz/

2. Go to **Settings** → **Account**

3. Find **LINE ID** or **Display ID**
   - Format: `@vessuyan` (with @ symbol)
   - Example: `@vessuyan`

4. Copy your ID

---

### 3️⃣ Update Vessuyan Code

#### Update Component
```tsx
// app/layout.tsx

import LineOAWidget from '@/components/LineOAWidget'

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                {children}
                <Footer />
                {/* Add YOUR LINE OA ID here */}
                <LineOAWidget 
                    lineOAId="@vessuyan"      // ← Replace with your ID
                    position="bottom-right"
                    showText={true}
                />
            </body>
        </html>
    )
}
```

#### Environment Variables (Optional)
```bash
# .env.local
NEXT_PUBLIC_LINE_OA_ID=@vessuyan
```

```tsx
// Usage in component
<LineOAWidget lineOAId={process.env.NEXT_PUBLIC_LINE_OA_ID} />
```

---

### 4️⃣ Configure Rich Menu

Rich Menu = Interactive menu that appears at bottom of chat

#### A. Design Rich Menu

Navigate to **LINE Official Account Manager** → **Message** → **Rich Menu**

#### B. Create Menu Items
```
┌─────────────────────────────────────┐
│  📅 ดูดวงประจำวัน                   │
│  ♈ ดูจักราศี (12 ราศี)            │
│  🤝 ปรึกษาผู้เชี่ยวชาญ              │
│  ❓ ถามคำถาม                       │
│  📚 บทความ & เรียนรู้              │
│  💬 ติดต่อเรา                      │
└─────────────────────────────────────┘
```

#### C. Link Actions
```
Menu Item          Link/Action
─────────────────────────────────────
📅 ดูดวง           https://vessuyan.com/horoscopes/daily
♈ ราศี             https://vessuyan.com/astrology/zodiact
🤝 ปรึกษา           https://vessuyan.com/consultations
❓ คำถาม           https://vessuyan.com/questions
📚 บทความ          https://vessuyan.com/blog
💬 ติดต่อ           https://vessuyan.com/contact
```

#### D. Upload & Deploy
1. Click "Upload Image"
2. Set as "Default Display"
3. Click "Deploy"

---

### 5️⃣ Setup Auto-Reply

Auto-reply sends automatic message when user first messages

#### A. Enable Auto-Reply
**LINE Manager** → **Message** → **Auto Reply**

#### B. Create Welcome Message
```
สวัสดีครับ! 🙏

ยินดีต้อนรับสู่ Vessuyan - 
แพลตฟอร์มดูดวงออนไลน์ที่ดีที่สุด

เราพร้อมช่วยเหลือคุณ:
📅 ดูดวงประจำวัน
♈ อ่านจักราศี
🤝 ปรึกษาผู้เชี่ยวชาญ

คลิกเมนูด้านล่างเพื่อเริ่มต้น 👇
```

#### C. Schedule
- Recommended: 24/7 enabled
- Or set business hours

---

### 6️⃣ Setup Webhook (Advanced)

Webhook = LINE sends events to your server

#### A. Enable Webhook
**LINE Manager** → **Settings** → **Webhook**

#### B. Set Webhook URL
```
https://vessuyan.com/api/webhooks/line
```

#### C. Create API Endpoint
```typescript
// app/api/webhooks/line/route.ts

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const body = await request.json()
    
    console.log('LINE Webhook Event:', body.events)
    
    // Process webhook events here
    // e.g., Message events, Follow events, etc.
    
    return NextResponse.json({ success: true })
}
```

#### D. Event Types
```typescript
// Message event
{
    type: 'message',
    message: {
        type: 'text',
        id: '...message_id...',
        text: 'User message text'
    }
}

// Follow event
{
    type: 'follow'
}

// Unfollow event
{
    type: 'unfollow'
}
```

---

### 7️⃣ Setup Broadcast Messages

Broadcast = Send message to all followers

#### A. Access Broadcast
**LINE Manager** → **Message** → **Broadcast**

#### B. Create Message
```
[Title]
ดูดวงประจำวันศุกร์

[Content]
นี่คือดวงประจำวันสำหรับ:
- ♈ ชวด
- ♉ ฉลู
- ♊ ขาล
(... ราศีอื่น ...)

[CTA Button]
"ดูดวงเต็ม" → https://vessuyan.com/daily
```

#### C. Schedule
- Send at specific time
- Or send immediately

#### D. Analytics
- View delivery rate
- Track clicks
- Monitor engagement

---

## 🔐 Advanced Features

### 1. LINE Login Integration
```typescript
// Allow users to login via LINE account
import LineLogin from '@/components/LineLogin'

<LineLogin clientId={NEXT_PUBLIC_LINE_LOGIN_CLIENT_ID} />
```

### 2. LINE Pay Integration
```typescript
// Enable payment through LINE Pay
const checkout = {
    productName: 'Premium Consultation',
    amount: 990,
    currency: 'THB',
    orderId: '...',
    packages: [{
        id: 'PKG_1',
        amount: 990,
        products: [{
            name: 'Astrology Consultation',
            quantity: 1,
            price: 990
        }]
    }]
}
```

### 3. Rich Menu with Image Map
```
Support multiple interactive areas on image:
- Button 1: "Book Consultation"
- Button 2: "View Today's Horoscope"
- Button 3: "FAQ"
- Button 4: "Contact"
```

### 4. Flex Message
```typescript
const flexMessage = {
    type: 'flex',
    altText: 'Horoscope Card',
    contents: {
        type: 'bubble',
        body: {
            type: 'box',
            layout: 'vertical',
            contents: [
                { type: 'text', text: 'Your Daily Horoscope' },
                { type: 'text', text: 'Aries: Good day for business' }
            ]
        }
    }
}
```

---

## 📊 Analytics & Monitoring

### Monitor in LINE Manager

#### A. Dashboard Metrics
```
┌────────────────────────────────────┐
│ Followers:          1,234          │
│ Messages Sent:      5,678          │
│ Messages Received:  890            │
│ Engagement Rate:    45.2%          │
│ Click-through Rate: 12.5%          │
└────────────────────────────────────┘
```

#### B. Hourly Activity
- Peak times for engagement
- Popular features
- Message response rate

#### C. User Segments
- New followers
- Active users
- Inactive users

### Setup Custom Tracking
```typescript
// Track LINE widget clicks
<LineOAWidget 
    lineOAId="@vessuyan"
    onWidgetClick={() => {
        // Send to analytics
        analytics.track('line_widget_click', {
            timestamp: new Date(),
            user_id: userId
        })
    }}
/>
```

---

## 🎯 Content Strategy

### Daily Messages
```
Time: 8:00 AM
Content: Daily horoscope for all zodiac signs

Format:
📅 วันศุกร์ 7 กุมภาพันธ์ 2566

🔮 ดวงประจำวัน:
♈ ชวด: โชคดี ในการเงิน ✅
♉ ฉลู: ระวังการสื่อสาร ⚠️
...

👉 ดูรายละเอียด: [Link]
```

### Weekly Features
```
Monday:  💼 Work Horoscope
Tuesday: 💑 Relationship Tips
Wednesday: 💰 Money Advice
Thursday: 📚 Learning & Growth
Friday:  🎉 Weekend Guide
Saturday: 🧘 Wellness Tips
Sunday:  🙏 Spiritual Guidance
```

### Monthly Newsletter
```
Content:
- Major astrological events
- Planetary movements
- Lucky days forecast
- Special promotions
- User testimonials
```

---

## 🔗 Integration Checklist

```
□ Create LINE Official Account
□ Get LINE OA ID (@vessuyan)
□ Update LineOAWidget in code
□ Configure Rich Menu
□ Setup Auto-Reply message
□ Enable Webhook (optional)
□ Setup Analytics tracking
□ Create broadcast messages
□ Test on iOS and Android
□ Monitor performance
□ Create content calendar
□ Train support team
```

---

## 🆘 Troubleshooting

### Issue: Widget not showing
**Solution:**
- Check LINE OA ID format (`@vessuyan`)
- Verify LineOAWidget component mounted
- Check z-index (should be z-40)

### Issue: Can't open LINE app
**Solution:**
- Verify LINE app installed
- Check intent URL format
- Allow app permissions

### Issue: Messages not delivered
**Solution:**
- Check webhook URL accessible
- Verify HTTPS enabled
- Check LINE API credentials

### Issue: Auto-reply not working
**Solution:**
- Enable in LINE Manager settings
- Verify message content
- Check triggers (must be first message)

---

## 📚 Resources

### Official Documentation
- [LINE Messaging API](https://developers.line.biz/en/docs/messaging-api/)
- [LINE Official Account Manager](https://manager.line.biz/)
- [LINE Login Integration](https://developers.line.biz/en/docs/line-login/)
- [LINE Pay Integration](https://developers.line.biz/en/docs/line-pay/)

### Code Examples
- [LINE Bot SDK](https://github.com/line/line-bot-sdk-nodejs)
- [LINE Rich Menu Guide](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/)
- [Webhook Sample Code](https://github.com/line/line-bot-sdk-nodejs/blob/master/examples/webhook.js)

### Community
- [LINE Developers Community](https://stackoverflow.com/questions/tagged/line-bot-sdk)
- [LINE Developer Forum](https://developers.line.biz/forum/)

---

## 📞 Support

**Vessuyan Support:**
- 📧 Email: support@vessuyan.com
- 💬 LINE: @vessuyan
- 🌐 Website: https://vessuyan.com

**LINE Official Support:**
- 📧 LINE Developers: https://developers.line.biz/
- 📞 LINE Business: https://official.line.biz/

---

## 🎉 Next Steps

1. ✅ Create LINE Official Account
2. ✅ Get your LINE OA ID
3. ✅ Update Vessuyan code
4. ✅ Configure rich menu
5. ✅ Setup auto-reply
6. ✅ Launch and monitor
7. ✅ Scale with broadcasts
8. ✅ Integrate LINE Pay

**Expected Results:**
- 30-50% increase in customer engagement
- 24/7 automated support
- Better customer retention
- Additional revenue stream

---

*Last Updated: ${new Date().toLocaleDateString('th-TH')}*

**Ready to launch your LINE OA!** 🚀✨
