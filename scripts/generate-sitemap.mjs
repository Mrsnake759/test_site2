import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const siteUrl = process.env.SITE_URL || 'https://example.com';
const root = resolve(process.cwd());
const contentPath = resolve(root, 'content/cases/index.json');
const publicDir = resolve(root, 'public');
const sitemapPath = resolve(publicDir, 'sitemap.xml');

const staticRoutes = ['/', '/about', '/cases', '/contact'];

const casesRaw = readFileSync(contentPath, 'utf-8');
const cases = JSON.parse(casesRaw);

const urls = [...staticRoutes, ...cases.map((item) => `/cases/${item.slug}`)];

const now = new Date().toISOString();
const body = urls
  .map(
    (path) => `  <url>\n    <loc>${siteUrl.replace(/\/$/, '')}${path}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(sitemapPath, xml);

console.log(`sitemap.xml generated at ${sitemapPath}`);
