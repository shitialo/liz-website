"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Shield, Landmark } from "lucide-react";

export default function SovereignMandate() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#050505] transition-colors duration-700 py-20 px-6">
      
      {/* --- MODERN AESTHETIC ELEMENTS --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 dark:bg-[#D4AF37]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[100px]" />

      {/* Tension Circles (Independent Continuous Animation) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-slate-200 dark:border-white/20 rounded-full absolute" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="w-[450px] h-[450px] md:w-[850px] md:h-[850px] border border-slate-300 dark:border-white/10 rounded-full absolute" 
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] md:w-[1100px] md:h-[1100px] border border-slate-100 dark:border-white/5 rounded-full absolute" 
        />
      </div>

      <div className="max-w-6xl w-full z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT: The Image with OFFICIAL YELLOW TAG */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full"
          >
            {/* THE OFFICIAL TAG */}
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                Official
              </span>
            </div>

            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200 dark:border-white/20 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img src="/images/profile6.webp" alt="Prime Minister Liz Wakesho" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] z-0 rounded-full mix-blend-multiply dark:mix-blend-screen opacity-40 dark:opacity-60 blur-[2px]" />
          </motion.div>

          {/* RIGHT: The Content Card */}
          <div className="relative -mt-24 md:-mt-32 lg:mt-0 z-20 px-4 md:px-0">
            <div className="bg-white/80 dark:bg-black/70 backdrop-blur-xl lg:bg-transparent lg:dark:bg-transparent p-8 md:p-12 lg:p-0 rounded-3xl lg:rounded-none border border-white/20 lg:border-none shadow-2xl lg:shadow-none space-y-8">
              
              <div className="space-y-2">
                <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] md:text-sm">Administration 2026 — 2028</span>
                <h2 className="text-4xl md:text-7xl font-serif text-slate-900 dark:text-white leading-[0.9] uppercase">
                  Prime <br className="hidden lg:block" /> Minister <br className="hidden lg:block" /> <span className="text-[#D4AF37] italic font-medium">TTSA</span>
                </h2>
              </div>

              <p className="text-slate-600 dark:text-white/70 text-base md:text-lg leading-relaxed max-w-md">
                Leading with a <span className="text-slate-900 dark:text-white font-medium">Popular Mandate</span> across an inter-university coalition. Crafting the future of regional student governance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-center gap-4 group">
                  <Landmark className="text-[#D4AF37] w-5 h-5" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/50 group-hover:text-[#D4AF37] transition-colors">Executive Reform</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <Shield className="text-[#D4AF37] w-5 h-5" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-white/50 group-hover:text-[#D4AF37] transition-colors">Student Advocacy</span>
                </div>
              </div>

              <button 
                onClick={() => setIsOpen(true)}
                className="w-full lg:w-auto group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-[#D4AF37]/20"
              >
                <span className="relative z-10 font-bold uppercase tracking-widest text-[10px] md:text-xs">Read Ministerial Statement</span>
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- OFFICIAL MINISTERIAL STATEMENT MODAL --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/95 dark:bg-black/95 backdrop-blur-xl"
            onClick={() => setIsOpen(false)} // Close when clicking backdrop
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
              className="bg-white dark:bg-[#0A0A0A] max-w-2xl w-full p-8 md:p-14 rounded-[2rem] md:rounded-3xl relative shadow-2xl border border-slate-200 dark:border-white/10"
            >
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-8 right-8 text-slate-400 hover:text-[#D4AF37] transition-colors z-10"
              >
                <X size={28} />
              </button>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-[10px]">Official Communiqué</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white leading-tight">A Unified Mandate for <br/> Taita Taveta</h3>
                
                <div className="space-y-5 text-slate-600 dark:text-white/70 text-base md:text-lg leading-relaxed font-light italic pr-4 max-h-[50vh] overflow-y-auto custom-scrollbar">
                  
                  <p>“My administration is committed to institutionalizing transparency, fostering campus unity, and ensuring that our collective voice drives the progress of our community.”</p>
                  <p>“This is the era of Visionary Student Governance.”</p>
                  
                  {/* Digital Signature Footer */}
                  <div className="pt-8 border-t border-slate-100 dark:border-white/5">
                    <p className="font-serif text-[#D4AF37] text-3xl italic">Liz Wakesho</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 dark:text-white">Prime Minister, TTSA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}