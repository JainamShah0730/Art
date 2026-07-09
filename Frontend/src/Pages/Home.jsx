// ============================
// Home Page — The Orchestrator
// ============================
// PURPOSE: This file does ONE job — compose all sections in order.
//
// BEFORE: This file was 220 lines with all HTML, data, and logic mixed together.
// AFTER:  ~30 lines that read like a table of contents.
//
// WHY THIS IS BETTER:
//   1. READABILITY: Anyone can open this file and instantly understand
//      the page structure in 5 seconds.
//   2. MAINTAINABILITY: Want to change the footer? Go to Footer.jsx.
//      Want to reorder sections? Swap the lines here.
//   3. REUSABILITY: Need these sections on another page? Import them.
//   4. DEBUGGING: Error in the work section? You know exactly where to look.
//
// ARCHITECTURE:
//   ScrollPhysics wraps everything → applies the velocity-skew effect globally
//   NoiseOverlay + ScrollProgressBar → full-page visual effects (fixed position)
//   Navbar → fixed top navigation
//   <main> → contains all scrollable content sections
//     HeroSection → intro + headline
//     WorkSection → project list
//     AboutSection → profile grid
//     Footer → dark CTA block

import ScrollReveal from "../components/ScrollReveal";
import NoiseOverlay from "../components/NoiseOverlay";
import ScrollProgressBar from "../components/ScrollProgressBar";
import Navbar from "../sections/Navbar";
import HeroSection from "../sections/HeroSection";
import WorkSection from "../sections/WorkSection";
import AboutSection from "../sections/AboutSection";
import Footer from "../sections/Footer";
import { THEME } from "../data/constants";

export default function Home() {
  return (
    <div
      className={`
        min-h-screen
        ${THEME.bg}
        ${THEME.text}
        font-sans
        selection:bg-emerald-100
        dark:selection:bg-emerald-900
        overflow-x-hidden
        relative
        transition-colors duration-500
      `}
    >
      {/* Global effects — these are fixed/overlay, not part of scroll flow */}
      <NoiseOverlay />
      <ScrollProgressBar />
      <Navbar />

      {/* Scrollable content — using cinematic ScrollReveal */}
      <div className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <WorkSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </div>
  );
}