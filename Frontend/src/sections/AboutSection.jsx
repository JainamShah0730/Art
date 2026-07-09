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
import { motion } from "motion/react";
import { THEME } from "../data/constants";

export default function AboutSection() {
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
      <div className={`flex items-baseline gap-4 mb-20 border-b pb-4 ${THEME.border}`}>
        <span className="font-mono text-[10px] opacity-40 tracking-widest uppercase italic">
          Index // 02
        </span>
        <h2 className="text-[11px] font-mono uppercase tracking-[0.4em] font-bold">
          The Profile
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 gap-x-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-black leading-tight uppercase tracking-tighter">
            Simple <br />
            <span className="font-serif italic font-light lowercase opacity-70">
              by
            </span>{" "}
            <br />
            Design.
          </h2>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <motion.div 
              key={card.label} 
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
                group p-8 rounded-2xl border ${THEME.border} 
                bg-white/5 dark:bg-black/20 backdrop-blur-md
                hover:bg-white/40 dark:hover:bg-white/5 
                hover:border-[#10B981]/30 dark:hover:border-[#34D399]/30
                hover:shadow-[0_8px_30px_rgb(16,185,129,0.05)]
                transition-all duration-300
              `}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-[#10B981]/10 dark:group-hover:bg-[#34D399]/10 transition-colors">
                  <card.icon size={16} className="opacity-60 group-hover:text-[#10B981] dark:group-hover:text-[#34D399] transition-colors" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-80 transition-opacity">
                  {card.label}
                </span>
              </div>

              <h4 className="text-2xl font-bold tracking-tighter uppercase mb-4">
                {card.heading}
              </h4>

              <p className="text-sm opacity-60 leading-relaxed font-light">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
