import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/datenschutz")!;

export const Route = createFileRoute("/datenschutz")({
  head: () => routeHead(route),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/datenschutz", label: "Datenschutz" }]}
        intro={
          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese
            Erklärung informiert über Art, Umfang und Zweck der Verarbeitung
            personenbezogener Daten auf sandhoff.digital. Der ausführliche,
            juristisch geprüfte Volltext wird ergänzt, sobald die Website
            veröffentlicht und die eingesetzten Dienste final sind.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-ink/85">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Verantwortliche Stelle
              </h2>
              <address className="mt-4 not-italic leading-relaxed">
                Luca Sandhoff<br />
                Marienforster Weg 2<br />
                53343 Wachtberg<br />
                E-Mail:{" "}
                <a href="mailto:luca@sandhoff.digital" className="text-petrol">
                  luca@sandhoff.digital
                </a>
                <br />
                Telefon:{" "}
                <a href="tel:+4922876388805" className="text-petrol">
                  0228 763 888 05
                </a>
              </address>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p className="mt-4 leading-relaxed">
                Beim Aufruf dieser Website werden durch den Browser
                automatisch technisch notwendige Informationen an unseren
                Server übermittelt (z. B. IP-Adresse, Datum und Uhrzeit,
                aufgerufene Seite). Diese Daten dienen ausschließlich dem
                Betrieb und der Sicherheit der Website. Eine Weitergabe an
                Dritte findet nicht statt.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Kontaktaufnahme
              </h2>
              <p className="mt-4 leading-relaxed">
                Wenn Sie uns per Kontaktformular, E-Mail oder Telefon
                erreichen, verarbeiten wir Ihre Angaben ausschließlich zur
                Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an der Beantwortung von
                Anfragen). Wir nutzen Ihre Angaben nicht für Newsletter oder
                automatisierte Werbung.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Ihre Rechte
              </h2>
              <p className="mt-4 leading-relaxed">
                Sie haben das Recht auf Auskunft (Art. 15 DSGVO),
                Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
                Einschränkung der Verarbeitung (Art. 18 DSGVO),
                Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch
                (Art. 21 DSGVO). Bitte wenden Sie sich dazu an die oben
                genannte verantwortliche Stelle. Es besteht ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde.
              </p>
            </section>

            <section className="rounded-md border border-dashed border-line bg-mint/20 p-5">
              <h2 className="font-display text-base font-semibold text-ink">
                Hinweis
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                [Ausführliche Datenschutzerklärung inkl. Auflistung aller
                eingesetzten Dienste (Hosting, Analyse, ggf. Videocall) wird
                vor Veröffentlichung juristisch geprüft ergänzt. Fragen zum
                Datenschutz bitte an{" "}
                <a href="mailto:luca@sandhoff.digital" className="text-petrol">
                  luca@sandhoff.digital
                </a>{" "}
                oder über{" "}
                <Link to="/kontakt" className="text-petrol">
                  /kontakt
                </Link>
                .]
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}
