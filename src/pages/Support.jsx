import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CONTACT_EMAIL = 'renno.app@gmail.com'
const CONTACT_PHONE = '781-363-0763'
const CONTACT_PHONE_RAW = '+17813630763'

function ContactCard({ label, value, href, icon }) {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '20px 24px',
        border: '1px solid #eee',
        borderRadius: 16,
        textDecoration: 'none',
        background: '#fff',
        transition: 'border-color 0.15s ease, transform 0.15s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#F97316' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#eee' }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: '#FFF3EC', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20,
      }}>{icon}</div>
      <div>
        <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#999', marginBottom: 4 }}>{label}</div>
        <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 18, color: '#111', letterSpacing: '-0.01em' }}>{value}</div>
      </div>
    </a>
  )
}

export default function Support() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Nav bar */}
      <div style={{ borderBottom: '1px solid #eee', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: '#fff', zIndex: 50 }}>
        <Link to="/" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 20, letterSpacing: '0.08em', color: '#111', textDecoration: 'none', textTransform: 'uppercase' }}>
          RENN<span style={{ color: '#F97316' }}>O</span>
        </Link>
        <Link to="/" style={{ fontFamily: "'Archivo', sans-serif", fontSize: 13, fontWeight: 600, color: '#777', textDecoration: 'none' }}>← Back to Renno</Link>
      </div>

      <div style={{ maxWidth: 620, margin: '0 auto', padding: '56px 24px 80px' }}>
        <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#F97316', marginBottom: 14 }}>Support</p>
        <h1 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 4vw, 42px)', letterSpacing: '-0.02em', color: '#111', marginBottom: 12, lineHeight: 1.1 }}>Get in touch</h1>
        <p style={{ color: '#555', fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
          Questions, feedback, or trouble with your account? Reach out any time. We're here to help.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ContactCard label="Call or text" value={CONTACT_PHONE} href={`tel:${CONTACT_PHONE_RAW}`} icon="📞" />
          <ContactCard label="Email" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} icon="✉️" />
        </div>

        <div style={{ borderTop: '1px solid #eee', paddingTop: 32, marginTop: 48, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: '#F97316', fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>← Back to Renno</Link>
          <Link to="/privacy" style={{ color: '#777', fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Privacy Policy →</Link>
          <Link to="/terms" style={{ color: '#777', fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>Terms of Service →</Link>
        </div>
      </div>
    </div>
  )
}
