import { createServerFn } from "@tanstack/react-start";
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

const NOTIFICATION_RECIPIENT = "luca@sandhoff.digital";
const SENDER = "sandhoff.digital Website <website@sandhoff.digital>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  return `<tr>
  <td style="padding:6px 12px 6px 0;vertical-align:top;color:#666;font-size:13px;white-space:nowrap;">${label}</td>
  <td style="padding:6px 0;font-size:14px;">${escapeHtml(value) || "–"}</td>
</tr>`;
}

export const submitDigitalCheck = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => submissionSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("[submitDigitalCheck] RESEND_API_KEY is not configured");
      throw new Error(
        "Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen.",
      );
    }

    const isDigitalCheck = data.source === "digital-check";
    const subject = isDigitalCheck
      ? `Neuer Digital-Check: ${data.name}${data.company ? ` (${data.company})` : ""}`
      : `Neue Kontaktanfrage: ${data.name}${data.company ? ` (${data.company})` : ""}`;

    const html = `
<h2 style="font-family:sans-serif;font-size:18px;margin:0 0 16px;">
  ${isDigitalCheck ? "Neue Anfrage über den Digital-Check" : "Neue Nachricht über das Kontaktformular"}
</h2>
<table style="font-family:sans-serif;border-collapse:collapse;">
  ${row("Name", data.name)}
  ${row("E-Mail", data.email)}
  ${row("Unternehmen", data.company ?? "")}
  ${row("Website", data.website ?? "")}
  ${row("Themen", data.topics.length ? data.topics.join(", ") : "")}
  ${row("Zeitpunkt", new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" }))}
</table>
<p style="font-family:sans-serif;font-size:13px;color:#666;margin:20px 0 4px;">Nachricht</p>
<p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;margin:0;">${escapeHtml(data.message)}</p>
<hr style="border:none;border-top:1px solid #ddd;margin:24px 0;" />
<p style="font-family:sans-serif;font-size:12px;color:#999;margin:0;">
  Zugestellt über das Formular auf sandhoff.digital. Antworten Sie direkt auf diese E-Mail, um den Absender zu erreichen.
</p>`;

    const text = [
      isDigitalCheck
        ? "Neue Anfrage über den Digital-Check"
        : "Neue Nachricht über das Kontaktformular",
      "",
      `Name: ${data.name}`,
      `E-Mail: ${data.email}`,
      data.company ? `Unternehmen: ${data.company}` : null,
      data.website ? `Website: ${data.website}` : null,
      data.topics.length ? `Themen: ${data.topics.join(", ")}` : null,
      "",
      "Nachricht:",
      data.message,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SENDER,
        to: [NOTIFICATION_RECIPIENT],
        reply_to: data.email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`[submitDigitalCheck] Resend error [${response.status}]: ${body}`);
      throw new Error(
        "Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen oder direkt an luca@sandhoff.digital schreiben.",
      );
    }

    return { ok: true as const };
  });
