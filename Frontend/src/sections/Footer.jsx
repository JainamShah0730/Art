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
      {/* Dark container card */}
      <div
        className={`
          ${THEME.darkBg}
          ${THEME.darkText}
          p-10
          md:p-16
          lg:p-20
          rounded-[3rem]
        `}
      >
        {/* ============ TOP: CTA + BUTTONS ============ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          {/* Left: CTA headline */}
          <div className="flex-1">
            {/* Small label above the headline */}
            <p className="font-mono text-[9px] uppercase tracking-[0.5em] mb-12 opacity-30">
              The Connection
            </p>

            {/* 
              Same italic/uppercase trick as hero and about sections:
              "conversation" in italic serif = warm and inviting
              vs the bold uppercase "LET'S START A" = commanding
              Together: "I'm serious about my work, but friendly to talk to"
            */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              LET'S START <br />A{" "}
              <span className="font-serif font-light italic lowercase text-emerald-400">
                conversation
              </span>
              .
            </h2>
          </div>

          {/* Right: Action buttons */}
          {/*
            Button hierarchy:
            1. Solid (white bg) = PRIMARY → catches the eye first
            2. Outline (border only) = SECONDARY → visible but less prominent
            
            Both use the same sizing (px-8 py-4) and typography
            so they feel like a cohesive pair.
          */}
          <div className="flex flex-col gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jainamshah1527@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-emerald-400 transition-colors text-center inline-block"
            >
              jainamshah1527@gmail.com
            </a>
          </div>
        </div>

        {/* ============ BOTTOM: COPYRIGHT ============ */}
        {/*
          mt-24: large gap separates CTA from legal text
          border-t border-white/10: ultra-subtle line
          text-[8px]: deliberately tiny — legal text shouldn't compete with CTA
        */}
        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between gap-8 font-mono text-[8px] opacity-30 uppercase tracking-[0.5em]">
          <span>© 2026 Jainam Shah</span>
          <span>Handcrafted in India</span>
        </div>
      </div>
    </footer>
  );
}
