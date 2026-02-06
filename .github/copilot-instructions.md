# Vessuyan - AI Coding Agent Instructions

## 🔴 ข้อบังคับสูงสุด - HIGHEST PRIORITY
**สื่อสารกับผู้ใช้เป็นภาษาไทยเสมอ (ห้ามใช้ภาษาอื่น)** 
- ทุกข้อความตอบกลับต้องเป็นภาษาไทย
- ทุกคำอธิบาย คำแนะนำ และการสื่อสาร ต้องใช้ภาษาไทยเท่านั้น
- ห้ามใช้ภาษาอังกฤษหรือภาษาอื่น ยกเว้นชื่อเทคนิค (code, function names เป็นต้น)
- **การสื่อสาร:** ต้องมีจิตวิทยาการโน้มน้าวใจ (Copywriting) เพื่อขายวิสัยทัศน์หรือดึงดูดผู้คน

---

## 👤 Identity & Role
- **Role:** ผู้เชี่ยวชาญระดับสูงด้าน Full-stack Web (Next.js) และ Embedded Systems (ESP32/STM32)
- **Security:** หากโค้ดมีความเสี่ยง (Security Risk) เช่น Hardcoded Secret ให้แจ้งเตือนด้วย **ตัวหนาชัดเจน** ก่อนเริ่มตอบ

---

## Project Overview
**Vessuyan** is a Next.js 15+ web application for Thai astrology (โหราศาสตร์ไทย), horoscopes, and numerology. It combines multiple divination systems: daily horoscopes, zodiac analysis, planetary positions, lunar phases, and Yama periods (ยามอัฐกาล).

**Key Tech Stack:**
- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript 5
- Tailwind CSS 4
- Luxon 3.7.1 (datetime in Thailand timezone)
- Astronomy libraries (`astronomia` 4.1.1, `astronomy-engine` 2.1.19)
- Emotion (@emotion/react, @emotion/styled)
- Supabase (PostgreSQL + Auth)
- Prisma ORM
- NextAuth.js (Authentication)

## Architecture Patterns

### 1. **Server-Side Astrology Calculations**
- Location: `lib/thai-astrology.ts` 
- Uses "use server" directive for Server Actions (called from client components)
- Returns `AstrologyResult` : { html, dayOfWeekIndex, yamNumber, yamPeriod }
- **Key function:** `getThaiAstrologyInfo(birthDate: string)` - calculates Thai lunar info, Yama periods (90-min divisions), day of week
- **Timezone:** Always uses "Asia/Bangkok" via Luxon
- Used by `YamaAthaganClock` component to fetch real-time astrology data

### 2. **Data-Driven Content**
- `data/data.ts` - Yama predictions by day/period (8 day types × 2 periods × 8 yamas = 128 entries)
- `data/zodiacData.ts` - 12 zodiac signs with personality, foods, health concerns
- `data/galakiniData.ts` - Galakini (ศรีสตรี) divination data
- `data/dataStarLore.ts` - Star lore predictions
- **Pattern:** All export as `Record<DayType, ...>` or arrays for easy mapping in components

### 3. **Navigation & Page Structure**
```
/horoscopes
  /daily          - Daily horoscope calculator (BirthdayCalculatorCard)
  /tarot          - Tarot readings
  /numerology     - Number science
/astrology
  /zodiact        - 12 zodiac signs (จักราศี)
  /circular-horoscope - Circular zodiac wheel chart
  /taksa          - Planetary placements (ตักษ)
  /lucky-day      - Auspicious days (วันมหาจักร)
  /mahajak        - Major Jupiter (ดวงมหาจักร)
  /galakini       - Female divination (ศรีสตรี)
  /starlore       - Star predictions (สารสัพเพชร)
  /yamathaglan    - Yama periods (ยามอัฐกาล)
  /[day]          - Day-specific pages (monday, tuesday, etc.)
    /time         - Time periods for that day
/buddha
  /meditate       - Meditation guides
  /respect        - Respectful practices
  /dhamma         - Buddhist teachings
```
**Important:** All pages use `'use client'` directive (client-rendered for interactivity)

### 4. **Constants & Lookup Maps**
Location: `constants.ts` 
- `dayMap` - Thai day names → numbers (อาทิตย์=1, จันทร์=2, ...)
- `monthMap` - Thai month names → numbers
- `zodiacMap` - Zodiac numbers → animal signs (ชวด, ฉลู, ขาล, ...)
- `numMap` - Arabic → Thai numerals
- Used in `HoroscopeCard` for prediction logic based on day + zodiac combinations

## Developer Workflows

### Build & Development
```bash
npm run dev              # Next.js dev server with Turbopack (port 3000)
npm run build            # Production build (static/SSG + Vercel optimizations)
npm start                # Run production build locally
npm run lint             # Next.js eslint
npx prisma migrate dev   # Database migrations
npx prisma studio       # View/edit database online
```

### Deployment
- **Target:** Vercel (optimized for Next.js)
- **Setup:** Connect GitHub repo → Vercel auto-deploys
- **Features enabled:**
  - Incremental Static Regeneration (ISR)
  - Server-Side Rendering (SSR) via Vercel Functions
  - Streaming for faster response times
  - Image Optimization on-demand
  - Font Optimization (zero layout shift)
  - Open Graph dynamic image generation
  - Proxy (previously middleware) for geolocation-aware routing
  - Analytics & Speed Insights built-in
  - Preview Deployments for pull requests

### Key Files by Responsibility
| Purpose | Files |
|---------|-------|
| Middleware/Proxy logic | `proxy.ts` |
| Astrology calculations | `lib/thai-astrology.ts` , `lib/seo.ts` |
| Horoscope component | `components/HoroscopeCard.tsx` |
| Yama clock display | `components/YamaAthaganClock.tsx` |
| Zodiac display | `components/ZodiacSign.tsx` , `components/ThaiZodiacTable.tsx` |
| Page layouts | `app/[section]/page.tsx` (15+ pages) |
| Shared UI | `components/Navbar.tsx` , `components/Card3x3.tsx` |

## Critical Conventions

### 1. **Datetime Handling**
- Always use Luxon with "Asia/Bangkok" timezone
- ISO 8601 format for API: `new Date().toISOString()` 
- Thai Buddhist year = Gregorian + 543 (so 2024 → 2567)
- Example: `DateTime.fromISO(birthDate, { zone: "Asia/Bangkok" })` 

### 2. **Component Patterns**
- **Cards:** `Card3x3.tsx` , `HoroscopeCard.tsx` , `AuspiciousTimeCard.tsx` - reusable containers
- **Data display:** Components receive data via props, map over arrays with `.map()` 
- **Server Actions:** Components import `getThaiAstrologyInfo` to fetch server-side calculations
- **Styling:** Tailwind classes only (no CSS modules). Purple/gold theme: `primary-purple` , `secondary-gold` 

### 3. **Thai Language Text**
- All UI text is in Thai (ภาษาไทย)
- Prediction text from data files (avoid hardcoding)
- Thai numerals use `numMap` conversion when needed

### 4. **Image Optimization**
- All images use Next.js `Image` component with:
  - `alt` text (for accessibility + SEO)
  - `fill` or `width/height` props
  - `quality={100}` for backgrounds, lower for others
- Background image: `/background-vessuyan.png` 

### 5. **SEO Structure**
- Metadata in `app/layout.tsx` and per-page exports
- Server-side sitemap: `app/sitemap.ts` (15 main routes)
- Robots configuration: `app/robots.ts` 
- JSON-LD schema: Organization + Website (in layout)
- OG tags for social sharing
- Use `lib/seo.ts` utilities for schema generation

## Data Flow Examples

### Yama Period Prediction (Real-Time Clock)
```
YamaAthaganClock.tsx (useEffect)
  → getThaiAstrologyInfo(ISO date) [Server Action]
    ← AstrologyResult { html, yamNumber, yamPeriod }
  → Renders HTML + yam name from yamAthagranData[day][period]
```

### Daily Horoscope Prediction
```
HoroscopeCard.tsx receives: { b_day, b_date, b_month, b_year, b_time }
  → dayMap[b_day] = number
  → zodiacMap[parseInt(b_year, 10)] = sign
  → getPrediction(day, zodiac) = logic based on day/zodiac combo
  → Display prediction text
```

### Zodiac Display
```
ZodiacPage.tsx defines: zodiacSigns array (12 objects)
  → Maps to ZodiacSign components
    → Shows: symbol, personality, foods, health concerns
```

## External Dependencies You'll Encounter
- **luxon** - DateTime math (lunar calculations, Thai timezone)
- **astronomia / astronomy-engine** - Planetary positions, lunar age
- **@emotion/react/@emotion/styled** - Styled components (rarely used, mostly Tailwind)
- **@mui/icons-material** - Icon set (imported in SocialButtons, etc.)

## Common Implementation Tasks

### Adding a New Astrology Feature Page
1. Create `app/astrology/[feature-name]/page.tsx` 
2. Add `'use client'` and import Navbar, Image
3. Use standard layout: background image + navbar + content div
4. Import data from `data/` and map over it
5. Add metadata export for SEO
6. Add link in parent page's navigation grid

### Adding a New Data Source
1. Create file in `data/` (e.g., `data/newSource.ts` )
2. Export as `Record<DayType, ...>` or typed array
3. Import in component and `.map()` to render
4. Use consistent Thai terminology

### Modifying Predictions
- Daily horoscope logic: `HoroscopeCard.tsx`  `getPrediction()` function (day-based switch)
- Yama-based logic: `lib/thai-astrology.ts` (yam number calculation via 90-min divisions)
- Static data: Update corresponding `data/*.ts` file

## Testing & Validation
- **No unit tests present** - test manually or add Jest + React Testing Library
- **Type safety:** TypeScript 5 enabled; use strict types for new functions
- **Accessibility:** Ensure `alt` text on all images, semantic HTML structure
- **Timezone issues:** Always verify "Asia/Bangkok" in date calculations

## Database & Authentication (Supabase + Prisma)

### Environment Variables Setup
**`.env.local`** (Client-side, safe to expose):
```
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_public_xxx
NEXTAUTH_URL=http://localhost:3000
```

**`.env`** (Server-side, sensitive - never commit):
```
DATABASE_URL=postgresql://postgres:password@[project].supabase.co:5432/postgres
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
NEXTAUTH_SECRET=[generated via: openssl rand -base64 32]
```

### Database Models (Prisma Schema)
Located in `prisma/schema.prisma`:
- **User** - Authentication + profile
- **Subscription** - Membership tiers (NON_MEMBER, FREE_MEMBER, PREMIUM)
- **Consultant** - Expert profiles for consultations
- **Consultation** - Booking system
- **Payment** - Transaction tracking
- **HoroscopeView** - Usage tracking
- **Question** - Q&A system
- Plus 6 more supporting models (complete schema in `/SUPABASE_COMPLETE_SETUP.md`)

### Supabase Setup Best Practices
1. **Row Level Security (RLS):** Always enable for tables with user data
2. **Connection Pooling:** Use Supabase connection pooler for serverless (port 6543)
3. **API Keys:** Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser
4. **Migrations:** Always test locally first: `npx prisma migrate dev`
5. **Secrets:** Store in Vercel → Environment Variables during deployment

### NextAuth.js Configuration
- **Strategy:** JWT with Prisma adapter
- **Credentials:** Email + password via CredentialsProvider
- **Session Duration:** 30 days (configurable)
- **Location:** `app/api/auth/[...nextauth].ts`
- **Password Hashing:** bcryptjs (never store plaintext)

---

## 📏 Critical Code Patterns & Standards
1. **Clean Code & DRY:** เขียนโค้ดให้สั้น กระชับ และไม่ซ้ำซ้อน
2. **No Hardcoding:** ค่า Config ทั้งหมดต้องดึงผ่าน `ConfigManager` หรือ Environment Variables เท่านั้น
3. **Test-Driven:** ห้ามเพิ่ม Feature โดยไม่มี Unit Test
4. **Embedded Standards:** (หากมีส่วนเกี่ยวข้อง) อิงตาม RNPacket, FailsafeManager, และ ConfigManager (NVS)
5. **UI Standard:** เน้น Rich Aesthetics, Glassmorphism และ Modern Typography สำหรับเว็บพรีเมียม

---

## SEO & Deployment Notes

### Vercel Deployment Checklist
- [ ] GitHub repository connected to Vercel
- [ ] Environment variables set in Vercel Dashboard
- [ ] Preview deployments enabled (automatic for pull requests)
- [ ] Analytics & Speed Insights enabled
- [ ] Domain custom DNS configured (if using custom domain)

### Performance Optimizations (Vercel)
- **ISR (Incremental Static Regeneration):** Revalidate pages without full rebuild
  ```tsx
  const response = await fetch(url, { next: { revalidate: 3600 } })
  ```
- **Streaming:** Use React Suspense for gradual content delivery
  ```tsx
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
  ```
- **Image Optimization:** Zero-config via `next/image` on Vercel CDN
- **Font Optimization:** Use `next/font` for Google Fonts (no layout shift)

### Monitoring & Analytics
- **Web Analytics:** Track visitors, top pages, referrers via Vercel Dashboard
- **Speed Insights:** Monitor Core Web Vitals (LCP, FID, CLS)
- **Proxy Logs:** Check request patterns and geolocation routing (previously middleware)

### Node.js & Runtime
- **Minimum:** Node.js 18.17+
- **Vercel Default:** Node.js 20.x LTS
- **Turbopack:** Dev mode fast refresh (experimental in production)

## Red Flags & Troubleshooting
- **Date parsing fails:** Check timezone isn't hardcoded to UTC
- **Prediction always same:** Verify `dayMap` matches day string from input
- **Images missing:** Ensure file in `/public` , check Next.js remotePatterns config
- **Server Action errors:** Check function has `"use server"` at top, returns correct type
- **Proxy errors:** Ensure `proxy.ts` exports a function named `proxy` or a default export (Next.js 16+)
- **Yama calculation off:** Verify 6:00-18:00 = day, else night; 90 min per yam
- **Supabase connection fails:** Verify DATABASE_URL in `.env` with correct password
- **NextAuth undefined:** Ensure NEXTAUTH_SECRET is set and NEXTAUTH_URL matches deployment URL
- **ISR not updating:** Check revalidate time is less than page generation time
- **Vercel deployment fails:** Check build logs at vercel.com dashboard, ensure `npm run build` succeeds locally

---

## Phase 1: Authentication System (Current)
**Status:** Implementation in progress
**Key Files:**
- `prisma/schema.prisma` - 13 models for subscription system
- `app/api/auth/[...nextauth].ts` - NextAuth configuration
- `lib/supabase.ts` - Supabase client initialization
- `lib/prisma.ts` - Prisma singleton instance
- `SUPABASE_SETUP.md` - Step-by-step setup guide
- `PHASE_1_AUTH_PLAN.md` - Implementation roadmap

**Next: Build Sign Up/Sign In pages** (see PHASE_1_AUTH_PLAN.md for details)

---

## Architecture Layers Summary

```
┌─────────────────────────────────────────┐
│  Frontend (React 19 + TypeScript)       │
│  - Client Components (use client)       │
│  - Server Components (SSR/SSG)          │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│  API Layer                              │
│  - NextAuth.js (Authentication)         │
│  - Server Actions (Astrology calc)      │
│  - Proxy (previously Middleware)        │
│  - Route Handlers                       │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│  ORM & Database                         │
│  - Prisma (ORM)                         │
│  - Supabase PostgreSQL                  │
│  - Row Level Security (RLS)             │
└─────────────────────────────────────────┘
```

**Deployment Flow:**
```
Local Dev (Turbopack)
    ↓
Git Push to GitHub
    ↓
Vercel Auto Deploy
    ↓
Edge Functions (Proxy/Middleware)
    ↓
Serverless Functions (API Routes)
    ↓
ISR Cache (Static + Dynamic)
    ↓
Supabase PostgreSQL
    ↓
Global CDN (Vercel Edge Network)
```
