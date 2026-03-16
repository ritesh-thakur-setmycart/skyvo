import Hero from '../components/Hero'
import ScrollStory from '../components/ScrollStory'
import About from '../components/About'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Training from '../components/Training'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollStory />
      <About />
      <Services />
      <TechStack />
      <Training />
      <CTABanner />
    </>
  )
}
