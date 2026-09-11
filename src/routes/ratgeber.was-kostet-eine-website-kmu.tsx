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
        „Was kostet eine Website?" ist die häufigste Frage im Erstgespräch. und
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
          Sie. Wenn die Agentur schreibt und fotografiert, wird es teurer ,
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

      <h2>Wo Sparen sich rechnet. und wo nicht</h2>
      <p>
        Sparen lohnt sich fast immer beim Grafikaufwand von reinen
        Detaildesigns, bei Stock-Fotos statt individuellem Shooting und bei
        Funktionalität, die Sie „vielleicht mal" brauchen könnten. Nicht sparen
        sollten Sie an drei Stellen: an der Konzeptphase, an der technischen
        Grundlage (Ladezeit, mobile Bedienung, Barrierefreiheit) und an der
        Textqualität. Diese drei Punkte entscheiden, ob die Website Anfragen
        bringt oder nur existiert.
      </p>

      <h2>Die laufenden Kosten, die im Angebot oft fehlen</h2>
      <p>
        Der Kaufpreis ist nur der Anfang. Diese Posten fallen nach dem
        Livegang an und gehören vor der Entscheidung auf den Tisch:
      </p>
      <ul>
        <li>
          <strong>Domain und Hosting.</strong> Je nach Anforderung von wenigen
          Euro im Monat bis zu dreistelligen Beträgen bei höherem Bedarf an
          Leistung, Backups und Verfügbarkeit.
        </li>
        <li>
          <strong>Aktualisierungen.</strong> Bei einem CMS wie WordPress
          müssen Kern, Erweiterungen und Design regelmäßig aktualisiert
          werden. Ungepflegte Installationen sind das häufigste Einfallstor
          für Angriffe.
        </li>
        <li>
          <strong>Rechtliche Pflege.</strong> Impressum, Datenschutzerklärung
          und Einwilligungsbanner müssen zu dem passen, was die Seite
          tatsächlich lädt.
        </li>
        <li>
          <strong>Inhalte.</strong> Neue Leistungen, neue Referenzen, neue
          Preise. Eine Website ohne Pflege verliert innerhalb von zwei Jahren
          spürbar an Wirkung.
        </li>
        <li>
          <strong>Messung.</strong> Webanalyse und Search Console kosten kein
          Geld, aber Arbeitszeit für die Auswertung.
        </li>
      </ul>

      <h2>Was Barrierefreiheit seit 2025 mit dem Preis zu tun hat</h2>
      <p>
        Das Barrierefreiheitsstärkungsgesetz setzt den European Accessibility
        Act in deutsches Recht um und gilt seit dem 28. Juni 2025. Es
        betrifft nicht jede Firmenwebsite, sondern bestimmte Produkte und
        Dienstleistungen im Verbrauchergeschäft, etwa den elektronischen
        Geschäftsverkehr. Für Kleinstunternehmen sieht das Gesetz Ausnahmen
        vor. Ob Sie betroffen sind, sollten Sie rechtlich prüfen lassen; die
        Details finden Sie bei der{" "}
        <a
          href="https://www.bundesfachstelle-barrierefreiheit.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bundesfachstelle Barrierefreiheit
        </a>
        .
      </p>
      <p>
        Für die Kalkulation ist wichtig: Barrierefreiheit von Anfang an
        mitzudenken kostet wenig zusätzlichen Aufwand. Sie später
        nachzurüsten, ist deutlich teurer, weil Farbkontraste, Struktur,
        Tastaturbedienung und Formulare tief im Design und im Code stecken.
      </p>

      <h2>Vertrag und Eigentum: die drei teuersten Fallen</h2>
      <ol>
        <li>
          <strong>Sie besitzen Ihre Domain nicht.</strong> Domain und
          Hosting-Zugang gehören auf Ihren Namen. Sonst wird ein
          Dienstleisterwechsel zur Verhandlung.
        </li>
        <li>
          <strong>Sie bekommen den Quellcode nicht.</strong> Klären Sie
          schriftlich, welche Nutzungsrechte Sie an Design, Code und Texten
          erhalten und ob Sie die Seite zu einem anderen Anbieter umziehen
          dürfen.
        </li>
        <li>
          <strong>Mietmodell ohne Ausstieg.</strong> Monatsmodelle können
          sinnvoll sein, wenn Betreuung enthalten ist. Prüfen Sie aber, was
          nach der Kündigung bleibt. In manchen Modellen ist das nichts.
        </li>
      </ol>

      <h2>Wie Sie zwei Angebote wirklich vergleichbar machen</h2>
      <p>
        Bitten Sie beide Anbieter, dieselben acht Punkte schriftlich zu
        beantworten. Danach vergleichen sich Angebote fast von allein:
      </p>
      <ul>
        <li>Wie viele Seitentypen und wie viele Einzelseiten sind enthalten?</li>
        <li>Wer schreibt die Texte, wer liefert Bilder?</li>
        <li>Welche SEO-Leistungen sind enthalten, welche kosten extra?</li>
        <li>Welche Ladezeit- und Barrierefreiheitsziele werden zugesagt?</li>
        <li>Wie viele Korrekturschleifen sind eingeplant?</li>
        <li>Was kostet der Betrieb pro Jahr, was eine Stunde Anpassung?</li>
        <li>Welche Reaktionszeit gilt bei Ausfall der Seite?</li>
        <li>Wem gehören Domain, Code und Inhalte nach Projektende?</li>
      </ul>

      <h2>Was eine Website einbringen muss, damit sie sich rechnet</h2>
      <p>
        Rechnen Sie nicht in Kosten, sondern in Deckungsbeiträgen. Wenn ein
        gewonnener Auftrag Ihnen im Schnitt einen bestimmten Deckungsbeitrag
        bringt und die Website über die Nutzungsdauer eine bestimmte Summe
        kostet, ergibt sich sofort, wie viele zusätzliche Aufträge nötig
        sind. Setzen Sie Ihre eigenen Zahlen ein: Investition geteilt durch
        Deckungsbeitrag je Auftrag ergibt die Zahl der Aufträge, ab der sich
        das Projekt trägt. Bei erklärungsbedürftigen B2B-Leistungen mit hohem
        Auftragswert ist diese Zahl oft überraschend klein. Genau deshalb
        lohnt sich die Investition in Konzept und Text an dieser Stelle mehr
        als jede Ersparnis beim Design.
      </p>

      <h2>Und was ist mit KI-Baukästen?</h2>
      <p>
        Werkzeuge, die aus einer Beschreibung eine komplette Website erzeugen,
        sind inzwischen brauchbar. Sie ersetzen den Umsetzungsteil teilweise,
        aber nicht die Arbeit davor und danach: Positionierung, Struktur,
        belastbare Inhalte, rechtliche Prüfung, Anbindung an Ihre Systeme und
        laufende Pflege. Wenn Sie einen Baukasten nutzen, planen Sie das
        eingesparte Geld in genau diese Punkte um. Dann ist das Ergebnis
        besser als eine teure Seite ohne Aussage.
      </p>
    </ArticleLayout>
  );
}
