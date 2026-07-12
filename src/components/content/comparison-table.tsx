import { Check, X } from "lucide-react";

export interface ComparisonRow {
  label: string;
  us: string | boolean;
  them: string | boolean;
}

interface ComparisonTableProps {
  headings: { us: string; them: string };
  rows: readonly ComparisonRow[];
  caption?: string;
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-4 w-4 text-petrol" aria-label="Ja" />;
  if (value === false) return <X className="h-4 w-4 text-ink/40" aria-label="Nein" />;
  return <span className="text-sm text-ink/80">{value}</span>;
}

export function ComparisonTable({ headings, rows, caption }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-paper">
      <table className="w-full text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-mint/30">
          <tr>
            <th scope="col" className="p-4 font-display text-sm font-semibold text-ink">
              Kriterium
            </th>
            <th scope="col" className="p-4 font-display text-sm font-semibold text-ink">
              {headings.us}
            </th>
            <th scope="col" className="p-4 font-display text-sm font-semibold text-ink/70">
              {headings.them}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-line align-top">
              <th scope="row" className="p-4 font-medium text-ink">
                {row.label}
              </th>
              <td className="p-4"><Cell value={row.us} /></td>
              <td className="p-4"><Cell value={row.them} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
