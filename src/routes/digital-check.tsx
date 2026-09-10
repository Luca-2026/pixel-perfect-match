import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Faq } from "@/components/content/faq";
import { DigitalCheckForm } from "@/components/forms/digital-check-form";
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
            Wenige Angaben genügen. Die Anfrage geht direkt an Luca Sandhoff,
            Antwort in der Regel innerhalb eines Werktags.
          </p>

          <div className="mt-8">
            <DigitalCheckForm source="digital-check" submitLabel="Digital-Check anfragen" />
          </div>
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
                a: "Ja. Sie zahlen nichts und gehen keine Verpflichtung ein. Der Aufwand ist auf unserer Seite so kalkuliert, dass er zu einer belastbaren Ersteinschätzung reicht. nicht zu einem Vollaudit.",
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
