import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Container } from "./primitives";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  to: string;
  label: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ to: "/", label: "Start" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.to}`,
    })),
  };
  return (
    <div className="border-b border-line bg-paper">
      <Container>
        <nav aria-label="Brotkrumen" className="flex items-center gap-1 py-3 text-xs">
          <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
            {trail.map((c, i) => {
              const isLast = i === trail.length - 1;
              return (
                <li key={c.to} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden />}
                  {isLast ? (
                    <span aria-current="page" className="text-ink">
                      {c.label}
                    </span>
                  ) : (
                    <Link to={c.to} className="text-muted-foreground no-underline hover:text-ink hover:underline">
                      {c.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
