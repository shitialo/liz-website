"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Original working version
  const textColor = isMenuOpen ? "text-white" : (isScrolled ? "text-black" : "text-white");
  const burgerColor = isMenuOpen ? "bg-white" : (isScrolled ? "bg-black" : "bg-white");

  // Navigation items - 4 most important sections
  const navItems = [
    { name: "Home", id: "hero-section" },
    { name: "About", id: "life-in-motion" }, // Second section
    { name: "Trelio", id: "trelio-section" },
    { name: "Contact", id: "contact-section" }
  ];

  return (
    <nav className="fixed top-0 w-full z-[300] px-4 md:px-10 py-4 md:py-6 transition-all duration-300">
      <div className={`max-w-7xl mx-auto px-5 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-500 flex justify-between items-center 
        ${isScrolled && !isMenuOpen 
          ? "bg-white/95 backdrop-blur-2xl border border-white/40 shadow-xl" 
          : "bg-transparent border border-transparent"}`}
      >
        {/* BRAND IDENTITY - Click to scroll to top */}
        <button 
          onClick={() => scrollToSection("hero-section")}
          className="flex flex-col z-[320] text-left"
        >
          <span className={`${textColor} font-serif text-lg md:text-xl tracking-tight transition-colors duration-300 font-bold`}>
            {/* Show full name on desktop, just "Liz Wakesho" on mobile */}
            <span className="hidden sm:inline">Liz Wakesho Mwashori</span>
            <span className="sm:hidden">Liz Wakesho</span>
          </span>
          {/* Sub-labels: Hidden on mobile */}
          <span className="hidden sm:block text-[#D4AF37] font-mono text-[9px] tracking-[0.2em] uppercase mt-1 font-black">
            CEO • MODEL • Advocate • Change-Maker
          </span>
        </button>

        {/* DESKTOP LINKS - 4 sections */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${isScrolled ? "text-black/70" : "text-white/80"} hover:text-[#D4AF37] text-[10px] font-mono uppercase tracking-[0.2em] transition-colors font-bold`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* ACTIONS & SLEEK HAMBURGER */}
        <div className="flex items-center gap-2 md:gap-5">
          <button onClick={toggleTheme} className="p-2 transition-transform active:scale-90 z-[320]">
            {isDarkMode ? <Sun className={textColor} size={18} /> : <Moon className={textColor} size={18} />}
          </button>

          {/* SLEEK ANIMATED HAMBURGER */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-[320] relative"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${isMenuOpen ? "rotate-45 translate-y-0.5" : "mb-1.5"}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${burgerColor} ${isMenuOpen ? "-rotate-45 -translate-y-0" : ""}`}></span>
          </button>

          <button 
          onClick={() => scrollToSection("contact-section")}
          className={`hidden md:block px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-full border-2
            ${isScrolled ? "bg-black text-white border-black" : "bg-white text-black border-white"}`}>
            Inquire
          </button>
        </div>
      </div>

      {/* LUXURY OVERLAY MENU - Same 4 sections */}
      <div className={`fixed inset-0 bg-[#0A0A0A] backdrop-blur-3xl z-[305] flex flex-col items-center justify-center transition-all duration-500 ease-in-out
        ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        
        <div className="flex flex-col gap-10 text-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white text-4xl font-serif tracking-tighter hover:text-[#D4AF37] transition-all"
            >
              {item.name}
            </button>
          ))}
          <div className="h-px w-20 bg-white/10 mx-auto mt-4" />
          <button 
          onClick={() => scrollToSection("contact-section")}
          className="text-[#D4AF37] font-mono text-xs tracking-[0.3em] uppercase font-bold">
            Inquire
          </button>
        </div>
      </div>
    </nav>
  );
}