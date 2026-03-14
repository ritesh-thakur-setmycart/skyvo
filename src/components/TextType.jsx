import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function TextType({ text, className }) {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clear initially
      textRef.current.innerHTML = ''
      
      // Smooth typing animation using GSAP TextPlugin
      gsap.to(textRef.current, {
        text: {
          value: text,
          // 'ease' none makes the typing perfectly smooth/linear
        },
        duration: Math.min(text.length * 0.04, 2.5),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        }
      })
    })

    return () => ctx.revert()
  }, [text])

  return (
    <h2 className={className} ref={containerRef}>
      <span ref={textRef} className="opacity-100">{text}</span>
      {/* Cursor is hidden as requested */}
    </h2>
  )
}
