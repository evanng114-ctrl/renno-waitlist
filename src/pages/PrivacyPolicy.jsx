import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LAST_UPDATED = 'June 20, 2026'
const EFFECTIVE_DATE = 'June 20, 2026'
const COMPANY = 'Renno'
const CONTACT_EMAIL = 'privacy@rennoapp.com'
const WEBSITE = 'rennoapp.com'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 18, color: '#111', marginBottom: 12, letterSpacing: '-0.01em' }}>{title}</h2>
      <div style={{ color: '#444', fontSize: 15, lineHeight: 1.8 }}>{children}</div>
    </div>
  )
}

function P({ children }) {
  return <p style={{ margin: '0 0 12px' }}>{children}</p>
}

function UL({ items }) {
  return (
    <ul style={{ paddingLeft: 20, margin: '8px 0 12px' }}>
      {items.map((item, i) => <li key={i} style={{ marginBottom: 6 }}>{item}</li>)}
    </ul>
  )
}

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Nav bar */}
      <div style={{ borderBottom: '1px solid #eee', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#fff', zIndex: 50 }}>
        <Link to="/" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: '0.08em', color: '#111', textDecoration: 'none', textTransform: 'uppercase' }}>
          RENN<span style={{ color: '#F97316' }}>O</span>
        </Link>
        <Link to="/terms" style={{ fontFamily: "'Archivo', sans-serif", fontSize: 13, fontWeight: 600, color: '#777', textDecoration: 'none' }}>Terms of Service →</Link>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '56px 24px 80px' }}>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F97316', marginBottom: 14 }}>Legal</p>
        <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-0.02em', color: '#111', marginBottom: 8, lineHeight: 1.1 }}>Privacy Policy</h1>
        <p style={{ color: '#777', fontSize: 14, marginBottom: 48 }}>Last updated: {LAST_UPDATED} · Effective: {EFFECTIVE_DATE}</p>

        <Section title="1. Introduction">
          <P>{COMPANY} ("we," "us," or "our") operates the {WEBSITE} website and the Renno mobile application (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Service.</P>
          <P>By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</P>
        </Section>

        <Section title="2. Information We Collect">
          <P><strong>Information you provide directly:</strong></P>
          <UL items={[
            'Email address (when you join the waitlist or create an account)',
            'Name and profile information',
            'Payment and financial information (processed securely through our payment partners)',
            'Running goals, weekly mileage targets, and stake amounts you set',
            'Communications you send us',
          ]} />
          <P><strong>Information collected automatically:</strong></P>
          <UL items={[
            'Device identifiers (IP address, device ID, operating system, browser type)',
            'Usage data (pages visited, features used, time spent, clicks)',
            'Log data (access times, error logs, referring URLs)',
            'Location data (general geographic region, if permitted)',
            'Cookies and similar tracking technologies',
          ]} />
          <P><strong>Health and fitness data:</strong></P>
          <P>With your explicit permission, we access running and activity data from Apple Health and connected fitness devices (Garmin, Fitbit, WHOOP, and others). We use this data solely to verify your weekly mileage goals. We do not sell, license, or share your health data with any third party for advertising or marketing purposes.</P>
        </Section>

        <Section title="3. SMS and Mobile Communications">
          <P><strong>Non-Sharing of Mobile Numbers:</strong> We do not sell, rent, lease, or share your mobile phone number with third parties for their marketing purposes. Your mobile number is used solely for communications directly related to the Renno Service, including account notifications, goal reminders, and race results.</P>
          <P><strong>Message Frequency:</strong> Message frequency varies. You may receive transactional messages (account confirmations, goal completions, stake settlements), promotional messages (new races, features, offers), and reminder messages (upcoming goal deadlines). Typically you may receive between 2–8 messages per month depending on your activity and preferences.</P>
          <P><strong>Message and Data Rates:</strong> Message and data rates may apply. Standard messaging rates charged by your mobile carrier may apply to SMS messages you receive from us. Renno is not responsible for any charges imposed by your mobile carrier.</P>
          <P><strong>Opt-Out:</strong> You may opt out of SMS communications at any time by replying STOP to any message we send. After opting out, you will receive a single confirmation message. To opt back in, text START to the same number. You may also manage your notification preferences in your account settings or by contacting us at {CONTACT_EMAIL}.</P>
          <P><strong>Help:</strong> Text HELP for assistance or contact us at {CONTACT_EMAIL}.</P>
        </Section>

        <Section title="4. How We Use Your Information">
          <P>We use the information we collect to:</P>
          <UL items={[
            'Provide, operate, and maintain the Service',
            'Process and settle financial stakes and race payouts',
            'Verify weekly mileage goal completion via connected fitness data',
            'Create and manage your account',
            'Send transactional emails and notifications about your races and stakes',
            'Respond to your comments, questions, and requests',
            'Send marketing and promotional communications (with your consent)',
            'Monitor and analyze usage patterns to improve the Service',
            'Detect, prevent, and address fraud, abuse, and security incidents',
            'Comply with legal obligations and enforce our Terms of Service',
            'Protect the rights and safety of Renno and our users',
          ]} />
        </Section>

        <Section title="5. Sharing of Information">
          <P>We do not sell your personal information. We may share your information in the following limited circumstances:</P>
          <P><strong>Service providers:</strong> We share information with third-party vendors who perform services on our behalf, including payment processing (Stripe), cloud hosting, email delivery, analytics, and customer support. These providers are contractually obligated to use your data only as directed by us.</P>
          <P><strong>Financial and compliance:</strong> We may share information with financial institutions, payment processors, and fraud prevention services to process transactions and comply with anti-money-laundering (AML) and Know Your Customer (KYC) requirements.</P>
          <P><strong>Legal requirements:</strong> We may disclose information if required by law, subpoena, court order, or government authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</P>
          <P><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and a prominent notice on the Service prior to your information becoming subject to a different privacy policy.</P>
          <P><strong>With your consent:</strong> We may share your information in any other way with your explicit consent.</P>
        </Section>

        <Section title="6. Financial Data and Payment Processing">
          <P>All payment card data is processed by our third-party payment processor (Stripe, Inc.) and is never stored on our servers. We store only a tokenized reference to your payment method. Stake amounts, race entries, and payout amounts are stored securely in our database and are used only to operate the Service.</P>
          <P>Renno is not a bank, financial institution, or gambling operator. Stakes placed on Renno represent personal financial commitments to fitness goals, not wagers in the legal gambling sense. Users are responsible for understanding the financial implications of participation.</P>
        </Section>

        <Section title="7. Cookies and Tracking Technologies">
          <P>We use cookies, pixel tags, and similar technologies to operate our Service and collect usage information. You can control cookies through your browser settings; however, disabling cookies may limit certain features of the Service.</P>
          <P>We use analytics providers including Google Analytics to understand how users interact with our Service. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</P>
        </Section>

        <Section title="8. Data Retention">
          <P>We retain your personal information for as long as your account is active or as needed to provide the Service. We also retain information to comply with legal obligations, resolve disputes, and enforce agreements. If you request deletion of your account, we will delete or anonymize your personal data within 30 days, except where retention is required by law or for legitimate business purposes such as fraud prevention.</P>
          <P>Health and fitness data is retained for 12 months after your last race participation and then permanently deleted, unless you request earlier deletion.</P>
        </Section>

        <Section title="9. Data Security">
          <P>We implement commercially reasonable administrative, technical, and physical security measures to protect your information from unauthorized access, use, alteration, or destruction. These measures include encryption in transit (TLS 1.2+), encryption at rest, access controls, and regular security reviews.</P>
          <P>No method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. In the event of a data breach that affects your rights and freedoms, we will notify you as required by applicable law.</P>
        </Section>

        <Section title="10. Your Rights and Choices">
          <P>Depending on your location, you may have the following rights regarding your personal information:</P>
          <UL items={[
            'Access — request a copy of the personal data we hold about you',
            'Correction — request correction of inaccurate or incomplete data',
            'Deletion — request deletion of your personal data ("right to be forgotten")',
            'Portability — request your data in a structured, machine-readable format',
            'Objection — object to processing of your data for marketing purposes',
            'Restriction — request restriction of processing in certain circumstances',
            'Withdrawal of consent — withdraw consent at any time where processing is based on consent',
          ]} />
          <P>To exercise these rights, contact us at {CONTACT_EMAIL}. We will respond within 30 days. We may need to verify your identity before fulfilling your request.</P>
          <P><strong>California residents (CCPA):</strong> You have the right to know what personal information we collect, the right to delete, the right to opt-out of sale (we do not sell personal information), and the right to non-discrimination for exercising your privacy rights.</P>
        </Section>

        <Section title="11. Children's Privacy">
          <P>The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have inadvertently collected personal information from a child under 18, we will take steps to delete it promptly. If you believe we have collected information from a child, contact us at {CONTACT_EMAIL}.</P>
        </Section>

        <Section title="12. Third-Party Links and Services">
          <P>The Service may contain links to third-party websites and services (such as Apple Health, Garmin Connect, Fitbit, and WHOOP). We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you connect to the Service.</P>
        </Section>

        <Section title="13. International Data Transfers">
          <P>Renno is based in the United States. If you access the Service from outside the United States, your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. By using the Service, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules.</P>
        </Section>

        <Section title="14. Changes to This Privacy Policy">
          <P>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. For significant changes, we will also send an email notification to the address associated with your account. We encourage you to review this policy periodically. Your continued use of the Service after changes become effective constitutes acceptance of the revised policy.</P>
        </Section>

        <Section title="15. Contact Us">
          <P>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</P>
          <UL items={[
            `Email: ${CONTACT_EMAIL}`,
            `Website: ${WEBSITE}`,
            'Renno, United States',
          ]} />
          <P>We take all privacy inquiries seriously and will respond within 5 business days.</P>
        </Section>

        <div style={{ borderTop: '1px solid #eee', paddingTop: 32, marginTop: 16, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: '#F97316', fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>← Back to Renno</Link>
          <Link to="/terms" style={{ color: '#777', fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Terms of Service →</Link>
        </div>
      </div>
    </div>
  )
}
