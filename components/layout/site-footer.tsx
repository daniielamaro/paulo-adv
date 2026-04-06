import Link from "next/link";
import { site } from "@/lib/site-content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-xl font-semibold">{site.name}</p>
            <p className="mt-2 text-sm text-white/70">{site.description}</p>
          </div>
          <div className="text-sm">
            <p className="font-medium text-white">Contato</p>
            <ul className="mt-3 space-y-2 text-white/75">
              <li>
                <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="pt-1 text-white/80">{site.serviceAreaLine}</li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-medium text-white">Links</p>
            <ul className="mt-3 space-y-2 text-white/75">
              <li>
                <Link href="/artigos" className="hover:text-white">
                  Artigos
                </Link>
              </li>
              <li>
                <a href="/#contato" className="hover:text-white">
                  Fale conosco
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {year} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
