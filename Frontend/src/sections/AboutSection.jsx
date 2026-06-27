// ============================
// AboutSection
// ============================
// PURPOSE: Displays a profile overview with a 2×2 grid of detail cards.
//
// STRUCTURE:
//   1. Section header: "Index // 02 — The Profile"
//   2. 12-column grid:
//      - Left (col-span-4): large headline "Simple by Design."
//      - Right (col-span-8): 2×2 grid of info cards
//
// EACH CARD HAS:
//   - Icon (from lucide-react) + label
//   - Bold heading
//   - Description paragraph
//
// DESIGN PATTERN — "Asymmetric Grid":
//   The left column is intentionally narrow (4/12 = 33%) with just a headline.
//   The right column is wide (8/12 = 66%) with dense content.
//   This asymmetry creates visual interest — your eye goes to the bigger side,
//   but the headline on the left anchors the section's meaning.
//
// WHY ICONS FROM LUCIDE-REACT?
//   lucide-react provides tree-shakeable SVG icons as React components.
//   Importing `{ Code2 }` only bundles that one icon — not the whole library.
//   Each icon accepts `size` and `className` props.

import { Code2, Zap, GraduationCap, Terminal } from "lucide-react";

export default function AboutSection() {
  // Card data defined here since it's specific to this section
  // (unlike PROJECTS which could be used by multiple sections)
  const cards = [
    {
      icon: Code2,
      label: "The Stack",
      heading: "React / Next.js / MongoDB / PostgreSQL / Tailwind CSS",
      text: "I build with tools that offer the best balance between developer speed and end-user performance. Currently exploring System Design and AI integration.",
    },
    {
      icon: Zap,
      label: "Currently",
      heading: "Traveloop",
      text: "Plan smarter trips — AI itineraries, live flight search, group expense splitting, all in one travel companion app.",
    },
    {
      icon: GraduationCap,
      label: "Education",
      heading: "B.Tech ICT",
      text: "Currently pursuing Information and Communication Technology at VGEC Ahmedabad. Deeply passionate about algorithms, systems architecture, and web engines.",
    },
    {
      icon: Terminal,
      label: "Belief",
      heading: "Code as Craft",
      text: "I believe a developer should be an artisan. Every commit should leave the codebase better than it was before.",
    },
  ];

  return (
    <section id="about" className="mb-40">
      {/* ============ SECTION HEADER ============ */}
      {/* Same pattern as WorkSection — keeps visual consistency */}
      <div className="flex items-baseline gap-4 mb-20 border-b pb-4 border-black">
        <span className="font-mono text-[10px] opacity-40 tracking-widest uppercase italic">
          Index // 02
        </span>
        <h2 className="text-[11px] font-mono uppercase tracking-[0.4em] font-bold">
          The Profile
        </h2>
      </div>

      {/* ============ MAIN GRID ============ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 gap-x-12">
        {/* Left column: headline */}
        {/*
          Same italic/uppercase contrast trick as HeroSection:
          - "Simple" and "Design" are bold uppercase (authoritative)
          - "by" is italic serif lowercase (elegant, soft)
          - This contrast creates visual rhythm
        */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-black leading-tight uppercase tracking-tighter">
            Simple <br />
            <span className="font-serif italic font-light lowercase text-slate-400">
              by
            </span>{" "}
            <br />
            Design.
          </h2>
        </div>

        {/* Right column: 2×2 card grid */}
        {/*
          md:grid-cols-2 → stacks to 1 column on mobile, 2 columns on tablet+
          gap-16 → generous spacing so cards don't feel cramped
        */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          {cards.map((card) => (
            <div key={card.label} className="space-y-6">
              {/* Icon + label row */}
              {/*
                card.icon is a component reference (e.g., Code2).
                We render it as <card.icon /> — this is called
                "component as prop" pattern in React.
              */}
              <div className="flex items-center gap-3">
                <card.icon size={16} className="opacity-40" />
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-30">
                  {card.label}
                </span>
              </div>

              {/* Heading */}
              <h4 className="text-2xl font-bold tracking-tighter uppercase">
                {card.heading}
              </h4>

              {/* Description */}
              <p className="text-sm opacity-50 leading-relaxed max-w-xs font-light">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
