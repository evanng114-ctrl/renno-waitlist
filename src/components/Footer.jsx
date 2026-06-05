const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
)

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 24px 40px',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          textAlign: 'center',
        }}
      >
        {/* Logo mark */}
        {/* Replace with <img src="/renno-logo.svg" alt="Renno" style={{ height: 28 }} /> once SVG is ready */}
        <div
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900,
            fontSize: 20,
            letterSpacing: '0.1em',
            color: '#ffffff',
            textTransform: 'uppercase',
          }}
        >
          RENN<span style={{ color: '#C4F23C' }}>O</span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            margin: 0,
          }}
        >
          COMPETE TOGETHER.{' '}
          <span style={{ color: 'rgba(196,242,60,0.6)' }}>HIT THE GOAL.</span>{' '}
          WIN TOGETHER.
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 20 }}>
          <a
            href="#"
            aria-label="Instagram"
            style={{
              color: 'rgba(255,255,255,0.35)',
              transition: 'color 0.2s ease',
              display: 'flex',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C4F23C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            style={{
              color: 'rgba(255,255,255,0.35)',
              transition: 'color 0.2s ease',
              display: 'flex',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C4F23C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
          >
            <TikTokIcon />
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.2)',
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Renno. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
