"use client";
import { motion } from "framer-motion";

export default function DigitalSignature() {
  return (
    <footer className="relative bg-[#05070A] py-16 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        
        <div className="relative group mb-12 md:mb-20 w-full flex flex-col items-center">
          {/* THE SIGNATURE DRAWING */}
          <svg 
            width="100%" 
            height="auto" 
            viewBox="0 0 400 120" 
            preserveAspectRatio="xMidYMid meet"
            className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:w-[500px] h-auto px-2"
          >
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-8xl fill-transparent stroke-gold-accent stroke-[0.5]"
              style={{ stroke: "#D4AF37" }}
              initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              WAKESHO
            </motion.text>
          </svg>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center text-white/30 font-mono text-[8px] xs:text-[9px] md:text-[10px] tracking-[0.4em] xs:tracking-[0.6em] md:tracking-[0.8em] uppercase mt-3 md:mt-4 px-2"
          >
            Professional Profile — 2026
          </motion.p>
        </div>

        {/* Links & Professional Sign-off */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 pt-8 md:pt-12 border-t border-white/5 font-mono text-[8px] xs:text-[9px] md:text-[9px] text-white/40 tracking-widest">
          <div className="flex flex-wrap justify-center gap-4 xs:gap-5 md:gap-8">
            <a href="#" className="hover:text-[#D4AF37] transition-colors px-2">LINKEDIN</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors px-2">INSTAGRAM</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors px-2">CREDENTIALS</a>
          </div>
          
          <div className="text-center md:text-right text-white/40 leading-relaxed">
            DESIGNED FOR THE FUTURE<br/>
            ALL RIGHTS RESERVED ©
          </div>
        </div>
      </div>

      {/* "W" Watermark Background - adjusted for mobile */}
      <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 pointer-events-none opacity-[0.02]">
        <h1 className="text-[15rem] xs:text-[20rem] md:text-[30rem] font-serif text-white">W</h1>
      </div>
    </footer>
  );
}