import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/layout/placeholder-page";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";

const route = findRoute("/leistungen/ki-sichtbarkeit")!;

export const Route = createFileRoute("/leistungen/ki-sichtbarkeit")({
  head: () => routeHead(route),
  component: () => (
    <PlaceholderPage
      route={route}
      crumbs={[
        { to: "/leistungen", label: "Leistungen" },
        { to: route.path, label: "KI-Sichtbarkeit" },
      ]}
      intro="KI-Sichtbarkeit (auch AEO oder GEO genannt) sorgt dafür, dass KI-Systeme wie ChatGPT, Gemini, Perplexity und Google-KI Ihr Unternehmen als Quelle zitieren. Ergänzend zum klassischen SEO."
    />
  ),
});
