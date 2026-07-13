import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import stakeSecured from '../assets/stakesecured.png'
import poolScreen from '../assets/pool.png'
import watchLifestyle from '../assets/watch-lifestyle.jpg'
import leagueScreen from '../assets/home.png'
import mapScreen from '../assets/leaderboard.png'
import grassBg from '../assets/grass.jpeg'

const REASONS = [
  {
    number: '1',
    title: 'Your stake is always protected',
    body: "Hit your weekly goal and you lose $0. The only people funding the pot are the ones who didn't show up.",
    img: stakeSecured,
    display: 'phone',
  },
  {
    number: '2',
    title: '100% of the pool goes to runners',
    body: 'No house cut. Every dollar from non-completers goes straight to people who hit their goal.',
    img: poolScreen,
    display: 'phone',
  },
  {
    number: '3',
    title: 'Works with any running app',
    body: 'Syncs through Apple Health. Keep using Strava, Nike Run Club, or Garmin. Nothing changes.',
    display: 'watch',
  },
  {
    number: '4',
    title: 'Accountability that actually works',
    body: 'Financial stakes are the single most effective way to follow through on a fitness goal.',
    display: 'twophones',
  },
]

const DURATION = 6000

const BTN = { position: 'absolute', borderRadius: 2 }

function PhoneShell({ screen }) {
  return (
    <div style={{ filter: 'drop-shadow(0 20px 44px rgba(0,0,0,0.28)) drop-shadow(0 4px 12px rgba(0,0,0,0.16))' }}>
      <div style={{ width: 220, height: 476, borderRadius: 50, background: 'linear-gradient(160deg, #484849 0%, #2e2e30 45%, #1e1e20 100%)', padding: '3px', boxShadow: '0 0 0 1px rgba(255,255,255,0.15)' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 47, background: '#000', padding: '7px' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 40, background: '#000', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 80, height: 23, borderRadius: 12, background: '#000', boxShadow: '0 0 0 1.5px #1a1a1a', zIndex: 10 }} />
            <img src={screen} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function WatchDisplay() {
  return (
    <div style={{ width: 340, height: 220, borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.22), 0 4px 12px rgba(0,0,0,0.12)' }}>
      <img src={watchLifestyle} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
    </div>
  )
}

function SmallPhone({ screen, rotation, zi }) {
  return (
    <div style={{ transform: `rotate(${rotation}deg)`, position: 'relative', zIndex: zi, filter: 'drop-shadow(0 22px 38px rgba(0,0,0,0.45)) drop-shadow(0 5px 12px rgba(0,0,0,0.28))' }}>
      <div style={{ ...BTN, left: -3, top: 45, width: 3, height: 13, background: 'linear-gradient(to right, #4a4a4c, #3a3a3c)', borderRadius: '3px 1px 1px 3px' }} />
      <div style={{ ...BTN, left: -3, top: 70, width: 3, height: 24, background: 'linear-gradient(to right, #4a4a4c, #3a3a3c)', borderRadius: '3px 1px 1px 3px' }} />
      <div style={{ ...BTN, left: -3, top: 101, width: 3, height: 24, background: 'linear-gradient(to right, #4a4a4c, #3a3a3c)', borderRadius: '3px 1px 1px 3px' }} />
      <div style={{ ...BTN, right: -3, top: 83, width: 3, height: 37, background: 'linear-gradient(to left, #4a4a4c, #3a3a3c)', borderRadius: '1px 3px 3px 1px' }} />
      <div style={{ width: 172, height: 368, borderRadius: 38, background: 'linear-gradient(160deg, #484849 0%, #2e2e30 45%, #1e1e20 100%)', padding: '2px', boxShadow: '0 0 0 1px rgba(255,255,255,0.18)' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 36, background: '#000', padding: '6px' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 30, background: '#000', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)', width: 62, height: 17, borderRadius: 9, background: '#000', boxShadow: '0 0 0 1.5px #1a1a1a', zIndex: 10 }} />
            <img src={screen} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function TwoPhonesStatic() {
  return (
    <div style={{ position: 'relative', width: 344, height: 390, flexShrink: 0 }}>
      <div style={{ position: 'absolute', left: 0, top: 40 }}><SmallPhone screen={leagueScreen} rotation={-12} zi={1} /></div>
      <div style={{ position: 'absolute', right: 0, top: 0 }}><SmallPhone screen={mapScreen} rotation={7} zi={2} /></div>
    </div>
  )
}

export default function WhyRennoSection() {
  const [active, setActive] = useState(0)
  const [started, setStarted] = useState(false)
  const activeRef = useRef(0)
  const intervalRef = useRef(null)
  const sectionRef = useScrollReveal()
  const triggerRef = useRef(null)

  function startInterval() {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % REASONS.length
      setActive(next)
      activeRef.current = next
    }, DURATION)
  }

  // Start countdown only after section stays in view for 600ms
  useEffect(() => {
    const el = triggerRef.current
    if (!el) return
    let debounce = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          debounce = setTimeout(() => {
            setStarted(true)
            startInterval()
            observer.disconnect()
          }, 600)
        } else {
          clearTimeout(debounce)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => { observer.disconnect(); clearTimeout(debounce); clearInterval(intervalRef.current) }
  }, [])

  const handleClick = (i) => {
    if (!started) setStarted(true)
    setActive(i)
    activeRef.current = i
    startInterval()
  }

  const cur = REASONS[active]

  return (
    <section
      ref={(el) => { sectionRef.current = el; triggerRef.current = el }}
      className="reveal why-renno-section"
      style={{ background: '#000', padding: 'clamp(24px, 3vw, 40px) 24px clamp(56px, 6vw, 88px)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Grass background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${grassBg})`, backgroundSize: 'cover', backgroundPosition: 'center 40%', zIndex: 0 }} />
      {/* Dark overlay so text stays readable */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.65) 100%)', zIndex: 1 }} />
      {/* Top blend — continues from dark football section into grass */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to bottom, #000 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
      {/* Bottom blend — fades into PersonasSection gradient */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to bottom, transparent 0%, #F4F3F0 100%)', zIndex: 2, pointerEvents: 'none' }} />
      {/* Preload all images */}
      <div style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <img src={stakeSecured} alt="" /><img src={poolScreen} alt="" />
        <img src={watchLifestyle} alt="" /><img src={leagueScreen} alt="" /><img src={mapScreen} alt="" />
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center', position: 'relative', zIndex: 3 }}>

        {/* Left — fixed size, AnimatePresence crossfade */}
        <div className="why-phone-col" style={{ flex: '0 0 360px', width: 360, minHeight: 476, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {cur.display === 'phone'     && <PhoneShell screen={cur.img} />}
              {cur.display === 'watch'     && <WatchDisplay />}
              {cur.display === 'twophones' && <TwoPhonesStatic />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: reasons */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Why Renno</p>
          <h2 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(26px, 3vw, 42px)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.05, color: '#FFFFFF', margin: '0 0 clamp(24px, 3vw, 36px)' }}>
            WHY USE RENNO?
          </h2>

          {REASONS.map((r, i) => {
            const isActive = active === i
            return (
              <motion.div
                key={i}
                onClick={() => handleClick(i)}
                whileTap={{ scale: 0.99 }}
                style={{ padding: '16px 0', borderBottom: `1px solid ${isActive ? 'transparent' : 'rgba(255,255,255,0.15)'}`, cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                    border: `2px solid ${isActive ? 'var(--accent)' : 'rgba(255,255,255,0.3)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 13,
                    color: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
                    transition: 'border-color 0.4s ease, color 0.4s ease',
                    marginTop: 2,
                  }}>
                    {r.number}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: isActive ? 800 : 600, fontSize: 'clamp(15px, 1.4vw, 17px)', color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.55)', marginBottom: isActive ? 8 : 0, transition: 'color 0.4s ease', lineHeight: 1.3 }}>
                      {r.title}
                    </div>
                    <div style={{ overflow: 'hidden', maxHeight: isActive ? 120 : 0, opacity: isActive ? 1 : 0, transition: 'max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease 0.08s' }}>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6, margin: '0 0 12px' }}>{r.body}</p>
                    </div>
                    {isActive && started && (
                      <div style={{ height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 2, overflow: 'hidden', marginTop: 4 }}>
                        <div key={`bar-${active}`} style={{ height: '100%', background: 'var(--accent)', borderRadius: 2, animation: `whyProgress ${DURATION}ms linear forwards` }} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
