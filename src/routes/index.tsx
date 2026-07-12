import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { findRoute, services } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";
import lucaPortrait from "@/assets/luca-sandhoff.jpg.asset.json";

const route = findRoute("/")!;

export const Route = createFileRoute("/")({
  head: () => routeHead(route),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="flex min-h-[calc(100svh-4rem)] items-center border-b border-line bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            <div className="max-w-2xl">
              <Eyebrow>{route.eyebrow}</Eyebrow>
              <HeadlineDot as="h1" className="mt-4">
                {route.h1}
              </HeadlineDot>
              <p className="mt-6 text-lg text-ink/80 sm:text-xl">
                Wir setzen KI-Automatisierung, Websites und Suchmaschinen-Sichtbarkeit
                für kleine und mittelständische Unternehmen um. Messbar, zum Festpreis,
                direkt mit dem Inhaber.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/digital-check"
                  className="inline-flex items-center rounded-md bg-petrol px-5 py-3 text-sm font-medium text-paper no-underline hover:bg-ink hover:no-underline"
                >
                  Digital-Check starten
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center rounded-md border border-line bg-paper px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-mint/40 hover:no-underline"
                >
                  Leistungen ansehen
                </Link>
              </div>
            </div>
            <figure className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
              <div className="relative overflow-hidden rounded-lg border border-line bg-mint/30 shadow-sm">
                <img
                  src={lucaPortrait.url}
                  alt="Luca Sandhoff, Inhaber von sandhoff.digital"
                  loading="eager"
                  className="aspect-[4/5] w-full object-cover object-[50%_28%]"
                />
              </div>
              <figcaption className="mt-4 text-sm text-ink/70">
                <span className="block font-medium text-ink">Luca Sandhoff</span>
                Inhaber, Ihr direkter Ansprechpartner
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <Section tone="paper">
        <Container>
          <Eyebrow>Leistungen</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-2xl">
            Vier Bausteine für messbare Digitalisierung
          </HeadlineDot>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="surface-card group flex flex-col justify-between p-6 no-underline transition-colors hover:border-petrol hover:no-underline"
              >
                <div>
                  <p className="eyebrow">{s.eyebrow}</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm text-ink/70">{s.description}</p>
                </div>
                <span className="mt-6 text-sm font-medium text-petrol">
                  Zur Leistung →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container>
          <Eyebrow>Ergebnisse</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-2xl">
            Von 12 auf 1.670 Klicks in der Google-Suche
          </HeadlineDot>
          <p className="mt-4 max-w-2xl text-ink/80">
            Für den Vermieter SLT Rental haben wir Website, SEO,
            Google-Unternehmensprofile und einen digitalen Assistenten
            aufgesetzt. Die Zahlen stammen direkt aus der Google Search
            Console, Auszug vom 12. Juli 2026.
          </p>
          <dl className="metric mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-md border border-line bg-paper p-5">
              <dt className="eyebrow">Klicks (28 Tage)</dt>
              <dd className="mt-2 text-2xl font-semibold text-ink">
                12 → <span className="text-petrol">1.670</span>
              </dd>
            </div>
            <div className="rounded-md border border-line bg-paper p-5">
              <dt className="eyebrow">Impressionen (28 Tage)</dt>
              <dd className="mt-2 text-2xl font-semibold text-ink">
                400 → <span className="text-petrol">65.987</span>
              </dd>
            </div>
            <div className="rounded-md border border-line bg-paper p-5">
              <dt className="eyebrow">Google-Bewertungen</dt>
              <dd className="mt-2 text-2xl font-semibold text-ink">
                über <span className="text-petrol">335</span>
              </dd>
              <p className="mt-1 text-xs text-ink/60">
                Standorte Krefeld & Bonn, in rund 12 Monaten
              </p>
            </div>
          </dl>
          <div className="mt-8">
            <Link
              to="/referenzen"
              className="inline-flex items-center rounded-md border border-line bg-paper px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-mint/40 hover:no-underline"
            >
              Zur Case Study
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="max-w-3xl text-center">
          <Eyebrow className="text-mint">Kostenlos & unverbindlich</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 text-paper">
            Ihre drei größten Potenziale in einem Termin
          </HeadlineDot>
          <p className="mt-4 text-paper/80">
            Im Digital-Check schauen wir konkret auf Prozesse, Website und
            Sichtbarkeit und benennen die drei Baustellen mit dem größten Effekt.
            Persönlich, ohne Verkaufsgespräch.
          </p>
          <div className="mt-8">
            <Link
              to="/digital-check"
              className="inline-flex items-center rounded-md bg-paper px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-mint hover:no-underline"
            >
              Digital-Check starten
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
