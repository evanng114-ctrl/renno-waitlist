import { useScrollReveal } from '../hooks/useScrollReveal'
import WaitlistForm from './WaitlistForm'
import joinLeagueBg from '../assets/join-league-bgnd.jpeg'

export default function FinalCTA() {
  const box = useScrollReveal()
  const sub = useScrollReveal()
  const form = useScrollReveal()

  return (
    <section
      style={{
        padding: 'clamp(48px, 6vw, 72px) 24px',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url(${joinLeagueBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.75) 100%)' }} />
      {/* Top blend from Differentiator */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, #E5E3DC, transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div
        ref={box}
        className="reveal"
        style={{
          maxWidth: 680,
          margin: '0 auto',
          border: '1px solid rgba(249,115,22,0.35)',
          borderRadius: 16,
          padding: 'clamp(32px, 4vw, 52px) clamp(24px, 4vw, 48px)',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.28)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          position: 'relative',
          zIndex: 2,
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
          fontSize: 'clamp(32px, 4vw, 48px)',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          lineHeight: 1.0,
          color: '#FFFFFF',
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
            color: 'rgba(255,255,255,0.75)',
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: 1.6,
            maxWidth: 380,
            margin: '0 auto 36px',
          }}
        >
          Your first entry is on us. No card, no catch. Just run.
        </p>

        {/* Form */}
        <div ref={form} className="reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
          <WaitlistForm compact />
        </div>

        <p style={{
          marginTop: 18,
          color: 'rgba(255,255,255,0.4)',
          fontSize: 12,
          letterSpacing: '0.02em',
        }}>
          No spam. We'll only reach out when it's time to run.
        </p>
      </div>
    </section>
  )
}
