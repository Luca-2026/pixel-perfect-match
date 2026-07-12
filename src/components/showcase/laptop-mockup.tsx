"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface LaptopMockupProps {
  src: string;
  alt: string;
}

/**
 * Laptop-Mockup: vorgerenderte PNG (Hardware + Screenshot in einem Bild),
 * mit weichem Parallax-Scale und Reveal-Animation.
 */
export function LaptopMockup({ src, alt }: LaptopMockupProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.99]);

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto w-full max-w-5xl"
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={reduce ? undefined : { scale }}
    >
      {/* Weicher Boden-Glow */}
      <div
        aria-hidden
        className="absolute -inset-x-10 bottom-2 h-40 rounded-[50%] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-petrol) 35%, transparent), transparent 70%)",
        }}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="relative mx-auto block w-full h-auto"
      />
    </motion.div>
  );
}
