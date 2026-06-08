import { useState } from 'react'


export default function WaitlistForm({ compact = false }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!validate(email)) {
      setError('Enter a valid email address.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('server')
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: compact ? '20px 0' : '32px',
          border: '1px solid rgba(249,115,22,0.25)',
          borderRadius: 12,
          background: 'var(--accent-glow)',
          maxWidth: 480,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 900,
            fontSize: compact ? 22 : 28,
            color: 'var(--accent)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          YOU'RE IN.
        </div>
        <div
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 800,
            fontSize: compact ? 16 : 20,
            color: 'rgba(255,255,255,0.9)',
            letterSpacing: '0.02em',
            marginBottom: 16,
          }}
        >
          Welcome to the pack.
        </div>
        <p
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          Share with your crew. Bigger pack, bigger pot.
        </p>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: 'Renno', text: "Stake money on your weekly mileage. Keep it if you hit your goal, win the pool if others don't. Join the waitlist.", url: window.location.href })
            } else {
              navigator.clipboard?.writeText(window.location.href)
              alert('Link copied!')
            }
          }}
          className="btn-lime"
          style={{
            marginTop: 16,
            padding: '11px 28px',
            borderRadius: 6,
            fontSize: 13,
            letterSpacing: '0.07em',
          }}
        >
          Share the Link
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          maxWidth: 520,
        }}
      >
        {/* Email + button row on desktop */}
        <div
          className="form-row"
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError('') }}
            placeholder="your@email.com"
            className="input-dark"
            style={{
              flex: '1 1 200px',
              padding: '11px 14px',
              borderRadius: 6,
              fontSize: 15,
              minWidth: 0,
            }}
            required
            autoComplete="email"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-lime"
            style={{
              padding: '11px 24px',
              borderRadius: 6,
              fontSize: 13,
              letterSpacing: '0.07em',
              whiteSpace: 'nowrap',
              flex: '1 1 auto',
              width: '100%',
            }}
          >
            {loading ? 'Joining...' : 'Join the Waitlist'}
          </button>
        </div>

        {error && (
          <p style={{ color: 'var(--red)', fontSize: 13, margin: 0 }}>{error}</p>
        )}
      </div>
    </form>
  )
}
