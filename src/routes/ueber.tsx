import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { CtaSection } from "@/components/content/cta-section";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";
import majBrittAsset from "@/assets/maj-britt-breuer.webp.asset.json";

const route = findRoute("/ueber")!;

export const Route = createFileRoute("/ueber")({
  head: () => routeHead(route),
  component: Ueber,
});

function Ueber() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/ueber", label: "Über" }]}
        intro={
          <p>
            sandhoff.digital ist inhabergeführt. Sie sprechen direkt mit
            Luca Sandhoff, der Ihre Projekte konzipiert, umsetzt und
            betreut. Regional verwurzelt in der Region Bonn, deutschlandweit
            tätig, remote und vor Ort.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-3xl">
          <Eyebrow>Haltung</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            Unternehmer für Unternehmer
          </HeadlineDot>
          <div className="mt-6 space-y-5 text-ink/85">
            <p>
              Die meisten Digitalprojekte scheitern nicht an Technik,
              sondern an Kommunikation. An wechselnden Ansprechpartnern,
              an Angeboten, die im Kleingedruckten anders aussehen als in
              der Präsentation, an Reports, die niemand liest.
            </p>
            <p>
              sandhoff.digital arbeitet bewusst anders. Wir versprechen
              nichts, was wir nicht belegen können. Wir markieren
              Platzhalter als Platzhalter, statt sie hübsch klingend zu
              füllen. Und wir setzen um, was wir empfehlen.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-3xl">
          <Eyebrow>Inhaber</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            Luca Sandhoff
          </HeadlineDot>
          <div className="mt-6 space-y-5 text-ink/85">
            <p>
              Praxis aus IT und Medientechnik, angewendet an der
              Schnittstelle von Web, KI und Prozessen. Bei sandhoff.digital
              führe ich jedes Projekt persönlich. vom ersten Digital-Check
              bis zur laufenden Betreuung.
            </p>
            <p>
              Wenn Sie hier anrufen, geht mein Telefon. Wenn Sie schreiben,
              antworte ich. Kein Ticket-System, kein Junior im Zwischenschritt.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
            <li className="surface-card p-4">
              <p className="eyebrow">Sitz</p>
              <p className="mt-2 text-ink">Wachtberg bei Bonn</p>
            </li>
            <li className="surface-card p-4">
              <p className="eyebrow">Arbeitsweise</p>
              <p className="mt-2 text-ink">remote, vor Ort auf Wunsch</p>
            </li>
            <li className="surface-card p-4">
              <p className="eyebrow">Sprache</p>
              <p className="mt-2 text-ink">Deutsch, Englisch</p>
            </li>
            <li className="surface-card p-4">
              <p className="eyebrow">Kontakt</p>
              <p className="mt-2 text-ink">
                <Link to="/kontakt" className="text-petrol">Zum Kontakt</Link>
              </p>
            </li>
          </ul>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-3xl">
          <Eyebrow>Team</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            Kreativität im Haus
          </HeadlineDot>
          <div className="mt-8 grid gap-8 sm:grid-cols-[240px_1fr] sm:items-start">
            <div className="group overflow-hidden rounded-2xl border border-line">
              <img
                src={majBrittAsset.url}
                alt="Porträt von Maj-Britt Breuer, Kommunikationsdesignerin bei sandhoff.digital"
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-square h-full w-full object-cover object-[50%_38%] grayscale transition duration-700 group-hover:grayscale-0"
              />
            </div>
            <div className="space-y-5 text-ink/85">
              <h3 className="font-display text-lg font-semibold text-ink">
                Maj-Britt Breuer. Grafikdesign
              </h3>
              <p>
                Maj-Britt Breuer ist studierte Kommunikationsdesignerin und
                verantwortet bei sandhoff.digital den grafischen Teil. Von der
                Bildwelt über Layouts bis zum Feinschliff, der eine Website
                von einer Vorlage unterscheidet.
              </p>
              <p>
                So bleibt die kreative Arbeit dort, wo sie hingehört: im
                Haus, abgestimmt auf Konzept und Technik, ohne externe
                Zwischenstationen.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-3xl">
          <Eyebrow>Prinzipien</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            Wie wir arbeiten
          </HeadlineDot>
          <ol className="mt-8 space-y-6">
            {[
              {
                title: "Festpreis vor Beginn",
                body:
                  "Sie wissen vor Projektstart, was das Ergebnis kostet. Keine offene Stundenabrechnung.",
              },
              {
                title: "Ehrliche Empfehlungen",
                body:
                  "Wenn eine Leistung für Ihr Unternehmen aktuell nicht sinnvoll ist, sagen wir das. auch wenn wir daran verdient hätten.",
              },
              {
                title: "Belege statt Behauptungen",
                body:
                  "Zahlen kommen aus dokumentierten Quellen (Google Search Console, Google-Unternehmensprofil, freigegebene Kundenaussagen). Fehlt ein Beleg, schreiben wir Platzhalter.",
              },
              {
                title: "Eigentum bleibt bei Ihnen",
                body:
                  "Code, Zugänge, Inhalte gehören Ihnen. Wir betreuen, weil Sie es wollen, nicht weil Sie ohne uns nicht weiterkommen.",
              },
            ].map((p, i) => (
              <li key={p.title} className="flex gap-5">
                <span className="metric text-sm text-petrol">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-ink/80">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CtaSection
        headline="Lernen wir uns im Digital-Check kennen"
        body="Der Digital-Check ist der einfachste Weg, sich einen persönlichen Eindruck zu verschaffen. ohne Verkaufsgespräch, ohne Verpflichtung."
        secondaryHref="/kontakt"
        secondaryLabel="Direkt schreiben"
      />
    </>
  );
}
