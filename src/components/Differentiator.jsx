import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Differentiator() {
  const heading = useScrollReveal()
  const sub = useScrollReveal()

  return (
    <section
      style={{
        padding: 'clamp(72px, 12vw, 140px) 24px',
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow accent */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 200,
          background: 'radial-gradient(ellipse at bottom, rgba(249,115,22,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2
          ref={heading}
          className="reveal"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(32px, 6vw, 68px)',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: 'var(--text)',
            margin: '0 0 32px',
          }}
        >
          FALLING BEHIND IS THE{' '}
          <span style={{ color: 'var(--accent)' }}>ONLY WAY</span>{' '}
          TO LOSE.
        </h2>

        <p
          ref={sub}
          className="reveal reveal-delay-1"
          style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(16px, 2.2vw, 19px)',
            lineHeight: 1.7,
            maxWidth: 620,
            margin: '0 auto',
          }}
        >
          Other apps punish you for trying. Renno protects every runner who hits
          their goal and rewards the ones who push hardest.
        </p>

        {/* Divider accent */}
        <div
          style={{
            width: 48,
            height: 3,
            background: 'linear-gradient(90deg, #F97316, #C2410C)',
            borderRadius: 2,
            margin: '48px auto 0',
          }}
        />
      </div>
    </section>
  )
}
