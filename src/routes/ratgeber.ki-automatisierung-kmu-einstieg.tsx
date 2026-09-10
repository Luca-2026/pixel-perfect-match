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
          muss die inhaltliche Verantwortung tragen – nicht die IT.
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
          das Postfach – daran wird angedockt, nichts wird ersetzt.
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
    </ArticleLayout>
  );
}
