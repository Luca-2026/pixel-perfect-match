import { useId } from "react";
import { Eyebrow, HeadlineDot } from "@/components/layout/primitives";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  eyebrow?: string;
  headline?: string;
  items: readonly FaqItem[];
}

/**
 * Sichtbare FAQ mit deckungsgleichem JSON-LD (FAQPage-Schema).
 * Kein <details>-Aufklappen: alle Antworten sind direkt lesbar,
 * damit sowohl Menschen als auch KI-Antwortsysteme sofort finden,
 * was sie brauchen.
 */
export function Faq({ eyebrow = "Häufige Fragen", headline = "Was Kundinnen und Kunden vorher wissen wollen", items }: FaqProps) {
  const id = useId();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <HeadlineDot as="h2" className="mt-3 max-w-3xl">
        {headline}
      </HeadlineDot>
      <dl className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item, i) => (
          <div key={`${id}-${i}`} className="grid gap-3 py-6 md:grid-cols-[1fr_2fr] md:gap-10">
            <dt className="font-display text-lg font-semibold text-ink">{item.q}</dt>
            <dd className="text-ink/80">{item.a}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
