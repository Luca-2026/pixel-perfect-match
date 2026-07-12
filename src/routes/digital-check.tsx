import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/digital-check")!;

export const Route = createFileRoute("/digital-check")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[{ to: "/digital-check", label: "Digital-Check" }]}
      intro="Der Digital-Check ist kostenlos und unverbindlich. Sie schildern kurz Ihre Situation, wir liefern eine persönliche Einschätzung mit den drei größten Potenzialen. Kein Newsletter, kein Verkaufsgespräch."
    />
  ),
});
