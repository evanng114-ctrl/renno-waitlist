import { useScrollReveal } from '../hooks/useScrollReveal'

const BENEFITS = [
  {
    icon: '🏃',
    title: 'SET TEAM GOALS',
    body: 'Give your whole roster a weekly mileage target. Everyone runs toward the same bar.',
  },
  {
    icon: '🔒',
    title: 'BUILT-IN ACCOUNTABILITY',
    body: 'When athletes have money on the line, they show up. No more missed training days.',
  },
  {
    icon: '📈',
    title: 'TRACK TOGETHER',
    body: 'See your team hit their goals week after week. The leaderboard does the motivating for you.',
  },
]

export default function CoachSection() {
  const heading = useScrollReveal()
  const sub = useScrollReveal()

  return (
    <section
      className="coach-section"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(48px, 6vw, 80px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle accent glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 4vw, 56px)' }}>
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
            For Coaches &amp; Teams
          </p>
          <h2
            ref={heading}
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 4vw, 52px)',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              color: 'var(--text)',
              margin: '0 0 16px',
            }}
          >
            YOUR ROSTER.<br />
            <span style={{ color: 'var(--accent)' }}>ON THE LINE.</span>
          </h2>
          <p
            ref={sub}
            className="reveal reveal-delay-2"
            style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              lineHeight: 1.65,
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            Renno gives coaches a way to keep athletes accountable all season.
            Set team goals, track weekly mileage, and let the stakes do the rest.
          </p>
        </div>

        {/* Benefit cards */}
        <div
          className="coach-cards-row cards-row"
          style={{
            display: 'flex',
            gap: 20,
            justifyContent: 'center',
          }}
        >
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                flex: '1 1 280px',
                maxWidth: 340,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                padding: 'clamp(24px, 2.5vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: 'rgba(249,115,22,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
              }}>
                {b.icon}
              </div>
              <div style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text)',
              }}>
                {b.title}
              </div>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: 14,
                lineHeight: 1.6,
                margin: 0,
              }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="reveal reveal-delay-2"
          style={{ textAlign: 'center', marginTop: 'clamp(32px, 3vw, 48px)' }}
        >
          <p style={{
            color: 'var(--text-muted)',
            fontSize: 14,
            marginBottom: 16,
          }}>
            Interested in early team access?
          </p>
          <a
            href="#signup"
            className="btn-lime"
            style={{
              display: 'inline-block',
              padding: '13px 32px',
              borderRadius: 8,
              fontSize: 13,
              letterSpacing: '0.08em',
              textDecoration: 'none',
            }}
          >
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  )
}
