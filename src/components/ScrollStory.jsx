import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollStory() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const phrases = gsap.utils.toArray('.story-phrase')
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.story-section',
          start: 'top top',
          end: `+=${phrases.length * 120}%`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        }
      })

      // We animate each phrase sequentially
      phrases.forEach((phrase, index) => {
        // Entrance
        tl.fromTo(phrase,
            { opacity: 0, y: 80, filter: 'blur(16px)' },
            { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5 }
          )
        
        // Exit (except for the last one if we want it to stay, but instructions say to exit to show progress)
        tl.to(phrase,
            { opacity: 0, y: -80, filter: 'blur(16px)', duration: 0.5 },
            '+=0.4' // hold on screen for a moment
          )
      })

      // Progress bar animation
      gsap.to('.story-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.story-section',
          start: 'top top',
          end: `+=${phrases.length * 120}%`,
          scrub: true,
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="story-section relative w-full h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Radial breathing background animation */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(0,71,255,0.08)_0%,transparent_60%)] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />

      <div className="relative z-10 text-center w-full px-4">
        <h2 className="story-phrase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full font-display font-bold text-5xl md:text-7xl lg:text-[100px] leading-tight text-text-primary will-change-transform">
          AI that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-indigo">thinks.</span>
        </h2>
        <h2 className="story-phrase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full font-display font-bold text-5xl md:text-7xl lg:text-[100px] leading-tight text-text-primary will-change-transform opacity-0">
          AI that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-indigo">plans.</span>
        </h2>
        <h2 className="story-phrase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full font-display font-bold text-5xl md:text-7xl lg:text-[100px] leading-tight text-text-primary will-change-transform opacity-0">
          AI that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-indigo">executes.</span>
        </h2>
        <h2 className="story-phrase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full font-display font-bold text-5xl md:text-7xl lg:text-[100px] leading-tight text-text-primary will-change-transform opacity-0">
          So your team can <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-indigo">lead.</span>
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 z-20">
        <div className="story-progress h-full bg-cobalt w-full origin-left scale-x-0 will-change-transform" />
      </div>
    </section>
  )
}
