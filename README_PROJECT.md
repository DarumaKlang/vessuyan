# Vessuyan 🌙✨
**Thai Astrology, Horoscopes & Numerology Platform**

> พื้นที่ส่วนตัวสำหรับค้นพบดวงชะตา โหราศาสตร์ไทย และศาสตร์ตัวเลข

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- PostgreSQL (Supabase)
- npm/yarn

### Setup

1. **Clone & Install**
   ```bash
   git clone https://github.com/your-repo/vessuyan.git
   cd vessuyan
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

3. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

---

## 📋 Features

### ✅ Phase 1: Authentication System (COMPLETE)
- User signup/signin with email & password
- NextAuth.js with Credentials provider
- Secure password hashing (bcrypt)
- JWT session management
- GDPR/CCPA-compliant Privacy Policy
- Professional Footer with copyright

### 🔄 Phase 2: Protected Routes (IN PROGRESS)
- Dashboard with user profile
- Subscription management
- Usage limit tracking

### 📧 Phase 3: Email Communication (PENDING)
- Email verification
- Password reset
- Consultation notifications

### 💳 Phase 4: Payment System (PENDING)
- Stripe/PromptPay integration
- Subscription tiers (FREE, PREMIUM)
- Invoice generation

---

## 📁 Project Structure

```
vessuyan/
├── app/                          # Next.js App Router
│   ├── api/auth/                 # NextAuth API routes
│   ├── auth/                     # Authentication pages
│   ├── dashboard/                # User dashboard (Phase 2)
│   ├── privacy/                  # Privacy Policy
│   ├── astrology/                # Astrology features
│   ├── horoscopes/               # Horoscope pages
│   ├── buddha/                   # Buddhist content
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/                   # React components
│   ├── Footer.tsx                # Global footer
│   ├── Navbar.tsx
│   └── ...
├── lib/                          # Utility functions
│   ├── prisma.ts                 # Prisma client
│   ├── supabase.ts               # Supabase client
│   └── thai-astrology.ts
├── prisma/                       # Database
│   ├── schema.prisma             # Data models
│   └── migrations/               # DB migrations
├── data/                         # Static data
│   ├── zodiacData.ts
│   ├── data.ts
│   └── ...
├── public/                       # Static assets
├── .env                          # Environment variables
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript 5, Next.js 16 |
| **Styling** | Tailwind CSS 4, Emotion |
| **Database** | PostgreSQL (Supabase) |
| **ORM** | Prisma 7 with PrismaPg adapter |
| **Auth** | NextAuth.js + bcryptjs |
| **Build** | Turbopack (Next.js native) |

---

## 🔐 Authentication Flow

```
┌─────────────────────┐
│  Signup Form        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ /api/auth/signup    │
│ - Validate input    │
│ - Hash password     │
│ - Create user       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Signin Form         │
│ NextAuth Credentials│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ JWT Session Token   │
│ 30-day expiry       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Protected Routes    │
│ Dashboard, Profile  │
└─────────────────────┘
```

---

## 🌐 Environment Variables

**Required:**
```env
# Database
DATABASE_URL=postgresql://user:password@db.supabase.co:5432/postgres

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generated-secret>
```

**Optional (Phase 4):**
```env
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Email (Phase 3)
SENDGRID_API_KEY=SG....
RESEND_API_KEY=re_...
```

---

## 📖 API Documentation

### Authentication Endpoints

#### POST `/api/auth/signup`
Create new user account
```json
{
  "email": "user@example.com",
  "password": "securepass123",
  "fullName": "John Doe"
}
```
**Response (201):**
```json
{
  "message": "User created successfully",
  "user": { "id": "...", "email": "...", "fullName": "..." }
}
```

#### POST `/api/auth/signin`
Sign in via NextAuth Credentials Provider
```javascript
const result = await signIn('credentials', {
  email: 'user@example.com',
  password: 'securepass123',
  redirect: false
})
```

---

## 🧪 Testing

### Manual Testing
1. **Signup:**
   - Visit http://localhost:3000/auth/signup
   - Enter valid email & password
   - Verify user created in database
   
2. **Signin:**
   - Visit http://localhost:3000/auth/signin
   - Use credentials from signup
   - Should redirect to `/dashboard`

3. **Database:**
   ```bash
   npx prisma studio
   # Opens Prisma Studio at http://localhost:5555
   ```

---

## 🚢 Deployment

### Vercel (Recommended for Next.js)

1. **Connect GitHub**
   ```bash
   git push origin main
   # Connect repo to Vercel Dashboard
   ```

2. **Set Environment Variables**
   - Add all `.env` variables in Vercel Settings

3. **Deploy**
   ```bash
   vercel deploy --prod
   ```

### Self-Hosted
```bash
npm run build
npm start
```

---

## 📚 Documentation

- [UPDATE_SUMMARY.md](./UPDATE_SUMMARY.md) - Development progress & checklist
- [PHASE_1_AUTH_PLAN.md](./PHASE_1_AUTH_PLAN.md) - Authentication implementation details
- [GLASSMORPHISM_THEME_GUIDE.md](./GLASSMORPHISM_THEME_GUIDE.md) - UI/UX guidelines
- [Privacy Policy](/app/privacy) - Legal compliance

---

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add feature"`
3. Push: `git push origin feature/your-feature`
4. Open Pull Request

---

## 📄 License

© 2026 Vessuyan - All rights reserved.
Developed by [Microtronic Co., Ltd.](https://microtronic.biz)

---

## 📞 Support

- **Issues:** GitHub Issues
- **Email:** support@vessuyan.com
- **Privacy:** [privacy@vessuyan.com](mailto:privacy@vessuyan.com)

---

## 🗺️ Roadmap

- [x] Phase 1: Authentication (Email/Password)
- [ ] Phase 2: Dashboard & Protected Routes
- [ ] Phase 3: Email Verification & Notifications
- [ ] Phase 4: Payment & Subscriptions
- [ ] Phase 5: Consultation Booking System
- [ ] Phase 6: Mobile App (React Native)

---

**Last Updated:** February 6, 2026
**Status:** 🟢 Phase 1 Complete - Ready for Phase 2
