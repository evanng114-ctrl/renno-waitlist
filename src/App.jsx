import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import HowItWorks from './components/HowItWorks'
import PersonasSection from './components/PersonasSection'
import Differentiator from './components/Differentiator'
import FinalCTA from './components/FinalCTA'
import Integrations from './components/Integrations'
import Footer from './components/Footer'
import createLeagueBg from './assets/create-league-bg.jpg'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'clip' }}>
      <Navbar />
      <Hero />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${createLeagueBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.72) 100%)' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, #000, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, transparent, #F4F3F0)', pointerEvents: 'none' }} />
        <HowItWorks />
        <StatsBar />
      </div>
      <PersonasSection />
      <Differentiator />
      <FinalCTA />
      <Integrations />
      <Footer />
    </div>
  )
}
