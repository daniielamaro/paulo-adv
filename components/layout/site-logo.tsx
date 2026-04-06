"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/site-content";

/**
 * Logotipo em `public/logo.png` (ou caminho em `site.logoSrc`).
 * Se o ficheiro não existir ou falhar a carga, mostra o nome abreviado do escritório.
 */
export function SiteLogo() {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <span className="font-serif text-lg font-semibold tracking-tight text-[var(--color-ink)] sm:text-xl">
        {site.shortName}
      </span>
    );
  }

  return (
    <span className="inline-flex h-9 min-h-9 items-center sm:h-10 sm:min-h-10">
      <Image
        src={site.logoSrc}
        alt=""
        width={220}
        height={56}
        className="max-h-9 w-auto max-w-[min(220px,55vw)] object-contain object-left sm:max-h-10"
        priority
        unoptimized
        onError={() => setUseFallback(true)}
      />
    </span>
  );
}
