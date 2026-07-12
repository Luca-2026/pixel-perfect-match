import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/preise")!;

// Ab-Preise sind vom Inhaber freigegeben (siehe site-routes.ts
// Meta-Descriptions). Detaillierte Leistungsbeschreibungen pro Paket
// folgen und sind hier bewusst als [Platzhalter] markiert.
type PriceTier = {
  path: string;
  name: string;
  price: string;
  unit: string;
  description: string;
  included: readonly string[];
  highlight?: boolean;
};

const priceTiers: readonly PriceTier[] = [
  {
    path: "/leistungen/webdesign",
    name: "Webdesign & Entwicklung",
    price: "ab 2.900 €",
    unit: "einmalig, netto",
    description:
      "Websites zum Festpreis mit sauberen SEO-Grundlagen und verbindlichem Liefertermin.",
    included: [
      "Konzeption, Struktur und Copywriting-Grundgerüst",
      "Umsetzung mit modernem Frontend, mobil zuerst",
      "Technisches SEO-Setup, Ladezeit-Optimierung",
      "Analytics- und Consent-Grundlage",
      "[Detailleistungen pro Paket folgen]",
    ],
  },
  {
    path: "/leistungen/seo",
    name: "SEO für KMU",
    price: "ab 890 €",
    unit: "pro Monat, netto",
    description:
      "Monatlicher Retainer für technisches SEO, Inhalte und lokale Sichtbarkeit.",
    included: [
      "Monatliche Priorisierung nach Wirkung, nicht nach Aufwand",
      "Technisches SEO, Content-Arbeit und interne Verlinkung",
      "Google-Unternehmensprofil-Pflege (regional)",
      "Reporting mit Klicks, Impressionen, Anfragen",
      "[Retainer-Stufen folgen]",
    ],
    highlight: true,
  },
  {
    path: "/leistungen/ki-automatisierung",
    name: "KI & Prozessautomatisierung",
    price: "Festpreis nach Digital-Check",
    unit: "projektbezogen, netto",
    description:
      "Automatisierung wiederkehrender Prozesse. Preis folgt aus dem konkreten Anwendungsfall.",
    included: [
      "Aufnahme des Ist-Prozesses und Zielbild",
      "Umsetzung mit dokumentierter Zeitersparnis",
      "Anbindung an bestehende Tools",
      "Übergabe und Schulung im Team",
      "[Beispielrechnungen folgen]",
    ],
  },
  {
    path: "/leistungen/ki-sichtbarkeit",
    name: "KI-Sichtbarkeit (AEO/GEO)",
    price: "Preis auf Anfrage",
    unit: "Kombi mit SEO empfohlen",
    description:
      "Sichtbarkeit in ChatGPT, Gemini, Perplexity und Google-KI. Ideal als Ergänzung zum SEO-Retainer.",
    included: [
      "Strukturierung der Inhalte für KI-Antwortsysteme",
      "Monitoring der Zitierungen",
      "Kombinierbar mit dem SEO-Retainer",
      "[Leistungsdetails folgen]",
    ],
  },
] as const;

export const Route = createFileRoute("/preise")({
  head: () => routeHead(route),
  component: Preise,
});

function Preise() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/preise", label: "Preise" }]}
        intro={
          <p>
            Alle Ab-Preise verstehen sich netto und sind Startwerte. Der
            Endpreis hängt von Umfang und Ausgangslage ab. Verbindliche
            Klarheit gibt es nach dem kostenlosen{" "}
            <Link to="/digital-check" className="text-petrol">
              Digital-Check
            </Link>
            .
          </p>
        }
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {priceTiers.map((t) => (
              <article
                key={t.path}
                className={`surface-card flex flex-col p-6 ${
                  t.highlight ? "border-petrol shadow-sm" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Eyebrow>Leistung</Eyebrow>
                    <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                      {t.name}
                    </h2>
                  </div>
                  {t.highlight && (
                    <span className="rounded-full bg-mint px-3 py-1 text-[11px] font-medium text-ink">
                      Am häufigsten gewählt
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-ink/70">{t.description}</p>

                <p className="metric mt-6 text-2xl font-semibold text-ink">
                  {t.price}
                  <span className="ml-2 text-sm font-normal text-ink/60">
                    {t.unit}
                  </span>
                </p>

                <ul className="mt-6 space-y-2 text-sm text-ink/80">
                  {t.included.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-petrol"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={t.path}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-petrol no-underline hover:underline"
                >
                  Leistungsdetails ansehen
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-md border border-line bg-mint/25 p-6 sm:p-8">
            <Eyebrow>Nächster Schritt</Eyebrow>
            <p className="mt-3 max-w-2xl font-display text-xl text-ink">
              Wir nennen Ihnen im Digital-Check einen konkreten Festpreis –
              vorher entstehen keine Kosten.
            </p>
            <Link
              to="/digital-check"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-petrol px-4 py-2 text-sm font-medium text-paper no-underline hover:bg-ink hover:no-underline"
            >
              Digital-Check starten
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
