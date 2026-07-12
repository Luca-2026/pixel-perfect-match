import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/impressum")!;

export const Route = createFileRoute("/impressum")({
  head: () => routeHead(route),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/impressum", label: "Impressum" }]}
      />

      <Section tone="paper">
        <Container className="max-w-3xl">
          <div className="prose-legal space-y-10 text-ink/85">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Angaben gemäß § 5 DDG
              </h2>
              <address className="mt-4 not-italic leading-relaxed">
                Sandhoff Digital<br />
                Luca Sandhoff<br />
                Marienforster Weg 2<br />
                53343 Wachtberg
              </address>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Kontakt</h2>
              <ul className="mt-4 space-y-1 leading-relaxed">
                <li>
                  Telefon:{" "}
                  <a href="tel:+4922876388805" className="text-petrol">
                    0228 763 888 05
                  </a>
                </li>
                <li>
                  E-Mail:{" "}
                  <a href="mailto:luca@sandhoff.digital" className="text-petrol">
                    luca@sandhoff.digital
                  </a>
                </li>
                <li>
                  Web:{" "}
                  <a href="/kontakt" className="text-petrol">
                    sandhoff.digital/kontakt
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Umsatzsteuer</h2>
              <p className="mt-4 leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:{" "}
                <span className="metric">DE313102024</span>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Verantwortlich für journalistisch-redaktionelle Inhalte
              </h2>
              <p className="mt-4 leading-relaxed">Gemäß § 18 Abs. 2 MStV:</p>
              <address className="mt-2 not-italic leading-relaxed">
                Luca Sandhoff<br />
                Marienforster Weg 2<br />
                53343 Wachtberg
              </address>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">Haftungsausschluss</h2>

              <h3 className="mt-6 font-display text-base font-semibold text-ink">
                Haftung für Inhalte
              </h3>
              <p className="mt-2 leading-relaxed">
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte nach den allgemeinen Gesetzen verantwortlich. Eine
                Verpflichtung zur Überwachung übermittelter oder gespeicherter
                fremder Informationen besteht nicht.
              </p>

              <h3 className="mt-6 font-display text-base font-semibold text-ink">
                Haftung für Links
              </h3>
              <p className="mt-2 leading-relaxed">
                Diese Website enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
                Bei Bekanntwerden von Rechtsverletzungen werden entsprechende
                Links umgehend entfernt.
              </p>

              <h3 className="mt-6 font-display text-base font-semibold text-ink">
                Urheberrecht
              </h3>
              <p className="mt-2 leading-relaxed">
                Die auf dieser Website veröffentlichten Inhalte und Werke
                unterliegen dem deutschen Urheberrecht. Vervielfältigung,
                Bearbeitung, Verbreitung und jede Form der Verwertung außerhalb
                der Grenzen des Urheberrechts bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors. Downloads und Kopien sind nur
                für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
