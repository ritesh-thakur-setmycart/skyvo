import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display font-bold text-4xl text-text-primary mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="prose prose-lg text-text-muted leading-relaxed">
          <p className="mb-6">
            At Skyvo Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website entirely. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, and demographic information that you voluntarily give to us when you register with the Site.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">2. Use of Your Information</h2>
          <p className="mb-6">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to create and manage your account, deliver targeted advertising, and email you regarding your account or order.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">3. Disclosure of Your Information</h2>
          <p className="mb-6">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by Law or to Protect Rights, Third-Party Service Providers, and Business Transfers.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">4. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            Email: <a href="mailto:info@skyvo.in" className="text-cobalt">info@skyvo.in</a>
            <br />
            Phone: <a href="tel:+919827744484" className="text-cobalt">+91 9827744484</a>
          </p>
        </div>
      </div>
    </div>
  )
}
