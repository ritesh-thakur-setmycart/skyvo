import { Mail, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col items-center bg-gray-50 px-6 relative overflow-hidden">
      {/* Dynamic Colorful Background */}
      <div className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-[0%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob [animation-delay:2s] pointer-events-none" />
      <div className="absolute -bottom-32 left-[20%] w-[500px] h-[500px] bg-teal-400/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob [animation-delay:4s] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
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
            Have a project in mind or want to learn more about how Agentic AI can transform your business? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-5 gap-12 items-start"
        >
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100/50 transition-all duration-300">
                <Mail className="w-6 h-6 text-cobalt" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">Email Us</h3>
              <p className="text-text-muted mb-4 text-sm">Drop us a line and we'll get back to you as soon as possible.</p>
              <a href="mailto:info@skyvo.in" className="text-cobalt font-medium hover:text-indigo transition-colors flex items-center gap-2 mt-auto">
                info@skyvo.in <span className="text-xl leading-none">&rarr;</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100/50 transition-all duration-300">
                <Phone className="w-6 h-6 text-indigo" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary mb-2">Call Us</h3>
              <p className="text-text-muted mb-4 text-sm">Mon-Fri from 9am to 6pm. We are here to help.</p>
              <a href="tel:+919827744484" className="text-indigo font-medium hover:text-purple-600 transition-colors flex items-center gap-2 mt-auto">
                +91 9827744484 <span className="text-xl leading-none">&rarr;</span>
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-3 bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl pointer-events-none" />
            <h2 className="font-display font-bold text-3xl text-text-primary mb-8 relative z-10">Send us a Message</h2>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-primary" htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" className="w-full px-5 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20 transition-all focus:bg-white" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-primary" htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-5 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20 transition-all focus:bg-white" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-primary" htmlFor="email">Email Address</label>
                <input type="email" id="email" className="w-full px-5 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20 transition-all focus:bg-white" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-primary" htmlFor="message">Message</label>
                <textarea id="message" rows="5" className="w-full px-5 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20 transition-all focus:bg-white resize-none" placeholder="Tell us about your project or inquiry..."></textarea>
              </div>
              <motion.button 
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cobalt to-indigo text-white rounded-xl font-semibold shadow-lg shadow-indigo/25 hover:shadow-xl hover:shadow-indigo/30 transition-all flex items-center justify-center gap-2 mt-4"
              >
                Send Message <Send className="w-4 h-4 ml-1" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
