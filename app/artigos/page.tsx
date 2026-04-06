import type { Metadata } from "next";
import { ArticleCard } from "@/components/artigos/article-card";
import type { Article } from "@/lib/db/schema";
import { listPublishedArticles } from "@/lib/queries/articles";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Artigos e conteúdos jurídicos do escritório.",
};

export default async function ArtigosPage() {
  let items: Article[];
  try {
    items = await listPublishedArticles();
  } catch {
    items = [];
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <header className="border-b border-[var(--color-border)] pb-10">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Artigos
        </h1>
        <p className="mt-3 text-[var(--color-ink-muted)]">
          Textos sobre direito e temas relevantes para clientes e parceiros.
        </p>
      </header>
      {items.length === 0 ? (
        <p className="mt-12 text-center text-[var(--color-ink-muted)]">
          Ainda não há artigos publicados. Volte em breve.
        </p>
      ) : (
        <ul className="mt-10 space-y-6">
          {items.map((article) => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
