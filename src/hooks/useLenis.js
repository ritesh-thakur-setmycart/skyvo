import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smooth: true,
      smoothTouch: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Intercept anchor clicks for smooth scrolling via Lenis
    const handleAnchorClick = (e) => {
      // Find the closest anchor tag in case we clicked on an inner element
      const anchor = e.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      // Only handle anchor links that start with /# or #
      if (href && (href.startsWith('#') || href.startsWith('/#'))) {
        const targetId = href.replace('/', '') // clean /# to #
        const targetElement = document.querySelector(targetId)
        
        if (targetElement) {
          e.preventDefault()
          lenis.scrollTo(targetElement, { offset: -50 }) // offset for navbar
        }
      }
    }

    document.documentElement.addEventListener('click', handleAnchorClick)

    return () => {
      document.documentElement.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      gsap.ticker.remove(tick)
    }
  }, [])
}
