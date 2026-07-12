import type { ReactNode } from "react";
import type { SiteRoute } from "@/lib/site-routes";
import { Container, Eyebrow, HeadlineDot } from "./primitives";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { Reveal } from "@/components/motion/reveal";

interface PageHeaderProps {
  route: SiteRoute;
  crumbs?: Crumb[];
  intro?: ReactNode;
}

export function PageHeader({ route, crumbs, intro }: PageHeaderProps) {
  return (
    <>
      {crumbs && crumbs.length > 0 && <Breadcrumbs items={crumbs} />}
      <section className="border-b border-line bg-paper py-14 sm:py-20">
        <Container className="max-w-4xl">
          <Reveal>
            {route.eyebrow && <Eyebrow>{route.eyebrow}</Eyebrow>}
            <HeadlineDot as="h1" className="mt-3">
              {route.h1}
            </HeadlineDot>
            {intro && <div className="mt-6 text-lg text-ink/80">{intro}</div>}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
