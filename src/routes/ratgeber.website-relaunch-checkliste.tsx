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
        Ein Website-Relaunch kann bestehende Sichtbarkeit in Suchmaschinen
        deutlich verändern. Entscheidend sind dabei nicht nur Gestaltung,
        sondern vor allem Weiterleitungen, Inhalte und Technik. Diese Checkliste geht in der
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
          <code>X-Robots-Tag: noindex</code> ausgeliefert wird. Dieser Fehler
          kommt in Relaunch-Projekten immer wieder vor.
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
        Einbruch kann nach einem Relaunch auftreten. Beobachten Sie die
        wichtigsten Rankings und prüfen Sie bei anhaltenden Verlusten zuerst
        Weiterleitungen, Indexierung und Inhalte.
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
        Selbst ein sauber geplanter Relaunch kann in den ersten Wochen schwanken.
        Dauer und Ausmaß hängen von Umfang, Crawling, Wettbewerb und den
        vorgenommenen Änderungen ab. Bei anhaltenden Verlusten sollten Technik,
        Weiterleitungen, Indexierung und Inhalte systematisch geprüft werden.
      </p>

      <h2>Die Weiterleitungsliste: das Herzstück des Umzugs</h2>
      <p>
        Kein anderer Punkt entscheidet so stark über den Ausgang. So bauen Sie
        die Liste sauber auf:
      </p>
      <ol>
        <li>
          <strong>Alle alten Adressen sammeln.</strong> Aus der Sitemap, aus
          einem Crawl der alten Seite, aus der Search Console (Seiten mit
          Impressionen der letzten zwölf Monate) und aus der Webanalyse
          (Seiten mit Aufrufen).
        </li>
        <li>
          <strong>Nach Wert sortieren.</strong> Seiten mit Klicks, Anfragen
          oder externen Verweisen zuerst. Die übrigen dürfen später kommen.
        </li>
        <li>
          <strong>Ziele einzeln zuordnen.</strong> Jede alte Adresse bekommt
          das inhaltlich nächstliegende neue Ziel. Eine Sammelweiterleitung
          aller Seiten auf die Startseite ist der klassische Fehler und wird
          von Suchmaschinen weitgehend wie eine Fehlerseite behandelt.
        </li>
        <li>
          <strong>Dauerhaft weiterleiten.</strong> Statuscode 301, keine
          Weiterleitungsketten über mehrere Stationen, keine Weiterleitung auf
          eine Seite, die selbst weiterleitet.
        </li>
        <li>
          <strong>Vor dem Livegang testen.</strong> Die Liste lässt sich gegen
          die Testumgebung prüfen, bevor jemand sie in der echten Welt
          bemerkt.
        </li>
      </ol>

      <h2>Der Testserver darf nicht in den Index</h2>
      <p>
        Eine öffentlich erreichbare Testumgebung kann im schlimmsten Fall
        indexiert werden und mit der echten Seite konkurrieren. Sichern Sie
        sie mit einem Passwortschutz auf Serverebene ab. Genauso wichtig ist
        der umgekehrte Fehler: Nach dem Livegang muss die Sperre für
        Suchmaschinen wieder verschwinden. Prüfen Sie am Tag des Umzugs die
        Datei <code>robots.txt</code> und die Meta-Angabe für Indexierung auf
        mehreren Seiten. Eine versehentlich stehengebliebene Sperre ist die
        häufigste Ursache für den plötzlichen Totalverlust nach einem
        Relaunch.
      </p>

      <h2>Die Ladezeit-Prüfung gehört vor den Livegang</h2>
      <p>
        Neue Seiten sind oft schwerer als alte: größere Bilder, mehr
        Schriften, mehr Skripte. Messen Sie vor dem Umzug die Core Web Vitals
        der Testumgebung und vergleichen Sie sie mit den bisherigen Werten aus
        der Search Console, die auf echten Nutzungsdaten beruhen (
        <a
          href="https://support.google.com/webmasters/answer/9205520?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search-Console-Hilfe
        </a>
        ). Google nennt als gute Werte 2,5 Sekunden für LCP,
        200 Millisekunden für INP und 0,1 für CLS (
        <a
          href="https://developers.google.com/search/docs/appearance/core-web-vitals"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Search Central
        </a>
        ). Wer diese Prüfung auf „nach dem Livegang" schiebt, sucht später im
        laufenden Betrieb.
      </p>

      <h2>Am Tag des Livegangs: die Reihenfolge zählt</h2>
      <ol>
        <li>Umzug außerhalb der Hauptgeschäftszeit einplanen.</li>
        <li>Vollständige Sicherung der alten Seite und der Datenbank anlegen.</li>
        <li>Neue Seite freischalten, Passwortschutz entfernen.</li>
        <li>
          Indexierungssperre entfernen, <code>robots.txt</code> und
          kanonische Adressen stichprobenartig prüfen.
        </li>
        <li>Weiterleitungen an zwanzig wichtigen Adressen von Hand testen.</li>
        <li>Formulare absenden und prüfen, ob die Nachricht ankommt.</li>
        <li>
          Neue Sitemap in der Search Console einreichen, Änderung dort im
          Änderungsprotokoll vermerken.
        </li>
        <li>
          Webanalyse und Einwilligungsbanner kontrollieren: Werden Zugriffe
          gezählt und Einwilligungen korrekt beachtet?
        </li>
        <li>
          Zieldefinitionen in der Webanalyse neu setzen, wenn sich Adressen
          von Danke-Seiten geändert haben.
        </li>
      </ol>

      <h2>Domainwechsel: ein Sonderfall mit eigenem Werkzeug</h2>
      <p>
        Wenn sich nicht nur die Struktur, sondern auch die Domain ändert,
        nutzen Sie in der Google Search Console zusätzlich das Werkzeug für
        den Adresswechsel. Voraussetzung ist, dass Sie beide Domains dort
        bestätigt haben und die Weiterleitungen bereits laufen. Ändern Sie in
        diesem Fall nichts anderes gleichzeitig: Domainwechsel und
        Inhaltsumbau in einem Schritt machen die Fehlersuche später fast
        unmöglich.
      </p>

      <h2>Häufige Fehler, die wir immer wieder sehen</h2>
      <ul>
        <li>
          Alte Inhalte werden ersatzlos gestrichen, weil sie „alt" wirken,
          obwohl sie den Großteil der Suchanfragen erzeugt haben.
        </li>
        <li>
          Seitentitel und Beschreibungen werden im neuen System automatisch
          generiert und überschreiben die gepflegten Angaben.
        </li>
        <li>
          Bilder verlieren ihre Alternativtexte beim Import.
        </li>
        <li>
          Die interne Verlinkung wird auf Navigation reduziert, verwandte
          Inhalte verlinken nicht mehr aufeinander.
        </li>
        <li>
          Strukturierte Daten für Organisation, Leistungen und FAQ werden
          nicht mitgenommen.
        </li>
        <li>
          Niemand hat Vorher-Werte festgehalten, deshalb lässt sich nach vier
          Wochen nicht sagen, ob etwas schlechter geworden ist.
        </li>
      </ul>
    </ArticleLayout>
  );
}
