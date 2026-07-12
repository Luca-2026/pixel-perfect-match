import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/layout/primitives";
import { services, mainPages } from "@/lib/site-routes";

function NotFoundComponent() {
  const quickLinks = mainPages.filter((p) =>
    ["/leistungen", "/preise", "/digital-check", "/ratgeber", "/kontakt"].includes(p.path),
  );
  return (
    <div className="flex flex-1 items-center bg-paper py-24">
      <Container className="max-w-3xl">
        <p className="eyebrow">Fehler 404</p>
        <h1 className="headline-dot mt-3">Seite nicht gefunden</h1>
        <p className="mt-4 text-lg text-ink/80">
          Die gewünschte Seite existiert nicht oder wurde verschoben. Vielleicht
          hilft einer der folgenden Wege weiter.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[...quickLinks, ...services].map((r) => (
            <Link
              key={r.path}
              to={r.path}
              className="surface-card block px-4 py-3 no-underline transition-colors hover:bg-mint/40 hover:no-underline"
            >
              <span className="text-sm font-medium text-ink">{r.title}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{r.path}</span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex flex-1 items-center bg-paper py-24">
      <Container className="max-w-2xl">
        <p className="eyebrow">Es ist etwas schiefgelaufen</p>
        <h1 className="headline-dot mt-3">Diese Seite konnte nicht geladen werden</h1>
        <p className="mt-4 text-ink/80">
          Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center rounded-md bg-petrol px-4 py-2 text-sm font-medium text-paper hover:bg-ink"
          >
            Erneut versuchen
          </button>
          <Link
            to="/"
            className="inline-flex items-center rounded-md border border-line bg-paper px-4 py-2 text-sm font-medium text-ink no-underline hover:bg-mint/40 hover:no-underline"
          >
            Zur Startseite
          </Link>
        </div>
      </Container>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#122A31" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      // TODO: apple-touch-icon.png (180x180) sobald geliefert ergänzen.
      // TODO: icon-192.png und icon-512.png plus Web-App-Manifest sobald geliefert.
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600&family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <SiteHeader />
        <main className="flex flex-1 flex-col">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
