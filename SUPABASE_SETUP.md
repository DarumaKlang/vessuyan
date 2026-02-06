# 📊 Supabase + Prisma Setup Guide (Updated 2026)

## ขั้นที่ 1: สร้าง Supabase Project

1. ไปที่ https://database.new (หรือ https://app.supabase.com)
2. เข้าสู่ระบบด้วย GitHub account
3. สร้าง Organization ใหม่ (หรือใช้ที่มี)
4. คลิก "New Project" และกรอก:
   - **Organization**: ชื่อองค์กร
   - **Project Name**: `vessuyan`
   - **Database Password**: ใช้ password ที่ปลอดภัย (⚠️ เก็บไว้จำเป็น)
   - **Region**: `Singapore` (ap-southeast-1) - เหมาะสำหรับผู้ใช้เอเชีย
5. รอประมาณ 2-3 นาทีจนกว่า project สร้างเสร็จ

**หมายเหตุ:** ใช้ `https://database.new` เพื่อความสะดวก (สร้าง + ดึง credentials ได้ใน 1 ที่)

---

## ขั้นที่ 2: ดึง API Keys (New Key Format)

Supabase มี key format ใหม่ที่ปลอดภัยกว่า:

### ตัวเลือก A: New Key Format (แนะนำ)
1. ไปที่ **Settings** → **API** → **API Keys**
2. ถ้ายังไม่มี publishable key ให้คลิก "Create New API Keys"
3. คัดลอก:
   - **NEXT_PUBLIC_SUPABASE_URL**: ใส่ใน `.env.local`
   - **NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY**: ใส่ใน `.env.local` (ค่าเก่าคือ ANON_KEY)

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://[PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxx
```

### ตัวเลือก B: Legacy Key Format (ถ้ายังใช้)
1. ไปที่ **Settings** → **API** → **API Keys** → **Legacy API Keys** tab
2. คัดลอก:
   - **NEXT_PUBLIC_SUPABASE_URL**
   - **NEXT_PUBLIC_SUPABASE_ANON_KEY** (replace old PUBLISHABLE_KEY)

**ความแตกต่าง:**
- New format: `sb_publishable_xxx` (ปลอดภัยกว่า, จำกัด scopes)
- Legacy format: `eyJhbGc...` (ยังใช้ได้, คล้ายเดิม)

---

## ขั้นที่ 3: ดึง Service Role Key (Server-Side Only)

⚠️ **ห้ามใช้ใน Client Components!**

1. ไปที่ **Settings** → **API** → **API Keys**
2. คัดลอก **Service Role Key** (หรือ **Service role secret** ในเดิม)
3. ใส่ใน `.env` ไม่ใช่ `.env.local`:

```env
# .env (server-side only - never expose)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

---

## ขั้นที่ 4: ดึง Database Connection String

1. ไปที่ **Settings** → **Database**
2. ที่ **Connection String** เลือก **URI** (ไม่ใช่ Psycopg3)
3. คัดลอก connection string
4. แทน `[YOUR-PASSWORD]` ด้วย password ที่ตั้งไว้
5. ใส่ใน `.env`:

```env
# .env
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

**ตัวอย่างเต็ม:**
```
postgresql://postgres:MySecurePassword123@db.xyzabc123.supabase.co:5432/postgres
```

**⚠️ สำหรับ Serverless (Vercel):** ใช้ Connection Pooler แทน (port 6543)
```
postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:6543/postgres
```

---

## ขั้นที่ 5: Sync Prisma Schema กับ Supabase

```bash
# สร้าง migration แรก
npx prisma migrate dev --name init
```

ระบบจะ:
1. ✅ ตรวจสอบ `DATABASE_URL` ว่าเชื่อมต่อได้
2. ✅ สร้าง migration file ใน `prisma/migrations/`
3. ✅ Execute SQL บน Supabase database
4. ✅ Generate Prisma Client types

---

## ขั้นที่ 6: ตั้ง NextAuth Secret

```bash
# Generate NextAuth secret
openssl rand -base64 32
```

คัดลอกผลลัพธ์ ใส่ใน `.env` ตัวแปร `NEXTAUTH_SECRET`

---

## ⚠️ Environment Variables Summary

### `.env.local` (Local Development - Public Keys)
```env
# Supabase - Client-side keys (SAFE to expose)
NEXT_PUBLIC_SUPABASE_URL=https://[PROJECT-REF].supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxx
# Or legacy format:
# NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
```

### `.env` (Server-Side Secrets - NEVER commit)
```env
# Database
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
# For Vercel serverless, use pooler: :6543/postgres instead

# Supabase - Server-side key (KEEP SECRET!)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# NextAuth
NEXTAUTH_SECRET=[openssl rand -base64 32]

# Optional: Payment gateway (Phase 5)
# STRIPE_PUBLIC_KEY=pk_test_...
# STRIPE_SECRET_KEY=sk_test_...
```

### Vercel Dashboard Environment Variables
1. ไปที่ Project → Settings → Environment Variables
2. เพิ่ม **แต่เฉพาะ** ตัวแปรที่เซ็นไทต์ (private):
   - `DATABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXTAUTH_SECRET`
3. ตัวแปร `NEXT_PUBLIC_*` จะ commit ไปยัง Git ได้ (public)

## 🔄 Useful Prisma Commands

```bash
# ดูและแก้ไข schema online
npx prisma studio

# สร้าง migration ใหม่ (หลังแก้ไข schema.prisma)
npx prisma migrate dev --name [description]

# Reset database ทั้งหมด (⚠️ ข้อมูลหมด!)
npx prisma migrate reset

# Generate Prisma Client types ใหม่
npx prisma generate

# ตรวจสอบสถานะ migration
npx prisma migrate status

# ตรวจสอบ database connection
npx prisma db execute --stdin < /dev/null
```

---

## 🧪 Test Connection to Supabase

สร้างไฟล์ `test-db.ts`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const count = await prisma.user.count()
    console.log('✅ Connected to Supabase! Users count:', count)
  } catch (error) {
    console.error('❌ Connection failed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
```

รัน:
```bash
npx ts-node test-db.ts
```

---

## 📋 Setup Checklist

- [ ] สร้าง Supabase project ที่ https://database.new
- [ ] ดึง NEXT_PUBLIC_SUPABASE_URL + PUBLISHABLE_KEY
- [ ] ดึง DATABASE_URL + SUPABASE_SERVICE_ROLE_KEY
- [ ] ใส่ credentials ใน `.env.local` และ `.env`
- [ ] รัน `npx prisma migrate dev --name init`
- [ ] ตรวจสอบตารางใน Supabase Dashboard
- [ ] สร้าง NextAuth secret: `openssl rand -base64 32`
- [ ] ใส่ NEXTAUTH_SECRET ใน `.env`
- [ ] ทดสอบ connection ด้วย `npx ts-node test-db.ts`
- [ ] ทดสอบ local dev: `npm run dev`

---

## 🚀 Next Steps

หลังจาก Supabase setup เสร็จ:

1. **Phase 1: Authentication** (ดูใน PHASE_1_AUTH_PLAN.md)
   - สร้าง Sign Up page
   - สร้าง Sign In page
   - ตั้งค่า protected routes
   - ทดสอบ session management

2. **Phase 2: Subscription Logic**
   - ตั้งค่า usage limits
   - ทำ tier checking logic
   - สร้าง upgrade page

3. **Phase 3: Email System**
   - Email verification
   - Password reset
   - Notification emails

---

## 📚 References

- **Supabase + Next.js Docs:** https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
- **Vercel Deployment:** https://vercel.com/docs/frameworks/full-stack/nextjs
- **Prisma Docs:** https://www.prisma.io/docs
- **NextAuth.js:** https://next-auth.js.org

---

## 🛠️ Troubleshooting

| ปัญหา | วิธีแก้ |
|------|--------|
| `DATABASE_URL is invalid` | ตรวจสอบ password ใน connection string, ใช้ URI format |
| `Service role key not found` | ไปที่ API Keys tab → Legacy API Keys ไม่ใช่ Publishable Keys |
| `Cannot connect to database` | ตรวจสอบ Supabase project status, network rules ใน Settings |
| `Prisma migration hangs` | ยกเลิก (Ctrl+C) และ run `npx prisma migrate resolve --rolled-back init` |
| `Session undefined in production` | เช็ค NEXTAUTH_SECRET ตั้งใน Vercel Environment Variables |

---

**Status:** ✅ Ready for Phase 1 Authentication Setup
