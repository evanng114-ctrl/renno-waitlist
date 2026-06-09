import { useScrollReveal } from '../hooks/useScrollReveal'
import { useState, useEffect } from 'react'
import WaitlistForm from './WaitlistForm'
import joinLeagueBg from '../assets/join-league-bgnd.jpeg'

const LEFT = [
  { quote: "When money's on the line, you show up. No excuses.", name: 'Marcus T.', detail: '22 mi/wk avg', initials: 'MT', avatarBg: '#3a7bd5', avatarRight: false },
  { quote: "Been saying I'd run more for years. This might actually do it.", name: 'Jordan K.', detail: '18 mi/wk avg', initials: 'JK', avatarBg: '#e09a52', avatarRight: true },
  { quote: "My goals, my pace, my money. Simple.", name: 'Sara L.', detail: '30 mi/wk avg', initials: 'SL', avatarBg: '#a78bfa', avatarRight: false },
]

const RIGHT = [
  { quote: "Finally something worth getting off the couch for.", name: 'Priya S.', detail: '35 mi/wk avg', initials: 'PS', avatarBg: '#e05252', avatarRight: true },
  { quote: "Putting stakes on my miles is going to change everything.", name: 'Alex M.', detail: '28 mi/wk avg', initials: 'AM', avatarBg: '#52c4a0', avatarRight: false },
  { quote: "Nothing motivates like skin in the game.", name: 'Chris R.', detail: '25 mi/wk avg', initials: 'CR', avatarBg: '#f472b6', avatarRight: true },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: '#F97316', fontSize: 13, lineHeight: 1 }}>★</span>
      ))}
    </div>
  )
}

function TestimonialSlider({ items, startDelay = 0 }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const init = setTimeout(() => {
      const interval = setInterval(() => {
        setVisible(false)
        setTimeout(() => {
          setIndex(i => (i + 1) % items.length)
          setVisible(true)
        }, 400)
      }, 3000)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(init)
  }, [items.length, startDelay])

  const item = items[index]

  return (
    /* Bubble stays in DOM always — backdrop-filter never re-initializes */
    <div style={{
      background: 'rgba(255,255,255,0.10)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: 14,
      padding: '13px 16px',
      minHeight: 148,
      display: 'flex',
      alignItems: 'stretch',
    }}>
      {/* Only the content fades */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        textAlign: 'left',
        flexDirection: item.avatarRight ? 'row-reverse' : 'row',
        flex: 1,
      }}>
        <div style={{ width: 42, height: 42, borderRadius: '50%', background: item.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 12, color: '#fff', flexShrink: 0, marginTop: 2 }}>
          {item.initials}
        </div>
        <div style={{ flex: 1 }}>
          <Stars />
          <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 14, lineHeight: 1.55, margin: '0 0 10px', fontWeight: 500 }}>
            {item.quote}
          </p>
          <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 13, color: '#fff' }}>{item.name}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{item.detail}</div>
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
    <section style={{ padding: 'clamp(48px, 5vw, 64px) 24px', background: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url(${joinLeagueBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.82) 100%)' }} />
      <div className="cta-top-blend" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 52, background: 'linear-gradient(to bottom, #F5F4F1, transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 52, background: 'linear-gradient(to bottom, transparent, #F4F3F0)', zIndex: 1, pointerEvents: 'none' }} />

      <div className="cta-zigzag" style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>

        <div className="cta-quotes-col" style={{ flex: '1 1 0', minWidth: 0 }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 14 }}>
            What People Are Saying
          </p>
          <TestimonialSlider items={LEFT} startDelay={0} />
        </div>

        {/* Center box */}
        <div
          ref={box}
          className="reveal cta-center-box"
          style={{ flexShrink: 0, width: 460, border: '1px solid rgba(249,115,22,0.35)', borderRadius: 16, padding: '36px 40px', textAlign: 'center', background: 'rgba(0,0,0,0.32)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 280, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Waitlist Exclusive</p>
          <h2 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0, color: '#FFFFFF', margin: '0 0 10px' }}>
            FIRST RACE<br />IS ON <span style={{ color: 'var(--accent)' }}>US.</span>
          </h2>
          <p ref={sub} className="reveal reveal-delay-1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6, maxWidth: 300, margin: '0 auto 24px' }}>
            Your first entry is on us. No card, no catch. Just run.
          </p>
          <div ref={form} className="reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center' }}>
            <WaitlistForm compact />
          </div>
          <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.35)', fontSize: 11, letterSpacing: '0.02em' }}>No spam. We'll only reach out when it's time to run.</p>
        </div>

        <div className="cta-quotes-col" style={{ flex: '1 1 0', minWidth: 0 }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 14 }}>
            What People Are Saying
          </p>
          <TestimonialSlider items={RIGHT} startDelay={1500} />
        </div>

      </div>
    </section>
  )
}
