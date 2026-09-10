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
      <section className="studio-grid border-b border-line bg-mint py-16 sm:py-24">
        <Container className="max-w-5xl">
          <Reveal>
            {route.eyebrow && <Eyebrow>{route.eyebrow}</Eyebrow>}
            <HeadlineDot as="h1" className="mt-5 max-w-4xl">
              {route.h1}
            </HeadlineDot>
            {intro && <div className="mt-7 max-w-3xl text-lg leading-8 text-ink/75 sm:text-xl">{intro}</div>}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
