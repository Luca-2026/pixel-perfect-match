import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { CtaSection } from "@/components/content/cta-section";
import { findRoute, services } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen")!;

export const Route = createFileRoute("/leistungen/")({
  head: () => routeHead(route),
  component: LeistungenIndex,
});

function LeistungenIndex() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/leistungen", label: "Leistungen" }]}
        intro={
          <p>
            Vier klar umrissene Leistungen für kleine und mittelständische
            Unternehmen: KI-Automatisierung, Webdesign, SEO und
            KI-Sichtbarkeit. Jede mit definiertem Ergebnis, transparentem
            Preis und einem Ansprechpartner. dem Inhaber.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="surface-card group flex min-w-0 flex-col overflow-hidden p-6 no-underline hover:border-amber hover:no-underline"
              >
                <Eyebrow>{s.eyebrow}</Eyebrow>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm text-ink/75">{s.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-petrol">
                  Zur Leistung
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Kombinationen</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            Die häufigsten Kombinationen im Mittelstand
          </HeadlineDot>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Sichtbarkeit aufbauen",
                body:
                  "Webdesign + SEO. Neue oder überarbeitete Website mit einem monatlichen SEO-Retainer, um planbar Anfragen zu erzeugen.",
                links: [
                  { to: "/leistungen/webdesign", label: "Webdesign" },
                  { to: "/leistungen/seo", label: "SEO" },
                ],
              },
              {
                title: "Zeit zurückgewinnen",
                body:
                  "KI-Automatisierung als Einstieg. Ein Prozess mit belegter Zeitersparnis, danach schrittweiser Ausbau.",
                links: [
                  { to: "/leistungen/ki-automatisierung", label: "KI-Automatisierung" },
                ],
              },
              {
                title: "Für die KI-Ära rüsten",
                body:
                  "SEO + KI-Sichtbarkeit. Sichtbar in Google und in KI-Antwortsystemen wie ChatGPT und Perplexity.",
                links: [
                  { to: "/leistungen/seo", label: "SEO" },
                  { to: "/leistungen/ki-sichtbarkeit", label: "KI-Sichtbarkeit" },
                ],
              },
            ].map((c) => (
              <article key={c.title} className="surface-card p-6">
                <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-sm text-ink/75">{c.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium text-ink no-underline hover:bg-mint/50 hover:no-underline"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection
        headline="Nicht sicher, welche Leistung passt"
        body="Genau dafür gibt es den Digital-Check. Wir schauen einmal strukturiert auf Ihr Unternehmen und empfehlen den nächsten sinnvollen Schritt."
        secondaryHref="/preise"
        secondaryLabel="Preise ansehen"
      />
    </>
  );
}
