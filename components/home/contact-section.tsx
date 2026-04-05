import Link from "next/link";
import { site } from "@/lib/site-content";
import { ContactForm } from "@/components/home/contact-form";
import { MapEmbed } from "@/components/home/map-embed";

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 bg-[var(--color-muted)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Contato
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Fale com o escritório
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
            Envie uma mensagem ou fale conosco por telefone e WhatsApp. Retornamos o mais breve possível.
          </p>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)]">Dados</h3>
              <ul className="mt-4 space-y-3 text-[var(--color-ink-muted)]">
                <li>
                  <span className="font-medium text-[var(--color-ink)]">Endereço: </span>
                  {site.address.full}
                </li>
                <li>
                  <span className="font-medium text-[var(--color-ink)]">Telefone: </span>
                  <a href={`tel:${site.phoneTel}`} className="text-[var(--color-accent)] hover:underline">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-[var(--color-ink)]">E-mail: </span>
                  <a href={`mailto:${site.email}`} className="text-[var(--color-accent)] hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <Link
                    href={`https://wa.me/${site.whatsappE164}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex font-medium text-[#128C7E] hover:underline"
                  >
                    Falar com o advogado
                  </Link>
                </li>
              </ul>
            </div>
            <MapEmbed />
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)]">Formulário</h3>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
              Os campos marcados como obrigatórios são necessários para podermos responder.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
