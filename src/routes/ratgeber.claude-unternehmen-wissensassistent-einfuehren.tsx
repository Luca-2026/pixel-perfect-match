import { createFileRoute, Link } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/content/article-layout";
import { Button } from "@/components/ui/button";
import { findArticle } from "@/lib/ratgeber";
import { routeHead } from "@/lib/route-head";

const registeredArticle = findArticle("claude-unternehmen-wissensassistent-einfuehren");
if (!registeredArticle) throw new Error("Claude-Ratgeber fehlt im Artikelverzeichnis");
const article = registeredArticle;

const sources = [
  { id: "quelle-projekte", title: "Anthropic: Claude Projects und Projektwissen", url: "https://www.anthropic.com/news/projects" },
  { id: "quelle-rag", title: "Datenschutzkonferenz: Orientierungshilfe zu RAG", url: "https://www.datenschutzkonferenz-online.de/media/oh/DSK_OH_RAG.pdf" },
  { id: "quelle-training", title: "Anthropic: Verbraucherbedingungen und Abgrenzung kommerzieller Dienste", url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
  { id: "quelle-retention", title: "Anthropic: Datenaufbewahrung und Zero Data Retention", url: "https://docs.anthropic.com/en/docs/build-with-claude/zero-data-retention" },
  { id: "quelle-vertraege", title: "Anthropic: Vertragsbedingungen und Data Processing Addendum", url: "https://www.anthropic.com/legal" },
  { id: "quelle-datenschutz", title: "Datenschutzkonferenz: KI und Datenschutz", url: "https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf" },
  { id: "quelle-aiact", title: "EUR-Lex: Verordnung (EU) 2024/1689, insbesondere Artikel 4", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=de" },
];

export const Route = createFileRoute("/ratgeber/claude-unternehmen-wissensassistent-einfuehren")({
  head: () => {
    const head = routeHead({ ...article, h1: article.title });
    return {
      ...head,
      meta: head.meta.map((meta) => {
        if ("property" in meta && meta.property === "og:type") return { ...meta, content: "article" };
        if ("name" in meta && meta.name === "author") return { ...meta, content: "Luca Sandhoff" };
        return meta;
      }),
    };
  },
  component: ClaudeArticle,
});

function ClaudeArticle() {
  return (
    <ArticleLayout article={article}>
      <p className="font-medium">Von Luca Sandhoff, Inhaber von sandhoff.digital. Quellenstand: 8. November 2026.</p>
      <p>
        Wenn Sie Claude in Ihrem Unternehmen einführen möchten, würde ich zuerst eine konkrete Aufgabe untersuchen:
        Wie kommt Ihr Kundenservice heute an eine verlässliche Antwort? Häufig liegen die benötigten Informationen
        verteilt in Leistungsbeschreibungen, internen Anleitungen und Produktunterlagen. Ein Assistent kann daraus
        einen Antwortentwurf vorbereiten. Ob das Ihrem Betrieb tatsächlich hilft, hängt von der Qualität dieser
        Unterlagen, den Zugriffsrechten und der anschließenden Prüfung ab.
      </p>
      <p>
        Ich biete mit sandhoff.digital die Einrichtung von Claude und Schulungen direkt in Ihrem Unternehmen an.
        In diesem Artikel beschreibe ich, wie ich einen begrenzten Wissensassistenten für den Kundenservice planen
        würde. Die Beispiele sind vorgeschlagene Abläufe. Sie sind keine dokumentierten Kundenergebnisse und
        keine Zusage einer bestimmten Zeitersparnis.
      </p>

      <nav aria-label="Inhaltsverzeichnis" className="border-y border-line py-6">
        <p className="font-semibold">In diesem Artikel</p>
        <ol>
          <li><a href="#anwendungsfall">Ein konkreter Anwendungsfall im Kundenservice</a></li>
          <li><a href="#wissensbasis">Projektwissen, RAG und Modelltraining</a></li>
          <li><a href="#datenschutz">Datenschutz und Zugriffsrechte vor dem Start</a></li>
          <li><a href="#pilot">Ein begrenzter Pilot mit überprüfbaren Antworten</a></li>
          <li><a href="#schulung">Vor-Ort-Schulung und KI-Kompetenz</a></li>
          <li><a href="#nutzen">Nutzen und Kosten ehrlich messen</a></li>
          <li><a href="#quellen">Offizielle Quellen und Einordnung</a></li>
        </ol>
      </nav>

      <h2 id="anwendungsfall" className="headline-dot scroll-mt-24">Ein konkreter Anwendungsfall im Kundenservice</h2>
      <p>
        Nehmen wir als ausdrücklich hypothetisches Beispiel einen technischen Dienstleistungsbetrieb. Ein Kunde
        fragt, welche Unterlagen für einen Wartungstermin benötigt werden und ob eine bestimmte Zusatzleistung
        zum vereinbarten Umfang gehört. Der Mitarbeiter muss dafür die aktuelle Leistungsbeschreibung und eine
        interne Vorbereitungsliste zusammenführen. Genau diese eng begrenzte Informationsaufgabe würde ich testen.
      </p>
      <ol>
        <li><strong>Frage eingeben.</strong> Der Mitarbeiter beschreibt die Anfrage. Personenbezogene Daten werden nur eingegeben, wenn dies für den freigegebenen Einsatz erforderlich und zulässig ist.</li>
        <li><strong>Freigegebene Unterlagen heranziehen.</strong> Claude erhält die für diesen Zweck vorgesehenen Dokumente oder relevante Ausschnitte daraus.</li>
        <li><strong>Entwurf mit Beleg erstellen.</strong> Die Ausgabe soll Antwort, Dokumenttitel, Version und passende Fundstelle getrennt aufführen. Fehlende Informationen sollen als offen markiert werden.</li>
        <li><strong>Antwort prüfen.</strong> Der Mitarbeiter öffnet die Fundstellen, prüft den Leistungsumfang und sendet erst dann eine Antwort an den Kunden.</li>
      </ol>
      <p>
        Das ist zunächst ein interner Assistent. Er versendet keine E-Mails, verändert keine Aufträge und gibt
        keine verbindlichen Preise frei. Diese Begrenzung ist meine Empfehlung für den Einstieg. Sie hält den
        Test überschaubar und verhindert, dass ein unbemerkter Antwortfehler sofort eine externe Aktion auslöst.
      </p>
      <p>
        Claude kann trotzdem falsche Angaben oder unpassende Quellenbezüge erzeugen. Ein angegebener Dokumenttitel
        allein ist kein Beweis. Entscheidend ist, ob die zitierte Stelle existiert und die konkrete Antwort trägt.
      </p>

      <h2 id="wissensbasis" className="headline-dot scroll-mt-24">Projektwissen, RAG und Modelltraining unterscheiden</h2>
      <p>
        Anthropic beschreibt <a href="#quelle-projekte">Claude Projects</a> als Arbeitsbereiche mit eigenem
        Projektwissen und Anweisungen. Das kann für einen begrenzten Dokumentenbestand ein Ausgangspunkt sein.
        Das Hochladen einer Anleitung ist jedoch nicht gleichbedeutend mit dem Training eines eigenen Modells.
        Die Unterlagen dienen als Kontext für die Bearbeitung einer Aufgabe.
      </p>
      <p>
        Bei Retrieval-Augmented Generation, kurz RAG, werden zu einer Frage passende Inhalte aus einer
        Wissensquelle abgerufen und dem Modell bereitgestellt. Die <a href="#quelle-rag">Datenschutzkonferenz</a>
        behandelt diesen Ansatz ausdrücklich als eigenes Gestaltungsthema. RAG kann die Nachvollziehbarkeit
        verbessern. Es bringt zugleich zusätzliche Anforderungen an Datenquellen, Verarbeitung und Berechtigungen mit.
      </p>
      <p>
        Ein Claude-Projekt und eine individuell aufgebaute RAG-Anwendung sind deshalb nicht pauschal dasselbe.
        Aus der Projektfunktion lässt sich keine automatische Zusage zu dokumentengenauen Zugriffsrechten,
        Aktualisierung oder vollständigen Quellenbelegen ableiten. Welche Funktionen verfügbar sind, muss für
        den gewählten Tarif und die konkrete Anbindung geprüft werden.
      </p>
      <h3>Welche Unterlagen ich zuerst vorbereiten würde</h3>
      <ul>
        <li>Aktuelle Leistungsbeschreibungen mit eindeutigem Gültigkeitsdatum.</li>
        <li>Freigegebene Antworten auf wiederkehrende Servicefragen.</li>
        <li>Produktunterlagen mit Verantwortlichem und Versionsstand.</li>
        <li>Interne Abläufe, deren Inhalt das Pilotteam tatsächlich sehen darf.</li>
        <li>Eine Liste der Fragen, bei denen immer eine Fachperson übernehmen muss.</li>
      </ul>
      <p>
        Alte und aktuelle Fassungen derselben Anleitung würde ich vor dem Start bereinigen. Veraltete Dokumente
        bleiben auch dann veraltet, wenn eine KI sie flüssig zusammenfasst. Für jede Quelle braucht es einen
        Verantwortlichen, der Änderungen freigibt und überholte Inhalte aus dem genutzten Bestand entfernt.
      </p>

      <h2 id="datenschutz" className="headline-dot scroll-mt-24">Datenschutz und Zugriffsrechte vor dem Start klären</h2>
      <p>
        „Claude ist DSGVO-konform“ wäre als allgemeines Versprechen zu ungenau. Die rechtliche Bewertung betrifft
        Ihren konkreten Zweck, die verwendeten Daten, das gewählte Produkt und dessen Vertragsbedingungen.
        Die <a href="#quelle-datenschutz">Orientierungshilfe der Datenschutzkonferenz</a> unterstützt diese
        Prüfung. Sie ist selbst kein abschließender Anforderungskatalog. Ich würde die technische Einrichtung
        mit den zuständigen Personen für Datenschutz und gegebenenfalls Ihrer Rechtsberatung abstimmen.
      </p>
      <h3>Kein Training bedeutet nicht keine Speicherung</h3>
      <p>
        Anthropic unterscheidet Verbraucherangebote und kommerzielle Dienste. Für kommerzielle Dienste werden
        Kundendaten nach den <a href="#quelle-training">Anbieterangaben</a> standardmäßig nicht für das
        Modelltraining verwendet. Daraus folgt nicht, dass Eingaben und Dateien überhaupt nicht gespeichert
        werden. Aufbewahrung und mögliche Ausnahmen sind separat zu prüfen.
      </p>
      <p>
        Die <a href="#quelle-retention">Dokumentation zu Datenaufbewahrung</a> unterscheidet Produkte,
        Funktionen und Bereitstellungswege. Eine Vereinbarung zur Zero Data Retention bei einem API-Einsatz
        darf nicht ungeprüft auf einen Claude-Chat oder sämtliche Zusatzfunktionen übertragen werden.
        Ich würde vor der Freigabe die tatsächlich genutzte Variante, Löschregeln und Ausnahmen dokumentieren.
      </p>
      <h3>Meine Prüfliste für die Einrichtung</h3>
      <ol>
        <li><strong>Zweck und Rechtsgrundlage.</strong> Welche Aufgabe soll unterstützt werden und welche personenbezogenen Daten sind dafür erforderlich? Ohne geklärte Zulässigkeit werden diese Daten nicht eingebunden.</li>
        <li><strong>Verträge und Verarbeitung.</strong> Die anwendbaren Bedingungen und das <a href="#quelle-vertraege">Data Processing Addendum</a> prüfen. Verarbeitungsorte, Unterauftragnehmer und gegebenenfalls Drittlandtransfers gesondert bewerten.</li>
        <li><strong>Datenminimierung.</strong> Unnötige Kundendaten, interne Geheimnisse und besonders sensible Inhalte aus dem Pilotbestand entfernen. Pseudonymisierung kann helfen, ersetzt aber nicht automatisch die rechtliche Prüfung.</li>
        <li><strong>Zugriffsrechte.</strong> Nutzergruppen, Projektfreigaben und einzelne Quellen prüfen. Ein Assistent darf keine Informationen für Personen offenlegen, die sie im freigegebenen Ablauf nicht erhalten sollen.</li>
        <li><strong>Anbindungen.</strong> Nur benötigte Datenquellen aktivieren. Prüfen, was bei einem Rechteentzug passiert und ob bereits übernommene Inhalte weiterhin im Projekt oder in einem Suchindex liegen.</li>
        <li><strong>Betrieb und Nachweise.</strong> Aufbewahrung, Löschung, Zuständigkeiten und den Umgang mit Fehlern festlegen. Erforderliche Datenschutzinformationen und Dokumentation aktualisieren; die Notwendigkeit einer Datenschutz-Folgenabschätzung prüfen lassen.</li>
      </ol>
      <p>
        Ein in Deutschland gehostetes Frontend sagt nichts darüber aus, wo ein angebundener KI-Dienst Daten
        verarbeitet. Auch ein Auftragsverarbeitungsvertrag allein beantwortet nicht alle diese Fragen.
        Wenn der geplante Datenzugriff nicht zu Ihren Anforderungen passt, muss der Umfang reduziert oder
        eine andere technische Lösung geprüft werden.
      </p>

      <h2 id="pilot" className="headline-dot scroll-mt-24">Einen begrenzten Pilot mit überprüfbaren Antworten aufsetzen</h2>
      <p>
        Ich würde mit einer freigegebenen Wissenssammlung und einer klaren Aufgabe starten. Vorher legt das
        Unternehmen fest, wer die Ergebnisse bewertet und welche Fehler einen Rollout verhindern.
        Die Testfragen sollten typische Anfragen, mehrdeutige Fragen und Fälle ohne passende Quelle enthalten.
        So prüfen Sie auch, ob der Assistent fehlendes Wissen tatsächlich offenlegt.
      </p>
      <h3>Eine Arbeitsanweisung für das Pilotteam</h3>
      <blockquote>
        Bereiten Sie einen Antwortentwurf für den Kundenservice vor. Verwenden Sie ausschließlich die
        freigegebenen Unterlagen dieses Arbeitsbereichs. Nennen Sie für jede fachliche Aussage das Dokument
        und die passende Fundstelle. Kennzeichnen Sie fehlende oder widersprüchliche Informationen.
        Erfinden Sie keine Preise, Termine oder Leistungszusagen. Geben Sie die Antwort als Entwurf zur
        Prüfung durch einen Mitarbeiter aus.
      </blockquote>
      <p>
        Diese Anweisung ist ein vorgeschlagenes Arbeitsmittel. Sie garantiert keine korrekten Antworten und
        ersetzt weder die Prüfung noch eine technische Zugriffskontrolle. Eine Regel im Prompt kann keine
        versehentlich freigegebene Personalakte schützen.
      </p>
      <h3>Was ich ausdrücklich testen würde</h3>
      <ul>
        <li>Ist die fachliche Antwort korrekt und durch die genannte Quelle gedeckt?</li>
        <li>Wird bei fehlenden Informationen eine Rückfrage oder Übergabe vorgeschlagen?</li>
        <li>Werden widersprüchliche Dokumentversionen erkennbar gemacht?</li>
        <li>Bleiben Informationen außerhalb der freigegebenen Nutzergruppe unzugänglich?</li>
        <li>Funktioniert das Entfernen oder Aktualisieren einer Quelle im vorgesehenen Ablauf?</li>
        <li>Werden unerwünschte Anweisungen in Dokumenten als fremder Inhalt behandelt?</li>
      </ul>
      <p>
        Der letzte Punkt betrifft Prompt Injection: Inhalte aus Dateien oder angebundenen Quellen können
        Anweisungen enthalten, die den Assistenten vom vorgesehenen Auftrag abbringen. Als Vorsichtsmaßnahme
        würde ich die Quellen begrenzen, zunächst keine Schreibaktionen erlauben und kritische Ergebnisse
        durch Menschen freigeben lassen. Eine vollständige Abwehr lässt sich daraus nicht zusagen.
      </p>

      <h2 id="schulung" className="headline-dot scroll-mt-24">Vor-Ort-Schulung an den tatsächlichen Aufgaben des Teams</h2>
      <p>
        Bei sandhoff.digital bieten wir die Einführung und Schulung persönlich vor Ort an. Wir sind ein
        inhabergeführtes Familienunternehmen im Raum Bonn. Für einen Claude-Pilot würde ich die Schulung
        mit den Aufgaben verbinden, die Ihr Team anschließend selbst bearbeiten soll. Die Mitarbeiter
        müssen wissen, welche Quellen verwendet werden, was eingegeben werden darf und wo sie eine
        Antwort eigenständig überprüfen können.
      </p>
      <ol>
        <li><strong>Einsatzgrenzen erklären.</strong> Zulässige Daten, freigegebene Zwecke und untersagte Nutzung verständlich festhalten.</li>
        <li><strong>Eine echte Aufgabe gemeinsam bearbeiten.</strong> Mit freigegebenen oder anonymisierten Unterlagen einen Entwurf erzeugen und dessen Belege prüfen.</li>
        <li><strong>Fehler erkennen üben.</strong> Einen unbelegten Antwortteil, eine veraltete Quelle und eine unvollständige Anfrage gemeinsam bewerten.</li>
        <li><strong>Übergaben festlegen.</strong> Bestimmen, wann ein Mitarbeiter, die Fachabteilung oder die zuständige Datenschutzperson übernehmen muss.</li>
        <li><strong>Verantwortliche einweisen.</strong> Quellenpflege, Nutzerfreigaben und das Melden von Problemen an benannte Personen übergeben.</li>
      </ol>
      <p>
        <a href="#quelle-aiact">Artikel 4 der europäischen KI-Verordnung</a> verlangt von Anbietern und
        Betreibern Maßnahmen für ein ausreichendes Maß an KI-Kompetenz der Personen, die in ihrem Auftrag
        mit KI-Systemen umgehen. Dabei sind unter anderem Kenntnisse, Erfahrung und der Einsatzkontext
        zu berücksichtigen. Ein Schulungstermin oder Zertifikat allein belegt daher nicht automatisch,
        dass sämtliche Anforderungen erfüllt sind.
      </p>
      <p>
        Ich würde Inhalte, Teilnehmer und behandelte Einsatzgrenzen dokumentieren und bei Änderungen erneut
        einweisen. Neue Datenquellen oder zusätzliche Aktionen können andere Risiken mitbringen.
        Schulung und laufende Verantwortung gehören deshalb zur Einführung dazu.
      </p>

      <h2 id="nutzen" className="headline-dot scroll-mt-24">Nutzen und Kosten ehrlich messen</h2>
      <p>
        Die offiziellen Produktbeschreibungen belegen Funktionen. Sie belegen keine bestimmte Ersparnis in
        Ihrem Betrieb. Ich würde vor dem Pilot vergleichbare Serviceanfragen ohne Assistent bearbeiten
        lassen und dabei die gesamte Bearbeitungszeit erfassen. Im Pilot zählen Eingabe, Wartezeit,
        Quellenprüfung und Korrekturen zur neuen Bearbeitungszeit dazu.
      </p>
      <ul>
        <li><strong>Zeit:</strong> gesamte Bearbeitungszeit pro vergleichbarer Anfrage, einschließlich Prüfung.</li>
        <li><strong>Qualität:</strong> fachlich korrekte Antworten und zutreffende Quellenbelege.</li>
        <li><strong>Nacharbeit:</strong> überarbeitungsbedürftige Entwürfe und notwendige Eskalationen.</li>
        <li><strong>Betrieb:</strong> Aufwand für Quellenpflege, Betreuung, Schulung und Fehlerbehebung.</li>
      </ul>
      <p>
        Für eine erste Wirtschaftlichkeitsrechnung kann das Unternehmen die gemessene Zeitdifferenz mit
        der Zahl vergleichbarer Anfragen und einem eigenen internen Stundensatz bewerten. Davon müssen
        die laufenden Kosten abgezogen werden. Einmalige Einrichtungskosten und Schulungen sind zusätzlich
        über einen festgelegten Betrachtungszeitraum zu berücksichtigen. Ohne diese eigenen Messwerte
        nenne ich keine Euro-Ersparnis.
      </p>
      <p>
        Frei werdende Arbeitszeit ist zudem nicht automatisch eine geringere Personalausgabe. Sie kann
        zum Beispiel für komplexere Anfragen genutzt werden. Eine echte Kostensenkung entsteht erst,
        wenn sich die Ausgaben tatsächlich verändern. Diese Unterscheidung halte ich für wichtig,
        damit eine Einführung kaufmännisch nachvollziehbar bleibt.
      </p>

      <h2 className="headline-dot">Wann ich den Einsatz zunächst begrenzen würde</h2>
      <p>
        Wenn die Unterlagen widersprüchlich sind, Zugriffsrechte ungeklärt bleiben oder niemand Antworten
        prüfen kann, würde ich den Wissensassistenten noch nicht breit freigeben. Gleiches gilt, wenn
        das Team eine verbindliche rechtliche Beurteilung, sichere Preisentscheidung oder selbstständige
        Auftragsfreigabe erwartet. Ein gut formulierter Entwurf genügt dafür nicht.
      </p>
      <p>
        Mein Vorschlag ist ein abgegrenzter Einstieg: eine wiederkehrende Aufgabe, ein gepflegter
        Quellenbestand, geklärte Datenverarbeitung und ein geschultes Pilotteam. Erst nach den Tests
        entscheidet Ihr Unternehmen über die Erweiterung. So wird der Nutzen überprüfbar und die
        Verantwortung bleibt nachvollziehbar.
      </p>
      <p>
        Für eine spätere Anbindung an Angebote, Aufträge oder interne Abläufe kann eine
        <Link to="/leistungen/individualsoftware">eigene Betriebsplattform</Link> infrage kommen.
        Einen breiteren Überblick bietet unser Ratgeber zur
        <Link to="/ratgeber/chatgpt-fuer-unternehmen-einfuehren"> Einführung von KI-Assistenten im Unternehmen</Link>.
      </p>
      <div className="border-y border-line py-6">
        <p className="font-semibold">Claude-Einführung und Schulung vor Ort besprechen</p>
        <p>Wenn Sie einen konkreten Serviceprozess prüfen möchten, besprechen wir die Aufgabe, Ihre Datenquellen und die Anforderungen an Einrichtung und Schulung.</p>
        <Button asChild className="mt-4 h-auto min-h-11 whitespace-normal text-center">
          <Link to="/kontakt">Claude-Einführung anfragen</Link>
        </Button>
      </div>

      <h2 id="quellen" className="headline-dot scroll-mt-24">Offizielle Quellen und Einordnung</h2>
      <p>
        Geprüft am 8. November 2026. Die Quellen belegen die beschriebenen Produktgrundlagen und rechtlichen
        Prüfthemen. Pilotablauf, Arbeitsanweisung und Messvorgehen sind meine Empfehlungen. Ältere offizielle
        Veröffentlichungen werden für ihre Grundlagen herangezogen. Funktionen, Verträge und Aufbewahrungsregeln
        sind vor einer Einführung erneut für das gewählte Produkt zu prüfen. Dieser Artikel ersetzt keine Rechtsberatung.
      </p>
      <ol>
        {sources.map((source) => (
          <li key={source.id} id={source.id} className="scroll-mt-24">
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
          </li>
        ))}
      </ol>
    </ArticleLayout>
  );
}