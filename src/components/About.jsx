import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextType from './TextType'
import MouseSpotlight from './MouseSpotlight'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.stat-number')
      
      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'))
        const suffix = counter.getAttribute('data-suffix') || ''
        
        // Count animation
        ScrollTrigger.create({
          trigger: counter,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2,
              ease: 'power3.out',
              snap: { innerHTML: 1 },
              onUpdate: function() {
                counter.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix
              }
            })
          }
        })
      })

      // Description reveal animation
      gsap.fromTo('.desc-p', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.desc-container',
            start: 'top 85%',
            once: true
          }
        }
      )
    }, statsRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <MouseSpotlight glowColor="rgba(0, 71, 255, 0.04)" />
      
      <div className="max-w-7xl mx-auto px-6 h-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Col - Image */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-[3/4] bg-gray-100 group">
            <div className="absolute inset-0 bg-cobalt mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" 
              alt="AI Abstract" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          </div>

          {/* Right Col - Body & Stats */}
          <div ref={statsRef}>
            <TextType 
              text="Your Trusted AI Transformation Partner"
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-12 min-h-[3em] md:min-h-0"
            />
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-gray-100 pb-12 mb-10">
              {[
                { value: 15, suffix: '+', label: 'Industries Served' },
                { value: 50, suffix: '+', label: 'AI Solutions Deployed' },
                { value: 10, suffix: 'x', label: 'Faster Time-to-Production' },
                { value: 40, suffix: '%', label: 'Avg. Cost Reduction' },
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div 
                    className="stat-number font-display font-bold text-4xl lg:text-5xl text-cobalt mb-2 group-hover:-translate-y-1 transition-transform"
                    data-target={stat.value}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="desc-container space-y-6 text-lg text-text-muted leading-relaxed">
              <p className="desc-p opacity-0 will-change-transform">
                At Skyvo Technologies, we don't just implement AI—we architect intelligent systems that transform how businesses operate. As specialists in Agentic AI, we create autonomous agents that can reason through complex problems, adapt to changing contexts, and execute multi-step workflows without constant supervision.
              </p>
              <p className="desc-p opacity-0 will-change-transform">
                Whether you're a startup looking to automate your first process or a growing enterprise seeking to scale with AI, we bring deep technical expertise and practical business understanding to every engagement. Our team has deployed AI solutions across 15+ industries, helping companies achieve measurable results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
