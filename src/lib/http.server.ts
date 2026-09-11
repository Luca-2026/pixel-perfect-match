/** Gemeinsame Helfer für die öffentlichen HTTP-Endpunkte. */

const ALLOWED_ORIGINS = [
  "https://sandhoff.digital",
  "https://www.sandhoff.digital",
  "http://localhost:8080",
];

function allowOrigin(request: Request): string | null {
  const origin = request.headers.get("origin");
  if (!origin) return null;
  if (ALLOWED_ORIGINS.includes(origin)) return origin;
  // Lovable Vorschau- und Veröffentlichungsdomains
  if (/^https:\/\/[a-z0-9-]+\.lovable\.app$/i.test(origin)) return origin;
  if (/^https:\/\/[a-z0-9.-]+\.lovableproject\.com$/i.test(origin)) return origin;
  return null;
}

export function corsHeaders(request: Request): Record<string, string> {
  const origin = allowOrigin(request);
  if (!origin) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export function preflight(request: Request): Response {
  return new Response(null, { status: 204, headers: corsHeaders(request) });
}

export function json(request: Request, data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders(request),
    },
  });
}

export function fail(request: Request, message: string, status = 400): Response {
  return json(request, { error: message }, status);
}

/** IP des Aufrufers, soweit über die üblichen Proxy-Header erkennbar. */
export function clientKey(request: Request): string {
  const headers = request.headers;
  return (
    headers.get("cf-connecting-ip") ||
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headers.get("x-real-ip") ||
    "unbekannt"
  );
}
