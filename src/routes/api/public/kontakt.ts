import { createFileRoute } from "@tanstack/react-router";
import { submissionSchema } from "@/lib/contact-schema";
import { clientKey, fail, json, preflight } from "@/lib/http.server";

/**
 * Öffentlicher Endpunkt für Kontakt- und Digital-Check-Formular.
 * Erreichbar auch von einem statisch gehosteten Frontend (CORS-Freigabe für
 * sandhoff.digital).
 */

const WINDOW_MS = 10 * 60 * 1000;
const PER_CLIENT = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const since = now - WINDOW_MS;
  const list = (hits.get(key) ?? []).filter((time) => time > since);
  if (list.length >= PER_CLIENT) return true;
  list.push(now);
  hits.set(key, list);
  if (hits.size > 500) {
    for (const [entry, times] of hits) {
      if (times.every((time) => time <= since)) hits.delete(entry);
    }
  }
  return false;
}

export const Route = createFileRoute("/api/public/kontakt")({
  server: {
    handlers: {
      OPTIONS: ({ request }) => preflight(request),
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return fail(request, "Ungültige Anfrage.", 400);
        }

        const parsed = submissionSchema.safeParse(body);
        if (!parsed.success) {
          const message =
            parsed.error.issues[0]?.message ?? "Bitte prüfen Sie Ihre Angaben.";
          return fail(request, message, 400);
        }

        // Honeypot: still verwerfen, damit Bots keinen Hinweis bekommen.
        if (parsed.data.website_url) return json(request, { ok: true });

        if (rateLimited(clientKey(request))) {
          return fail(
            request,
            "Es sind bereits mehrere Anfragen von Ihnen eingegangen. Bitte melden Sie sich direkt unter luca@sandhoff.digital.",
            429,
          );
        }

        try {
          const { sendSubmissionEmail } = await import("@/lib/contact.server");
          await sendSubmissionEmail(parsed.data);
        } catch (error) {
          const message =
            error instanceof Error && error.message
              ? error.message
              : "Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen.";
          return fail(request, message, 502);
        }

        return json(request, { ok: true });
      },
    },
  },
});
