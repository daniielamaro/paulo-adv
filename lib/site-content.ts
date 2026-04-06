/** Conteúdo institucional — ajuste nomes, textos e imagens conforme o escritório. */

export const site = {
  name: "Capetini e Paulo Advogados",
  shortName: "Capetini e Paulo",
  /**
   * Logotipo: ficheiro dentro de `public/` (commit no Git).
   * Ex.: ficheiro `public/logo.png` → caminho `/logo.png`.
   * Se estiver noutro sítio, ajuste (ex.: `/images/logo.png`).
   */
  logoSrc: "/logo.png",
  tagline: "Advocacia estratégica com ética, proximidade e resultados.",
  description: "Escritório de advocacia dedicado à defesa dos seus direitos com atendimento humanizado e técnica jurídica sólida.",
  phoneDisplay: "(21) 99999-9999",
  phoneTel: "+5521999999999",
  whatsappE164: "5521999999999",
  email: "contato@pauloadv.com.br",
  address: {
    street: "Rua Paula Nei, 155",
    city: "Rio de Janeiro — RJ",
    full: "Rua Paula Nei, 155 — Rio de Janeiro, RJ",
  },
  mapEmbedQuery: "Rua Paula Nei, 155, Rio de Janeiro, RJ, Brasil",
} as const;

export const teamMembers = [
  {
    name: "Dr. Paulo",
    role: "Sócio — Direito Civil e Empresarial",
    bio: "Atuação consultiva e contenciosa com foco em soluções seguras para pessoas e negócios.",
    image: "/images/paulo.webp",
  },
  {
    name: "Dr. Júlio",
    role: "Sócio — Contencioso e Estratégia",
    bio: "Experiência em litígios complexos e acompanhamento próximo em todas as fases do processo.",
    image: "/images/julio.webp",
  },
] as const;

export const specialties = [
  {
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, indenizações e relações patrimoniais com análise clara e preventiva.",
    icon: "scale" as const,
  },
  {
    title: "Direito Empresarial",
    description:
      "Constituição de empresas, societário, compliance e suporte jurídico para decisões do dia a dia.",
    icon: "building" as const,
  },
  {
    title: "Direito do Trabalho",
    description:
      "Defesa de empregadores e trabalhadores, negociações e contencioso trabalhista com foco em resultado.",
    icon: "users" as const,
  },
  {
    title: "Direito de Família e Sucessões",
    description:
      "Divórcios, guarda, alimentos, inventários e planejamento sucessório com sensibilidade e rigor técnico.",
    icon: "heart" as const,
  },
  {
    title: "Direito do Consumidor",
    description:
      "Relações de consumo, bancário e contratos de adesão; orientação e defesa em órgãos e tribunais.",
    icon: "shield" as const,
  },
  {
    title: "Consultoria preventiva",
    description:
      "Pareceres, revisão de documentos e estratégias para reduzir riscos antes que virem litígio.",
    icon: "doc" as const,
  },
] as const;

/** Imagens genéricas de escritório (Unsplash) — pode substituir por fotos reais do escritório. */
export const officeGallery = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    alt: "Sala de reuniões moderna em escritório",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80",
    alt: "Profissionais em ambiente corporativo",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    alt: "Fachada de edifício comercial",
  },
] as const;
