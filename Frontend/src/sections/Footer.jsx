// ============================
// Footer
// ============================
// PURPOSE: Dark call-to-action block at the bottom of the page.
// Designed to feel like a separate "card" floating on the page.
//
// STRUCTURE:
//   1. Outer <footer> wrapper (just for semantics)
//   2. Inner dark container with rounded corners:
//      - Top: CTA headline + action buttons
//      - Bottom: copyright line
//
// KEY DESIGN DECISIONS:
//   - `rounded-[3rem]`: large border radius creates a "floating card" effect
//     instead of a flat full-width footer. This is a modern portfolio trend.
//   - Dark bg (#1A1A1A) with cream text — inverts the page color scheme
//     to create a strong visual break. "Hey, the page content is done,
//     here's what to do next."
//   - Two buttons with different visual weight:
//     • Email (solid white bg) = primary action
//     • Book a Call (outline border) = secondary action
//     The solid button draws more attention = higher priority action.
//   - `border-white/10`: ultra-subtle separator. /10 means 10% opacity.
//
// IMPORT NOTE:
//   We import THEME here for the dark color classes.
//   The footer is one of only two places that uses darkBg/darkText
//   (the other being potential dark mode support later).

import { THEME } from "../data/constants";

export default function Footer() {
  return (
    <footer className="pb-32">
      <div className={`${THEME.darkBg} ${THEME.darkText} p-10 md:p-16 lg:p-20 rounded-[3rem] transition-colors duration-500`}>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="flex-1">
            <p className="font-mono text-[9px] uppercase tracking-[0.5em] mb-12 opacity-30">
              The Connection
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              LET'S START <br />A{" "}
              <span className="font-serif font-light italic lowercase text-[#10B981] dark:text-[#059669]">
                conversation
              </span>
              .
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:jainamshah1527@gmail.com"
              className="px-8 py-5 bg-white text-black dark:bg-[#1A1A1A] dark:text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-[#10B981] hover:text-white dark:hover:bg-[#34D399] dark:hover:text-black transition-colors text-center shadow-lg"
            >
              jainamshah1527@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 dark:border-black/10 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-mono text-[10px] uppercase tracking-widest opacity-90">
          <div>
            <p className="mb-2 opacity-60 font-semibold">Connect</p>
            <p className="font-medium text-[11px]">jainamshah1527@gmail.com</p>
          </div>
          <div>
            <p className="mb-2 opacity-60 font-semibold">Navigation</p>
            <div className="flex gap-4 font-medium text-[11px]">
              <a href="#work" className="hover:opacity-100">Work</a>
              <a href="#about" className="hover:opacity-100">About</a>
            </div>
          </div>
          <div>
            <p className="mb-2 opacity-60 font-semibold">Statement</p>
            <p className="font-medium text-[11px]">Code as Craft.</p>
          </div>
          <div className="lg:text-right">
            <p className="mb-2 opacity-60 font-semibold">Legal</p>
            <p className="font-medium text-[11px]">© 2026 Jainam Shah</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
