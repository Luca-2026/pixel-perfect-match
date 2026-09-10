import { createFileRoute } from "@tanstack/react-router";
import { ServiceLayout } from "@/components/content/service-layout";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import { ComparisonTable } from "@/components/content/comparison-table";
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
          KI-Automatisierung heißt bei uns: wir nehmen einen konkreten,
          wiederkehrenden Prozess in Ihrem Unternehmen auf und ersetzen die
          manuellen Handgriffe durch eine dokumentierte Automatisierung.
          Ziel ist eine messbare Zeitersparnis pro Woche, nicht ein neues
          Werkzeug im Werkzeugkasten.
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
            "Dokumentation, Test mit echten Fällen im Team, Feinjustierung. Sie behalten die Kontrolle über Freigabestellen.",
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
          a: "Die entscheidende Frage ist nicht die Größe, sondern die Wiederholung. Ein Prozess, der wöchentlich mehrere Stunden bindet, rechnet sich meist innerhalb weniger Monate. ob im Zwei-Personen-Betrieb oder im 40-Personen-Unternehmen.",
        },
        {
          q: "Was passiert mit unseren Daten?",
          a: "Wir setzen bevorzugt auf Anbieter mit Rechenzentren in der EU und schließen die notwendigen Auftragsverarbeitungsverträge. Welche Daten in welches System fließen, halten wir vor Umsetzung transparent fest.",
        },
        {
          q: "Ersetzt die KI Mitarbeitende?",
          a: "In unseren bisherigen Projekten entlastet die Automatisierung Teams von wiederkehrender Arbeit, sodass mehr Zeit für Kundenkontakt oder Fachthemen bleibt. Ob und wie Sie diese Zeit im Unternehmen weiterverwenden, entscheiden Sie.",
        },
        {
          q: "Was, wenn die KI Fehler macht?",
          a: "Wir bauen Freigabestellen ein. die KI schlägt vor, ein Mensch bestätigt. Kritische Prozesse laufen erst dann vollautomatisch, wenn die Trefferquote über einen definierten Testzeitraum belegt ist.",
        },
        {
          q: "Wie schnell sehen wir Ergebnisse?",
          a: "Ein klar umrissener Anwendungsfall ist in wenigen Wochen produktiv. Die genaue Dauer nennen wir verbindlich nach dem Digital-Check.",
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
      <Section tone="paper" className="border-t border-line">
        <Container className="max-w-5xl">
          <Eyebrow>Beispiele</Eyebrow>
          <HeadlineDot as="h2" className="mt-3 max-w-3xl">
            Typische Automatisierungen im Mittelstand
          </HeadlineDot>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Angebote aus eingehenden Anfragen entwerfen",
                body:
                  "Auslöser ist eine neue Anfrage per Formular oder E-Mail. Ein Sprachmodell zieht die Eckdaten heraus, gleicht sie mit Ihrer Preisliste und Historie im CRM ab und erzeugt einen Angebotsentwurf als PDF. Ihr Team prüft, ergänzt Sonderkonditionen und schickt raus.",
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
           . dort nennen wir ausschließlich freigegebene Projekte.
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
