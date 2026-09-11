# Website bei Serverprofis hochladen

Die Seiten liegen als fertige HTML-Dateien auf Ihrem Webspace. Formularversand
und die Live-Demos laufen weiter über die von Lovable betriebene Adresse.

## 1. Export erzeugen

```bash
VITE_API_BASE=https://IHRE-LOVABLE-ADRESSE bun run build:static
```

`VITE_API_BASE` ist die veröffentlichte Lovable-Adresse des Projekts, zum
Beispiel `https://sandhoff-digital.lovable.app`. Diese Adresse verarbeitet die
Formulare und die Live-Demos. Sie darf nicht identisch mit der Domain sein, auf
der der statische Export liegt.

Ergebnis: Ordner `static-export` mit allen Seiten, Bildern, Schriften,
`sitemap.xml`, `robots.txt` und einer fertigen `.htaccess`.

## 2. Hochladen

Den **Inhalt** von `static-export` (inklusive der versteckten Datei
`.htaccess`) per FTP oder Plesk-Dateimanager in das Web-Verzeichnis der Domain
laden, üblicherweise `httpdocs`. Alte Dateien vorher entfernen.

Die `.htaccess` sorgt für saubere Adressen ohne `.html`, Weiterleitung auf
https und ohne www sowie für langlebiges Caching der Bilder und Schriften.

## 3. Nach dem Upload prüfen

- Startseite und einige Unterseiten aufrufen, auch direkt per Adresszeile
- `https://sandhoff.digital/sitemap.xml` und `/robots.txt` erreichbar
- Kontaktformular einmal testweise absenden
- Live-Demos auf `/leistungen/ki-automatisierung` einmal starten

## Wichtig

- Bei jeder inhaltlichen Änderung muss der Export neu erzeugt und erneut
  hochgeladen werden.
- Die Lovable-Adresse aus `VITE_API_BASE` muss veröffentlicht bleiben, sonst
  funktionieren Formulare und Demos nicht.
- E-Mails laufen über Resend. Die Domain muss dort verifiziert bleiben.
