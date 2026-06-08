import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Differentiator() {
  const heading = useScrollReveal()
  const sub = useScrollReveal()

  return (
    <section
      style={{
        padding: 'clamp(32px, 4vw, 48px) 24px',
        background: '#F5F4F1',
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
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            lineHeight: 1.05,
            color: 'var(--text)',
            margin: '0 0 20px',
          }}
        >
          HIT YOUR GOAL.{' '}
          <span style={{ color: 'var(--accent)' }}>KEEP YOUR MONEY.</span>
        </h2>

        <p
          ref={sub}
          className="reveal reveal-delay-1"
          style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(14px, 1.3vw, 16px)',
            lineHeight: 1.6,
            maxWidth: 480,
            margin: '0 auto',
          }}
        >
          Run your weekly miles and your stake is always protected. The pot goes to everyone who shows up.
        </p>

        {/* Divider accent */}
        <div
          style={{
            width: 48,
            height: 3,
            background: 'linear-gradient(90deg, #F97316, #C2410C)',
            borderRadius: 2,
            margin: '28px auto 0',
          }}
        />
      </div>
    </section>
  )
}
