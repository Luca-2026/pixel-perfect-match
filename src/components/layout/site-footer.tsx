import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/sandhoff-digital-logo-farbig.svg.asset.json";
import { ArrowUpRight } from "lucide-react";
import { Container, HeadlineDot } from "./primitives";
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
      <Container className="py-16 sm:py-20">
        <div className="border-b border-paper/15 pb-12 sm:pb-16">
          <p className="eyebrow text-amber">Nächster sinnvoller Schritt</p>
          <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <HeadlineDot as="h2" className="max-w-3xl text-paper">
              Finden wir heraus, was digital wirklich Wirkung bringt
            </HeadlineDot>
            <Link
              to="/digital-check"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink no-underline hover:bg-amber hover:no-underline"
            >
              Digital-Check starten
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <img
              src={logoAsset.url}
              alt="sandhoff.digital"
              loading="lazy"
              decoding="async"
              className="h-7 w-auto brightness-0 invert"
              width={220}
              height={28}
            />
            <p className="mt-4 max-w-sm text-sm text-paper/70">
              KI, Webdesign und Sichtbarkeit für kleine und mittelständische
              Unternehmen. Persönlich geführt von Luca Sandhoff.
            </p>
            <address className="mt-6 not-italic text-sm text-paper/70">
              Marienforster Weg 2
              <br />
              53343 Wachtberg
              <br />
              <a href="tel:+4922876388805" className="text-paper/70">0228 763 888 05</a>
              <br />
              <a href="mailto:luca@sandhoff.digital" className="text-paper/70">luca@sandhoff.digital</a>
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
                        className="inline-flex min-h-11 items-center py-2 text-paper/85 no-underline hover:text-paper hover:underline"
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
                <Link to={p.path} className="inline-flex min-h-11 items-center py-2 text-paper/70 no-underline hover:text-paper hover:underline">
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
