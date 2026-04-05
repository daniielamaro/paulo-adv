import Image from "next/image";
import { officeGallery } from "@/lib/site-content";

export function OfficeGallerySection() {
  return (
    <section id="escritorio" className="scroll-mt-20 bg-[var(--color-surface)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Ambiente
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Nosso escritório
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
            Espaços pensados para reuniões confidenciais e atendimento com privacidade. Fotos ilustrativas —
            substitua por imagens reais do seu espaço quando disponíveis.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {officeGallery.map((photo) => (
            <figure
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted)] shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
