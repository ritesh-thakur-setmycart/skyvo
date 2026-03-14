import { useState, useEffect, useRef } from 'react'

export default function MouseSpotlight({ 
  className = '',
  glowColor = 'rgba(0, 71, 255, 0.06)',
  size = 800
}) {
  const divRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const parent = divRef.current?.parentElement
    if (!parent) return

    // Ensure parent has relative positioning so the inset-0 works properly
    const computedStyle = getComputedStyle(parent)
    if (computedStyle.position === 'static') {
      parent.style.position = 'relative'
    }

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect()
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    const handleMouseEnter = () => setOpacity(1)
    const handleMouseLeave = () => setOpacity(0)

    parent.addEventListener('mousemove', handleMouseMove)
    parent.addEventListener('mouseenter', handleMouseEnter)
    parent.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove)
      parent.removeEventListener('mouseenter', handleMouseEnter)
      parent.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div 
      ref={divRef}
      className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ${className}`}
      style={{
        opacity,
        background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`
      }}
    />
  )
}
