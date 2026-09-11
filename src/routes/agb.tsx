import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/primitives";
import { findRoute } from "@/lib/site-routes";
import { routeHead } from "@/lib/route-head";
import { agbBlocks, type Block, type Inline } from "@/lib/agb";
import agbPdf from "@/assets/agb.pdf.asset.json";

const route = findRoute("/agb")!;

export const Route = createFileRoute("/agb")({
  head: () => routeHead(route),
  component: Agb,
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
      return (
        <a
          key={index}
          href={part.href}
          className="text-petrol underline decoration-petrol/30 underline-offset-4 transition-colors hover:decoration-petrol"
        >
          {part.text}
        </a>
      );
    }
    return <span key={index}>{part.text}</span>;
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

function Agb() {
  return (
    <>
      <PageHeader
        route={route}
        crumbs={[{ to: "/agb", label: "AGB" }]}
        intro={
          <p>
            Unsere Allgemeinen Geschäftsbedingungen gelten ausschließlich
            gegenüber Unternehmern. Sie können den vollständigen Text hier
            lesen oder als PDF herunterladen.
          </p>
        }
      />

      <Section tone="paper">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-4 rounded-md border border-line bg-white/60 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-base font-semibold text-ink">
                AGB als PDF
              </p>
              <p className="mt-1 text-sm text-ink/70">
                Stand 11. September 2026, Version 1.0
              </p>
            </div>
            <a
              href={agbPdf.url}
              download="AGB_sandhoff-digital_Stand-2026-09-11.pdf"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-petrol px-5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              PDF herunterladen
            </a>
          </div>

          <div className="mt-12 text-ink/85">
            {agbBlocks.map((block, index) => renderBlock(block, index))}
          </div>
        </Container>
      </Section>
    </>
  );
}
