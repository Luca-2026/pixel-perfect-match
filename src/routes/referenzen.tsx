import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/referenzen")!;

export const Route = createFileRoute("/referenzen")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/referenzen", label: "Referenzen" }]}
      intro="Ausgewählte Projekte und Ergebnisse dokumentieren wir hier, sobald Kundinnen und Kunden freigegeben haben. Bis dahin: die konkreten Zahlen liefern wir in einem Erstgespräch persönlich."
    />
  ),
});
