"use client";
import { motion, useMotionValue, useSpring, useTransform, PanInfo } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); 
  const [initialLoad, setInitialLoad] = useState(true);

  const mouseX = useMotionValue(100); 
  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const desktopClipPath = useTransform(smoothMouseX, (v) => `inset(0 0 0 ${v}%)`);
  const handlePosition = useTransform(smoothMouseX, (v) => `${v}%`);

  // Content for both slides - removed white background from Innovator
  const slides = [
    {
      title: "The Leader",
      subtitle: "Advocating for Change",
      titleColor: "text-white",
      subtitleColor: "text-[#D4AF37]",
      bgImage: 'url("/images/profile5.webp")',
      bgClass: "bg-[#050A18]",
      textPosition: "md:text-left md:ml-32",
      titleFont: "font-serif",
      overlay: true
    },
    {
      title: "The Innovator",
      subtitle: "CEO @ TRELIO",
      titleColor: "text-white", // Changed to white
      subtitleColor: "text-[#008080]",
      bgImage: 'url("/images/trelioceo.webp")',
      bgClass: "bg-[#050A18]", // Changed to same dark background as Leader
      textPosition: "md:text-right md:mr-32",
      titleFont: "font-sans font-black",
      overlay: false
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Set initialLoad to false after a short delay
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 100);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Simple 5-second interval for mobile
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isMobile) {
      // Switch between slides every 5 seconds
      interval = setInterval(() => {
        setActiveIndex((current) => (current === 0 ? 1 : 0));
      }, 5000); // 5000ms = 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isMobile]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isMobile) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const percent = ((e.clientX - left) / width) * 100;
    mouseX.set(percent);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    mouseX.set(mouseX.get() > 50 ? 100 : 0);
  };

  const handleDragEnd = (e: any, info: PanInfo) => {
    if (info.offset.x > 50) { 
        setActiveIndex(0); 
    }
    else if (info.offset.x < -50) { 
        setActiveIndex(1); 
    }
  };

  return (
    <section 
      id="hero-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[65vh] md:h-screen w-full overflow-hidden bg-[#050A18] flex items-center justify-center"
    >
      <div className="relative w-full h-full overflow-hidden">
        
        {/* DESKTOP VIEW - Split screen with slider */}
        {!isMobile && (
          <>
            {/* Layer 1: The Leader */}
            <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#050A18]">
              <div className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-screen" style={{ backgroundImage: 'url("/images/profile5.webp")' }} />
              <div className="absolute inset-0 bg-[#050A18]/60" /> 
              <div className="relative z-10 text-center md:text-left md:ml-32 px-4">
                <h1 className="text-white text-5xl md:text-[8rem] lg:text-[10rem] font-serif leading-[0.8] tracking-tighter">The Leader</h1>
                <p className="text-[#D4AF37] mt-8 text-sm md:text-lg tracking-[0.4em] uppercase font-light">Advocating for Change</p>
              </div>
            </div>

            {/* Layer 2: The Innovator (with clip path) - now with dark background */}
            <motion.div 
              style={{ clipPath: desktopClipPath }}
              className="absolute inset-0 bg-[#050A18] flex items-center justify-center p-8 border-l border-[#D4AF37] z-10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("/images/trelioceo.webp")' }} />
              <div className="relative z-10 text-center md:text-right md:mr-32 px-4">
                <h1 className="text-white text-5xl md:text-[8rem] lg:text-[10rem] font-sans font-black leading-[0.8] tracking-tighter">The Innovator</h1>
                <p className="text-[#008080] mt-8 text-sm md:text-lg font-bold uppercase tracking-[0.4em]">CEO @ TRELIO</p>
              </div>
            </motion.div>

            {/* Slider handle */}
            <motion.div style={{ left: handlePosition }} className="absolute top-0 bottom-0 w-[1.5px] bg-[#D4AF37] z-50 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-[#D4AF37] rounded-full flex items-center justify-center shadow-xl">
                <div className="flex gap-[2px]">
                  <div className="w-[1px] h-3 bg-[#D4AF37]" />
                  <div className="w-[1px] h-3 bg-[#D4AF37]" />
                  <div className="w-[1px] h-3 bg-[#D4AF37]" />
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* MOBILE VIEW - Cards switch every 5 seconds */}
        {isMobile && (
          <div className="relative w-full h-full">
            {/* Slide 1 - Leader (Advocate) - Always visible first */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ 
                opacity: activeIndex === 0 ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute inset-0 flex items-center justify-center p-6 ${slides[0].bgClass}`}
              style={{ pointerEvents: activeIndex === 0 ? "auto" : "none" }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: slides[0].bgImage,
                  opacity: 0.3,
                  filter: "grayscale(100%)",
                  mixBlendMode: "screen"
                }} 
              />
              <div className="absolute inset-0 bg-[#050A18]/60" />
              <div className={`relative z-10 text-center px-4 ${slides[0].textPosition}`}>
                <h1 className={`text-white text-5xl ${slides[0].titleFont} leading-[0.8] tracking-tighter mb-4`}>
                  {slides[0].title}
                </h1>
                <p className={`${slides[0].subtitleColor} text-sm uppercase tracking-[0.4em] font-light`}>
                  {slides[0].subtitle}
                </p>
              </div>
            </motion.div>

            {/* Slide 2 - Innovator - Starts hidden */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: activeIndex === 1 ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center p-6 bg-[#050A18]"
              style={{ pointerEvents: activeIndex === 1 ? "auto" : "none" }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: slides[1].bgImage,
                  opacity: 0.2
                }} 
              />
              <div className={`relative z-10 text-center px-4 md:text-right md:mr-32`}>
                <h1 className="text-white text-5xl font-sans font-black leading-[0.8] tracking-tighter mb-4">
                  {slides[1].title}
                </h1>
                <p className="text-[#008080] text-sm uppercase tracking-[0.4em] font-light">
                  {slides[1].subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}