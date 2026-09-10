"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Check,
  ChevronRight,
  Clock3,
  Database,
  FileSearch,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";

type JobKey = "wartung" | "thermostat" | "heizkoerper";
type ContractKey = "wartung" | "lieferung" | "software";

const jobs = {
  wartung: {
    label: "Heizungswartung",
    description: "Gastherme warten, Messwerte dokumentieren",
    baseMaterial: 32,
    hours: 1.5,
  },
  thermostat: {
    label: "Thermostat tauschen",
    description: "Digitales Thermostat liefern und montieren",
    baseMaterial: 68,
    hours: 1,
  },
  heizkoerper: {
    label: "Heizkörper montieren",
    description: "Standardheizkörper liefern, montieren und prüfen",
    baseMaterial: 295,
    hours: 3.5,
  },
} as const;

const contracts = {
  wartung: {
    label: "Wartungsvertrag",
    partner: "Muster Gebäudetechnik GmbH",
    excerpt:
      "§ 4 Laufzeit und Kündigung: Der Vertrag beginnt am 1. Oktober 2026 und läuft zunächst 24 Monate. Er verlängert sich jeweils um zwölf Monate, wenn er nicht drei Monate vor Ablauf in Textform gekündigt wird. § 7 Haftung: Die Haftung für Vorsatz und grobe Fahrlässigkeit bleibt unberührt.",
    findings: [
      { type: "Frist", title: "Kündigung drei Monate vor Ablauf", source: "§ 4, Satz 3", detail: "Für die Fristenliste vormerken und vor Ablauf intern prüfen." },
      { type: "Laufzeit", title: "24 Monate mit Verlängerung", source: "§ 4, Sätze 1 bis 3", detail: "Automatische Verlängerung um jeweils zwölf Monate erkannt." },
      { type: "Prüfung", title: "Haftungsklausel juristisch prüfen", source: "§ 7, Satz 1", detail: "Die Demo erkennt die Klausel, bewertet aber nicht ihre Rechtswirksamkeit." },
    ],
  },
  lieferung: {
    label: "Liefervertrag",
    partner: "Beispiel Komponenten KG",
    excerpt:
      "§ 3 Lieferung: Die Lieferung erfolgt binnen zehn Werktagen nach Auftragseingang. Bei einer Verzögerung von mehr als fünf Werktagen ist der Auftraggeber schriftlich zu informieren. § 6 Zahlung: Rechnungen sind innerhalb von 14 Kalendertagen ohne Abzug fällig.",
    findings: [
      { type: "Termin", title: "Lieferung binnen zehn Werktagen", source: "§ 3, Satz 1", detail: "Liefertermin als überwachbare Pflicht erkannt." },
      { type: "Pflicht", title: "Informationspflicht bei Verzögerung", source: "§ 3, Satz 2", detail: "Schriftliche Information nach mehr als fünf Werktagen erforderlich." },
      { type: "Zahlung", title: "Zahlungsziel 14 Kalendertage", source: "§ 6, Satz 1", detail: "Zahlungsziel für Buchhaltung und Fristenliste extrahiert." },
    ],
  },
  software: {
    label: "Softwarevertrag",
    partner: "Demo Software Services GmbH",
    excerpt:
      "§ 5 Verfügbarkeit: Die monatliche Verfügbarkeit beträgt 99,5 Prozent. Wartungsfenster werden sieben Kalendertage vorher angekündigt. § 8 Datenschutz: Personenbezogene Daten werden ausschließlich nach dokumentierter Weisung des Auftraggebers verarbeitet.",
    findings: [
      { type: "Leistung", title: "99,5 Prozent Verfügbarkeit", source: "§ 5, Satz 1", detail: "Servicewert erkannt, aber noch ohne Regelung zur Messmethode." },
      { type: "Hinweis", title: "Ankündigung sieben Tage vorher", source: "§ 5, Satz 2", detail: "Wartungsfenster als terminrelevante Information erkannt." },
      { type: "Datenschutz", title: "Verarbeitung nach Weisung", source: "§ 8, Satz 1", detail: "Datenschutzklausel gefunden. Auftragsverarbeitung gesondert prüfen." },
    ],
  },
} as const;

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
const number = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 });

export function AiProcessDemos() {
  return (
    <>
      <QuoteDemo />
      <ContractDemo />
      <SavingsCalculator />
    </>
  );
}

function QuoteDemo() {
  const [job, setJob] = useState<JobKey>("wartung");
  const [units, setUnits] = useState(1);
  const [urgent, setUrgent] = useState(false);
  const [generated, setGenerated] = useState(false);
  const selected = jobs[job];
  const laborRate = 68;
  const travel = 35;
  const urgency = urgent ? 45 : 0;
  const material = selected.baseMaterial * units;
  const labor = selected.hours * units * laborRate;
  const net = material + labor + travel + urgency;

  function createQuote() {
    setGenerated(false);
    window.setTimeout(() => setGenerated(true), 450);
  }

  return (
    <Section tone="paper" className="border-t border-line" id="interaktive-beispiele">
      <Container className="max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div>
            <Eyebrow>Interaktive Demonstration 01</Eyebrow>
            <HeadlineDot as="h2" className="mt-3">
              SHK Angebot selbst erzeugen
            </HeadlineDot>
            <p className="mt-5 text-lg text-ink/75">
              Wählen Sie einen typischen Auftrag. Die Demo zeigt, wie feste
              Leistungsdaten, Mengen und Preisregeln zu einem prüfbaren Entwurf
              zusammengeführt werden.
            </p>
            <div className="mt-7 border-l-2 border-amber pl-5 text-sm text-ink/65">
              Alle Leistungen und Preise sind fiktive Musterdaten. Rund 30 Sekunden
              beschreiben einen technisch vorbereiteten Ablauf, keine Garantie für
              jeden individuellen Auftrag.
            </div>
          </div>

          <div className="surface-card min-w-0 overflow-hidden">
            <div className="grid border-b border-line sm:grid-cols-3">
              {(Object.entries(jobs) as [JobKey, (typeof jobs)[JobKey]][]).map(([key, item]) => (
                <Button
                  key={key}
                  type="button"
                  variant="ghost"
                  onClick={() => { setJob(key); setGenerated(false); }}
                  aria-pressed={job === key}
                  className={`min-h-14 h-auto whitespace-normal rounded-none border-b border-line px-4 py-3 text-left sm:border-b-0 sm:border-r ${job === key ? "bg-mint text-ink" : "bg-paper text-ink/65"}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="units" className="text-sm font-semibold text-ink">Anzahl Einheiten</label>
                <div className="mt-3 flex items-center gap-4">
                  <Slider id="units" min={1} max={6} step={1} value={[units]} onValueChange={([value]) => { setUnits(value ?? 1); setGenerated(false); }} aria-label="Anzahl Einheiten" />
                  <output className="metric min-w-10 text-right text-lg">{units}</output>
                </div>
                <button
                  type="button"
                  onClick={() => { setUrgent((value) => !value); setGenerated(false); }}
                  className="mt-7 flex min-h-12 w-full cursor-pointer items-center justify-between rounded-[var(--radius-sm)] border border-line bg-paper px-4 text-left text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-pressed={urgent}
                >
                  Dringender Termin
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full border ${urgent ? "border-petrol bg-petrol text-paper" : "border-line"}`}>
                    {urgent && <Check className="h-4 w-4" aria-hidden />}
                  </span>
                </button>
                <div className="mt-6 space-y-2 text-sm text-ink/65">
                  <p><strong className="text-ink">Leistung:</strong> {selected.description}</p>
                  <p><strong className="text-ink">Logik:</strong> Material × Menge, Arbeitszeit × Menge, Anfahrt, optional Dringlichkeit</p>
                </div>
                <Button type="button" size="lg" onClick={createQuote} className="mt-7 w-full">
                  <Sparkles aria-hidden />
                  Angebotsentwurf erzeugen
                </Button>
              </div>

              <div className="min-w-0 rounded-[var(--radius-sm)] bg-mint p-5" aria-live="polite">
                {!generated ? (
                  <div className="flex min-h-72 flex-col items-center justify-center text-center text-ink/55">
                    <FileSearch className="h-8 w-8 text-amber" aria-hidden />
                    <p className="mt-4 max-w-56">Konfiguration wählen und Entwurf erzeugen.</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="eyebrow">Angebotsentwurf</p>
                        <h3 className="mt-2 text-xl">{selected.label}</h3>
                      </div>
                      <span className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-petrol">prüfbereit</span>
                    </div>
                    <dl className="mt-6 space-y-3 text-sm">
                      <QuoteLine label={`Material × ${units}`} value={material} />
                      <QuoteLine label={`${number.format(selected.hours * units)} Arbeitsstunden`} value={labor} />
                      <QuoteLine label="Anfahrt" value={travel} />
                      {urgent && <QuoteLine label="Dringlichkeit" value={urgency} />}
                      <div className="flex justify-between border-t border-line pt-3 font-semibold text-ink">
                        <dt>Summe netto</dt><dd>{euro.format(net)}</dd>
                      </div>
                    </dl>
                    <p className="mt-5 flex items-start gap-2 text-xs text-ink/55">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden />
                      Vor Versand prüft ein verantwortlicher Mensch Leistungsumfang, Preis und Sonderfälle.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function QuoteLine({ label, value }: { label: string; value: number }) {
  return <div className="flex justify-between gap-4"><dt>{label}</dt><dd className="font-medium text-ink">{euro.format(value)}</dd></div>;
}

function ContractDemo() {
  const [contract, setContract] = useState<ContractKey>("wartung");
  const [analyzed, setAnalyzed] = useState(false);
  const selected = contracts[contract];

  return (
    <Section tone="mint" className="border-y border-line">
      <Container className="max-w-6xl">
        <div className="max-w-3xl">
          <Eyebrow>Interaktive Demonstration 02</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">Unternehmensinterne Vertragsanalyse</HeadlineDot>
          <p className="mt-5 text-lg text-ink/75">
            Wählen Sie einen fiktiven Mustervertrag. Die Analyse zeigt Fristen,
            Pflichten und prüfbedürftige Stellen mit direktem Verweis auf den Text.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="surface-card min-w-0 p-6 sm:p-8">
            <label htmlFor="contract" className="text-sm font-semibold text-ink">Mustervertrag auswählen</label>
            <select
              id="contract"
              value={contract}
              onChange={(event) => { setContract(event.target.value as ContractKey); setAnalyzed(false); }}
              className="mt-3 min-h-12 w-full rounded-[var(--radius-sm)] border border-line bg-paper px-4 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {(Object.entries(contracts) as [ContractKey, (typeof contracts)[ContractKey]][]).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}
            </select>
            <div className="mt-6 rounded-[var(--radius-sm)] border border-line bg-paper p-5">
              <p className="eyebrow">Fiktiver Vertragspartner</p>
              <p className="mt-2 font-semibold text-ink">{selected.partner}</p>
              <p className="mt-4 text-sm leading-7 text-ink/70">{selected.excerpt}</p>
            </div>
            <Button type="button" size="lg" onClick={() => setAnalyzed(true)} className="mt-6 w-full">
              <FileSearch aria-hidden />
              Muster analysieren
            </Button>
          </div>

          <div className="min-w-0 rounded-[var(--radius)] bg-ink p-6 text-paper sm:p-8" aria-live="polite">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-amber">KI Analyse</p>
                <h3 className="mt-3 text-2xl text-paper">Erkannte Punkte</h3>
              </div>
              <Database className="h-6 w-6 text-amber" aria-hidden />
            </div>
            {!analyzed ? (
              <div className="flex min-h-72 items-center justify-center text-center text-paper/55">
                <p className="max-w-64">Starten Sie die Analyse des ausgewählten Mustertexts.</p>
              </div>
            ) : (
              <div className="mt-7 space-y-3">
                {selected.findings.map((finding) => (
                  <article key={finding.title} className="border-t border-paper/20 py-4 first:border-t-0 first:pt-0">
                    <div className="flex items-start gap-3">
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-amber" aria-hidden />
                      <div>
                        <p className="text-xs font-semibold uppercase text-amber">{finding.type} · {finding.source}</p>
                        <h4 className="mt-1 font-display text-lg text-paper">{finding.title}</h4>
                        <p className="mt-2 text-sm text-paper/65">{finding.detail}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
            <p className="mt-6 flex items-start gap-2 border-t border-paper/20 pt-5 text-xs text-paper/55">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden />
              Unterstützt die Sichtung, ersetzt aber keine juristische Prüfung und trifft keine rechtsverbindliche Entscheidung.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { title: "Gesicherte Wissensbasis", body: "Verträge, Richtlinien und freigegebene Klauseln werden bei der Anfrage gezielt abgerufen." },
            { title: "Kein blindes Training", body: "Unternehmenswissen bleibt in einer kontrollierbaren und löschbaren Datenbasis statt in Modellgewichten." },
            { title: "Zugriff nach Rolle", body: "Mitarbeitende sehen nur freigegebene Bestände. Ergebnisse bleiben als KI Hinweise erkennbar." },
          ].map((item) => (
            <article key={item.title} className="border-t border-line pt-5">
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/65">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function SavingsCalculator() {
  const [cases, setCases] = useState(80);
  const [manualMinutes, setManualMinutes] = useState(25);
  const [automatedMinutes, setAutomatedMinutes] = useState(5);
  const [hourlyCost, setHourlyCost] = useState(45);
  const result = useMemo(() => {
    const minutes = Math.max(0, manualMinutes - automatedMinutes) * cases;
    const hours = minutes / 60;
    return { hours, monthly: hours * hourlyCost, yearly: hours * hourlyCost * 12 };
  }, [cases, manualMinutes, automatedMinutes, hourlyCost]);

  return (
    <Section tone="paper" className="border-b border-line">
      <Container className="max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div>
            <Eyebrow>Potenzial berechnen</Eyebrow>
            <HeadlineDot as="h2" className="mt-3">Was kostet der manuelle Prozess</HeadlineDot>
            <p className="mt-5 text-lg text-ink/75">
              Verändern Sie die Werte passend zu Ihrem Betrieb. Das Ergebnis zeigt
              das rechnerische Zeitkostenpotenzial vor Einführungs, Betriebs und
              Prüfungskosten.
            </p>
            <div className="mt-7 flex items-start gap-3 border-l-2 border-amber pl-5 text-sm text-ink/65">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden />
              Der voreingestellte Stundensatz von 45 Euro entspricht den
              durchschnittlichen Arbeitgeberkosten je Arbeitsstunde in Deutschland
              für 2025 laut Statistischem Bundesamt, veröffentlicht am 29. April 2026.
            </div>
          </div>

          <div className="surface-card min-w-0 p-6 sm:p-8">
            <div className="grid gap-7 sm:grid-cols-2">
              <NumberField label="Vorgänge pro Monat" value={cases} min={1} max={1000} suffix="" onChange={setCases} />
              <NumberField label="Heutige Minuten je Vorgang" value={manualMinutes} min={1} max={240} suffix="Min." onChange={setManualMinutes} />
              <NumberField label="Minuten nach Automatisierung" value={automatedMinutes} min={0} max={240} suffix="Min." onChange={setAutomatedMinutes} />
              <NumberField label="Arbeitgeberkosten je Stunde" value={hourlyCost} min={1} max={250} suffix="€" onChange={setHourlyCost} />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Result label="Zeit pro Monat" value={`${number.format(result.hours)} Std.`} />
              <Result label="Potenzial pro Monat" value={euro.format(result.monthly)} />
              <Result label="Potenzial pro Jahr" value={euro.format(result.yearly)} emphasis />
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 text-xs text-ink/55 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-xl">
                Formel: Vorgänge × eingesparte Minuten ÷ 60 × Arbeitgeberkosten.
                Keine Einspargarantie. Einführung, Software, laufender Betrieb,
                Fehlerfälle und menschliche Prüfung sind nicht abgezogen.
              </p>
              <button
                type="button"
                onClick={() => { setCases(80); setManualMinutes(25); setAutomatedMinutes(5); setHourlyCost(45); }}
                className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 font-semibold text-petrol focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <RotateCcw className="h-4 w-4" aria-hidden /> Zurücksetzen
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink/55">
          Quelle für den voreingestellten Durchschnittswert: {" "}
          <a href="https://www.destatis.de/DE/Themen/Arbeit/Arbeitskosten-Lohnnebenkosten/_inhalt.html" target="_blank" rel="noreferrer" className="font-semibold text-petrol">
            Statistisches Bundesamt, Arbeitskosten und Lohnnebenkosten
          </a>. Eigene reale Prozesswerte liefern die belastbarere Grundlage für eine Investitionsentscheidung.
        </p>
      </Container>
    </Section>
  );
}

function NumberField({ label, value, min, max, suffix, onChange }: { label: string; value: number; min: number; max: number; suffix: string; onChange: (value: number) => void }) {
  return (
    <label className="block min-w-0">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <span className="mt-2 flex min-h-12 items-center rounded-[var(--radius-sm)] border border-line bg-paper px-4 focus-within:ring-2 focus-within:ring-ring">
        <input type="number" value={value} min={min} max={max} onChange={(event) => onChange(Math.min(max, Math.max(min, Number(event.target.value) || min)))} className="min-w-0 flex-1 bg-transparent text-lg font-semibold text-ink outline-none" />
        <span className="ml-2 text-sm text-ink/55">{suffix}</span>
      </span>
    </label>
  );
}

function Result({ label, value, emphasis = false }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <div className={`min-w-0 rounded-[var(--radius-sm)] p-5 ${emphasis ? "bg-ink text-paper" : "bg-mint text-ink"}`}>
      <p className={`eyebrow ${emphasis ? "text-amber" : ""}`}>{label}</p>
      <p className={`mt-3 break-words font-display text-2xl ${emphasis ? "text-paper" : "text-ink"}`}>{value}</p>
    </div>
  );
}