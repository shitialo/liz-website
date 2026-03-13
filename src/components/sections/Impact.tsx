"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Trees Planted", value: 5000 },
  { label: "Lives Impacted", value: 500 },
];

export default function Impact() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".stat-number", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      textContent: 0,
      duration: 2,
      ease: "power1.out",
      snap: { textContent: 1 },
      stagger: 0.3,
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-navy-deep text-white dark:bg-white dark:text-navy-deep transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="stat-number text-6xl md:text-8xl font-black text-gold-accent">
              {stat.value}
            </span>
            <span className="text-xl uppercase tracking-widest mt-4">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}