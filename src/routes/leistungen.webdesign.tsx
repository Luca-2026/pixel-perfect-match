import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/content/service-layout";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { ComparisonTable } from "@/components/content/comparison-table";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen/webdesign")!;

const packages = [
  {
    name: "Start",
    price: "ab 2.900 €",
    unit: "einmalig, netto",
    body:
      "Fokussierte Website mit bis zu fünf Seiten, klarem Angebot und Kontaktweg. Für Unternehmen, die endlich eine saubere Basis brauchen.",
    features: [
      "Konzept, Struktur, Copy-Grundgerüst",
      "Responsives Design, mobil zuerst",
      "Technisches SEO-Setup und Ladezeit-Optimierung",
      "Analytics- und Consent-Grundlage",
      "[Weitere Detailleistungen folgen]",
    ],
  },
  {
    name: "Business",
    price: "auf Anfrage",
    unit: "einmalig, netto",
    body:
      "Erweiterte Website mit Leistungs-, Standort- und Ratgeber-Sektionen. Für KMU, die Anfragen und Sichtbarkeit systematisch aufbauen.",
    features: [
      "Alles aus Start",
      "Mehrsprachigkeit oder mehrere Standorte möglich",
      "Redaktionelle Struktur für laufende Inhalte",
      "Formulare, Termin-Buchung, digitaler Assistent optional",
      "Webdesign startet ab 2.900 Euro netto. Den verbindlichen Festpreis erhalten Sie nach dem Digital-Check.",
    ],
  },
  {
    name: "Individuell",
    price: "Festpreis nach Digital-Check",
    unit: "einmalig, netto",
    body:
      "Für Anwendungsfälle jenseits klassischer Websites: Kundenportale, Produktkonfiguratoren, KI-Assistenten mit angebundenen Daten.",
    features: [
      "Technische Konzeption ab Digital-Check",
      "Anbindung an bestehende Systeme",
      "UX-Prototyp vor Umsetzung",
      "[Beispiele auf Anfrage]",
    ],
  },
] as const;

export const Route = createFileRoute("/leistungen/webdesign")({
  head: () => routeHead(route),
  component: Webdesign,
});

function Webdesign() {
  return (
    <ServiceLayout
      route={route}
      serviceType="Webdesign und Website-Entwicklung"
      crumbs={[
        { to: "/leistungen", label: "Leistungen" },
        { to: route.path, label: "Webdesign" },
      ]}
      directAnswer={
        <p>
          Websites für kleine und mittelständische Unternehmen zum Festpreis.
          Konzeption, Design, Umsetzung und SEO-Grundlagen kommen aus einer
          Hand. Ergebnis ist eine Website, die Anfragen bringt, schnell lädt
          und ohne Agentur weitergepflegt werden kann.
        </p>
      }
      forWho={[
        "Ihre aktuelle Website bringt zu wenig Anfragen oder wirkt nicht mehr zeitgemäß.",
        "Sie wollen einen verbindlichen Liefertermin und einen Festpreis, keine offene Stundenabrechnung.",
        "Sie brauchen eine solide SEO-Grundlage von Anfang an, nicht nachträglich.",
        "Sie möchten die Website später selbst pflegen können, ohne monatliche Agenturbindung.",
      ]}
      pricingNote={
        <p>
          Drei Pakete ab 2.900 € netto einmalig. Business- und Individuell-Preise
          folgen aus Umfang und Ausgangslage – verbindlich nach dem Digital-Check.
        </p>
      }
      process={[
        {
          title: "Digital-Check",
          body:
            "Wir klären Ziel, Zielgruppe, aktuelle Schwachstellen und den Umfang. Ergebnis ist ein Festpreis und ein verbindlicher Liefertermin.",
        },
        {
          title: "Konzept & Struktur",
          body:
            "Seitenbaum, Inhaltsstruktur, SEO-relevante Fragen. Sie geben schriftlich Freigabe, bevor wir designen.",
        },
        {
          title: "Design & Umsetzung",
          body:
            "Design im Browser, mobil zuerst. Zwischenstände sind jederzeit sichtbar, Änderungen laufen strukturiert.",
        },
        {
          title: "Live & Übergabe",
          body:
            "Launch, Weiterleitungen, Suchmaschinen-Anmeldung, Schulung im Team. Nach Launch entscheiden Sie, ob wir weiter betreuen sollen.",
        },
      ]}
      faq={[
        {
          q: "Wie lange dauert eine neue Website?",
          a: "Das Start-Paket ist typischerweise in vier bis sechs Wochen live, sobald Inhalte vorliegen. Größere Umfänge planen wir individuell und nennen den Termin verbindlich im Angebot.",
        },
        {
          q: "Bekommen wir Volltexte oder nur ein Gerüst?",
          a: "Wir liefern ein Copy-Grundgerüst mit Struktur, Direktantworten und SEO-relevanten Elementen. Fachliche Feintexte schreiben wir gemeinsam oder Sie liefern sie zu. Reine Textagenturleistung ist nicht enthalten.",
        },
        {
          q: "Welches System nutzen Sie?",
          a: "Wir setzen auf moderne, wartungsarme Frameworks mit statischer Auslieferung (aktuell TanStack Start auf Cloudflare). Für Redaktionsteams binden wir bei Bedarf ein Headless-CMS an – die Wahl legen wir im Digital-Check fest.",
        },
        {
          q: "Können wir später selbst Inhalte pflegen?",
          a: "Ja. Wir richten Redaktionszugänge ein oder trainieren Sie im direkten Umgang mit dem Repository, je nach Setup. Sie bleiben Eigentümer aller Zugänge.",
        },
        {
          q: "Ist Datenschutz und Barrierefreiheit enthalten?",
          a: "Datenschutz-Grundlagen (Consent, Datensparsamkeit) sind Teil jedes Pakets. Für vollständige Barrierefreiheit nach BFSG kalkulieren wir bei Bedarf zusätzlich – im Digital-Check klären wir den Umfang.",
        },
        {
          q: "Was passiert nach dem Launch?",
          a: "Wartung, Sicherheit und Content-Weiterentwicklung können Sie über einen kleinen Monats-Retainer buchen. Sie sind nicht verpflichtet – die Website bleibt in Ihrem Besitz und läuft auch ohne uns weiter.",
        },
      ]}
      related={[
        {
          path: "/leistungen/seo",
          label: "SEO für KMU",
          description: "Damit die neue Website nicht nur schön ist, sondern gefunden wird.",
        },
        {
          path: "/leistungen/ki-automatisierung",
          label: "KI & Automatisierung",
          description: "Digitale Assistenten und Formular-Automatisierung integrieren sich direkt.",
        },
        {
          path: "/preise",
          label: "Preise",
          description: "Alle Paketpreise und Retainer auf einen Blick.",
        },
      ]}
      ctaHeadline="Bereit für eine Website, die Anfragen bringt"
      ctaBody="Im kostenlosen Digital-Check bewerten wir Ihre aktuelle Website und schlagen ein passendes Paket mit Festpreis und Liefertermin vor."
    >
      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Pakete</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-2xl">
            Drei Pakete, Festpreis, kein Kleingedrucktes
          </HeadlineDot>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {packages.map((p, i) => (
              <article key={p.name} className={`surface-card flex flex-col p-6 ${i === 1 ? "border-petrol" : ""}`}>
                <p className="metric text-sm text-petrol">{p.name}</p>
                <p className="mt-3 font-display text-2xl font-semibold text-ink">
                  {p.price}
                </p>
                <p className="mt-1 text-xs text-ink/60">{p.unit}</p>
                <p className="mt-4 text-sm text-ink/75">{p.body}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-petrol" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Vergleich</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            Festpreis-Webdesign vs. klassische Agentur nach Stunden
          </HeadlineDot>
          <div className="mt-8">
            <ComparisonTable
              headings={{ us: "sandhoff.digital", them: "Klassische Agentur" }}
              rows={[
                { label: "Preisklarheit vor Projektstart", us: "Festpreis", them: "Grobschätzung" },
                { label: "Verbindlicher Liefertermin", us: true, them: false },
                { label: "Technisches SEO enthalten", us: true, them: "Aufpreis üblich" },
                { label: "Ansprechpartner", us: "Inhaber, direkt", them: "Projektmanager" },
                { label: "Nach Launch übergeben", us: true, them: "oft Wartungsvertrag Pflicht" },
                { label: "Eigentum an Code & Zugängen", us: "Sie", them: "unterschiedlich" },
              ]}
            />
          </div>
        </Container>
      </Section>
    </ServiceLayout>
  );
}
