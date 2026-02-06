-- สร้าง Admin Account ใน Supabase
-- รันคำสั่งนี้ใน Supabase SQL Editor: https://app.supabase.com → SQL Editor

-- 1. สร้าง User
INSERT INTO "User" (id, email, password, "fullName", "createdAt", "updatedAt")
VALUES (
  gen_random_uuid()::text,
  'admin@vessuyan.com',
  '$2b$10$NCqgg0QlxPkvsXZ5pRlIHeMCy75lR4hZMks/rdWkwSRGxxNxLQJLG',
  'Admin',
  NOW(),
  NOW()
)
ON CONFLICT (email) DO NOTHING
RETURNING id;

-- 2. สร้าง Subscription (ใช้ user_id จากขั้นตอนที่ 1)
WITH user_data AS (
  SELECT id FROM "User" WHERE email = 'admin@vessuyan.com'
)
INSERT INTO "Subscription" (id, "userId", tier, status, "startDate", "autoRenew", "createdAt", "updatedAt")
SELECT
  gen_random_uuid()::text,
  user_data.id,
  'PREMIUM',
  'active',
  NOW(),
  true,
  NOW(),
  NOW()
FROM user_data
ON CONFLICT ("userId") DO NOTHING
RETURNING id;

-- 3. สร้าง UsageLimit (ใช้ subscription_id จากขั้นตอนที่ 2)
WITH subscription_data AS (
  SELECT s.id
  FROM "Subscription" s
  JOIN "User" u ON s."userId" = u.id
  WHERE u.email = 'admin@vessuyan.com'
)
INSERT INTO "UsageLimit" (id, "subscriptionId", "horoscopeRemainingThisWeek", "questionsRemainingThisWeek", "consultationsRemainingThisWeek", "lastResetDate", "updatedAt")
SELECT
  gen_random_uuid()::text,
  subscription_data.id,
  999,
  999,
  999,
  NOW(),
  NOW()
FROM subscription_data
ON CONFLICT ("subscriptionId") DO NOTHING;

-- ตรวจสอบว่าสร้างสำเร็จหรือไม่
SELECT
  u.id,
  u.email,
  u."fullName",
  s.tier,
  ul."horoscopeRemainingThisWeek",
  ul."questionsRemainingThisWeek",
  ul."consultationsRemainingThisWeek"
FROM "User" u
LEFT JOIN "Subscription" s ON s."userId" = u.id
LEFT JOIN "UsageLimit" ul ON ul."subscriptionId" = s.id
WHERE u.email = 'admin@vessuyan.com';
