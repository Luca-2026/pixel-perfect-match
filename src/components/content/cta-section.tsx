import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";

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
  return (
    <Section tone="ink">
      <Container className="max-w-3xl text-center">
        <Eyebrow className="text-mint">{eyebrow}</Eyebrow>
        <HeadlineDot as="h2" className="mt-3 text-paper">
          {headline}
        </HeadlineDot>
        <p className="mt-4 text-paper/80">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to={primaryHref}
            className="inline-flex items-center gap-2 rounded-md bg-paper px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-mint hover:no-underline"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              to={secondaryHref}
              className="inline-flex items-center gap-2 rounded-md border border-paper/30 bg-transparent px-5 py-3 text-sm font-medium text-paper no-underline hover:bg-paper/10 hover:no-underline"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </Container>
    </Section>
  );
}
