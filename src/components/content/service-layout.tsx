import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Faq, type FaqItem } from "@/components/content/faq";
import { CtaSection } from "@/components/content/cta-section";
import type { SiteRoute } from "@/lib/site-routes";
import type { Crumb } from "@/components/layout/breadcrumbs";

export interface ServiceStep {
  title: string;
  body: string;
}

export interface ServiceLayoutProps {
  route: SiteRoute;
  crumbs: Crumb[];
  directAnswer: ReactNode;
  forWho: readonly string[];
  process: readonly ServiceStep[];
  pricingNote: ReactNode;
  faq: readonly FaqItem[];
  related: readonly { path: string; label: string; description: string }[];
  ctaHeadline: string;
  ctaBody: string;
  children?: ReactNode;
  serviceType: string; // z. B. "Prozessautomatisierung"
}

export function ServiceLayout({
  route,
  crumbs,
  directAnswer,
  forWho,
  process,
  pricingNote,
  faq,
  related,
  ctaHeadline,
  ctaBody,
  children,
  serviceType,
}: ServiceLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "ProfessionalService",
      name: "sandhoff.digital",
      url: "https://sandhoff.digital",
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "City", name: "Bonn" },
        { "@type": "City", name: "Köln" },
      ],
    },
    name: route.title,
    description: route.description,
    url: `https://sandhoff.digital${route.path}`,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Kleine und mittelständische Unternehmen (KMU)",
    },
  };

  return (
    <>
      <PageHeader route={route} crumbs={crumbs} intro={directAnswer} />

      <Section tone="paper">
        <Container className="max-w-5xl">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
            <div>
              <Eyebrow>Für wen passt das</Eyebrow>
              <HeadlineDot as="h2" className="mt-3">
                Passt zu Ihnen, wenn
              </HeadlineDot>
              <ul className="mt-6 space-y-3">
                {forWho.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-petrol" />
                    <span className="text-ink/85">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="surface-card h-fit p-6">
              <Eyebrow>Preis</Eyebrow>
              <div className="mt-3 text-ink/85">{pricingNote}</div>
              <Link
                to="/preise"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-petrol no-underline hover:underline"
              >
                Alle Preise ansehen
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </aside>
          </div>
        </Container>
      </Section>

      {children}

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>So arbeiten wir</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-2xl">
            In vier Schritten zum Ergebnis
          </HeadlineDot>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title} className="surface-card p-6">
                <p className="metric text-sm text-petrol">Schritt {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm text-ink/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Faq items={faq} />
        </Container>
      </Section>

      {related.length > 0 && (
        <Section tone="paper" className="border-t border-line">
          <Container className="max-w-5xl">
            <Eyebrow>Passt dazu</Eyebrow>
            <HeadlineDot as="h2" className="mt-3">
              Weiterlesen
            </HeadlineDot>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.path}
                  to={r.path}
                  className="surface-card block p-6 no-underline hover:border-petrol hover:no-underline"
                >
                  <h3 className="font-display text-base font-semibold text-ink">{r.label}</h3>
                  <p className="mt-2 text-sm text-ink/70">{r.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-petrol">
                    Ansehen <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaSection headline={ctaHeadline} body={ctaBody} secondaryHref="/preise" secondaryLabel="Preise ansehen" />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
