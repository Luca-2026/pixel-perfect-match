import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/content/service-layout";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { ComparisonTable } from "@/components/content/comparison-table";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen/seo")!;

export const Route = createFileRoute("/leistungen/seo")({
  head: () => routeHead(route),
  component: Seo,
});

function Seo() {
  return (
    <ServiceLayout
      route={route}
      serviceType="Suchmaschinenoptimierung (SEO)"
      crumbs={[
        { to: "/leistungen", label: "Leistungen" },
        { to: route.path, label: "SEO" },
      ]}
      directAnswer={
        <p>
          SEO für KMU heißt bei uns: technisches Fundament, Inhalte mit
          Kauf- oder Kontaktabsicht und lokale Sichtbarkeit im
          Google-Unternehmensprofil. Wir arbeiten monatlich, priorisieren
          nach Wirkung und berichten in Klicks und Anfragen, nicht in
          Rankinglisten. Belegtes Beispielergebnis: 12 → 1.670 Klicks in
          28 Tagen bei einem Kunden aus der Vermietbranche
          (Google Search Console, Auszug vom 12.07.2026).
        </p>
      }
      forWho={[
        "Sie werden aktuell zu selten gefunden. oder unter falschen Begriffen.",
        "Ihre Website ist grundsätzlich in Ordnung, aber es fehlt eine kontinuierliche SEO-Arbeit.",
        "Sie wollen wissen, welche Themen Anfragen bringen, nicht nur, welche Rankings sich ändern.",
        "Sie haben mindestens einen physischen Standort oder ein klar umrissenes Einzugsgebiet.",
      ]}
      pricingNote={
        <p>
          Monatlicher Retainer ab 890 € netto. Der Umfang orientiert sich
          an Ausgangslage und Zielen. wir empfehlen keinen Retainer, den
          Sie nicht brauchen.
        </p>
      }
      process={[
        {
          title: "SEO-Bestandsaufnahme",
          body:
            "Technik, Inhalte, lokale Sichtbarkeit, Wettbewerb. Ergebnis: dokumentierte Baustellen mit erwarteter Wirkung.",
        },
        {
          title: "Monatlicher Plan",
          body:
            "Wir priorisieren nach Wirkung, nicht nach Aufwand. Sie sehen jeden Monat, woran wir arbeiten und warum.",
        },
        {
          title: "Umsetzung & Inhalte",
          body:
            "Technische Fixes, neue Landingpages, Ratgeber-Artikel, Google-Unternehmensprofil-Pflege. je nach Priorität.",
        },
        {
          title: "Reporting in Anfragen",
          body:
            "Monatliches Reporting mit Klicks, Impressionen, Positionen und. wo trackbar. Anfragen. Keine Vanity-Metrics.",
        },
      ]}
      faq={[
        {
          q: "Wie lange dauert es, bis SEO wirkt?",
          a: "Erste technische Verbesserungen wirken innerhalb von Wochen. Bei Inhalten und lokaler Sichtbarkeit sind drei bis sechs Monate realistisch, bevor die Zahlen deutlich anziehen. Der SLT-Rental-Verlauf zeigt, was in rund einem Jahr möglich ist. Ergebnisse sind aber keine Garantie und hängen von Branche, Wettbewerb und Ausgangslage ab.",
        },
        {
          q: "Machen Sie auch Linkaufbau?",
          a: "Wir kaufen keine Links. Unser Fokus liegt auf verlinkungswürdigen Inhalten, sauberen Google-Unternehmensprofilen und regionalen Erwähnungen. Wenn wir Digital-PR sinnvoll finden, sagen wir das transparent.",
        },
        {
          q: "Was ist der Unterschied zu klassischer SEO-Beratung?",
          a: "Wir liefern die Umsetzung mit, weil SEO ohne Umsetzung selten wirkt. Beratung, technische Änderungen, Inhalte und Reporting kommen aus einer Hand.",
        },
        {
          q: "Wie berücksichtigen Sie KI-Suchen wie ChatGPT und Google-KI?",
          a: "Unsere SEO-Arbeit legt automatisch die Grundlage, damit KI-Systeme Ihre Inhalte zitieren können. Für gezielte Sichtbarkeit in KI-Antworten gibt es ergänzend unsere Leistung KI-Sichtbarkeit.",
        },
        {
          q: "Können wir den Retainer monatlich kündigen?",
          a: "Ja. Wir arbeiten ohne Mindestlaufzeit und ohne automatische Verlängerung. Sie bleiben, weil die Ergebnisse stimmen, nicht weil der Vertrag es verlangt.",
        },
        {
          q: "Braucht meine kleine Firma SEO überhaupt?",
          a: "Wenn Ihre Kunden im Netz nach Ihrer Leistung suchen, ja. Für sehr lokale Handwerks- und Dienstleistungsbetriebe reicht oft schon eine Kombination aus solider Website und gepflegtem Google-Unternehmensprofil.",
        },
      ]}
      related={[
        {
          path: "/leistungen/ki-sichtbarkeit",
          label: "KI-Sichtbarkeit",
          description: "Ergänzung zu SEO für ChatGPT, Gemini und Perplexity.",
        },
        {
          path: "/leistungen/webdesign",
          label: "Webdesign",
          description: "Ohne technisch saubere Website hat SEO ein Fundament aus Sand.",
        },
        {
          path: "/referenzen",
          label: "Referenzen",
          description: "Konkreter SEO-Fall: SLT Rental von 12 auf 1.670 Klicks.",
        },
      ]}
      ctaHeadline="Wo verlieren Sie heute Suchanfragen"
      ctaBody="Der kostenlose Digital-Check zeigt Ihnen die drei größten SEO-Baustellen für Ihr Unternehmen. ohne Verkaufsgespräch, mit konkreten Empfehlungen."
    >
      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Vergleich</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            SEO-Retainer bei sandhoff.digital vs. klassische SEO-Agentur
          </HeadlineDot>
          <div className="mt-8">
            <ComparisonTable
              headings={{ us: "sandhoff.digital", them: "Große SEO-Agentur" }}
              rows={[
                { label: "Ansprechpartner", us: "Inhaber, direkt", them: "Junior Account" },
                { label: "Umsetzung inklusive", us: true, them: "oft nur Empfehlungen" },
                { label: "Reporting in Anfragen statt Rankings", us: true, them: false },
                { label: "Mindestlaufzeit", us: "keine", them: "12 Monate üblich" },
                { label: "Lokale Sichtbarkeit (Google-Profil)", us: true, them: "Aufpreis" },
                { label: "Ergänzung KI-Sichtbarkeit möglich", us: true, them: "selten" },
              ]}
            />
          </div>
        </Container>
      </Section>
    </ServiceLayout>
  );
}
