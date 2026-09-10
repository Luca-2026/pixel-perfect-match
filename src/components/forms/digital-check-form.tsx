import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitDigitalCheck } from "@/lib/digital-check.functions";
import { Button } from "@/components/ui/button";

type Source = "digital-check" | "kontakt";

interface DigitalCheckFormProps {
  source: Source;
  submitLabel?: string;
}

const TOPICS = ["KI-Automatisierung", "Webdesign", "SEO", "KI-Sichtbarkeit"] as const;

export function DigitalCheckForm({
  source,
  submitLabel = "Anfrage senden",
}: DigitalCheckFormProps) {
  const submit = useServerFn(submitDigitalCheck);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const topics = formData.getAll("topics").map(String);

    try {
      await submit({
        data: {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          company: String(formData.get("company") ?? ""),
          website: String(formData.get("website") ?? ""),
          topics: topics as (typeof TOPICS)[number][],
          message: String(formData.get("message") ?? ""),
          privacy: formData.get("privacy") === "on" ? true : (false as unknown as true),
          source,
          website_url: String(formData.get("website_url") ?? ""),
        },
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Anfrage konnte nicht gesendet werden. Bitte später erneut versuchen.";
      setErrorMessage(message);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="surface-card flex items-start gap-4 border-mint/60 bg-mint/15 p-6"
      >
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-petrol" aria-hidden />
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            Vielen Dank, Ihre Anfrage ist angekommen.
          </h3>
          <p className="mt-2 text-sm text-ink/80">
            Wir melden uns in der Regel innerhalb eines Werktags persönlich bei Ihnen.
            Kein Newsletter, keine Weitergabe an Dritte.
          </p>
        </div>
      </div>
    );
  }

  const loading = status === "loading";
  const inputClass =
    "mt-2 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/20 disabled:opacity-60";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Website URL
          <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            disabled={loading}
            className={inputClass}
            placeholder="Ihr vollständiger Name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Unternehmen</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            disabled={loading}
            className={inputClass}
            placeholder="Name Ihres Unternehmens"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">E-Mail</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            disabled={loading}
            className={inputClass}
            placeholder="name@firma.de"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Website (optional)</span>
          <input
            type="url"
            name="website"
            autoComplete="url"
            disabled={loading}
            className={inputClass}
            placeholder="https://ihre-firma.de"
          />
        </label>
      </div>

      <fieldset className="rounded-md border border-line p-4">
        <legend className="px-1 text-sm font-medium text-ink">
          Worauf sollen wir schauen?
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <label key={topic} className="flex items-center gap-2 text-sm text-ink/85">
              <input
                type="checkbox"
                name="topics"
                value={topic}
                disabled={loading}
                className="h-4 w-4 rounded border-line text-petrol focus:ring-petrol/30"
              />
              {topic}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="text-sm font-medium text-ink">Ausgangslage</span>
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          disabled={loading}
          className={inputClass}
          placeholder="Was läuft heute gut, wo drückt der Schuh? Ein paar Sätze reichen."
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-ink/80">
        <input
          type="checkbox"
          name="privacy"
          required
          disabled={loading}
          className="mt-1 h-4 w-4 rounded border-line text-petrol focus:ring-petrol/30"
        />
        <span>
          Ich habe die{" "}
          <Link to="/datenschutz" className="text-petrol">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Kontaktaufnahme einverstanden.
        </span>
      </label>

      {status === "error" && errorMessage && (
        <p role="alert" className="rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          disabled={loading}
          size="lg"
          className="rounded-full bg-ink text-paper hover:bg-amber hover:text-ink"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
          {loading ? "Wird gesendet…" : submitLabel}
        </Button>
        <p className="text-xs text-ink/60">
          Antwort in der Regel innerhalb eines Werktags. Kein Newsletter.
        </p>
      </div>
    </form>
  );
}
