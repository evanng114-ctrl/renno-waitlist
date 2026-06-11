import { useState, useEffect, useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp'

const STATS = [
  { prefix: '$', target: 0, suffix: '', label: 'Lost if you hit your goal', note: 'Your stake is always protected' },
  { prefix: '', target: 100, suffix: '%', label: 'Of the pool goes to runners', note: 'No house cut. Ever.' },
  { prefix: '', target: 1, suffix: '', label: 'Goal between you and your money', note: 'Hit it. Keep it.' },
]

function StatItem({ stat, isActive, onClick }) {
  const { value, ref } = useCountUp(stat.target)
  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        flex: 1,
        textAlign: 'center',
        padding: '28px 16px 24px',
        cursor: 'pointer',
        transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isActive ? 1 : 0.38,
        transform: isActive ? 'scale(1.14) translateY(-6px)' : 'scale(0.86)',
      }}
    >
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(40px, 6vw, 62px)',
        color: 'var(--accent)',
        lineHeight: 1,
        marginBottom: 10,
        letterSpacing: '-0.02em',
      }}>
        {stat.prefix}{value}{stat.suffix}
      </div>
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(12px, 1.5vw, 14px)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: '#FFFFFF',
        marginBottom: 6,
      }}>
        {stat.label}
      </div>
      <div style={{
        fontSize: 12,
        color: 'rgba(255,255,255,0.72)',
        letterSpacing: '0.04em',
        transition: 'opacity 0.4s ease',
        opacity: isActive ? 1 : 0,
        height: isActive ? 'auto' : 0,
        overflow: 'hidden',
      }}>
        {stat.note}
      </div>
    </div>
  )
}

export default function StatsBar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(a => (a + 1) % STATS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{ background: 'transparent', position: 'relative' }}>
      <div
        className="stats-row"
        style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center' }}
      >
        {STATS.map((stat, i) => (
          <StatItem key={i} stat={stat} isActive={active === i} onClick={() => setActive(i)} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, paddingBottom: 28 }}>
        {STATS.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: active === i ? 22 : 6,
              height: 6,
              borderRadius: 3,
              background: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
