// ============================
// THEME — Design tokens used across all sections
// ============================
// Why: Instead of hardcoding colors like "bg-[#F9F8F3]" in every component,
// we define them once here. If you ever want to change the palette,
// you only change it in this one file.

export const THEME = {
  // Light and Dark modes dynamically handled via Tailwind variants
  bg: "bg-[#F4F3EE] dark:bg-[#0D0D0E]",         // Soft alabaster warm cream -> Ultra-dark warm charcoal
  text: "text-[#242629] dark:text-[#E1DFD9]",     // Rich slate charcoal -> Warm parchment white
  accent: "text-[#10B981] dark:text-[#34D399]",   // Emerald green
  accentBg: "bg-[#E8E6DD] dark:bg-[#1E293B] border-emerald-500/20 text-[#10B981]", 
  border: "border-[#DDD9CE] dark:border-[#24262B]", // Faint warm sand -> Soft graphite
  cardHover: "hover:bg-white hover:shadow-[0_0_15px_rgba(16,185,129,0.03)] dark:hover:bg-[#1C1C19] dark:hover:border-emerald-900/50",

  // Footer / Explicit dark mode sections
  darkBg: "bg-[#161719] dark:bg-[#F5F4EF]",
  darkText: "text-[#F4F3EE] dark:text-[#161719]",
};

// ============================
// PROJECTS — Your portfolio work
// ============================
// Why: Keeping project data separate means:
//   1. WorkSection.jsx stays clean (just renders, no data)
//   2. You can easily add/remove/reorder projects here
//   3. Multiple components can access the same data (e.g. hover preview)

export const PROJECTS = [
  {
    id: "01",
    title: "Traveloop",
    role: "Lead Engineering",
    tags: ["React", "Node.js", "Prisma", "PostgreSQL", "Express", "Vite", "Tailwind CSS", "DeepSeek AI"],
    colorLight: "#E5E7EB",         
    colorDark: "#262626",
    link: "https://traveloop07.vercel.app/",
    desc: "Plan smarter trips — AI itineraries, live flight search, group expense splitting, all in one travel companion app.",
  },
  {
    id: "02",
    title: "Chat Application",
    role: "Full Stack Developer",
    tags: ["React", "WebSocket.io", "NodeJs", "MongoDB"],
    colorLight: "#D1FAE5",
    colorDark: "#14532D",
    link: "https://ragebait07.vercel.app/",
    desc: "Real-time chat application with messaging, user authentication, and live updates.",
  },
  {
    id: "03",
    title: "Meme-Matrix",
    role: "Full Stack Developer",
    tags: ["React", "Node.js", "pgvector", "AI", "HuggingFace"],
    colorLight: "#FEE2E2",
    colorDark: "#7F1D1D",
    link: "https://meme-matrix07.vercel.app/",
    desc: "Describe any situation in natural language and AI finds the most relevant meme using semantic embeddings and vector similarity search. ",
  },
  {
    id: "04",
    title: "SNIP — URL Shortener",
    role: "Full Stack Developer",
    tags: ["Node.js", "Docker", "PostgreSQL", "Redis", "JWT", "nginx"],
    colorLight: "#DBEAFE",
    colorDark: "#1E3A8A",
    link: "https://url-shortener-lime-five.vercel.app/",
    desc: "Production-grade URL shortener with JWT auth, Redis caching for sub-millisecond redirects, click analytics, and a multi-container Docker setup with nginx reverse proxy.",
  },
];

// ============================
// SOCIAL LINKS
// ============================
// Why: Same principle — define once, use anywhere.
// Update the URLs when you're ready to link to real profiles.

export const SOCIALS = [
  { label: "github.com/jainam", icon: "Github", url: "https://github.com/JainamShah0730" },
  { label: "x.com/jainam", icon: "X", url: "https://x.com/jainamshah1527" },
];
