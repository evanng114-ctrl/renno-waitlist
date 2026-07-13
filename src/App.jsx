import { Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorksScreens from './components/HowItWorksScreens'
import WhyRennoSection from './components/WhyRennoSection'
import PersonasSection from './components/PersonasSection'
import FinalCTA from './components/FinalCTA'
import Integrations from './components/Integrations'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Support from './pages/Support'

function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', overflowX: 'clip' }}>
      <Navbar />
      <Hero />
      <HowItWorksScreens />
      <WhyRennoSection />
      <PersonasSection />
      <FinalCTA />
      <Integrations />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  )
}
