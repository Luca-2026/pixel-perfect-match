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
        Diese Anfragen haben weniger Volumen, dafür deutlich höhere
        Abschlussquoten.
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
        Sichtbare Bewegung in den Rankings zeigt sich meist nach zwei bis vier
        Monaten, spürbare Auswirkungen auf Anfragen typischerweise nach sechs
        Monaten. Wer schneller Ergebnisse braucht, sollte SEO mit bezahlter
        Sichtbarkeit kombinieren, statt vom SEO-Retainer Wunder zu erwarten.
      </p>
      <p>
        Und ja: es gibt Fälle mit stärkerem Effekt in kürzerer Zeit – meist
        dann, wenn die technische Basis dramatisch schlecht war oder eine
        Nische wenig bespielt ist. Verlassen sollten Sie sich darauf nicht.
      </p>
    </ArticleLayout>
  );
}
