import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/sandhoff-digital-logo-farbig.svg.asset.json";
import { Container } from "./primitives";
import { services } from "@/lib/site-routes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const primaryNav = [
  { to: "/preise", label: "Preise" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/ratgeber", label: "Ratgeber" },
  { to: "/ueber", label: "Über" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const reduceHeader = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 no-underline hover:no-underline"
          aria-label="sandhoff.digital Startseite"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={logoAsset.url}
            alt="sandhoff.digital"
            className="h-6 w-auto sm:h-7"
            width={220}
            height={28}
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/leistungen"
              className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink no-underline hover:bg-mint hover:no-underline"
              activeProps={{ className: "bg-mint" }}
            >
              Leistungen
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="inline-flex"
              >
                <ChevronDown className="h-4 w-4" aria-hidden />
              </motion.span>
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  key="services-dropdown"
                  className="absolute left-0 top-full w-72 pt-2"
                  initial={reduceHeader ? false : { opacity: 0, y: -6 }}
                  animate={reduceHeader ? undefined : { opacity: 1, y: 0 }}
                  exit={reduceHeader ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ul className="surface-card overflow-hidden p-2 shadow-lg">
                    {services.map((s, i) => (
                      <motion.li
                        key={s.path}
                        initial={reduceHeader ? false : { opacity: 0, x: -6 }}
                        animate={reduceHeader ? undefined : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: reduceHeader ? 0 : 0.03 * i }}
                      >
                        <Link
                          to={s.path}
                          className="block rounded-md px-3 py-2 text-sm text-ink no-underline hover:bg-mint/50 hover:no-underline"
                        >
                          {s.title}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink no-underline hover:bg-mint hover:no-underline"
              activeProps={{ className: "bg-mint" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full bg-ink px-5 text-paper hover:bg-amber">
            <Link to="/digital-check" className="no-underline hover:no-underline">Digital-Check starten</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-line lg:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              <Link
                to="/leistungen"
                className="rounded-md px-3 py-2 text-sm font-medium text-ink no-underline"
                onClick={() => setMobileOpen(false)}
              >
                Leistungen (Übersicht)
              </Link>
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="rounded-md px-3 py-2 pl-6 text-sm text-ink/80 no-underline"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
              {primaryNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-md px-3 py-2 text-sm font-medium text-ink no-underline"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/digital-check"
                className={cn(
                  "mt-2 inline-flex items-center justify-center rounded-md bg-petrol px-4 py-2 text-sm font-medium text-paper no-underline",
                )}
                onClick={() => setMobileOpen(false)}
              >
                Digital-Check starten
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
