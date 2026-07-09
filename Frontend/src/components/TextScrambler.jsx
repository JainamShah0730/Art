import { useState } from "react";
import { motion } from "motion/react";

export default function TextScrambler({ text }) {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text.split("").map((char, index) => 
          index < iteration 
            ? text[index] 
            : chars[Math.floor(Math.random() * chars.length)]
        ).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };
  
  return <motion.span onMouseEnter={scramble}>{display}</motion.span>;
}