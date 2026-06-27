// ============================
// THEME — Design tokens used across all sections
// ============================
// Why: Instead of hardcoding colors like "bg-[#F9F8F3]" in every component,
// we define them once here. If you ever want to change the palette,
// you only change it in this one file.

export const THEME = {
  // Light mode
  bg: "bg-[#F9F8F3]",         // Cream paper background
  text: "text-[#1A1A1A]",     // Ink black for text
  accent: "text-[#059669]",   // Sage green for highlights
  accentBg: "bg-[#D1FAE5]",   // Light green background
  border: "border-[#E5E3DA]", // Subtle warm border

  // Dark mode (used in footer)
  darkBg: "bg-[#1A1A1A]",
  darkText: "text-[#F9F8F3]",
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
    color: "#E5E7EB",         // Used for hover preview card background
    link: "https://traveloop07.vercel.app/", // The URL to visit when the project row is clicked
    desc: "Plan smarter trips — AI itineraries, live flight search, group expense splitting, all in one travel companion app.",
  },
  {
    id: "02",
    title: "Chat Application",
    role: "Full Stack Developer",
    tags: ["React", "WebSocket.io", "NodeJs", "MongoDB"],
    color: "#D1FAE5",
    link: "https://ragebait07.vercel.app/",
    desc: "Real-time chat application with messaging, user authentication, and live updates.",
  },
  {
    id: "03",
    title: "Meme-Matrix",
    role: "Full Stack Developer",
    tags: ["React", "Node.js", "pgvector", "AI", "HuggingFace"],
    color: "#FEE2E2",
    link: "https://meme-matrix07.vercel.app/",
    desc: "Describe any situation in natural language and AI finds the most relevant meme using semantic embeddings and vector similarity search. ",
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
