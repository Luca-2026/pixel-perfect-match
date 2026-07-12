import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen")!;

export const Route = createFileRoute("/leistungen/")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/leistungen", label: "Leistungen" }]}
      intro="Alle Leistungen von sandhoff.digital auf einen Blick: KI-Automatisierung, Webdesign, SEO und KI-Sichtbarkeit. Jedes Angebot mit klarem Umfang, Festpreis und definiertem Ergebnis."
    />
  ),
});
