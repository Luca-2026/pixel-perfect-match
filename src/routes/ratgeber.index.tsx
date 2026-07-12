import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { CtaSection } from "@/components/content/cta-section";
import { findRoute, services } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/ratgeber")!;

// Ratgeber-Artikel folgen in Etappe 4 als eigene Route-Files.
// Bis dahin zeigt der Hub bewusst leer, statt Themen zu erfinden.
const upcoming: { title: string; topic: string }[] = [];

export const Route = createFileRoute("/ratgeber/")({
  head: () => routeHead(route),
  component: Ratgeber,
});

function Ratgeber() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/ratgeber", label: "Ratgeber" }]}
        intro={
          <p>
            Praxisnahe Artikel zu KI, Webdesign, SEO und KI-Sichtbarkeit
            für Entscheider im Mittelstand. Ohne Hype, mit konkreten
            Beispielen aus dem KMU-Alltag. Wir veröffentlichen erst, wenn
            ein Artikel tatsächlich weiterhilft – lieber weniger, dafür
            belastbar.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-4xl">
          <div className="surface-card border-dashed p-8 text-center">
            <Eyebrow>Status</Eyebrow>
            <p className="mt-3 font-display text-xl text-ink">
              Die ersten Ratgeber-Artikel erscheinen in Kürze.
            </p>
            <p className="mt-3 text-sm text-ink/70">
              Wir starten mit sechs Artikeln zu KI-Automatisierung, Webdesign,
              SEO und KI-Sichtbarkeit. Bis zur Veröffentlichung stehen hier
              bewusst keine Platzhalter-Themen – Sie sollen den Inhalt
              lesen, den wir tatsächlich vertreten können.
            </p>
            {upcoming.length > 0 && (
              <ul className="mt-6 space-y-2 text-left text-sm">
                {upcoming.map((u) => (
                  <li key={u.title}>{u.title}</li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Solange</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            Konkrete Antworten finden Sie bereits in unseren Leistungsseiten
          </HeadlineDot>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="surface-card block p-6 no-underline hover:border-petrol hover:no-underline"
              >
                <h3 className="font-display text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{s.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-petrol">
                  Zur Leistung →
                </span>
              </Link>
            ))}
          </div>
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
