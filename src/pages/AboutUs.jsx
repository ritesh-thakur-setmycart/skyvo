import { Hexagon, Target, Lightbulb, Shield, Zap, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="absolute top-0 right-[-10%] w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob pointer-events-none" />
        <div className="absolute top-0 left-[-10%] w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:2s] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mx-auto mb-8">
            <Hexagon className="w-8 h-8 text-cobalt" />
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-text-primary mb-6 tracking-tight">
            About Skyvo Technologies
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-3xl mx-auto">
            We are architecting intelligent systems that transform how businesses operate through Agentic AI. 
            Our mission is to build robust, scalable, and autonomous solutions that solve complex challenges.
          </p>
        </div>
      </section>

      {/* Our Story / Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">
              Our Vision for the Future
            </h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                At Skyvo Technologies, we believe that the next era of computing belongs to Agentic AI—systems that don't just answer questions, but take intelligent actions to achieve complex goals autonomously.
              </p>
              <p>
                We started with a single premise: businesses process too much information manually. By leveraging advanced frameworks like LangChain, CrewAI, and AutoGen, we build digital workforces that integrate seamlessly into your existing operations.
              </p>
              <p>
                Our goal is to liberate human potential by automating the mundane, so your team can focus on what truly matters: strategy, creativity, and connection.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-display font-bold text-4xl text-cobalt mb-2">50+</h4>
              <p className="text-text-muted font-medium">Enterprise Clients</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-12">
              <h4 className="font-display font-bold text-4xl text-indigo mb-2">1M+</h4>
              <p className="text-text-muted font-medium">Tasks Automated</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 -mt-6">
              <h4 className="font-display font-bold text-4xl text-amber mb-2">99%</h4>
              <p className="text-text-muted font-medium">System Uptime</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-6">
              <h4 className="font-display font-bold text-4xl text-text-primary mb-2">24/7</h4>
              <p className="text-text-muted font-medium">Intelligent Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              The principles that guide our work, our partnerships, and the systems we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-cobalt" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-4">Relentless Innovation</h3>
              <p className="text-text-muted leading-relaxed">Pushing the boundaries of what's possible with multi-agent workflows and cutting-edge large language models to stay ahead of the curve.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-4">Enterprise Reliability</h3>
              <p className="text-text-muted leading-relaxed">Building production-ready, secure systems that you can trust implicitly to run your mission-critical workflows day in and day out.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-4">Measurable Impact</h3>
              <p className="text-text-muted leading-relaxed">We don't do technology for technology's sake. We focus solely on solutions that deliver clear ROI and tangible business improvements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-display font-bold text-cobalt">1</div>
              <div>
                <h4 className="font-display font-bold text-xl text-text-primary mb-2">Discovery & Assessment</h4>
                <p className="text-text-muted">We deeply analyze your business processes to identify where AI can create the most leverage and value.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-display font-bold text-cobalt">2</div>
              <div>
                <h4 className="font-display font-bold text-xl text-text-primary mb-2">Architectural Design</h4>
                <p className="text-text-muted">Designing scalable multi-agent systems tailored specifically to your data, workflows, and security requirements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-display font-bold text-cobalt">3</div>
              <div>
                <h4 className="font-display font-bold text-xl text-text-primary mb-2">Deployment & Scaling</h4>
                <p className="text-text-muted">Seamless integration into your current tech stack with continuous monitoring, refinement, and scaling operations.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">
              How We Work
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              We take a strategic, engineering-first approach to AI adoption. Our methodology ensures that we're passing the experimental phase and building robust systems that integrate smoothly into real-world business environments.
            </p>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-4">
              <Zap className="w-6 h-6 text-amber mt-1 flex-shrink-0" />
              <p className="text-text-primary font-medium">
                "Skyvo didn't just give us a chatbot, they completely re-engineered how our data flows across the organization using autonomous agents."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-text-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Ready to Automate Your Future?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how Agentic AI can transform your operations, cut costs, and unlock new possibilities for your business.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/#services" className="px-8 py-4 rounded-xl bg-cobalt hover:bg-white hover:text-text-primary transition-colors font-semibold flex items-center gap-2">
              Explore Services
            </Link>
            <Link to="/#contact" className="px-8 py-4 rounded-xl border border-gray-600 hover:border-white transition-colors font-semibold flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
