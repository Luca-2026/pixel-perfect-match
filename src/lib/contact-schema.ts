import { z } from "zod";

export const ALLOWED_TOPICS = [
  "KI-Automatisierung",
  "Webdesign",
  "SEO",
  "KI-Sichtbarkeit",
] as const;

export const submissionSchema = z.object({
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
  // Honeypot: bleibt bei echten Besuchern leer. Bots füllen üblicherweise
  // jedes Feld. Gefüllte Einsendungen werden serverseitig still verworfen.
  website_url: z.string().max(200).optional(),
});

export type DigitalCheckInput = z.input<typeof submissionSchema>;
export type DigitalCheckData = z.output<typeof submissionSchema>;
