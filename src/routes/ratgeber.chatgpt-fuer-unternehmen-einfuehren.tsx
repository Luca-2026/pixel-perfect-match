import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/content/article-layout";
import { routeHead } from "@/lib/route-head";
import { findArticle } from "@/lib/ratgeber";

const article = findArticle("chatgpt-fuer-unternehmen-einfuehren")!;

export const Route = createFileRoute("/ratgeber/chatgpt-fuer-unternehmen-einfuehren")({
  head: () =>
    routeHead(
      {
        path: article.path,
        title: article.title,
        metaTitle: article.metaTitle,
        description: article.description,
        h1: article.title,
      },
      article.path,
    ),
  component: Article,
});

function Article() {
  return (
    <ArticleLayout article={article}>
      <p>
        „Wir müssen etwas mit KI machen" landet aktuell in vielen
        Geschäftsleitungen. Bevor Sie Lizenzen für hundert Mitarbeitende
        kaufen, lohnt ein strukturierter Blick auf drei Themen: passende
        Anwendungsfälle, Datenschutz und Regeln für die tägliche Nutzung.
      </p>

      <h2>Welche Anwendungsfälle sich schnell lohnen</h2>
      <p>
        In der Praxis funktionieren als Erstes die Aufgaben, die Textarbeit auf
        Basis vorhandener Informationen betreffen:
      </p>
      <ul>
        <li>
          Formulierungshilfe für Angebote, E-Mails und interne Notizen.
        </li>
        <li>
          Zusammenfassung langer Dokumente, Protokolle und Meeting-Aufzeichnungen.
        </li>
        <li>
          Übersetzungen und Ton-Anpassung (formeller, kürzer, in einfacher Sprache).
        </li>
        <li>
          Erste Entwürfe für Stellenanzeigen, FAQ-Antworten oder Social-Media-Texte.
        </li>
        <li>
          Rechercheunterstützung bei bekannten Themen, ergänzend zur eigenen
          Prüfung.
        </li>
      </ul>
      <p>
        Weniger geeignet sind Aufgaben, bei denen der Fehler teuer ist und die
        Prüfung länger dauert als die Aufgabe selbst: Rechtsauskünfte,
        medizinische Einschätzungen, verbindliche Zahlen ohne Datenzugriff.
      </p>

      <h2>Welche Lizenzoption zu Ihnen passt</h2>
      <p>
        Für Unternehmen kommen im Kern drei Wege in Frage:
      </p>
      <ul>
        <li>
          <strong>ChatGPT Business oder Enterprise.</strong> OpenAI schließt in
          diesen Tarifen das Training mit Ihren Eingaben aus und bietet
          zentrale Verwaltung, SSO und Audit-Protokolle. Für reine
          Text-Assistenz in kleinen und mittleren Teams eine solide Basis.
        </li>
        <li>
          <strong>Microsoft 365 Copilot.</strong> Sinnvoll, wenn Sie ohnehin in
          Microsoft 365 arbeiten. Copilot greift mit Ihren Berechtigungen auf
          E-Mails, Teams-Chats, SharePoint und Dateien zu und wird in Word,
          Excel, Outlook und Teams direkt eingeblendet.
        </li>
        <li>
          <strong>API-basierte Lösung.</strong> Wenn Sie einen eigenen
          Assistenten in eigene Systeme (Website, Intranet, Fachanwendung)
          einbauen wollen, greifen Sie per API auf ein Modell zu und behalten
          die volle Kontrolle über Prompt, Daten und Oberfläche.
        </li>
      </ul>

      <h2>Datenschutz: was Sie klären müssen</h2>
      <p>
        Beim Einsatz in Deutschland und der EU gelten die üblichen Grundsätze
        der DSGVO. Klären Sie vor dem Rollout:
      </p>
      <ol>
        <li>
          <strong>Auftragsverarbeitungsvertrag (AVV).</strong> Mit dem Anbieter
          Ihrer Wahl schließen Sie einen AVV. Für OpenAI und Microsoft sind
          Standardverträge verfügbar.
        </li>
        <li>
          <strong>Verarbeitungsverzeichnis.</strong> Ergänzen Sie den Einsatz
          von ChatGPT oder Copilot in Ihrem Verzeichnis der Verarbeitungstätigkeiten
          mit Zweck, Datenkategorien und Empfängern.
        </li>
        <li>
          <strong>Regelung zu personenbezogenen Daten.</strong> Legen Sie
          schriftlich fest, welche Datenarten (z. B. Kundendaten,
          Bewerberdaten, Gesundheitsdaten) in KI-Werkzeugen eingegeben werden
          dürfen und welche nicht.
        </li>
        <li>
          <strong>Betriebsrat und Mitarbeitendeninformation.</strong> Wo ein
          Betriebsrat existiert, ist die Einführung meist mitbestimmungspflichtig.
          Auch ohne Betriebsrat sollten Mitarbeitende schriftlich über den
          Einsatz informiert werden.
        </li>
      </ol>

      <h2>Regeln für die tägliche Nutzung</h2>
      <p>
        Eine kurze, verständliche Nutzungsrichtlinie hilft mehr als ein
        50-seitiges Konzept. Sinnvolle Bausteine sind:
      </p>
      <ul>
        <li>
          Welche Datenkategorien dürfen eingegeben werden, welche nicht
          (z. B. keine unveröffentlichten Kunden- oder Personaldaten in der
          kostenlosen Version).
        </li>
        <li>
          KI-Ausgaben werden vor Weitergabe an Kunden immer von einem Menschen
          geprüft.
        </li>
        <li>
          Bei Zahlen, Rechtstexten und Zitaten wird die Quelle geprüft, bevor
          etwas übernommen wird.
        </li>
        <li>
          Wer im Team Ansprechperson für Fragen und für die Meldung von
          Fehlern ist.
        </li>
      </ul>

      <h2>Wie ein realistischer Einstieg aussieht</h2>
      <p>
        Statt einer großen Ausrollung im ganzen Unternehmen bewährt sich ein
        Pilotteam von fünf bis zehn Personen aus unterschiedlichen Bereichen
        für vier bis acht Wochen. Am Ende steht eine Auswertung: Welche
        Aufgaben wurden schneller? Wo waren die Ausgaben verlässlich, wo
        nicht? Auf dieser Grundlage entscheidet die Geschäftsleitung, ob und
        wie breit ausgerollt wird.
      </p>
    </ArticleLayout>
  );
}
