import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Faq } from "@/components/content/faq";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/digital-check")!;

export const Route = createFileRoute("/digital-check")({
  head: () => routeHead(route),
  component: DigitalCheck,
});

function DigitalCheck() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/digital-check", label: "Digital-Check" }]}
        intro={
          <p>
            Der Digital-Check ist kostenlos und unverbindlich. Sie
            schildern in wenigen Sätzen Ihre Ausgangslage, wir liefern
            eine persönliche Einschätzung mit den drei größten Potenzialen
            in Prozessen, Website und Sichtbarkeit. Kein Newsletter, kein
            Verkaufsgespräch.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-5xl">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: CheckCircle2,
                title: "Was Sie bekommen",
                body:
                  "Eine schriftliche Einschätzung mit den drei größten Hebeln für Ihr Unternehmen, plus einer klaren Empfehlung, ob und in welcher Form wir helfen können.",
              },
              {
                icon: Clock,
                title: "Wie lange es dauert",
                body:
                  "Wenige Minuten für Ihre Angaben. Die Antwort kommt in der Regel innerhalb eines Werktags. Falls sinnvoll, laden wir zu einem kurzen Videocall ein.",
              },
              {
                icon: ShieldCheck,
                title: "Was Sie nicht bekommen",
                body:
                  "Keinen Newsletter, keine Cold Calls, keinen automatisch verlängerten Vertrag. Ihre Angaben verwenden wir ausschließlich für Ihre Anfrage.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <article key={title} className="surface-card p-6">
                <Icon className="h-5 w-5 text-petrol" aria-hidden />
                <h2 className="mt-4 font-display text-base font-semibold text-ink">{title}</h2>
                <p className="mt-3 text-sm text-ink/75">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-3xl">
          <Eyebrow>Ihre Anfrage</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            Erzählen Sie uns kurz, worum es geht
          </HeadlineDot>
          <p className="mt-4 text-sm text-ink/70">
            [Das Formular unten dient aktuell nur der Darstellung. In der
            nächsten Ausbaustufe wird die Anfrage direkt an den Inhaber
            übermittelt. Bis dahin bitte per{" "}
            <Link to="/kontakt" className="text-petrol">Kontakt</Link>{" "}
            direkt melden.]
          </p>

          <form
            className="mt-8 grid gap-5"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Digital-Check anfragen (Vorschau)"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-ink">Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  disabled
                  className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/20"
                  placeholder="Ihr vollständiger Name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink">Unternehmen</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  disabled
                  className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/20"
                  placeholder="Name Ihres Unternehmens"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink">E-Mail</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  disabled
                  className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/20"
                  placeholder="name@firma.de"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink">Website (optional)</span>
                <input
                  type="url"
                  name="website"
                  autoComplete="url"
                  disabled
                  className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/20"
                  placeholder="https://ihre-firma.de"
                />
              </label>
            </div>

            <fieldset className="rounded-md border border-line p-4">
              <legend className="px-1 text-sm font-medium text-ink">
                Worauf sollen wir schauen?
              </legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "KI-Automatisierung",
                  "Webdesign",
                  "SEO",
                  "KI-Sichtbarkeit",
                ].map((topic) => (
                  <label key={topic} className="flex items-center gap-2 text-sm text-ink/85">
                    <input
                      type="checkbox"
                      name="topics"
                      value={topic}
                      disabled
                      className="h-4 w-4 rounded border-line text-petrol focus:ring-petrol/30"
                    />
                    {topic}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="text-sm font-medium text-ink">Ausgangslage</span>
              <textarea
                name="message"
                rows={5}
                disabled
                className="mt-2 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/20"
                placeholder="Was läuft heute gut, wo drückt der Schuh? Ein paar Sätze reichen."
              />
            </label>

            <label className="flex items-start gap-3 text-sm text-ink/80">
              <input
                type="checkbox"
                name="privacy"
                required
                disabled
                className="mt-1 h-4 w-4 rounded border-line text-petrol focus:ring-petrol/30"
              />
              <span>
                Ich habe die{" "}
                <Link to="/datenschutz" className="text-petrol">Datenschutzerklärung</Link>{" "}
                gelesen und bin mit der Kontaktaufnahme einverstanden.
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-md bg-petrol/60 px-5 py-3 text-sm font-medium text-paper"
              >
                Anfrage senden
              </button>
              <p className="text-xs text-ink/60">
                [Anfrage-Backend folgt in der nächsten Etappe.]
              </p>
            </div>
          </form>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Faq
            eyebrow="Zum Ablauf"
            headline="Was Sie zum Digital-Check wissen sollten"
            items={[
              {
                q: "Ist der Digital-Check wirklich kostenlos?",
                a: "Ja. Sie zahlen nichts und gehen keine Verpflichtung ein. Der Aufwand ist auf unserer Seite so kalkuliert, dass er zu einer belastbaren Ersteinschätzung reicht – nicht zu einem Vollaudit.",
              },
              {
                q: "Bekomme ich einen fertigen Maßnahmenplan?",
                a: "Sie erhalten eine strukturierte Einschätzung mit den drei größten Potenzialen und der Empfehlung, ob und in welcher Reihenfolge diese angegangen werden sollten. Ein detaillierter Maßnahmenplan gehört zu bezahlten Folgeprojekten.",
              },
              {
                q: "Was passiert mit meinen Daten?",
                a: "Ihre Angaben verwenden wir ausschließlich für Ihre Anfrage. Kein Newsletter, keine Weitergabe an Dritte. Details stehen in der Datenschutzerklärung.",
              },
              {
                q: "Muss ich mich danach entscheiden?",
                a: "Nein. Viele Digital-Checks enden mit der ehrlichen Aussage, dass der beste nächste Schritt gar keine Zusammenarbeit ist. Das gehört dazu.",
              },
            ]}
          />
        </Container>
      </Section>
    </>
  );
}
