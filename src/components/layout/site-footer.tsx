import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/sandhoff-digital-logo-farbig.svg.asset.json";
import { Container } from "./primitives";
import { services, legalPages } from "@/lib/site-routes";

const columns = [
  {
    heading: "Leistungen",
    links: [
      { to: "/leistungen", label: "Übersicht" },
      ...services.map((s) => ({ to: s.path, label: s.title })),
    ],
  },
  {
    heading: "Agentur",
    links: [
      { to: "/ueber", label: "Über" },
      { to: "/referenzen", label: "Referenzen" },
      { to: "/preise", label: "Preise" },
      { to: "/ratgeber", label: "Ratgeber" },
      { to: "/digital-check", label: "Digital-Check" },
    ],
  },
  {
    heading: "Standorte",
    links: [
      { to: "/digitalagentur-bonn", label: "Bonn" },
      { to: "/digitalagentur-koeln", label: "Köln" },
      { to: "/kontakt", label: "Kontakt" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          <div>
            {/* TODO: sobald sandhoff-digital-logo-invers.svg vorliegt, hier
                ausschließlich das Invers-Logo verwenden. Bis dahin greift der
                Filter, um das farbige Logo lesbar auf Tinte darzustellen. */}
            <img
              src={logoAsset.url}
              alt="sandhoff.digital"
              className="h-7 w-auto brightness-0 invert"
              width={220}
              height={28}
            />
            <p className="mt-4 max-w-sm text-sm text-paper/70">
              Digitalagentur für den Mittelstand. KI, Web und SEO mit messbaren
              Ergebnissen zum Festpreis.
            </p>
            <address className="mt-6 not-italic text-sm text-paper/70">
              [Adresse folgt aus Impressum]
              <br />
              [Telefonnummer folgt]
              <br />
              [E-Mail-Adresse folgt]
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow text-paper/60">{col.heading}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-paper/85 no-underline hover:text-paper hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} sandhoff.digital. Alle Rechte vorbehalten.</p>
          <ul className="flex flex-wrap gap-4">
            {legalPages.map((p) => (
              <li key={p.path}>
                <Link to={p.path} className="text-paper/70 no-underline hover:text-paper hover:underline">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
