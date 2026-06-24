import { motion } from 'framer-motion'
import WaitlistForm from './WaitlistForm'
import joinLeagueBg from '../assets/join-league-bgnd.jpeg'

const TESTIMONIALS = [
  { quote: "When money's on the line, you show up. No excuses.", name: 'Marcus T.', detail: '22 mi/wk avg', initials: 'MT', avatarBg: '#3a7bd5' },
  { quote: "Been saying I'd run more for years. This might actually do it.", name: 'Jordan K.', detail: '18 mi/wk avg', initials: 'JK', avatarBg: '#e09a52' },
  { quote: "My goals, my pace, my money. Simple.", name: 'Sara L.', detail: '30 mi/wk avg', initials: 'SL', avatarBg: '#a78bfa' },
  { quote: "Finally something worth getting off the couch for.", name: 'Priya S.', detail: '35 mi/wk avg', initials: 'PS', avatarBg: '#e05252' },
  { quote: "Putting stakes on my miles is going to change everything.", name: 'Alex M.', detail: '28 mi/wk avg', initials: 'AM', avatarBg: '#52c4a0' },
  { quote: "Nothing motivates like skin in the game.", name: 'Chris R.', detail: '25 mi/wk avg', initials: 'CR', avatarBg: '#f472b6' },
  { quote: "I've tried every running app. None of them made me actually run.", name: 'Tanya B.', detail: '20 mi/wk avg', initials: 'TB', avatarBg: '#60a5fa' },
  { quote: "The accountability is built right in. Love it.", name: 'Derek W.', detail: '32 mi/wk avg', initials: 'DW', avatarBg: '#34d399' },
  { quote: "Finally an app that bets on me as much as I bet on myself.", name: 'Mei L.', detail: '27 mi/wk avg', initials: 'ML', avatarBg: '#fbbf24' },
  { quote: "Set it, run it, earn it back. That's the whole thing.", name: 'Raj P.', detail: '40 mi/wk avg', initials: 'RP', avatarBg: '#f87171' },
]

const spring = { type: 'spring', stiffness: 80, damping: 20 }

const centerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring },
}

function TestimonialTicker() {
  return (
    <div className="rmq-wrap" style={{ overflow: 'hidden', width: '100%' }}>
      <div className="rmq-track">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
          <div key={i} className="rmq-card">
            <div className="rmq-stars">★★★★★</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: item.avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 10, color: '#fff', flexShrink: 0 }}>
                {item.initials}
              </div>
              <div>
                <p className="rmq-q">"{item.quote}"</p>
                <div className="rmq-name">{item.name}</div>
                <div className="rmq-meta">{item.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FinalCTA() {
  return (
    <section className="cta-section" style={{ padding: 'clamp(48px, 5vw, 64px) 24px', background: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: `url(${joinLeagueBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.82) 100%)' }} />
      <div className="cta-top-blend" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 140, background: 'linear-gradient(to bottom, #DDD7CB 0%, rgba(221,215,203,0.85) 15%, rgba(221,215,203,0.5) 40%, rgba(221,215,203,0.18) 65%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />
      <div className="cta-bottom-blend" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 52, background: 'linear-gradient(to bottom, transparent 0%, rgba(244,243,240,0.4) 50%, rgba(244,243,240,0.85) 80%, #F4F3F0 100%)', zIndex: 1, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          style={{ marginBottom: 36 }}
        >
          <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginBottom: 18 }}>
            What People Are Saying
          </p>
          <TestimonialTicker />
        </motion.div>

        {/* Center CTA box */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            className="cta-center-box"
            variants={centerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            style={{ width: '100%', maxWidth: 800, border: '1px solid rgba(249,115,22,0.35)', borderRadius: 16, padding: '40px 48px', background: 'rgba(0,0,0,0.32)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 400, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div className="cta-box-inner" style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
              {/* Left: text */}
              <div style={{ flex: '1 1 0', minWidth: 0 }}>
                <motion.p variants={fadeUp} style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>Waitlist Exclusive</motion.p>
                <motion.h2 variants={fadeUp} style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 3.2vw, 42px)', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.0, color: '#FFFFFF', margin: '0 0 14px' }}>
                  FIRST RACE<br />IS ON <span style={{ color: 'var(--accent)' }}>US.</span>
                </motion.h2>
                <motion.p variants={fadeUp} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  Your first entry is on us. No card, no catch. Just run.
                </motion.p>
              </div>
              {/* Right: form */}
              <div style={{ flex: '1 1 0', minWidth: 0 }}>
                <motion.div variants={fadeUp}>
                  <WaitlistForm compact />
                </motion.div>
                <p style={{ marginTop: 10, color: 'rgba(255,255,255,0.3)', fontSize: 11, letterSpacing: '0.02em' }}>No spam. We'll only reach out when it's time to run.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
