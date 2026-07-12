import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import type { SiteRoute } from "@/lib/site-routes";

/**
 * Ratgeber-Artikel werden in Etappe 4 als eigene Route-Files angelegt.
 * Bis dahin liefert diese Dynamik-Route für jeden Slug einen 404.
 */
export const Route = createFileRoute("/ratgeber/$slug")({
  loader: () => {
    throw notFound();
  },
  head: () => ({
    meta: [
      { title: "Artikel nicht gefunden | Ratgeber | sandhoff.digital" },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  notFoundComponent: () => {
    const placeholder: SiteRoute = {
      path: "/ratgeber",
      title: "Ratgeber",
      metaTitle: "Artikel folgt",
      description: "Dieser Artikel wird noch vorbereitet.",
      h1: "Artikel folgt",
      eyebrow: "Ratgeber",
    };
    return (
      <PlaceholderPage
        route={placeholder}
        crumbs={[
          { to: "/ratgeber", label: "Ratgeber" },
          { to: "/ratgeber", label: "Artikel" },
        ]}
        intro="Der angefragte Ratgeber-Artikel ist noch nicht veröffentlicht. Die geplanten Artikel folgen in Kürze."
      />
    );
  },
});
