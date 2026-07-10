// ============================
// HeroSection
// ============================
// PURPOSE: The first thing visitors see — your intro, headline, and social links.
//
// STRUCTURE (top to bottom):
//   1. Intro line: "From the desk of —" + PrecisionCounter
//   2. Big headline: "CRAFTING THE future." with ScrambleText effect
//   3. Bottom grid (12-col):
//      - Left (col-span-8): subtitle/description paragraph
//      - Right (col-span-4): social links with MagneticElement
//
// KEY CONCEPTS:
//   - `pt-40`: pushes content down to clear the fixed Navbar
//   - `mb-40`: large gap before the next section (WorkSection)
//   - 12-column grid: Tailwind's `grid-cols-12` mimics a traditional
//     design grid. col-span-8 = 66% width, col-span-4 = 33% width.
//   - The italic "future" uses font-serif + lowercase to contrast
//     with the bold uppercase — this contrast creates visual hierarchy.
//
// COMPONENTS USED:
//   - PrecisionCounter: live-updating year counter (already built by you)
//   - TextScrambler: hover-to-scramble text effect (already built by you)
//   - MagneticElement: cursor-following spring physics (already built by you)
//
// NOTE ON ICONS:
//   lucide-react removed brand icons (Github, Linkedin) in recent versions.
//   We use inline SVGs instead. These are the official brand SVG paths from
//   simpleicons.org — each is a standard 24x24 viewBox.

import TextScrambler from "../components/TextScrambler";
import MagneticElement from "../components/MagneticElement";
import { SOCIALS, THEME } from "../data/constants";

// Simple inline SVG icons for brands (lucide-react dropped brand icons)
const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.6a5.4 5.4 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.2-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.2 3.8A5.4 5.4 0 0 0 3 9.6c0 5 3 6.3 6 6.6a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const XIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

const ICON_MAP = {
  Github: GithubIcon,
  X: XIcon,
};

export default function HeroSection() {
  return (
    <section className="pt-40 mb-40">
      <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <span className="font-serif italic text-2xl opacity-60 font-light">
          Oh Captain! My Captain!
        </span>
      </div>

      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-16 uppercase">
        <TextScrambler text="CRAFTING" /> <br />
        THE <span className="font-serif font-light italic lowercase opacity-70">future</span>.
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8 text-xl md:text-2xl lg:text-3xl leading-relaxed font-light tracking-tight opacity-80 max-w-3xl">
          CS undergrad who turns ideas into full-stack products{" "}
          <span className="underline underline-offset-4 decoration-slate-300 dark:decoration-slate-700 font-medium">
            — currently obsessed with AI integrations.
          </span>
        </div>

        <div className={`lg:col-span-4 flex flex-col gap-5 border-l ${THEME.border} pl-8`}>
          {SOCIALS.map((social) => {
            const IconComponent = ICON_MAP[social.icon];
            return (
              <MagneticElement key={social.label} strength={0.2}>
                <a href={social.url} className="flex items-center gap-3 group cursor-pointer w-fit">
                  <div className={`w-8 h-8 rounded-full border ${THEME.border} flex items-center justify-center transition-all ${THEME.cardHover}`}>
                    {IconComponent && <IconComponent size={14} />}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </span>
                </a>
              </MagneticElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}
