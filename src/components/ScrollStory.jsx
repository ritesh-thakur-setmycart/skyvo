import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Brain, Cpu, Zap, Trophy, Layers, Network } from 'lucide-react'

const features = [
  {
    icon: <Brain className="w-16 h-16 md:w-20 md:h-20 text-cobalt" />,
    title: "AI that thinks.",
    description: "Our agents understand complex business context, process unstructured data, and apply deep logical reasoning beyond simple pattern matching.",
    bgColor: "bg-blue-50/80",
    borderColor: "border-blue-100"
  },
  {
    icon: <Cpu className="w-16 h-16 md:w-20 md:h-20 text-indigo" />,
    title: "AI that plans.",
    description: "Instead of following hardcoded rules, our systems dynamically construct multi-step execution strategies to reach your desired outcomes.",
    bgColor: "bg-indigo-50/80",
    borderColor: "border-indigo-100"
  },
  {
    icon: <Zap className="w-16 h-16 md:w-20 md:h-20 text-amber" />,
    title: "AI that executes.",
    description: "From interacting with APIs to making informed system changes, our agents execute tasks autonomously with robust built-in safety rails.",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-100"
  },
  {
    icon: <Network className="w-16 h-16 md:w-20 md:h-20 text-pink-500" />,
    title: "AI that integrates.",
    description: "Stop working in silos. Our agents seamlessly plug into your existing ecosystem of tools, databases, and third-party APIs from day one.",
    bgColor: "bg-pink-50/80",
    borderColor: "border-pink-100"
  },
  {
    icon: <Layers className="w-16 h-16 md:w-20 md:h-20 text-violet-500" />,
    title: "AI that scales.",
    description: "Deploy robust, enterprise-grade AI systems that effortlessly grow with your organization's evolving needs, data volume, and user base.",
    bgColor: "bg-violet-50/80",
    borderColor: "border-violet-100"
  },
  {
    icon: <Trophy className="w-16 h-16 md:w-20 md:h-20 text-emerald-500" />,
    title: "So your team can lead.",
    description: "Free your workforce from repetitive manual tasks, empowering your people to focus on strategy, innovation, and creative leadership.",
    bgColor: "bg-emerald-50/80",
    borderColor: "border-emerald-100"
  }
]

export default function ScrollStory() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine the active index based on scroll position
    const newIndex = Math.min(
      Math.floor(latest * features.length),
      features.length - 1
    )
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex)
    }
  })

  const handleFeatureClick = (index) => {
    // Allow users to instantly jump to the feature in the scroll container
    const container = containerRef.current
    if (container) {
      const rect = container.getBoundingClientRect()
      const absoluteTop = rect.top + window.scrollY
      const containerHeight = rect.height
      // Calculate position so the activeIndex becomes `index`
      const scrollTarget = absoluteTop + (index / features.length) * containerHeight + 10
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' })
    }
  }

  return (
    <section ref={containerRef} className="bg-white relative" style={{ height: `${features.length * 60}vh` }}>
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden py-12">
        
        <div className="text-center md:text-left mb-8 md:mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-cobalt/10 text-cobalt text-xs font-semibold mb-3 border border-cobalt/20">The Advantage</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-[56px] text-text-primary tracking-tight leading-tight">
            Experience the Agentic Workspace
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-stretch h-[60vh] lg:h-[65vh]">
          
          {/* Left Side: Tabs */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center gap-1 relative z-20">
            {features.map((feature, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={`text-left p-4 md:p-5 rounded-2xl transition-all duration-300 relative group overflow-hidden ${isActive ? 'bg-gray-50/80 shadow-sm border border-gray-100' : 'hover:bg-gray-50/50 border border-transparent'}`}
                >
                  {/* Progress Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden hidden lg:block">
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute inset-x-0 bottom-0 bg-cobalt w-full rounded-full"
                        style={{ top: 0 }}
                      />
                    )}
                  </div>

                  <div className="lg:pl-5">
                    <h3 className={`font-display font-semibold text-lg md:text-xl md:mb-1 transition-colors duration-300 ${isActive ? 'text-cobalt' : 'text-text-primary group-hover:text-cobalt/70'}`}>
                      {feature.title}
                    </h3>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden hidden lg:block"
                        >
                          <p className="text-sm md:text-base text-text-muted leading-relaxed pt-2">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Side: Visual Showcase */}
          <div className="w-full lg:w-[60%] h-full relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] flex items-center justify-center">
            
            {/* Background Grid Mesh */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent z-0 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center z-10"
              >
                <div className={`w-32 h-32 md:w-56 md:h-56 rounded-[2.5rem] ${features[activeIndex].bgColor} flex items-center justify-center border ${features[activeIndex].borderColor} shadow-inner mb-8 md:mb-10`}>
                  {features[activeIndex].icon}
                </div>
                {/* Description shows here on mobile, or just as visual on desktop */}
                <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-3 max-w-lg lg:hidden">
                  {features[activeIndex].title}
                </h3>
                <p className="text-base md:text-lg text-text-muted max-w-md lg:hidden">
                  {features[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  )
}
