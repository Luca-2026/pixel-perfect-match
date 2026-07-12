import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/digitalagentur-koeln")!;

export const Route = createFileRoute("/digitalagentur-koeln")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: route.path, label: "Köln" }]}
      intro="Für Kölner Unternehmen aus Handwerk, Dienstleistung und Handel: KI-Automatisierung, Websites und SEO mit klarem Festpreis. Termine vor Ort in Köln nach Absprache."
    />
  ),
});
