import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import DigitalSignature from "@/components/sections/DigitalSignature";
import HallOfCrowns from "@/components/sections/HallOfCrowns";
import Hero from "@/components/sections/Hero";
import Impact from "@/components/sections/Impact";
import ImpactGlobe from "@/components/sections/ImpactGlobe";
import LegacyTimeline from "@/components/sections/LegacyTimeline";
import LifeInMotion from "@/components/sections/LifeInMotion";
import Marquee from "@/components/sections/Marquee";
import SecurityExpert from "@/components/sections/SecurityExpert";

import SixPillars from "@/components/sections/SixPillars";
import SovereignLeadership from "@/components/sections/SovereignLeadership";
import TrelioSection from "@/components/sections/TrelioSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="life-in-motion">
        <LifeInMotion />
      </section>
      <SovereignLeadership />
      <HallOfCrowns />
      <SixPillars />
      <LegacyTimeline />
      <section id="trelio-section">
        <TrelioSection />
      </section>
      <SecurityExpert />
      <section id="contact-section">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}