import { motion } from 'framer-motion'
import { Brain, Cpu, Zap, Trophy } from 'lucide-react'

export default function ScrollStory() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cobalt" />,
      title: "AI that thinks.",
      description: "Our agents understand complex business context, process unstructured data, and apply deep logical reasoning beyond simple pattern matching."
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo" />,
      title: "AI that plans.",
      description: "Instead of following hardcoded rules, our systems dynamically construct multi-step execution strategies to reach your desired outcomes."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber" />,
      title: "AI that executes.",
      description: "From interacting with APIs to making informed system changes, our agents execute tasks autonomously with robust built-in safety rails."
    },
    {
      icon: <Trophy className="w-8 h-8 text-cobalt" />,
      title: "So your team can lead.",
      description: "Free your workforce from repetitive manual tasks, empowering your people to focus on strategy, innovation, and creative leadership."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cobalt/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-5xl text-text-primary tracking-tight">
            The Agentic Advantage
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            We build more than just chatbots. Our Agentic AI solutions are designed to operate as autonomous members of your team, driving real impact from day one.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-cobalt/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cobalt/5 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
