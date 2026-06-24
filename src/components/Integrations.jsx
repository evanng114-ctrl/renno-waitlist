import { motion } from 'framer-motion'

const INTEGRATIONS = [
  {
    name: 'Apple Health',
    label: 'Auto-Sync',
    description: 'Every run on iPhone, Apple Watch, or any GPS app writes to Health. Renno reads it the moment you finish. No manual entry, ever.',
    svg: (
      <svg viewBox="0 0 40 40" width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="ah-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FC5C7D"/><stop offset="100%" stopColor="#E8245A"/></linearGradient></defs>
        <rect width="40" height="40" rx="9" fill="url(#ah-grad)"/>
        <path d="M20 29.5C13.5 25.5 8 20.5 8 15.2C8 12 10.5 9.5 13.8 9.5C16 9.5 17.8 10.6 20 13C22.2 10.6 24 9.5 26.2 9.5C29.5 9.5 32 12 32 15.2C32 20.5 26.5 25.5 20 29.5Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Garmin',
    label: 'GPS + Heart Rate',
    description: 'Pace, distance, and live GPS route from your Garmin device sync automatically via Apple Health.',
    svg: (
      <svg viewBox="0 0 88 28" width={88} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="'Arial', 'Helvetica', sans-serif" fontSize="24" fontWeight="700" fill="#007DC6" letterSpacing="-0.5">Garmin</text>
      </svg>
    ),
  },
  {
    name: 'Fitbit',
    label: 'Workout Sync',
    description: 'Fitbit activities flow through Apple Health and straight into your Renno leaderboard.',
    svg: (
      <svg viewBox="0 0 40 40" width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="9" fill="#00B0B9"/>
        <circle cx="20" cy="11" r="2.5" fill="white"/>
        <circle cx="14" cy="15" r="2.2" fill="white" opacity="0.85"/>
        <circle cx="26" cy="15" r="2.2" fill="white" opacity="0.85"/>
        <circle cx="20" cy="19" r="2.5" fill="white" opacity="0.7"/>
        <circle cx="14" cy="23" r="2.2" fill="white" opacity="0.5"/>
        <circle cx="26" cy="23" r="2.2" fill="white" opacity="0.5"/>
        <circle cx="20" cy="27" r="2.5" fill="white" opacity="0.3"/>
      </svg>
    ),
  },
  {
    name: 'WHOOP',
    label: 'Strain + Recovery',
    description: 'WHOOP strain and recovery scores sync to Health and count toward your weekly goal.',
    svg: (
      <svg viewBox="0 0 118 28" width={118} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="'Arial Black', 'Arial', sans-serif" fontSize="22" fontWeight="900" fill="#0A0A0A" letterSpacing="2">WHOOP</text>
      </svg>
    ),
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

const headerVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

export default function Integrations() {
  return (
    <section style={{ padding: 'clamp(56px, 6vw, 80px) 24px', background: '#F5F4F1' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          variants={headerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <h2 style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(28px, 3vw, 40px)', textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'var(--text)', margin: '0 0 14px', lineHeight: 1.1 }}>
            ZERO SETUP.<br />EVERY RUN COUNTED.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 460, margin: '0 auto', lineHeight: 1.6 }}>
            Renno reads from Apple Health automatically. Run with anything. It all syncs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}
        >
          {INTEGRATIONS.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariant}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)', borderColor: 'rgba(249,115,22,0.4)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 12, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div style={{ minHeight: 40, display: 'flex', alignItems: 'center' }}>{item.svg}</div>
              <div>
                <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 6px' }}>{item.label}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p style={{ textAlign: 'center', marginTop: 32, fontFamily: "'Archivo', sans-serif", fontSize: 13, color: 'var(--text-dim)', letterSpacing: '0.02em' }}>
          Compatible with any app that writes to Apple Health: Nike Run Club, Runkeeper, MapMyRun, and more.
        </p>
      </div>
    </section>
  )
}
