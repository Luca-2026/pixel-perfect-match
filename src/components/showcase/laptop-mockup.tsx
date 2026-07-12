"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface LaptopMockupProps {
  src: string;
  alt: string;
}

/**
 * Fotorealistisches MacBook-Mockup mit weichem Parallax beim Scrollen.
 * Reines CSS — keine externen Bild-Assets für die Hardware.
 */
export function LaptopMockup({ src, alt }: LaptopMockupProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
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
        className="absolute -inset-x-10 -bottom-10 h-40 rounded-[50%] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-petrol) 35%, transparent), transparent 70%)",
        }}
      />

      {/* Deckel: dünner grauer Rahmen mit Notch */}
      <div className="relative rounded-t-2xl bg-gradient-to-b from-[#c8ccd1] to-[#9ea3a9] p-[10px] shadow-[0_30px_80px_-30px_rgba(15,42,55,0.55)] ring-1 ring-black/10">
        {/* Notch (Kamera) */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[10px] z-10 h-2 w-24 -translate-x-1/2 rounded-b-lg bg-[#1a1c1f]"
        />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-lg bg-[#0f1113] aspect-[16/10]">
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
            style={reduce ? undefined : { y }}
          />
          {/* subtiler Screen-Glanz */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.06) 100%)",
            }}
          />
        </div>
      </div>

      {/* Basis / Boden des Laptops */}
      <div className="relative mx-auto">
        <div className="h-3 rounded-b-[14px] bg-gradient-to-b from-[#b8bcc2] to-[#7f858c] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]" />
        {/* Trackpad-Aussparung Andeutung */}
        <div className="mx-auto -mt-[7px] h-[3px] w-24 rounded-b-md bg-[#5b6068]/60" />
      </div>
    </motion.div>
  );
}
