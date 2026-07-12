import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { CtaSection } from "@/components/content/cta-section";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";
import { articles, formatDate } from "@/lib/ratgeber";

const route = findRoute("/ratgeber")!;

export const Route = createFileRoute("/ratgeber/")({
  head: () => routeHead(route),
  component: Ratgeber,
});

function Ratgeber() {
  const sorted = [...articles].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/ratgeber", label: "Ratgeber" }]}
        intro={
          <p>
            Praxisnahe Artikel zu KI, Webdesign, SEO und KI-Sichtbarkeit für
            Entscheider im Mittelstand. Ohne Hype, mit konkreten Beispielen
            aus dem KMU-Alltag. Wir veröffentlichen erst, wenn ein Artikel
            tatsächlich weiterhilft – lieber weniger, dafür belastbar.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-4xl">
          <Eyebrow>Alle Artikel</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            Aktuelle Ratgeber-Artikel
          </HeadlineDot>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {sorted.map((article) => (
              <li key={article.slug} className="py-6">
                <Link
                  to={article.path}
                  className="group grid gap-4 no-underline hover:no-underline md:grid-cols-[140px_1fr] md:gap-8"
                >
                  <div className="text-xs text-ink/60">
                    <span className="eyebrow block text-petrol">{article.topic}</span>
                    <time dateTime={article.publishedAt} className="mt-2 block">
                      {formatDate(article.publishedAt)}
                    </time>
                    <span className="mt-1 block">{article.readingMinutes} Min.</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink group-hover:text-petrol">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/75">{article.excerpt}</p>
                    <span className="mt-3 inline-block text-sm font-medium text-petrol">
                      Weiterlesen →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaSection
        headline="Frage, die kein Artikel abdeckt"
        body="Stellen Sie sie uns direkt im Digital-Check. Wir sind ehrlich, wenn wir die Antwort nicht sofort haben."
        secondaryHref="/kontakt"
        secondaryLabel="Direkt schreiben"
      />
    </>
  );
}
