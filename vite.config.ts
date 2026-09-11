// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Alle öffentlichen, für jeden Besucher identischen Seiten werden beim Build
// zu statischem HTML gerendert. Vorteil: Bots (Google, GPTBot, ClaudeBot,
// PerplexityBot) bekommen vollständiges HTML ohne JS-Ausführung, Besucher
// bekommen sofortiges First Paint.
const staticPages = [
  "/",
  "/leistungen",
  "/leistungen/seo",
  "/leistungen/webdesign",
  "/leistungen/ki-automatisierung",
  "/leistungen/ki-sichtbarkeit",
  "/digital-check",
  "/preise",
  "/referenzen",
  "/ueber",
  "/kontakt",
  "/digitalagentur-bonn",
  "/digitalagentur-koeln",
  "/ratgeber",
  "/ratgeber/ki-automatisierung-kmu-einstieg",
  "/ratgeber/seo-grundlagen-fuer-kmu",
  "/ratgeber/ki-sichtbarkeit-chatgpt-perplexity",
  "/ratgeber/was-kostet-eine-website-kmu",
  "/ratgeber/google-unternehmensprofil-optimieren",
  "/ratgeber/website-relaunch-checkliste",
  "/ratgeber/chatgpt-fuer-unternehmen-einfuehren",
  "/impressum",
  "/datenschutz",
  "/agb",
].map((path) => ({ path }));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages: staticPages,
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
