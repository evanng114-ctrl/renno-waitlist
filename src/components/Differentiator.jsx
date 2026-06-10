import { useScrollReveal } from '../hooks/useScrollReveal'
import leagueScreen from '../assets/league.png'
import mapScreen from '../assets/map.png'

function PhoneFrame({ screen, rotation, zIndex = 1 }) {
  const btnBase = {
    position: 'absolute',
    borderRadius: 2,
  }
  return (
    <div style={{
      transform: `rotate(${rotation}deg)`,
      position: 'relative',
      zIndex,
      filter: 'drop-shadow(0 28px 48px rgba(0,0,0,0.45)) drop-shadow(0 6px 16px rgba(0,0,0,0.28))',
    }}>
      {/* Action button */}
      <div style={{ ...btnBase, left: -4, top: 56, width: 4, height: 16, background: 'linear-gradient(to right, #4a4a4c, #3a3a3c)', borderRadius: '3px 1px 1px 3px' }} />
      {/* Volume up */}
      <div style={{ ...btnBase, left: -4, top: 88, width: 4, height: 30, background: 'linear-gradient(to right, #4a4a4c, #3a3a3c)', borderRadius: '3px 1px 1px 3px' }} />
      {/* Volume down */}
      <div style={{ ...btnBase, left: -4, top: 126, width: 4, height: 30, background: 'linear-gradient(to right, #4a4a4c, #3a3a3c)', borderRadius: '3px 1px 1px 3px' }} />
      {/* Power / side button */}
      <div style={{ ...btnBase, right: -4, top: 104, width: 4, height: 46, background: 'linear-gradient(to left, #4a4a4c, #3a3a3c)', borderRadius: '1px 3px 3px 1px' }} />

      {/* Titanium outer shell */}
      <div style={{
        width: 215,
        height: 460,
        borderRadius: 48,
        background: 'linear-gradient(160deg, #484849 0%, #2e2e30 45%, #1e1e20 100%)',
        padding: '3px',
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.18),
          inset 0 1px 0 rgba(255,255,255,0.12),
          inset 0 -1px 0 rgba(0,0,0,0.4)
        `,
      }}>
        {/* Inner black bezel — the glass sits inside the metal ring */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: 45,
          background: '#000',
          padding: '7px',
          boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.06)',
        }}>
          {/* Screen */}
          <div style={{ width: '100%', height: '100%', borderRadius: 38, background: '#000', overflow: 'hidden', position: 'relative' }}>
            {/* Dynamic Island */}
            <div style={{
              position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
              width: 78, height: 22, borderRadius: 11,
              background: '#000',
              boxShadow: '0 0 0 1.5px #1a1a1a',
              zIndex: 10,
            }} />
            <img
              src={screen}
              alt="App screenshot"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function TwoPhonesDisplay() {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="reveal reveal-delay-1 diff-phone"
      style={{ position: 'relative', width: 430, height: 480, flexShrink: 0 }}
    >
      {/* Left phone — behind, tilted left */}
      <div className="phone-wrap-left" style={{ position: 'absolute', left: 0, top: 50, zIndex: 1 }}>
        <PhoneFrame screen={leagueScreen} rotation={-12} zIndex={1} />
      </div>
      {/* Right phone — front, tilted right */}
      <div className="phone-wrap-right" style={{ position: 'absolute', right: 0, top: 0, zIndex: 2 }}>
        <PhoneFrame screen={mapScreen} rotation={7} zIndex={2} />
      </div>
    </div>
  )
}

export default function Differentiator() {
  const heading = useScrollReveal()
  const sub = useScrollReveal()

  return (
    <section
      className="diff-section"
      style={{
        padding: 'clamp(24px, 3vw, 40px) 24px clamp(48px, 6vw, 72px)',
        background: 'var(--bg)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
      willChange: 'transform',
      }}
    >
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 200, background: 'radial-gradient(ellipse at bottom, rgba(249,115,22,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 56, background: 'linear-gradient(to bottom, #fff, transparent)', zIndex: 3, pointerEvents: 'none' }} />

      <div
        className="diff-row"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 64,
        }}
      >
        {/* Text */}
        <div style={{ flex: '1 1 300px', maxWidth: 460, textAlign: 'left' }}>
          <p
            className="reveal"
            style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}
          >
            How You Win
          </p>
          <h2
            ref={heading}
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 'clamp(36px, 4.5vw, 58px)', textTransform: 'uppercase', letterSpacing: '0.01em', lineHeight: 1.0, color: 'var(--text)', margin: '0 0 20px' }}
          >
            RUN YOUR MILES.<br />
            <span style={{ color: 'var(--accent)' }}>GET PAID.</span>
          </h2>
          <p
            ref={sub}
            className="reveal reveal-delay-2 diff-subtitle"
            style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.3vw, 15px)', lineHeight: 1.6, maxWidth: 380, margin: 0 }}
          >
            Hit your weekly goal and your stake is protected. Everyone who shows up shares the pot.
          </p>
        </div>

        <TwoPhonesDisplay />
      </div>
    </section>
  )
}
