import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col items-center bg-gray-50 px-6 relative overflow-hidden">
      {/* Dynamic Colorful Background */}
      <div className="absolute top-[0%] left-[-10%] w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none" />
      <div className="absolute top-[0%] right-[-10%] w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:2s] pointer-events-none" />
      <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:4s] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl text-text-primary mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-text-muted">
            Have a project in mind or want to learn more about how Agentic AI can transform your business? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-cobalt" />
            </div>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-2">Email Us</h3>
            <a href="mailto:info@skyvo.in" className="text-text-muted hover:text-cobalt transition-colors">info@skyvo.in</a>
            <a href="mailto:hello@skyvo.in" className="text-text-muted hover:text-cobalt transition-colors">hello@skyvo.in</a>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-cobalt" />
            </div>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-2">Call Us</h3>
            <a href="tel:+919876543210" className="text-text-muted hover:text-cobalt transition-colors">+91 98765 43210</a>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-cobalt" />
            </div>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-2">Visit Us</h3>
            <p className="text-text-muted">Bhopal, MP, India, 462022</p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-text-primary mb-8 text-center">Send us a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2" htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-colors" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2" htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2" htmlFor="email">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-colors" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2" htmlFor="message">Message</label>
              <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full py-4 bg-cobalt text-white rounded-xl font-medium hover:bg-indigo transition-colors flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
