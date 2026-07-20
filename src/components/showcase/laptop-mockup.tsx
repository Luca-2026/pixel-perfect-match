"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

interface LaptopMockupProps {
  src: string;
  alt: string;
  /** Wenn gesetzt, wird die Ziel-URL live im Screen-Bereich als iframe geladen. */
  liveUrl?: string;
  /** Sichtbarer Titel/Domain-Label im Chrome-Balken über dem Live-Frame. */
  liveLabel?: string;
}

// Screen-Bereich innerhalb der Mockup-PNG (1920x1248), ausgemessen.
const SCREEN = {
  top: 14.26,
  left: 11.72,
  right: 12.4,
  bottom: 22.52,
} as const;

export function LaptopMockup({ src, alt, liveUrl, liveLabel }: LaptopMockupProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
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

        {liveUrl && (
          <div
            className="absolute overflow-hidden bg-white"
            style={{
              top: `${SCREEN.top}%`,
              left: `${SCREEN.left}%`,
              right: `${SCREEN.right}%`,
              bottom: `${SCREEN.bottom}%`,
            }}
          >
            {!loaded && (
              <img
                src={src}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full"
                style={{
                  // Screenshot-Ausschnitt exakt auf den Screen-Bereich zoomen,
                  // damit der Fallback während des Ladens deckungsgleich sitzt.
                  objectFit: "none",
                  objectPosition: `-${(SCREEN.left / 100) * 1920}px -${(SCREEN.top / 100) * 1248}px`,
                  transform: `scale(${1 / ((100 - SCREEN.left - SCREEN.right) / 100)})`,
                  transformOrigin: "top left",
                }}
              />
            )}
            <iframe
              src={liveUrl}
              title={liveLabel ?? alt}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              className="relative h-full w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        )}
      </div>

      {liveUrl && (
        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-ink/60">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 font-mono">
            <span className="h-2 w-2 rounded-full bg-mint" aria-hidden />
            Live: {liveLabel ?? liveUrl.replace(/^https?:\/\//, "")}
          </span>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 text-petrol no-underline hover:underline"
          >
            in neuem Tab öffnen
            <ExternalLink className="h-3 w-3" aria-hidden />
          </a>
        </div>
      )}
    </motion.div>
  );
}
