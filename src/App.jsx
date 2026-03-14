import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollStory from './components/ScrollStory'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Training from './components/Training'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ScrollStory />
      <About />
      <Services />
      <TechStack />
      <Training />
      <CTABanner />
      <Footer />
    </main>
  )
}
