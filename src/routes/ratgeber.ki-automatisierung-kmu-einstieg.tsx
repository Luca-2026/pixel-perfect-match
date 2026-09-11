import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/content/article-layout";
import { routeHead } from "@/lib/route-head";
import { findArticle } from "@/lib/ratgeber";

const article = findArticle("ki-automatisierung-kmu-einstieg")!;

export const Route = createFileRoute("/ratgeber/ki-automatisierung-kmu-einstieg")({
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
        KI ist im Mittelstand angekommen, jedenfalls in den Präsentationen. In der
        täglichen Arbeit landen viele Projekte nach dem ersten Workshop wieder in
        der Schublade, weil der Nutzen unklar bleibt oder der Sprung von der
        Demo in den echten Prozess zu groß erscheint. Dieser Artikel beschreibt,
        woran ein guter Startpunkt zu erkennen ist und wie ein realistischer
        Einstieg aussieht.
      </p>

      <h2>Woran Sie einen guten Startprozess erkennen</h2>
      <p>
        Nicht jeder Prozess eignet sich für Automatisierung, und schon gar nicht
        jeder für KI. Als Faustregel treffen bei einem guten Startprozess drei
        Merkmale zusammen:
      </p>
      <ul>
        <li>
          <strong>Wiederholung.</strong> Der Prozess läuft mindestens einige
          Male pro Woche ab. Sonst rechnet sich die Einrichtung nicht.
        </li>
        <li>
          <strong>Klarer Input, klarer Output.</strong> Sie können in einem Satz
          beschreiben, was reinkommt (z. B. eine E-Mail mit einer Anfrage) und
          was rauskommen soll (z. B. ein Datensatz im CRM plus eine Antwort im
          Postausgang).
        </li>
        <li>
          <strong>Toleranz für Kontrollpunkte.</strong> Es gibt einen sinnvollen
          Ort, an dem ein Mensch die Ausgabe kurz freigibt, bevor sie beim
          Kunden ankommt. So bleiben Sie sauber, ohne den Nutzen zu verlieren.
        </li>
      </ul>
      <p>
        Prozesse, die diese drei Punkte erfüllen, sind zum Beispiel:
        Angebotserstellung aus wiederkehrenden Anfragen, Datenübernahme von
        Formularen ins CRM, Vorsortierung eingehender E-Mails, oder die
        Aufbereitung von Meeting-Protokollen zu Aufgabenlisten.
      </p>

      <h2>Was Sie vor dem ersten Projekt klären sollten</h2>
      <p>
        Bevor Sie ein Tool auswählen, klären Sie intern drei Fragen. Sie ersparen
        sich damit spätere Grundsatzdiskussionen:
      </p>
      <ol>
        <li>
          <strong>Wem gehört der Prozess?</strong> Eine Person aus der Fachabteilung
          muss die inhaltliche Verantwortung tragen, nicht die IT.
        </li>
        <li>
          <strong>Was passiert mit den Daten?</strong> Werden personenbezogene Daten
          verarbeitet, gehört das in eine Verarbeitungstätigkeit nach DSGVO.
          Prüfen Sie Rechtsgrundlage, Auftragsverarbeitung, Speicherort,
          Zugriffsrechte und Schutzbedarf gemeinsam mit Ihrer Datenschutzberatung.
        </li>
        <li>
          <strong>Was passiert, wenn die Automatisierung ausfällt?</strong>
          Bleibt der Prozess für einen halben Tag stehen, ist das meist
          unkritisch. Bleibt Ihre Rechnungserstellung stehen, ist das ein Problem.
        </li>
      </ol>

      <h2>Werkzeuge, mit denen viele KMU starten</h2>
      <p>
        Für den Einstieg brauchen Sie keine Enterprise-Plattform. Die meisten
        KMU kommen mit einer Kombination aus drei Bausteinen weit:
      </p>
      <ul>
        <li>
          <strong>Ein Workflow-Werkzeug</strong> wie n8n oder Make, das
          Auslöser (Formular, E-Mail, neuer Datensatz) mit Aktionen verbindet.
        </li>
        <li>
          <strong>Ein Sprachmodell-Anbieter</strong> für Texte, Zusammenfassungen
          und Klassifikation, angebunden per API.
        </li>
        <li>
          <strong>Ihre bestehenden Systeme</strong>. Das CRM, das Rechnungstool,
          das Postfach. Daran wird angedockt, nichts wird ersetzt.
        </li>
      </ul>

      <h2>Realistische Erwartung an den ersten Erfolg</h2>
      <p>
        Ein erster produktiver Ablauf kann bei klarer Ausgangslage in wenigen
        Wochen erreichbar sein. Ziel ist eine messbare Zeitersparnis auf einem
        klar umrissenen Prozess, nicht
        die vollautomatische Firma. Der Wert entsteht durch die Summe kleiner
        Bausteine, die jeweils sauber laufen. Wer damit Erfahrung sammelt, kann
        Schritt für Schritt weiterbauen, ohne sich zu verheben.
      </p>

      <h2>n8n, Make oder Zapier: was der Unterschied im Alltag ist</h2>
      <p>
        Die Werkzeugfrage entscheidet weniger über den Nutzen als über den
        Betrieb. Drei Punkte unterscheiden die gängigen Plattformen in der
        Praxis: wo die Daten liegen, wie tief Sie eingreifen können und wie
        die Kosten mit der Nutzung wachsen.
      </p>
      <ul>
        <li>
          <strong>n8n.</strong> Entwickelt von einem Berliner Unternehmen,
          veröffentlicht unter der „Sustainable Use License". Diese erlaubt die
          Nutzung für eigene interne Geschäftszwecke, untersagt aber, n8n als
          gehostetes Produkt an Dritte weiterzuverkaufen
          [3](https://nordflux.de/en/guides/the-n8n-sustainable-use-license-explained).
          Für KMU ist vor allem der Selbstbetrieb interessant: n8n lässt sich
          per Docker auf einem eigenen oder europäischen Server betreiben,
          wodurch Daten und Zugangsdaten Ihr Umfeld nicht verlassen
          [2](https://docs.n8n.io/deploy/host-n8n/deploy-with-the-ai-starter-kit).
          Neben klassischen Abläufen bietet n8n eigene Bausteine für
          KI-Agenten, die Werkzeuge selbstständig aufrufen
          [1](https://github.com/n8n-io/n8n/blob/master/README.md).
        </li>
        <li>
          <strong>Make und Zapier.</strong> Beide laufen ausschließlich als
          Cloud-Dienst. Der Einstieg ist schneller, die Zahl fertiger
          Anbindungen groß, dafür sind Sie an die Preislogik des Anbieters und
          an dessen Verarbeitungsorte gebunden. Für Abläufe ohne sensible
          Daten ist das oft der pragmatischere Weg.
        </li>
      </ul>
      <p>
        Eine belastbare Faustregel: Solange keine personenbezogenen oder
        wettbewerbsrelevanten Daten durchlaufen, ist ein Cloud-Werkzeug völlig
        ausreichend. Sobald Kundendaten, Verträge oder Personalunterlagen im
        Spiel sind, lohnt der Blick auf Selbstbetrieb und Verarbeitungsort.
      </p>

      <h2>Warum das Sprachmodell austauschbar bleiben sollte</h2>
      <p>
        Am Markt konkurrieren mehrere Modellfamilien: Claude von Anthropic,
        GPT von OpenAI, Gemini von Google, dazu offene Modelle, die Sie selbst
        betreiben können. Die Reihenfolge im Leistungsvergleich ändert sich
        laufend. Wer seinen Ablauf fest auf einen Anbieter verdrahtet, zahlt
        das später mit Umbauarbeit.
      </p>
      <p>
        Praktisch heißt das: Der Modellaufruf gehört an eine einzige Stelle im
        Ablauf, austauschbar über Konfiguration. Dann können Sie pro Aufgabe
        das passende Modell wählen, etwa ein kleines, schnelles Modell für
        Klassifikation eingehender E-Mails und ein starkes Modell für die
        Auswertung mehrseitiger Dokumente. Und Sie können wechseln, wenn ein
        Anbieter Preise, Verfügbarkeit oder Bedingungen ändert.
      </p>

      <h2>MCP: der saubere Anschluss an Ihre Firmensysteme</h2>
      <p>
        Der größte Nutzen entsteht nicht durch das Modell selbst, sondern durch
        seinen Zugriff auf Ihre Daten. Genau dafür gibt es seit dem
        25. November 2024 einen offenen Standard: das Model Context Protocol
        (MCP), von Anthropic vorgestellt und quelloffen veröffentlicht
        [4](https://www.anthropic.com/news/model-context-protocol). MCP
        beschreibt einheitlich, wie ein KI-System externe Werkzeuge und
        Datenquellen ansprechen darf, etwa ein CRM, ein Ticketsystem oder eine
        Artikeldatenbank
        [3](https://modelcontextprotocol.io/specification/2025-06-18).
      </p>
      <p>
        Für Sie als Unternehmen hat das zwei Folgen. Erstens sinkt der
        Aufwand, ein System einmal anzubinden und danach mit verschiedenen
        Assistenten zu nutzen. Zweitens rückt die Rechtevergabe in den
        Vordergrund: Ein Assistent darf nur sehen, was die dahinterliegende
        Anbindung freigibt. Legen Sie deshalb vor der Anbindung fest, welche
        Tabellen, Felder und Aktionen erlaubt sind, und trennen Sie Lesezugriff
        strikt von Schreibzugriff.
      </p>

      <h2>Ein realistischer Ablauf Schritt für Schritt</h2>
      <p>
        So sieht ein erster produktiver Ablauf typischerweise aus, am Beispiel
        einer eingehenden Anfrage über das Kontaktformular:
      </p>
      <ol>
        <li>
          <strong>Auslöser.</strong> Das Formular schreibt den Eingang in die
          Automatisierung, alternativ ein überwachtes Postfach.
        </li>
        <li>
          <strong>Extraktion.</strong> Ein Sprachmodell zieht die relevanten
          Felder heraus: Ansprechpartner, Leistung, Menge, Termin, Standort.
          Ausgabe ist ein festes Datenformat, keine Fließtextantwort.
        </li>
        <li>
          <strong>Abgleich.</strong> Der Ablauf sucht passende Positionen in
          Ihrer Artikel- oder Leistungsdatenbank und schlägt Preise nach Ihren
          hinterlegten Regeln vor. Diese Regeln kommen aus Ihrem Haus, nicht
          aus dem Modell.
        </li>
        <li>
          <strong>Entwurf.</strong> Aus Vorlage, Daten und Preisen entsteht ein
          Angebotsentwurf oder eine Antwort-E-Mail.
        </li>
        <li>
          <strong>Freigabe.</strong> Der Entwurf landet zur Prüfung bei einem
          Menschen, per E-Mail oder direkt im CRM. Erst nach Freigabe geht er
          heraus.
        </li>
        <li>
          <strong>Rückfluss.</strong> Korrekturen aus der Freigabe werden
          gesammelt und fließen in Vorlagen, Regeln und Anweisungstexte
          zurück. So wird der Ablauf mit jedem Durchlauf treffsicherer.
        </li>
      </ol>

      <h2>Was der EU AI Act für Ihr erstes Projekt bedeutet</h2>
      <p>
        Die europäische KI-Verordnung (Verordnung (EU) 2024/1689) gilt seit
        dem 1. August 2024 und wird stufenweise wirksam. Die Pflicht zur
        KI-Kompetenz nach Artikel 4 greift bereits seit dem 2. Februar 2025,
        die allgemeine Anwendung samt der Transparenzpflichten aus Artikel 50
        beginnt am 2. August 2026
        [4](https://certailex.com/wissen/eu-ai-act-fristen.html).
      </p>
      <p>
        Für ein typisches Automatisierungsprojekt im Mittelstand folgen daraus
        vor allem drei praktische Aufgaben: Mitarbeitende, die mit den
        Werkzeugen arbeiten, brauchen eine nachweisbare Einweisung. Wo
        Menschen mit einem KI-System interagieren, etwa im Chat oder am
        Telefon, muss das erkennbar sein. Und Sie sollten schriftlich
        festhalten, welche Systeme Sie in welcher Rolle einsetzen. Die
        Einordnung im Einzelfall gehört in die Hände Ihrer Rechtsberatung.
      </p>

      <h2>Woran Projekte in der Praxis scheitern</h2>
      <ul>
        <li>
          <strong>Zu großer erster Schritt.</strong> Wer den komplexesten
          Prozess zuerst automatisiert, verbrennt Vertrauen im Team.
        </li>
        <li>
          <strong>Keine Datengrundlage.</strong> Wenn Preise, Artikel oder
          Kundendaten in Köpfen und Excel-Dateien liegen, kann kein System
          zuverlässig darauf zugreifen. Aufräumen ist Teil des Projekts.
        </li>
        <li>
          <strong>Fehlende Freigabestelle.</strong> Vollautomatik ohne
          Kontrollpunkt erzeugt beim ersten Fehler einen Schaden, der den
          ganzen Ansatz beendet.
        </li>
        <li>
          <strong>Niemand misst.</strong> Ohne Vorher-Werte für Bearbeitungszeit
          und Fehlerquote bleibt der Nutzen Behauptung.
        </li>
      </ul>

      <h2>Welche Kosten Sie einplanen sollten</h2>
      <p>
        Kalkulieren Sie in vier Blöcken statt in einer Zahl: Einrichtung
        (Analyse, Aufbau, Test), laufender Betrieb der Automatisierungsplattform
        (Hosting oder Abo), verbrauchsabhängige Modellkosten, die sich nach
        verarbeiteter Textmenge richten, und Betreuung für Anpassungen. Der
        Modellverbrauch ist bei Textaufgaben meist der kleinste Posten, der
        Betreuungsaufwand der am häufigsten unterschätzte.
      </p>
    </ArticleLayout>
  );
}
