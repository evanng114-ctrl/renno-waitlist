import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import coachBg from '../assets/coach.png'
import runclubBg from '../assets/runclub.png'
import startingBg from '../assets/starting.png'

const PERSONAS = [
  {
    id: 'coach',
    label: 'Coach or Team',
    eyebrow: 'COACHES & TEAMS',
    headline: 'YOUR ROSTER.',
    accent: 'ALL SEASON.',
    accentColor: '#D4A017',
    bgImage: coachBg,
    border: 'rgba(212,160,23,0.35)',
    description: 'Team-wide mileage goals with real stakes. When money\'s on the line, training days don\'t get skipped.',
  },
  {
    id: 'run-club',
    label: 'Run Club',
    eyebrow: 'RUN CLUBS',
    headline: 'YOUR GROUP.',
    accent: 'YOUR LEAGUE.',
    accentColor: '#F97316',
    bgImage: runclubBg,
    border: 'rgba(249,115,22,0.35)',
    description: 'Turn weekly miles into friendly competition. Every member runs for their stake and shares the pot.',
  },
  {
    id: 'new-runner',
    label: 'New to Running',
    eyebrow: 'GETTING STARTED',
    headline: 'YOUR FIRST RACE.',
    accent: 'NO PRESSURE.',
    accentColor: '#E2B93A',
    bgImage: startingBg,
    border: 'rgba(226,185,58,0.3)',
    description: 'Set a small stake, hit your goal, get paid. When money\'s on the line, you actually lace up.',
  },
]

export default function PersonasSection() {
  const [active, setActive] = useState(0)
  const heading = useScrollReveal()
  const sub = useScrollReveal()

  return (
    <section style={{ background: 'var(--bg)', padding: 'clamp(48px, 6vw, 80px) 24px', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.7) 60%, #fff 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 48px)' }}>
          <p className="reveal" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
            Who Is Renno For?
          </p>
          <h2 ref={heading} className="reveal reveal-delay-1" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 3.5vw, 46px)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.05, color: 'var(--text)', margin: '0 0 12px' }}>
            BUILT FOR <span style={{ color: 'var(--accent)' }}>EVERY RUNNER.</span>
          </h2>
          <p ref={sub} className="reveal reveal-delay-2" style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.3vw, 15px)', maxWidth: 460, margin: '0 auto' }}>
            Whether you're just starting out or coaching a team, Renno works for you.
          </p>
        </div>

        {/* Labels row — synced flex with cards below */}
        <div className="personas-row" style={{ display: 'flex', gap: 10, marginBottom: 10 }} onMouseLeave={() => setActive(0)}>
          {PERSONAS.map((p, i) => {
            const isActive = active === i
            return (
              <div
                key={p.id + '-label'}
                onMouseEnter={() => setActive(i)}
                style={{ flex: isActive ? '4 1 0' : '1 1 0', minWidth: 56, transition: 'flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden', cursor: 'pointer' }}
              >
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: '0.14em', textTransform: 'uppercase', color: isActive ? p.accentColor : 'var(--text-muted)', margin: '0 0 8px', whiteSpace: 'nowrap', overflow: 'hidden', transition: 'color 0.3s ease' }}>
                  {p.eyebrow}
                </p>
                <div style={{ height: 2, borderRadius: 1, background: p.accentColor, opacity: isActive ? 1 : 0.15, transition: 'opacity 0.3s ease' }} />
              </div>
            )
          })}
        </div>

        {/* Desktop expanding panels */}
        <div
          className="personas-row"
          style={{ display: 'flex', gap: 10, height: 440 }}
          onMouseLeave={() => setActive(0)}
        >
          {PERSONAS.map((p, i) => {
            const isActive = active === i
            return (
              <div
                key={p.id}
                onMouseEnter={() => setActive(i)}
                style={{
                  flex: isActive ? '4 1 0' : '1 1 0',
                  minWidth: 56,
                  transition: 'flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 16,
                  backgroundImage: `url(${p.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: `1px solid ${isActive ? p.border : 'rgba(255,255,255,0.06)'}`,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                {/* Dark overlay over photo */}
                <div style={{ position: 'absolute', inset: 0, background: isActive ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0.68)', transition: 'background 0.4s ease' }} />
                {/* Accent glow in corner */}
                <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle, ${p.accentColor}22 0%, transparent 70%)`, pointerEvents: 'none', opacity: isActive ? 1 : 0, transition: 'opacity 0.4s ease' }} />

                {/* Expanded content — fades in on hover */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  padding: 'clamp(28px, 3vw, 40px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(10px)',
                  transition: isActive
                    ? 'opacity 0.35s ease 0.15s, transform 0.35s ease 0.15s'
                    : 'opacity 0.15s ease, transform 0.15s ease',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}>
                  <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(26px, 3vw, 40px)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0, color: '#fff', margin: '0 0 4px', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                    {p.headline}
                  </h3>
                  <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(26px, 3vw, 40px)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0, color: p.accentColor, margin: '0 0 16px', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                    {p.accent}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 340, textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                    {p.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile stacked cards */}
        <div className="personas-mobile" style={{ display: 'none', flexDirection: 'column', gap: 12 }}>
          {PERSONAS.map((p) => (
            <div key={p.id} style={{ borderRadius: 14, backgroundImage: `url(${p.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', border: `1px solid ${p.border}`, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.62)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.accentColor, marginBottom: 10 }}>
                  {p.eyebrow}
                </p>
                <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 36, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0, color: '#fff', margin: '0 0 2px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {p.headline}
                </h3>
                <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 36, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0, color: p.accentColor, margin: '0 0 14px', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
                  {p.accent}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
