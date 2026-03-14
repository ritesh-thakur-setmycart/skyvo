import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import * as THREE from 'three'
import { gsap } from 'gsap'

// Constants
const NODE_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 150
const MAX_DISTANCE = 2.0

function NeuralNetwork() {
  const pointsRef = useRef()
  const linesRef = useRef()
  const { mouse, viewport } = useThree()

  // Generate random clustered positions
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3)
    const vel = []
    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5
      vel.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      })
    }
    return [pos, vel]
  }, [])

  // Create line geometry
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NODE_COUNT * NODE_COUNT * 3), 3))
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(NODE_COUNT * NODE_COUNT * 3), 3))
    return geo
  }, [])

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return

    const pos = pointsRef.current.geometry.attributes.position.array
    
    // Mouse parallax target (only on desktop)
    const targetX = (mouse.x * viewport.width) / 20
    const targetY = (mouse.y * viewport.height) / 20

    // Update positions
    for (let i = 0; i < NODE_COUNT; i++) {
      const i3 = i * 3
      
      // Basic velocity drift
      pos[i3] += velocities[i].x
      pos[i3 + 1] += velocities[i].y
      pos[i3 + 2] += velocities[i].z

      // Boundary check & bounce
      if (Math.abs(pos[i3]) > 10) velocities[i].x *= -1
      if (Math.abs(pos[i3 + 1]) > 10) velocities[i].y *= -1
      if (Math.abs(pos[i3 + 2]) > 5) velocities[i].z *= -1

      // Mouse pull (parallax) if desktop
      if (NODE_COUNT > 60) {
        pos[i3] += (targetX - pos[i3]) * 0.001
        pos[i3 + 1] += (targetY - pos[i3 + 1]) * 0.001
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    // Update lines
    const linePos = linesRef.current.geometry.attributes.position.array
    const lineCol = linesRef.current.geometry.attributes.color.array
    let lineIndex = 0
    let colIndex = 0

    const color1 = new THREE.Color('#0047FF') // cobalt
    const color2 = new THREE.Color('#4F46E5') // indigo

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        const distSq = dx * dx + dy * dy + dz * dz

        if (distSq < MAX_DISTANCE * MAX_DISTANCE) {
          const alpha = 1.0 - Math.sqrt(distSq) / MAX_DISTANCE
          
          linePos[lineIndex++] = pos[i * 3]
          linePos[lineIndex++] = pos[i * 3 + 1]
          linePos[lineIndex++] = pos[i * 3 + 2]

          linePos[lineIndex++] = pos[j * 3]
          linePos[lineIndex++] = pos[j * 3 + 1]
          linePos[lineIndex++] = pos[j * 3 + 2]

          // Gradient lines
          lineCol[colIndex++] = color1.r
          lineCol[colIndex++] = color1.g
          lineCol[colIndex++] = color1.b
          
          lineCol[colIndex++] = color2.r
          lineCol[colIndex++] = color2.g
          lineCol[colIndex++] = color2.b
        }
      }
    }
    
    linesRef.current.geometry.setDrawRange(0, lineIndex / 3)
    linesRef.current.geometry.attributes.position.needsUpdate = true
    linesRef.current.geometry.attributes.color.needsUpdate = true
  })

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#0047FF" transparent opacity={0.6} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  )
}

export default function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  }
  const item = {
    hidden: { y: 40, opacity: 0, filter: 'blur(8px)' },
    visible: {
      y: 0, opacity: 1, filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  const h1Ref = useRef(null)

  // Word split animation for H1 using GSAP
  useEffect(() => {
    if (!h1Ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(h1Ref.current.children, {
        y: 40,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')]" />

      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }}>
          <NeuralNetwork />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-16">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-cobalt/30 bg-cobalt/5 text-cobalt font-medium text-sm animate-pulse shadow-[0_0_15px_rgba(0,71,255,0.1)]">
              ✦ Agentic AI Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <h1 
            ref={h1Ref}
            className="font-display font-bold text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight text-text-primary max-w-4xl mb-6 will-change-transform flex flex-wrap justify-center gap-x-[0.25em] gap-y-2"
          >
            {"Transform Your Business with Agentic AI Solutions".split(" ").map((word, i) => (
              <span key={i} className="inline-block">{word}</span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.div variants={item} className="mb-10 max-w-2xl text-lg md:text-xl text-text-muted leading-relaxed">
            Empowering startups and growing companies to harness the power of autonomous AI agents that think, plan, and execute complex tasks—so you can focus on what matters most.
          </motion.div>

          {/* CTA Row */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#contact" className="px-8 py-3.5 bg-cobalt text-white rounded-full font-medium shadow-lg shadow-cobalt/25 hover:bg-indigo hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
              Get Started <span>&rarr;</span>
            </a>
            <a href="#services" className="px-8 py-3.5 bg-white text-text-primary rounded-full font-medium border border-gray-200 hover:border-text-primary hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto">
              Explore Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-gray-400"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
