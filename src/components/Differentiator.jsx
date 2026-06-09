import { useScrollReveal } from '../hooks/useScrollReveal'

function PhoneMockup({ rotation, nudgeY = 0, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay} diff-phone`}
      style={{
        transform: `rotate(${rotation}deg) translateY(${nudgeY}px)`,
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {/* Volume buttons */}
      <div style={{ position: 'absolute', left: -4, top: 100, width: 4, height: 26, borderRadius: '3px 0 0 3px', background: '#2a2a2a' }} />
      <div style={{ position: 'absolute', left: -4, top: 136, width: 4, height: 26, borderRadius: '3px 0 0 3px', background: '#2a2a2a' }} />
      {/* Power button */}
      <div style={{ position: 'absolute', right: -4, top: 118, width: 4, height: 40, borderRadius: '0 3px 3px 0', background: '#2a2a2a' }} />

      {/* Phone body */}
      <div
        style={{
          width: 220,
          height: 440,
          borderRadius: 42,
          background: '#111',
          padding: 10,
          boxShadow: '0 40px 100px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.07)',
        }}
      >
        {/* Screen */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 32,
            background: '#e8e8e8',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 22,
              borderRadius: 11,
              background: '#111',
              zIndex: 10,
            }}
          />
          {/* Placeholder screen */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(170deg, #f4f4f4 0%, #e2e2e2 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              paddingTop: 44,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: 'rgba(249,115,22,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  opacity: 0.6,
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                color: '#bbb',
                letterSpacing: '0.04em',
              }}
            >
              App Preview
            </span>
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
        padding: 'clamp(48px, 6vw, 80px) 24px',
        background: '#F5F4F1',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
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
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 48,
        }}
      >
        <PhoneMockup rotation={-8} nudgeY={-20} delay={1} />

        {/* Center text */}
        <div style={{ flex: '1 1 300px', maxWidth: 480, textAlign: 'center' }}>
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

        <PhoneMockup rotation={8} nudgeY={20} delay={2} />
      </div>
    </section>
  )
}
