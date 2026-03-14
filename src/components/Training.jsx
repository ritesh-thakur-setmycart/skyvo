import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Users } from 'lucide-react'
import { programs } from '../data/training'
import TextType from './TextType'
import MouseSpotlight from './MouseSpotlight'

gsap.registerPlugin(ScrollTrigger)

export default function Training() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.training-card', {
        onEnter: batch => {
          gsap.fromTo(batch, 
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', overwrite: true }
          )
        },
        start: 'top 85%',
        once: true
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="training" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <MouseSpotlight glowColor="rgba(245, 158, 11, 0.05)" />
      {/* Colorful glow & mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-amber opacity-10 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 m-auto h-[250px] w-[250px] rounded-full bg-cobalt opacity-10 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-full relative z-10" ref={containerRef}>
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <TextType 
            text="Corporate AI Training Programs"
            className="font-display font-bold text-4xl md:text-5xl tracking-tight text-text-primary mb-4 min-h-[3em] md:min-h-[1.5em]"
          />
          <p className="text-lg text-text-muted">
            Empower your workforce with practical, hands-on AI skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <TrainingCard key={program.id} program={program} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TrainingCard({ program }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div 
      className="training-card group border-t-2 border-gray-200 pt-8 pb-12 opacity-0 will-change-transform flex flex-col hover:border-cobalt transition-colors duration-500"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-amber/10 text-amber font-semibold text-xs rounded-full border border-amber/20">{program.duration}</span>
        <span className="px-3 py-1 bg-cobalt/10 text-cobalt font-semibold text-xs rounded-full border border-cobalt/20">{program.level}</span>
        <span className="px-3 py-1 bg-indigo/10 text-indigo font-semibold text-xs rounded-full border border-indigo/20">{program.format}</span>
      </div>

      <h3 className="font-display font-bold text-2xl text-text-primary mb-4">
        {program.title}
      </h3>

      <div className="flex items-center gap-2 text-sm text-text-muted font-medium mb-6">
        <Users className="w-4 h-4" />
        {program.audience}
      </div>

      <ul className="space-y-3 mb-6 flex-grow">
        {(isExpanded ? program.learns : program.learns.slice(0, 3)).map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-cobalt mt-0.5">•</span>
            <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-50 rounded-xl mb-6">
              <h4 className="font-medium text-text-primary text-sm mb-2">Outcome:</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                {program.outcome}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-sm font-medium text-cobalt hover:text-indigo transition-colors"
        >
          {isExpanded ? 'Show less' : 'Show all'}
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        <a 
          href="mailto:info@skyvo.in?subject=Training Inquiry" 
          className="px-5 py-2.5 bg-text-primary hover:bg-black text-white rounded-full text-sm font-medium transition-colors"
          onClick={(e) => {
            // UI-only form behavior block
            if (e.target.innerText.includes('Inquiry sent')) {
              e.preventDefault();
              return;
            }
            // For simple demo, just show mailto link behavior 
          }}
        >
          Enquire Now <span>&rarr;</span>
        </a>
      </div>
    </motion.div>
  )
}
