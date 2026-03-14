import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { techCategories } from '../data/techStack'
import TextType from './TextType'
import MouseSpotlight from './MouseSpotlight'

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(techCategories[0].id)

  const activeCategory = useMemo(() => {
    return techCategories.find(c => c.id === activeTab) || techCategories[0]
  }, [activeTab])

  // Extract all tech items for the marquee
  const allTechItems = useMemo(() => {
    return techCategories.flatMap(c => c.items.map(i => i.name))
  }, [])

  return (
    <section id="technologies" className="py-24 bg-white relative overflow-hidden">
      <MouseSpotlight glowColor="rgba(0, 71, 255, 0.04)" />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="text-center mb-16">
          <TextType 
            text="Technologies We Master"
            className="font-display font-bold text-4xl md:text-5xl tracking-tight text-text-primary mb-4 min-h-[1.5em]"
          />
          <p className="text-lg text-text-muted">
            We work with the latest and most powerful AI platforms
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === cat.id ? 'text-cobalt' : 'text-text-muted hover:text-text-primary hover:bg-gray-50'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-blue-50 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {activeCategory.items.map((item, idx) => (
                <div key={idx} className="group border-b border-gray-200 py-6 px-4 -mx-4 hover:bg-gray-50 hover:px-6 hover:-mx-6 transition-all duration-300 hover:border-cobalt">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-display font-bold text-lg text-text-primary">{item.name}</h4>
                    <span className="inline-flex px-2 py-1 bg-indigo/5 text-indigo text-xs font-semibold rounded-md border border-indigo/10">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    {item.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full flex overflow-x-hidden border-y border-gray-100 py-6 bg-off-white group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-off-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-off-white to-transparent z-10" />
        
        <div className="flex animate-[marquee_40s_linear_infinite] w-max select-none group-hover:[animation-play-state:paused]">
          {[...allTechItems, ...allTechItems].map((tech, idx) => (
            <div key={idx} className="px-6 mx-2 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-text-secondary whitespace-nowrap shadow-sm">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
