import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Faq } from "@/components/content/faq";
import { CtaSection } from "@/components/content/cta-section";
import { findRoute, services } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/digitalagentur-koeln")!;

export const Route = createFileRoute("/digitalagentur-koeln")({
  head: () => routeHead(route),
  component: Koeln,
});

function Koeln() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "sandhoff.digital",
    description: route.description,
    url: `https://sandhoff.digital${route.path}`,
    image: "https://sandhoff.digital/favicon.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marienforster Weg 2",
      postalCode: "53343",
      addressLocality: "Wachtberg",
      addressRegion: "Nordrhein-Westfalen",
      addressCountry: "DE",
    },
    telephone: "+4922876388805",
    email: "luca@sandhoff.digital",
    areaServed: [
      { "@type": "City", name: "Köln" },
      { "@type": "City", name: "Hürth" },
      { "@type": "City", name: "Leverkusen" },
      { "@type": "City", name: "Brühl" },
    ],
    priceRange: "€€",
  };

  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: route.path, label: "Köln" }]}
        intro={
          <p>
            Für Kölner Unternehmen aus Handwerk, Dienstleistung, Handel
            und lokalem Mittelstand: KI-Automatisierung, Webdesign, SEO
            und KI-Sichtbarkeit. Inhabergeführt, mit Sitz in Wachtberg –
            eine gute halbe Stunde nach Köln. Termine vor Ort auf Wunsch.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-5xl">
          <Eyebrow>Für Köln</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            Was Kölner Mittelständler von uns bekommen
          </HeadlineDot>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Fokus auf lokale Nachfrage",
                body:
                  "Statt Rankings für Metropol-Keywords bauen wir Sichtbarkeit dort auf, wo Ihre Kundschaft wirklich sucht: im Kölner Umfeld, mit Stadtteil- und Standortbezug.",
              },
              {
                title: "Klare Preise",
                body:
                  "Sie zahlen einen Festpreis nach Digital-Check. Kein Kölner Agentur-Sprech, keine offene Stundenabrechnung.",
              },
              {
                title: "Direkt zum Inhaber",
                body:
                  "Kein Junior im Zwischenschritt. Der, der bewertet und plant, setzt auch um.",
              },
            ].map((c) => (
              <article key={c.title} className="surface-card p-6">
                <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-sm text-ink/75">{c.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Leistungen für Köln</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            Digitalisierung, die für Kölner KMU funktioniert
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
                <span className="mt-4 inline-block text-sm font-medium text-petrol">Zur Leistung →</span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60">
            Sitz in Bonn oder Rhein-Sieg?{" "}
            <Link to="/digitalagentur-bonn" className="text-petrol">
              Zur Übersicht für Bonn
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Faq
            eyebrow="Region Köln"
            headline="Häufige Fragen aus Köln und Umgebung"
            items={[
              {
                q: "Muss ich für einen Termin nach Wachtberg kommen?",
                a: "Nein. Termine laufen meist per Videocall. Für Kick-Offs, Workshops oder Übergaben komme ich nach Köln – im Kernstadtgebiet und im Umland (Hürth, Leverkusen, Brühl) unkompliziert.",
              },
              {
                q: "Was kostet eine typische Website für ein Kölner KMU?",
                a: "Der Einstieg liegt bei 2.900 € netto einmalig, der finale Preis hängt vom Umfang ab. Verbindliche Klarheit gibt es nach dem kostenlosen Digital-Check.",
              },
              {
                q: "Warum keine Kölner Agentur mit Büro in der Stadt?",
                a: "Weil Sie den Unterschied im Ergebnis nicht spüren, im Preis aber schon. Wir arbeiten remote effizient und kommen für die Momente vorbei, in denen ein persönlicher Termin wirklich hilft.",
              },
              {
                q: "Setzen Sie Projekte auch auf Kölsch um?",
                a: "Nur wenn Sie darauf bestehen. Ansonsten Hochdeutsch, klar, ohne Agenturphrasen.",
              },
            ]}
          />
        </Container>
      </Section>

      <CtaSection
        headline="Digital-Check für Ihr Kölner Unternehmen"
        body="Der Digital-Check zeigt die drei größten Hebel für Ihr Unternehmen. Kostenlos, unverbindlich, ohne Verkaufsgespräch."
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
