import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp, Star, MapPin } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";
import sltLogo from "@/assets/slt-rental-logo.png.asset.json";

const route = findRoute("/referenzen")!;

// Alle Zahlen sind vom Kunden bestätigt bzw. direkt aus der Google
// Search Console entnommen (Zeitraum 28 Tage, Auszug vom 12. Juli 2026).
const sltMetrics = [
  { label: "Klicks aus der Google-Suche", before: "12", after: "1.670", note: "28 Tage, Google Search Console" },
  { label: "Impressionen in der Google-Suche", before: "400", after: "65.987", note: "28 Tage, Google Search Console" },
  { label: "Ø-Position in der Google-Suche", before: "[Platzhalter]", after: "13,4", note: "28 Tage, Google Search Console" },
  { label: "Klickrate (CTR)", before: "[Platzhalter]", after: "2,5 %", note: "28 Tage, Google Search Console" },
] as const;

const sltReviews = [
  { location: "Krefeld", count: "über 220", note: "echte Google-Bewertungen, innerhalb von rund zwölf Monaten" },
  { location: "Bonn", count: "über 115", note: "echte Google-Bewertungen, innerhalb von rund zwölf Monaten" },
] as const;

const sltServices = [
  { path: "/leistungen/seo", label: "SEO" },
  { path: "/leistungen/webdesign", label: "Webdesign" },
  { path: "/leistungen/ki-automatisierung", label: "KI-Automatisierung" },
  { path: "/leistungen/ki-sichtbarkeit", label: "KI-Sichtbarkeit" },
] as const;

export const Route = createFileRoute("/referenzen")({
  head: () => routeHead(route),
  component: Referenzen,
});

function Referenzen() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/referenzen", label: "Referenzen" }]}
        intro={
          <p>
            Wir zeigen hier ausschließlich Ergebnisse, die wir belegen können,
            und nur mit ausdrücklicher Freigabe der Kundinnen und Kunden.
            Alle Zahlen stammen aus der Google Search Console oder aus dem
            Google-Unternehmensprofil des jeweiligen Standorts.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-5xl">
          <article className="surface-card overflow-hidden">
            <header className="flex flex-wrap items-start justify-between gap-6 border-b border-line bg-mint/30 p-6 sm:p-8">
              <div className="flex min-w-0 items-start gap-5">
                <img
                  src={sltLogo.url}
                  alt="Logo SLT Rental"
                  className="h-16 w-16 shrink-0 rounded-md bg-paper object-contain p-1 ring-1 ring-line sm:h-20 sm:w-20"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <Eyebrow>Case Study 01 · Vermietung</Eyebrow>
                  <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                    SLT Rental
                  </p>
                  <p className="mt-1 text-sm text-ink/70">
                    Vermietung von Baumaschinen, Anhängern und Eventausstattung
                    in Nordrhein-Westfalen. Standorte in Krefeld, Bonn und
                    Mülheim.
                  </p>
                </div>
              </div>
              <div className="shrink-0 rounded-md border border-line bg-paper px-4 py-3 text-sm">
                <p className="eyebrow">Leistungen</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {sltServices.map((s) => (
                    <li key={s.path}>
                      <Link
                        to={s.path}
                        className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium text-ink no-underline hover:bg-mint/50 hover:no-underline"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </header>

            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="headline-dot text-2xl">
                  Von 12 auf 1.670 Klicks in der Google-Suche
                </h2>
                <p className="mt-4 text-ink/80">
                  Ausgangslage waren zwölf Klicks und rund 400 Impressionen
                  über 28 Tage. Ziel war eine belastbare Grundlage für
                  organische Anfragen und ein Google-Auftritt, der zu einem
                  regionalen Vermieter mit drei Standorten passt.
                </p>
                <p className="mt-4 text-ink/80">
                  Wir haben die Website neu aufgesetzt, die Inhalte
                  konsequent an tatsächlichen Suchanfragen ausgerichtet, die
                  Google-Unternehmensprofile für Krefeld und Bonn strukturiert
                  gepflegt und den digitalen Assistenten „Renty" für
                  wiederkehrende Anfragen automatisiert. Ergänzend arbeiten
                  wir daran, dass SLT Rental in KI-Antwortsystemen wie
                  ChatGPT und Google-KI als Quelle auftaucht.
                </p>
              </div>
              <aside className="rounded-md border border-line bg-paper p-5">
                <p className="eyebrow flex items-center gap-2">
                  <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                  Sichtbarkeit
                </p>
                <dl className="mt-4 space-y-4 text-sm">
                  {sltMetrics.map((m) => (
                    <div key={m.label} className="border-b border-line pb-3 last:border-none last:pb-0">
                      <dt className="text-xs font-medium text-ink/60">{m.label}</dt>
                      <dd className="metric mt-1 flex items-baseline gap-2 text-lg">
                        <span className="text-ink/50 line-through">{m.before}</span>
                        <span className="text-ink">→</span>
                        <span className="font-semibold text-petrol">{m.after}</span>
                      </dd>
                      <p className="mt-1 text-[11px] text-ink/50">{m.note}</p>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>

            <div className="grid gap-8 border-t border-line p-6 sm:p-8 md:grid-cols-2">
              <div>
                <p className="eyebrow flex items-center gap-2">
                  <Star className="h-3.5 w-3.5" aria-hidden />
                  Google-Bewertungen
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  Echte Rezensionen an zwei Standorten
                </h3>
                <p className="mt-3 text-sm text-ink/80">
                  Durch redaktionell begleitete Aktionen im Tagesgeschäft
                  haben die Standorte in rund zwölf Monaten diese Zahl an
                  echten Google-Bewertungen erreicht.
                </p>
                <ul className="mt-5 space-y-3">
                  {sltReviews.map((r) => (
                    <li key={r.location} className="flex items-start gap-3 rounded-md border border-line bg-paper p-4">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden />
                      <div>
                        <p className="metric text-base text-ink">
                          <span className="font-semibold">{r.count}</span>{" "}
                          Bewertungen · {r.location}
                        </p>
                        <p className="mt-0.5 text-xs text-ink/60">{r.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <figure className="rounded-md border border-dashed border-line bg-mint/20 p-5">
                <p className="eyebrow">Kundenstimme</p>
                <blockquote className="mt-3 font-display text-lg italic text-ink/70">
                  [Freigegebenes Zitat von SLT Rental folgt. Bis dahin bewusst
                  leer, wir erfinden keine Testimonials.]
                </blockquote>
                <figcaption className="mt-4 text-xs text-ink/60">
                  [Name, Funktion] · SLT Rental
                </figcaption>
              </figure>
            </div>

            <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-paper p-6 sm:p-8">
              <p className="text-sm text-ink/70">
                Datenquelle: Google Search Console (Property slt-rental.de)
                sowie Google-Unternehmensprofile Krefeld und Bonn. Auszug
                dokumentiert am 12. Juli 2026.
              </p>
              <Link
                to="/digital-check"
                className="inline-flex items-center gap-2 rounded-md bg-petrol px-4 py-2 text-sm font-medium text-paper no-underline hover:bg-ink hover:no-underline"
              >
                Eigenen Digital-Check starten
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </footer>
          </article>

          <p className="mt-10 text-sm text-ink/60">
            Weitere Case Studies folgen nach Freigabe der jeweiligen Kundinnen
            und Kunden. Wenn Sie eine vergleichbare Ausgangslage haben, lassen
            Sie uns im{" "}
            <Link to="/digital-check" className="text-petrol">
              Digital-Check
            </Link>{" "}
            gemeinsam draufschauen.
          </p>
        </Container>
      </Section>
    </>
  );
}
