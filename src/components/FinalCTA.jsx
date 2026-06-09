import { useScrollReveal } from '../hooks/useScrollReveal'
import WaitlistForm from './WaitlistForm'
import joinLeagueBg from '../assets/join-league-bgnd.jpeg'

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
  {
    quote: "Nothing makes you lace up faster than knowing your money's on the line. Best thing I've done for my running.",
    name: 'Jordan K.',
    detail: '18 mi/week · 5-week streak',
    initials: 'JK',
    avatarBg: '#e09a52',
  },
  {
    quote: "I've tried every app out there. Renno is the only one that actually made me show up every single week.",
    name: 'Alex M.',
    detail: '28 mi/week · Top 25%',
    initials: 'AM',
    avatarBg: '#52c4a0',
  },
]

function Testimonial({ item, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        textAlign: 'left',
        maxWidth: 260,
      }}
    >
      <div
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900,
          fontSize: 64,
          lineHeight: 1,
          color: 'var(--accent)',
          marginBottom: -8,
        }}
      >
        "
      </div>
      <p
        style={{
          color: 'rgba(255,255,255,0.88)',
          fontSize: 'clamp(13px, 1.1vw, 15px)',
          lineHeight: 1.65,
          margin: 0,
          fontWeight: 500,
        }}
      >
        {item.quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: item.avatarBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 800,
            fontSize: 12,
            color: '#fff',
            flexShrink: 0,
          }}
        >
          {item.initials}
        </div>
        <div>
          <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 13, color: '#fff' }}>
            {item.name}
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>
            {item.detail}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FinalCTA() {
  const box = useScrollReveal()
  const sub = useScrollReveal()
  const form = useScrollReveal()

  return (
    <section
      style={{
        padding: 'clamp(64px, 8vw, 100px) 32px',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url(${joinLeagueBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.82) 100%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 52, background: 'linear-gradient(to bottom, #F5F4F1, transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 52, background: 'linear-gradient(to bottom, transparent, #F4F3F0)', zIndex: 1, pointerEvents: 'none' }} />

      {/* Zig-zag layout: left col | box | right col */}
      <div
        className="cta-zigzag"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 40,
        }}
      >
        {/* Left column — T1 high, T3 low */}
        <div
          className="cta-quotes-col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 64,
            flex: '0 0 240px',
            paddingTop: 0,
          }}
        >
          <Testimonial item={TESTIMONIALS[0]} delay={1} />
          <div style={{ marginTop: 40 }}>
            <Testimonial item={TESTIMONIALS[2]} delay={2} />
          </div>
        </div>

        {/* Center box — smaller */}
        <div
          ref={box}
          className="reveal"
          style={{
            flex: '0 0 auto',
            width: '100%',
            maxWidth: 440,
            border: '1px solid rgba(249,115,22,0.35)',
            borderRadius: 16,
            padding: 'clamp(24px, 3vw, 36px) clamp(20px, 3vw, 36px)',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.32)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            position: 'relative',
            overflow: 'hidden',
            alignSelf: 'center',
            marginTop: 60,
          }}
        >
          <div style={{
            position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
            width: 300, height: 240, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <p style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16,
          }}>
            Waitlist Exclusive
          </p>

          <h2 style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 900,
            fontSize: 'clamp(26px, 3vw, 38px)', textTransform: 'uppercase',
            letterSpacing: '-0.02em', lineHeight: 1.0, color: '#FFFFFF', margin: '0 0 10px',
          }}>
            FIRST RACE<br />IS ON{' '}
            <span style={{ color: 'var(--accent)' }}>US.</span>
          </h2>

          <p
            ref={sub}
            className="reveal reveal-delay-1"
            style={{
              color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6,
              maxWidth: 320, margin: '0 auto 28px',
            }}
          >
            Your first entry is on us. No card, no catch. Just run.
          </p>

          <div ref={form} className="reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <WaitlistForm compact />
          </div>

          <p style={{ marginTop: 14, color: 'rgba(255,255,255,0.35)', fontSize: 11, letterSpacing: '0.02em' }}>
            No spam. We'll only reach out when it's time to run.
          </p>
        </div>

        {/* Right column — T2 lower, T4 even lower (zig-zag offset) */}
        <div
          className="cta-quotes-col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 64,
            flex: '0 0 240px',
            paddingTop: 80,
          }}
        >
          <Testimonial item={TESTIMONIALS[1]} delay={2} />
          <div style={{ marginTop: 40 }}>
            <Testimonial item={TESTIMONIALS[3]} delay={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
