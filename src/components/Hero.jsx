import { useScrollReveal } from '../hooks/useScrollReveal'
import WaitlistForm from './WaitlistForm'
import heroBg from '../assets/backgroundimage.png'

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
        background: '#000',
      }}
    >
      {/* Background photo — drop any running image at public/hero-bg.jpg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      {/* Dark overlay — keeps all text readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.82) 100%)',
        }}
      />

      {/* Bottom blend into StatsBar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
          background: 'linear-gradient(to bottom, transparent, #F5F4F1)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Accent glow pulse */}
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
          background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
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
            gap: 14,
            marginBottom: 36,
          }}
        >
          <span style={{ width: 28, height: 1, background: 'var(--accent)', display: 'inline-block', opacity: 0.7 }} />
          <span
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: '0.28em',
              color: 'rgba(242,242,247,0.88)',
              textTransform: 'uppercase',
            }}
          >
            Launching August 2026
          </span>
          <span style={{ width: 28, height: 1, background: 'var(--accent)', display: 'inline-block', opacity: 0.7 }} />
        </div>

        {/* Main headline */}
        <h1
          ref={headline}
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(48px, 5vw, 64px)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#F2F2F7',
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
          <span style={{ color: 'rgba(242,242,247,0.7)', fontSize: 14 }}>
            Join{' '}
            <span style={{ color: '#F2F2F7', fontWeight: 600 }}>1,200+ runners</span>{' '}
            already in line
          </span>
        </div>
      </div>
    </section>
  )
}
