import { useScrollReveal } from '../hooks/useScrollReveal'

const TESTIMONIALS = [
  {
    quote: "I never thought I'd actually stick to a training plan. When money's on the line, every mile counts.",
    name: 'Marcus T.',
    detail: '22 mi/week · 8-week streak',
    initials: 'MT',
    avatarBg: '#3a7bd5',
  },
  {
    quote: "Hit my goal every week for two months straight. The accountability is real. And so is the payout.",
    name: 'Priya S.',
    detail: '35 mi/week · Top 10%',
    initials: 'PS',
    avatarBg: '#e05252',
  },
]

function Testimonial({ item, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay}`}
      style={{
        flex: '1 1 240px',
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        textAlign: 'left',
      }}
    >
      {/* Large quotation mark */}
      <div
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900,
          fontSize: 72,
          lineHeight: 1,
          color: 'var(--accent)',
          marginBottom: -12,
        }}
      >
        "
      </div>

      {/* Quote text */}
      <p
        style={{
          color: 'var(--text)',
          fontSize: 'clamp(15px, 1.4vw, 18px)',
          lineHeight: 1.6,
          margin: 0,
          fontWeight: 500,
        }}
      >
        {item.quote}"
      </p>

      {/* Avatar + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: item.avatarBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 800,
            fontSize: 13,
            color: '#fff',
            flexShrink: 0,
          }}
        >
          {item.initials}
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: 'var(--text)',
            }}
          >
            {item.name}
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
            {item.detail}
          </div>
        </div>
      </div>
    </div>
  )
}

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

      <div
        className="diff-row"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 48,
          flexWrap: 'wrap',
        }}
      >
        <Testimonial item={TESTIMONIALS[0]} delay={1} />

        {/* Center content */}
        <div style={{ flex: '1 1 300px', maxWidth: 420, textAlign: 'center' }}>
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

        <Testimonial item={TESTIMONIALS[1]} delay={2} />
      </div>
    </section>
  )
}
