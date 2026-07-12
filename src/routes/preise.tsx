import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/preise")!;

export const Route = createFileRoute("/preise")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/preise", label: "Preise" }]}
      intro="Transparente Ab-Preise für alle Leistungen, netto. Der Endpreis hängt von Umfang und Ausgangslage ab. Klarheit gibt es nach dem kostenlosen Digital-Check."
    />
  ),
});
