import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen/ki-automatisierung")!;

export const Route = createFileRoute("/leistungen/ki-automatisierung")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[
        { to: "/leistungen", label: "Leistungen" },
        { to: route.path, label: "KI & Automatisierung" },
      ]}
      intro="Prozessautomatisierung für KMU heißt: wir übernehmen einen konkreten Prozess in Ihrem Unternehmen und ersetzen ihn durch eine dokumentierte Automatisierung. Ergebnis: nachweislich weniger manuelle Arbeit, gleiches oder besseres Ergebnis."
    />
  ),
});
