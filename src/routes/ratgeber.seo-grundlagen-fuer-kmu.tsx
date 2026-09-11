import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/content/article-layout";
import { routeHead } from "@/lib/route-head";
import { findArticle } from "@/lib/ratgeber";

const article = findArticle("seo-grundlagen-fuer-kmu")!;

export const Route = createFileRoute("/ratgeber/seo-grundlagen-fuer-kmu")({
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
        SEO ist für viele KMU ein Reizthema. Zu viele Versprechen, zu viele
        Berichte, zu wenig Anfragen. Dieser Artikel ordnet ein, was für ein
        Unternehmen im Mittelstand wirklich zählt und was Sie als Nebenrauschen
        ignorieren dürfen.
      </p>

      <h2>Die drei Ebenen, auf denen SEO passiert</h2>
      <p>
        Suchmaschinen bewerten eine Website nach drei sehr unterschiedlichen
        Ebenen. Auf allen drei müssen die Grundlagen stimmen, damit gute
        Rankings überhaupt möglich sind:
      </p>
      <ul>
        <li>
          <strong>Technik.</strong> Die Seite lädt schnell, ist mobil bedienbar,
          hat sinnvolle interne Verlinkung und eine saubere Struktur (Sitemap,
          Robots, Statuscodes). Ohne technische Basis nutzt der beste Text nichts.
        </li>
        <li>
          <strong>Inhalt.</strong> Es gibt für jede wichtige Suchintention eine
          eigene, gut geschriebene Seite. Nicht eine Universal-Seite, sondern
          jeweils eine Seite, die genau eine Frage beantwortet.
        </li>
        <li>
          <strong>Vertrauen.</strong> Andere seriöse Seiten verweisen auf Sie,
          das Unternehmen ist als Marke erkennbar, Bewertungen und Erwähnungen
          bestätigen das Bild. Vertrauen entsteht langsam und ist der Grund, warum
          SEO Zeit braucht.
        </li>
      </ul>

      <h2>Was für den Mittelstand wirklich zählt</h2>
      <p>
        Für ein KMU ist die entscheidende Frage nicht „Wie ranke ich für ein
        umkämpftes Hauptkeyword", sondern „Wie werde ich für die konkreten
        Anfragen gefunden, die meine Zielkundschaft heute stellt". Das sind
        meistens Kombinationen aus Leistung und Region oder Leistung und Branche.
        Diese Anfragen haben oft weniger Suchvolumen und können dafür näher an
        einer konkreten Kaufabsicht liegen.
      </p>
      <p>
        Konkret heißt das: eine Handvoll wirklich guter Landingpages,
        saubere lokale Signale (vollständiges Google-Unternehmensprofil,
        einheitliche Adressdaten, gute Bewertungen) und Inhalte, die die
        typischen Fragen Ihrer Kundschaft in klarer Sprache beantworten.
      </p>

      <h2>Was Sie ignorieren dürfen</h2>
      <p>
        Es gibt einen Berg an SEO-Ratschlägen, die für Konzerne oder große
        Publisher gelten und für KMU wenig bringen:
      </p>
      <ul>
        <li>
          <strong>Massenhaftes Content-Publishing.</strong> Zehn dünne Artikel
          pro Woche schaden mehr als sie nutzen.
        </li>
        <li>
          <strong>Linkkauf und Linktausch.</strong> Kurzfristige Effekte,
          langfristige Risiken.
        </li>
        <li>
          <strong>Keyword-Dichte.</strong> Ein Konzept aus der SEO-Frühzeit,
          das seit vielen Jahren keine Rolle mehr spielt.
        </li>
        <li>
          <strong>Berichte mit vielen Kurven.</strong> Solange sie nicht mit
          Anfragen oder Umsatz enden, sind sie Dekoration.
        </li>
      </ul>

      <h2>Wie lange dauert es, bis SEO wirkt</h2>
      <p>
        Wie schnell SEO wirkt, hängt von Ausgangslage, Wettbewerb, Technik und
        Umfang der Änderungen ab. Technische Korrekturen können früher sichtbar
        werden als neue Inhalte. Belastbare Auswirkungen auf Anfragen brauchen
        häufig mehrere Monate. Wer kurzfristig Reichweite benötigt, kann SEO
        zeitweise mit bezahlter Sichtbarkeit kombinieren.
      </p>
      <p>
        Und ja: es gibt Fälle mit stärkerem Effekt in kürzerer Zeit. meist
        dann, wenn die technische Basis dramatisch schlecht war oder eine
        Nische wenig bespielt ist. Verlassen sollten Sie sich darauf nicht.
      </p>

      <h2>Die technischen Kennzahlen, die Google wirklich benennt</h2>
      <p>
        Statt allgemeiner „Ladezeit" nennt Google drei konkrete Messwerte, die
        Core Web Vitals, und empfiehlt Websitebetreibern ausdrücklich, gute
        Werte anzustreben
        (<a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">Google Search Central</a>):
      </p>
      <ul>
        <li>
          <strong>LCP</strong> (Largest Contentful Paint) misst, wann der
          größte sichtbare Inhalt geladen ist. Als gut gilt ein Wert bis
          2,5 Sekunden.
        </li>
        <li>
          <strong>INP</strong> (Interaction to Next Paint) misst, wie schnell
          die Seite auf Eingaben reagiert. Als gut gilt ein Wert bis
          200 Millisekunden.
        </li>
        <li>
          <strong>CLS</strong> (Cumulative Layout Shift) misst, wie stark
          Inhalte beim Laden verspringen. Als gut gilt ein Wert bis 0,1.
        </li>
      </ul>
      <p>
        Diese Werte finden Sie im Core-Web-Vitals-Bericht der Google Search
        Console, und zwar auf Basis echter Nutzungsdaten Ihrer Besucher
        (<a href="https://support.google.com/webmasters/answer/9205520?hl=de" target="_blank" rel="noopener noreferrer">Search-Console-Hilfe</a>). Genau
        das ist der Unterschied zu Testwerkzeugen: Laborwerte sind hilfreich
        für die Fehlersuche, bewertet werden aber die Felddaten.
      </p>

      <h2>Was der Aufstieg der KI-Antworten für Ihre Inhalte ändert</h2>
      <p>
        Google zeigt für einen wachsenden Teil der Anfragen KI-Übersichten
        über den klassischen Treffern und bietet mit dem AI Mode eine eigene
        dialogorientierte Suche an
        (<a href="https://blog.google/products/search/ai-mode-search/" target="_blank" rel="noopener noreferrer">Google zu AI Mode</a>).
        Für den Mittelstand hat das eine unbequeme und eine gute Seite.
      </p>
      <p>
        Unbequem: Seiten, die nichts weiter tun als einen Begriff zu erklären,
        verlieren ihre Berechtigung. Diese Antwort liefert die Suche selbst.
        Gut: Alles, was ein Modell nicht aus dem Nichts erzeugen kann, gewinnt
        an Wert. Konkrete Preise, Verfügbarkeiten, Referenzprojekte,
        Materialangaben, Öffnungszeiten, Ansprechpartner, Formulare, Rechner.
        Wer diese Dinge sauber auf eigenen Seiten führt, bleibt sowohl in der
        klassischen Liste als auch als Quelle in Antworten relevant.
      </p>

      <h2>KI beim Schreiben nutzen, ohne abzustürzen</h2>
      <p>
        Werkzeuge wie ChatGPT, Claude oder Gemini schreiben schnell Text. Das
        Problem ist nicht das Werkzeug, sondern der Einsatz ohne Substanz.
        Googles Bewertungsrichtlinien stellen auf hilfreiche, von Menschen
        verantwortete Inhalte ab, nicht auf die Frage, welches Programm den
        Rohtext erzeugt hat. Sinnvoll ist deshalb ein Ablauf, in dem KI die
        lästigen Teile übernimmt und Menschen den Wert beisteuern:
      </p>
      <ol>
        <li>
          Recherche und Gliederung mit KI vorbereiten, danach mit eigenen
          Quellen prüfen.
        </li>
        <li>
          Fachwissen, Zahlen und Beispiele aus dem eigenen Betrieb ergänzen.
          Dieser Teil lässt sich nicht auslagern.
        </li>
        <li>
          Jede Zahl, jedes Zitat und jede Rechtsaussage an der Primärquelle
          gegenprüfen und verlinken.
        </li>
        <li>
          Verantwortliche Person mit Namen und Rolle nennen, Datum setzen.
        </li>
      </ol>
      <p>
        Massenhaft erzeugte Seiten ohne eigenen Beitrag sind das Gegenteil
        davon und gefährden das gesamte Projekt.
      </p>

      <h2>Lokale Sichtbarkeit ist für KMU der kürzeste Hebel</h2>
      <p>
        Für regional tätige Unternehmen liefert die lokale Suche meist
        schneller Anfragen als jedes überregionale Thema. Die Grundlage sind
        drei Dinge: ein vollständiges, verifiziertes Google-Unternehmensprofil,
        überall identische Angaben zu Name, Adresse und Telefonnummer, sowie
        eine eigene Landingpage je Standort und Hauptleistung. Eine Seite, die
        alle Städte gleichzeitig abdecken will, deckt in der Praxis keine ab.
      </p>

      <h2>Ein Zwölf-Wochen-Plan, den ein KMU wirklich schafft</h2>
      <ol>
        <li>
          <strong>Woche 1 bis 2:</strong> Search Console und Webanalyse
          einrichten oder prüfen, Ausgangswerte für Klicks, Impressionen und
          Anfragen festhalten.
        </li>
        <li>
          <strong>Woche 3 bis 4:</strong> Technische Basis abarbeiten:
          Indexierbarkeit, Weiterleitungen, mobile Bedienbarkeit, Core Web
          Vitals, interne Verlinkung.
        </li>
        <li>
          <strong>Woche 5 bis 8:</strong> Die drei umsatzstärksten Leistungen
          bekommen je eine eigene, ausführliche Seite mit Preisorientierung,
          Ablauf, Referenz und Kontaktweg.
        </li>
        <li>
          <strong>Woche 9 bis 10:</strong> Lokale Signale schärfen: Profil,
          Bewertungen, Verzeichnisse, Standortseiten.
        </li>
        <li>
          <strong>Woche 11 bis 12:</strong> Zwei Ratgeberbeiträge zu den
          häufigsten Kundenfragen, jeweils intern auf die passende
          Leistungsseite verlinkt. Danach messen und nachschärfen.
        </li>
      </ol>

      <h2>Woran Sie eine seriöse SEO-Betreuung erkennen</h2>
      <ul>
        <li>
          Sie bekommt Zugriff auf Ihre echten Daten und arbeitet damit, statt
          nur mit Werkzeugen von außen zu schätzen.
        </li>
        <li>
          Sie nennt Annahmen und Unsicherheiten, statt Platzierungen zu
          garantieren.
        </li>
        <li>
          Sie berichtet in Anfragen und Umsatz, nicht nur in Sichtbarkeitsindizes.
        </li>
        <li>
          Sie sagt Ihnen, wann SEO nicht das richtige Mittel ist, etwa bei
          einem völlig neuen Angebot, nach dem noch niemand sucht.
        </li>
      </ul>
    </ArticleLayout>
  );
}
