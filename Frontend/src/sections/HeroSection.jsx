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

// import PrecisionCounter from "../components/PrecisionCounter";
import TextScrambler from "../components/TextScrambler";
import MagneticElement from "../components/MagneticElement";
import { SOCIALS } from "../data/constants";

// Simple inline SVG icons for brands (lucide-react dropped brand icons)
const GithubIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const XIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Map icon names from SOCIALS data to actual components
const ICON_MAP = {
  Github: GithubIcon,
  X: XIcon,
};

export default function HeroSection() {
  return (
    <section className="pt-40 mb-40">
      {/* ---- Row 1: Intro line ---- */}
      {/* 
        This small intro line sets the tone — editorial, personal, like a letter.
        The separator line (h-[1px] w-12) is a subtle design detail
        that visually connects the text to the counter.
      */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <span className="font-serif italic text-2xl opacity-40 font-light">
          Oh Captain! My Captain!
        </span>
      </div>

      {/* ---- Row 2: Main headline ---- */}
      {/* 
        Why uppercase + tracking-tighter?
        → Large uppercase text with negative tracking feels bold and authoritative.
        
        Why mix font-serif italic lowercase for "future"?
        → The contrast between HEAVY UPPERCASE and light italic lowercase
          creates visual tension — this is a classic editorial design trick.
          It makes the eye pause, which emphasizes the word.
      */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-16 uppercase">
        <TextScrambler text="CRAFTING" /> <br />
        THE{" "}
        <span className="font-serif font-light italic lowercase text-slate-400">
          future
        </span>
        .
      </h1>

      {/* ---- Row 3: Description + Social links grid ---- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        {/* Left column: subtitle */}
        <div className="lg:col-span-8 text-xl md:text-2xl lg:text-3xl leading-relaxed font-light tracking-tight opacity-80 max-w-3xl">
          CS undergrad who turns ideas into full-stack products{" "}
          <span className="underline underline-offset-4 decoration-slate-200 font-medium">
            — currently obsessed with AI integrations.
          </span>{" "}


        </div>

        {/* Right column: social links */}
        {/* 
          border-l + pl-8: creates a visual "sidebar" divider.
          Each link uses MagneticElement for that satisfying cursor-pull effect.
          
          The icon circles (w-8 h-8 rounded-full border) flip to black
          on hover via group-hover — the `group` class on the parent
          lets child elements react to the parent's hover state.
        */}
        <div className="lg:col-span-4 flex flex-col gap-5 border-l border-slate-200 pl-8">
          {SOCIALS.map((social) => {
            const IconComponent = ICON_MAP[social.icon];
            return (
              <MagneticElement key={social.label}>
                <a
                  href={social.url}
                  className="flex items-center gap-3 group cursor-pointer w-fit"
                >
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    {IconComponent && <IconComponent size={14} />}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-100">
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
