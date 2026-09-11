/**
 * Erzeugt einen statischen Export der Website für klassisches Webhosting
 * (zum Beispiel Serverprofis, Plesk, Apache).
 *
 * Aufruf:  bun run build:static
 * Ergebnis: Ordner "static-export" mit allen HTML-Dateien, Assets,
 *           sitemap.xml, robots.txt und .htaccess.
 *
 * Formularversand und Live-Demos laufen weiter über die von Lovable
 * betriebene Adresse, die in VITE_API_BASE hinterlegt ist.
 */
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const out = resolve(root, "static-export");

const apiBase = process.env.VITE_API_BASE;
if (!apiBase) {
  console.error(
    "\nVITE_API_BASE fehlt.\nBeispiel: VITE_API_BASE=https://sandhoff-digital.lovable.app bun run build:static\n",
  );
  process.exit(1);
}

console.log(`\n[static] Build mit VITE_API_BASE=${apiBase}`);
const build = spawnSync("bunx", ["vite", "build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, VITE_API_BASE: apiBase },
});
if (build.status !== 0) process.exit(build.status ?? 1);

const client = resolve(root, "dist/client");
if (!existsSync(client)) {
  console.error("[static] dist/client wurde nicht erzeugt.");
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(client, out, { recursive: true });

/* ------------------------------------------------------------- sitemap.xml */

const { allRoutes } = await import(resolve(root, "src/lib/site-routes.ts"));
const { articles } = await import(resolve(root, "src/lib/ratgeber.ts"));
const { SITE_URL } = await import(resolve(root, "src/lib/site.ts"));

const entries = [
  ...allRoutes.map((r) => ({ loc: r.path, changefreq: r.changefreq, priority: r.priority })),
  ...articles.map((a) => ({ loc: a.path, changefreq: "monthly", priority: "0.6" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((r) =>
    [
      `  <url>`,
      `    <loc>${SITE_URL}${r.loc}</loc>`,
      r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : null,
      r.priority ? `    <priority>${r.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve(out, "sitemap.xml"), xml, "utf8");

/* ----------------------------------------------------------------- .htaccess */

const htaccess = `# sandhoff.digital, statischer Export
Options -MultiViews
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On

  # Immer https und ohne www
  RewriteCond %{HTTPS} !=on
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
  RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
  RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

  # Vorhandene Dateien und Ordner direkt ausliefern
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # /pfad auf die vorgerenderte /pfad/index.html abbilden
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.*[^/])$ /$1/index.html [L]

  # Alles andere auf die Startseite, der Router übernimmt
  RewriteRule ^ /index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css|woff2|webp|jpg|jpeg|png|svg|mp4)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;

writeFileSync(resolve(out, ".htaccess"), htaccess, "utf8");

console.log(`\n[static] Fertig. Inhalt von "static-export" in das Web-Verzeichnis hochladen.\n`);
