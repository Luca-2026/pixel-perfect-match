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
          <strong>ChatGPT Business oder Enterprise.</strong> OpenAI verwendet
          Geschäftsdaten in diesen Angeboten laut eigener Datenschutzangaben
          standardmäßig nicht zum Training. Verwaltungs- und Sicherheitsfunktionen
          unterscheiden sich je nach Tarif und sollten vor Vertragsschluss anhand
          der aktuellen Leistungsbeschreibung geprüft werden.
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
        Statt einer großen Ausrollung im ganzen Unternehmen empfiehlt sich ein
        begrenztes Pilotteam aus unterschiedlichen Bereichen. Am Ende steht
        eine Auswertung: Welche
        Aufgaben wurden schneller? Wo waren die Ausgaben verlässlich, wo
        nicht? Auf dieser Grundlage entscheidet die Geschäftsleitung, ob und
        wie breit ausgerollt wird.
      </p>

      <h2>ChatGPT, Claude oder Gemini: wie Sie sich entscheiden</h2>
      <p>
        Die drei großen Anbieter unterscheiden sich für den Mittelstand
        weniger in der reinen Textqualität als in der Umgebung, in die sie
        sich einfügen:
      </p>
      <ul>
        <li>
          <strong>ChatGPT von OpenAI.</strong> Die bekannteste Oberfläche,
          entsprechend gering der Schulungsaufwand. Für Geschäftskunden gibt
          es eigene Tarife mit Verwaltungsfunktionen.
        </li>
        <li>
          <strong>Claude von Anthropic.</strong> Stark bei langen Dokumenten
          und strukturierter Arbeit; Anthropic hat mit dem Model Context
          Protocol (MCP) außerdem den offenen Standard veröffentlicht, über
          den Assistenten an Firmensysteme angebunden werden (
          <a
            href="https://www.anthropic.com/news/model-context-protocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anthropic zu MCP
          </a>
          ). Wer perspektivisch eigene Datenquellen anbinden will, findet hier
          eine saubere Grundlage.
        </li>
        <li>
          <strong>Gemini von Google.</strong> Sinnvoll, wenn Ihr Unternehmen
          in Google Workspace arbeitet, weil die Integration in Dokumente,
          Tabellen und Mail den Alltag trifft.
        </li>
        <li>
          <strong>Microsoft 365 Copilot.</strong> Der pragmatische Weg für
          Häuser, die ohnehin vollständig in Microsoft 365 arbeiten.
        </li>
      </ul>
      <p>
        Entscheiden Sie nicht nach Testberichten, sondern nach Ihrer
        Systemlandschaft und nach zwei bis drei echten Aufgaben, die Sie in
        einer Testphase parallel durch alle Kandidaten laufen lassen.
      </p>

      <h2>Der entscheidende Schritt: Ihr Wissen anbinden</h2>
      <p>
        Ein Assistent ohne Zugriff auf Ihre Unterlagen bleibt ein besseres
        Textprogramm. Nützlich wird er, wenn er auf geprüfte eigene Inhalte
        zugreift: Leistungsbeschreibungen, Preislisten, technische
        Datenblätter, Verfahrensanweisungen, häufige Kundenfragen.
      </p>
      <p>
        Technisch geschieht das nicht durch „Training" mit Ihren Daten,
        sondern durch eine Wissensbasis, aus der zur Frage passende Ausschnitte
        gesucht und dem Modell mitgegeben werden. Für die Anbindung
        vorhandener Systeme wie CRM oder Ticketsystem gibt es mit MCP seit
        November 2024 einen offenen Standard (
        <a
          href="https://modelcontextprotocol.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MCP-Spezifikation
        </a>
        ). Drei Dinge sind dabei nicht verhandelbar: Die Wissensbasis enthält
        nur freigegebene, aktuelle Dokumente. Berechtigungen bleiben erhalten,
        niemand sieht über den Assistenten mehr als über das Quellsystem. Und
        Antworten nennen ihre Quelle, damit Mitarbeitende nachschlagen können.
      </p>

      <h2>Was der EU AI Act für Sie bedeutet</h2>
      <p>
        Die KI-Verordnung (Verordnung (EU) 2024/1689) gilt seit dem
        1. August 2024 und wird stufenweise wirksam (
        <a
          href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=OJ:L_202401689"
          target="_blank"
          rel="noopener noreferrer"
        >
          Verordnung im Volltext
        </a>
        ). Für ein Unternehmen, das ChatGPT, Claude oder Copilot einsetzt,
        sind vor allem zwei Punkte praktisch:
      </p>
      <ul>
        <li>
          <strong>KI-Kompetenz.</strong> Artikel 4 verlangt, dass Personen, die
          KI-Systeme im Auftrag des Unternehmens einsetzen, über ausreichende
          Kenntnisse verfügen. Diese Pflicht gilt bereits seit Februar 2025.
          Eine dokumentierte Schulung ist damit kein Nice-to-have.
        </li>
        <li>
          <strong>Transparenz.</strong> Mit der allgemeinen Anwendung ab
          August 2026 greifen die Transparenzpflichten aus Artikel 50. Wo
          Menschen mit einem KI-System sprechen oder KI-erzeugte Inhalte
          erhalten, muss das erkennbar sein.
        </li>
      </ul>
      <p>
        Die konkrete Einordnung Ihres Einsatzes und Ihrer Rolle gehört in die
        Hände Ihrer Rechtsberatung. Vorbereiten können Sie sie, indem Sie eine
        einfache Liste führen: welches System, für welchen Zweck, mit welchen
        Daten, wer ist verantwortlich.
      </p>

      <h2>Schulung, die im Alltag ankommt</h2>
      <p>
        Eine wirksame Einführung dauert keinen ganzen Tag. Bewährt hat sich
        ein kurzer Termin je Abteilung, an echten Aufgaben aus deren Alltag:
      </p>
      <ol>
        <li>
          Zwei Beispiele vorführen, die diese Abteilung wirklich betreffen,
          etwa Angebotstext im Vertrieb oder Reklamationsantwort im Service.
        </li>
        <li>
          Gemeinsam eine Anweisung schreiben und schrittweise verbessern, bis
          das Ergebnis brauchbar ist. Danach als Vorlage speichern.
        </li>
        <li>
          Bewusst einen Fehler des Modells herbeiführen und zeigen, wie er
          aussieht. Nichts wirkt so gut gegen blindes Vertrauen.
        </li>
        <li>
          Die Regeln zu erlaubten Daten in drei Sätzen wiederholen und
          schriftlich aushändigen.
        </li>
        <li>
          Nach vier Wochen eine kurze Runde: Was funktioniert, was nicht, was
          fehlt in der Wissensbasis.
        </li>
      </ol>

      <h2>Wie Sie den Nutzen messen</h2>
      <p>
        Halten Sie vor dem Start für zwei oder drei Aufgaben fest, wie lange
        sie heute dauern und wie oft sie vorkommen. Nach acht Wochen messen
        Sie dieselben Aufgaben erneut. Ergänzen Sie zwei Qualitätsfragen:
        Wie oft musste die Ausgabe grundlegend überarbeitet werden, und gab
        es Fälle, in denen ein Fehler nach außen gelangt ist. Diese vier
        Zahlen sind aussagekräftiger als jede Nutzungsstatistik der
        Lizenzverwaltung.
      </p>
    </ArticleLayout>
  );
}
