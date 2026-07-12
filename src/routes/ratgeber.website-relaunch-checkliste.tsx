import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/content/article-layout";
import { routeHead } from "@/lib/route-head";
import { findArticle } from "@/lib/ratgeber";

const article = findArticle("website-relaunch-checkliste")!;

export const Route = createFileRoute("/ratgeber/website-relaunch-checkliste")({
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
        Ein Website-Relaunch ist eine der wenigen Situationen, in denen Sie
        Ihre Sichtbarkeit bei Google innerhalb weniger Tage verdoppeln oder
        halbieren können. Der Unterschied liegt fast nie am Design, sondern an
        Redirects, Inhalten und Technik. Diese Checkliste geht in der
        praxisüblichen Reihenfolge vor.
      </p>

      <h2>Vor dem Livegang</h2>
      <ol>
        <li>
          <strong>URL-Inventar der alten Seite.</strong> Exportieren Sie alle
          indexierten URLs aus der Google Search Console und ergänzen Sie den
          Crawl mit einem Werkzeug wie Screaming Frog oder Sitebulb. So haben
          Sie eine vollständige Liste dessen, was heute Traffic bringt.
        </li>
        <li>
          <strong>Top-Seiten identifizieren.</strong> Kennzeichnen Sie die
          Seiten, die den meisten organischen Traffic, die meisten Klicks aus
          Google und die meisten Backlinks haben. Diese Seiten dürfen im
          Relaunch nicht verschwinden.
        </li>
        <li>
          <strong>Redirect-Plan erstellen.</strong> Jede alte URL bekommt eine
          neue Zieladresse als 301-Weiterleitung. Nur URLs, für die es keinen
          sinnvollen Nachfolger gibt, dürfen auf 410 gesetzt werden.
          Weiterleitungen auf die Startseite sind der häufigste und teuerste
          Fehler.
        </li>
        <li>
          <strong>Inhalte übertragen und verbessern.</strong> Übernehmen Sie
          Texte nur, wenn sie noch stimmen. Alles andere wird neu geschrieben,
          nicht kopiert. Titel und Meta-Descriptions gehören ebenfalls
          überarbeitet.
        </li>
        <li>
          <strong>Technische Basis prüfen.</strong> HTTPS, saubere URLs ohne
          Session-IDs, XML-Sitemap, robots.txt, strukturierte Daten und mobile
          Darstellung sollten vor dem Livegang stehen. Ladezeiten messen Sie
          mit PageSpeed Insights oder WebPageTest.
        </li>
        <li>
          <strong>Staging-Freigabe.</strong> Die neue Seite muss auf einer
          Staging-Umgebung laufen, die per Passwort oder IP geschützt ist und
          per <code>noindex</code> plus <code>robots.txt</code> von Google
          ferngehalten wird. Sonst konkurriert die Baustelle mit dem Original.
        </li>
      </ol>

      <h2>Am Tag des Livegangs</h2>
      <ol>
        <li>
          <strong>Redirects aktivieren.</strong> Die 301-Regeln müssen zeitgleich
          mit dem Livegang greifen. Prüfen Sie eine repräsentative Auswahl
          manuell im Browser.
        </li>
        <li>
          <strong>Sitemap einreichen.</strong> Die neue XML-Sitemap gehört in die
          Google Search Console. Die alte Sitemap bleibt bewusst kurz erreichbar,
          damit Google die alten URLs schneller nachcrawlt und die Redirects
          verarbeitet.
        </li>
        <li>
          <strong>Analytics und Tag-Manager prüfen.</strong> Testen Sie, dass
          Seitenaufrufe, Conversions und E-Commerce-Ereignisse korrekt
          gemessen werden, bevor eine Woche Datenlücke entsteht.
        </li>
        <li>
          <strong>noindex und Staging-Sperren entfernen.</strong> Der klassische
          Fehler ist, dass die Live-Seite mit dem Staging-Header
          <code>X-Robots-Tag: noindex</code> ausgeliefert wird. Das trifft
          jedes zweite Relaunch-Projekt.
        </li>
      </ol>

      <h2>In den ersten vier Wochen</h2>
      <ol>
        <li>
          <strong>Search-Console-Fehler beobachten.</strong> Prüfen Sie täglich
          den Bereich „Indexierung": Wie viele Seiten sind indexiert, welche
          Fehler gibt es, wie werden die Redirects erkannt?
        </li>
        <li>
          <strong>Traffic und Rankings kontrollieren.</strong> Ein leichter
          Einbruch für ein bis zwei Wochen ist normal, danach sollten die
          wichtigsten Rankings wieder auf altem Niveau sein. Bleibt der
          Einbruch, prüfen Sie zuerst Redirects und Inhalte.
        </li>
        <li>
          <strong>Backlinks aktualisieren.</strong> Die zehn wichtigsten
          externen Verweise (Verzeichnisse, Partnerseiten, Google-Profil)
          bekommen die neuen Ziel-URLs direkt eingetragen. Redirects sind gut,
          direkte Links sind besser.
        </li>
        <li>
          <strong>Interne Verlinkung nachschärfen.</strong> Kontrollieren Sie,
          dass wichtige Seiten aus der Navigation und aus verwandten Artikeln
          erreichbar sind. Verwaiste Seiten fallen sonst aus dem Index.
        </li>
      </ol>

      <h2>Realistische Erwartung</h2>
      <p>
        Selbst ein sauber geplanter Relaunch schwankt in den ersten Wochen. Die
        Erholung dauert je nach Umfang zwei bis acht Wochen. Wenn Sie nach zwei
        Monaten nicht wieder auf Ausgangsniveau sind, liegt fast immer ein
        technischer Fehler vor, kein „Algorithmus-Problem".
      </p>
    </ArticleLayout>
  );
}
