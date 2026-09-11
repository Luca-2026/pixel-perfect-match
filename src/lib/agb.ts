import raw from "@/content/agb.md?raw";

export type Inline =
  | { kind: "text"; text: string }
  | { kind: "strong"; text: string }
  | { kind: "link"; text: string; href: string };

export type Block =
  | { kind: "heading"; level: 1 | 2; text: string; id?: string }
  | { kind: "paragraph"; content: Inline[] }
  | { kind: "list"; ordered: boolean; items: Inline[][] }
  | { kind: "back-link"; href: string; text: string }
  | { kind: "rule" };

const ANCHOR_RE = /<a id="([^"]+)"><\/a>/;

function parseInline(text: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ kind: "text", text: text.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ kind: "strong", text: m[1] });
    else out.push({ kind: "link", text: m[2]!, href: m[3]! });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ kind: "text", text: text.slice(last) });
  return out;
}

function stripListMarker(line: string): string {
  return line.replace(/^\s*(?:[-*]|\d+\.)\s+/, "");
}

export function parseAgb(source: string): Block[] {
  const lines = source.split("\n");
  const blocks: Block[] = [];
  let pendingId: string | undefined;
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph
      .reduce((acc, part) => (acc === "" || acc.endsWith("\n") ? acc + part : `${acc} ${part}`), "")
      .trim();
    paragraph = [];
    if (!text) return;
    const backLink = /^\[([^\]]+)\]\((#[^)]+)\)$/.exec(text);
    if (backLink) {
      blocks.push({ kind: "back-link", text: backLink[1]!, href: backLink[2]! });
      return;
    }
    blocks.push({ kind: "paragraph", content: parseInline(text) });
  };

  const flushList = () => {
    if (!list) return;
    blocks.push({
      kind: "list",
      ordered: list.ordered,
      items: list.items.map((item) => parseInline(item)),
    });
    list = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/, "");

    const anchor = ANCHOR_RE.exec(line);
    if (anchor) {
      flushParagraph();
      flushList();
      pendingId = anchor[1];
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.trim() === "---") {
      flushParagraph();
      flushList();
      blocks.push({ kind: "rule" });
      continue;
    }

    const heading = /^(#{1,2})\s+(.*)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({
        kind: "heading",
        level: heading[1]!.length as 1 | 2,
        text: heading[2]!.trim(),
        id: pendingId,
      });
      pendingId = undefined;
      continue;
    }

    const bullet = /^\s*[-*]\s+/.test(line);
    const numbered = /^\s*\d+\.\s+/.test(line);
    if (bullet || numbered) {
      flushParagraph();
      const ordered = numbered;
      if (list && list.ordered !== ordered) flushList();
      if (!list) list = { ordered, items: [] };
      list.items.push(stripListMarker(line));
      continue;
    }

    if (list) {
      list.items[list.items.length - 1] += ` ${line.trim()}`;
      continue;
    }

    paragraph.push(line.trim() + (/ {2}$/.test(rawLine) ? "\n" : ""));
  }

  flushParagraph();
  flushList();
  return blocks;
}

export const agbBlocks = parseAgb(raw);

export const agbHeadings = agbBlocks.filter(
  (block): block is Extract<Block, { kind: "heading" }> =>
    block.kind === "heading" && block.level === 2 && Boolean(block.id) && block.id !== "inhaltsuebersicht",
);
