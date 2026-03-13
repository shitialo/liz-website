"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Float, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

export default function ImpactGlobe() {
  return (
    <section className="relative h-screen bg-[#020305] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            {/* The Globe Shell */}
            <Sphere args={[1, 64, 64]}>
              <meshStandardMaterial 
                color="#222" 
                wireframe 
                transparent 
                opacity={0.2} 
              />
            </Sphere>
            
            {/* Impact Point: Nairobi/East Africa */}
            <mesh position={[0.3, 0.1, 0.95]}>
              <sphereGeometry args={[0.025, 16, 16]} />
              <meshBasicMaterial color="#d4af37" />
            </mesh>
            
            {/* Subtle Glow for the point */}
            <mesh position={[0.3, 0.1, 0.95]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="#d4af37" transparent opacity={0.2} />
            </mesh>
          </Float>
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </div>

      {/* TEXT OVERLAY */}
      <div className="relative z-10 text-center pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <span className="text-gold-accent font-mono text-xs tracking-[0.5em] uppercase">Global Advocacy</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-tighter">
            Environmental <br /> <span className="italic text-gold-accent">Resilience</span>
          </h2>
          <p className="max-w-md mx-auto text-white/50 font-light text-sm md:text-base leading-relaxed">
            Architecting a future where technology secures our digital landscape while protecting our natural ecosystem.
          </p>
        </motion.div>
      </div>

      {/* STATS HUD */}
      <div className="absolute bottom-12 left-12 font-mono text-[10px] text-white/20 space-y-2 uppercase tracking-widest border-l border-gold-accent/30 pl-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-pulse" />
          <span className="text-white/60">Active Mission: Tree Planting</span>
        </div>
        <p>Region: East Africa / Coastal</p>
      </div>
    </section>
  );
}