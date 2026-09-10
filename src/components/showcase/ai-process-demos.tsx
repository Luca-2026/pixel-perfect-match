"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  AlertTriangle,
  Check,
  Clock3,
  Cpu,
  FileSearch,
  Loader2,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Container, Eyebrow, HeadlineDot, Section } from "@/components/layout/primitives";
import {
  SAMPLE_CONTRACTS,
  analyzeSampleContract,
  draftSampleQuote,
  type SampleContractKey,
} from "@/lib/ai-demo.functions";

type JobKey = "wartung" | "thermostat" | "heizkoerper";

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

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
const number = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 });

type Meta = { model: string; ms: number; tokens: number | null };

export function AiProcessDemos() {
  return (
    <>
      <QuoteDemo />
      <ContractDemo />
      <SavingsCalculator />
    </>
  );
}

/* --------------------------------------------------------------- Bausteine */

function LiveBadge({ running }: { running: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-petrol">
      <span className={`h-2 w-2 rounded-full ${running ? "animate-pulse bg-amber" : "bg-petrol"}`} aria-hidden />
      {running ? "Modell arbeitet" : "Live-Modell"}
    </span>
  );
}

function MetaLine({ meta }: { meta: Meta }) {
  return (
    <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line/60 pt-4 text-xs text-ink/55">
      <span className="inline-flex items-center gap-1.5">
        <Cpu className="h-3.5 w-3.5 text-petrol" aria-hidden /> {meta.model}
      </span>
      <span>Antwortzeit {(meta.ms / 1000).toFixed(1)} Sekunden</span>
      {meta.tokens ? <span>{meta.tokens} Tokens</span> : null}
      <span>Ergebnis in Echtzeit erzeugt</span>
    </p>
  );
}

function useSteps(labels: string[], running: boolean) {
  const [active, setActive] = useState(-1);
  useEffect(() => {
    if (!running) return;
    setActive(0);
    const timers = labels.map((_, index) =>
      window.setTimeout(() => setActive(index), index * 900),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [running, labels.length]);
  return active;
}

function StepList({ labels, active, done }: { labels: string[]; active: number; done: boolean }) {
  return (
    <ol className="space-y-3 text-sm">
      {labels.map((label, index) => {
        const complete = done || index < active;
        const current = !done && index === active;
        return (
          <li key={label} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                complete ? "border-petrol bg-petrol text-paper" : current ? "border-amber" : "border-line"
              }`}
              aria-hidden
            >
              {complete ? <Check className="h-3 w-3" /> : current ? <Loader2 className="h-3 w-3 animate-spin text-amber" /> : null}
            </span>
            <span className={complete || current ? "text-ink" : "text-ink/45"}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}

/* ----------------------------------------------------------------- Angebot */

type QuoteResult = {
  title: string;
  intro: string;
  positions: { position: string; description: string; quantity: string; unit: string }[];
  notes: string[];
};

const quoteSteps = [
  "Anfrage wird gelesen und strukturiert",
  "Leistungen werden gegen die Stammdaten gematcht",
  "Freigegebene Preisregeln werden angewendet",
  "Angebotstext wird formuliert",
];

function QuoteDemo() {
  const runQuote = useServerFn(draftSampleQuote);
  const [job, setJob] = useState<JobKey>("wartung");
  const [units, setUnits] = useState(1);
  const [urgent, setUrgent] = useState(false);
  const [note, setNote] = useState("");
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<{ data: QuoteResult; meta: Meta } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const step = useSteps(quoteSteps, running);

  const selected = jobs[job];
  const laborRate = 68;
  const travel = 35;
  const urgency = urgent ? 45 : 0;
  const material = selected.baseMaterial * units;
  const labor = selected.hours * units * laborRate;
  const net = material + labor + travel + urgency;
  const vat = net * 0.19;

  function reset() {
    setResult(null);
    setError(null);
  }

  async function createQuote() {
    reset();
    setRunning(true);
    try {
      const response = await runQuote({ data: { job, units, urgent, note } });
      setResult(response as { data: QuoteResult; meta: Meta });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Die Erzeugung ist fehlgeschlagen.");
    } finally {
      setRunning(false);
    }
  }

  return (
    <Section tone="paper" className="border-t border-line" id="interaktive-beispiele">
      <Container className="max-w-6xl">
        <div className="max-w-3xl">
          <Eyebrow>Live-Demo 01</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">
            SHK Angebot in Echtzeit erzeugen
          </HeadlineDot>
          <p className="mt-5 text-lg text-ink/75">
            Konfigurieren Sie einen typischen Auftrag. Der Entwurf wird bei jedem
            Klick wirklich neu erzeugt: Ein Sprachmodell formuliert die Positionen,
            die Preise kommen aus festen Kalkulationsregeln.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <div className="surface-card min-w-0 p-6 sm:p-8">
            <div className="grid gap-2 sm:grid-cols-3">
              {(Object.entries(jobs) as [JobKey, (typeof jobs)[JobKey]][]).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => { setJob(key); reset(); }}
                  aria-pressed={job === key}
                  className={`min-h-12 cursor-pointer rounded-[var(--radius-sm)] border px-3 py-2 text-sm ${
                    job === key ? "border-petrol bg-mint text-ink" : "border-line bg-paper text-ink/65"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-7">
              <label htmlFor="units" className="text-sm font-semibold text-ink">Anzahl Einheiten</label>
              <div className="mt-3 flex items-center gap-4">
                <Slider id="units" min={1} max={6} step={1} value={[units]} onValueChange={([value]) => { setUnits(value ?? 1); reset(); }} aria-label="Anzahl Einheiten" />
                <output className="metric min-w-10 text-right text-lg">{units}</output>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { setUrgent((value) => !value); reset(); }}
              className="mt-6 flex min-h-12 w-full cursor-pointer items-center justify-between rounded-[var(--radius-sm)] border border-line bg-paper px-4 text-left text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-pressed={urgent}
            >
              Dringender Termin
              <span className={`flex h-6 w-6 items-center justify-center rounded-full border ${urgent ? "border-petrol bg-petrol text-paper" : "border-line"}`}>
                {urgent && <Check className="h-4 w-4" aria-hidden />}
              </span>
            </button>

            <label className="mt-6 block">
              <span className="text-sm font-semibold text-ink">Kundenhinweis (optional)</span>
              <textarea
                value={note}
                onChange={(event) => { setNote(event.target.value.slice(0, 300)); reset(); }}
                rows={3}
                placeholder="Zum Beispiel: Anlage im Dachgeschoss, Zugang nur vormittags."
                className="mt-2 w-full rounded-[var(--radius-sm)] border border-line bg-paper p-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>

            <Button type="button" size="lg" onClick={createQuote} disabled={running} className="mt-6 w-full">
              {running ? <Loader2 className="animate-spin" aria-hidden /> : <Sparkles aria-hidden />}
              {running ? "Entwurf wird erzeugt" : "Angebotsentwurf live erzeugen"}
            </Button>

            <div className="mt-7 border-t border-line pt-6">
              <StepList labels={quoteSteps} active={step} done={Boolean(result)} />
            </div>
          </div>

          <div className="min-w-0 rounded-[var(--radius)] border border-line bg-paper p-5 shadow-sm sm:p-8" aria-live="polite">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-5">
              <div>
                <p className="eyebrow">Angebotsentwurf, intern</p>
                <p className="mt-2 font-display text-xl text-ink">Muster SHK Betrieb, Raum Bonn</p>
                <p className="mt-1 text-sm text-ink/55">Kunde: Beispiel Hausverwaltung GmbH</p>
              </div>
              <LiveBadge running={running} />
            </div>

            {error ? (
              <p className="mt-6 text-sm text-ink/70">{error}</p>
            ) : !result ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center text-ink/55">
                {running ? (
                  <>
                    <Loader2 className="h-8 w-8 animate-spin text-amber" aria-hidden />
                    <p className="mt-4 max-w-64">Das Modell formuliert gerade Ihren Entwurf.</p>
                  </>
                ) : (
                  <>
                    <FileSearch className="h-8 w-8 text-amber" aria-hidden />
                    <p className="mt-4 max-w-64">Konfiguration wählen und Entwurf erzeugen.</p>
                  </>
                )}
              </div>
            ) : (
              <div className="animate-fade-in">
                <h3 className="mt-6 font-display text-2xl text-ink">{result.data.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{result.data.intro}</p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[26rem] text-left text-sm">
                    <thead>
                      <tr className="border-b border-line text-xs uppercase tracking-wide text-ink/55">
                        <th className="py-2 pr-3 font-semibold">Position</th>
                        <th className="py-2 pr-3 font-semibold">Menge</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.data.positions.map((position, index) => (
                        <tr key={`${position.position}-${index}`} className="border-b border-line/60 align-top">
                          <td className="py-3 pr-3">
                            <span className="font-semibold text-ink">{position.position}</span>
                            <span className="mt-1 block text-ink/65">{position.description}</span>
                          </td>
                          <td className="whitespace-nowrap py-3 pr-3 text-ink/70">
                            {position.quantity} {position.unit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <dl className="mt-6 space-y-2 rounded-[var(--radius-sm)] bg-mint p-5 text-sm">
                  <QuoteLine label={`Material × ${units}`} value={material} />
                  <QuoteLine label={`${number.format(selected.hours * units)} Arbeitsstunden × ${euro.format(laborRate)}`} value={labor} />
                  <QuoteLine label="Anfahrt" value={travel} />
                  {urgent && <QuoteLine label="Dringlichkeitszuschlag" value={urgency} />}
                  <div className="flex justify-between border-t border-line pt-2 font-semibold text-ink">
                    <dt>Summe netto</dt><dd>{euro.format(net)}</dd>
                  </div>
                  <div className="flex justify-between text-ink/65">
                    <dt>zzgl. 19 Prozent Umsatzsteuer</dt><dd>{euro.format(vat)}</dd>
                  </div>
                  <div className="flex justify-between border-t border-line pt-2 font-display text-lg text-ink">
                    <dt>Gesamt brutto</dt><dd>{euro.format(net + vat)}</dd>
                  </div>
                </dl>

                {result.data.notes.length > 0 && (
                  <ul className="mt-5 space-y-2 text-sm text-ink/65">
                    {result.data.notes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-5 flex items-start gap-2 text-xs text-ink/55">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden />
                  Preise stammen aus festen Kalkulationsregeln dieser Demo und sind fiktiv.
                  Vor Versand prüft ein verantwortlicher Mensch Umfang, Preis und Sonderfälle.
                </p>
                <MetaLine meta={result.meta} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function QuoteLine({ label, value }: { label: string; value: number }) {
  return <div className="flex justify-between gap-4"><dt className="text-ink/70">{label}</dt><dd className="font-medium text-ink">{euro.format(value)}</dd></div>;
}

/* ------------------------------------------------------------ Vertrag */

type Finding = {
  category: string;
  title: string;
  quote: string;
  clause: string;
  detail: string;
  risk: "hoch" | "mittel" | "niedrig";
};

const contractSteps = [
  "Dokument wird gelesen und in Abschnitte zerlegt",
  "Relevante Klauseln werden gesucht",
  "Fristen, Pflichten und Risiken werden extrahiert",
  "Fundstellen werden mit dem Originaltext belegt",
];

function ContractDemo() {
  const runAnalysis = useServerFn(analyzeSampleContract);
  const [contract, setContract] = useState<SampleContractKey>("wartung");
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<{ data: { summary: string; findings: Finding[] }; meta: Meta } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeQuote, setActiveQuote] = useState<string | null>(null);
  const docRef = useRef<HTMLDivElement>(null);
  const step = useSteps(contractSteps, running);
  const sample = SAMPLE_CONTRACTS[contract];

  const highlighted = useMemo(() => {
    if (!result) return [{ text: sample.text, quote: null as string | null }];
    const quotes = result.data.findings
      .map((finding) => finding.quote.trim())
      .filter((quote) => quote.length > 12 && sample.text.includes(quote))
      .sort((a, b) => sample.text.indexOf(a) - sample.text.indexOf(b));
    const parts: { text: string; quote: string | null }[] = [];
    let cursor = 0;
    for (const quote of quotes) {
      const index = sample.text.indexOf(quote, cursor);
      if (index < 0) continue;
      if (index > cursor) parts.push({ text: sample.text.slice(cursor, index), quote: null });
      parts.push({ text: quote, quote });
      cursor = index + quote.length;
    }
    parts.push({ text: sample.text.slice(cursor), quote: null });
    return parts;
  }, [result, sample.text]);

  async function analyze() {
    setResult(null);
    setError(null);
    setActiveQuote(null);
    setRunning(true);
    try {
      const response = await runAnalysis({ data: { contract } });
      setResult(response as { data: { summary: string; findings: Finding[] }; meta: Meta });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Die Analyse ist fehlgeschlagen.");
    } finally {
      setRunning(false);
    }
  }

  function focusQuote(quote: string) {
    setActiveQuote(quote);
    const target = docRef.current?.querySelector<HTMLElement>(`[data-quote="${CSS.escape(quote)}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <Section tone="mint" className="border-y border-line">
      <Container className="max-w-6xl">
        <div className="max-w-3xl">
          <Eyebrow>Live-Demo 02</Eyebrow>
          <HeadlineDot as="h2" className="mt-3">Vertragsanalyse mit belegten Fundstellen</HeadlineDot>
          <p className="mt-5 text-lg text-ink/75">
            Wählen Sie einen fiktiven Mustervertrag. Die Analyse läuft wirklich
            gegen ein Sprachmodell und markiert jede Aussage im Originaltext,
            damit Sie das Ergebnis nachprüfen können.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="surface-card min-w-0 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <label htmlFor="contract" className="text-sm font-semibold text-ink">Mustervertrag</label>
              <LiveBadge running={running} />
            </div>
            <select
              id="contract"
              value={contract}
              onChange={(event) => { setContract(event.target.value as SampleContractKey); setResult(null); setError(null); }}
              className="mt-3 min-h-12 w-full rounded-[var(--radius-sm)] border border-line bg-paper px-4 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {(Object.entries(SAMPLE_CONTRACTS) as [SampleContractKey, (typeof SAMPLE_CONTRACTS)[SampleContractKey]][]).map(([key, item]) => (
                <option key={key} value={key}>{item.label}</option>
              ))}
            </select>
            <p className="mt-3 text-sm text-ink/55">Fiktiver Vertragspartner: {sample.partner}</p>

            <div
              ref={docRef}
              className="mt-5 max-h-96 overflow-y-auto rounded-[var(--radius-sm)] border border-line bg-paper p-5 font-mono text-[0.8rem] leading-6 text-ink/80"
            >
              {highlighted.map((part, index) =>
                part.quote ? (
                  <mark
                    key={index}
                    data-quote={part.quote}
                    className={`rounded px-0.5 ${activeQuote === part.quote ? "bg-amber/70 text-ink" : "bg-amber/25 text-ink"}`}
                  >
                    {part.text}
                  </mark>
                ) : (
                  <span key={index} className="whitespace-pre-wrap">{part.text}</span>
                ),
              )}
            </div>

            <Button type="button" size="lg" onClick={analyze} disabled={running} className="mt-6 w-full">
              {running ? <Loader2 className="animate-spin" aria-hidden /> : <FileSearch aria-hidden />}
              {running ? "Analyse läuft" : "Vertrag jetzt analysieren"}
            </Button>

            <div className="mt-7 border-t border-line pt-6">
              <StepList labels={contractSteps} active={step} done={Boolean(result)} />
            </div>
          </div>

          <div className="min-w-0 rounded-[var(--radius)] bg-ink p-6 text-paper sm:p-8" aria-live="polite">
            <p className="eyebrow text-amber">Ergebnis der Analyse</p>
            {error ? (
              <p className="mt-6 text-sm text-paper/70">{error}</p>
            ) : !result ? (
              <div className="flex min-h-80 items-center justify-center text-center text-paper/55">
                <p className="max-w-64">
                  {running ? "Das Modell liest gerade den vollständigen Vertragstext." : "Starten Sie die Analyse des ausgewählten Mustertexts."}
                </p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <p className="mt-3 text-lg leading-8 text-paper/85">{result.data.summary}</p>
                <div className="mt-7 space-y-2">
                  {result.data.findings.map((finding) => (
                    <button
                      key={finding.title}
                      type="button"
                      onClick={() => focusQuote(finding.quote)}
                      className={`w-full cursor-pointer rounded-[var(--radius-sm)] border p-4 text-left transition-colors ${
                        activeQuote === finding.quote ? "border-amber bg-paper/10" : "border-paper/15 hover:bg-paper/5"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                        <span className="text-amber">{finding.category}</span>
                        <span className="text-paper/45">{finding.clause}</span>
                        <span className={`ml-auto rounded-full px-2 py-0.5 ${
                          finding.risk === "hoch" ? "bg-amber text-ink" : finding.risk === "mittel" ? "bg-paper/20 text-paper" : "bg-paper/10 text-paper/70"
                        }`}>
                          Risiko {finding.risk}
                        </span>
                      </div>
                      <p className="mt-2 font-display text-lg text-paper">{finding.title}</p>
                      <p className="mt-2 text-sm text-paper/65">{finding.detail}</p>
                      <p className="mt-3 border-l-2 border-amber pl-3 text-xs italic text-paper/55">„{finding.quote}“</p>
                    </button>
                  ))}
                </div>
                <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-paper/20 pt-4 text-xs text-paper/50">
                  <span className="inline-flex items-center gap-1.5"><Cpu className="h-3.5 w-3.5 text-amber" aria-hidden /> {result.meta.model}</span>
                  <span>Antwortzeit {(result.meta.ms / 1000).toFixed(1)} Sekunden</span>
                  {result.meta.tokens ? <span>{result.meta.tokens} Tokens</span> : null}
                </p>
              </div>
            )}
            <p className="mt-6 flex items-start gap-2 border-t border-paper/20 pt-5 text-xs text-paper/55">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden />
              Die Demo verarbeitet ausschließlich fiktive Mustertexte. Sie unterstützt
              die Sichtung, ersetzt aber keine juristische Prüfung.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { title: "Gesicherte Wissensbasis", body: "Im Echtbetrieb liegen Verträge, Richtlinien und freigegebene Klauseln in einer kontrollierten Datenbasis und werden bei der Anfrage gezielt abgerufen." },
            { title: "Kein blindes Training", body: "Unternehmenswissen bleibt in einer löschbaren Datenbasis statt in Modellgewichten." },
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

/* ------------------------------------------------------------- Rechner */

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
