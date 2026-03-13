"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, ShieldCheck, Lock, Unlock, Zap } from "lucide-react";

export default function SecurityExpert() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <section className="relative min-h-screen bg-slate-50 dark:bg-[#020305] flex items-center justify-center overflow-hidden font-mono px-4 py-12 md:py-0 transition-colors duration-700">
      
      {/* 1. BACKGROUND TECH-GRID - Adapts to Light/Dark */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-20" 
        style={{ 
          backgroundImage: `radial-gradient(currentColor 0.5px, transparent 0.5px)`, 
          backgroundSize: '20px 20px md:30px 30px' 
        }} 
      />

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          /* STATE 1: THE LOCK */
          <motion.div 
            key="locked"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, scale: 1.1 }}
            className="relative z-10 flex flex-col items-center cursor-pointer group px-4"
            onClick={() => setIsUnlocked(true)}
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-2 border-dashed border-[#D4AF37]/30 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Fingerprint className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className="mt-6 sm:mt-8 text-[#D4AF37] tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[9px] md:text-[10px] text-center animate-pulse max-w-[280px] sm:max-w-none">
              [ CLICK TO AUTHENTICATE PROFESSIONAL PROFILE ]
            </p>
          </motion.div>
        ) : (
          /* STATE 2: THE REVEAL */
          <motion.div 
            key="unlocked"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8"
          >
            {/* LEFT: Technical ID Card */}
            <div className="border border-[#D4AF37]/20 bg-white/80 dark:bg-black/60 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-sm relative overflow-hidden group shadow-xl dark:shadow-none">
              {/* Animated Scanner Bar */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-0 right-0 h-[1px] bg-[#D4AF37]/50 z-20"
              />
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0 sm:items-start mb-6 md:mb-8">
                <ShieldCheck className="text-[#D4AF37] w-8 h-8 sm:w-10 sm:h-10" />
                <div className="text-left sm:text-right text-[8px] sm:text-[9px] text-slate-400 dark:text-white/30 uppercase leading-tight font-mono">
                  Subject: WAKESHO_01<br/>Status: Field_Active<br/>Clearance: Level_IV
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <p className="text-[8px] sm:text-[9px] md:text-[10px] text-[#D4AF37] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 font-bold">Professional Field</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-slate-900 dark:text-white leading-tight">
                  Cyber <span className="text-[#D4AF37] italic">Architect</span>
                </h2>
              </div>

              <p className="text-slate-600 dark:text-white/50 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 border-l border-[#D4AF37] pl-3 sm:pl-4">
                Operating at the intersection of critical infrastructure defense and ethical governance. 
                Engineering resilient systems to protect digital sovereignty.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <div className="px-2 sm:px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[8px] sm:text-[9px] font-mono font-bold">CORE_COMPETENCY</div>
                <div className="px-2 sm:px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[8px] sm:text-[9px] font-mono font-bold">SECURITY_EXPERT</div>
              </div>
            </div>

            {/* RIGHT: Live Feed / Skills */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {[
                { label: "Vulnerability Assessment", val: "99%", icon: <Zap size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"/> },
                { label: "Zero Trust Architecture", val: "Active", icon: <Lock size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"/> },
                { label: "Cloud Sovereignty", val: "Verified", icon: <Unlock size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"/> }
              ].map((skill, i) => (
                <motion.div 
                  initial={{ x: 50, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-center justify-between p-3 sm:p-4 md:p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#D4AF37]/50 transition-all shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <span className="text-[#D4AF37]">{skill.icon}</span>
                    <span className="text-slate-800 dark:text-white text-[10px] sm:text-[11px] md:text-xs uppercase tracking-widest font-bold md:font-normal">{skill.label}</span>
                  </div>
                  <span className="text-[#D4AF37] font-mono text-[10px] sm:text-[11px] md:text-xs font-bold">{skill.val}</span>
                </motion.div>
              ))}

              {/* Terminal Output */}
              <div className="mt-2 sm:mt-3 md:mt-4 p-3 sm:p-4 bg-slate-900 dark:bg-black border border-white/5 font-mono text-[8px] sm:text-[9px] md:text-[10px] text-green-500/80 dark:text-green-500/60 leading-relaxed shadow-lg">
                {'>'} ACCESS_GRANTED: PROCEEDING TO CORE_INTEL...<br/>
                {'>'} ENCRYPTING SESSION... [OK]<br/>
                {'>'} SUBJECT_KNOWLEDGE_BASE: LOADED.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}