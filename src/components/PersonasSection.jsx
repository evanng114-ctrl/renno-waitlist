import { useState } from 'react'
import { motion } from 'framer-motion'
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

const spring = { type: 'spring', stiffness: 80, damping: 20 }

const headerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
}

export default function PersonasSection() {
  const [active, setActive] = useState(0)

  return (
    <section style={{ background: 'linear-gradient(175deg, #F4F3F0 0%, #E9E5DC 40%, #DDD7CB 100%)', padding: 'clamp(48px, 6vw, 80px) 24px', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, #F4F3F0, transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to bottom, transparent 0%, rgba(221,215,203,0.7) 60%, #DDD7CB 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 48px)' }}
        >
          <motion.h2 variants={fadeUp} style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 3.5vw, 46px)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.05, color: 'var(--text)', margin: '0 0 12px' }}>
            BUILT FOR <span style={{ color: 'var(--accent)' }}>EVERY RUNNER.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.3vw, 15px)', maxWidth: 460, margin: '0 auto' }}>
            Whether you're just starting out or coaching a team, Renno works for you.
          </motion.p>
        </motion.div>

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
        <motion.div
          className="personas-row"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
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

                {/* Expanded content */}
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
        </motion.div>

        {/* Mobile accordion */}
        <div className="personas-mobile" style={{ display: 'none', flexDirection: 'column', gap: 6, height: 500 }}>
          {PERSONAS.map((p, i) => {
            const isActive = active === i
            return (
              <div
                key={p.id}
                onClick={() => setActive(i)}
                style={{
                  flex: isActive ? '5 1 0' : '1 1 0',
                  transition: 'flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: 14,
                  backgroundImage: `url(${p.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: `1px solid ${isActive ? p.border : 'rgba(255,255,255,0.08)'}`,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: isActive ? 'rgba(0,0,0,0.52)' : 'rgba(0,0,0,0.72)', transition: 'background 0.4s ease' }} />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 20px',
                  opacity: isActive ? 0 : 1,
                  transition: 'opacity 0.2s ease',
                  pointerEvents: 'none',
                }}>
                  <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 12, letterSpacing: '0.16em', color: p.accentColor, margin: 0, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {p.eyebrow}
                  </p>
                </div>

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '22px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                  transition: isActive
                    ? 'opacity 0.35s ease 0.15s, transform 0.35s ease 0.15s'
                    : 'opacity 0.15s ease, transform 0.15s ease',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}>
                  <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.accentColor, margin: '0 0 8px' }}>
                    {p.eyebrow}
                  </p>
                  <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 30, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0, color: '#fff', margin: '0 0 2px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                    {p.headline}
                  </h3>
                  <h3 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 30, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0, color: p.accentColor, margin: '0 0 12px', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
                    {p.accent}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 300, textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                    {p.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
