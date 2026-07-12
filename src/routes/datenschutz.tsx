import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/datenschutz")!;

export const Route = createFileRoute("/datenschutz")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/datenschutz", label: "Datenschutz" }]}
      intro="[Rechtstext wird eingefügt. Bitte nicht durch generierten Text ersetzen.]"
    />
  ),
});
