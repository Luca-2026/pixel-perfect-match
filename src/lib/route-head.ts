import type { SiteRoute } from "./site-routes";

/**
 * Baut die head()-Metadaten für eine Route.
 * og:image bewusst weggelassen (kommt in Etappe 5 pro Leaf-Route dazu).
 */
export function routeHead(route: SiteRoute, canonicalPath?: string) {
  const path = canonicalPath ?? route.path;
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
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: route.metaTitle },
      { name: "twitter:description", content: route.description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
