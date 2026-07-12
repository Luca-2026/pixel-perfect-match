import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/kontakt")!;

export const Route = createFileRoute("/kontakt")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/kontakt", label: "Kontakt" }]}
      intro="Der schnellste Weg zu einer belastbaren Ersteinschätzung ist der kostenlose Digital-Check. Alternativ erreichen Sie uns per E-Mail oder Telefon (Daten aus dem Impressum)."
    />
  ),
});
