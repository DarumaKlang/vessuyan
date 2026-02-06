import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'ข้อกำหนดการใช้บริการ | Vessuyan',
  description: 'ข้อกำหนดการใช้บริการเว็บไซต์ Vessuyan สำหรับการอ่านหนังสือชะตา โหราศาสตร์ไทย และการปรึกษา',
  keywords: 'ข้อกำหนด, เงื่อนไข, การใช้บริการ, Vessuyan',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="glass-effect rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">ข้อกำหนดการใช้บริการ</h1>
            <p className="text-purple-200 text-sm">
              อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH')}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Introduction */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">1. บทนำและการยอมรับ</h2>
              <p className="text-purple-200 mb-4">
                บริการ Vessuyan ("บริการ") ได้รับการจัดการโดยบริษัท Microtronic Co., Ltd. ("เรา" หรือ "บริษัท") เพื่อให้ผู้ใช้ ("คุณ") เข้าถึงบริการด้านโหราศาสตร์ไทย หนังสือชะตา และคำปรึกษาจากผู้เชี่ยวชาญ
              </p>
              <p className="text-purple-200">
                โดยการเข้าถึงและใช้บริการนี้ คุณตกลงที่จะผูกพันด้วยข้อกำหนดเหล่านี้ หากคุณไม่เห็นด้วยกับข้อกำหนดใด ๆ เหล่านี้ โปรดหยุดใช้บริการทันที
              </p>
            </section>

            {/* Payment Terms */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">2. เงื่อนไขการชำระเงิน</h2>
              <div className="space-y-4 text-purple-200">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2.1 ค่าบริการและราคา</h3>
                  <p>
                    ราคาสำหรับบริการของเราระบุไว้อย่างชัดเจนในหน้าเว็บไซต์และหน้าเช็คเอาต์ ราคา ภาษี และค่าธรรมเนียมอื่น ๆ สามารถเปลี่ยนแปลงได้ตาม裁量ของบริษัท โดยแจ้งให้ทราบล่วงหน้าอย่างน้อย 30 วัน
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2.2 วิธีการชำระเงิน</h3>
                  <p>
                    เรายอมรับการชำระเงินผ่านบัตรเครดิต บัตรเดบิต บัตรอิเล็กทรอนิกส์ และวิธีการชำระเงินอื่น ๆ ตามที่ระบุในหน้าเช็คเอาต์ การชำระเงินทั้งหมดเป็นสกุลเงินดอลลาร์สหรัฐฯ หรือสกุลเงินท้องถิ่นตามที่เลือก
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2.3 การบิกจ่ายอัตโนมัติ</h3>
                  <p>
                    หากคุณลงทะเบียนรับบริการรายเดือนหรือรายปี เงินจะถูกเรียกเก็บอัตโนมัติตามประเภทการสมัครสมาชิกที่คุณเลือก จนกว่าคุณจะยกเลิกการสมัครสมาชิก
                  </p>
                </div>
              </div>
            </section>

            {/* Refund Policy */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">3. นโยบายการคืนเงิน</h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  เราอนุญาตให้ขอรับเงินคืนภายใน 14 วันนับจากวันที่ซื้อ หากคุณไม่พอใจกับบริการของเรา โปรดติดต่อ support@vessuyan.com เพื่อเริ่มกระบวนการขอเงินคืน
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.1 ข้อยกเว้นจากการคืนเงิน</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>การปรึกษาแบบแบ่งปันไม่สามารถคืนเงินได้หลังจากเสร็จสิ้น</li>
                    <li>การบิกจ่ายอัตโนมัติที่ดำเนินการตามคำขอของคุณอย่างชัดแจ้ง</li>
                    <li>บริการที่ใช้แล้ว (เช่น จำนวนเงินดูหนังสือชะตา) ไม่สามารถคืนเงินได้</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">4. การยกเลิกและการเลิกใช้บริการ</h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  คุณสามารถยกเลิกการสมัครสมาชิกของคุณได้ตลอดเวลาโดยเข้าไปในบัญชีของคุณและเลือกยกเลิก ไม่มีค่าปรับหรือค่าใช้งานเพิ่มเติมสำหรับการยกเลิก
                </p>
                <p>
                  หากบริการดำเนินการขัดข้องหรือมีพฤติกรรมผิดกฎหมายตามข้อกำหนดเหล่านี้ บริษัทอาจยกเลิกบัญชีของคุณได้โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">5. การจำกัดความรับผิดชอบ</h2>
              <div className="space-y-4 text-purple-200">
                <p className="font-semibold">
                  โหราศาสตร์และหนังสือชะตาให้เพื่อการบันเทิงเท่านั้น ไม่ใช่คำแนะนำทางการแพทย์หรือการเงิน
                </p>
                <p>
                  บริษัทไม่ได้รับผิดชอบต่อ:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>ความเสียหายทางอ้อมหรือสัญญา</li>
                  <li>การสูญเสียข้อมูลหรือการหยุดชั่วคราวของบริการ</li>
                  <li>อุบัติเหตุหรือสถานการณ์ที่ไม่สามารถคาดการณ์ได้</li>
                  <li>การกระทำของบุคคลที่สาม</li>
                </ul>
              </div>
            </section>

            {/* User Obligations */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">6. ข้อบังคับของผู้ใช้</h2>
              <div className="space-y-4 text-purple-200">
                <p>คุณตกลงว่า:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>จะไม่ใช้บริการสำหรับการกระทำใด ๆ ที่ผิดกฎหมายหรือที่อาจก่อให้เกิดความเสียหาย</li>
                  <li>จะไม่พยายามเข้าถึงหรือขัดขวางการทำงานของระบบของเรา</li>
                  <li>จะไม่ถ่ายทำหรือกระจายข้อมูลของบริษัท โดยไม่ได้รับอนุญาต</li>
                  <li>จะไม่ทำให้เสื่อมเสียชื่อเสียงของบริษัท</li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">7. สิทธิ์ในการใช้ข่าวสารและลิขสิทธิ์</h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  เนื้อหาทั้งหมดบนเว็บไซต์ Vessuyan รวมถึงข้อความ ภาพ วิดีโอ และลิงค์เป็นทรัพย์สินของบริษัท Microtronic Co., Ltd. คุณได้รับการอนุญาตให้ใช้เนื้อหานี้เพื่อการใช้ส่วนตัวโดยไม่เป็นการค้าเท่านั้น
                </p>
                <p>
                  การคัดลอก ฟอร์เวิร์ด หรือจัดจำหน่ายเนื้อหาใด ๆ โดยไม่ได้รับอนุญาตเป็นการละเมิดลิขสิทธิ์ และอาจส่งผลให้เกิดการดำเนินการทางกฎหมาย
                </p>
              </div>
            </section>

            {/* Third-Party Links */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">8. ลิงค์บุคคลที่สาม</h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  เว็บไซต์ของเราอาจมีลิงค์ไปยังเว็บไซต์บุคคลที่สาม เราไม่รับผิดชอบต่อเนื้อหา นโยบายความเป็นส่วนตัว หรือการปฏิบัติของเว็บไซต์เหล่านั้น โปรดอ่านข้อกำหนดของพวกเขาอย่างระมัดระวัง
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">9. การแก้ไขข้อกำหนด</h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  บริษัทอาจแก้ไขข้อกำหนดเหล่านี้ได้ตลอดเวลา โปรดตรวจสอบหน้านี้เป็นประจำเพื่อค้นหาอัปเดต การใช้บริการต่อหลังจากการแก้ไขถือว่าการยอมรับข้อกำหนดที่แก้ไข
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">10. กฎหมายที่ใช้บังคับ</h2>
              <div className="space-y-4 text-purple-200">
                <p>
                  ข้อกำหนดเหล่านี้จะถูกควบคุมและตีความตามกฎหมายของไทย ไม่คำนึงถึงข้อกำหนดของกฎหมายที่ขัดแย้ง
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">11. ติดต่อเรา</h2>
              <div className="space-y-4 text-purple-200">
                <p>หากคุณมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้ โปรดติดต่อ:</p>
                <div className="bg-purple-900/50 rounded-lg p-4">
                  <p className="font-semibold text-white">Microtronic Co., Ltd.</p>
                  <p>Email: support@vessuyan.com</p>
                  <p>Website: <Link href="https://microtronic.biz" className="text-purple-300 hover:text-purple-100">https://microtronic.biz</Link></p>
                </div>
              </div>
            </section>

            {/* Back Button */}
            <div className="flex gap-4">
              <Link href="/">
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
                  ← กลับหน้าแรก
                </button>
              </Link>
              <Link href="/privacy">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  → นโยบายความเป็นส่วนตัว
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
