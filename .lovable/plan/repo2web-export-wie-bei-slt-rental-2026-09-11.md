# Repo2web-Export wie bei SLT Rental

## Ziel
`npm run build` soll ohne Sonderbefehl einen vollständig befüllten Ordner `dist` erzeugen, den Repo2web als ZIP bereitstellt und der direkt per FTP zu Serverprofis hochgeladen werden kann.

## Umsetzung
- Den bestehenden TanStack-Build weiterhin intern für alle 24 vorgerenderten Seiten nutzen.
- Nach erfolgreichem Build den fertigen Browserinhalt aus `dist/client` an die Wurzel von `dist` verschieben.
- Die für Serverprofis unnötige Serverausgabe aus dem endgültigen `dist` entfernen.
- `sitemap.xml`, `robots.txt`, Schriften, Bilder, Videos, PDF und `.htaccess` in `dist` sicherstellen.
- Die feste veröffentlichte Lovable-Adresse für Formulare und Live-Demos als Standard hinterlegen, damit Repo2web keine zusätzliche Umgebungsvariable benötigt.
- `build:static` als kompatiblen Alias behalten.

## Prüfung
- `npm run build` in einer sauberen Ausgabe ausführen.
- Kontrollieren, dass `dist/index.html`, alle Unterseiten und `dist/assets` vorhanden sind und `dist/server` nicht mehr existiert.
- Den fertigen Ordner lokal als statische Website öffnen und Startseite, Unterseite, PDF-Link sowie Formularziel prüfen.
