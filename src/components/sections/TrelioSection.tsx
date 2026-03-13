"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TrelioDynamicAd() {
  return (
    <section className="relative py-20 md:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#f9fafb] text-white dark:text-white light:text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-500">
      
      {/* BACKGROUND WATERMARK: THE OFFICIAL TRELIO CLOUD */}
      <div className="absolute -right-10 -top-10 opacity-[0.05] dark:opacity-[0.05] light:opacity-[0.1] rotate-12 pointer-events-none">
         <svg width="500" height="500" viewBox="0 0 100 100">
            <path d="M45 20c-5.5 0-10.4 3.4-12.4 8.2-1-.1-2.1-.2-3.1-.2-7.7 0-14 6.3-14 14s6.3 14 14 14h30c6.6 0 12-5.4 12-12 0-5.1-3.2-9.4-7.7-11.1.1-.3.2-.6.2-.9 0-6.6-5.4-12-12-12-2.3 0-4.4.6-6.3 1.7-1.4-3.3-4.7-5.7-8.7-5.7z" fill="currentColor" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: TEXT & FEATURES */}
          <div className="space-y-10 md:space-y-16">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 border border-blue-400/30 rounded-full bg-blue-400/5 text-blue-400 dark:text-blue-300"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Platform Status: Beta Version</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-current">
                TRELIO <br />
                <span className="text-blue-400/30 dark:text-white/20 italic font-light">Mental Health App.</span>
              </h2>
            </div>

            {/* FEATURES STACK */}
            <div className="space-y-8 border-l-2 border-blue-400/20 pl-6 md:pl-8">
              <div className="space-y-1">
                <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-widest">01 / Intelligence</h4>
                <p className="text-lg md:text-xl font-medium text-current/80">Talk to Trelio AI.</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-widest">02 / Connection</h4>
                <p className="text-lg md:text-xl font-medium text-current/80">Verified peer matching for student-specific challenges.</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-widest">03 / Clinical Bridge</h4>
                <p className="text-lg md:text-xl font-medium text-current/80">Direct, one-tap access to licensed therapist networks worldwide.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: DOWNLOAD & WEBSITE (Responsive Row) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 dark:bg-white/[0.02] light:bg-black/5 border border-current/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl"
          >
            <div className="flex flex-col items-center lg:items-start space-y-8">
                <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold mb-2">Join the Movement</h3>
                    <p className="text-current/50 text-sm font-light">Redefine your headspace with other active users.</p>
                </div>

                {/* STORE BUTTONS: SIDE-BY-SIDE ON ALL SCREENS 
                <div className="flex flex-row gap-3 w-full justify-center lg:justify-start">
                    <a href="" className="flex-1 max-w-[160px] transition-transform active:scale-95">
                        <img 
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                        alt="App Store" 
                        className="w-full h-auto dark:invert-0 light:invert transition-all"
                        />
                    </a>
                    <a href="" className="flex-1 max-w-[180px] transition-transform active:scale-95">
                        <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                        alt="Google Play" 
                        className="w-full h-auto"
                        />
                    </a>
                </div>*/}

                {/* THE WEBSITE LINK */}
                <div className="w-full pt-8 border-t border-current/10">
                    <motion.a 
                        
                        className="group flex items-center justify-between w-full px-2 text-sm font-black uppercase tracking-widest text-current/40 hover:text-blue-400 transition-colors"
                    >
                       Website Coming Soon
                        <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                    </motion.a>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}