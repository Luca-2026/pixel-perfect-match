import {
  SAMPLE_CONTRACTS,
  type ContractAnalysis,
  type QuoteDraft,
  type SampleContractKey,
} from "./ai-demo-data";

/**
 * Serverlogik der Live-Demos. Die Modellaufrufe laufen wirklich über das
 * Lovable AI Gateway, verarbeitet werden ausschließlich fiktive Musterdaten.
 */

const MODEL = "google/gemini-2.5-flash";

/* ------------------------------------------------- Missbrauchsschutz */

const WINDOW_MS = 10 * 60 * 1000;
const PER_CLIENT = 8;
const GLOBAL_PER_WINDOW = 150;

const clientHits = new Map<string, number[]>();
let globalHits: number[] = [];

/** Einfaches Zeitfenster-Limit gegen automatisierte Massenaufrufe der Demos. */
export function enforceRateLimit(key: string): void {
  const now = Date.now();
  const since = now - WINDOW_MS;

  globalHits = globalHits.filter((time) => time > since);
  if (globalHits.length >= GLOBAL_PER_WINDOW) {
    throw new Error(
      "Die Live-Demo ist gerade stark ausgelastet. Bitte in einigen Minuten erneut versuchen.",
    );
  }

  const hits = (clientHits.get(key) ?? []).filter((time) => time > since);
  if (hits.length >= PER_CLIENT) {
    throw new Error(
      "Sie haben das Demo-Limit erreicht. In wenigen Minuten ist die Live-Demo wieder nutzbar. Für ein echtes Projekt sprechen Sie uns gerne direkt an.",
    );
  }

  hits.push(now);
  clientHits.set(key, hits);
  globalHits.push(now);

  if (clientHits.size > 500) {
    for (const [entry, times] of clientHits) {
      if (times.every((time) => time <= since)) clientHits.delete(entry);
    }
  }
}

async function callGateway<T>(system: string, user: string, schemaName: string, schema: object) {
  const key = process.env["LOVABLE_API_KEY"];
  if (!key) throw new Error("AI Gateway ist nicht konfiguriert.");
  const started = Date.now();

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: {
        type: "json_schema",
        json_schema: { name: schemaName, strict: true, schema },
      },
    }),
  });

  if (response.status === 429)
    throw new Error("Gerade sind zu viele Anfragen unterwegs. Bitte in einer Minute erneut versuchen.");
  if (response.status === 402) throw new Error("Das Demo-Kontingent ist aufgebraucht.");
  if (!response.ok) throw new Error(`Analyse fehlgeschlagen (${response.status}).`);

  const json = (await response.json()) as { choices?: { message?: { content?: string } }[] };
  const content = json.choices?.[0]?.message?.content ?? "{}";
  // Bewusst ohne Modellname und Tokenverbrauch: die Demo zeigt nur die Antwortzeit.
  return { data: JSON.parse(content) as T, meta: { ms: Date.now() - started } };
}

/* ---------------------------------------------------------------- Vertrag */

const contractSchema = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "findings"],
  properties: {
    summary: { type: "string" },
    findings: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["category", "title", "quote", "clause", "detail", "risk"],
        properties: {
          category: { type: "string" },
          title: { type: "string" },
          quote: { type: "string" },
          clause: { type: "string" },
          detail: { type: "string" },
          risk: { type: "string", enum: ["hoch", "mittel", "niedrig"] },
        },
      },
    },
  },
} as const;

export async function analyzeContract(contract: SampleContractKey) {
  const sample = SAMPLE_CONTRACTS[contract];
  const result = await callGateway<ContractAnalysis>(
    "Du bist ein Analyse-Assistent für Vertragsdokumente in einem deutschen Mittelstandsbetrieb. Du analysierst ausschließlich den übergebenen Text. Du erfindest keine Inhalte, gibst keine Rechtsberatung und formulierst sachlich in deutscher Sprache mit Sie-Ansprache. Verwende keine Gedankenstriche. Das Feld quote enthält ein wörtliches Zitat aus dem Text, maximal 140 Zeichen. Liefere fünf bis sieben Fundstellen zu Fristen, Kündigung, Zahlung, Pflichten, Haftung und Datenschutz.",
    `Analysiere diesen Vertrag:\n\n${sample.text}`,
    "vertragsanalyse",
    contractSchema,
  );
  return { ...result, contract };
}

/* ---------------------------------------------------------------- Angebot */

const quoteSchema = {
  type: "object",
  additionalProperties: false,
  required: ["title", "intro", "descriptions", "notes"],
  properties: {
    title: { type: "string" },
    intro: { type: "string" },
    descriptions: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["key", "text"],
        properties: {
          key: { type: "string" },
          text: { type: "string" },
        },
      },
    },
    notes: { type: "array", items: { type: "string" } },
  },
} as const;

export async function draftQuote(data: {
  items: { key: string; label: string; unit: string; quantity: number }[];
  urgent: boolean;
  object?: string;
  note?: string;
}) {
  const list = data.items
    .map((item) => `- ${item.key}: ${item.label}, Menge ${item.quantity} ${item.unit}`)
    .join("\n");

  return callGateway<QuoteDraft>(
    "Du bist der Angebots-Assistent eines SHK Handwerksbetriebs im Raum Bonn. Du formulierst einen Angebotsentwurf für einen gewerblichen Kunden. Sachlich, deutsch, Sie-Ansprache, keine Gedankenstriche, keine Preise und keine Stundensätze nennen, da diese aus der Kalkulationsdatenbank stammen. Der Titel ist eine kurze Auftragsbezeichnung ohne Punkt am Ende. Die Einleitung umfasst zwei bis drei Sätze und nimmt Bezug auf die Anfrage. Zu jedem übergebenen Baustein lieferst du genau einen Eintrag in descriptions mit unverändertem key und einer Leistungsbeschreibung von einem bis zwei Sätzen, die zur genannten Menge passt. Die notes nennen drei bis vier Annahmen oder offene Punkte für die menschliche Prüfung vor dem Versand.",
    `Bausteine aus dem Leistungskatalog:\n${list}\nDringender Termin: ${
      data.urgent ? "ja, Ausführung innerhalb von 48 Stunden" : "nein"
    }\nObjekt: ${data.object || "nicht angegeben"}\nKundenhinweis: ${data.note || "keiner"}`,
    "angebotsentwurf",
    quoteSchema,
  );
}
