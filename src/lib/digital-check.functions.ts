import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const ALLOWED_TOPICS = [
  "KI-Automatisierung",
  "Webdesign",
  "SEO",
  "KI-Sichtbarkeit",
] as const;

const submissionSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(120),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse an.")
    .max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  website: z
    .string()
    .trim()
    .max(255)
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => !val || /^https?:\/\/.+\..+/i.test(val),
      "Bitte vollständige URL angeben (mit https://).",
    ),
  topics: z.array(z.enum(ALLOWED_TOPICS)).max(4).default([]),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihre Ausgangslage in ein bis zwei Sätzen.")
    .max(4000),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Bitte bestätigen Sie die Datenschutzerklärung." }),
  }),
  source: z.enum(["digital-check", "kontakt"]).default("digital-check"),
  // Honeypot: must be empty. Bots typically fill every field.
  website_url: z.string().max(0).optional().or(z.literal("")),
});

export type DigitalCheckInput = z.input<typeof submissionSchema>;

async function hashIp(ip: string | undefined): Promise<string | null> {
  if (!ip) return null;
  const salt = process.env.SUBMISSION_IP_SALT ?? "sandhoff-digital";
  const data = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const submitDigitalCheck = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const forwardedFor = getRequestHeader("x-forwarded-for") ?? undefined;
    const ip = forwardedFor?.split(",")[0]?.trim();
    const userAgent = getRequestHeader("user-agent") ?? null;
    const ipHash = await hashIp(ip);

    const { error } = await supabaseAdmin
      .from("digital_check_submissions")
      .insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        website: data.website || null,
        topics: data.topics,
        message: data.message,
        source: data.source,
        user_agent: userAgent,
        ip_hash: ipHash,
      });

    if (error) {
      console.error("[submitDigitalCheck] insert failed", error);
      throw new Error("Anfrage konnte nicht gespeichert werden. Bitte später erneut versuchen.");
    }

    return { ok: true as const };
  });
