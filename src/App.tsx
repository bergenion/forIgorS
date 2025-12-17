import { Header } from './components/Layout/Header'
import { Footer } from './components/Layout/Footer'
import { HeroSection } from './components/sections/Hero/Hero'
import { HeatExchangersSection } from './components/sections/HeatExchangers/HeatExchangers'
import { BtpSection } from './components/sections/Btp/Btp'
import { PumpingSection } from './components/sections/Pumping/Pumping'
import { CatalogSection } from './components/sections/Catalog/Catalog'
import { CalculatorSection } from './components/sections/Calculator/Calculator'
import { BenefitsSection } from './components/sections/Benefits/Benefits'
import { DeliverySection } from './components/sections/Delivery/Delivery'
import { WorkflowSection } from './components/sections/Workflow/Workflow'
import './App.scss'

function App() {
  return (
    <div className="vtg-page">
      <Header />
      <main className="vtg-page__main">
        <HeroSection />
        <HeatExchangersSection />
        <BtpSection />
        <PumpingSection />
        <CatalogSection />
        <CalculatorSection />
        <BenefitsSection />
        <DeliverySection />
        <WorkflowSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

