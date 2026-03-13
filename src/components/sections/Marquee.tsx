"use client";

const politicalLogos = ["UN Women", "African Union", "Green Peace", "Global Citizen", "UNESCO", "World Bank"];
const techLogos = ["Trelio", "Vercel", "Stripe", "OpenAI", "Nvidia", "AWS"];

export default function Marquee() {
  const renderLogos = (logos: string[]) => (
    // We duplicate the array to ensure the loop is seamless
    [...logos, ...logos].map((logo, i) => (
      <div key={i} className="flex items-center justify-center px-12 group">
        <span className="text-2xl md:text-4xl font-serif italic text-navy-deep/20 dark:text-white/20 
                       group-hover:text-gold-accent group-hover:opacity-100 transition-all duration-500 
                       cursor-default select-none whitespace-nowrap">
          {logo}
        </span>
      </div>
    ))
  );

  return (
    <section className="py-24 bg-white dark:bg-navy-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <p className="text-xs uppercase tracking-[0.5em] text-navy-deep/40 dark:text-white/40 font-bold">
          Global Strategic Partnerships
        </p>
      </div>

      {/* THE MASK: This creates the luxury "fade out" on the edges */}
      <div className="relative flex flex-col gap-12 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        
        {/* Row 1: Political (Moves Left) */}
        <div className="flex w-max animate-marquee">
          {renderLogos(politicalLogos)}
        </div>

        {/* Row 2: Tech (Moves Right) */}
        <div className="flex w-max animate-marquee-reverse">
          {renderLogos(techLogos)}
        </div>
      </div>
    </section>
  );
}