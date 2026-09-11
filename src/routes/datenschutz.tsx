import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";
import { datenschutzBlocks, type Block, type Inline } from "@/lib/datenschutz";

const route = findRoute("/datenschutz")!;

export const Route = createFileRoute("/datenschutz")({
  head: () => routeHead(route),
  component: Datenschutz,
});

function renderInline(content: Inline[]) {
  return content.map((part, index) => {
    if (part.kind === "strong") {
      return (
        <strong key={index} className="font-semibold text-ink">
          {part.text}
        </strong>
      );
    }
    if (part.kind === "link") {
      const isAnchor = part.href.startsWith("#");
      return (
        <a
          key={index}
          href={part.href}
          {...(isAnchor
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
          className="text-petrol underline decoration-petrol/30 underline-offset-4 transition-colors hover:decoration-petrol"
        >
          {part.text}
        </a>
      );
    }
    const segments = part.text.split("\n");
    return (
      <span key={index}>
        {segments.map((segment, i) => (
          <span key={i}>
            {i > 0 ? <br /> : null}
            {segment}
          </span>
        ))}
      </span>
    );
  });
}

function renderBlock(block: Block, index: number) {
  switch (block.kind) {
    case "heading":
      if (block.level === 1) return null;
      return (
        <h2
          key={index}
          id={block.id}
          className="mt-12 scroll-mt-28 font-display text-xl font-semibold text-ink first:mt-0 sm:text-2xl"
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mt-4 leading-relaxed">
          {renderInline(block.content)}
        </p>
      );
    case "list": {
      const items = block.items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          {renderInline(item)}
        </li>
      ));
      return block.ordered ? (
        <ol key={index} className="mt-4 list-decimal space-y-2 pl-5 marker:text-ink/40">
          {items}
        </ol>
      ) : (
        <ul key={index} className="mt-4 list-disc space-y-2 pl-5 marker:text-ink/40">
          {items}
        </ul>
      );
    }
    case "back-link":
      return (
        <p key={index} className="mt-4">
          <a
            href={block.href}
            className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-petrol transition-opacity hover:opacity-70"
          >
            {block.text} &uarr;
          </a>
        </p>
      );
    case "rule":
      return <hr key={index} className="mt-12 border-line" />;
    default:
      return null;
  }
}

function Datenschutz() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/datenschutz", label: "Datenschutz" }]}
        intro={
          <p>
            Diese Datenschutzerklärung informiert Sie darüber, welche
            personenbezogenen Daten wir beim Besuch von sandhoff.digital, bei
            der Kontaktaufnahme und im Rahmen unserer Geschäftsbeziehungen
            verarbeiten, auf welcher Rechtsgrundlage dies geschieht und welche
            Rechte Ihnen zustehen. Stand: 11. September 2026.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-3xl">
          <div className="text-ink/85">
            {datenschutzBlocks.map((block, index) => renderBlock(block, index))}
          </div>
        </Container>
      </Section>
    </>
  );
}
