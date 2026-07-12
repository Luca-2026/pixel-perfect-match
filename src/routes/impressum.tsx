import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/impressum")!;

export const Route = createFileRoute("/impressum")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/impressum", label: "Impressum" }]}
      intro="[Rechtstext wird eingefügt. Grundlage: § 5 DDG. Bitte nicht durch generierten Text ersetzen.]"
    />
  ),
});
