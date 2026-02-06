# Subscription & Membership System - Planning Document
**วันที่:** 6 กุมภาพันธ์ 2026  
**สถานะ:** Planning Phase

---

## 📋 ระบบสมาชิค 3 ระดับ

### 1️⃣ **Non-Member (ผู้ใช้ทั่วไป)**
```
✅ ดูดวง: 1 ครั้ง/สัปดาห์
❌ ถาม: ไม่มี
❌ ปรึกษาส่วนตัว: ไม่มี
❌ เลือกหมอ: ไม่มี

สถานะ: Guest (ไม่ต้องสมัคร)
```

### 2️⃣ **Member (สมาชิคฟรี)**
```
✅ ดูดวง: 2 ครั้ง/สัปดาห์
✅ ถาม: 1 คำถาม/ครั้ง
❌ ปรึกษาส่วนตัว: ไม่มี
❌ เลือกหมอ: ไม่มี

สถานะ: Free Member (ต้องสมัครสมาชิค)
```

### 3️⃣ **Premium/Subscriber (จ่ายเงิน)**
```
✅ ดูดวง: 2 ครั้ง/สัปดาห์ (unlimited หรือเพิ่ม?)
✅ ถาม: 1 คำถาม/ครั้ง (unlimited หรือเพิ่ม?)
✅ ปรึกษาส่วนตัว: ได้
✅ เลือกหมอ: ได้

สถานะ: Premium Member (เสียเงินแบบ subscription)
```

---

## 🗄️ Database Schema ที่ต้องสร้าง

### User Tables
```
users
├── id (PK)
├── email (unique)
├── password (hashed)
├── username
├── membership_type: 'guest' | 'free' | 'premium'
├── created_at
├── updated_at
└── subscription_end_date (nullable)

user_profiles
├── user_id (FK)
├── phone
├── birth_date
├── full_name
├── profile_image_url
└── preferences (JSON)

subscriptions
├── id (PK)
├── user_id (FK)
├── plan_type: 'free' | 'premium'
├── status: 'active' | 'canceled' | 'expired'
├── start_date
├── end_date
├── payment_method (nullable)
├── stripe_id (nullable)
└── auto_renew (boolean)
```

### Usage Tracking Tables
```
horoscope_usage
├── id (PK)
├── user_id (FK)
├── type: 'daily' | 'tarot' | 'numerology'
├── used_at
└── created_at

usage_limits
├── id (PK)
├── user_id (FK)
├── month_year: '2026-02'
├── horoscope_count: 0-2
├── question_count: 0-1
├── consultant_bookings: 0-∞
└── reset_date

questions
├── id (PK)
├── user_id (FK)
├── horoscope_id (FK)
├── question_text
├── answer_text (nullable)
├── answered_by (consultant_id, nullable)
├── status: 'pending' | 'answered'
└── created_at

consultations
├── id (PK)
├── user_id (FK)
├── consultant_id (FK)
├── appointment_date
├── appointment_time
├── duration: 30 | 60 minutes
├── status: 'pending' | 'confirmed' | 'completed' | 'canceled'
├── notes (nullable)
└── payment_status
```

### Consultant Tables
```
consultants
├── id (PK)
├── user_id (FK)
├── name
├── bio
├── specialty: 'horoscope' | 'tarot' | 'numerology' | 'general'
├── rating: 1-5
├── hourly_rate
├── available_slots (JSON)
├── image_url
├── verification_status: 'pending' | 'verified'
└── created_at

consultant_availability
├── id (PK)
├── consultant_id (FK)
├── day_of_week: 0-6
├── start_time: '09:00'
├── end_time: '18:00'
├── slot_duration: 30 | 60
└── max_slots_per_day
```

---

## 🎯 Key Features ที่ต้องสร้าง

### 1. Authentication & User Management
```
✅ Sign Up / Login / Logout
✅ Email Verification
✅ Password Reset
✅ Profile Management
✅ Change Subscription Plan
```

### 2. Membership Dashboard
```
✅ View Current Plan
✅ Usage Statistics (ดูดวง/สัปดาห์)
✅ Remaining Quota Display
✅ Upgrade/Downgrade Plan
✅ Payment History
```

### 3. Horoscope Usage Tracking
```
✅ Limit Horoscope to 1-2/week (based on tier)
✅ Show "Used X/Y times this week"
✅ Disable button when quota reached
✅ Show reset date
✅ Weekly reset (Monday-Sunday)
```

### 4. Questions System
```
✅ Ask 1 question per horoscope (Member+)
✅ Question submission form
✅ Save questions history
✅ Notify when answered
✅ Answer notification system
```

### 5. Consultation Booking System
```
✅ Browse Consultants
✅ View Consultant Profile (rating, specialty, rate)
✅ Check Availability Calendar
✅ Book Time Slot
✅ Payment Processing (Premium only)
✅ Reminders (email/SMS)
✅ Video/Phone Call Integration
```

### 6. Payment Integration
```
✅ Stripe/PayPal Integration
✅ Subscription Management
✅ Invoice Generation
✅ Auto Renewal
✅ Cancel Subscription
✅ Refund Policy
```

---

## 📊 User Flow Diagram

```
Landing Page
    ↓
[View Sample Horoscope]
    ↓
    ├─→ Click "View Full" → Sign Up Required
    │                ↓
    │        [Sign Up/Login]
    │                ↓
    ├─→ Free Member ─→ Can use 2/week + 1 question
    │
    ├─→ Click "Book Consultant" → Premium Required
    │                ↓
    │        [Upgrade Plan]
    │                ↓
    └─→ Premium → Book Consultation + Select Consultant
```

---

## 💰 Pricing Strategy

### Recommended Plans:
```
🔓 FREE
   - 1 horoscope/week
   - No questions
   - Cost: ฟรี

📘 MEMBER (Free Sign-up)
   - 2 horoscopes/week
   - 1 question/horoscope
   - Cost: ฟรี

💎 PREMIUM (Subscription)
   - 2+ horoscopes/week (unlimited?)
   - 1+ questions/horoscope
   - Consultation booking
   - Select consultant
   - Cost: ฿99-199/month (adjust as needed)
```

---

## 🏗️ Architecture Components

### Frontend Components Needed:
```
Auth/
├── SignUp.tsx
├── Login.tsx
├── PasswordReset.tsx
└── EmailVerification.tsx

Dashboard/
├── MembershipStatus.tsx
├── UsageQuota.tsx
├── UpgradePlan.tsx
└── PaymentHistory.tsx

Horoscope/
├── HoroscopeDisplay.tsx (with quota check)
├── QuestionForm.tsx
├── QuestionHistory.tsx
└── UsageCounter.tsx

Consultation/
├── ConsultantList.tsx
├── ConsultantProfile.tsx
├── AvailabilityCalendar.tsx
├── BookingForm.tsx
└── ConfirmationModal.tsx

Payment/
├── PricingPlans.tsx
├── CheckoutForm.tsx
├── SubscriptionManager.tsx
└── InvoiceList.tsx
```

### Backend API Endpoints Needed:
```
Auth:
  POST   /api/auth/signup
  POST   /api/auth/login
  POST   /api/auth/logout
  POST   /api/auth/refresh-token
  POST   /api/auth/password-reset

User:
  GET    /api/user/profile
  PUT    /api/user/profile
  GET    /api/user/membership
  PUT    /api/user/membership

Usage:
  GET    /api/usage/quota
  POST   /api/usage/horoscope (track usage)
  GET    /api/usage/history

Questions:
  POST   /api/questions
  GET    /api/questions
  PUT    /api/questions/:id
  DELETE /api/questions/:id

Consultants:
  GET    /api/consultants
  GET    /api/consultants/:id
  GET    /api/consultants/:id/availability

Consultations:
  POST   /api/consultations
  GET    /api/consultations
  PUT    /api/consultations/:id
  DELETE /api/consultations/:id

Payment:
  POST   /api/payment/create-session
  GET    /api/payment/history
  PUT    /api/subscription/upgrade
  PUT    /api/subscription/cancel
  POST   /api/subscription/renew
```

---

## 📈 Implementation Phases

### Phase 1: Authentication & Basic Membership (Week 1-2)
- [ ] User signup/login system
- [ ] Email verification
- [ ] Membership tier logic
- [ ] Basic dashboard

### Phase 2: Usage Tracking & Quotas (Week 2-3)
- [ ] Horoscope quota system
- [ ] Usage counter display
- [ ] Weekly reset logic
- [ ] Disable button when quota reached

### Phase 3: Questions System (Week 3)
- [ ] Question submission form
- [ ] Question history
- [ ] Admin answer interface
- [ ] Notification system

### Phase 4: Consultation System (Week 4)
- [ ] Consultant profiles
- [ ] Availability calendar
- [ ] Booking system
- [ ] Consultant selection

### Phase 5: Payment Integration (Week 4-5)
- [ ] Stripe/PayPal setup
- [ ] Subscription plans
- [ ] Invoice generation
- [ ] Auto-renewal logic

### Phase 6: Admin Panel (Week 5-6)
- [ ] User management
- [ ] Consultant management
- [ ] Revenue reports
- [ ] Support dashboard

---

## 🔐 Security Considerations

```
✅ Password Hashing (bcrypt)
✅ JWT Tokens (auth)
✅ CORS Configuration
✅ Rate Limiting (prevent abuse)
✅ Payment PCI Compliance
✅ Email Verification
✅ Session Management
✅ SQL Injection Prevention
✅ XSS Protection
✅ CSRF Protection
```

---

## 📱 UI/UX Changes Needed

### New Pages:
```
✅ /auth/signup - Sign up form
✅ /auth/login - Login form
✅ /auth/reset-password - Password reset
✅ /dashboard - Member dashboard
✅ /dashboard/subscription - Subscription management
✅ /consultants - Consultant listing
✅ /consultants/:id - Consultant detail
✅ /book-consultation - Booking form
✅ /my-consultations - My bookings
✅ /my-questions - Question history
✅ /pricing - Pricing plans
✅ /admin - Admin panel
```

### Updated Pages:
```
✅ /horoscopes/daily - Add quota check + counter
✅ /horoscopes/tarot - Add quota check + counter
✅ /horoscopes/numerology - Add quota check + counter
✅ Navbar - Add login/profile button
✅ Homepage - Add upgrade CTA
```

---

## 🎓 Database Migrations

### Migration Order:
1. Create users table
2. Create user_profiles
3. Create subscriptions
4. Create usage_limits
5. Create horoscope_usage
6. Create questions
7. Create consultants
8. Create consultant_availability
9. Create consultations

---

## ✅ Checklist Before Starting Code

- [ ] Finalize pricing tiers
- [ ] Approve feature list
- [ ] Design database schema
- [ ] Plan API endpoints
- [ ] Design UI mockups
- [ ] Set up payment provider account
- [ ] Choose email service (SendGrid/Mailgun)
- [ ] Plan notification strategy
- [ ] Define security requirements
- [ ] Plan testing strategy

---

## 📞 Questions to Clarify

1. **Horoscope Limit:** แน่นอนว่า 2 ครั้ง/สัปดาห์ สำหรับ Member และ Premium หรือ?
2. **Question Limit:** Unlimited questions หรือจำกัดให้ 1 คำถามต่อ horoscope session?
3. **Consultant Rate:** ราคาประจำชั่วโมง เท่าไหร่ / consultant เลือกเองหรือ?
4. **Payment Provider:** Stripe, PayPal, หรือระบบอื่น?
5. **Consultation Duration:** 30 นาที? 60 นาที? Or flexible?
6. **Refund Policy:** คืนเงินได้กี่วันหลังจากซื้อ?
7. **Auto-renewal:** เปิด auto-renew โดยอัตโนมัติหรือปิด?
8. **Email Service:** ใช้ SendGrid, Mailgun, หรือ?

---

**Status:** 📋 Planning Complete - Ready for Development  
**Next Step:** Await clarifications on above questions, then start Phase 1

