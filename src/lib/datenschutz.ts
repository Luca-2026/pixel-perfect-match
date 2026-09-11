import raw from "@/content/datenschutz.md?raw";
import { parseAgb, type Block, type Inline } from "@/lib/agb";

export type { Block, Inline };

export const datenschutzBlocks = parseAgb(raw);
