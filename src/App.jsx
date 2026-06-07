import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import HowItWorks from './components/HowItWorks'
import Differentiator from './components/Differentiator'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Differentiator />
      <FinalCTA />
      <Footer />
    </div>
  )
}
