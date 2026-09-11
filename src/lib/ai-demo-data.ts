import { z } from "zod";

/**
 * Musterdaten und Typen der Live-Demos auf der Seite KI-Automatisierung.
 * Alle Verträge sind frei erfunden und dienen nur der Veranschaulichung.
 */

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

export type ContractFinding = {
  category: string;
  title: string;
  quote: string;
  clause: string;
  detail: string;
  risk: "hoch" | "mittel" | "niedrig";
};
export type ContractAnalysis = { summary: string; findings: ContractFinding[] };

export type QuoteDraft = {
  title: string;
  intro: string;
  descriptions: { key: string; text: string }[];
  notes: string[];
};

export const contractInputSchema = z.object({
  contract: z.enum(["wartung", "lieferung", "software"]),
});

export const quoteInputSchema = z.object({
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
});
