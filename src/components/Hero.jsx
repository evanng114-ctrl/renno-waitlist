import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'
import heroBg from '../assets/backgroundimage.png'

const AVATAR_COLORS = ['#3a7bd5', '#e05252', '#e09a52', '#52c4e0']

const spring = { type: 'spring', stiffness: 80, damping: 20 }

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: spring },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ position: 'relative', minHeight: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px', overflow: 'hidden', background: '#000' }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center top' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.78) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to bottom, transparent, #000)', zIndex: 1, pointerEvents: 'none' }} />
      <div className="lime-glow-pulse" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -56%)', width: 700, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.18) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 2 }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 3, maxWidth: 1100, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0 }}
      >
        <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 28 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: 'rgba(242,242,247,0.25)' }} />
            <span className="hero-eyebrow" style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(242,242,247,0.45)' }}>Launching August 2026</span>
            <span style={{ display: 'block', width: 28, height: 1, background: 'rgba(242,242,247,0.25)' }} />
          </div>
          <div className="renno-rewrite" role="img" aria-label="I'll start someday becomes I ran today">
            <span className="rw-old" aria-hidden="true">
              I'll start someday<span className="rw-strike"></span>
            </span>
            <span className="rw-new" aria-hidden="true">
              I ran <span className="rw-today">today.<span className="rw-underline"></span></span>
            </span>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, fontSize: 'clamp(13px, 1.1vw, 15px)', lineHeight: 1.6, color: 'rgba(242,242,247,0.62)', maxWidth: 420, margin: '0 0 44px', textAlign: 'center' }}>
          Put your own money on your weekly goal and earn it back by showing up.
        </motion.p>

        <motion.div variants={fadeUp} id="signup" style={{ width: '100%', maxWidth: 520, marginBottom: 20 }}>
          <WaitlistForm />
        </motion.div>

        <motion.div variants={fadeUp} className="social-proof-row" style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {AVATAR_COLORS.map((color, i) => (
              <div key={i} className={i > 0 ? 'avatar-item' : ''} style={{ width: 30, height: 30, borderRadius: '50%', background: color, border: '2px solid var(--navy)', marginLeft: i === 0 ? 0 : -10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', zIndex: AVATAR_COLORS.length - i, position: 'relative' }}>
                {['JR', 'KM', 'AL', 'TP'][i]}
              </div>
            ))}
          </div>
          <span style={{ color: 'rgba(242,242,247,0.7)', fontSize: 14 }}>
            <span style={{ color: '#F2F2F7', fontWeight: 600 }}>1,200+ runners</span>{' '}already on the waitlist
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
