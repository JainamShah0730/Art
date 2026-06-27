import { useEffect, useState } from "react"
import { motion } from "motion/react"


export default function FloatingCursor() {

    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {

        const moveMouse = (e) => {
            setMousePos({
                x: e.clientX,

                y: e.clientY
            })
        }

        window.addEventListener("mousemove", moveMouse)

        return () => {
            window.removeEventListener(
                "mousemove", moveMouse
            )
        }


    }, [])

    return (
        <motion.div
            style={{
                left: mousePos.x,
                top: mousePos.y,

            }}

            initial={
                {
                    scale: 0
                }
            }
            animate={{
                scale: 1
            }}

            transition={{
                type: "spring",
                stiffness: 300,
                damping: 25
            }}

            className="
        fixed
        z-50
        pointer-events-none
        -translate-x-1/2
        -translate-y-1/2
        w-40
        h-28
        rounded-xl 
        bg-purple-500/30
        backdrop-blur-md
        "
        >

        </motion.div>
    )
}