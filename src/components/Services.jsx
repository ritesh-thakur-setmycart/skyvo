import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bot, Workflow, MessageSquare, Map as MapIcon, GraduationCap } from 'lucide-react'
import { services } from '../data/services'
import TextType from './TextType'
import MouseSpotlight from './MouseSpotlight'

gsap.registerPlugin(ScrollTrigger)

const IconMap = {
  Bot,
  Workflow,
  MessageSquare,
  Map: MapIcon,
  GraduationCap
}

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.service-card', {
        onEnter: batch => {
          gsap.fromTo(batch, 
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out', overwrite: true }
          )
        },
        start: 'top 85%',
        once: true
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="py-24 bg-[#FAFAFA] relative border-y border-gray-100 overflow-hidden group/section">
      <MouseSpotlight glowColor="rgba(79, 70, 229, 0.05)" />
      {/* Dynamic Colorful Background */}
      <div className="absolute top-0 left-[-10%] w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:2s] pointer-events-none" />
      <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:4s] pointer-events-none" />
      
      {/* Grid Pattern Add-on */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 h-full relative z-10" ref={containerRef}>
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <TextType 
            text="What We Build For You"
            className="font-display font-bold text-4xl md:text-5xl tracking-tight text-text-primary mb-4 min-h-[1.5em]"
          />
          <p className="text-lg text-text-muted">
            End-to-end AI solutions engineered for real business outcomes
          </p>
        </div>

        {/* CSS Grid for Layout: 3 cols top, 2 cols centered bottom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = IconMap[service.icon]
            // Center the last two in a 3-col grid effectively by manipulating spanning/order if needed
            // For simplicity, we just flow them, or use a manual wrap. 
            // The prompt says "3-column top row + 2-column centered bottom row"
            const isBottomRow = index >= 3
            return (
              <motion.div
                key={service.id}
                className={`service-card group flex flex-col pt-8 pb-10 px-6 opacity-0 will-change-transform border-t-2 border-gray-200 hover:border-cobalt transition-colors duration-500 bg-transparent hover:bg-white/50 ${isBottomRow && index === 3 ? 'lg:col-start-1 lg:col-span-1 lg:translate-x-1/2' : ''} ${isBottomRow && index === 4 ? 'lg:col-start-2 lg:col-span-1 lg:translate-x-1/2' : ''}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center mb-6">
                  {Icon && <Icon className="w-7 h-7 text-cobalt" strokeWidth={1.5} />}
                </div>
                
                <h3 className="font-display font-bold text-2xl text-text-primary mb-4 leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-gray-100 rounded-lg text-xs font-medium text-text-secondary shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
