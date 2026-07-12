import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { CtaSection } from "@/components/content/cta-section";
import { findRoute } from "@/lib/site-routes";
import type { RatgeberArticle } from "@/lib/ratgeber";
import { formatDate } from "@/lib/ratgeber";

interface ArticleLayoutProps {
  article: RatgeberArticle;
  children: ReactNode;
}

/**
 * Gemeinsames Layout für Ratgeber-Artikel:
 * Brotkrumen, Meta-Zeile (Thema, Datum, Lesezeit), H1, Inhalt,
 * "Weiterführend"-Block und CTA.
 * Rendert zusätzlich BlogPosting-JSON-LD passend zum Sichtbaren.
 */
export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const service = article.relatedServicePath
    ? findRoute(article.relatedServicePath)
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: "de-DE",
    author: {
      "@type": "Person",
      name: "Luca Sandhoff",
      url: "https://sandhoff.digital/ueber",
    },
    publisher: {
      "@type": "Organization",
      name: "sandhoff.digital",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sandhoff.digital${article.path}`,
    },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { to: "/ratgeber", label: "Ratgeber" },
          { to: article.path, label: article.title },
        ]}
      />
      <section className="border-b border-line bg-paper py-14 sm:py-20">
        <Container className="max-w-3xl">
          <Eyebrow>{article.topic}</Eyebrow>
          <HeadlineDot as="h1" className="mt-3">
            {article.title}
          </HeadlineDot>
          <p className="mt-6 text-sm text-ink/60">
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span aria-hidden> · </span>
            {article.readingMinutes} Min. Lesezeit
          </p>
        </Container>
      </section>

      <Section tone="paper">
        <Container className="max-w-3xl">
          <article className="prose-article">{children}</article>
        </Container>
      </Section>

      {service && (
        <Section tone="paper" className="border-t border-line">
          <Container className="max-w-3xl">
            <Eyebrow>Passende Leistung</Eyebrow>
            <HeadlineDot as="h2" className="mt-3">
              Sie möchten das umsetzen lassen
            </HeadlineDot>
            <Link
              to={service.path}
              className="surface-card mt-8 block p-6 no-underline hover:border-petrol hover:no-underline"
            >
              <h3 className="font-display text-base font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{service.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-petrol">
                Zur Leistung →
              </span>
            </Link>
          </Container>
        </Section>
      )}

      <CtaSection
        headline="Fragen zum Artikel"
        body="Wenn Sie das Thema konkret für Ihr Unternehmen einordnen möchten, ist der kostenlose Digital-Check die schnellste Antwort."
        secondaryHref="/kontakt"
        secondaryLabel="Direkt schreiben"
      />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
