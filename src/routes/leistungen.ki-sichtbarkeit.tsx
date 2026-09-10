import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/content/service-layout";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen/ki-sichtbarkeit")!;

export const Route = createFileRoute("/leistungen/ki-sichtbarkeit")({
  head: () => routeHead(route),
  component: KiSichtbarkeit,
});

function KiSichtbarkeit() {
  return (
    <ServiceLayout
      route={route}
      serviceType="KI-Sichtbarkeit (Answer Engine Optimization)"
      crumbs={[
        { to: "/leistungen", label: "Leistungen" },
        { to: route.path, label: "KI-Sichtbarkeit" },
      ]}
      directAnswer={
        <p>
          KI-Sichtbarkeit, international auch Answer Engine Optimization
          (AEO) oder Generative Engine Optimization (GEO) genannt, verbessert
          die Voraussetzungen dafür, dass Systeme wie ChatGPT, Google-KI,
          Gemini, Perplexity und Claude Ihre Inhalte finden und als Quelle
          einordnen. Wir strukturieren Inhalte und begleiten das
          Monitoring der Zitierungen.
        </p>
      }
      forWho={[
        "Ihre Zielgruppe stellt Fragen zu Ihrer Branche zunehmend an KI-Systeme statt in eine Suchmaschine.",
        "Sie sehen bereits gelegentliche Erwähnungen in ChatGPT oder Google-KI und wollen das systematisch ausbauen.",
        "Sie betreiben klassisches SEO und möchten den nächsten Sichtbarkeitskanal aufbauen.",
        "Sie akzeptieren, dass KI-Sichtbarkeit ein junges Feld ist und Zahlen nicht so belastbar sind wie in der Google Search Console.",
      ]}
      pricingNote={
        <p>
          Preis auf Anfrage. Wir empfehlen KI-Sichtbarkeit fast immer in
          Kombination mit dem SEO-Retainer. strukturierte Inhalte wirken
          in beiden Kanälen.
        </p>
      }
      process={[
        {
          title: "Ist-Analyse",
          body:
            "Wir prüfen, in welchen KI-Systemen Ihr Unternehmen aktuell auftaucht und mit welchen Inhalten. Ergebnis: eine dokumentierte Ausgangsbasis.",
        },
        {
          title: "Inhalte strukturieren",
          body:
            "Fragen der Zielgruppe werden direkt beantwortet, Fakten sind sauber attribuiert. Wir arbeiten mit Direktantworten, klaren Kennzahlen und strukturierten Daten.",
        },
        {
          title: "Zitierbarkeit erhöhen",
          body:
            "Externe Erwähnungen, Fachverzeichnisse, Presse-Signale. wir machen Ihr Unternehmen zu einer Quelle, die KI-Systeme finden und einordnen.",
        },
        {
          title: "Monitoring",
          body:
            "Regelmäßiges Abfragen definierter Prompts, dokumentierte Zitierungen und Empfehlungen für den nächsten Zyklus.",
        },
      ]}
      faq={[
        {
          q: "Was ist der Unterschied zwischen SEO und KI-Sichtbarkeit?",
          a: "SEO optimiert dafür, dass Ihre Website in Suchergebnissen erscheint und Klicks bringt. KI-Sichtbarkeit optimiert dafür, dass KI-Antwortsysteme Ihre Inhalte als Quelle nutzen. oft ohne dass Nutzer klicken. Beides ergänzt sich, weil die technische Grundlage vieles teilt.",
        },
        {
          q: "Bringt KI-Sichtbarkeit noch Anfragen, wenn Nutzer nicht klicken?",
          a: "Eine Nennung kann Markenbekanntheit unterstützen. Ob daraus Anfragen entstehen, hängt von Thema, Darstellung und weiterem Nutzerweg ab. Direkte Verweise und wiederholte Erwähnungen lassen sich im Monitoring teilweise beobachten.",
        },
        {
          q: "Kann man den Erfolg messen?",
          a: "Teilweise. Wir dokumentieren definierte Prompts und deren Antworten über die Zeit, plus die klassischen SEO-Metriken. Ein vollständiges Analytics wie bei Google gibt es in den KI-Systemen bisher nicht.",
        },
        {
          q: "Sind die KI-Systeme nicht zu neu, um darauf zu setzen?",
          a: "Die Kanäle sind jung, aber die Nutzung wächst schnell. Wir empfehlen KI-Sichtbarkeit nur als Ergänzung zu solidem SEO, nicht als Ersatz. und sind ehrlich, wenn wir für Ihre Zielgruppe noch keinen Effekt sehen.",
        },
        {
          q: "Welche Systeme deckt das ab?",
          a: "Aktuell prüfen wir insbesondere ChatGPT und ChatGPT Search, Google-KI-Übersichten, Gemini, Perplexity und Claude. Neue Systeme nehmen wir auf, sobald sie relevant werden.",
        },
        {
          q: "Können wir das buchen, ohne SEO-Retainer?",
          a: "Grundsätzlich ja, wir raten in den meisten Fällen aber davon ab. Ohne technisch sauberes SEO-Fundament ist die Wirkung stark eingeschränkt.",
        },
      ]}
      related={[
        {
          path: "/leistungen/seo",
          label: "SEO für KMU",
          description: "Das technische und inhaltliche Fundament für KI-Sichtbarkeit.",
        },
        {
          path: "/leistungen/webdesign",
          label: "Webdesign",
          description: "Strukturierte Daten und sauberes HTML sind die Basis.",
        },
        {
          path: "/leistungen/ki-automatisierung",
          label: "KI-Automatisierung",
          description: "Aus KI-Sichtbarkeit werden Anfragen. der Assistent verarbeitet sie.",
        },
      ]}
      ctaHeadline="Wird Ihr Unternehmen in ChatGPT und Co. gefunden"
      ctaBody="Im Digital-Check prüfen wir konkret, wie sichtbar Sie in ChatGPT, Google-KI und Perplexity heute schon sind. und wo der größte Hebel liegt."
    >
      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Begriffe</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            AEO, GEO, LLMO. gemeint ist meist dasselbe
          </HeadlineDot>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                term: "AEO",
                long: "Answer Engine Optimization",
                body:
                  "Optimierung für Systeme, die direkte Antworten liefern statt Trefferlisten. etwa ChatGPT oder Perplexity.",
              },
              {
                term: "GEO",
                long: "Generative Engine Optimization",
                body:
                  "Synonym für AEO, häufig im englischsprachigen Raum verwendet. Fokus auf generative Antwort-Systeme.",
              },
              {
                term: "LLMO",
                long: "Large Language Model Optimization",
                body:
                  "Manchmal enger gemeint: die Optimierung, damit große Sprachmodelle Ihr Unternehmen und Ihre Fakten korrekt kennen.",
              },
            ].map((b) => (
              <article key={b.term} className="surface-card p-6">
                <p className="metric text-lg font-semibold text-petrol">{b.term}</p>
                <p className="mt-1 text-xs text-ink/60">{b.long}</p>
                <p className="mt-4 text-sm text-ink/75">{b.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </ServiceLayout>
  );
}
