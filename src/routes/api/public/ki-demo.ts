import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { contractInputSchema, quoteInputSchema } from "@/lib/ai-demo-data";
import { clientKey, fail, json, preflight } from "@/lib/http.server";

/**
 * Öffentlicher Endpunkt für die Live-Demos auf der Seite KI-Automatisierung.
 * Erreichbar auch von einem statisch gehosteten Frontend (CORS-Freigabe).
 */

const bodySchema = z.union([
  z.object({ action: z.literal("vertrag"), input: contractInputSchema }),
  z.object({ action: z.literal("angebot"), input: quoteInputSchema }),
]);

export const Route = createFileRoute("/api/public/ki-demo")({
  server: {
    handlers: {
      OPTIONS: ({ request }) => preflight(request),
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return fail(request, "Ungültige Anfrage.", 400);
        }

        const parsed = bodySchema.safeParse(raw);
        if (!parsed.success) return fail(request, "Ungültige Anfrage.", 400);

        const { analyzeContract, draftQuote, enforceRateLimit } = await import(
          "@/lib/ai-demo.server"
        );

        try {
          enforceRateLimit(clientKey(request));
        } catch (error) {
          return fail(request, (error as Error).message, 429);
        }

        try {
          const result =
            parsed.data.action === "vertrag"
              ? await analyzeContract(parsed.data.input.contract)
              : await draftQuote(parsed.data.input);
          return json(request, result);
        } catch (error) {
          const message =
            error instanceof Error && error.message
              ? error.message
              : "Die Live-Demo ist gerade nicht verfügbar.";
          return fail(request, message, 502);
        }
      },
    },
  },
});
