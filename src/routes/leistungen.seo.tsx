import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen/seo")!;

export const Route = createFileRoute("/leistungen/seo")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[
        { to: "/leistungen", label: "Leistungen" },
        { to: route.path, label: "SEO" },
      ]}
      intro="SEO für KMU heißt bei uns: technisches Fundament, Inhalte mit Kauf- und Kontaktabsicht und lokale Sichtbarkeit. Monatlicher Retainer, Reporting nachvollziehbar in Anfragen statt Rankinglisten."
    />
  ),
});
