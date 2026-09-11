import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/content/article-layout";
import { routeHead } from "@/lib/route-head";
import { findArticle } from "@/lib/ratgeber";

const article = findArticle("ki-sichtbarkeit-chatgpt-perplexity")!;

export const Route = createFileRoute("/ratgeber/ki-sichtbarkeit-chatgpt-perplexity")({
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
        Menschen nutzen für Recherchefragen neben Suchmaschinen zunehmend
        KI-Systeme wie ChatGPT, Perplexity, Gemini oder
        der KI-Übersicht in der Google-Suche. Wer dort nicht als sinnvolle
        Quelle vorkommt, verliert Sichtbarkeit an genau dem Ort, an dem sich
        Meinung heute bildet. Dieser Artikel erklärt, was Sie konkret tun
        können.
      </p>

      <h2>Was AEO und GEO eigentlich bedeuten</h2>
      <p>
        AEO steht für Answer Engine Optimization: die Optimierung Ihrer
        Inhalte auf Antwortmaschinen, die eine konkrete Frage direkt
        beantworten, statt eine Trefferliste zu zeigen. GEO steht für
        Generative Engine Optimization: die Ausrichtung auf generative
        KI-Systeme, die aus vielen Quellen einen eigenen Antworttext
        formulieren und Ihre Marke darin nennen können. oder eben nicht.
      </p>
      <p>
        Beide Disziplinen bauen auf klassischer SEO auf. Ohne saubere
        technische Basis und ohne inhaltliche Substanz ist auch KI-Sichtbarkeit
        nicht dauerhaft möglich.
      </p>

      <h2>Wie Antwortmaschinen Ihre Website lesen</h2>
      <p>
        Antwortmaschinen ziehen ihre Aussagen aus einer Mischung aus
        Trainingsdaten und aktuellen Websuchen. Für Ihre Seite heißt das
        praktisch:
      </p>
      <ul>
        <li>
          <strong>Klare Antworten am Anfang.</strong> Wenn Ihre Seite eine
          Frage stellt, sollte die Antwort in den ersten Absätzen stehen ,
          nicht am Ende einer langen Story.
        </li>
        <li>
          <strong>Faktisch verifizierbare Aussagen.</strong> Zahlen, Preise,
          Zuständigkeiten, Öffnungszeiten. Alles, was ein KI-System mit
          anderen Quellen abgleichen kann, stärkt die Zitierwahrscheinlichkeit.
        </li>
        <li>
          <strong>Sichtbare FAQs.</strong> Fragen in normaler Sprache mit
          direkten Antworten gehören zu den Formaten, die Inhalte für Menschen
          und Antwortsysteme leichter erfassbar machen.
        </li>
        <li>
          <strong>Strukturierte Daten.</strong> Schema.org-Auszeichnungen für
          Organisation, Angebot, FAQ, Artikel helfen sowohl klassischen
          Suchmaschinen als auch KI-Systemen bei der Einordnung.
        </li>
      </ul>

      <h2>Warum Marke plötzlich SEO ist</h2>
      <p>
        Auch in klassischen Suchergebnissen spielen Bekanntheit, Verweise und
        Vertrauen eine Rolle. Für generative Antworten sind eindeutige externe
        Erwähnungen ebenfalls hilfreich: Ein System kann ein Unternehmen besser
        einordnen, wenn es in Fachartikeln,
        Verzeichnissen, Bewertungen und Interviews vorkommt, als eines
        ohne solche Spuren. Konsistente Namensschreibweise, saubere
        Unternehmenseinträge und regelmäßige Erwähnungen in der Branche
        werden damit zu einem echten Sichtbarkeitsfaktor.
      </p>

      <h2>Was Sie im nächsten Quartal tun können</h2>
      <ol>
        <li>
          Legen Sie eine Liste der zehn Fragen an, die Ihre Kundschaft am
          häufigsten stellt, und beantworten Sie jede auf einer eigenen
          Seite oder in einem FAQ-Block sichtbar und verlinkt.
        </li>
        <li>
          Vereinheitlichen Sie Ihre Basisdaten (Firmierung, Adresse,
          Leistungen) im Impressum, in Verzeichnissen, in Ihrem
          Google-Unternehmensprofil und in Ihrer strukturierten Auszeichnung.
        </li>
        <li>
          Prüfen Sie regelmäßig, was ChatGPT und Perplexity über Ihr
          Unternehmen und Ihre Kernleistungen sagen. Was Sie nicht messen,
          können Sie nicht verbessern.
        </li>
      </ol>

      <h2>Wie sich die Google-Suche gerade verändert</h2>
      <p>
        Google beschreibt zwei generative Bausteine in der Suche: die
        KI-Übersichten (AI Overviews), die über den klassischen Treffern eine
        zusammengefasste Antwort mit Quellenlinks zeigen, und den AI Mode, eine
        eigene, dialogorientierte Suchoberfläche für komplexere Fragen
        [2](https://search.google/pdf/google-about-AI-overviews-AI-Mode.pdf).
        Beide sind in verschiedenen Märkten unterschiedlich weit ausgerollt.
      </p>
      <p>
        Für Ihre Planung ist weniger die Ausrollstufe entscheidend als die
        Konsequenz: Ein Teil der Fragen wird künftig in der Antwortfläche
        beantwortet. Sichtbarkeit heißt dann nicht mehr nur „Platz eins",
        sondern „als Quelle genannt und angeklickt". Seiten mit reiner
        Definitionsfunktion verlieren dabei am ehesten, Seiten mit eigenen
        Daten, Preisen, Beispielen und Werkzeugen am wenigsten.
      </p>

      <h2>Welche Systeme Ihre Seite überhaupt abrufen</h2>
      <p>
        Anbieter von KI-Systemen setzen unterschiedliche automatische Abrufe
        ein: solche für das Training von Modellen und solche, die eine Seite
        erst im Moment der Nutzerfrage laden. Beide lassen sich über die Datei
        <code>robots.txt</code> getrennt steuern. Bevor Sie etwas sperren,
        sollten Sie eine klare Entscheidung treffen:
      </p>
      <ul>
        <li>
          <strong>Sichtbarkeit gewünscht.</strong> Dann müssen die Abrufe für
          Live-Antworten erlaubt bleiben, sonst kann Ihre Seite in Antworten
          nicht als Quelle auftauchen.
        </li>
        <li>
          <strong>Inhalte schützen.</strong> Wenn Sie eigene Datenbestände,
          Studien oder Kursinhalte nicht in Trainingsdaten sehen wollen,
          sperren Sie gezielt die Trainingsabrufe und behalten die
          Antwortabrufe frei.
        </li>
        <li>
          <strong>Nachvollziehen.</strong> Prüfen Sie in den Server-Logdateien,
          welche Systeme Ihre Seiten tatsächlich abrufen. Das ist die einzige
          verlässliche Quelle, alles andere ist Vermutung.
        </li>
      </ul>

      <h2>Was eine Seite zitierfähig macht</h2>
      <p>
        Antwortsysteme bevorzugen Passagen, die sie ohne Interpretation
        übernehmen können. In der Umsetzung bedeutet das:
      </p>
      <ol>
        <li>
          <strong>Eine Frage, eine Überschrift, eine Antwort.</strong> Direkt
          unter der Zwischenüberschrift steht die Antwort in zwei bis drei
          Sätzen, danach die Begründung.
        </li>
        <li>
          <strong>Eigene, überprüfbare Angaben.</strong> Zahlen aus Ihren
          Projekten, Preisspannen, Bearbeitungszeiten, Materiallisten. Was
          niemand sonst hat, wird eher zitiert.
        </li>
        <li>
          <strong>Datum und Verantwortlichkeit.</strong> Sichtbares
          Veröffentlichungs- und Aktualisierungsdatum, benannte Autorin oder
          Autor mit Rolle, Kontaktweg im Impressum.
        </li>
        <li>
          <strong>Strukturierte Auszeichnung.</strong> Schema.org für
          Organisation, Artikel, FAQ und Angebote gibt der Maschine die
          Einordnung mit, die sie sonst raten müsste.
        </li>
        <li>
          <strong>Textform statt Bildform.</strong> Preise, Öffnungszeiten und
          Leistungslisten in Grafiken sind für Antwortsysteme praktisch nicht
          vorhanden.
        </li>
      </ol>

      <h2>Eine Datei, die Sie kennen sollten: llms.txt</h2>
      <p>
        Neben <code>robots.txt</code> und Sitemap kursiert der Vorschlag einer
        Datei <code>llms.txt</code> im Wurzelverzeichnis, die einer
        KI-Anwendung in Kurzform erklärt, worum es auf der Website geht und
        welche Seiten die wichtigsten sind. Es handelt sich um einen
        Gemeinschaftsvorschlag, nicht um einen von Google oder OpenAI
        bestätigten Rankingfaktor. Der Aufwand ist gering, der Nutzen nicht
        belegt. Wir setzen sie ein, verkaufen sie aber nicht als Hebel.
      </p>

      <h2>KI-Sichtbarkeit messen, ohne sich etwas vorzumachen</h2>
      <p>
        Für generative Antworten gibt es keine vollständige Rangliste wie in
        der klassischen Suche. Belastbar sind vier Messpunkte:
      </p>
      <ul>
        <li>
          <strong>Feste Fragenliste.</strong> Zwanzig typische Kundenfragen,
          einmal im Monat in ChatGPT, Perplexity, Gemini und Google gestellt,
          Ergebnis dokumentiert: genannt, verlinkt, gar nicht erwähnt.
        </li>
        <li>
          <strong>Verweise in der Statistik.</strong> Aufrufe mit Herkunft von
          KI-Anwendungen lassen sich in der Webanalyse getrennt auswerten.
        </li>
        <li>
          <strong>Zugriffe der Antwortsysteme.</strong> Aus den Server-Logs
          lesen Sie ab, ob Ihre Seiten überhaupt abgerufen werden.
        </li>
        <li>
          <strong>Anfragequalität.</strong> Fragen Sie im Erstkontakt, wie
          jemand auf Sie gekommen ist. „Von ChatGPT empfohlen" taucht
          inzwischen regelmäßig auf und steht in keinem Werkzeug.
        </li>
      </ul>
      <p>
        Wichtig bleibt die Erwartungshaltung: Antworten schwanken zwischen
        Sitzungen und Nutzern. Ein einzelner Test beweist nichts, eine
        Zeitreihe über mehrere Monate schon.
      </p>
    </ArticleLayout>
  );
}
