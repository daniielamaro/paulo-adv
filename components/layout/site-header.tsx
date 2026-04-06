import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-content";

const nav = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#areas", label: "Áreas" },
  { href: "/#escritorio", label: "Escritório" },
  { href: "/artigos", label: "Artigos" },
  { href: "/#contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16">
          <Link
            href="/#inicio"
            className="flex shrink-0 items-center gap-2"
            aria-label={site.name}
          >
            <Image
              src={site.logoSrc}
              alt=""
              width={220}
              height={56}
              className="h-9 w-auto max-w-[min(200px,55vw)] object-contain object-left sm:h-10"
              priority
            />
          </Link>
          <a
            href={`https://wa.me/${site.whatsappE164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[var(--color-accent)] px-3 py-2 text-xs font-semibold text-[var(--color-accent-foreground)] shadow-sm transition hover:brightness-105 sm:px-4 sm:text-sm"
          >
            Falar com o advogado
          </a>
        </div>
        <nav
          className="-mx-4 flex gap-1 overflow-x-auto border-t border-[var(--color-border)]/60 px-4 py-2 md:mx-0 md:border-0 md:py-0 md:pb-3"
          aria-label="Principal"
        >
          {nav.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-muted)] hover:text-[var(--color-ink)]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-muted)] hover:text-[var(--color-ink)]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
