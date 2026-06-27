
import { useState, useRef } from "react"
import { motion } from "motion/react"


export default function MagneticElement({ children }) {
    const ref = useRef(null)

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMove = (e) => {
        const element = ref.current;
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2
        const distanceX = e.clientX - centerX
        const distanceY = e.clientY - centerY
        const strength = 0.2

        setPosition({
            x: distanceX * strength,
            y: distanceY * strength
        })
    }
    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }
    return (
        <motion.div ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}

            animate={{ x: position.x, y: position.y }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15
            }}
        >
            {children}
        </motion.div>
    )
}
