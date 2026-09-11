# Website bei Serverprofis hochladen

Die Seiten liegen als fertige HTML-Dateien auf Ihrem Webspace. Formularversand
und die Live-Demos laufen weiter über die von Lovable betriebene Adresse.

## 1. Export erzeugen

```bash
npm run build
```

Das ist derselbe Standard-Buildweg wie beim SLT-Rental-Projekt. Eine zusätzliche
Umgebungsvariable oder ein Sonderbefehl ist für Repo2web nicht erforderlich.

Ergebnis: Ordner `dist` mit allen Seiten, Bildern, Schriften,
`sitemap.xml`, `robots.txt` und einer fertigen `.htaccess`.

## 2. Hochladen

Den **Inhalt** von `dist` (inklusive der versteckten Datei
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
- Die im Build hinterlegte Lovable-Adresse muss erreichbar bleiben, weil sie
  Formulare und Live-Demos verarbeitet.
- E-Mails laufen über Resend. Die Domain muss dort verifiziert bleiben.
