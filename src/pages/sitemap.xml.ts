import { cases } from "../data/cases";
import { site } from "../data/site";

const base = site.url;

export async function GET() {
  const urls = ["/", "/work", "/about", "/contact", "/book", ...cases.map((c) => `/work/${c.slug}`)];
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${base}${u}</loc></url>`).join("\n") +
    `\n</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
