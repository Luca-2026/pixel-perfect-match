import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/agb")!;

export const Route = createFileRoute("/agb")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/agb", label: "AGB" }]}
      intro="[Rechtstext wird eingefügt. Bitte nicht durch generierten Text ersetzen.]"
    />
  ),
});
