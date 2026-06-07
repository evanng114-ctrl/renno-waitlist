import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    number: '01',
    title: 'PICK YOUR RACE',
    description:
      'Choose a weekly mileage goal that matches your level and put your stake in. The higher the goal, the bigger the upside.',
  },
  {
    number: '02',
    title: 'HIT YOUR GOAL',
    description:
      "Clear the bar and your money is safe. No matter where you finish. Your goal protects you.",
  },
  {
    number: '03',
    title: 'SPLIT THE POT',
    description:
      "Everyone who falls short funds the runners who showed up. The pot splits evenly across everyone who hit their goal.",
  },
]

function StepCard({ step, delay }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${delay}`}
      style={{
        flex: 1,
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        minWidth: 0,
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900,
          fontSize: 48,
          color: 'var(--accent)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {step.number}
      </div>
      <div
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 800,
          fontSize: 17,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--text)',
        }}
      >
        {step.title}
      </div>
      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: 15,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {step.description}
      </p>
    </div>
  )
}

export default function HowItWorks() {
  const header = useScrollReveal()

  return (
    <section
      style={{
        padding: 'clamp(48px, 6vw, 72px) 24px',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          ref={header}
          className="reveal"
          style={{ marginBottom: 56, textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 16,
            }}
          >
            The Format
          </p>
          <h2
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(28px, 3vw, 38px)',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              color: 'var(--text)',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            HOW RENNO WORKS
          </h2>
        </div>

        <div
          className="cards-row"
          style={{
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
