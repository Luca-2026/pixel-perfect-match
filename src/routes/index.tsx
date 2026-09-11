import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check, Database, FileCheck2, MapPin, Sparkles, Workflow } from "lucide-react";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { findRoute, services } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";
import { SITE_URL } from "@/lib/site";
import ogStartseite from "@/assets/og-startseite.jpg.asset.json";
import lucaPortrait from "@/assets/luca-sandhoff.jpg.asset.json";
import sltLaptop from "@/assets/slt-laptop-mockup.png.asset.json";
import { LaptopMockup } from "@/components/showcase/laptop-mockup";
import { LogoWall } from "@/components/showcase/logo-wall";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";

const route = findRoute("/")!;

const serviceNumbers = ["01", "02", "03", "04"] as const;

export const Route = createFileRoute("/")({
  // Das Hero-Bild wird über fetchPriority="high" am <img> automatisch vorgeladen.
  head: () => {
    const base = routeHead(route);
    const ogImage = `${SITE_URL}${ogStartseite.url}`;
    return {
      ...base,
      meta: [
        ...base.meta,
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Luca Sandhoff, Inhaber von sandhoff.digital" },
        { name: "twitter:image", content: ogImage },
      ],
    };
  },
  component: Home,
});

function Home() {
  const reduce = useSafeReducedMotion();

  return (
    <>
      <section className="flex min-h-[calc(100svh-4rem)] items-center border-b border-line bg-mint py-6 sm:py-10">
        <Container>
          <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[minmax(250px,1fr)_minmax(210px,.72fr)] lg:gap-5">
            <motion.div
              className="surface-card flex min-w-0 min-h-[440px] flex-col justify-between p-7 sm:p-10 lg:col-span-8 lg:row-span-1 lg:min-h-0 lg:p-12"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <Eyebrow>{route.eyebrow}</Eyebrow>
                <HeadlineDot as="h1" className="mt-5 max-w-4xl break-words text-[clamp(2.65rem,7vw,6.5rem)] leading-[.94]">
                  {route.h1}
                </HeadlineDot>
              </div>
              <div className="mt-12 flex flex-col items-start justify-between gap-7 xl:flex-row xl:items-end">
                <p className="max-w-2xl text-xl leading-8 text-ink/75 sm:text-2xl">
                  Wir setzen KI-Automatisierung, Websites und Suchmaschinen-Sichtbarkeit
                  für kleine und mittelständische Unternehmen um. Messbar, zum Festpreis,
                  direkt mit dem Inhaber.
                </p>
                <Button asChild size="lg" className="shrink-0 bg-ink text-paper hover:bg-amber hover:text-ink">
                  <Link to="/digital-check" className="no-underline hover:no-underline">
                    Digital-Check starten
                    <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.figure
              className="group relative min-w-0 min-h-[430px] overflow-hidden rounded-[var(--radius)] bg-amber lg:col-span-4 lg:row-span-2 lg:min-h-0"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={lucaPortrait.url}
                alt="Luca Sandhoff, Inhaber von sandhoff.digital"
                width={1200}
                height={1600}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[50%_48%] grayscale transition duration-700 group-hover:grayscale-0"
                initial={reduce ? false : { scale: 1.06 }}
                animate={reduce ? undefined : { scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-ink/85 p-6 text-paper backdrop-blur-sm sm:p-8">
                <figcaption className="font-display text-2xl text-paper">Luca Sandhoff<span className="text-amber">.</span></figcaption>
                <p className="mt-1 text-sm text-paper/70">Inhaber und direkter Ansprechpartner</p>
              </div>
            </motion.figure>

            <motion.div
              className="surface-card flex min-w-0 flex-col justify-between overflow-hidden p-7 sm:p-9 lg:col-span-5"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <Eyebrow>Vier Disziplinen, ein Ziel</Eyebrow>
                <HeadlineDot as="h2" className="mt-3 text-2xl sm:text-3xl">
                  Mehr Wirkung im Tagesgeschäft
                </HeadlineDot>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {services.map((service) => (
                  <Link key={service.path} to={service.path} className="inline-flex min-h-11 items-center rounded-full border border-line bg-mint px-4 py-2 text-sm font-semibold text-ink no-underline hover:border-amber hover:no-underline">
                    {service.title}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-[var(--radius)] bg-ink p-7 text-paper sm:p-9 lg:col-span-3"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Sparkles className="h-5 w-5 text-amber" aria-hidden />
              <p className="mt-8 font-display text-2xl leading-tight text-paper">Drei Potenziale in einem Termin<span className="text-amber">.</span></p>
              <p className="mt-4 text-sm text-paper/65">Kostenlos, persönlich und ohne Verkaufsgespräch.</p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper py-12">
        <Container><LogoWall /></Container>
      </section>

      <Section tone="ink" className="overflow-hidden border-b border-line">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="min-w-0 lg:col-span-7">
                <Eyebrow className="text-amber">KI Prozessautomatisierung</Eyebrow>
                <HeadlineDot as="h2" className="mt-4 max-w-4xl text-paper">
                  Vom Datensatz zum Angebotsentwurf in rund 30 Sekunden
                </HeadlineDot>
                <p className="mt-6 max-w-3xl text-lg text-paper/75 sm:text-xl">
                  Eine Anfrage kommt an. Die KI erkennt den Bedarf, gleicht Kundendaten,
                  Leistungen und freigegebene Preisregeln ab, schlägt passende Positionen
                  vor und erstellt den Angebotsentwurf. Ihr Team prüft nur noch dort, wo
                  kaufmännische Verantwortung gefragt ist.
                </p>
              </div>
              <div className="min-w-0 border-l border-paper/20 pl-6 lg:col-span-5 lg:pl-10">
                <p className="font-display text-2xl leading-tight text-paper sm:text-3xl">
                  Nicht jede freie Stelle muss nachbesetzt werden<span className="text-amber">.</span>
                </p>
                <p className="mt-5 text-paper/70">
                  Wir automatisieren standardisierbare Arbeit und reduzieren den dafür
                  nötigen Personalaufwand. Wer seine Abläufe nicht neu denkt, überlässt
                  schnelleren Wettbewerbern Zeit und Marge.
                </p>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius)] border border-paper/20 bg-paper/20 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
            {[
              { icon: Workflow, step: "01", title: "Anfrage verstehen", body: "Eingaben und Dokumente werden strukturiert erfasst." },
              { icon: Database, step: "02", title: "Daten abgleichen", body: "Kunden, Leistungen und Regeln werden zusammengeführt." },
              { icon: Sparkles, step: "03", title: "Preis vorschlagen", body: "Das System matcht Positionen und erstellt einen Vorschlag." },
              { icon: FileCheck2, step: "04", title: "Angebot freigeben", body: "Der fertige Entwurf geht kontrolliert in die Freigabe." },
            ].map((item) => (
              <StaggerItem key={item.step} className="min-w-0 bg-ink p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <item.icon className="h-5 w-5 text-amber" aria-hidden />
                  <span className="metric text-xs text-paper/45">{item.step}</span>
                </div>
                <h3 className="mt-10 text-xl text-paper">{item.title}</h3>
                <p className="mt-3 text-sm text-paper/65">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 flex flex-col gap-6 border-t border-paper/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex max-w-2xl items-start gap-3 text-paper/75">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber" aria-hidden />
              <p>
                Inhabergeführt im Raum Bonn. Wir kommen in Ihr Unternehmen,
                führen die Lösung persönlich ein und schulen Ihr Team am echten Prozess.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0 bg-amber text-ink hover:bg-paper">
              <Link to="/leistungen/ki-automatisierung" className="no-underline hover:no-underline">
                KI Prozesse ansehen
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <Eyebrow>Case Study · SLT Rental</Eyebrow>
                <HeadlineDot as="h2" className="mt-4">Digitalisierung, die sichtbar wird</HeadlineDot>
                <p className="mt-5 text-lg text-ink/70">
                  Website, SEO, Google-Unternehmensprofile und der digitale Assistent „Renty“ greifen als ein System ineinander.
                </p>
                <Button asChild variant="outline" size="lg" className="mt-7 rounded-full">
                  <Link to="/referenzen" className="no-underline hover:no-underline">Case Study ansehen <ArrowRight aria-hidden /></Link>
                </Button>
              </div>
            </Reveal>
            <div className="overflow-hidden rounded-[var(--radius)] bg-mint p-4 sm:p-7">
              <LaptopMockup src={sltLaptop.url} alt="Referenz-Website slt-rental.de im Laptop-Mockup" liveUrl="https://slt-rental.de" liveLabel="slt-rental.de" />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mint" className="border-y border-line">
        <Container>
          <Reveal>
            <Eyebrow>Leistungen</Eyebrow>
            <HeadlineDot as="h2" className="mt-4 max-w-3xl">Vier Bausteine für messbare Digitalisierung</HeadlineDot>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12" gap={0.08}>
            {services.map((service, index) => (
              <StaggerItem key={service.path} className={`${index < 2 ? "lg:col-span-7 odd:lg:col-span-5" : "lg:col-span-5 even:lg:col-span-7"} min-w-0`}>
                <Link to={service.path} className="group surface-card flex min-w-0 h-full min-h-64 flex-col justify-between overflow-hidden p-7 no-underline transition-colors hover:border-amber hover:no-underline sm:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="metric text-sm text-amber">{serviceNumbers[index]}</span>
                    <ArrowRight className="h-5 w-5 text-ink transition-transform group-hover:translate-x-1" aria-hidden />
                  </div>
                  <div className="mt-12">
                    <h3 className="break-words text-2xl text-ink sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 max-w-xl text-ink/65">{service.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="rounded-[var(--radius)] bg-ink p-8 text-paper lg:col-span-5 sm:p-10">
              <Eyebrow className="text-amber">Belegte Ergebnisse</Eyebrow>
              <HeadlineDot as="h2" className="mt-4 text-paper">Von 12 auf 1.670 Klicks</HeadlineDot>
              <p className="mt-5 text-paper/70">Google Search Console, jeweils 28 Tage. Auszug vom 12. Juli 2026.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
              {[
                { label: "Klicks", value: 1670, suffix: "" },
                { label: "Impressionen", value: 65987, suffix: "" },
                { label: "Bewertungen", value: 335, suffix: "+" },
              ].map((item) => (
                <div key={item.label} className="surface-card flex min-h-48 flex-col justify-between p-6">
                  <p className="eyebrow">{item.label}</p>
                  <p className="font-display text-4xl text-ink"><CountUp to={item.value} />{item.suffix}<span className="text-amber">.</span></p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.75fr] lg:items-end">
            <Reveal>
              <Eyebrow className="text-amber">Kostenlos und unverbindlich</Eyebrow>
              <HeadlineDot as="h2" className="mt-4 max-w-4xl text-paper hyphens-none text-balance">Ihre drei größten Potenziale in einem Termin</HeadlineDot>
              <p className="mt-5 max-w-2xl text-lg text-paper/70">Wir schauen konkret auf Prozesse, Website und Sichtbarkeit. Sie erhalten eine klare Priorisierung ohne Verkaufsgespräch.</p>
            </Reveal>
            <div className="lg:justify-self-end">
              <ul className="space-y-3 text-sm text-paper/80">
                {["Direkt mit Luca Sandhoff", "Konkrete nächste Schritte", "Keine Verpflichtung"].map((line) => <li key={line} className="flex items-center gap-3"><Check className="h-4 w-4 text-amber" aria-hidden />{line}</li>)}
              </ul>
              <Button asChild size="lg" className="mt-7 bg-paper text-ink hover:bg-amber">
                <Link to="/digital-check" className="no-underline hover:no-underline">Digital-Check starten <ArrowRight aria-hidden /></Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
