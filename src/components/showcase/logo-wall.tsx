"use client";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "@tanstack/react-router";
import sltLogo from "@/assets/slt-rental-logo.png.asset.json";

/**
 * Ehrliche Kunden-Leiste. Aktuell freigegeben: SLT Rental.
 * Weitere Logos werden ergänzt, sobald schriftliche Freigaben vorliegen.
 */
const clients = [
  { name: "SLT Rental", src: sltLogo.url, href: "/referenzen" as const },
] as const;

export function LogoWall() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="eyebrow text-ink/60">Ausgewählte Projekte</p>
      <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 list-none p-0">
        {clients.map((c) => (
          <li key={c.name}>
            <Link
              to={c.href}
              className="group inline-flex items-center rounded-md px-2 py-1 no-underline hover:no-underline"
              aria-label={`Case Study zu ${c.name}`}
            >
              <img
                src={c.src}
                alt={`Logo ${c.name}`}
                className="h-10 w-auto opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-12"
                loading="lazy"
              />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
