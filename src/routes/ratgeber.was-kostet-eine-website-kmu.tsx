import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/content/article-layout";
import { routeHead } from "@/lib/route-head";
import { findArticle } from "@/lib/ratgeber";

const article = findArticle("was-kostet-eine-website-kmu")!;

export const Route = createFileRoute("/ratgeber/was-kostet-eine-website-kmu")({
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
        „Was kostet eine Website?" ist die häufigste Frage im Erstgespräch – und
        die mit der ehrlichsten Antwort „kommt darauf an". Die Preisspanne
        reicht von wenigen hundert Euro bis in den fünfstelligen Bereich. Dieser
        Artikel zeigt, welche Faktoren die Kosten treiben und wo eine Investition
        sich für ein KMU tatsächlich lohnt.
      </p>

      <h2>Woraus sich der Preis zusammensetzt</h2>
      <p>
        Eine seriös kalkulierte Website hat drei Kostenblöcke: Konzept, Umsetzung
        und Betrieb. Wer nur den Umsetzungsblock sieht, unterschätzt regelmäßig
        die anderen beiden.
      </p>
      <ul>
        <li>
          <strong>Konzept.</strong> Ziele, Zielgruppen, Struktur, Texte, Grundgerüst
          der SEO. Ohne diese Arbeit entsteht eine hübsche Broschüre ohne Effekt.
        </li>
        <li>
          <strong>Umsetzung.</strong> Design, Entwicklung, Bild- und
          Text-Ausarbeitung, Integrationen (CRM, Zahlungsanbieter, Buchungssystem).
          Der sichtbare Teil.
        </li>
        <li>
          <strong>Betrieb.</strong> Hosting, Aktualisierungen, kleine
          Anpassungen, Monitoring. Kein einmaliger Posten, sondern eine
          jährliche Rechnung.
        </li>
      </ul>

      <h2>Warum die Preisspanne so groß ist</h2>
      <p>
        Fünf Faktoren erklären die meisten Preisunterschiede:
      </p>
      <ol>
        <li>
          <strong>Umfang.</strong> Eine Seite oder fünfzehn Seiten. Zwei Sprachen
          oder eine. Blog ja oder nein.
        </li>
        <li>
          <strong>Individualität.</strong> Ein individuell entworfenes Design
          kostet mehr als ein fertiges Template. Beides kann richtig sein.
        </li>
        <li>
          <strong>Funktionalität.</strong> Kontaktformular ist Standard.
          Terminbuchung, Online-Shop, Kundenportal oder Rechnungsanbindung
          sind eigene Projekte in einem Projekt.
        </li>
        <li>
          <strong>Inhalte.</strong> Wenn Sie Texte und Bilder liefern, sparen
          Sie. Wenn die Agentur schreibt und fotografiert, wird es teurer –
          und meistens besser.
        </li>
        <li>
          <strong>SEO-Vorarbeit.</strong> Keyword-Recherche, Struktur und
          Metadaten kosten Zeit und machen den Unterschied zwischen einer
          Website, die gefunden wird, und einer, die niemand liest.
        </li>
      </ol>

      <h2>Realistische Größenordnungen für KMU</h2>
      <p>
        Als Orientierung, nicht als Festpreis:
      </p>
      <ul>
        <li>
          <strong>Kompakte Firmenwebsite</strong> mit klarem Konzept, fünf
          bis sieben Seiten, sauberer technischer und SEO-Grundlage:
          niedriger bis mittlerer vierstelliger Bereich.
        </li>
        <li>
          <strong>Ausgebaute Firmenwebsite</strong> mit umfangreicheren
          Inhalten, Leistungs-Landingpages, Blog- oder Ratgeberbereich und
          individuellem Design: mittlerer bis hoher vierstelliger Bereich.
        </li>
        <li>
          <strong>Website mit funktionalem Kern</strong> wie Buchung,
          Portal oder Shop: fünfstellig, mit deutlichen Ausschlägen nach
          oben je nach Umfang.
        </li>
      </ul>
      <p>
        Wer für unter tausend Euro eine „professionelle Website mit SEO"
        angeboten bekommt, sollte sehr genau prüfen, was tatsächlich enthalten
        ist. Meist fehlt der Konzeptteil komplett.
      </p>

      <h2>Wo Sparen sich rechnet – und wo nicht</h2>
      <p>
        Sparen lohnt sich fast immer beim Grafikaufwand von reinen
        Detaildesigns, bei Stock-Fotos statt individuellem Shooting und bei
        Funktionalität, die Sie „vielleicht mal" brauchen könnten. Nicht sparen
        sollten Sie an drei Stellen: an der Konzeptphase, an der technischen
        Grundlage (Ladezeit, mobile Bedienung, Barrierefreiheit) und an der
        Textqualität. Diese drei Punkte entscheiden, ob die Website Anfragen
        bringt oder nur existiert.
      </p>
    </ArticleLayout>
  );
}
