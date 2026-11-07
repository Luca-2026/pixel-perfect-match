import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Users, ClipboardList, CalendarClock, ReceiptText, Cable, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = (() => {
  const registeredRoute = findRoute("/leistungen/individualsoftware");
  if (!registeredRoute) throw new Error("Individualsoftware service is not registered");
  return registeredRoute;
})();

const modules = [
  {
    title: "Kundenportal",
    icon: Users,
    body: "Ihre Kunden sehen freigegebene Dokumente, Aufträge und den Bearbeitungsstand. Sie stellen Anfragen und ergänzen Angaben direkt im Portal. Zugriffsrechte begrenzen die Ansicht auf die jeweiligen Kundendaten.",
  },
  {
    title: "Angebots- und Auftragsabwicklung",
    icon: ClipboardList,
    body: "Ihr Team erstellt Angebote aus Kunden-, Leistungs- und Preisdaten. Freigaben, PDF-Dokumente und Auftragsstatus bleiben zugeordnet. Ein angenommenes Angebot bildet die Grundlage für die weitere Bearbeitung.",
  },
  {
    title: "Zeiterfassung und Disposition",
    icon: CalendarClock,
    body: "Mitarbeiter erfassen Zeiten zu Aufträgen. Die Disposition plant Personal, Fahrzeuge und Geräte nach Verfügbarkeit. Änderungen stehen den berechtigten Mitarbeitern in derselben Anwendung zur Verfügung.",
  },
  {
    title: "Rechnungsstellung mit DATEV-Export",
    icon: ReceiptText,
    body: "Abgerechnete Leistungen werden aus den Auftragsdaten übernommen. Wir stimmen Belegaufbau, Steuerangaben und das benötigte DATEV-Exportformat mit Ihrer Buchhaltung ab. Anforderungen an E-Rechnungen klären wir im Projekt.",
  },
  {
    title: "Schnittstellen per API",
    icon: Cable,
    body: "Wir verbinden Buchhaltung, Zahlung und Telefonie über verfügbare APIs. Wir prüfen Zugänge, Datenformate und Grenzen des jeweiligen Anbieters. Fehler und fehlgeschlagene Übertragungen werden nachvollziehbar protokolliert.",
  },
  {
    title: "KI-Assistenz innerhalb der Plattform",
    icon: Sparkles,
    body: "KI unterstützt bei der Suche in freigegebenen Informationen, bei Textentwürfen und bei der Vorbereitung von Angeboten. Berechtigungen gelten auch für den KI-Zugriff. Fachliche Entscheidungen und Freigaben bleiben bei Ihren Mitarbeitern.",
  },
] as const;

const steps = [
  { title: "Prozessaufnahme", body: "Wir erfassen Ihre Abläufe, verwendeten Tools und wiederkehrenden Datenübertragungen. Gemeinsam legen wir den ersten Prozess, die Verantwortlichkeiten und die Abnahmekriterien fest." },
  { title: "Datenmodell", body: "Wir definieren Kunden, Aufträge, Leistungen und ihre Beziehungen. Dazu gehören Zugriffsrechte, vorhandene Datenquellen und die Übernahme Ihrer Bestandsdaten." },
  { title: "Erster nutzbarer Stand in 6–8 Wochen", body: "Für einen klar abgegrenzten ersten Umfang planen wir sechs bis acht Wochen. Ihr Team prüft diesen Stand mit einem vereinbarten Ablauf. Der Termin hängt von Umfang, Datenzugängen und Ihren Freigaben ab und wird vor Beginn abgestimmt." },
  { title: "Betrieb und Weiterentwicklung", body: "Nach der Abnahme führen wir die Anwendung ein. Wir vereinbaren Betreuung, Aktualisierungen und die nächsten Erweiterungen. Anforderungen aus dem laufenden Betrieb werden priorisiert und einzeln umgesetzt." },
] as const;

const questions = [
  { q: "Wer hat die Hoheit über unsere Daten?", a: "Ihre Unternehmensdaten bleiben Ihnen zugeordnet. Wir vereinbaren Zugriffsrechte, Exportformate und die Datenübergabe bei Vertragsende. Rechte am Quellcode und die Übergabe von Zugängen halten wir im Angebot und im Vertrag fest." },
  { q: "Kann die Anwendung in der EU gehostet werden?", a: "EU-Hosting kann als Anforderung vereinbart werden. Wir prüfen dabei den Standort der Anwendung, der Datenbank und der Sicherungen. Für eingebundene Zahlungs-, Telefonie- oder KI-Dienste prüfen wir Datenflüsse und Unterauftragnehmer gesondert." },
  { q: "Was passiert bei einem Ausfall?", a: "Wir legen Sicherungen, Überwachung und einen Wiederherstellungsablauf fest. Reaktionszeiten und Wiederherstellungsziele gehören in die Betriebsvereinbarung. Für kritische Abläufe stimmen wir eine Übergangslösung ab. Ein Betrieb ohne jeden Ausfall lässt sich nicht zusichern." },
  { q: "Wie vergleichen sich die Kosten mit SaaS-Tools?", a: "Individualsoftware verursacht zunächst Kosten für Konzeption und Entwicklung. Im Betrieb fallen Hosting, Wartung und gegebenenfalls Gebühren angebundener Dienste an. Im Workshop vergleichen wir diese Kosten mit Ihren Lizenzen, Datenübertragungen und manuellen Arbeitsschritten. Eine pauschale Ersparnis lässt sich daraus nicht ableiten." },
  { q: "Lässt sich die Plattform später erweitern?", a: "Wir berücksichtigen geplante Erweiterungen im Datenmodell und in den Schnittstellen. Neue Funktionen erhalten einen abgestimmten Umfang und werden vor der Einführung getestet. Änderungen externer APIs oder zusätzliche Anforderungen können Anpassungen erfordern." },
  { q: "Wer wartet den Code?", a: "Wir können Wartung und Weiterentwicklung übernehmen. Umfang, Zuständigkeiten und Reaktionszeiten werden vertraglich vereinbart. Für eine spätere Übergabe halten wir Dokumentation, Zugänge und Nutzungsrechte fest. Ein anderer Dienstleister benötigt eine Einarbeitung und passende Kenntnisse des eingesetzten Stacks." },
] as const;

function WorkshopLink() {
  return (
    <Button asChild size="lg" className="h-auto min-h-12 max-w-full whitespace-normal rounded-md px-5 py-3 text-center">
      <Link to="/kontakt" className="no-underline hover:no-underline">
        Prozess-Workshop anfragen <ArrowUpRight aria-hidden />
      </Link>
    </Button>
  );
}

export const Route = createFileRoute("/leistungen/individualsoftware")({
  head: () => routeHead(route),
  component: Individualsoftware,
});

function Individualsoftware() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/leistungen", label: "Leistungen" }, { to: "/leistungen/individualsoftware", label: "Individualsoftware" }]}
        intro={
          <div className="space-y-6">
            <p className="text-base font-semibold text-ink">Individualsoftware &amp; Betriebsplattformen für den Mittelstand</p>
            <p>Wir entwickeln eine Anwendung für Ihre betrieblichen Abläufe. Kunden, Angebote, Aufträge und Ressourcen arbeiten auf einer gemeinsamen Datengrundlage. Der Umfang richtet sich nach Ihren Prozessen.</p>
            <WorkshopLink />
          </div>
        }
      />

      <Section tone="paper">
        <Container className="max-w-5xl">
          <Reveal>
            <Eyebrow>Zielgruppe</Eyebrow>
            <HeadlineDot as="h2" className="mt-3">Für wen</HeadlineDot>
            <div className="mt-6 max-w-3xl space-y-4 text-ink/80">
              <p>Die Leistung richtet sich an kleine und mittelständische Unternehmen mit 10 bis 100 Mitarbeitern. Sie verwalten Aufträge in Excel und nutzen mehrere SaaS-Tools für einzelne Aufgaben.</p>
              <p>Medienbrüche entstehen bei der Übergabe zwischen diesen Werkzeugen. Mitarbeiter übertragen dieselben Angaben mehrfach. Der aktuelle Auftragsstand verteilt sich auf Tabellen, E-Mails und einzelne Konten.</p>
              <p>Im Prozess-Workshop prüfen wir, welche Abläufe eine gemeinsame Plattform benötigen. Bestehende Systeme können angebunden und weitergenutzt werden.</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Reveal><HeadlineDot as="h2">Was wir bauen</HeadlineDot></Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ title, icon: Icon, body }) => (
              <StaggerItem key={title} as="article" className="min-w-0 rounded-lg border border-line bg-card p-6">
                <Icon className="h-6 w-6 text-amber" aria-hidden />
                <h3 className="mt-5 break-words text-lg leading-snug">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/75">{body}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-6 text-sm text-ink/65">Die Module werden nach Ihrem Bedarf zusammengestellt. Funktionen, Schnittstellen und Freigaben werden vor der Umsetzung vereinbart.</p>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Reveal><HeadlineDot as="h2">So gehen wir vor</HeadlineDot></Reveal>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {steps.map((step, index) => (
              <li key={step.title} className="grid min-w-0 gap-4 py-7 md:grid-cols-[3rem_1fr_1.5fr] md:gap-6">
                <span className="metric text-sm text-amber" aria-hidden>{String(index + 1).padStart(2, "0")}</span>
                <h3 className="break-words text-lg leading-snug">{step.title}</h3>
                <p className="text-ink/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="mint" className="border-t border-line">
        <Container className="max-w-5xl">
          <Reveal>
            <HeadlineDot as="h2">Technik</HeadlineDot>
            <p className="mt-6 max-w-3xl text-ink/80">Der eingesetzte Stack wird hier ergänzt. Die Auswahl für Ihr Projekt wird im Rahmen der Konzeption festgelegt.</p>
            <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {["Anwendung und Oberfläche", "Datenbank und Datenmodell", "Hosting und Betrieb", "Schnittstellen und KI-Dienste"].map((label) => (
                <div key={label} className="border-t border-line pt-4">
                  <dt className="font-semibold text-ink">{label}</dt>
                  <dd className="mt-2 text-ink/65">[Platzhalter]</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <HeadlineDot as="h2">Häufige Fragen</HeadlineDot>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            {questions.map(({ q, a }) => (
              <div key={q} className="grid gap-4 py-7 lg:grid-cols-[1fr_2fr] lg:gap-10">
                <dt className="font-display text-lg leading-snug text-ink">{q}</dt>
                <dd className="text-ink/80">{a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="mint" className="border-t border-line">
        <Container className="max-w-5xl">
          <Reveal>
            <HeadlineDot as="h2">Prozess-Workshop</HeadlineDot>
            <p className="mb-7 mt-6 max-w-3xl text-ink/80">Wir erfassen Ihre bestehenden Werkzeuge und einen konkreten Ablauf. Danach stimmen wir den ersten Umfang, die benötigten Datenzugänge und die nächsten Schritte ab.</p>
            <WorkshopLink />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}