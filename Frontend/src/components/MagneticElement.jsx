import { useState, useRef } from "react";
import { motion } from "motion/react";

export default function MagneticElement({ children, strength = 0.2 }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  
  const handleMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPos({ 
      x: (clientX - (left + width / 2)) * strength, 
      y: (clientY - (top + height / 2)) * strength 
    });
  };
  
  return (
    <motion.div
      ref={ref} 
      onMouseMove={handleMove} 
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }} 
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
