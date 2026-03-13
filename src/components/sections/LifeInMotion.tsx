"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { 
    title: "The Advocate", 
    category: "Politics", 
    color: "bg-[#F9F7F2] dark:bg-[#050A18]", 
    text: "Fighting for equity in the heart of the city.", 
    image: "/images/profile5.webp" 
  },
  { 
    title: "The Visionary", 
    category: "CEO @ Trelio", 
    color: "bg-[#FFFFFF] dark:bg-slate-900", 
    text: "Building tech that scales with purpose.", 
    image: "/images/trelioceo.webp" 
  },
  { 
    title: "The Icon", 
    category: "Editorial", 
    color: "bg-[#F2F2F2] dark:bg-black", 
    text: "Redefining elegance on the walkway.", 
    image: "/images/img3.webp",
    isPageant: true
  },
];

export default function LifeInMotion() {
  const container = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!slider.current || !container.current) return;
    const panels = gsap.utils.toArray(".panel");
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1, 
        end: () => "+=" + (slider.current?.offsetWidth || 0),
        invalidateOnRefresh: true,
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className="overflow-hidden bg-[#F9F7F2] dark:bg-[#050A18] transition-colors duration-700">
      <div ref={slider} className="flex w-[300vw] h-screen">
        {slides.map((slide, i) => (
          <section 
            key={i} 
            className={`panel w-screen h-full flex items-start md:items-center justify-center p-8 pt-24 md:p-12 transition-colors duration-700 ${slide.color}`}
          >
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">
                  {slide.category}
                </span>
                
                <h2 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] dark:text-white leading-tight">
                  {slide.title}
                </h2>
                
                <p className="text-slate-500 dark:text-white/60 text-lg max-w-md leading-relaxed">
                  {slide.text}
                </p>
              </div>
              
              {/* Image Container with Sticker Logic */}
              <div className="aspect-[4/5] relative bg-white/40 dark:bg-white/5 border border-white dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-2xl backdrop-blur-sm">
                
                {slide.isPageant && (
  <div className="absolute inset-0 flex items-end justify-center pb-8">
    <div className="text-center space-y-2">
      <div className="h-1 w-16 bg-[#D4AF37] mx-auto"></div>
      <p className="text-[#D4AF37] text-xs tracking-[0.5em]">PRESENTS</p>
      <h3 className="text-white text-2xl md:text-4xl font-serif drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        Miss County Kenya
      </h3>
      <p className="text-white/90 text-sm font-medium drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
        Current Miss County Kenya
      </p>
    </div>
  </div>
)}

                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}