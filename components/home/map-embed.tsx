import { site } from "@/lib/site-content";

export function MapEmbed() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapEmbedQuery)}&hl=pt-BR&z=16&output=embed`;
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm">
      <iframe
        title={`Mapa — ${site.address.full}`}
        src={src}
        className="aspect-[4/3] h-[min(320px,50vh)] w-full min-h-[240px] sm:h-[320px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
