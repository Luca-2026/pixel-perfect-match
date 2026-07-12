import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Faq } from "@/components/content/faq";
import { CtaSection } from "@/components/content/cta-section";
import { findRoute, services } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/digitalagentur-bonn")!;

export const Route = createFileRoute("/digitalagentur-bonn")({
  head: () => routeHead(route),
  component: Bonn,
});

function Bonn() {
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
      { "@type": "City", name: "Bonn" },
      { "@type": "City", name: "Königswinter" },
      { "@type": "City", name: "Wachtberg" },
      { "@type": "City", name: "Sankt Augustin" },
      { "@type": "City", name: "Bad Godesberg" },
    ],
    priceRange: "€€",
  };

  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: route.path, label: "Bonn" }]}
        intro={
          <p>
            Als inhabergeführte Digitalagentur mit Sitz in Wachtberg
            arbeiten wir für Unternehmen in Bonn und der Region an KI-
            Automatisierung, Websites, SEO und KI-Sichtbarkeit. Vor-Ort-
            Termine im Bonner Umland auf Wunsch, Zusammenarbeit
            überwiegend remote.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-5xl">
          <Eyebrow>Vor Ort</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            Warum Unternehmen aus Bonn mit uns arbeiten
          </HeadlineDot>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Kurze Wege",
                body:
                  "Sitz in Wachtberg, direkt am Bonner Stadtrand. Termine in Bonn, Bad Godesberg oder im Rhein-Sieg-Kreis lassen sich unkompliziert vor Ort machen.",
              },
              {
                title: "Regionale Sichtbarkeit",
                body:
                  "Wir kennen die lokalen Suchbegriffe und die Struktur der Bonner Google-Ergebnisse und optimieren gezielt für Ihr Einzugsgebiet.",
              },
              {
                title: "Persönlicher Ansprechpartner",
                body:
                  "Sie sprechen direkt mit dem Inhaber – nicht mit einem wechselnden Projektteam.",
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
          <Eyebrow>Leistungen in Bonn</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            Was wir für Bonner KMU umsetzen
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
            Für den Standort Köln haben wir eine{" "}
            <Link to="/digitalagentur-koeln" className="text-petrol">eigene Übersicht</Link>.
          </p>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Branchen</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            Typische Auftraggeber aus Bonn und der Region
          </HeadlineDot>
          <p className="mt-6 max-w-2xl text-ink/75">
            Wir arbeiten inhaltsoffen, sehen aber wiederkehrende Muster – in
            diesen Feldern kennen wir die typischen Prozesse und die Sprache
            der Kundschaft besonders gut:
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-ink/80 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Handwerk und Bauzulieferer",
              "Kanzleien und Beratungen",
              "Praxen und Gesundheitswesen",
              "Ausrüster und Vermietung",
              "Bildungs- und Weiterbildungsträger",
              "Vereine und Verbände",
            ].map((b) => (
              <li key={b} className="rounded-md border border-line bg-white px-4 py-3">
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/60">
            Belastbares Beispiel aus der Region:{" "}
            <Link to="/referenzen" className="text-petrol">
              Case Study SLT Rental
            </Link>
            .
          </p>
        </Container>


      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Faq
            eyebrow="Region Bonn"
            headline="Häufige Fragen aus Bonn und der Region"
            items={[
              {
                q: "Kommen Sie zu Terminen nach Bonn?",
                a: "Ja. Erstgespräche laufen meist per Videocall, weiterführende Workshops und Übergaben gerne vor Ort in Bonn, Bad Godesberg, Königswinter oder im Rhein-Sieg-Kreis.",
              },
              {
                q: "Arbeiten Sie nur mit Bonner Kunden?",
                a: "Nein. Wir sind bundesweit tätig. Der regionale Schwerpunkt ergibt sich aus dem Sitz in Wachtberg und aus laufenden Kundenprojekten in Nordrhein-Westfalen.",
              },
              {
                q: "Wie gut kennen Sie den Bonner Markt?",
                a: "Wir leben und arbeiten in der Region. Für die lokale SEO-Arbeit heißt das: Wir kennen typische Suchmuster, den Wettbewerbsdruck und die Besonderheiten der Bonner Google-Ergebnisse.",
              },
              {
                q: "Betreuen Sie auch Vereine und Bildungseinrichtungen aus Bonn?",
                a: "Grundsätzlich ja, sofern Umfang und Budget zueinander passen. Für gemeinnützige Organisationen prüfen wir individuell, ob eine reduzierte Kondition sinnvoll ist.",
              },
            ]}
          />
        </Container>
      </Section>

      <CtaSection
        headline="Digital-Check in Bonn oder online"
        body="Der kostenlose Digital-Check ist die einfachste Art, uns kennenzulernen – als Videocall oder auf einen Kaffee in Bonn."
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
