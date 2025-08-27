# วิธีใช้งาน [BlankCard.tsx](BlankCard.tsx)

เมื่อคุณต้องการใช้ **Card Component** นี้ในไฟล์ตัวอย่าง **`src/app/blank/page.tsx`** เพียงแค่ทำตามขั้นตอนดังนี้

1. **Import** **component** ที่ด้านบนของไฟล์ `page.tsx`:

    ```tsx
    import BankCard from '@/components/BlankCard';
    ```

2. ใช้ **component** ภายในส่วน **`div`** ที่มี **`grid`** ได้เลย:

    ```tsx
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BankCard
            title="หัวข้อบทความที่ 1"
            content="เนื้อหาเกี่ยวกับบทความแรกของคุณ"
        />
        <BankCard
            title="หัวข้อบทความที่ 2"
            content="เนื้อหาเกี่ยวกับบทความที่สองของคุณ"
        />
        <BankCard
            title="หัวข้อบทความที่ 3"
            content="เนื้อหาเกี่ยวกับบทความที่สามของคุณ"
        />
    </div>
    ```

โค้ดนี้จะช่วยให้คุณสามารถสร้างและจัดการเนื้อหาในหน้า **Blank** ของคุณได้อย่างเป็นระเบียบและง่ายดาย
