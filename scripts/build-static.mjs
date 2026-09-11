/**
 * Erzeugt einen statischen Export der Website für klassisches Webhosting
 * (zum Beispiel Serverprofis, Plesk, Apache).
 *
 * Aufruf:  npm run build
 * Ergebnis: Ordner "dist" mit allen HTML-Dateien, Assets,
 *           sitemap.xml, robots.txt und .htaccess.
 *
 * Formularversand und Live-Demos laufen weiter über die von Lovable
 * betriebene Adresse, die in VITE_API_BASE hinterlegt ist.
 */
import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, extname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const buildDir = resolve(root, "dist");
const out = resolve(root, ".static-export-tmp");
const legacyOut = resolve(root, "static-export");
const assetMetadataDir = resolve(root, "src/assets");
const assetOrigin = "https://id-preview--e266328c-1aba-4d1e-8b6c-688d05b93ea0.lovable.app";
const defaultApiBase =
  "https://project--e266328c-1aba-4d1e-8b6c-688d05b93ea0-dev.lovable.app";

const apiBase = process.env.VITE_API_BASE || defaultApiBase;

// Alte Zwischenstände dürfen bei der späteren Ausgabesuche nicht als
// vermeintlich neuer Build erkannt werden.
rmSync(out, { recursive: true, force: true });
rmSync(legacyOut, { recursive: true, force: true });

console.log(`\n[static] Build mit VITE_API_BASE=${apiBase}`);
const viteEntry = resolve(root, "node_modules/vite/bin/vite.js");
const build = spawnSync(process.execPath, [viteEntry, "build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, VITE_API_BASE: apiBase },
});
if (build.status !== 0) process.exit(build.status ?? 1);

function countHtmlPages(directory) {
  if (!existsSync(directory) || !statSync(directory).isDirectory()) return 0;
  return readdirSync(directory, { withFileTypes: true }).reduce((count, entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return count + countHtmlPages(path);
    return count + (entry.name === "index.html" ? 1 : 0);
  }, 0);
}

// TanStack/Vite schreibt lokal nach dist/client. Manche CI- und Repo2web-
// Umgebungen verwenden dagegen Nitros .output/public, dist/public oder direkt
// dist. Entscheidend ist nicht der Ordnername, sondern der tatsächlich
// erzeugte statische Webauftritt mit index.html und Assets.
const outputCandidates = [
  resolve(buildDir, "client"),
  resolve(root, ".output/public"),
  resolve(buildDir, "public"),
  resolve(root, ".output/client"),
  resolve(root, "build/client"),
  resolve(root, "build/public"),
  buildDir,
]
  .map((directory) => ({ directory, pages: countHtmlPages(directory) }))
  .filter(({ directory, pages }) =>
    pages > 0 && existsSync(resolve(directory, "index.html")),
  )
  .sort((a, b) => b.pages - a.pages);

const client = outputCandidates[0]?.directory;
if (!client) {
  console.error(
    "[static] Der Build war erfolgreich, aber es wurde kein statischer Webordner mit index.html gefunden.",
  );
  process.exit(1);
}

console.log(
  `[static] Browser-Ausgabe gefunden: ${client.replace(`${root}/`, "")} (${countHtmlPages(client)} Seiten)`,
);
mkdirSync(out, { recursive: true });
cpSync(client, out, { recursive: true });

/* ------------------------------------------ Lovable-Medien lokal übernehmen */

const assetFiles = readdirSync(assetMetadataDir)
  .filter((name) => name.endsWith(".asset.json"))
  .map((name) => resolve(assetMetadataDir, name));
const replacements = new Map();
const mediaDir = resolve(out, "media");
mkdirSync(mediaDir, { recursive: true });

for (const metadataPath of assetFiles) {
  const metadata = JSON.parse(readFileSync(metadataPath, "utf8"));
  if (typeof metadata.url !== "string" || !metadata.url.startsWith("/__l5e/")) continue;

  const originalName = basename(new URL(metadata.url, assetOrigin).pathname);
  const localName = `${String(metadata.asset_id).slice(0, 8)}-${originalName}`;
  const localUrl = `/media/${localName}`;
  const target = resolve(mediaDir, localName);
  const response = await fetch(new URL(metadata.url, assetOrigin));

  if (!response.ok) {
    console.error(`[static] Medium konnte nicht geladen werden: ${metadata.url}`);
    process.exit(1);
  }

  writeFileSync(target, Buffer.from(await response.arrayBuffer()));
  replacements.set(metadata.url, localUrl);
}

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

for (const file of walk(out)) {
  if (![".html", ".js", ".css", ".json", ".xml", ".txt"].includes(extname(file))) continue;
  let content = readFileSync(file, "utf8");
  let changed = false;
  for (const [remoteUrl, localUrl] of replacements) {
    if (!content.includes(remoteUrl)) continue;
    content = content.replaceAll(remoteUrl, localUrl);
    changed = true;
  }
  if (changed) writeFileSync(file, content, "utf8");
}

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

// Repo2web erwartet – wie beim SLT-Projekt – den fertigen Webauftritt direkt
// im Buildordner. Die interne Serverausgabe wird deshalb erst jetzt ersetzt.
rmSync(buildDir, { recursive: true, force: true });
renameSync(out, buildDir);
rmSync(legacyOut, { recursive: true, force: true });

console.log(`\n[static] Fertig. "dist" ist der vollständige FTP-Upload.\n`);
