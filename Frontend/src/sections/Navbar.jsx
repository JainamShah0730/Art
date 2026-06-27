// ============================
// Navbar
// ============================
// PURPOSE: Fixed navigation bar at the top of the page.
//
// STRUCTURE:
//   Left  → Your name (brand identity)
//   Right → Anchor links to #work and #about sections
//
// KEY DESIGN DECISIONS:
//   - `fixed top-0 w-full z-50`: stays visible while scrolling
//   - `bg-opacity-95`: slight transparency so content peeks through
//   - Anchor links use href="#work" to smooth-scroll to section IDs
//   - Font sizing is intentionally tiny (10px) with wide tracking
//     for that editorial/magazine aesthetic
//
// HOW IT CONNECTS:
//   - Sits ABOVE the ScrollProgressBar (z-50 vs z-90)
//     Wait — actually the progress bar is z-90, so it renders ON TOP of the navbar.
//     That's intentional: the 2px line should always be visible.
//   - The HeroSection has `pt-40` to push content below this fixed navbar.

import { THEME } from "../data/constants";

export default function Navbar() {
  return (
    <nav
      className={`
        fixed
        top-0
        w-full
        z-50
        px-6
        py-5
        flex
        justify-between
        items-center
        border-b
        ${THEME.border}
        ${THEME.bg}
        bg-opacity-95
      `}
    >
      {/* Left: Brand name */}
      <span className="font-bold tracking-tighter text-lg uppercase">
        JAINAM SHAH
      </span>

      {/* Right: Navigation links */}
      {/* 
        Why font-mono + text-[10px] + tracking-[0.2em]?
        → This creates a "technical/editorial" feel. Mono fonts at small sizes
          with wide letter-spacing look like magazine column headers.
      */}
      <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
        <a
          href="#work"
          className="hover:opacity-40 transition-opacity"
        >
          Work
        </a>
        <a
          href="#about"
          className="hover:opacity-40 transition-opacity"
        >
          About
        </a>
      </div>
    </nav>
  );
}
