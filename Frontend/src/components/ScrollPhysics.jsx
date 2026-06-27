import { motion, useVelocity, useScroll, useTransform, useSpring } from "motion/react";


export default function ScrollPhysics({ children }) {
    const { scrollY } = useScroll();
    // track scrolling speed 

    const velocity = useVelocity(scrollY)

    // convert velocity -> skew

    const skewY = useTransform(
        velocity,
        [-2000, 2000],
        [-3, 3]
    )

    // Smooth movement

    const SkewYSpring = useSpring(
        skewY, {
        stiffness: 200,
        damping: 30
    }
    )

    return (
        <motion.main

            style={{
                skewY: SkewYSpring
            }}

            className="min-h-screen
        overflow-hidden"
        >
            {children}
        </motion.main>
    )
} 