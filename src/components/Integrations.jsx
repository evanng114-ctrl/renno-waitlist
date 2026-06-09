const LOGOS = [
  {
    name: 'Apple Health',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="health-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FC5C7D"/>
            <stop offset="100%" stopColor="#E8245A"/>
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="9" fill="url(#health-bg)"/>
        <path d="M20 29.5C13.5 25.5 8 20.5 8 15.2C8 12 10.5 9.5 13.8 9.5C16 9.5 17.8 10.6 20 13C22.2 10.6 24 9.5 26.2 9.5C29.5 9.5 32 12 32 15.2C32 20.5 26.5 25.5 20 29.5Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Garmin',
    svg: (
      <svg viewBox="0 0 88 28" width="88" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="'Arial', 'Helvetica', sans-serif" fontSize="24" fontWeight="700" fill="#007DC6" letterSpacing="-0.5">Garmin</text>
      </svg>
    ),
  },
  {
    name: 'Fitbit',
    svg: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="9" fill="#00B0B9"/>
        {/* Fitbit dot diamond pattern */}
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
    svg: (
      <svg viewBox="0 0 118 28" width="118" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fontFamily="'Arial Black', 'Arial', sans-serif" fontSize="22" fontWeight="900" fill="#0A0A0A" letterSpacing="2">WHOOP</text>
      </svg>
    ),
  },
]

export default function Integrations() {
  return (
    <section style={{ padding: '20px 24px', background: '#F5F4F1' }}>
      <div className="integrations-row" style={{ maxWidth: 760, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(16px, 4vw, 52px)', flexWrap: 'nowrap' }}>
        <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', flexShrink: 0 }}>Works with</span>
        {LOGOS.map(item => (
          <div key={item.name} title={item.name} style={{ display: 'flex', alignItems: 'center' }}>
            {item.svg}
          </div>
        ))}
      </div>
    </section>
  )
}
