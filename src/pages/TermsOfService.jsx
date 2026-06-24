import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LAST_UPDATED = 'June 20, 2026'
const EFFECTIVE_DATE = 'June 20, 2026'
const CONTACT_EMAIL = 'legal@rennoapp.com'
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

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Nav bar */}
      <div style={{ borderBottom: '1px solid #eee', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#fff', zIndex: 50 }}>
        <Link to="/" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: '0.08em', color: '#111', textDecoration: 'none', textTransform: 'uppercase' }}>
          RENN<span style={{ color: '#F97316' }}>O</span>
        </Link>
        <Link to="/privacy" style={{ fontFamily: "'Archivo', sans-serif", fontSize: 13, fontWeight: 600, color: '#777', textDecoration: 'none' }}>Privacy Policy →</Link>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '56px 24px 80px' }}>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F97316', marginBottom: 14 }}>Legal</p>
        <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-0.02em', color: '#111', marginBottom: 8, lineHeight: 1.1 }}>Terms of Service</h1>
        <p style={{ color: '#777', fontSize: 14, marginBottom: 48 }}>Last updated: {LAST_UPDATED} · Effective: {EFFECTIVE_DATE}</p>

        <Section title="1. Acceptance of Terms">
          <P>These Terms of Service ("Terms") constitute a legally binding agreement between you and Renno ("Renno," "we," "us," or "our") governing your access to and use of the {WEBSITE} website, the Renno mobile application, and all related services (collectively, the "Service").</P>
          <P>By accessing or using the Service, creating an account, joining a waitlist, or placing a stake, you agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms, do not use the Service.</P>
          <P>We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on the Service and updating the "Last Updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.</P>
        </Section>

        <Section title="2. Eligibility">
          <P>You must meet all of the following requirements to use the Service:</P>
          <UL items={[
            'You are at least 18 years of age',
            'You have the legal capacity to enter into a binding contract',
            'You are a resident of a jurisdiction where the Service is available',
            'You are not prohibited by any applicable law from participating in financial stake-based fitness challenges',
            'You have not been previously suspended or removed from the Service',
          ]} />
          <P>Renno is currently available to residents of the United States. By using the Service, you represent and warrant that you meet all eligibility requirements. Renno reserves the right to verify eligibility at any time and to suspend or terminate accounts that do not meet these requirements.</P>
        </Section>

        <Section title="3. Account Registration">
          <P>To access certain features of the Service, you must create an account. When creating an account, you agree to:</P>
          <UL items={[
            'Provide accurate, current, and complete information',
            'Maintain and promptly update your account information',
            'Keep your password secure and confidential',
            'Notify us immediately of any unauthorized use of your account',
            'Accept responsibility for all activities that occur under your account',
          ]} />
          <P>You may not create more than one account per person. You may not create an account on behalf of another person without their authorization. Renno reserves the right to refuse account registration or cancel an existing account at our sole discretion.</P>
        </Section>

        <Section title="4. Description of the Service">
          <P>Renno is a fitness accountability platform that allows users to set weekly mileage goals, commit a financial stake to those goals, and participate in goal-based pools. The mechanics of the Service are as follows:</P>
          <UL items={[
            'A user selects a weekly running mileage goal and commits a financial stake (the "Stake")',
            'At the end of the week, Renno verifies actual mileage through connected fitness apps and devices via Apple Health or other supported integrations',
            'Users who complete their stated mileage goal ("Completers") recover their full Stake',
            'Users who do not complete their stated mileage goal ("Non-Completers") forfeit their Stake',
            'Forfeited Stakes from Non-Completers are redistributed equally among all Completers in the same pool',
            'Renno does not take a percentage of the pool (no house cut)',
          ]} />
          <P>The Service is a fitness motivation and accountability tool. Participation is voluntary. Users knowingly and willingly commit financial Stakes to their personal fitness goals.</P>
        </Section>

        <Section title="5. Financial Stakes and Payments">
          <P><strong>Stake Commitment:</strong> When you join a race, you authorize Renno to charge your payment method the full Stake amount. Stakes are held in a segregated pool until the end of the race period.</P>
          <P><strong>Payouts:</strong> Completers will receive their Stake refund plus any distributed winnings within 5–7 business days of the race end date, to the payment method on file or a designated bank account.</P>
          <P><strong>Non-Refundable Stakes:</strong> Once a race has begun, Stakes are non-refundable except in cases of verified Service errors or extenuating circumstances at Renno's sole discretion. By joining a race, you acknowledge and accept the risk of forfeiture.</P>
          <P><strong>Payment Processing:</strong> All payments are processed by our third-party payment processor. You agree to that processor's terms of service. Renno is not responsible for errors or failures caused by your bank or payment processor.</P>
          <P><strong>Taxes:</strong> You are solely responsible for any applicable taxes on winnings or income derived from participation in the Service. Renno will issue tax documents as required by law (e.g., IRS Form 1099 for qualifying payouts).</P>
          <P><strong>Dispute of Charges:</strong> If you believe a charge is in error, contact {CONTACT_EMAIL} within 30 days of the charge. Initiating a chargeback with your bank without first contacting Renno may result in account suspension.</P>
        </Section>

        <Section title="6. Fitness Data and Goal Verification">
          <P>Renno verifies goal completion using data from Apple Health and connected fitness devices. You authorize Renno to access and read your activity data from these sources for the sole purpose of verifying your mileage.</P>
          <P>You acknowledge that:</P>
          <UL items={[
            'Mileage data is determined by the readings from your connected fitness app or device',
            'Renno is not responsible for inaccuracies in third-party fitness tracking devices or applications',
            'You must keep your fitness device or app connected throughout the race period',
            'Intentional manipulation or falsification of fitness data is a violation of these Terms and will result in immediate account termination and forfeiture of all Stakes',
            'Technical failures of third-party devices or apps that prevent accurate data collection are addressed on a case-by-case basis at Renno\'s discretion',
          ]} />
        </Section>

        <Section title="7. Prohibited Conduct">
          <P>You agree not to engage in any of the following:</P>
          <UL items={[
            'Falsifying, manipulating, or misrepresenting fitness data or mileage',
            'Creating multiple accounts to exploit pool mechanics',
            'Using automated tools, bots, or scripts to interact with the Service',
            'Attempting to hack, reverse engineer, or disrupt the Service',
            'Engaging in fraud, money laundering, or any other illegal financial activity',
            'Harassing, threatening, or abusing other users',
            'Sharing your account credentials with any other person',
            'Using the Service for any purpose that violates applicable laws or regulations',
            'Attempting to circumvent eligibility requirements or geographic restrictions',
            'Posting or transmitting any content that is defamatory, obscene, or harmful',
          ]} />
          <P>Violation of these prohibitions may result in immediate account suspension or termination, forfeiture of any pending Stakes or payouts, and referral to law enforcement where appropriate.</P>
        </Section>

        <Section title="8. Intellectual Property">
          <P>The Service and all content, features, and functionality — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are owned by Renno or its licensors and are protected by United States and international intellectual property laws.</P>
          <P>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from the Service without our prior written consent.</P>
          <P>The Renno name, logo, and all related marks are trademarks of Renno. You may not use our trademarks without prior written permission.</P>
        </Section>

        <Section title="9. Third-Party Services and Links">
          <P>The Service integrates with and links to third-party services including Apple Health, Garmin, Fitbit, WHOOP, Stripe, and others. These integrations are provided for your convenience. Renno does not control and is not responsible for the content, privacy policies, or practices of any third-party services. Your use of third-party services is governed by their respective terms and privacy policies.</P>
        </Section>

        <Section title="10. Disclaimers and Limitation of Liability">
          <P><strong>No Medical or Fitness Advice:</strong> The Service is for motivation and accountability purposes only. Nothing in the Service constitutes medical or professional fitness advice. Consult a qualified healthcare professional before beginning any fitness program. Renno is not liable for any injury, health issue, or adverse outcome arising from physical activity undertaken in connection with the Service.</P>
          <P><strong>Disclaimer of Warranties:</strong> THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED OR ERROR-FREE OPERATION. RENNO DOES NOT WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR THAT ANY ERRORS WILL BE CORRECTED.</P>
          <P><strong>Limitation of Liability:</strong> TO THE FULLEST EXTENT PERMITTED BY LAW, RENNO AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL — ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL RENNO'S TOTAL LIABILITY TO YOU EXCEED THE GREATER OF (A) THE TOTAL STAKE AMOUNT YOU PAID IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED DOLLARS ($100).</P>
        </Section>

        <Section title="11. Indemnification">
          <P>You agree to indemnify, defend, and hold harmless Renno and its officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any applicable law; (d) your violation of any rights of another person or entity; or (e) your falsification of fitness data or other fraudulent activity.</P>
        </Section>

        <Section title="12. Termination">
          <P>Renno reserves the right to suspend or terminate your account and access to the Service at any time, with or without cause, with or without notice. Reasons for termination may include, but are not limited to, violation of these Terms, fraudulent activity, extended inactivity, or legal requirements.</P>
          <P>You may terminate your account at any time by contacting {CONTACT_EMAIL}. Upon termination, your right to use the Service ceases immediately. Any pending Stakes at the time of termination will be handled in accordance with our standard race resolution procedures, subject to any applicable fraud or misconduct findings.</P>
          <P>Sections of these Terms that by their nature should survive termination will survive, including Sections 5, 8, 10, 11, 13, and 14.</P>
        </Section>

        <Section title="13. Dispute Resolution and Arbitration">
          <P><strong>Informal Resolution:</strong> Before filing a formal claim, you agree to contact us at {CONTACT_EMAIL} and attempt to resolve the dispute informally for at least 30 days.</P>
          <P><strong>Binding Arbitration:</strong> If informal resolution fails, any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules. The arbitration will take place in the United States, and the arbitrator's award shall be final and binding.</P>
          <P><strong>Class Action Waiver:</strong> You agree to resolve disputes with Renno only on an individual basis and not as part of a class, collective, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.</P>
          <P><strong>Exceptions:</strong> Either party may seek injunctive or other equitable relief in a court of competent jurisdiction to prevent irreparable harm pending arbitration. Claims arising from infringement of intellectual property rights are exempt from arbitration.</P>
        </Section>

        <Section title="14. Governing Law">
          <P>These Terms and any disputes arising hereunder shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to conflict of law principles. Subject to the arbitration clause above, you consent to the exclusive jurisdiction of federal and state courts located in Delaware for any dispute not subject to arbitration.</P>
        </Section>

        <Section title="15. General Provisions">
          <UL items={[
            'Entire Agreement: These Terms and the Privacy Policy constitute the entire agreement between you and Renno regarding the Service and supersede all prior agreements.',
            'Severability: If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue in full force.',
            'Waiver: Failure by Renno to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.',
            'Assignment: You may not assign your rights or obligations under these Terms without Renno\'s prior written consent. Renno may assign these Terms freely.',
            'Force Majeure: Renno is not liable for any delay or failure to perform due to causes beyond our reasonable control.',
            'Notices: All notices to Renno must be sent to legal@rennoapp.com. We may send notices to you at the email address associated with your account.',
          ]} />
        </Section>

        <Section title="16. Contact Us">
          <P>For questions about these Terms, please contact:</P>
          <UL items={[
            `Email: ${CONTACT_EMAIL}`,
            `Website: ${WEBSITE}`,
            'Renno, United States',
          ]} />
        </Section>

        <div style={{ borderTop: '1px solid #eee', paddingTop: 32, marginTop: 16, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: '#F97316', fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>← Back to Renno</Link>
          <Link to="/privacy" style={{ color: '#777', fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Privacy Policy →</Link>
        </div>
      </div>
    </div>
  )
}
