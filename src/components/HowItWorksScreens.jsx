import { motion } from 'framer-motion'
import createLeagueBg from '../assets/create-league-bg.jpg'
import screenRace from '../assets/screen-race.png'
import screenMap from '../assets/screen-map.png'
import screenLeaderboard from '../assets/screen-leaderboard.png'

const STEPS = [
  { img: screenRace,        number: '01', title: 'PICK YOUR RACE',  description: 'Set a weekly mileage goal and put your stake in.' },
  { img: screenMap,         number: '02', title: 'HIT YOUR GOAL',   description: 'Hit your goal and your stake is safe. Simple.' },
  { img: screenLeaderboard, number: '03', title: 'SPLIT THE POT',   description: 'Miss it and you fund those who showed up.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

const phoneVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 90, damping: 20 } },
}

function PhoneFrame({ img }) {
  return (
    <div style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.55)) drop-shadow(0 4px 14px rgba(0,0,0,0.35))', display: 'inline-block' }}>
      <div style={{ width: 210, height: 455, borderRadius: 48, background: 'linear-gradient(160deg, #484849 0%, #2e2e30 45%, #1e1e20 100%)', padding: '3px', boxShadow: '0 0 0 1px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 45, background: '#000', padding: '7px', boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.06)' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 38, background: '#000', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 76, height: 22, borderRadius: 11, background: '#000', boxShadow: '0 0 0 1.5px #1a1a1a', zIndex: 10 }} />
            <img src={img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorksScreens() {
  return (
    <section className="hiw-screens-section" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(72px, 7vw, 100px) 24px clamp(24px, 3vw, 40px)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${createLeagueBg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.72) 100%)', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to bottom, transparent, #000)', zIndex: 2, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 3 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(44px, 5vw, 64px)' }}
        >
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>The Format</p>
          <h2 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 3.5vw, 46px)', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1.05, color: '#fff', margin: 0 }}>
            HOW RENNO WORKS
          </h2>
        </motion.div>

        <motion.div
          className="hiw-screens-row"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'flex', gap: 'clamp(24px, 4vw, 48px)', justifyContent: 'center', alignItems: 'flex-start' }}
        >
          {STEPS.map((s, i) => (
            <motion.div key={i} className="hiw-screen-col" variants={phoneVariant} style={{ flex: '1 1 0', maxWidth: 280, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PhoneFrame img={s.img} />
              <div style={{ marginTop: 28, textAlign: 'center' }}>
                <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 36, color: 'var(--accent)', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.number}</div>
                <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 10 }}>{s.title}</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.65, margin: 0, maxWidth: 210 }}>{s.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
