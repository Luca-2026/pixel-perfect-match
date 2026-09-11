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

      <h2>Wie Google lokale Ergebnisse einordnet</h2>
      <p>
        Google nennt für die lokale Platzierung drei Faktoren: Relevanz
        (passt Ihr Profil zur Suchanfrage), Entfernung (wie weit ist Ihr
        Standort vom Suchenden oder vom gesuchten Ort entfernt) und Bekanntheit
        (wie bekannt ist Ihr Unternehmen, auch außerhalb von Google). Die
        Details beschreibt Google in der{" "}
        <a
          href="https://support.google.com/business/answer/7091"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hilfe zum Unternehmensprofil
        </a>
        . Praktisch bedeutet das: Die Entfernung können Sie nicht
        beeinflussen, Relevanz und Bekanntheit sehr wohl.
      </p>

      <h2>Was Sie besser nicht tun</h2>
      <ul>
        <li>
          <strong>Keywords in den Firmennamen schreiben.</strong> „Müller GmbH
          Sanitär Heizung Notdienst Bonn" verstößt gegen Googles Richtlinien
          zur Darstellung Ihres Unternehmens. Der Eintrag muss dem Namen
          entsprechen, unter dem Sie tatsächlich auftreten. Verstöße können
          zur Sperrung des Profils führen.
        </li>
        <li>
          <strong>Adressen erfinden.</strong> Ein virtuelles Büro oder eine
          Anschrift ohne persönliche Besetzung während der angegebenen Zeiten
          ist nicht zulässig. Wer ohne feste Adresse zum Kunden fährt, richtet
          stattdessen ein Einzugsgebiet ein.
        </li>
        <li>
          <strong>Mehrere Profile für denselben Standort.</strong> Doppelte
          Einträge teilen Bewertungen und Signale und werden von Google
          zusammengeführt oder entfernt.
        </li>
      </ul>

      <h2>Ein Bewertungsprozess, der ohne Druck funktioniert</h2>
      <p>
        Bewertungen entstehen nicht zufällig, sondern durch einen festen
        Ablauf. Bewährt hat sich diese Reihenfolge:
      </p>
      <ol>
        <li>
          Den richtigen Moment festlegen: direkt nach der Abnahme, der
          Übergabe oder dem letzten Termin, nicht Wochen später.
        </li>
        <li>
          Persönlich fragen, danach den kurzen Bewertungslink per Nachricht
          oder QR-Code nachreichen. Den Link erzeugen Sie direkt im Profil.
        </li>
        <li>
          Eine Person im Team ist zuständig und beantwortet alle Bewertungen
          innerhalb weniger Werktage.
        </li>
        <li>
          Kritik sachlich beantworten, Lösung anbieten, Klärung ins
          Persönliche verlagern. Öffentliche Rechtfertigung schadet mehr als
          die Kritik selbst.
        </li>
        <li>
          Bei offensichtlich falschen oder beleidigenden Bewertungen den
          Meldeweg im Profil nutzen, statt zu diskutieren.
        </li>
      </ol>
      <p>
        Anreize wie Rabatte oder Gewinnspiele für Bewertungen sind nicht
        zulässig und können zusätzlich wettbewerbsrechtliche Folgen haben.
      </p>

      <h2>Warum das Profil auch für KI-Antworten zählt</h2>
      <p>
        KI-Assistenten beantworten zunehmend Fragen der Form „Wer macht das in
        meiner Nähe". Sie stützen sich dabei auf öffentlich zugängliche,
        strukturierte Angaben. Ein vollständig gepflegtes Profil mit
        einheitlichen Daten, echten Bewertungen und klaren Leistungsangaben
        ist damit auch eine Grundlage dafür, in solchen Antworten überhaupt
        vorzukommen. Wichtig ist die Konsistenz: Ihre Angaben im Profil, im
        Impressum, auf der Kontaktseite und in Verzeichnissen sollten sich
        nicht widersprechen.
      </p>

      <h2>Eine Routine, die zwanzig Minuten im Monat kostet</h2>
      <ul>
        <li>Neue Bewertungen beantworten.</li>
        <li>Zwei bis vier aktuelle Fotos hochladen.</li>
        <li>Einen kurzen Beitrag zu einem aktuellen Projekt oder Angebot veröffentlichen.</li>
        <li>Neue Fragen im Bereich „Fragen und Antworten" beantworten.</li>
        <li>Sonderöffnungszeiten für den kommenden Monat eintragen.</li>
        <li>Statistiken kurz vergleichen: Anrufe, Routenanfragen, Website-Klicks.</li>
      </ul>
      <p>
        Diese Routine ist unspektakulär und genau deshalb wirksam. Die meisten
        Wettbewerber machen sie nicht.
      </p>
    </ArticleLayout>
  );
}
