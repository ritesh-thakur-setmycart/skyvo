import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="py-24 px-6 relative bg-white overflow-hidden">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto rounded-[32px] overflow-hidden relative"
      >
        {/* Background Mesh Gradient & Grid Pattern */}
        <div className="absolute inset-0 bg-black overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,71,255,0.8),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.8),transparent_50%)] opacity-50 mix-blend-screen" />
        </div>

        <div className="relative z-10 py-20 px-8 md:px-16 text-center shadow-xl shadow-cobalt/5">
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6">
            Ready to Build with Agentic AI?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Let's talk about your use case and build something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="px-8 py-3.5 bg-cobalt text-white rounded-full font-medium shadow-lg shadow-cobalt/25 hover:bg-indigo hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Schedule a Free Consultation
            </Link>
            <a 
              href="#services"
              className="px-8 py-3.5 bg-white text-text-primary rounded-full font-medium border border-gray-200 hover:border-text-primary hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
