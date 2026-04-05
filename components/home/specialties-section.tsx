import {
  IconBuilding,
  IconDoc,
  IconHeart,
  IconScale,
  IconShield,
  IconUsers,
} from "@/components/icons/specialty-icons";
import { specialties } from "@/lib/site-content";

const icons = {
  scale: IconScale,
  building: IconBuilding,
  users: IconUsers,
  heart: IconHeart,
  shield: IconShield,
  doc: IconDoc,
} as const;

export function SpecialtiesSection() {
  return (
    <section id="areas" className="scroll-mt-20 bg-[var(--color-muted)] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Áreas de atuação
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Especialidades
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)]">
            Atendimento personalizado nas principais frentes do direito que impactam empresas e famílias.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-sm transition hover:border-[var(--color-accent)]/30 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
