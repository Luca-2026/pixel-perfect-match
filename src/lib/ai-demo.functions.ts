import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

/**
 * Live-Demos für die Seite KI-Automatisierung.
 * Die Modellaufrufe laufen wirklich über das Lovable AI Gateway.
 * Es werden ausschließlich fiktive Musterdaten verarbeitet.
 */

const MODEL = "google/gemini-2.5-flash";

/* ------------------------------------------------- Missbrauchsschutz */

const WINDOW_MS = 10 * 60 * 1000;
const PER_CLIENT = 8;
const GLOBAL_PER_WINDOW = 150;

const clientHits = new Map<string, number[]>();
let globalHits: number[] = [];

function clientKey(): string {
  try {
    const headers = getRequest().headers;
    return (
      headers.get("cf-connecting-ip") ||
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headers.get("x-real-ip") ||
      "unbekannt"
    );
  } catch {
    return "unbekannt";
  }
}

/** Einfaches Zeitfenster-Limit gegen automatisierte Massenaufrufe der Demos. */
function enforceRateLimit(): void {
  const now = Date.now();
  const since = now - WINDOW_MS;

  globalHits = globalHits.filter((time) => time > since);
  if (globalHits.length >= GLOBAL_PER_WINDOW) {
    throw new Error("Die Live-Demo ist gerade stark ausgelastet. Bitte in einigen Minuten erneut versuchen.");
  }

  const key = clientKey();
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


export const SAMPLE_CONTRACTS = {
  wartung: {
    label: "Wartungsvertrag",
    partner: "Muster Gebäudetechnik GmbH",
    text: `WARTUNGSVERTRAG (fiktives Muster)
zwischen Muster Gebäudetechnik GmbH (Auftragnehmer) und Beispiel Betrieb e. K. (Auftraggeber)

§ 1 Gegenstand
Der Auftragnehmer wartet die im Anhang 1 aufgeführten Heizungsanlagen einmal jährlich und dokumentiert alle Messwerte in einem Prüfprotokoll.

§ 2 Reaktionszeiten
Bei einer Störungsmeldung an Werktagen bis 12:00 Uhr erfolgt die Reaktion am selben Werktag, sonst am folgenden Werktag.

§ 4 Laufzeit und Kündigung
Der Vertrag beginnt am 1. Oktober 2026 und läuft zunächst 24 Monate. Er verlängert sich jeweils um zwölf Monate, wenn er nicht drei Monate vor Ablauf in Textform gekündigt wird.

§ 5 Vergütung
Die Jahrespauschale beträgt 1.480,00 Euro netto, zahlbar innerhalb von 14 Tagen nach Rechnungsstellung. Der Auftragnehmer kann die Vergütung einmal jährlich um bis zu 5 Prozent anpassen.

§ 7 Haftung
Die Haftung für leichte Fahrlässigkeit ist auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Die Haftung für Vorsatz und grobe Fahrlässigkeit bleibt unberührt.`,
  },
  lieferung: {
    label: "Liefervertrag",
    partner: "Beispiel Komponenten KG",
    text: `LIEFERVERTRAG (fiktives Muster)
zwischen Beispiel Komponenten KG (Lieferant) und Beispiel Betrieb e. K. (Besteller)

§ 3 Lieferung
Die Lieferung erfolgt binnen zehn Werktagen nach Auftragseingang. Bei einer Verzögerung von mehr als fünf Werktagen ist der Besteller schriftlich zu informieren.

§ 4 Vertragsstrafe
Bei einem vom Lieferanten zu vertretenden Lieferverzug von mehr als zehn Werktagen wird eine Vertragsstrafe von 0,3 Prozent des Auftragswerts je angefangener Woche fällig, insgesamt höchstens 5 Prozent.

§ 6 Zahlung
Rechnungen sind innerhalb von 14 Kalendertagen ohne Abzug fällig. Bei Zahlung innerhalb von sieben Tagen werden 2 Prozent Skonto gewährt.

§ 9 Gewährleistung
Die Gewährleistungsfrist beträgt 24 Monate ab Gefahrübergang. Offensichtliche Mängel sind innerhalb von fünf Werktagen nach Erhalt zu rügen.`,
  },
  software: {
    label: "Softwarevertrag",
    partner: "Demo Software Services GmbH",
    text: `SOFTWARE- UND SERVICEVERTRAG (fiktives Muster)
zwischen Demo Software Services GmbH (Anbieter) und Beispiel Betrieb e. K. (Kunde)

§ 5 Verfügbarkeit
Die monatliche Verfügbarkeit der Plattform beträgt 99,5 Prozent im Jahresmittel. Geplante Wartungsfenster werden sieben Kalendertage vorher angekündigt und gelten nicht als Ausfallzeit.

§ 6 Preise
Die monatliche Grundgebühr beträgt 390,00 Euro netto für bis zu 25 Benutzer. Jeder weitere Benutzer kostet 12,00 Euro netto pro Monat.

§ 8 Datenschutz
Personenbezogene Daten werden ausschließlich nach dokumentierter Weisung des Kunden verarbeitet. Der Anbieter setzt Unterauftragsverarbeiter nur nach vorheriger Information des Kunden ein.

§ 11 Kündigung
Der Vertrag ist mit einer Frist von drei Monaten zum Ende eines Vertragsjahres kündbar. Nach Vertragsende stellt der Anbieter die Daten 30 Tage lang zum Export bereit.`,
  },
} as const;

export type SampleContractKey = keyof typeof SAMPLE_CONTRACTS;

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

  if (response.status === 429) throw new Error("Gerade sind zu viele Anfragen unterwegs. Bitte in einer Minute erneut versuchen.");
  if (response.status === 402) throw new Error("Das Demo-Kontingent ist aufgebraucht.");
  if (!response.ok) throw new Error(`Analyse fehlgeschlagen (${response.status}).`);

  const json = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const content = json.choices?.[0]?.message?.content ?? "{}";
  // Bewusst ohne Modellname und Tokenverbrauch: die Demo zeigt nur die Antwortzeit.
  return {
    data: JSON.parse(content) as T,
    meta: { ms: Date.now() - started },
  };
}

/* ---------------------------------------------------------------- Vertrag */

export type ContractFinding = {
  category: string;
  title: string;
  quote: string;
  clause: string;
  detail: string;
  risk: "hoch" | "mittel" | "niedrig";
};
export type ContractAnalysis = { summary: string; findings: ContractFinding[] };



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

export const analyzeSampleContract = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ contract: z.enum(["wartung", "lieferung", "software"]) }).parse(data),
  )
  .handler(async ({ data }) => {
    enforceRateLimit();
    const sample = SAMPLE_CONTRACTS[data.contract];
    const result = await callGateway<ContractAnalysis>(
      "Du bist ein Analyse-Assistent für Vertragsdokumente in einem deutschen Mittelstandsbetrieb. Du analysierst ausschließlich den übergebenen Text. Du erfindest keine Inhalte, gibst keine Rechtsberatung und formulierst sachlich in deutscher Sprache mit Sie-Ansprache. Verwende keine Gedankenstriche. Das Feld quote enthält ein wörtliches Zitat aus dem Text, maximal 140 Zeichen. Liefere fünf bis sieben Fundstellen zu Fristen, Kündigung, Zahlung, Pflichten, Haftung und Datenschutz.",
      `Analysiere diesen Vertrag:\n\n${sample.text}`,
      "vertragsanalyse",
      contractSchema,
    );
    return { ...result, contract: data.contract };
  });

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

export type QuoteDraft = {
  title: string;
  intro: string;
  descriptions: { key: string; text: string }[];
  notes: string[];
};

export const draftSampleQuote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z
      .object({
        items: z
          .array(
            z.object({
              key: z.string().max(40),
              label: z.string().max(80),
              unit: z.string().max(20),
              quantity: z.number().int().min(1).max(20),
            }),
          )
          .min(1)
          .max(12),
        urgent: z.boolean(),
        object: z.string().trim().max(80).optional().or(z.literal("")),
        note: z.string().trim().max(300).optional().or(z.literal("")),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    enforceRateLimit();
    const list = data.items
      .map((item) => `- ${item.key}: ${item.label}, Menge ${item.quantity} ${item.unit}`)
      .join("\n");

    const result = await callGateway<QuoteDraft>(
      "Du bist der Angebots-Assistent eines SHK Handwerksbetriebs im Raum Bonn. Du formulierst einen Angebotsentwurf für einen gewerblichen Kunden. Sachlich, deutsch, Sie-Ansprache, keine Gedankenstriche, keine Preise und keine Stundensätze nennen, da diese aus der Kalkulationsdatenbank stammen. Der Titel ist eine kurze Auftragsbezeichnung ohne Punkt am Ende. Die Einleitung umfasst zwei bis drei Sätze und nimmt Bezug auf die Anfrage. Zu jedem übergebenen Baustein lieferst du genau einen Eintrag in descriptions mit unverändertem key und einer Leistungsbeschreibung von einem bis zwei Sätzen, die zur genannten Menge passt. Die notes nennen drei bis vier Annahmen oder offene Punkte für die menschliche Prüfung vor dem Versand.",
      `Bausteine aus dem Leistungskatalog:\n${list}\nDringender Termin: ${
        data.urgent ? "ja, Ausführung innerhalb von 48 Stunden" : "nein"
      }\nObjekt: ${data.object || "nicht angegeben"}\nKundenhinweis: ${data.note || "keiner"}`,
      "angebotsentwurf",
      quoteSchema,
    );
    return result;
  });
