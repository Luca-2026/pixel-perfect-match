// Erzeugt aus dem Angebotsdokument ein herunterladbares PDF im A4-Format.
// Läuft ausschließlich im Browser; jsPDF wird erst beim Klick geladen.

import { formatEuro, formatQuantity, type QuoteDocument } from "@/lib/quote-demo";

const LEGAL = {
  tax: "USt-IdNr. DE000000000",
  register: "Amtsgericht Bonn, HRB 00000",
  bank: "Musterbank, IBAN DE00 0000 0000 0000 0000 00",
};

const INK: [number, number, number] = [26, 28, 30];
const PETROL: [number, number, number] = [12, 74, 84];
const AMBER: [number, number, number] = [186, 138, 44];
const GREY: [number, number, number] = [110, 116, 120];
const LINE: [number, number, number] = [214, 217, 218];
const MINT: [number, number, number] = [237, 244, 242];

export async function downloadQuotePdf(quote: QuoteDocument): Promise<void> {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const SENDER = quote.sender;
  const RECIPIENT = [
    quote.recipient.company,
    quote.recipient.contact,
    quote.recipient.street,
    quote.recipient.city,
  ].filter((row) => row.trim().length > 0);


  const left = 20;
  const right = 190;
  const width = right - left;
  let y = 0;

  const newPage = () => {
    doc.addPage();
    y = 20;
  };
  const ensure = (needed: number) => {
    if (y + needed > 272) newPage();
  };

  /* Kopfleiste */
  doc.setFillColor(...PETROL);
  doc.rect(0, 0, 210, 26, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text(SENDER.company, left, 13);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(`${SENDER.street} · ${SENDER.city} · Telefon ${SENDER.phone}`, left, 19.5);
  doc.setFillColor(...AMBER);
  doc.rect(0, 26, 210, 1.2, "F");

  /* Absender- und Empfängerblock */
  y = 42;
  doc.setTextColor(...GREY);
  doc.setFontSize(7.5);
  doc.text(`${SENDER.company} · ${SENDER.street} · ${SENDER.city}`, left, y);
  doc.setDrawColor(...LINE);
  doc.line(left, y + 1.5, left + 85, y + 1.5);

  y += 8;
  doc.setTextColor(...INK);
  doc.setFontSize(10.5);
  RECIPIENT.forEach((row, index) => {
    doc.setFont("helvetica", index === 0 ? "bold" : "normal");
    doc.text(row, left, y + index * 5.2);
  });

  /* Metablock rechts */
  const metaX = 128;
  let metaY = 44;
  doc.setFontSize(9);
  const meta: [string, string][] = [
    ["Angebotsnummer", quote.number],
    ["Datum", quote.date],
    ["Gültig bis", quote.validUntil],
    ["Kundennummer", quote.recipient.customerNumber],
    ["Bearbeiter", SENDER.agent],
  ];
  for (const [label, value] of meta) {
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...GREY);
    doc.text(label, metaX, metaY);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...INK);
    doc.text(value, right, metaY, { align: "right" });
    metaY += 5.2;
  }

  /* Titel und Einleitung */
  y = Math.max(y + RECIPIENT.length * 5.2, metaY) + 12;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(...INK);
  const titleLines = doc.splitTextToSize(quote.title, width) as string[];
  doc.text(titleLines, left, y);
  y += titleLines.length * 7 + 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...GREY);
  const introLines = doc.splitTextToSize(quote.intro, width) as string[];
  doc.text(introLines, left, y);
  y += introLines.length * 4.6 + 8;

  /* Positionstabelle */
  const colPos = left;
  const colQty = 118;
  const colUnit = 143;
  const colTotal = right;

  const header = () => {
    doc.setFillColor(...MINT);
    doc.rect(left, y - 5, width, 8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(...PETROL);
    doc.text("Pos.  Leistung", colPos + 2, y);
    doc.text("Menge", colQty, y, { align: "right" });
    doc.text("Einzelpreis", colUnit + 14, y, { align: "right" });
    doc.text("Gesamt", colTotal - 2, y, { align: "right" });
    y += 8;
  };

  ensure(30);
  header();

  quote.lines.forEach((line, index) => {
    doc.setFontSize(9.5);
    const descLines = doc.splitTextToSize(line.description, 92) as string[];
    const blockHeight = 6 + descLines.length * 4 + 4;
    if (y + blockHeight > 262) {
      newPage();
      header();
    }

    doc.setFont("helvetica", "bold");
    doc.setTextColor(...INK);
    doc.text(`${String(index + 1).padStart(2, "0")}   ${line.label}`, colPos + 2, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`${formatQuantity(line.quantity)} ${line.unit}`, colQty, y, { align: "right" });
    doc.text(formatEuro(line.unitPrice), colUnit + 14, y, { align: "right" });
    doc.setFont("helvetica", "bold");
    doc.text(formatEuro(line.total), colTotal - 2, y, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...GREY);
    doc.text(descLines, colPos + 9, y + 4.6);
    y += 4.6 + descLines.length * 3.9 + 3.5;

    doc.setDrawColor(...LINE);
    doc.line(left, y - 1.5, right, y - 1.5);
    y += 3;
  });

  /* Summen */
  ensure(40);
  const sumX = 120;
  y += 2;
  const sumRow = (label: string, value: string, bold = false) => {
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(bold ? 11 : 9.5);
    doc.setTextColor(bold ? INK[0] : GREY[0], bold ? INK[1] : GREY[1], bold ? INK[2] : GREY[2]);
    doc.text(label, sumX, y);
    doc.setTextColor(...INK);
    doc.text(value, right - 2, y, { align: "right" });
    y += bold ? 7 : 5.4;
  };
  sumRow("Summe netto", formatEuro(quote.net));
  sumRow("zzgl. 19 Prozent Umsatzsteuer", formatEuro(quote.vat));
  doc.setDrawColor(...PETROL);
  doc.line(sumX, y - 3, right, y - 3);
  y += 2;
  sumRow("Gesamtbetrag brutto", formatEuro(quote.gross), true);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...GREY);
  doc.text(
    `Kalkulierter Zeitaufwand: ${formatQuantity(quote.hours)} Arbeitsstunden`,
    left,
    y - 6,
  );

  /* Hinweise */
  if (quote.notes.length > 0) {
    y += 8;
    ensure(24);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...INK);
    doc.text("Hinweise und Annahmen", left, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...GREY);
    for (const note of quote.notes) {
      const noteLines = doc.splitTextToSize(note, width - 6) as string[];
      ensure(noteLines.length * 4.4 + 4);
      doc.setFillColor(...AMBER);
      doc.circle(left + 1, y - 1.2, 0.8, "F");
      doc.text(noteLines, left + 5, y);
      y += noteLines.length * 4.4 + 2.5;
    }
  }

  /* Schlussformel */
  y += 6;
  ensure(24);
  doc.setFontSize(9.5);
  doc.setTextColor(...INK);
  doc.text(
    doc.splitTextToSize(
      "Dieses Angebot ist 30 Tage gültig. Die Ausführung erfolgt nach Terminabstimmung. Zahlung innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug.",
      width,
    ) as string[],
    left,
    y,
  );
  y += 14;
  doc.setTextColor(...GREY);
  doc.text("Mit freundlichen Grüßen", left, y);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...INK);
  doc.text(`${SENDER.agent}, ${SENDER.company}`, left, y + 6);

  /* Fußzeile auf allen Seiten */
  const pages = doc.getNumberOfPages();
  for (let page = 1; page <= pages; page += 1) {
    doc.setPage(page);
    doc.setDrawColor(...LINE);
    doc.line(left, 279, right, 279);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...GREY);
    doc.text(`${SENDER.company} · ${LEGAL.register} · ${LEGAL.tax}`, left, 283.5);
    doc.text(`${LEGAL.bank} · ${SENDER.email}`, left, 287);
    doc.text(
      "Demonstrationsdokument mit fiktiven Musterdaten, erzeugt von sandhoff.digital",
      left,
      290.5,
    );
    doc.text(`Seite ${page} von ${pages}`, right, 290.5, { align: "right" });
  }

  doc.save(`Angebot-${quote.number}.pdf`);
}
