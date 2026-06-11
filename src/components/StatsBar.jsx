import { useCountUp } from '../hooks/useCountUp'

function Stat({ prefix = '', suffix = '', target, label, note }) {
  const { value, ref } = useCountUp(target)

  return (
    <div
      ref={ref}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 16px 40px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(36px, 6vw, 52px)',
          color: 'var(--accent)',
          lineHeight: 1,
          marginBottom: 8,
          letterSpacing: '-0.02em',
        }}
      >
        {prefix}{value}{suffix}
      </div>
      <div
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(13px, 1.8vw, 15px)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#FFFFFF',
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      {note && (
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.72)', letterSpacing: '0.04em' }}>
          {note}
        </div>
      )}
    </div>
  )
}

export default function StatsBar() {
  return (
    <section style={{ background: 'transparent', position: 'relative' }}>
      <div
        className="stats-row"
        style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'stretch' }}
      >
        <Stat prefix="$" target={0} label="Lost if you hit your goal" note="Your stake is always protected" />
        <Stat suffix="%" target={100} label="Of the pool goes to runners" note="No house cut. Ever." />
        <Stat target={1} label="Goal between you and your money" note="Hit it. Keep it." />
      </div>
    </section>
  )
}
