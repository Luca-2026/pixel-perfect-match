// Zentraler Registry aller Seiten. Wird von Header, Footer und Sitemap benutzt.

export interface SiteRoute {
  path: string;
  title: string;         // Nav-Label / Sitemap-Titel
  metaTitle: string;     // <title>, unter 60 Zeichen
  description: string;   // <meta description>, unter 155 Zeichen
  h1: string;            // H1 der Seite (ohne Punkt, wird durch headline-dot ergänzt)
  eyebrow?: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const services: SiteRoute[] = [
  {
    path: "/leistungen/ki-automatisierung",
    title: "KI & Prozessautomatisierung",
    metaTitle: "KI-Automatisierung für KMU | sandhoff.digital",
    description:
      "KI-Prozessautomatisierung für KMU: Angebote vorbereiten, Daten matchen und Personalaufwand reduzieren. Persönlich eingeführt im Raum Bonn.",
    h1: "Geschäftsprozesse automatisieren, Personalaufwand reduzieren",
    eyebrow: "Leistung",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/leistungen/webdesign",
    title: "Webdesign & Entwicklung",
    metaTitle: "Webdesign für kleine und mittlere Unternehmen zum Festpreis",
    description:
      "Websites für KMU zum Festpreis: schnelle Ladezeit, saubere SEO-Grundlagen, verbindlicher Liefertermin. Drei Pakete ab 2.900 Euro netto.",
    h1: "Websites, die Anfragen bringen",
    eyebrow: "Leistung",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/leistungen/seo",
    title: "SEO für KMU",
    metaTitle: "SEO für KMU: sichtbar werden, wo Kunden suchen",
    description:
      "SEO für kleine und mittelständische Unternehmen: technisches SEO, Inhalte, lokale Sichtbarkeit. Monatlicher Retainer ab 890 Euro netto.",
    h1: "SEO, das Anfragen bringt statt Berichte",
    eyebrow: "Leistung",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/leistungen/ki-sichtbarkeit",
    title: "KI-Sichtbarkeit (AEO/GEO)",
    metaTitle: "KI-Sichtbarkeit in ChatGPT und Google | sandhoff.digital",
    description:
      "AEO und GEO für KMU: sichtbar in ChatGPT, Gemini, Perplexity und Google-KI. Strukturierte Inhalte, Monitoring, Kombi mit SEO.",
    h1: "Sichtbar, wenn Kunden die KI fragen",
    eyebrow: "Leistung",
    changefreq: "monthly",
    priority: "0.9",
  },
];

export const mainPages: SiteRoute[] = [
  {
    path: "/",
    title: "Start",
    metaTitle: "Digitalagentur für KMU: KI, Web und SEO",
    description:
      "KI-Automatisierung, Webdesign und SEO für kleine und mittelständische Unternehmen. Messbare Ergebnisse zum Festpreis. Jetzt kostenlosen Digital-Check starten.",
    h1: "Digital auf den Punkt",
    eyebrow: "Digitalagentur für den Mittelstand",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/leistungen",
    title: "Leistungen",
    metaTitle: "KI, Webdesign und SEO für KMU | Leistungen",
    description:
      "Übersicht unserer Leistungen für kleine und mittelständische Unternehmen: KI-Automatisierung, Webdesign, SEO und KI-Sichtbarkeit.",
    h1: "Leistungen für den Mittelstand",
    eyebrow: "Leistungen",
    changefreq: "monthly",
    priority: "0.8",
  },
  ...services,
  {
    path: "/preise",
    title: "Preise",
    metaTitle: "Preise: Webdesign, SEO und KI-Automatisierung im Überblick",
    description:
      "Transparente Preise für Webdesign, SEO und KI-Automatisierung. Alle Pakete und Retainer auf einen Blick, netto und als Ab-Preise.",
    h1: "Transparente Preise, keine Überraschungen",
    eyebrow: "Preise",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/digital-check",
    title: "Digital-Check",
    metaTitle: "Kostenloser Digital-Check | sandhoff.digital",
    description:
      "Der kostenlose Digital-Check: persönliche Einschätzung mit den drei größten Potenzialen für Ihr Unternehmen. Unverbindlich, kein Newsletter.",
    h1: "Der kostenlose Digital-Check",
    eyebrow: "Kostenlos & unverbindlich",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/referenzen",
    title: "Referenzen",
    metaTitle: "Referenzen und Ergebnisse | sandhoff.digital",
    description:
      "Ausgewählte Projekte und Ergebnisse aus KI-Automatisierung, Webdesign und SEO für kleine und mittelständische Unternehmen.",
    h1: "Ergebnisse, die zählen",
    eyebrow: "Referenzen",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/ratgeber",
    title: "Ratgeber",
    metaTitle: "Ratgeber: Digitalisierung für KMU verständlich erklärt",
    description:
      "Praxisnahe Artikel zu KI, Webdesign, SEO und KI-Sichtbarkeit für kleine und mittelständische Unternehmen. Ohne Hype, mit konkreten Beispielen.",
    h1: "Ratgeber für Entscheider",
    eyebrow: "Ratgeber",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/digitalagentur-bonn",
    title: "Digitalagentur Bonn",
    metaTitle: "Digitalagentur Bonn: KI, Webdesign und SEO für KMU",
    description:
      "Digitalagentur in Bonn: KI-Automatisierung, Webdesign und SEO für kleine und mittelständische Unternehmen in Bonn und der Region.",
    h1: "Digitalagentur in Bonn",
    eyebrow: "Standort Bonn",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/digitalagentur-koeln",
    title: "Digitalagentur Köln",
    metaTitle: "Digitalagentur Köln: KI, Webdesign und SEO für KMU",
    description:
      "Digitalagentur für Köln: KI-Automatisierung, Webdesign und SEO für kleine und mittelständische Unternehmen in Köln und der Region.",
    h1: "Digitalagentur für Köln",
    eyebrow: "Standort Köln",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/ueber",
    title: "Über",
    metaTitle: "Über Luca Sandhoff: Inhaber von sandhoff.digital",
    description:
      "Luca Sandhoff, Inhaber von sandhoff.digital. Praxis aus IT und Medientechnik. Unternehmer für Unternehmer, regional verwurzelt in der Region Bonn.",
    h1: "Sie sprechen direkt mit dem, der es baut",
    eyebrow: "Über",
    changefreq: "yearly",
    priority: "0.6",
  },
  {
    path: "/kontakt",
    title: "Kontakt",
    metaTitle: "Kontakt zu sandhoff.digital | Digitalagentur für KMU",
    description:
      "Direkter Kontakt zum Inhaber. Anfrage, Rückruf oder Erstgespräch buchen. Wir antworten in der Regel innerhalb eines Werktags.",
    h1: "Sprechen wir",
    eyebrow: "Kontakt",
    changefreq: "yearly",
    priority: "0.7",
  },
];

export const legalPages: SiteRoute[] = [
  {
    path: "/impressum",
    title: "Impressum",
    metaTitle: "Impressum | sandhoff.digital",
    description: "Impressum von sandhoff.digital nach § 5 DDG.",
    h1: "Impressum",
    changefreq: "yearly",
    priority: "0.2",
  },
  {
    path: "/datenschutz",
    title: "Datenschutz",
    metaTitle: "Datenschutzerklärung | sandhoff.digital",
    description: "Datenschutzerklärung von sandhoff.digital.",
    h1: "Datenschutzerklärung",
    changefreq: "yearly",
    priority: "0.2",
  },
  {
    path: "/agb",
    title: "AGB",
    metaTitle: "Allgemeine Geschäftsbedingungen | sandhoff.digital",
    description: "Allgemeine Geschäftsbedingungen von sandhoff.digital.",
    h1: "Allgemeine Geschäftsbedingungen",
    changefreq: "yearly",
    priority: "0.2",
  },
];

export const allRoutes: SiteRoute[] = [...mainPages, ...legalPages];

export function findRoute(path: string): SiteRoute | undefined {
  return allRoutes.find((r) => r.path === path);
}
