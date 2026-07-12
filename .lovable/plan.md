
# Umsetzungsplan: sandhoff.digital

Ziel: Vollständiger Neuaufbau der Agentur-Website nach deinem Prompt. Umsetzung in 5 Etappen, jede Etappe endet mit einem prüfbaren Zwischenstand. Zwischen den Etappen kannst du Feedback geben.

Grundregeln aus deinem Prompt gelten für alle Etappen:
- Keine erfundenen Fakten. Fehlende Inhalte als `[Platzhalter]` in eckigen Klammern.
- Keine Gedankenstriche in Texten, Sie-Ansprache, konkrete Button-Labels.
- Signature: jede H1/Sektions-Headline endet mit Punkt in Messing.

## Etappe 1: Fundament (dieser Durchgang)

1. Design-System in `src/styles.css`:
   - Farbtokens `--ink, --petrol, --amber, --mint, --paper, --line` (light) plus Mapping auf shadcn-Semantiktokens (`--background=--paper`, `--foreground=--ink`, `--primary=--petrol`, `--accent=--mint`, `--border=--line`).
   - Kein Dark-Mode-Toggle.
   - Google Fonts via `<link>` im `__root.tsx` head: Archivo 600, IBM Plex Sans 400/500, IBM Plex Mono 500 caps. `display=swap`, Preload für Archivo 600 + IBM Plex Sans 400.
   - Utility-Klassen/Custom-Variants: `.eyebrow` (Mono, caps, tracking), `.headline-dot` (Punkt in Messing nach H1/H2), Card-Radius 12–14 px, Rahmen statt Schatten.
2. Layout-Grundgerüst:
   - Neue Komponenten `SiteHeader`, `SiteFooter`, `Container`, `Section`, `Eyebrow`, `HeadlineDot`, `Breadcrumbs`.
   - Header: Logo-SVG links, Desktop-Nav (Leistungen-Dropdown, Preise, Referenzen, Ratgeber, Über, Kontakt), primärer CTA rechts „Digital-Check starten". Mobile: Sheet-Menü.
   - Footer: Tinte-Hintergrund, Logo invers (bis Datei geliefert: farbige SVG mit CSS-Filter `invert` als Übergang, sichtbar als TODO im Code), Spalten mit allen Seiten, Kontaktplatzhalter, Rechtliches.
3. Assets:
   - `sandhoff-digital-logo-farbig.svg` und `favicon.svg` via `lovable-assets` als CDN-Pointer nach `src/assets/`.
   - `public/favicon.ico` durch `favicon.svg` ersetzt, im `__root.tsx` verlinkt. TODO-Kommentare für `apple-touch-icon`, `icon-192`, `icon-512`, OG-Image, invers-Logo.
4. Routen-Skelett anlegen für alle URLs aus Abschnitt 3 des Prompts:
   - `/`, `/leistungen`, `/leistungen/ki-automatisierung`, `/leistungen/webdesign`, `/leistungen/seo`, `/leistungen/ki-sichtbarkeit`, `/preise`, `/digital-check`, `/referenzen`, `/ratgeber`, `/ratgeber/$slug`, `/digitalagentur-bonn`, `/digitalagentur-koeln`, `/ueber`, `/kontakt`, `/impressum`, `/datenschutz`, `/agb`.
   - Jede Route mit `head()` (Title, Description, Canonical, OG/Twitter, `og:locale=de_DE`) und minimaler Inhaltshülle (Eyebrow, H1 mit Punkt, Direktantwort-Absatz als Platzhalter, Breadcrumbs).
   - Individuelle 404-Seite: `NotFoundComponent` in `__root.tsx` erweitern mit Suchfeld (nur UI in Etappe 1) und Link-Grid zu Leistungen.
5. Home-Platzhalter durch echten Hero mit H1 „Digital auf den Punkt." und Primär-CTA ersetzen (Volltext folgt in Etappe 2). Damit ist die Blank-Page-Placeholder-Regel erfüllt.
6. `robots.txt` mit erlaubten KI-Crawlern (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended) und Sitemap-Verweis. `llms.txt` mit Kurzbeschreibung und Leistungs-URLs.
7. Dynamische `sitemap.xml`-Route (server handler) mit allen statischen Routen. Ratgeber-Artikel werden in Etappe 5 dynamisch ergänzt.
8. `bun run build` grün.

Nicht in Etappe 1: Volltexte der Kernseiten, JSON-LD-Feinschliff pro Seite, Formular-Backend, Ratgeber-Artikelinhalte.

## Etappe 2: Kernseiten mit Inhalten

- Startseite komplett nach Abschnitt 4 (Hero, Problem-Sektion, Leistungsüberblick, 4-Schritte-Prozess, Kennzahlen-Layout mit `[Case Study folgt]`, Inhaber-Sektion, Abschluss-CTA).
- Vier Leistungsseiten mit Direktantworten, Vergleichstabellen, Frage-H2s, FAQs.
- `/preise`-Übersicht.
- `/ueber`, `/referenzen`, `/kontakt` (Kontaktformular UI).
- Rechtsseiten-Gerüst mit `[Rechtstext wird eingefügt]`.
- Interne Verlinkung (Leistungen ↔ Leistungen, Leistungen ↔ Ratgeber-Slots).
- Breadcrumbs auf allen Unterseiten.

## Etappe 3: Backend + Digital-Check

- Lovable Cloud aktivieren.
- Migration: Tabelle `digital_check_submissions` mit RLS (nur `service_role` schreibt und liest, INSERT-Policy für `anon` beim Kontaktendpoint via server function), GRANTs korrekt.
- Server function `submitDigitalCheck` (Zod-Validierung, Insert via `supabaseAdmin` im Handler, E-Mail-Benachrichtigung).
- E-Mail via Lovable Cloud E-Mail (Resend), Empfänger konfigurierbar.
- Formular auf `/digital-check` + `/kontakt` verdrahten, Success/Error-States, Datenschutzhinweis mit Link.

## Etappe 4: Lokalseiten + Ratgeber-Hub

- `/digitalagentur-bonn`, `/digitalagentur-koeln` mit eigenständigen Texten, lokalen FAQs, ProfessionalService-JSON-LD mit `areaServed`.
- `/ratgeber` als Kartenliste.
- Sechs Artikel unter `/ratgeber/$slug` als statische MDX-artige Route-Files, jeweils Status „Entwurf" (in Frontmatter `draft: true` → aus Sitemap und Ratgeber-Hub ausgeschlossen bis Freigabe). Struktur: Frage-H2s, Direktantworten, FAQ-Block, Autorenbox Luca Sandhoff.

## Etappe 5: SEO-Feinschliff + Verifikation

- JSON-LD pro Seite: `ProfessionalService` (Home, Lokalseiten), `Service` (Leistungen), `Offer` (Preise), `FAQPage` (alle FAQs, deckungsgleich zum Text), `Article` (Ratgeber), `BreadcrumbList` überall.
- `og:image` nur auf Leaf-Routen setzen, sobald Bild geliefert. Bis dahin bewusst leer, damit Hosting-Fallback greift.
- Sitemap dynamisch mit veröffentlichten Artikeln, Draft-Ausschluss.
- Alt-Texte, Bild-Formate, Lazy Loading prüfen.
- Verifikationsbericht: Tabelle aller Seiten mit Title, Description, H1, JSON-LD-Bestätigung aus dem SSR-HTML (via curl gegen Preview-URL geprüft).
- Lovable SEO-Review + Semrush-Abgleich.

## Offene Punkte, die ich dich zwischendurch fragen werde

- Kontakt-Empfänger-E-Mail für Digital-Check-Benachrichtigungen (Etappe 3).
- Freigabe der Preise vor Live-Schaltung (Etappe 2, aber änderbar).
- Fehlende Assets: invers-Logo, PNG-Favicons, OG-Bild. Bis dahin markierte TODOs im Code.

## Technische Eckdaten

- TanStack Start (aktueller Stack), file-based routing in `src/routes/`.
- Server-Funktionen via `createServerFn`, Datenbank via Lovable Cloud (Supabase).
- SSR ist Standard, JSON-LD landet im initialen HTML.
- Tailwind v4 mit oklch-Farbtokens, shadcn-Semantik überschrieben.
- Keine Tracker, keine externen Fonts außer Google Fonts, keine Stockfotos.

Bestätige den Plan oder sag mir, was ich ändern soll. Danach starte ich mit Etappe 1.
