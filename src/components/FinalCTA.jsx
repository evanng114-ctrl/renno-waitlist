import { useScrollReveal } from '../hooks/useScrollReveal'
import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  const box = useScrollReveal()
  const sub = useScrollReveal()
  const form = useScrollReveal()

  return (
    <section
      style={{
        padding: 'clamp(64px, 10vw, 120px) 24px',
        background: 'var(--bg)',
      }}
    >
      <div
        ref={box}
        className="reveal"
        style={{
          maxWidth: 680,
          margin: '0 auto',
          border: '1px solid rgba(249,115,22,0.3)',
          borderRadius: 16,
          padding: 'clamp(40px, 6vw, 72px) clamp(28px, 6vw, 64px)',
          textAlign: 'center',
          background: 'var(--accent-glow)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow */}
        <div style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 400,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Eyebrow */}
        <p style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 20,
        }}>
          Waitlist Exclusive
        </p>

        {/* Offer headline */}
        <h2 style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(38px, 6vw, 62px)',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          lineHeight: 1.0,
          color: 'var(--text)',
          margin: '0 0 12px',
        }}>
          FIRST RACE<br />
          IS ON{' '}
          <span style={{ color: 'var(--accent)' }}>US.</span>
        </h2>

        {/* Subtext */}
        <p
          ref={sub}
          className="reveal reveal-delay-1"
          style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: 1.6,
            maxWidth: 380,
            margin: '0 auto 36px',
          }}
        >
          Sign up now and your first entry is on us — no card, no catch. Just show up and run.
        </p>

        {/* Form */}
        <div ref={form} className="reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
          <WaitlistForm compact />
        </div>

        <p style={{
          marginTop: 18,
          color: 'var(--text-dim)',
          fontSize: 12,
          letterSpacing: '0.02em',
        }}>
          No spam. We'll only reach out when it's time to run.
        </p>
      </div>
    </section>
  )
}
