import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/ueber")!;

export const Route = createFileRoute("/ueber")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/ueber", label: "Über" }]}
      intro="sandhoff.digital ist inhabergeführt. Sie sprechen direkt mit Luca Sandhoff, der Ihre Projekte konzipiert und umsetzt. Regional verwurzelt in der Region Bonn, deutschlandweit tätig."
    />
  ),
});
