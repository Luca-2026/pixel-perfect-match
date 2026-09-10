import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Reveal } from "@/components/motion/reveal";

interface CtaSectionProps {
  eyebrow?: string;
  headline: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CtaSection({
  eyebrow = "Nächster Schritt",
  headline,
  body,
  primaryHref = "/digital-check",
  primaryLabel = "Digital-Check starten",
  secondaryHref,
  secondaryLabel,
}: CtaSectionProps) {
  const reduce = useReducedMotion();
  return (
    <Section tone="ink" className="relative overflow-hidden">
      <Container className="relative max-w-4xl text-center">
        <Reveal>
          <Eyebrow className="text-amber">{eyebrow}</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 text-paper">
            {headline}
          </HeadlineDot>
          <p className="mt-4 text-paper/80">{body}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <motion.span
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="inline-block"
            >
              <Link
                to={primaryHref}
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink no-underline hover:bg-amber hover:no-underline"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </motion.span>
            {secondaryHref && secondaryLabel && (
              <motion.span
                whileHover={reduce ? undefined : { y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-block"
              >
                <Link
                  to={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-transparent px-6 py-3 text-sm font-semibold text-paper no-underline hover:bg-paper/10 hover:no-underline"
                >
                  {secondaryLabel}
                </Link>
              </motion.span>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
