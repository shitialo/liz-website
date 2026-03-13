"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Leaf, Scale, Lightbulb, Globe, ShieldCheck } from "lucide-react";

const pillars = [
  {
    id: "mental-health",
    title: "Mental Health",
    icon: <Heart className="w-6 h-6" />,
    description: "Destigmatizing illness and providing support systems within correctional facilities.",
    impact: ["Awareness & Counseling", "Prison Staff Training", "Peer Support Networks"],
    color: "bg-navy-deep",
  },
  {
    id: "climate",
    title: "Climate Action",
    icon: <Leaf className="w-6 h-6" />,
    description: "Championing reforestation and sustainable community practices across Kenya.",
    impact: ["Indigenous Tree Planting", "Ecosystem Restoration", "National Campaign Leadership"],
    color: "bg-slate-900",
  },
  {
    id: "human-rights",
    title: "Human Rights",
    icon: <Scale className="w-6 h-6" />,
    description: "Advocating for the dignity and successful reintegration of incarcerated persons.",
    impact: ["Policy Advocacy", "Legal Aid Facilitation", "Living Condition Reform"],
    color: "bg-black",
  },
  {
    id: "empowerment",
    title: "Empowerment",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "Nurturing youth leadership and economic independence through mentorship.",
    impact: ["Youth Mentorship", "Women Workshops", "Skill Acquisition"],
    color: "bg-navy-deep",
  },
  {
    id: "culture",
    title: "Cultural Heritage",
    icon: <Globe className="w-6 h-6" />,
    description: "Celebrating and preserving the rich diversity of Taita Taveta traditions.",
    impact: ["Global Representation", "Local Resource Mobilization", "Heritage Advocacy"],
    color: "bg-slate-900",
  },
  {
    id: "peace",
    title: "Peace Building",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Promoting conflict resolution to create safer, cohesive societies.",
    impact: ["Conflict Resolution", "Community Harmony", "Safety Initiatives"],
    color: "bg-black",
  },
];

export default function SixPillars() {
  const [expanded, setExpanded] = useState<string | null>("mental-health");
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Initialize the refs object to track each pillar's position
  const pillarRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // Trigger when at least 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-animation logic - only runs when section is visible and not paused
  useEffect(() => {
    if (isPaused || !isVisible) return;
    
    const interval = setInterval(() => {
      setExpanded((prev) => {
        const currentIndex = pillars.findIndex(p => p.id === prev);
        const nextIndex = (currentIndex + 1) % pillars.length;
        return pillars[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isVisible]);

  const handleManualSelect = (id: string) => {
    setExpanded(id);
    setIsPaused(true);

    // Fixed scroll for mobile
    setTimeout(() => {
      const element = pillarRefs.current[id];
      if (element && window.innerWidth < 768) {
        // Get navbar height
        const navbar = document.querySelector('nav, header, [class*="navbar"], [class*="header"]');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
        
        // Get the element's position relative to the viewport
        const rect = element.getBoundingClientRect();
        
        // If the element is not fully visible below the navbar, scroll it into view
        if (rect.top < navbarHeight) {
          window.scrollBy({
            top: rect.top - navbarHeight - 10, // Small buffer
            behavior: "smooth"
          });
        }
      }
    }, 300);

    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white dark:bg-navy-deep overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-serif text-navy-deep dark:text-white">Advocacy Pillars</h2>
        <p className="text-gold-accent mt-4 tracking-[0.3em] uppercase text-sm font-bold">Driven by Justice & Sustainability</p>
      </div>

      <div className="flex flex-col md:flex-row h-auto md:h-[650px] w-full border-t border-b border-navy-deep/10 dark:border-white/10">
        {pillars.map((pillar) => {
          const isExpanded = expanded === pillar.id;
          return (
            <motion.div
              key={pillar.id}
              ref={(el) => {
                pillarRefs.current[pillar.id] = el;
              }}
              onClick={() => handleManualSelect(pillar.id)}
              layout 
              className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out border-b md:border-b-0 md:border-r border-navy-deep/10 dark:border-white/10 flex flex-col
                ${isExpanded ? "flex-[5] min-h-[400px] md:min-h-0" : "flex-[1] min-h-[80px] md:min-h-0"}`}
            >
              <div className={`absolute inset-0 z-0 ${pillar.color} transition-opacity duration-500 ${isExpanded ? "opacity-100" : "opacity-80"}`} />

              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                
                <div className="flex items-center gap-4 text-gold-accent">
                  <div className="flex-shrink-0">{pillar.icon}</div>
                  <h3 className={`font-serif text-white transition-opacity duration-300 ${isExpanded ? "text-2xl md:text-4xl opacity-100" : "text-xl md:opacity-0"}`}>
                    {pillar.title}
                  </h3>
                </div>

                {!isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none"
                  >
                    <span className="rotate-90 md:-rotate-90 whitespace-nowrap text-white/40 uppercase tracking-[0.5em] font-bold text-xs">
                      {pillar.title}
                    </span>
                  </motion.div>
                )}

                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col h-full mt-6 justify-end"
                    >
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                          {pillar.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {pillar.impact.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-accent flex-shrink-0" />
                              <span className="text-white/60 text-xs md:text-sm tracking-wide">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}