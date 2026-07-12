import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/content/article-layout";
import { routeHead } from "@/lib/route-head";
import { findArticle } from "@/lib/ratgeber";

const article = findArticle("google-unternehmensprofil-optimieren")!;

export const Route = createFileRoute("/ratgeber/google-unternehmensprofil-optimieren")({
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
        Für lokal tätige Unternehmen ist das Google-Unternehmensprofil (früher
        „Google My Business") oft der kürzeste Weg zu neuen Anfragen. Es
        entscheidet, ob Sie im lokalen 3er-Pack über der klassischen Suche
        erscheinen und wie überzeugend Sie in Google Maps wirken. Dieser
        Leitfaden zeigt die Schritte, die in der Praxis den größten Effekt
        haben.
      </p>

      <h2>1. Profil beanspruchen und verifizieren</h2>
      <p>
        Legen Sie das Profil unter <em>google.com/business</em> an oder
        beanspruchen Sie ein bereits vorhandenes. Google verifiziert Ihre
        Adresse per Postkarte, Telefonanruf, Video oder E-Mail; welche Optionen
        angeboten werden, hängt von Branche und Standort ab. Ohne Verifizierung
        werden Änderungen nicht öffentlich sichtbar.
      </p>

      <h2>2. NAP sauber und identisch zur Website halten</h2>
      <p>
        NAP steht für Name, Adresse, Telefonnummer. Diese drei Angaben müssen
        exakt so auf dem Profil, in Ihrer Website-Fußzeile, im Impressum und in
        anderen Verzeichnissen stehen. Uneinheitliche Schreibweisen
        („Str." vs. „Straße", mit oder ohne Ortsteil) schwächen das Signal an
        Google, dass es sich um denselben Betrieb handelt.
      </p>

      <h2>3. Kategorien präzise wählen</h2>
      <p>
        Die Hauptkategorie ist der wichtigste Rankingfaktor im lokalen Umfeld.
        Wählen Sie die spezifischste Kategorie, die Ihr Kerngeschäft trifft.
        Ergänzen Sie bis zu neun Nebenkategorien für weitere Leistungen. Zu
        allgemein („Dienstleister") oder zu weit gefasst zu wählen, kostet
        Sichtbarkeit für konkrete Suchanfragen.
      </p>

      <h2>4. Öffnungszeiten, Leistungen und Attribute pflegen</h2>
      <p>
        Regelmäßige Öffnungszeiten, Feiertagsausnahmen und Sonderzeiten (etwa
        Betriebsferien) gehören ins Profil. Nutzen Sie den Abschnitt
        „Leistungen", um Ihre Angebote als eigene Einträge mit kurzer
        Beschreibung zu hinterlegen. Attribute wie „barrierefreier Zugang",
        „WLAN vorhanden" oder „inhabergeführt" liefern Google zusätzliche
        Filterkriterien.
      </p>

      <h2>5. Fotos aus dem realen Betrieb</h2>
      <p>
        Echte Fotos vom Team, den Räumen und Arbeitsproben schlagen jedes
        Stockbild. Google empfiehlt Aufnahmen im Querformat, mindestens
        720 × 720 Pixel. Aktualisieren Sie die Bildgalerie regelmäßig; ein
        gepflegtes Profil wirkt in der Vorschau deutlich vertrauenswürdiger.
      </p>

      <h2>6. Bewertungen aktiv und ehrlich einsammeln</h2>
      <p>
        Bewertungen sind der wichtigste Vertrauensfaktor im Profil. Bitten Sie
        zufriedene Kunden direkt im Anschluss an einen Auftrag um eine
        Bewertung; ein kurzer Link per E-Mail oder QR-Code funktioniert gut.
        Antworten Sie auf jede Bewertung, positiv wie negativ, sachlich und
        namentlich. Google bewertet die Reaktionsquote als Qualitätssignal.
      </p>
      <p>
        Verboten sind gekaufte Bewertungen und Bewertungen im Tausch für
        Rabatte oder Gewinnspielteilnahme. Google entfernt solche Bewertungen
        und kann Profile sperren.
      </p>

      <h2>7. Beiträge und Fragen als laufende Signale</h2>
      <p>
        Über die Funktion „Updates" können Sie regelmäßig kurze Beiträge
        veröffentlichen: Neuigkeiten, Angebote, Veranstaltungen. Diese
        erscheinen im Profil und geben Google frische Signale. Prüfen Sie
        zusätzlich den Bereich „Fragen &amp; Antworten": Alles, was Nutzer
        stellen, sollten Sie selbst beantworten, bevor es andere tun.
      </p>

      <h2>Was Sie messen sollten</h2>
      <p>
        In den Statistiken sehen Sie Aufrufe, Suchanfragen (wie Nutzer Sie
        gefunden haben), Anrufe, Wegbeschreibungen und Klicks auf die Website.
        Beobachten Sie die Entwicklung monatlich. Wenn Aufrufe stagnieren,
        prüfen Sie Kategorien, Fotos und Bewertungsfrequenz zuerst.
      </p>
    </ArticleLayout>
  );
}
