/** Conteúdo institucional — ajuste nomes, textos e imagens conforme o escritório. */

export const site = {
  name: "Capetini e Paulo Advogados",
  shortName: "Capetini e Paulo",
  /**
   * Logotipo em `public/images/logo.png` → `/images/logo.png`.
   * Se colocar na raiz de `public/`, use `/logo.png`.
   */
  logoSrc: "/images/logo.png",
  tagline: "Advocacia estratégica com ética, proximidade e resultados.",
  description:
    "Atendimento jurídico online em todo o Brasil, com proximidade e técnica sólida. Possibilidade de reunião presencial mediante agendamento.",
  phoneDisplay: "(21) 99999-9999",
  phoneTel: "+5521999999999",
  whatsappE164: "5521999999999",
  email: "contato@pauloadv.com.br",
  /** Texto para rodapé e contacto (sem endereço fixo de sede). */
  serviceAreaLine: "Atendimento online em todo o Brasil. Reuniões presenciais mediante agendamento.",
} as const;

export const teamMembers = [
  {
    name: "Paulo Cesar",
    oab: "OAB/RJ nº 243.275",
    role: "Direito Civil e Empresarial",
    bio: "Atuação consultiva e contenciosa com foco em soluções seguras para pessoas e negócios.",
    image: "/images/paulo.jpg",
  },
  {
    name: "Júlio Capetini",
    oab: "OAB/ES nº 39.735",
    role: "Contencioso e Estratégia",
    bio: "Experiência em litígios complexos e acompanhamento próximo em todas as fases do processo.",
    image: "/images/roberto.webp",
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

/** Blocos da secção “Atendimento” (substitui galeria de escritório físico). */
export const atendimentoHighlights = [
  {
    title: "100% digital",
    description:
      "Consultas e acompanhamento processual com comunicação por e-mail, telefone e videoconferência, no ritmo que o seu caso exige.",
  },
  {
    title: "Todo o Brasil",
    description:
      "Advogados com inscrição na OAB; atuamos com foco em demandas que podem ser conduzidas remotamente, com clareza e segurança.",
  },
  {
    title: "Presencial sob agendamento",
    description:
      "Quando fizer sentido para o caso, é possível combinar encontro presencial — mediante marcação prévia.",
  },
] as const;
