"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: "2022/2023",
    age: "Age 18",
    title: "Miss Fashion Couture KCA",
    description: "The beginning of a professional modeling career, celebrating individuality and creativity on the runway.",
  },
  {
    year: "2023",
    age: "Age 19",
    title: "Miss County Taita Taveta",
    description: "Representing the beauty and strength of Taita Taveta culture. A platform used to advocate for local heritage.",
  },
  {
    year: "2023/2024",
    age: "The Triple Crown",
    title: "Miss KCA University",
    description: "A journey of relentless dedication and the triumph of belief over doubt within the academic sphere.",
  },
  {
    year: "2023/2024",
    age: "National Stage",
    title: "Miss County Kenya",
    description: "Three titles in one year a testament to grace and unwavering support. Taking advocacy to the national stage.",
  },
];

export default function LegacyTimeline() {
  const container = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!lineRef.current || !container.current) return;

    // Refresh ScrollTrigger to handle mobile height changes
    ScrollTrigger.refresh();

    // Gold line growth animation
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 10%",
          end: "bottom 90%",
          scrub: 1, // Smoother follow-through
          invalidateOnRefresh: true, // Crucial for mobile resizing
        },
      }
    );

    // Fade and Slide items
    gsap.utils.toArray(".timeline-block").forEach((block: any) => {
      gsap.from(block, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
        },
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-white dark:bg-navy-deep relative overflow-hidden px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-serif text-navy-deep dark:text-white leading-tight">
            The Journey to Excellence
          </h2>
          <p className="text-gold-accent mt-4 tracking-[0.3em] uppercase text-xs md:text-sm font-bold">
            Resilience & Growth
          </p>
        </div>

        <div className="relative">
          {/* THE PROGRESS LINE - Fixed mobile position */}
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-[2px] bg-navy-deep/10 dark:bg-white/10 -translate-x-1/2">
            <div ref={lineRef} className="w-full h-full bg-gold-accent origin-top scale-y-0" />
          </div>

          <div className="space-y-16 md:space-y-32">
            {timelineEvents.map((event, i) => (
              <div key={i} className="timeline-block relative flex flex-col md:flex-row items-start md:items-center w-full">
                
                {/* Year Label - Visibility & Overlap Fix */}
                <div className="w-full md:w-1/2 md:pr-20 md:text-right pl-8 md:pl-0 mb-6 md:mb-0">
                  <div className="md:sticky md:top-1/2 md:-translate-y-1/2">
                    <span className="text-5xl md:text-8xl font-black text-navy-deep/20 dark:text-white/20 block leading-none transition-colors duration-500 hover:text-gold-accent/40">
                      {event.year.split('/')[0]}
                    </span>
                    <span className="text-gold-accent font-bold tracking-widest uppercase text-xs md:text-sm bg-white/80 dark:bg-navy-deep/80 px-2 py-1 inline-block mt-2">
                      {event.age}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-8 md:pl-20">
                  <div className="bg-slate-50 dark:bg-white/5 p-6 md:p-10 rounded-3xl border border-navy-deep/5 dark:border-white/10 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-gold-accent/30">
                    <h3 className="text-xl md:text-3xl font-serif text-navy-deep dark:text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-sm md:text-lg text-navy-deep/70 dark:text-white/70 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Tracking Dot */}
                <div className="absolute left-2 md:left-1/2 w-3 h-3 bg-gold-accent rounded-full -translate-x-1/2 ring-4 ring-white dark:ring-navy-deep z-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}