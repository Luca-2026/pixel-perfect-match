"use client";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "@tanstack/react-router";
import sltLogo from "@/assets/slt-rental-logo.png.asset.json";
import malvegaLogo from "@/assets/malvega-logo.png.asset.json";
import zoomlionLogo from "@/assets/zoomlion-nrw-logo.png.asset.json";

/**
 * Kunden-Leiste. Alle gezeigten Logos sind freigegeben.
 * Interne Case Studies verlinken auf /referenzen, externe Kunden auf ihre Website (neuer Tab).
 */
type Client = {
  name: string;
  src: string;
  internal?: "/referenzen";
  href?: string;
};

const clients: readonly Client[] = [
  { name: "SLT Rental", src: sltLogo.url, internal: "/referenzen" },
  { name: "Malvega", src: malvegaLogo.url, href: "https://malvega.de" },
  { name: "Zoomlion NRW by SLT", src: zoomlionLogo.url, href: "https://www.zoomlion-nrw.de" },
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
        {clients.map((c) => {
          const img = (
            <img
              src={c.src}
              alt={`Logo ${c.name}`}
              className="h-10 w-auto opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-12"
              loading="lazy"
            />
          );
          return (
            <li key={c.name}>
              {c.internal ? (
                <Link
                  to={c.internal}
                  className="group inline-flex items-center rounded-md px-2 py-1 no-underline hover:no-underline"
                  aria-label={`Case Study zu ${c.name}`}
                >
                  {img}
                </Link>
              ) : (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center rounded-md px-2 py-1 no-underline hover:no-underline"
                  aria-label={`Website von ${c.name} öffnen`}
                >
                  {img}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
