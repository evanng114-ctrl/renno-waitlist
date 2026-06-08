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

      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <p
          className="reveal"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: 16,
          }}
        >
          How You Win
        </p>
        <h2
          ref={heading}
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(32px, 4vw, 52px)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            lineHeight: 1.0,
            color: 'var(--text)',
            margin: '0 0 20px',
          }}
        >
          RUN YOUR MILES.<br />
          <span style={{ color: 'var(--accent)' }}>GET PAID.</span>
        </h2>

        <p
          ref={sub}
          className="reveal reveal-delay-2"
          style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(14px, 1.3vw, 15px)',
            lineHeight: 1.6,
            maxWidth: 400,
            margin: '0 auto',
          }}
        >
          Hit your weekly goal and your stake is protected. Everyone who shows up shares the pot.
        </p>
      </div>
    </section>
  )
}
