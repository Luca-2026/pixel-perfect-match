import { createFileRoute } from "@tanstack/react-router";
import { Users, ShieldCheck, GraduationCap, LifeBuoy } from "lucide-react";
import { ServiceLayout } from "@/components/content/service-layout";
import { Container, HeadlineDot, Section } from "@/components/layout/primitives";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const registeredRoute = findRoute("/leistungen/claude-einfuehrung");
if (!registeredRoute) throw new Error("Claude-Einführung fehlt im Leistungsregister");
const route = registeredRoute;

const scope = [
  { icon: Users, title: "Einrichtung in Ihrer Kundenumgebung", body: "Wir richten Claude Team oder Enterprise ein. Dazu gehören Nutzer, Rollen, Datenschutzeinstellungen und die Anbindung an Ihre vorhandenen Dokumente und Werkzeuge." },
  { icon: ShieldCheck, title: "Datenzugriff und Richtlinien", body: "Wir legen fest, welche Daten Claude sehen darf und welche nicht. Wir erstellen Richtlinien für Mitarbeitende und dokumentieren die Konfiguration für Ihre Geschäftsführung." },
  { icon: GraduationCap, title: "Hands-on-Schulung", body: "Die Schulung findet vor Ort oder remote statt. Ihr Team arbeitet an seinen echten Aufgaben. Die gemeinsame Arbeit erfolgt direkt in der Anwendung." },
  { icon: LifeBuoy, title: "Nachbetreuung", body: "In den ersten Wochen begleiten wir Ihr Team bei der Nutzung der eingerichteten Umgebung." },
] as const;

const faq = [
  { q: "Claude Team oder Enterprise: Was passt zu unserem Unternehmen?", a: "Wir stimmen die Auswahl auf Ihre Teamgröße und die benötigte Einrichtung ab. Dazu betrachten wir Nutzer, Rollen, Datenschutzeinstellungen und die geplante Anbindung vorhandener Dokumente und Werkzeuge. Welche Variante passt, wird vor der Einrichtung geklärt." },
  { q: "Wie werden Datenschutz und Serverstandort berücksichtigt?", a: "Wir klären die Auftragsverarbeitung und prüfen den Serverstandort nach aktuellem Stand des Anbieters für die gewählte Variante. In der Konfiguration legen wir fest, welche Daten Claude sehen darf und welche nicht. Richtlinien für Mitarbeitende und eine Dokumentation für die Geschäftsführung gehören zum Umfang. Eine pauschale Zusage zur Konformität ersetzt die Prüfung Ihres konkreten Einsatzes nicht." },
  { q: "Wie lange dauert die Einführung?", a: "Die Dauer wird für Ihr Team und den vereinbarten Umfang abgestimmt. Einrichtung, Datenfreigaben und Schulung werden gemeinsam geplant. Die Nachbetreuung findet in den ersten Wochen statt. Einen festen Zeitraum für die Einrichtung nennen wir erst nach der Abstimmung." },
  { q: "Was passiert mit bestehenden ChatGPT-Nutzungen?", a: "Bestehende ChatGPT-Nutzungen werden bei der Abstimmung Ihrer Werkzeuge berücksichtigt. Wir klären, welche Aufgaben Ihr Team künftig mit Claude bearbeiten soll und welche Regeln für die Nutzung gelten. Eine Übertragung vorhandener Chats oder die Ablösung bestehender Werkzeuge ist damit nicht automatisch zugesagt." },
] as const;

export const Route = createFileRoute("/leistungen/claude-einfuehrung")({
  head: () => routeHead(route),
  component: ClaudeService,
});

function ClaudeService() {
  return (
    <ServiceLayout
      route={route}
      headlineClassName="hyphens-none"
      crumbs={[{ to: "/leistungen", label: "Leistungen" }, { to: "/leistungen/claude-einfuehrung", label: "Claude-Einführung" }]}
      directAnswer={<p>Wir richten Claude Team oder Enterprise in Ihrer Kundenumgebung ein. Wir konfigurieren Nutzer, Rollen und Datenzugriff, schulen Ihr Team vor Ort oder remote an seinen echten Aufgaben und begleiten die Nutzung in den ersten Wochen.</p>}
      forWho={[
        "Sie möchten Claude Team oder Enterprise für Ihr Team einrichten lassen.",
        "Sie möchten vorhandene Dokumente und Werkzeuge anbinden und den Datenzugriff festlegen.",
        "Ihre Mitarbeitenden benötigen klare Richtlinien und eine Schulung an ihren tatsächlichen Aufgaben.",
        "Ihre Geschäftsführung benötigt eine Dokumentation der Einrichtung.",
      ]}
      pricingNote={<><p className="font-display text-2xl text-ink">[PREIS]</p><p className="mt-3">Festpreis nach Teamgröße.</p></>}
      processHeadline="Ablauf in vier Schritten"
      process={[
        { title: "Umfang abstimmen", body: "Wir stimmen Teamgröße, Nutzer, Aufgaben und die vorhandenen Dokumente und Werkzeuge ab." },
        { title: "Umgebung einrichten", body: "Wir richten Claude Team oder Enterprise ein, konfigurieren Rollen und Datenschutzeinstellungen und legen den erlaubten Datenzugriff fest. Richtlinien und Dokumentation gehören dazu." },
        { title: "Team schulen", body: "Ihr Team arbeitet vor Ort oder remote direkt mit Claude an seinen echten Aufgaben." },
        { title: "Nutzung begleiten", body: "Wir betreuen Ihr Team in den ersten Wochen nach der Einrichtung und Schulung." },
      ]}
      faq={faq}
      related={[]}
      serviceType="Claude-Einrichtung und Schulung"
      ctaHeadline="Digital-Check zur Claude-Einführung"
      ctaBody="Besprechen Sie Ihre Teamgröße, vorhandenen Werkzeuge und Schulungsbedarf im Digital-Check."
    >
      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <HeadlineDot as="h2">Leistungsumfang</HeadlineDot>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {scope.map(({ icon: Icon, title, body }) => (
              <StaggerItem as="article" key={title} className="surface-card min-w-0 p-6">
                <Icon className="h-6 w-6 text-petrol" aria-hidden />
                <h3 className="mt-4 text-lg leading-snug">{title}</h3>
                <p className="mt-3 text-ink/75">{body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
    </ServiceLayout>
  );
}