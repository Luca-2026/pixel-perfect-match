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
        beeinflusst, wie vollständig und überzeugend Ihr Unternehmen in der
        lokalen Suche und in Google Maps erscheint. Dieser
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
        sachlich übereinstimmend im Profil, im Impressum und in relevanten
        Verzeichnissen stehen. Achten Sie besonders auf korrekte Firmierung,
        Adresse und Telefonnummer.
      </p>

      <h2>3. Kategorien präzise wählen</h2>
      <p>
        Die Hauptkategorie ist ein wichtiger Faktor für die Einordnung des Profils.
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
        Echte Fotos vom Team, den Räumen und Arbeitsproben vermitteln einen
        nachvollziehbaren Eindruck. Google nennt für Fotos eine empfohlene
        Auflösung von 720 × 720 Pixeln. Aktualisieren Sie die Bildgalerie bei
        relevanten Veränderungen; ein
        gepflegtes Profil wirkt in der Vorschau deutlich vertrauenswürdiger.
      </p>

      <h2>6. Bewertungen aktiv und ehrlich einsammeln</h2>
      <p>
        Bewertungen sind ein gut sichtbarer Vertrauensfaktor im Profil. Bitten Sie
        zufriedene Kunden direkt im Anschluss an einen Auftrag um eine
        Bewertung; ein kurzer Link per E-Mail oder QR-Code funktioniert gut.
        Antworten Sie auf jede Bewertung, positiv wie negativ, sachlich und
        namentlich. Antworten zeigen Interessierten, wie Sie mit Rückmeldungen umgehen.
      </p>
      <p>
        Verboten sind gekaufte Bewertungen und Bewertungen im Tausch für
        Rabatte oder Gewinnspielteilnahme. Google entfernt solche Bewertungen
        und kann Profile einschränken. Vergünstigungen für Bewertungen können
        außerdem wettbewerbsrechtliche Risiken auslösen.
      </p>

      <h2>7. Beiträge und Fragen als laufende Signale</h2>
      <p>
        Über die Funktion „Updates" können Sie regelmäßig kurze Beiträge
        veröffentlichen: Neuigkeiten, Angebote, Veranstaltungen. Diese
        erscheinen im Profil und informieren Interessierte über aktuelle Themen. Prüfen Sie
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
