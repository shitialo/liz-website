"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Button appears after scrolling 500px (past the home/hero)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] cursor-pointer"
        >
          {/* THE EPIC BUTTON DESIGN */}
          <div className="relative group flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
            {/* Pulsing Luxury Aura */}
            <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* The Main Circle */}
            <div className="absolute inset-0 border border-white/10 bg-black/80 backdrop-blur-xl rounded-full flex items-center justify-center">
               <ArrowUp className="text-white group-hover:-translate-y-1 transition-transform duration-300" size={18} />
            </div>

            {/* Rotating Progress Ring - FIXED for all screen sizes */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="30"
                stroke="white"
                strokeWidth="1"
                fill="transparent"
                className="opacity-10"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}