/**
 * Renders the first page of `public/images/Omar Resume.pdf` to
 * `public/images/Omar-Resume-preview.png`, used by the Resume preview card.
 *
 * The PDF stays the single source of truth for the resume: replace the PDF and
 * run `npm run resume:preview` to refresh the thumbnail.
 */
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as mupdf from "mupdf";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pdfPath = join(root, "public", "images", "Omar Resume.pdf");
const outputPath = join(root, "public", "images", "Omar-Resume-preview.png");

const pdf = readFileSync(pdfPath);
const doc = mupdf.Document.openDocument(pdf, "application/pdf");

if (doc.countPages() === 0) {
  throw new Error("The resume PDF has no pages.");
}

const page = doc.loadPage(0);
const [x0, , x1] = page.getBounds();

// Render at ~720px wide: sharp on high-density screens without bloating the
// repository, since the card itself is never wider than ~180 CSS pixels.
const targetWidth = 720;
const scale = targetWidth / (x1 - x0);

const pixmap = page.toPixmap(
  mupdf.Matrix.scale(scale, scale),
  mupdf.ColorSpace.DeviceRGB,
  false,
  true,
);
const png = pixmap.asPNG();
writeFileSync(outputPath, png);

const sizeKb = (statSync(outputPath).size / 1024).toFixed(1);
console.log(
  `Generated ${outputPath} (${sizeKb} KB, ${pixmap.getWidth()}x${pixmap.getHeight()}).`,
);
