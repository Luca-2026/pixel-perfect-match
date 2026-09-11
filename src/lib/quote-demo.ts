// Bausteinkatalog und Kalkulationsregeln der Angebots-Demo.
// Alle Preise sind fiktive Musterwerte eines SHK Beispielbetriebs.

export interface CatalogItem {
  key: string;
  label: string;
  description: string;
  unit: string;
  /** Arbeitsstunden je Einheit */
  hours: number;
  /** Materialkosten je Einheit in Euro netto */
  material: number;
  /** Baustein ohne Mengenwahl (immer Menge 1) */
  single?: boolean;
}

export interface CatalogGroup {
  group: string;
  items: CatalogItem[];
}

export const HOURLY_RATE = 68;
export const TRAVEL_FLAT = 35;
export const URGENCY_FLAT = 45;
export const VAT_RATE = 0.19;

export const CATALOG: CatalogGroup[] = [
  {
    group: "Wartung und Prüfung",
    items: [
      {
        key: "wartung-gastherme",
        label: "Jahreswartung Gastherme",
        description:
          "Wartung nach Herstellervorgabe, Reinigung der Brennkammer, Funktionsprüfung, Messwerte im Prüfprotokoll dokumentiert.",
        unit: "Anlage",
        hours: 1.5,
        material: 32,
      },
      {
        key: "abgasmessung",
        label: "Abgasmessung mit Protokoll",
        description:
          "Messung der Abgaswerte, Auswertung und Übergabe des digitalen Protokolls an die Hausverwaltung.",
        unit: "Anlage",
        hours: 0.5,
        material: 0,
      },
      {
        key: "hydraulischer-abgleich",
        label: "Hydraulischer Abgleich",
        description:
          "Raumweise Auslegung, Einstellung der Ventile und Dokumentation der Sollwerte je Heizkörper.",
        unit: "Wohnung",
        hours: 4,
        material: 45,
      },
    ],
  },
  {
    group: "Heizung und Montage",
    items: [
      {
        key: "thermostat",
        label: "Digitales Thermostat tauschen",
        description:
          "Demontage des vorhandenen Thermostatkopfs, Montage und Inbetriebnahme des programmierbaren Reglers.",
        unit: "Stück",
        hours: 0.6,
        material: 68,
      },
      {
        key: "heizkoerper",
        label: "Heizkörper Typ 22 liefern und montieren",
        description:
          "Lieferung, Montage, Anschluss an die bestehende Leitung, Entlüftung und Dichtheitsprüfung.",
        unit: "Stück",
        hours: 3.5,
        material: 295,
      },
      {
        key: "umwaelzpumpe",
        label: "Hocheffizienzpumpe tauschen",
        description:
          "Austausch der Umwälzpumpe, Einstellung der Förderhöhe und Prüfung der Anlagenfunktion.",
        unit: "Stück",
        hours: 2,
        material: 240,
      },
    ],
  },
  {
    group: "Sanitär",
    items: [
      {
        key: "mischbatterie",
        label: "Waschtisch-Mischbatterie tauschen",
        description:
          "Demontage der alten Armatur, Montage der neuen Einhebelmischbatterie, Dichtheitsprüfung.",
        unit: "Stück",
        hours: 1,
        material: 145,
      },
      {
        key: "spuelkasten",
        label: "Unterputz-Spülkasten instand setzen",
        description:
          "Öffnen der Revision, Austausch von Füll- und Ablaufventil, Funktionsprüfung, Verschluss.",
        unit: "Stück",
        hours: 1.5,
        material: 95,
      },
    ],
  },
  {
    group: "Service und Nebenleistungen",
    items: [
      {
        key: "notdienst",
        label: "Störungsdienst außerhalb der Regelzeit",
        description:
          "Einsatz außerhalb der regulären Arbeitszeit inklusive Bereitstellung von Werkzeug und Ersatzteilen.",
        unit: "Einsatz",
        hours: 1,
        material: 0,
      },
      {
        key: "entsorgung",
        label: "Altteile fachgerecht entsorgen",
        description:
          "Abtransport und Nachweis der Entsorgung ausgebauter Bauteile nach den geltenden Vorgaben.",
        unit: "Auftrag",
        hours: 0.25,
        material: 28,
        single: true,
      },
      {
        key: "dokumentation",
        label: "Digitale Anlagendokumentation",
        description:
          "Zusammenstellung aller Messwerte, Fotos und Prüfprotokolle als PDF für Ihre Unterlagen.",
        unit: "Auftrag",
        hours: 0.5,
        material: 0,
        single: true,
      },
    ],
  },
];

export const CATALOG_ITEMS: CatalogItem[] = CATALOG.flatMap((group) => group.items);

export function findCatalogItem(key: string): CatalogItem | undefined {
  return CATALOG_ITEMS.find((item) => item.key === key);
}

export function unitPrice(item: CatalogItem): number {
  return Math.round((item.material + item.hours * HOURLY_RATE) * 100) / 100;
}

export interface QuoteLine {
  key: string;
  label: string;
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

/** Absenderdaten des Betriebs, im Formular frei änderbar. */
export interface QuoteSender {
  company: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  agent: string;
}

/** Empfängerdaten des Kunden, im Formular frei änderbar. */
export interface QuoteRecipient {
  company: string;
  contact: string;
  street: string;
  city: string;
  customerNumber: string;
}

export const DEFAULT_SENDER: QuoteSender = {
  company: "Muster SHK Betrieb GmbH",
  street: "Musterstraße 12",
  city: "53343 Wachtberg",
  phone: "0228 000000",
  email: "angebot@muster-shk.example",
  agent: "M. Beispiel",
};

export const DEFAULT_RECIPIENT: QuoteRecipient = {
  company: "Beispiel Hausverwaltung GmbH",
  contact: "Frau Anna Beispiel",
  street: "Beispielallee 5",
  city: "53113 Bonn",
  customerNumber: "K-10428",
};

export interface QuoteDocument {
  number: string;
  date: string;
  validUntil: string;
  title: string;
  intro: string;
  lines: QuoteLine[];
  net: number;
  vat: number;
  gross: number;
  hours: number;
  notes: string[];
  sender: QuoteSender;
  recipient: QuoteRecipient;
}


const euroFormat = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** Beträge werden als „1.234,56 EUR" ausgegeben, damit sie auch im PDF sicher darstellbar sind. */
export function formatEuro(value: number): string {
  return `${euroFormat.format(value)} EUR`;
}

export function formatQuantity(value: number): string {
  return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 2 }).format(value);
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

interface BuildQuoteInput {
  selection: { key: string; quantity: number }[];
  urgent: boolean;
  title: string;
  intro: string;
  notes: string[];
  descriptions?: Record<string, string>;
}

/** Baut das vollständige Angebotsdokument aus Bausteinen und festen Kalkulationsregeln. */
export function buildQuote(input: BuildQuoteInput): QuoteDocument {
  const lines: QuoteLine[] = [];
  let hours = 0;

  for (const entry of input.selection) {
    const item = findCatalogItem(entry.key);
    if (!item || entry.quantity <= 0) continue;
    const price = unitPrice(item);
    hours += item.hours * entry.quantity;
    lines.push({
      key: item.key,
      label: item.label,
      description: input.descriptions?.[item.key]?.trim() || item.description,
      unit: item.unit,
      quantity: entry.quantity,
      unitPrice: price,
      total: Math.round(price * entry.quantity * 100) / 100,
    });
  }

  lines.push({
    key: "anfahrt",
    label: "An- und Abfahrt",
    description: "Pauschale für die Anfahrt im Umkreis von 30 Kilometern um den Betriebssitz.",
    unit: "Pauschale",
    quantity: 1,
    unitPrice: TRAVEL_FLAT,
    total: TRAVEL_FLAT,
  });

  if (input.urgent) {
    lines.push({
      key: "dringlichkeit",
      label: "Terminzuschlag Express",
      description: "Zuschlag für die Ausführung innerhalb von 48 Stunden nach Auftragsbestätigung.",
      unit: "Pauschale",
      quantity: 1,
      unitPrice: URGENCY_FLAT,
      total: URGENCY_FLAT,
    });
  }

  const net = Math.round(lines.reduce((sum, line) => sum + line.total, 0) * 100) / 100;
  const vat = Math.round(net * VAT_RATE * 100) / 100;
  const now = new Date();
  const validUntil = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

  return {
    number: `AN-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}${String(
      now.getDate(),
    ).padStart(2, "0")}-${String(Math.floor(now.getTime() / 1000) % 1000).padStart(3, "0")}`,
    date: formatDate(now),
    validUntil: formatDate(validUntil),
    title: input.title,
    intro: input.intro,
    lines,
    net,
    vat,
    gross: Math.round((net + vat) * 100) / 100,
    hours: Math.round(hours * 100) / 100,
    notes: input.notes,
  };
}
