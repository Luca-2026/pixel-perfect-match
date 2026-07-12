import type { ReactNode } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/primitives";
import type { SiteRoute } from "@/lib/site-routes";
import type { Crumb } from "@/components/layout/breadcrumbs";

interface PlaceholderPageProps {
  route: SiteRoute;
  crumbs?: Crumb[];
  intro: ReactNode;
  children?: ReactNode;
}

/**
 * Übergangs-Layout für Seiten, deren Volltext-Inhalt in einer späteren Etappe
 * folgt. Zeigt Eyebrow, H1 mit Marken-Punkt und Direktantwort. Der Body-Slot
 * kann später durch echte Sektionen ersetzt werden.
 */
export function PlaceholderPage({ route, crumbs, intro, children }: PlaceholderPageProps) {
  return (
    <>
      <PageHeader route={route} crumbs={crumbs} intro={intro} />
      <Section>
        <Container className="max-w-3xl">
          {children ?? (
            <div className="surface-card p-6 text-sm text-muted-foreground">
              [Ausführliche Inhalte für diese Seite folgen in Etappe 2 laut Umsetzungsplan.]
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
