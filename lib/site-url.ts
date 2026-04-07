/**
 * URL pública do site (sem barra final).
 * Define `NEXT_PUBLIC_SITE_URL` em produção (ex.: https://www.exemplo.com.br) — necessário para SEO, OG e sitemap.
 */
export function getSiteUrlString(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}

export function getSiteUrl(): URL {
  return new URL(getSiteUrlString());
}
