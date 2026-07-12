import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen/webdesign")!;

export const Route = createFileRoute("/leistungen/webdesign")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[
        { to: "/leistungen", label: "Leistungen" },
        { to: route.path, label: "Webdesign" },
      ]}
      intro="Websites für kleine und mittelständische Unternehmen zum Festpreis. Drei Pakete, verbindlicher Liefertermin, saubere SEO-Grundlagen und Ladezeit-Optimierung inklusive."
    />
  ),
});
