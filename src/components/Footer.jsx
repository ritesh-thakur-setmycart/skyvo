import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Hexagon, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 - Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Hexagon className="w-6 h-6 text-cobalt fill-cobalt/20 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-display font-bold text-xl tracking-tight text-text-primary">
                Skyvo Technologies
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Architecting intelligent systems that transform how businesses operate through Agentic AI.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61575697155956" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-muted hover:text-cobalt hover:border-cobalt transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://www.instagram.com/skyvo.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-muted hover:text-cobalt hover:border-cobalt transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/company/107306556" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-muted hover:text-cobalt hover:border-cobalt transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/#services' },
                { name: 'Contact', path: '/#contact' }
              ].map((link, i) => (
                <li key={i}>
                  {link.path.startsWith('/') && !link.path.includes('#') ? (
                    <Link to={link.path} className="text-sm text-text-muted hover:text-cobalt transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.path} className="text-sm text-text-muted hover:text-cobalt transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                'Agentic AI Systems Development',
                'AI-Powered Process Automation',
                'Next-Generation Conversational AI',
                'AI Readiness & Strategic Planning',
                'Corporate AI Training Programs'
              ].map((link, i) => (
                <li key={i}>
                  <a href="/#services" className="text-sm text-text-muted hover:text-cobalt transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-display font-semibold text-text-primary mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-text-muted mb-8">
              <li><a href="mailto:info@skyvo.in" className="hover:text-cobalt transition-colors">info@skyvo.in</a></li>
              <li><a href="mailto:hello@skyvo.in" className="hover:text-cobalt transition-colors">hello@skyvo.in</a></li>
              <li><a href="tel:+919876543210" className="hover:text-cobalt transition-colors">+91 98765 43210</a></li>
              <li>Bhopal, MP, India, 462022</li>
            </ul>

            {/* Newsletter UI */}
            <div>
              <h5 className="text-sm font-semibold text-text-primary mb-3">Newsletter</h5>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  required
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cobalt focus:ring-1 focus:ring-cobalt transition-colors"
                />
                <button 
                  type="submit"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${subscribed ? 'bg-green-100 text-green-700' : 'bg-text-primary text-white hover:bg-black'}`}
                >
                  {subscribed ? '✓ Subscribed!' : 'Subscribe \u2192'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Skyvo Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
