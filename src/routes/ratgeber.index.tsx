import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/ratgeber")!;

export const Route = createFileRoute("/ratgeber/")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/ratgeber", label: "Ratgeber" }]}
      intro="Praxisnahe Artikel zu KI, Web und SEO für Entscheider im Mittelstand. Ohne Hype, mit konkreten Beispielen aus dem KMU-Alltag."
    />
  ),
});
