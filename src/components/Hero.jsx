import { useScrollReveal } from '../hooks/useScrollReveal'
import WaitlistForm from './WaitlistForm'

const AVATAR_COLORS = ['#3a7bd5', '#e05252', '#e09a52', '#52c4e0']

export default function Hero() {
  const badge = useScrollReveal()
  const headline = useScrollReveal()
  const form = useScrollReveal()
  const social = useScrollReveal()

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 48px',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Radial accent glow behind headline */}
      <div
        className="lime-glow-pulse"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -56%)',
          width: 700,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 780,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 0,
        }}
      >
        {/* Launch badge */}
        <div
          ref={badge}
          className="reveal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--accent-glow)',
            border: '1px solid rgba(249,115,22,0.3)',
            borderRadius: 100,
            padding: '4px 12px',
            marginBottom: 36,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
              boxShadow: '0 0 8px rgba(249,115,22,0.8)',
            }}
          />
          <span
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 700,
              fontSize: 8,
              letterSpacing: '0.1em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
            }}
          >
            Launching August 2026
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={headline}
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(48px, 11vw, 108px)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            margin: '0 0 48px',
          }}
        >
          PUT YOUR MONEY
          <br />
          WHERE YOUR{' '}
          <span style={{ color: 'var(--accent)' }}>MILES</span>
          <br />
          ARE
        </h1>

        {/* Free race promo */}
        <div
          style={{
            background: 'var(--accent-glow)',
            border: '1px solid rgba(249,115,22,0.35)',
            borderRadius: 10,
            padding: '14px 20px',
            marginBottom: 28,
            width: '100%',
            maxWidth: 520,
            textAlign: 'center',
            boxShadow: '0 0 32px rgba(249,115,22,0.08)',
          }}
        >
          <div style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(15px, 3.5vw, 17px)',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            First race is on us.
          </div>
        </div>

        {/* Signup form */}
        <div
          ref={form}
          id="signup"
          className="reveal reveal-delay-3"
          style={{ width: '100%', maxWidth: 520, marginBottom: 20 }}
        >
          <WaitlistForm />
        </div>

        {/* Social proof */}
        <div
          ref={social}
          className="reveal reveal-delay-4"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {AVATAR_COLORS.map((color, i) => (
              <div
                key={i}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: color,
                  border: '2px solid var(--navy)',
                  marginLeft: i === 0 ? 0 : -10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#fff',
                  zIndex: AVATAR_COLORS.length - i,
                  position: 'relative',
                }}
              >
                {['JR', 'KM', 'AL', 'TP'][i]}
              </div>
            ))}
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>
            Join{' '}
            <span style={{ color: 'var(--text)', fontWeight: 600 }}>1,200+ runners</span>{' '}
            already in line
          </span>
        </div>
      </div>
    </section>
  )
}
