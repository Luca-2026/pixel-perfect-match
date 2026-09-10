"use client";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { useLocation } from "@tanstack/react-router";

/** Feiner Fortschrittsbalken in Messing am oberen Rand. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 25,
    mass: 0.2,
  });
  if (reduce || !["/", "/referenzen"].includes(location.pathname)) return null;
  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-amber"
    />
  );
}
