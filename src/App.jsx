import { ContactModalProvider } from './context/ContactModalContext'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Services from './components/Services/Services'
import Cases from './components/Cases/Cases'
import Portfolio from './components/Portfolio/Portfolio'
import Reviews from './components/Reviews/Reviews'
import ConsultationCTA from './components/ConsultationCTA/ConsultationCTA'
import ContactModal from './components/ContactModal/ContactModal'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <ContactModalProvider>
      <a href="#main" className="skip-link">
        Перейти к содержимому
      </a>

      <Header />

      <main id="main">
        <div id="top" />
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Cases />
        <Portfolio />
        <Reviews />
        <ConsultationCTA />
      </main>

      <Footer />
      <ContactModal />
    </ContactModalProvider>
  )
}

export default App
