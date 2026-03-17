import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 relative overflow-hidden">
      {/* Dynamic Colorful Background */}
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-[0%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob [animation-delay:2s] pointer-events-none" />
      <div className="absolute -bottom-32 left-[20%] w-[500px] h-[500px] bg-teal-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob [animation-delay:4s] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cobalt/10 text-cobalt text-sm font-semibold mb-4 border border-cobalt/20">Let's Connect</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-text-primary mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-indigo">Touch</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Ready to transform your business with Agentic AI? Choose your preferred way to reach out and let's start the conversation.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 w-full max-w-5xl"
        >
          {/* Email Card */}
          <motion.a 
            variants={itemVariants} 
            className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,71,255,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300 relative z-10">
              <Mail className="w-8 h-8 text-cobalt" />
            </div>
            <h3 className="font-display font-semibold text-2xl text-text-primary mb-3 relative z-10">Email Us</h3>
            <p className="text-text-muted mb-6 text-base relative z-10 flex-grow">Drop us a line anytime. We typically respond within 24 hours.</p>
            <span className="text-cobalt font-medium group-hover:text-indigo transition-colors flex items-center gap-2 relative z-10 mt-auto">
              info@skyvo.in <span className="text-xl leading-none">&rarr;</span>
            </span>
          </motion.a>

          {/* Phone Card */}
          <motion.a 
            href="tel:+919827744484"
            variants={itemVariants} 
            className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300 relative z-10">
              <Phone className="w-8 h-8 text-indigo" />
            </div>
            <h3 className="font-display font-semibold text-2xl text-text-primary mb-3 relative z-10">Call Us</h3>
            <p className="text-text-muted mb-6 text-base relative z-10 flex-grow">Mon-Fri, 9am to 6pm. Give us a ring to discuss your needs.</p>
            <span className="text-indigo font-medium group-hover:text-purple-600 transition-colors flex items-center gap-2 relative z-10 mt-auto">
              +91 9827744484 <span className="text-xl leading-none">&rarr;</span>
            </span>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a 
            href="https://wa.me/919827744484"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants} 
            className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(34,197,94,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-100 transition-all duration-300 relative z-10">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-2xl text-text-primary mb-3 relative z-10">WhatsApp</h3>
            <p className="text-text-muted mb-6 text-base relative z-10 flex-grow">Looking for a quick chat? Message us directly on WhatsApp.</p>
            <span className="text-green-600 font-medium group-hover:text-green-700 transition-colors flex items-center gap-2 relative z-10 mt-auto">
              Start Chat <span className="text-xl leading-none">&rarr;</span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
