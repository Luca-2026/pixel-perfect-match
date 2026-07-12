// Registry aller Ratgeber-Artikel.
// Wird vom /ratgeber-Hub, den Artikel-Routen und der Sitemap benutzt.

export interface RatgeberArticle {
  slug: string;
  path: string;                 // /ratgeber/<slug>
  title: string;                // H1 (ohne Punkt)
  metaTitle: string;            // <title>, unter 60 Zeichen
  description: string;          // <meta description>, unter 155 Zeichen
  excerpt: string;              // Teaser für Hub
  topic: "KI" | "Webdesign" | "SEO" | "KI-Sichtbarkeit";
  publishedAt: string;          // ISO-Datum (Veröffentlichung)
  readingMinutes: number;
  relatedServicePath?: string;  // Zugehörige Leistung für interne Verlinkung
}

export const articles: RatgeberArticle[] = [
  {
    slug: "ki-automatisierung-kmu-einstieg",
    path: "/ratgeber/ki-automatisierung-kmu-einstieg",
    title: "KI-Automatisierung im Mittelstand: wo Sie sinnvoll starten",
    metaTitle: "KI-Automatisierung für KMU: sinnvoll starten | Ratgeber",
    description:
      "Praxisleitfaden für den Einstieg in KI-Automatisierung im Mittelstand: geeignete Prozesse, typische Werkzeuge und was Sie vor dem ersten Projekt klären sollten.",
    excerpt:
      "Nicht jeder Prozess eignet sich für KI. Welche drei Merkmale einen guten Startpunkt ausmachen und wie Sie ohne Millionenbudget beginnen.",
    topic: "KI",
    publishedAt: "2026-07-12",
    readingMinutes: 6,
    relatedServicePath: "/leistungen/ki-automatisierung",
  },
  {
    slug: "seo-grundlagen-fuer-kmu",
    path: "/ratgeber/seo-grundlagen-fuer-kmu",
    title: "SEO-Grundlagen für KMU: was wirklich zählt",
    metaTitle: "SEO-Grundlagen für KMU: was wirklich zählt | Ratgeber",
    description:
      "Verständlicher Überblick über SEO für kleine und mittelständische Unternehmen: technische Basis, Inhalte, lokale Sichtbarkeit und was Sie ignorieren dürfen.",
    excerpt:
      "SEO ist kein Trick und kein Ranking-Zaubertrank. Der ehrliche Blick auf das, was für KMU wirklich Anfragen bringt.",
    topic: "SEO",
    publishedAt: "2026-07-12",
    readingMinutes: 7,
    relatedServicePath: "/leistungen/seo",
  },
  {
    slug: "ki-sichtbarkeit-chatgpt-perplexity",
    path: "/ratgeber/ki-sichtbarkeit-chatgpt-perplexity",
    title: "In ChatGPT, Perplexity und Google-KI gefunden werden",
    metaTitle: "In ChatGPT und Perplexity gefunden werden | KI-Sichtbarkeit",
    description:
      "Antwortmaschinen ersetzen zunehmend die klassische Google-Suche. So bereiten Sie Ihre Website darauf vor, in KI-Antworten zitiert zu werden.",
    excerpt:
      "AEO und GEO in verständlich: warum KI-Antworten Ihre Marke gerade neu sortieren und was Sie jetzt tun sollten.",
    topic: "KI-Sichtbarkeit",
    publishedAt: "2026-07-12",
    readingMinutes: 6,
    relatedServicePath: "/leistungen/ki-sichtbarkeit",
  },
  {
    slug: "was-kostet-eine-website-kmu",
    path: "/ratgeber/was-kostet-eine-website-kmu",
    title: "Was kostet eine Website für ein KMU wirklich",
    metaTitle: "Was kostet eine Website für ein KMU? | Ratgeber",
    description:
      "Ehrliche Preisorientierung für Websites im Mittelstand: welche Faktoren den Preis treiben, wo Sie sparen können und wo es sich nie lohnt.",
    excerpt:
      "Von 500 Euro bis 50.000 Euro ist alles zu haben. Warum die Spanne so groß ist und welche Investition in Ihrem Fall realistisch ist.",
    topic: "Webdesign",
    publishedAt: "2026-07-12",
    readingMinutes: 6,
    relatedServicePath: "/leistungen/webdesign",
  },
];

export function findArticle(slug: string): RatgeberArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
