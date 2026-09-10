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
    </ArticleLayout>
  );
}
