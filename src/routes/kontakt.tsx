import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/kontakt")!;

export const Route = createFileRoute("/kontakt")({
  head: () => routeHead(route),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/kontakt", label: "Kontakt" }]}
        intro={
          <p>
            Sie sprechen direkt mit dem Inhaber, nicht mit einem
            Vertriebsteam. Der schnellste Weg zu einer belastbaren
            Ersteinschätzung ist der kostenlose Digital-Check. Wenn Sie lieber
            klassisch schreiben oder anrufen, finden Sie unten alle Wege.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="surface-card p-6">
              <Eyebrow>Direkt starten</Eyebrow>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                Kostenloser Digital-Check
              </h2>
              <p className="mt-3 text-sm text-ink/70">
                Persönlicher Termin, in dem wir die drei größten Potenziale in
                Prozessen, Website und Sichtbarkeit für Ihr Unternehmen
                benennen. Unverbindlich, kein Newsletter.
              </p>
              <Link
                to="/digital-check"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-petrol px-4 py-2 text-sm font-medium text-paper no-underline hover:bg-ink hover:no-underline"
              >
                Digital-Check starten
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>

            <article className="surface-card p-6">
              <Eyebrow>Direkte Wege</Eyebrow>
              <h2 className="mt-3 font-display text-xl font-semibold text-ink">
                E-Mail oder Telefon
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/85">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden />
                  <a href="mailto:luca@sandhoff.digital" className="text-ink">
                    luca@sandhoff.digital
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden />
                  <a href="tel:+4922876388805" className="metric text-ink">
                    0228 763 888 05
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden />
                  <span>
                    Marienforster Weg 2<br />
                    53343 Wachtberg
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden />
                  <span>
                    Antwort in der Regel innerhalb eines Werktags,{" "}
                    Mo–Fr [Platzhalter Erreichbarkeitszeiten].
                  </span>
                </li>
              </ul>
            </article>
          </div>

          <p className="mt-10 text-sm text-ink/60">
            Rechnungsanschrift und Rechtsangaben finden Sie im{" "}
            <Link to="/impressum" className="text-petrol">
              Impressum
            </Link>
            . Informationen zur Datenverarbeitung stehen in der{" "}
            <Link to="/datenschutz" className="text-petrol">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
