import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display font-bold text-4xl text-text-primary mb-8 tracking-tight">Terms of Service</h1>
        
        <div className="prose prose-lg text-text-muted leading-relaxed">
          <p className="mb-6">
            These Terms of Service ("Terms") govern your access to and use of Skyvo Technologies' website, products, and services ("Services"). Please read these Terms carefully, and contact us if you have any questions. By accessing or using our Services, you agree to be bound by these Terms and by our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">1. Use of Our Services</h2>
          <p className="mb-6">
            You may use our Services only if you can form a legally binding contract with Skyvo Technologies, and only in compliance with these Terms and all applicable laws. When you create your Skyvo Technologies account, you must provide us with accurate and complete information.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-6">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">3. Prohibited Activities</h2>
          <p className="mb-6">
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">4. Indemnification</h2>
          <p className="mb-6">
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses.
          </p>
        </div>
      </div>
    </div>
  )
}
