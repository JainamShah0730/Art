// ============================
// WorkSection
// ============================
// PURPOSE: Displays your portfolio projects as a list with hover-activated
// preview cards that follow the cursor.
//
// STRUCTURE:
//   1. Section header: "Index // 01 — Selected Output"
//   2. Project list: each project is a row with title, role, tags, description
//   3. Hover Preview: a floating card that appears when you hover a project
//
// TWO KEY PATTERNS HERE:
//
// Pattern 1 — Hover Preview (the floating card):
//   - `activeProject` state tracks which project is being hovered (or null)
//   - `mousePos` state tracks cursor position via onMouseMove
//   - A motion.div renders at mousePos with AnimatePresence for enter/exit
//   - `pointer-events-none` so it doesn't interfere with actual clicks
//   - The card shows the project color + ID as a "preview"
//
// Pattern 2 — Group Hover Effects:
//   - Each project row has `group` class
//   - On hover: title slides right (group-hover:translate-x-4)
//   - On hover: subtitle opacity goes from 40% to 100%
//   - On hover: a white overlay fades in behind the text
//   - `cursor-none` hides the default cursor (the preview card IS the cursor)
//
// DATA FLOW:
//   PROJECTS array (from constants.js) → .map() → rendered rows

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data/constants";

export default function WorkSection() {
  // Which project is the cursor hovering? null = none
  const [activeProject, setActiveProject] = useState(null);

  // Where is the cursor right now? Used to position the preview card
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // We track mouse position on the SECTION level (not per-project)
  // because we need it for the floating preview card positioning
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" className="mb-40" onMouseMove={handleMouseMove}>
      {/* ============ HOVER PREVIEW CARD ============ */}
      {/*
        AnimatePresence: enables exit animations.
        Without it, React would instantly unmount the card — no fade-out.
        
        The card is:
        - `fixed` so it positions relative to viewport (not page)
        - `pointer-events-none` so mouse events pass through to the list
        - Centered on cursor via x: "-50%", y: "-50%" transform
        - scale 0→1 on enter, 1→0 on exit (pop-in / pop-out effect)
      */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed pointer-events-none z-[80] w-64 h-40 rounded-xl overflow-hidden shadow-2xl border border-white/20"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              x: "-50%",
              y: "-50%",
            }}
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center"
              style={{ backgroundColor: activeProject.color }}
            >
              <span className="opacity-10 font-bold text-5xl mb-2">
                {activeProject.id}
              </span>
              <div className="bg-black/90 text-white px-3 py-1 rounded text-[9px] font-mono tracking-widest uppercase italic">
                Output Preview
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ SECTION HEADER ============ */}
      {/*
        Design pattern: "Index // 01" + section title
        This mimics a book's table of contents — editorial and structured.
        The border-b + border-black creates a strong divider.
      */}
      <div className="flex items-baseline gap-4 mb-12 border-b pb-4 border-black">
        <span className="font-mono text-[10px] opacity-40 tracking-widest uppercase italic">
          Index // 01
        </span>
        <h2 className="text-[11px] font-mono uppercase tracking-[0.4em] font-bold">
          Selected Output
        </h2>
      </div>

      {/* ============ PROJECT LIST ============ */}
      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <motion.a
            key={project.id}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            // Set active project on hover (for the preview card)
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            className="
              group
              relative
              border-b
              border-slate-200
              py-12
              flex
              flex-col
              md:flex-row
              md:items-center
              justify-between
              gap-8
              cursor-none
            "
          >
            {/* Left side: project number + title + meta */}
            <div className="flex items-center gap-10 z-10">
              {/* Project number — very faint, just for structure */}
              <span className="font-mono text-[11px] opacity-20">
                {project.id}
              </span>

              <div>
                {/* 
                  Title slides right on hover: group-hover:translate-x-4
                  The `group` class on the parent makes this work.
                  duration-500 = half-second transition for smooth feel.
                */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-500 uppercase">
                  {project.title}
                </h3>

                {/* Role + tags — hidden until hover via opacity transition */}
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] mt-3 opacity-40 group-hover:opacity-100 transition-opacity">
                  {project.role} — {project.tags.join(" • ")}
                </p>
              </div>
            </div>

            {/* Right side: description text */}
            <div className="max-w-xs text-sm opacity-50 leading-relaxed md:text-right font-light z-10">
              {project.desc}
            </div>

            {/* 
              White overlay that fades in on hover.
              Creates a "highlight" effect behind the text.
              `absolute inset-0` = fills the entire row.
              Starts at opacity-0, goes to opacity-100 on group-hover.
            */}
            <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
