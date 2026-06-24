import { useState, useEffect } from 'react'
import { useCountUp } from '../hooks/useCountUp'

const STATS = [
  { prefix: '$', target: 0, suffix: '', label: 'Lost if you hit your goal', note: 'Your stake is always protected' },
  { prefix: '', target: 100, suffix: '%', label: 'Of the pool goes to runners', note: 'No house cut. Ever.' },
  { prefix: '', target: 1, suffix: '', label: 'Goal between you and your money', note: 'Hit it. Keep it.' },
]

// 6-item track: [2,0,1,2,0,1]
// step 0→1→2→3 (animated), then 3→0 (instant snap — same visual)
// Each item is 1/6 of track = 33.33% of visible container
const TRACK = [STATS[2], STATS[0], STATS[1], STATS[2], STATS[0], STATS[1]]
const TRACK_SCALE = TRACK.length / 3 // = 2 (track is 200% of container)

function TrackItem({ stat, isCenter }) {
  const { value, ref } = useCountUp(stat.target)
  return (
    <div
      ref={ref}
      style={{
        width: `${100 / TRACK.length}%`, // 16.67% of track = 33.33% of container
        flexShrink: 0,
        textAlign: 'center',
        padding: '28px 12px 24px',
        transition: 'opacity 0.55s ease, transform 0.55s cubic-bezier(0.4,0,0.2,1)',
        opacity: isCenter ? 1 : 0.35,
        transform: isCenter ? 'scale(1.15) translateY(-8px)' : 'scale(0.82)',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(38px, 5.5vw, 60px)',
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
        fontSize: 'clamp(11px, 1.4vw, 13px)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--text)',
        marginBottom: 5,
      }}>
        {stat.label}
      </div>
      <div style={{
        fontSize: 11,
        color: 'var(--text-muted)',
        letterSpacing: '0.04em',
        opacity: isCenter ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        {stat.note}
      </div>
    </div>
  )
}

export default function StatsBar() {
  const [step, setStep] = useState(0)
  const [animate, setAnimate] = useState(true)

  // Auto-advance every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true)
      setStep(s => s + 1) // 0→1→2→3
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // When step hits 3, snap back to 0 after transition completes (seamless: same visual)
  useEffect(() => {
    if (step === 3) {
      const id = setTimeout(() => {
        setAnimate(false)
        setStep(0)
      }, 650)
      return () => clearTimeout(id)
    }
  }, [step])

  // Re-enable animation after snap
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
    }
  }, [animate])

  const centerTrackIndex = step + 1
  // translateX as % of track: -(step * 100/3) / TRACK_SCALE = -(step * 100) / (3 * TRACK_SCALE)
  const translatePct = -(step * 100) / (3 * TRACK_SCALE)

  const activeDot = step % 3

  return (
    <section style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        display: 'flex',
        width: `${TRACK_SCALE * 100}%`,
        transform: `translateX(${translatePct}%)`,
        transition: animate ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
      }}>
        {TRACK.map((stat, i) => (
          <TrackItem key={i} stat={stat} isCenter={i === centerTrackIndex} />
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, paddingBottom: 28 }}>
        {STATS.map((_, i) => (
          <div
            key={i}
            onClick={() => { setAnimate(true); setStep(i) }}
            style={{
              width: activeDot === i ? 22 : 6,
              height: 6,
              borderRadius: 3,
              background: activeDot === i ? 'var(--accent)' : 'rgba(0,0,0,0.18)',
              cursor: 'pointer',
              transition: 'all 0.35s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
