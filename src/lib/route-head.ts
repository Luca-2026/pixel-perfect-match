import type { SiteRoute } from "./site-routes";
import { SITE_URL } from "./site";

/**
 * Baut die head()-Metadaten für eine Route.
 * Kanonische URL und og:url absolut auf SITE_URL, damit Crawler
 * und KI-Antwortsysteme die Seite eindeutig zuordnen können.
 */
export function routeHead(route: SiteRoute, canonicalPath?: string) {
  const path = canonicalPath ?? route.path;
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title: route.metaTitle },
      { name: "description", content: route.description },
      { name: "author", content: "sandhoff.digital" },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: route.metaTitle },
      { property: "og:description", content: route.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:site_name", content: "sandhoff.digital" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: route.metaTitle },
      { name: "twitter:description", content: route.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

