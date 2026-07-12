import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/digitalagentur-bonn")!;

export const Route = createFileRoute("/digitalagentur-bonn")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: route.path, label: "Bonn" }]}
      intro="Als Digitalagentur in der Region Bonn unterstützen wir kleine und mittelständische Unternehmen bei KI-Automatisierung, Websites und Sichtbarkeit. Vor-Ort-Termine im Rheinland auf Wunsch."
    />
  ),
});
