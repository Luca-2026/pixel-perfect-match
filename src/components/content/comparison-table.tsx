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
    <>
      <div className="grid gap-3 sm:hidden" aria-label={caption}>
        {rows.map((row) => (
          <div key={row.label} className="surface-card min-w-0 p-4">
            <p className="font-semibold text-ink">{row.label}</p>
            <dl className="mt-3 grid gap-3 text-sm">
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3 border-t border-line pt-3">
                <dt className="min-w-0 text-ink/55">{headings.us}</dt>
                <dd className="min-w-0 break-words"><Cell value={row.us} /></dd>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3 border-t border-line pt-3">
                <dt className="min-w-0 text-ink/55">{headings.them}</dt>
                <dd className="min-w-0 break-words"><Cell value={row.them} /></dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <div className="hidden max-w-full overflow-x-auto rounded-md border border-line bg-paper sm:block">
      <table className="w-full min-w-[36rem] text-left text-sm">
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
    </>
  );
}
