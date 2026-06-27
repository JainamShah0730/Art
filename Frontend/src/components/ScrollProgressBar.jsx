// ============================
// ScrollProgressBar
// ============================
// PURPOSE: A thin 2px line at the very top of the page that grows from
// left to right as the user scrolls down. Gives visual feedback of progress.
//
// HOW IT WORKS:
//   1. useScroll() gives us `scrollYProgress` — a motion value from 0 to 1
//      (0 = top of page, 1 = bottom of page)
//   2. useSpring() wraps it to add smooth physics-based easing
//      (without this, the bar would jump instantly — spring makes it feel alive)
//   3. We apply `scaleX` via the `style` prop on a motion.div
//      - scaleX(0) = invisible, scaleX(1) = full width
//      - `origin-left` makes it scale from the left edge, not the center
//
// THIS IS SIMILAR TO: Your ScrollPhysics.jsx uses the same hooks!
//   - ScrollPhysics: useScroll → useVelocity → useTransform → useSpring → skewY
//   - ScrollProgressBar: useScroll → useSpring → scaleX
//   Same pattern, simpler use case.

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgressBar() {
  // scrollYProgress is a MotionValue that goes from 0 → 1
  const { scrollYProgress } = useScroll();

  // Smooth it out with spring physics
  // stiffness: how fast it catches up (higher = snappier)
  // damping: how much it resists (higher = less bouncy)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        h-[2px]
        bg-[#1A1A1A]
        z-[90]
        origin-left
      "
      // This is the magic — scaleX is a MotionValue, so it animates automatically
      // No useState, no useEffect, no re-renders — pure motion values
      style={{ scaleX }}
    />
  );
}
