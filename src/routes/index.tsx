import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { findRoute, services } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";
import lucaPortrait from "@/assets/luca-sandhoff.jpg.asset.json";
import sltLaptop from "@/assets/slt-laptop-mockup.png.asset.json";
import { LaptopMockup } from "@/components/showcase/laptop-mockup";
import { LogoWall } from "@/components/showcase/logo-wall";

const route = findRoute("/")!;

export const Route = createFileRoute("/")({
  head: () => routeHead(route),
  component: Home,
});

function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-line bg-paper py-20 sm:py-24">
        {/* Dezente Marken-Aura hinter dem Hero */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--color-mint) 55%, transparent), transparent 70%)",
          }}
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--color-amber) 22%, transparent), transparent 70%)",
          }}
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2 }}
        />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            <Stagger className="max-w-2xl" gap={0.12} amount={0.3}>
              <StaggerItem>
                <Eyebrow>{route.eyebrow}</Eyebrow>
              </StaggerItem>
              <StaggerItem>
                <HeadlineDot as="h1" className="mt-4">
                  {route.h1}
                </HeadlineDot>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 text-lg text-ink/80 sm:text-xl">
                  Wir setzen KI-Automatisierung, Websites und Suchmaschinen-Sichtbarkeit
                  für kleine und mittelständische Unternehmen um. Messbar, zum Festpreis,
                  direkt mit dem Inhaber.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-8 flex flex-wrap gap-3">
                  <motion.span
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { y: 0, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="inline-block"
                  >
                    <Link
                      to="/digital-check"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-petrol px-5 py-3 text-sm font-medium text-paper no-underline shadow-sm transition-colors hover:bg-ink hover:no-underline"
                    >
                      <span className="relative z-10">Digital-Check starten</span>
                      <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      <span
                        aria-hidden
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                      />
                    </Link>
                  </motion.span>
                  <motion.span
                    whileHover={reduce ? undefined : { y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="inline-block"
                  >
                    <Link
                      to="/leistungen"
                      className="inline-flex items-center rounded-md border border-line bg-paper px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-mint/40 hover:no-underline"
                    >
                      Leistungen ansehen
                    </Link>
                  </motion.span>
                </div>
              </StaggerItem>
            </Stagger>

            <motion.figure
              className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
              initial={reduce ? false : { opacity: 0, y: 30, scale: 0.96 }}
              animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                aria-hidden
                className="absolute -inset-3 rounded-lg bg-amber/25 blur-2xl"
                initial={reduce ? false : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.6 }}
              />
              <div className="relative overflow-hidden rounded-lg border border-line bg-mint/30 shadow-sm">
                <motion.img
                  src={lucaPortrait.url}
                  alt="Luca Sandhoff, Inhaber von sandhoff.digital"
                  loading="eager"
                  className="aspect-[4/5] w-full object-cover object-[50%_28%]"
                  initial={reduce ? false : { scale: 1.08 }}
                  animate={reduce ? undefined : { scale: 1 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <figcaption className="mt-4 text-sm text-ink/70">
                <span className="block font-medium text-ink">Luca Sandhoff</span>
                Inhaber, Ihr direkter Ansprechpartner
              </figcaption>
            </motion.figure>
          </div>
        </Container>
      </section>

      {/* Logo-Leiste: aktuell nur freigegebene Kunden */}
      <section className="border-b border-line bg-paper py-10 sm:py-12">
        <Container>
          <LogoWall />
        </Container>
      </section>

      {/* Showcase: Referenz-Website im MacBook-Mockup */}
      <Section tone="paper" className="border-b border-line">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Case Study · SLT Rental</Eyebrow>
              <HeadlineDot as="h2" className="mt-3">
                Website, SEO und KI-Assistent aus einer Hand
              </HeadlineDot>
              <p className="mt-4 text-ink/80">
                Neu aufgebauter Auftritt für den NRW-Vermieter SLT Rental —
                inklusive digitalem Assistenten „Renty", der wiederkehrende
                Mietanfragen automatisiert beantwortet.
              </p>
            </div>
          </Reveal>
          <div className="mt-12">
            <LaptopMockup src={sltLaptop.url} alt="Referenz-Website slt-rental.de im Laptop-Mockup" />
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <Link
                to="/referenzen"
                className="group inline-flex items-center gap-2 rounded-md border border-line bg-paper px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-mint/40 hover:no-underline"
              >
                Case Study ansehen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="paper">

        <Container>
          <Reveal>
            <Eyebrow>Leistungen</Eyebrow>
            <HeadlineDot as="h2" className="mt-3 max-w-2xl">
              Vier Bausteine für messbare Digitalisierung
            </HeadlineDot>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2" gap={0.09}>
            {services.map((s) => (
              <StaggerItem key={s.path}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Link
                    to={s.path}
                    className="surface-card group relative flex h-full flex-col justify-between overflow-hidden p-6 no-underline transition-all hover:border-petrol hover:shadow-md hover:no-underline"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-petrol/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    <div>
                      <p className="eyebrow">{s.eyebrow}</p>
                      <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
                      <p className="mt-3 text-sm text-ink/70">{s.description}</p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-petrol">
                      Zur Leistung
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container>
          <Reveal>
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
          </Reveal>
          <Stagger as="ul" className="metric mt-10 grid gap-6 sm:grid-cols-3 list-none p-0" gap={0.1}>
            <StaggerItem as="li" className="rounded-md border border-line bg-paper p-5">
              <p className="eyebrow">Klicks (28 Tage)</p>
              <p className="mt-2 text-2xl font-semibold text-ink">
                12 → <span className="text-petrol"><CountUp to={1670} /></span>
              </p>
            </StaggerItem>
            <StaggerItem as="li" className="rounded-md border border-line bg-paper p-5">
              <p className="eyebrow">Impressionen (28 Tage)</p>
              <p className="mt-2 text-2xl font-semibold text-ink">
                400 → <span className="text-petrol"><CountUp to={65987} /></span>
              </p>
            </StaggerItem>
            <StaggerItem as="li" className="rounded-md border border-line bg-paper p-5">
              <p className="eyebrow">Google-Bewertungen</p>
              <p className="mt-2 text-2xl font-semibold text-ink">
                über <span className="text-petrol"><CountUp to={335} /></span>
              </p>
              <p className="mt-1 text-xs text-ink/60">
                Standorte Krefeld & Bonn, in rund 12 Monaten
              </p>
            </StaggerItem>
          </Stagger>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <Link
                to="/referenzen"
                className="group inline-flex items-center gap-2 rounded-md border border-line bg-paper px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-mint/40 hover:no-underline"
              >
                Zur Case Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="text-mint">Kostenlos & unverbindlich</Eyebrow>
            <HeadlineDot as="h2" className="mt-3 text-paper">
              Ihre drei größten Potenziale in einem Termin
            </HeadlineDot>
            <p className="mt-4 text-paper/80">
              Im Digital-Check schauen wir konkret auf Prozesse, Website und
              Sichtbarkeit und benennen die drei Baustellen mit dem größten Effekt.
              Persönlich, ohne Verkaufsgespräch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <motion.span
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-block"
              >
                <Link
                  to="/digital-check"
                  className="inline-flex items-center rounded-md bg-paper px-5 py-3 text-sm font-medium text-ink no-underline hover:bg-mint hover:no-underline"
                >
                  Digital-Check starten
                </Link>
              </motion.span>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
