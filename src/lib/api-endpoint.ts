/**
 * Basis-URL für die dynamischen Endpunkte (Formular, Live-Demos).
 *
 * Läuft die Seite auf dem Lovable Hosting, ist die Basis leer und alle Aufrufe
 * gehen an den eigenen Ursprung. Wird nur das Frontend als statischer Export
 * bei einem klassischen Webhosting abgelegt, zeigt VITE_API_BASE auf die von
 * Lovable betriebene Domain, die die Endpunkte bereitstellt.
 */
const RAW_BASE = import.meta.env.VITE_API_BASE as string | undefined;

export const API_BASE = RAW_BASE?.replace(/\/+$/, "") ?? "";

export function apiUrl(path: string): string {
  return `${API_BASE}${path}`;
}

/** POST mit JSON, deutsche Fehlermeldung aus der Antwort übernehmen. */
export async function postJson<T>(path: string, body: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(apiUrl(path), {
      method: "POST",
      // Bewusst text/plain: damit gilt der Aufruf als einfache Anfrage und der
      // Browser verzichtet auf die Preflight-Abfrage. Der Server liest den
      // Rumpf ohnehin als JSON.
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error(
      "Verbindung fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
    );
  }

  const payload = (await response.json().catch(() => null)) as
    | { error?: string }
    | null;

  if (!response.ok) {
    throw new Error(
      payload?.error ?? "Anfrage fehlgeschlagen. Bitte später erneut versuchen.",
    );
  }

  return payload as T;
}
