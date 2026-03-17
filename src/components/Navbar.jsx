import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
// Hexagon removed from lucide-react imports
import { Link } from 'react-router-dom'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(navRef.current, {
        height: '56px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.025)',
        scrollTrigger: {
          trigger: document.body,
          start: '80px top',
          end: '120px top',
          scrub: true,
        }
      })
    })
    return () => ctx.revert()
  }, [])

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Technologies', href: '/#technologies' },
    { name: 'Training', href: '/#training' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center transition-colors"
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Skyvo Logo" className="w-48 h-48 object-contain group-hover:rotate-12 transition-transform duration-300" />
          {/* <span className="font-display font-bold text-xl tracking-tight text-text-primary">
            Skyvo Technologies
          </span> */}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-sm text-text-primary hover:text-cobalt transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 25px -5px rgba(0, 71, 255, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex relative overflow-hidden group rounded-full"
        >
          <Link to="/contact" className="flex items-center justify-center px-6 py-2.5 bg-cobalt text-white rounded-full font-medium text-sm">
            <span className="relative z-10 flex items-center gap-2">
              Get Started <span>&rarr;</span>
            </span>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Link>
        </motion.div>

        {/* Mobile menu button could go here - keeping it simple per instructions */}
      </div>
    </nav>
  )
}
