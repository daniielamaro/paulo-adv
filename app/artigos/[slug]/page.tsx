import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/artigos/article-body";
import { getArticleBySlug } from "@/lib/queries/articles";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Artigo" };
  return {
    title: article.title,
    description: article.excerpt ?? article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt ?? undefined,
      type: "article",
    },
  };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const date = article.publishedAt
    ? new Intl.DateTimeFormat("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(article.publishedAt)
    : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <Link
        href="/artigos"
        className="text-sm font-medium text-[var(--color-accent)] hover:underline"
      >
        ← Todos os artigos
      </Link>
      <article className="mt-8">
        <header className="border-b border-[var(--color-border)] pb-8">
          <p className="text-sm text-[var(--color-ink-muted)]">{date}</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            {article.title}
          </h1>
          {article.excerpt ? (
            <p className="mt-4 text-lg text-[var(--color-ink-muted)]">{article.excerpt}</p>
          ) : null}
        </header>
        <div className="pt-10">
          <ArticleBody markdown={article.body} />
        </div>
      </article>
    </div>
  );
}
