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
import { PROJECTS, THEME } from "../data/constants";
import { useTheme } from "../contexts/ThemeContext";

export default function WorkSection() {
  const { isDarkMode } = useTheme();
  const [activeProject, setActiveProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" className="mb-40" onMouseMove={handleMouseMove}>
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className={`fixed pointer-events-none z-[80] w-64 h-40 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border ${THEME.border}`}
            style={{
              left: mousePos.x,
              top: mousePos.y,
              x: "-50%",
              y: "-50%",
            }}
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center transition-colors duration-300"
              style={{ backgroundColor: isDarkMode ? activeProject.colorDark : activeProject.colorLight }}
            >
              <span className="opacity-20 font-bold text-5xl mb-2 text-black dark:text-white">
                {activeProject.id}
              </span>
              <div className="bg-black/90 text-white dark:bg-[#F4F3EE] dark:text-black px-3 py-1 rounded text-[9px] font-mono tracking-widest uppercase italic shadow-lg">
                Output Preview
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`flex items-baseline gap-4 mb-12 border-b pb-4 ${THEME.border}`}>
        <span className="font-mono text-[10px] opacity-40 tracking-widest uppercase italic">
          Index // 01
        </span>
        <h2 className="text-[11px] font-mono uppercase tracking-[0.4em] font-bold">
          Selected Output
        </h2>
      </div>

      <div className="flex flex-col group/list">
        {PROJECTS.map((project) => (
          <motion.a
            key={project.id}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setActiveProject(project)}
            onMouseLeave={() => setActiveProject(null)}
            className={`
              group/row relative border-b ${THEME.border} py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-none transition-all duration-500
              ${activeProject && activeProject.id !== project.id ? 'opacity-30' : 'opacity-100'}
            `}
          >
            <div className="flex items-center gap-10 z-10">
              <span className="font-mono text-[11px] opacity-20">{project.id}</span>
              <div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter group-hover/row:translate-x-4 transition-transform duration-500 uppercase">
                  {project.title}
                </h3>
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] mt-3 opacity-40 group-hover/row:opacity-100 transition-opacity">
                  {project.role} — {project.tags.join(" • ")}
                </p>
              </div>
            </div>
            
            <div className="max-w-xs text-sm opacity-50 leading-relaxed md:text-right font-light z-10">
              {project.desc}
            </div>

            <motion.div className={`absolute inset-0 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 ${THEME.cardHover.split(' ')[0]} ${THEME.cardHover.split(' ')[2]}`} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
