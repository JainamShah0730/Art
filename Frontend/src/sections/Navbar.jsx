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

import { useState, useEffect } from "react";
import { THEME } from "../data/constants";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      setTime(`${istTime} IST`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center border-b
        ${THEME.border} ${THEME.bg} bg-opacity-90 backdrop-blur-md transition-colors duration-500
      `}
    >
      {/* Left: Brand name & Pulse Capsule */}
      <div className="flex items-center gap-3 sm:gap-6">
        <span className="font-bold tracking-tighter text-sm sm:text-lg uppercase">
          JAINAM SHAH
        </span>
        <div className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[9px] font-mono font-bold border transition-colors duration-500 ${THEME.accentBg}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          OPEN FOR INTERNSHIPS
        </div>
      </div>

      {/* Right: Navigation links, Clock, & Theme Toggle */}
      <div className="flex gap-4 sm:gap-8 items-center font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold">
        <span className="hidden min-[500px]:inline-block opacity-40">{time}</span>
        
        <a href="#work" className="hover:opacity-40 transition-opacity">Work</a>
        <a href="#about" className="hover:opacity-40 transition-opacity">About</a>
        
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full border ${THEME.border} hover:scale-110 active:scale-95 transition-all focus:outline-none`}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={14} className="text-amber-300" /> : <Moon size={14} className="text-slate-800" />}
        </button>
      </div>
    </nav>
  );
}
