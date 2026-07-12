import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/agb")!;

export const Route = createFileRoute("/agb")({
  head: () => routeHead(route),
  component: Agb,
});

function Agb() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/agb", label: "AGB" }]}
        intro={
          <p>
            Für unsere Leistungen gelten die folgenden Rahmenbedingungen.
            Der abschließende, rechtlich geprüfte AGB-Volltext wird ergänzt,
            sobald die Angebotspakete final sind. Bis dahin gelten
            projektindividuelle Vereinbarungen im jeweiligen Angebot.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-ink/85">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Vertragspartner</h2>
              <p className="mt-4 leading-relaxed">
                Vertragspartner ist Luca Sandhoff, Marienforster Weg 2,
                53343 Wachtberg. Die vollständigen Angaben finden Sie im{" "}
                <Link to="/impressum" className="text-petrol">Impressum</Link>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Angebot und Auftrag</h2>
              <p className="mt-4 leading-relaxed">
                Angebote sind freibleibend und beziehen sich auf den im
                Angebot beschriebenen Leistungsumfang. Ein Auftrag kommt
                durch schriftliche oder textliche Bestätigung (z. B. per
                E-Mail) zustande.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Preise und Zahlungsbedingungen</h2>
              <p className="mt-4 leading-relaxed">
                Alle Preise verstehen sich zzgl. der gesetzlichen
                Umsatzsteuer. Zahlungsziel ist 14 Tage nach Rechnungsstellung
                ohne Abzug, sofern im Angebot nichts anderes vereinbart ist.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Nutzungsrechte</h2>
              <p className="mt-4 leading-relaxed">
                Der Auftraggeber erhält mit vollständiger Bezahlung die
                Nutzungsrechte an den vertraglich vereinbarten Leistungen im
                vereinbarten Umfang.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Kündigung laufender Leistungen
              </h2>
              <p className="mt-4 leading-relaxed">
                Monatliche Retainer (z. B. SEO-Retainer) sind mit einer
                Frist von vier Wochen zum Monatsende kündbar, sofern im
                Angebot keine abweichende Regelung getroffen wurde.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Haftung</h2>
              <p className="mt-4 leading-relaxed">
                Wir haften nach den gesetzlichen Vorschriften für Vorsatz
                und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit ist
                die Haftung auf die Verletzung wesentlicher Vertragspflichten
                beschränkt.
              </p>
            </section>

            <section className="rounded-md border border-dashed border-line bg-mint/20 p-5">
              <h2 className="font-display text-base font-semibold text-ink">Hinweis</h2>
              <p className="mt-3 text-sm leading-relaxed">
                [Die abschließenden AGB werden juristisch geprüft und vor
                Veröffentlichung ergänzt. Für laufende Projekte gilt jeweils
                das schriftliche Angebot.]
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
