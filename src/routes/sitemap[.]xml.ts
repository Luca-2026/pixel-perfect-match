import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { allRoutes } from "@/lib/site-routes";
import { articles } from "@/lib/ratgeber";

// TODO: sobald Domain live ist, hier durch "https://sandhoff.digital" ersetzen.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const siteEntries = allRoutes.map((r) => ({
          loc: r.path,
          changefreq: r.changefreq,
          priority: r.priority,
        }));
        const articleEntries = articles.map((a) => ({
          loc: a.path,
          changefreq: "monthly" as const,
          priority: "0.6",
        }));

        const urls = [...siteEntries, ...articleEntries].map((r) => {
          const parts = [
            `  <url>`,
            `    <loc>${BASE_URL}${r.loc}</loc>`,
            r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : null,
            r.priority ? `    <priority>${r.priority}</priority>` : null,
            `  </url>`,
          ];
          return parts.filter(Boolean).join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
