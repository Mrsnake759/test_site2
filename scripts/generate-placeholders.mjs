import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const root = resolve(process.cwd());
const assetsDir = resolve(root, 'public/assets');
const dataPath = resolve(root, 'scripts/placeholders.json');
const fontsPath = resolve(root, 'scripts/fonts.json');

const raw = readFileSync(dataPath, 'utf-8');
const placeholders = JSON.parse(raw);

let fonts = {};
try {
  const fontsRaw = readFileSync(fontsPath, 'utf-8');
  fonts = JSON.parse(fontsRaw);
} catch (error) {
  console.warn('Fonts payload not found, skipping font generation.');
}

const files = {
  aquarius: ['cases/aquarius/cover', 'cases/aquarius/s1', 'cases/aquarius/s2'],
  hypermall: ['cases/hypermall/cover', 'cases/hypermall/s1', 'cases/hypermall/s2'],
  orbita: ['cases/orbita/cover', 'cases/orbita/s1', 'cases/orbita/s2'],
  nova: ['cases/nova/cover', 'cases/nova/s1', 'cases/nova/s2'],
  skylink: ['cases/skylink/cover', 'cases/skylink/s1', 'cases/skylink/s2'],
  profile: ['images/profile-portrait']
};

const writeAsset = (relativePath, format, base64) => {
  const fullPath = resolve(assetsDir, `${relativePath}.${format}`);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, Buffer.from(base64, 'base64'));
};

Object.entries(files).forEach(([key, paths]) => {
  const webp = placeholders[`${key}_webp`];
  const jpeg = placeholders[`${key}_jpeg`];
  if (!webp || !jpeg) return;
  paths.forEach((path) => {
    writeAsset(path, 'webp', webp);
    writeAsset(path, 'jpg', jpeg);
  });
});

const pdfDir = resolve(assetsDir, 'cv');
mkdirSync(pdfDir, { recursive: true });
const pdfPath = resolve(pdfDir, 'Artem_Sadomtsev_CV.pdf');
const pdfContent = `%PDF-1.4\n1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj\n2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj\n3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources<< /Font<< /F1 5 0 R>>>>>>endobj\n4 0 obj<< /Length 86 >>stream\nBT /F1 18 Tf 70 760 Td (Placeholder CV) Tj T* (Замените файл на актуальное резюме.) Tj ET\nendstream\nendobj\n5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj\nxref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000061 00000 n \n0000000114 00000 n \n0000000276 00000 n \n0000000457 00000 n \ntrailer<< /Root 1 0 R /Size 6 >>\nstartxref\n565\n%%EOF`;
writeFileSync(pdfPath, pdfContent, 'utf-8');

const fontEntries = [
  { key: 'inter400', filename: 'fonts/Inter-400.woff2' },
  { key: 'inter600', filename: 'fonts/Inter-600.woff2' },
  { key: 'rubik400', filename: 'fonts/Rubik-400.woff2' },
  { key: 'rubik600', filename: 'fonts/Rubik-600.woff2' }
];

fontEntries.forEach(({ key, filename }) => {
  const base64 = fonts[key];
  if (!base64) return;
  const fontPath = resolve(assetsDir, filename);
  mkdirSync(dirname(fontPath), { recursive: true });
  writeFileSync(fontPath, Buffer.from(base64, 'base64'));
});

console.log('Placeholder assets and fonts generated.');
