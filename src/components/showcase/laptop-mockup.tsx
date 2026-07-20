"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

interface LaptopMockupProps {
  src: string;
  alt: string;
  /** Optional: URL für dezenten "in neuem Tab öffnen"-Button unter dem Mockup. */
  liveUrl?: string;
  liveLabel?: string;
}

export function LaptopMockup({ src, alt, liveUrl, liveLabel }: LaptopMockupProps) {
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
      <div
        aria-hidden
        className="absolute -inset-x-10 bottom-2 h-40 rounded-[50%] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-petrol) 35%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto block w-full">
        <img src={src} alt={alt} loading="lazy" className="relative block w-full h-auto" />
      </div>

      {liveUrl && (
        <div className="mt-4 flex justify-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink/80 no-underline hover:bg-mint/40 hover:text-ink hover:no-underline"
          >
            {liveLabel ?? liveUrl.replace(/^https?:\/\//, "")} in neuem Tab öffnen
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      )}
    </motion.div>
  );
}
