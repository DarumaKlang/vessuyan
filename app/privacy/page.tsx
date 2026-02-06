import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vessuyan',
  description: 'Our privacy policy explains how we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <Image
        src="/background-vessuyan.png"
        alt="Background"
        fill
        className="object-cover"
        quality={75}
      />

      {/* Content */}
      <div className="relative z-10 w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="glass-lg rounded-2xl p-8 mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-purple via-secondary-gold to-primary-purple bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg mb-4">
              นโยบายความเป็นส่วนตัว
            </p>
            <p className="text-gray-400 text-sm">
              Last Updated: February 6, 2026
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Section 1 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Vessuyan ("we," "us," "our," or "Company") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-gray-200 mt-4 mb-3">Personal Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, password, profile picture, birth date, birth time, birth city</li>
                <li><strong>Payment Information:</strong> Credit card details, billing address, transaction history (processed securely by payment providers)</li>
                <li><strong>Communication:</strong> Messages, feedback, support inquiries, consultation requests</li>
                <li><strong>User Content:</strong> Horoscope readings, predictions, questions, and consultation records</li>
                <li><strong>Optional Information:</strong> Zodiac sign, numerology profile, astrological preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device type</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, links clicked, features used</li>
                <li><strong>Cookies & Tracking:</strong> Session cookies, analytics cookies, authentication tokens</li>
                <li><strong>Location Data:</strong> Approximate location based on IP address (with consent)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send transaction-related communications</li>
                <li>Create and manage your account</li>
                <li>Personalize your experience and deliver tailored content</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Conduct research, analytics, and improve user experience</li>
                <li>Detect and prevent fraud, abuse, and security incidents</li>
                <li>Comply with legal obligations and enforce our Terms of Service</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">4. Data Sharing & Disclosure</h2>
              
              <h3 className="text-lg font-semibold text-gray-200 mt-4 mb-3">We May Share Your Data With:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Service Providers:</strong> Payment processors, hosting providers, analytics services, email delivery services</li>
                <li><strong>Consultants:</strong> Astrologers and consultants (only necessary information for consultation)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize sharing of your data</li>
              </ul>

              <p className="text-gray-300 leading-relaxed mt-6">
                We do NOT sell your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Section 5 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">5. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement administrative, technical, and physical safeguards to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>HTTPS encryption for all data in transit</li>
                <li>Encrypted storage for sensitive data (passwords, payment info)</li>
                <li>Secure password hashing using industry-standard algorithms (bcrypt)</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and role-based permissions</li>
                <li>Incident response procedures for data breaches</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                However, no security system is impenetrable. We cannot guarantee absolute security of your data. Any transmission is at your own risk.
              </p>
            </div>

            {/* Section 6 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">6. Your Rights & Choices</h2>
              
              <h3 className="text-lg font-semibold text-gray-200 mt-4 mb-3">GDPR Rights (EU Residents)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your data ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent at any time</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">CCPA Rights (California Residents)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of sale or sharing of personal information</li>
                <li>Right to correct inaccurate personal information</li>
                <li>Right to non-discrimination for exercising your rights</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-3">Marketing Communications</h3>
              <p className="text-gray-300">
                You can opt-out of marketing emails by clicking the "Unsubscribe" link in any email or by updating your account preferences.
              </p>
            </div>

            {/* Section 7 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">7. Cookies & Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li><strong>Essential Cookies:</strong> Required for authentication and site functionality</li>
                <li><strong>Analytics Cookies:</strong> Track usage to improve our Services</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Display relevant advertisements (with consent)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You can control cookies through your browser settings and opt-out of non-essential cookies at any time.
              </p>
            </div>

            {/* Section 8 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">8. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your personal data as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Provide Services and maintain your account</li>
                <li>Comply with legal, tax, and accounting requirements (typically 7 years)</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You can request deletion of your account and associated data at any time. We will delete data within 30 days, unless required by law to retain it.
              </p>
            </div>

            {/* Section 9 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">9. Third-Party Links & Services</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites and services that are not operated by us. This Privacy Policy does not apply to external sites. We are not responsible for the privacy practices of third parties. Please review their privacy policies before providing your information.
              </p>
            </div>

            {/* Section 10 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">10. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our Services, you consent to the transfer of your information to countries outside your country of residence, which may provide a different level of data protection.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                For EU residents, we rely on Standard Contractual Clauses or other appropriate safeguards when transferring data outside the EEA.
              </p>
            </div>

            {/* Section 11 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">11. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will delete such information immediately. If you believe we have collected information from a child under 13, please contact us.
              </p>
            </div>

            {/* Section 12 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">12. California Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed">
                California residents have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Know what personal information is collected and how it is used</li>
                <li>Delete personal information collected from you</li>
                <li>Opt-out of the sale or sharing of your personal information</li>
                <li>Right to correct inaccurate personal information</li>
                <li>Right to limit use of sensitive personal information</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, submit a request through your account settings or contact us at privacy@vessuyan.com. We will respond to verified requests within 45 days.
              </p>
            </div>

            {/* Section 13 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">13. European Privacy Rights (GDPR)</h2>
              <p className="text-gray-300 leading-relaxed">
                If you are located in the EU or EEA, you have rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Our Data Protection Officer can be contacted at dpo@vessuyan.com. We are committed to responding to all GDPR requests within 30 days.
              </p>
            </div>

            {/* Section 14 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">14. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, your data, or wish to exercise your rights, please contact us:
              </p>
              
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 mb-4">
                <p className="text-gray-200 font-semibold mb-3">Vessuyan Project</p>
                <p className="text-gray-300 text-sm">Email: privacy@vessuyan.com</p>
                <p className="text-gray-300 text-sm">Data Protection Officer: dpo@vessuyan.com</p>
                <p className="text-gray-300 text-sm">Address: [Your Company Address]</p>
                <p className="text-gray-300 text-sm">Response Time: Within 30 days</p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                We will respond to all inquiries promptly and work to resolve any privacy concerns.
              </p>
            </div>

            {/* Section 15 */}
            <div className="glass-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-secondary-gold mb-4">15. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of significant changes by posting the new Privacy Policy on our website and updating the "Last Updated" date. Your continued use of our Services after such modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We encourage you to review this Privacy Policy regularly to stay informed about how we protect your information.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="glass-lg rounded-xl p-6 border-l-4 border-secondary-gold">
              <h3 className="text-lg font-bold text-secondary-gold mb-3">Acknowledgment</h3>
              <p className="text-gray-300 leading-relaxed">
                By using Vessuyan, you acknowledge that you have read this Privacy Policy and agree to our data practices. If you do not agree with any part of this policy, please discontinue use of our Services.
              </p>
            </div>

            {/* Footer Links */}
            <div className="glass-md rounded-xl p-6 flex flex-wrap gap-4 justify-center">
              <Link href="/terms" className="text-secondary-gold hover:text-secondary-gold/80 transition">
                Terms of Service
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="/" className="text-secondary-gold hover:text-secondary-gold/80 transition">
                Home
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="/contact" className="text-secondary-gold hover:text-secondary-gold/80 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
