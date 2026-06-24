import { useScrollReveal } from '../hooks/useScrollReveal'
import screenRace from '../assets/screen-race.png'
import screenMap from '../assets/screen-map.png'
import screenGoal from '../assets/screen-goal.png'

const SCREENS = [
  {
    img: screenRace,
    step: '01',
    title: 'Join a Race',
    caption: 'Pick a distance, set your weekly mileage goal, and enter the prize pool. Real money on the line from day one.',
  },
  {
    img: screenMap,
    step: '02',
    title: 'Run and Track',
    caption: 'Every mile logged live with GPS. Hit 100% of your goal and your stake is secured before the week ends.',
  },
  {
    img: screenGoal,
    step: '03',
    title: 'Collect Your Payout',
    caption: 'Goal cleared, stake secured. Everyone who showed up splits the pot from those who didn\'t.',
  },
]

function PhoneFrame({ img, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay}`}
      style={{
        filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.38)) drop-shadow(0 4px 14px rgba(0,0,0,0.22))',
        display: 'inline-block',
      }}
    >
      <div style={{
        width: 220,
        height: 476,
        borderRadius: 50,
        background: 'linear-gradient(160deg, #484849 0%, #2e2e30 45%, #1e1e20 100%)',
        padding: '3px',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}>
        <div style={{
          width: '100%', height: '100%',
          borderRadius: 47,
          background: '#000',
          padding: '7px',
          boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.06)',
        }}>
          <div style={{
            width: '100%', height: '100%',
            borderRadius: 40,
            background: '#000',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
              width: 80, height: 23, borderRadius: 12,
              background: '#000', boxShadow: '0 0 0 1.5px #1a1a1a', zIndex: 10,
            }} />
            <img
              src={img}
              alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AppScreensSection() {
  const heading = useScrollReveal()
  const sub = useScrollReveal()

  return (
    <section
      className="app-screens-section"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(72px, 7vw, 100px) 24px clamp(80px, 8vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top blend from dark hero */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to bottom, #000, transparent)', pointerEvents: 'none', zIndex: 0 }} />
      {/* Bottom blend into HowItWorks */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 110, background: 'linear-gradient(to bottom, transparent, #000)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Header */}
        <p className="reveal" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          Inside the App
        </p>
        <h2
          ref={heading}
          className="reveal reveal-delay-1"
          style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 3.8vw, 52px)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.05, color: 'var(--text)', margin: '0 0 14px' }}
        >
          SET YOUR STAKE.<br />
          <span style={{ color: 'var(--accent)' }}>RUN FOR IT.</span>
        </h2>
        <p
          ref={sub}
          className="reveal reveal-delay-2"
          style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.65, maxWidth: 440, margin: '0 auto 56px' }}
        >
          From entering your first race to cashing out your payout.
        </p>

        {/* Phone frames row */}
        <div className="app-screens-row" style={{ display: 'flex', gap: 'clamp(24px, 4vw, 56px)', justifyContent: 'center', alignItems: 'flex-start' }}>
          {SCREENS.map((s, i) => (
            <div key={i} className="app-screen-col" style={{ flex: '1 1 0', maxWidth: 280, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PhoneFrame img={s.img} delay={i + 1} />
              <div style={{ marginTop: 28, textAlign: 'center' }}>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6 }}>
                  {s.step} / {s.title}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.65, margin: 0, maxWidth: 220 }}>
                  {s.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
