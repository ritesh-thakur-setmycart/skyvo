import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

export default function TypewriterHeading({ text, className }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll('.word')
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          words.forEach((wordEl, wordIndex) => {
            const chars = wordEl.querySelectorAll('.char')
            chars.forEach((charEl, charIndex) => {
              const original = charEl.getAttribute('data-char')
              let iterations = 0
              const maxIterations = 5 + Math.floor(Math.random() * 5)
              
              // Base delay per word + small delay per char
              const delay = (wordIndex * 150) + (charIndex * 30)

              setTimeout(() => {
                gsap.to(charEl, { opacity: 1, duration: 0.1 })
                // Also give a tiny Y slide effect
                gsap.fromTo(charEl, { y: 10 }, { y: 0, duration: 0.2, ease: "power2.out" })
                
                const interval = setInterval(() => {
                  if (iterations >= maxIterations) {
                    clearInterval(interval)
                    charEl.innerText = original
                  } else {
                    charEl.innerText = CHARS[Math.floor(Math.random() * CHARS.length)]
                    iterations++
                  }
                }, 30)
              }, delay)
            })
          })
        }
      })
    })

    return () => ctx.revert()
  }, [text])

  const words = text.split(' ')

  return (
    <h2 className={className} ref={containerRef}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="word inline-block mr-[0.25em] whitespace-nowrap">
          {word.split('').map((char, cIdx) => (
            <span key={cIdx} data-char={char} className="char opacity-0 inline-block min-w-[0.3em] overflow-hidden text-center">
              {char}
            </span>
          ))}
        </span>
      ))}
    </h2>
  )
}
