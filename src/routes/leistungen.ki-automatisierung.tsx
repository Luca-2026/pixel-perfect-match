import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/content/service-layout";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { ComparisonTable } from "@/components/content/comparison-table";
import { AiProcessDemos } from "@/components/showcase/ai-process-demos";
import { Database, FileCheck2, GraduationCap, MapPin, RefreshCw, Workflow } from "lucide-react";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen/ki-automatisierung")!;

export const Route = createFileRoute("/leistungen/ki-automatisierung")({
  head: () => routeHead(route),
  component: KiAutomatisierung,
});

function KiAutomatisierung() {
  return (
    <ServiceLayout
      route={route}
      serviceType="Prozessautomatisierung mit KI"
      crumbs={[
        { to: "/leistungen", label: "Leistungen" },
        { to: route.path, label: "KI & Automatisierung" },
      ]}
      directAnswer={
        <p>
          Wir nehmen wiederkehrende Arbeitsprozesse auf und automatisieren
          die standardisierbaren Schritte mit KI, Datenbanken und klaren
          Geschäftsregeln. So kann etwa aus einer qualifizierten Anfrage in
          rund 30 Sekunden ein prüfbarer Angebotsentwurf entstehen. Ziel ist
          weniger Personalaufwand pro Vorgang, nicht ein weiteres Werkzeug.
        </p>
      }
      forWho={[
        "Sie oder Ihr Team verbringen erkennbar Zeit mit wiederkehrenden Handgriffen. Angebote, Anfragen, Datenübertragungen, Standard-E-Mails.",
        "Sie wissen, welcher Prozess Sie am meisten Zeit kostet, oder Sie wollen es im Digital-Check herausfinden.",
        "Sie möchten mit einem klar umrissenen Anwendungsfall anfangen, statt eine Konzernstrategie zu bezahlen.",
        "Ihre Daten sollen in der EU verarbeitet werden.",
      ]}
      pricingNote={
        <p>
          Festpreis nach Digital-Check, projektbezogen. Für den Einstieg
          empfehlen wir einen Prozess mit klar dokumentierter Zeitersparnis.
        </p>
      }
      process={[
        {
          title: "Prozess aufnehmen",
          body:
            "Wir schauen gemeinsam auf den Ist-Prozess, die beteiligten Tools und die aktuelle Bearbeitungszeit. Ergebnis: eine Seite Beschreibung, an der wir Erfolg messen.",
        },
        {
          title: "Umsetzung",
          body:
            "Wir bauen die Automatisierung mit passenden Bausteinen. KI-Modell, Anbindung an Ihre Systeme, saubere Fallback-Pfade. Sie sehen Zwischenstände.",
        },
        {
          title: "Übergabe & Test",
          body:
            "Wir führen die Lösung persönlich in Ihrem Unternehmen ein, testen sie mit echten Fällen und schulen Ihr Team praxisnah. Sie behalten die Kontrolle über Freigabestellen.",
        },
        {
          title: "Betrieb & Betreuung",
          body:
            "Monitoring der Ausführungen, Anpassungen bei geänderten Anforderungen. Sie zahlen Betrieb monatlich, nicht die Umsetzung neu.",
        },
      ]}
      faq={[
        {
          q: "Ab welcher Unternehmensgröße lohnt sich KI-Automatisierung?",
          a: "Die entscheidende Frage ist nicht die Größe, sondern die Wiederholung. Ob sich ein Prozess rechnet, hängt von Fallzahl, Zeitgewinn sowie Einführungs und Betriebskosten ab. Das prüfen wir mit Ihren realen Werten.",
        },
        {
          q: "Was passiert mit unseren Daten?",
          a: "Wir setzen bevorzugt auf Anbieter mit Rechenzentren in der EU und schließen die notwendigen Auftragsverarbeitungsverträge. Welche Daten in welches System fließen, halten wir vor Umsetzung transparent fest.",
        },
        {
          q: "Ersetzt die KI Mitarbeitende?",
          a: "Sie kann standardisierbare Tätigkeiten übernehmen und damit den Personalbedarf für diese Abläufe reduzieren. Ob dadurch Stellen anders eingesetzt, nicht nachbesetzt oder Kapazitäten für wertschöpfende Arbeit frei werden, entscheiden Sie als Unternehmen. Verantwortliche Entscheidungen bleiben kontrollierbar.",
        },
        {
          q: "Was, wenn die KI Fehler macht?",
          a: "Wir bauen Freigabestellen ein. Die KI schlägt vor, ein Mensch bestätigt. Kritische Prozesse laufen erst dann vollautomatisch, wenn die Trefferquote über einen definierten Testzeitraum belegt ist.",
        },
        {
          q: "Wie schnell sehen wir Ergebnisse?",
          a: "Ein klar umrissener Anwendungsfall ist in wenigen Wochen produktiv. Die genaue Dauer nennen wir verbindlich nach dem Digital-Check.",
        },
        {
          q: "Kann ein KI-Telefonagent Anrufe für uns übernehmen?",
          a: "Ja, für klar abgegrenzte Anliegen: Anrufe annehmen, Anliegen erfassen, Termine vorschlagen, Rückrufwünsche strukturiert weitergeben. Der Agent bekommt einen festen Gesprächsrahmen, eine geprüfte Wissensbasis und eine Übergaberegel an einen Menschen. Vor dem Livegang testen wir mit echten Anrufszenarien.",
        },
        {
          q: "Müssen wir Anrufer über den KI-Agenten informieren?",
          a: "Wir gestalten den Einstieg so, dass der Agent sich als digitale Assistenz zu erkennen gibt und ein Weg zum Menschen jederzeit offen bleibt. Aufzeichnungen und Transkripte werden nur mit passender Rechtsgrundlage und dokumentierter Einwilligung verarbeitet. Die konkrete Ausgestaltung stimmen wir mit Ihrer Datenschutzberatung ab.",
        },
        {
          q: "Können Sie bestehende Tools anbinden?",
          a: "Für gängige Systeme (CRM, Ticketing, E-Mail, Buchhaltung) ist die Anbindung Standard. Bei Spezialsoftware prüfen wir die Schnittstelle im Digital-Check.",
        },
      ]}
      related={[
        {
          path: "/leistungen/seo",
          label: "SEO für KMU",
          description: "Automatisierung wirkt am besten, wenn planbar Anfragen kommen.",
        },
        {
          path: "/leistungen/webdesign",
          label: "Webdesign",
          description: "Formulare und Assistenten sitzen auf einer Website, die konvertiert.",
        },
        {
          path: "/leistungen/ki-sichtbarkeit",
          label: "KI-Sichtbarkeit",
          description: "Damit KI-Systeme Sie kennen, wenn potenzielle Kunden fragen.",
        },
      ]}
      ctaHeadline="Welcher Prozess kostet Sie aktuell am meisten Zeit"
      ctaBody="Im kostenlosen Digital-Check identifizieren wir den Prozess mit dem größten Automatisierungs-Effekt in Ihrem Unternehmen und nennen einen Festpreis für die Umsetzung."
    >
      <Section tone="ink" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow className="text-amber">Konkreter Prozess</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-4xl text-paper">
            Ein Angebot in rund 30 Sekunden vorbereiten
          </HeadlineDot>
          <p className="mt-6 max-w-3xl text-lg text-paper/75">
            Die Geschwindigkeit ist möglich, wenn Leistungen, Preise und Regeln
            digital vorliegen. Wir verbinden diese Daten zu einem kontrollierten
            Ablauf, statt die KI frei kalkulieren zu lassen.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius)] border border-paper/20 bg-paper/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Workflow, number: "01", title: "Bedarf erkennen", body: "Die KI strukturiert Anfrage, Mengen, Termine und Anforderungen." },
              { icon: Database, number: "02", title: "Automatisch matchen", body: "Kundenstamm, Leistungskatalog und vergleichbare Fälle werden abgeglichen." },
              { icon: RefreshCw, number: "03", title: "Preis vorschlagen", body: "Freigegebene Preislogik erzeugt passende Positionen und Konditionen." },
              { icon: FileCheck2, number: "04", title: "Entwurf erzeugen", body: "Das Angebot wird erstellt und bei definierten Fällen zur Prüfung vorgelegt." },
            ].map((item) => (
              <article key={item.number} className="min-w-0 bg-ink p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <item.icon className="h-5 w-5 text-amber" aria-hidden />
                  <span className="metric text-xs text-paper/45">{item.number}</span>
                </div>
                <h3 className="mt-10 text-xl text-paper">{item.title}</h3>
                <p className="mt-3 text-sm text-paper/65">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="border-t border-paper/25 pt-6">
              <RefreshCw className="h-5 w-5 text-amber" aria-hidden />
              <h3 className="mt-5 text-2xl text-paper">Wiederkehrendes Lernen, kontrolliert</h3>
              <p className="mt-4 text-paper/70">
                Freigegebene Angebote und dokumentierte Korrekturen fließen in
                Regeln, Beispiele und Datenbasis zurück. Das System wird dadurch
                passender, ohne sich unkontrolliert selbst zu verändern.
              </p>
            </article>
            <article className="border-t border-paper/25 pt-6">
              <GraduationCap className="h-5 w-5 text-amber" aria-hidden />
              <h3 className="mt-5 text-2xl text-paper">Bei Ihnen eingeführt</h3>
              <p className="mt-4 text-paper/70">
                Inhabergeführt im Raum Bonn. Wir kommen persönlich in Ihr
                Unternehmen, richten den Ablauf mit Ihren Fachleuten ein und
                schulen die Anwender anhand echter Vorgänge.
              </p>
              <p className="mt-4 flex items-start gap-2 text-sm text-paper/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden />
                Wachtberg bei Bonn, regional vor Ort und deutschlandweit tätig.
              </p>
            </article>
          </div>

          <div className="mt-12 border-y border-amber py-8">
            <p className="font-display text-2xl leading-tight text-paper sm:text-4xl">
              Wer heute jede Routine weiter manuell erledigt, bezahlt morgen
              mit Zeit, Marge und Wettbewerbsfähigkeit<span className="text-amber">.</span>
            </p>
            <p className="mt-5 max-w-3xl text-paper/70">
              Wir automatisieren Tätigkeiten, die heute Mitarbeitende binden.
              Das kann zusätzlichen Personalbedarf vermeiden und schafft Kapazität
              dort, wo Erfahrung, Verantwortung und Kundenkontakt zählen.
            </p>
          </div>
        </Container>
      </Section>

      <AiProcessDemos />

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Beispiele</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            Typische Automatisierungen im Mittelstand
          </HeadlineDot>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Angebotsentwurf in rund 30 Sekunden",
                body:
                  "Auslöser ist eine qualifizierte Anfrage per Formular oder E-Mail. Die KI zieht Eckdaten heraus, gleicht sie mit Kundenstamm, Leistungskatalog und freigegebenen Preisregeln ab und erzeugt einen Angebotsentwurf. Bei sauber vorbereiteten Daten kann dieser Ablauf rund 30 Sekunden dauern.",
                tools: "Bausteine: n8n oder Make, OpenAI oder Mistral, Ihr CRM.",
                gate: "Freigabe: Angebot geht erst nach Sichtprüfung raus.",
              },
              {
                title: "E-Mail-Postfach vorsortieren und Antworten vorbereiten",
                body:
                  "Neue Nachrichten werden nach Anfrage, Reklamation, Rechnung oder Werbung klassifiziert, wichtige Fälle werden mit einem Antwortentwurf versehen. Sie öffnen den Posteingang und arbeiten sortiert von oben nach unten.",
                tools: "Bausteine: Microsoft 365 oder Google Workspace, n8n, Sprachmodell per API.",
                gate: "Freigabe: kein Entwurf verlässt das Haus ohne Klick.",
              },
              {
                title: "Rechnungen und Lieferscheine strukturiert erfassen",
                body:
                  "PDF- oder Foto-Belege werden per OCR und KI ausgelesen, Beträge, Positionen und Lieferant landen als Datensatz in der Buchhaltung. Abweichungen zur Bestellung werden markiert.",
                tools: "Bausteine: n8n mit OCR-Schritt, Sprachmodell, Anbindung an DATEV, lexoffice oder sevDesk.",
                gate: "Freigabe: Buchhalter kontiert und gibt Zahlung frei.",
              },
              {
                title: "Digitaler Assistent auf der Website",
                body:
                  "Ein Chat-Assistent beantwortet wiederkehrende Fragen zu Verfügbarkeit, Öffnungszeiten und Konditionen auf Basis Ihrer eigenen Inhalte (RAG). Komplexe Fälle werden mit vollständigem Verlauf an Ihr Team übergeben.",
                tools: "Bausteine: eigene Wissensbasis aus Website und FAQ, Sprachmodell per API, Übergabe an Ihr Ticket- oder Postfachsystem.",
                gate: "Freigabe: klare Eskalationsregel definiert, was der Assistent nicht selbst beantwortet.",
              },
              {
                title: "Leads recherchieren und im CRM anreichern",
                body:
                  "Neu eintreffende Kontakte werden mit öffentlich verfügbaren Firmendaten angereichert, Duplikate erkannt und einer Vertriebsperson zugewiesen. Der Datensatz ist vollständig, bevor der erste Anruf ansteht.",
                tools: "Bausteine: n8n, HubSpot oder Pipedrive, Sprachmodell per API.",
                gate: "Freigabe: Vertrieb prüft stichprobenartig und priorisiert.",
              },
              {
                title: "Meeting-Protokolle in Aufgaben verwandeln",
                body:
                  "Aus Teams- oder Zoom-Aufzeichnungen entstehen strukturiertes Protokoll, Entscheidungen und Aufgaben mit Zuständigkeiten, direkt im Task-System.",
                tools: "Bausteine: Microsoft 365 Copilot, Otter.ai oder Jamie, Anbindung an Ihr Task-Tool.",
                gate: "Freigabe: Moderator prüft Aufgabenliste vor Verteilung.",
              },
              {
                title: "Daten zwischen Systemen synchronisieren",
                body:
                  "Kundendaten aus dem CRM ins Rechnungstool, Buchungen aus dem Website-Formular ins CRM, alles ohne doppelte Eingabe. Fehlerhafte Datensätze landen in einer Prüfliste statt lautlos verloren zu gehen.",
                tools: "Bausteine: n8n oder Make, Ihre bestehenden Systeme über deren API.",
                gate: "Freigabe: Fehlerliste wird täglich kurz gesichtet.",
              },
              {
                title: "Wiederkehrende Berichte automatisch erstellen",
                body:
                  "Zahlen, Termine und Anfragen der letzten Woche werden als kompakte Zusammenfassung ausgeliefert, per E-Mail oder in Ihren Team-Chat.",
                tools: "Bausteine: n8n oder Make, Ihre Datenquellen, Sprachmodell für die Textzusammenfassung.",
                gate: "Freigabe: der Bericht ist informativ, keine Freigabe nötig.",
              },
            ].map((c) => (
              <article key={c.title} className="surface-card p-6">
                <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-sm text-ink/75">{c.body}</p>
                <p className="mt-3 text-xs text-ink/60">{c.tools}</p>
                <p className="mt-1 text-xs text-petrol">{c.gate}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60">
            Die genannten Bausteine sind zum Zeitpunkt dieser Veröffentlichung
            verfügbar. Welche Kombination in Ihrem Betrieb sinnvoll ist, klären
            wir im Digital-Check anhand Ihres konkreten Prozesses. Konkrete
            Kundenbeispiele finden Sie auf der{" "}
            <a href="/referenzen" className="text-petrol">Referenzen-Seite</a>{" "}
           . Dort nennen wir ausschließlich freigegebene Projekte.
          </p>

        </Container>
      </Section>

      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Wie unterscheiden wir uns</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            KI-Automatisierung bei sandhoff.digital vs. großer Anbieter
          </HeadlineDot>
          <div className="mt-8">
            <ComparisonTable
              headings={{ us: "sandhoff.digital", them: "Große KI-Beratung" }}
              rows={[
                { label: "Ansprechpartner", us: "Inhaber, direkt", them: "wechselnde Projektteams" },
                { label: "Einstieg", us: "einzelner Prozess", them: "Strategieprojekt" },
                { label: "Preismodell", us: "Festpreis nach Digital-Check", them: "Tagessätze" },
                { label: "Ergebnis dokumentiert in Stunden Zeitersparnis", us: true, them: false },
                { label: "Datenverarbeitung bevorzugt in der EU", us: true, them: "je nach Anbieter" },
                { label: "Betreuung im Betrieb", us: "monatlich, kündbar", them: "Retainer über 12 Monate" },
              ]}
            />
          </div>
        </Container>
      </Section>
    </ServiceLayout>
  );
}
