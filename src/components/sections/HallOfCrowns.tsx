"use client";
import { motion } from "framer-motion";

interface Award {
  title: string;
  year: string;
  role: string;
  description: string;
  image: string;
  className: string;
}

const awards: Award[] = [
  {
    title: "Miss County Kenya",
    year: "2023/2024",
    role: "National Title Holder",
    description: "Taking advocacy to the national stage under God's grace.",
    image: "/images/img2.webp",
    className: "md:col-span-2 md:row-span-2 h-[450px] md:h-auto", 
  },
  {
    title: "Miss KCA University",
    year: "2023/2024",
    role: "Resilience & Belief",
    description: "Triumph of belief over doubt within the academic sphere.",
    image: "/images/img5.webp",
    className: "md:col-span-1 md:row-span-1 h-[450px] md:h-auto flex flex-col justify-end",
  },
  {
    title: "Miss Fashion Couture",
    year: "2022/2023",
    role: "The Beginning",
    description: "Celebrating individuality on and off the runway.",
    image: "/images/img4.webp",
    className: "md:col-span-1 md:row-span-2 h-[450px] md:h-auto", 
  },
  {
    title: "Miss County Taita Taveta",
    year: "2023",
    role: "Cultural Ambassador",
    description: "Representing the strength and diversity of Taita Taveta.",
    image: "/images/img1.webp",
    className: "md:col-span-1 md:row-span-1 h-[450px] md:h-auto flex flex-col justify-end",
  },
];

export default function HallOfCrowns() {
  return (
    <section className="py-24 bg-[#FBFBFB] dark:bg-[#050A18] px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif text-[#050A18] dark:text-white leading-[0.9]"
          >
            The Hall <br/> <span className="italic ml-12 md:ml-24 text-[#D4AF37]">of Crowns</span>
          </motion.h2>
          <p className="text-[#050A18]/40 dark:text-white/40 tracking-[0.4em] uppercase text-xs font-medium max-w-md">
            A celebration of leadership, grace, and national advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[300px]">
          {awards.map((award: Award, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[2rem] flex flex-col justify-end transition-all duration-700 shadow-xl ${award.className}`}
            >
              {/* IMAGE LAYER */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-transparent opacity-100" />
              </div>
              
              {/* CONTENT: Absolute Base Positioning */}
              <div className="relative z-10 p-5 md:p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] leading-none">
                  {award.year}
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white mt-1 leading-[1.1]">
                  {award.title}
                </h3>
                <p className="text-[11px] text-white/60 mt-2 max-w-xs md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 line-clamp-1">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}