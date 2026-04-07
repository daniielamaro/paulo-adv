import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFloat } from "@/components/home/whatsapp-float";
import { Providers } from "@/app/providers";
import { JsonLd } from "@/components/seo/json-ld";
import { defaultSocialImage, site } from "@/lib/site-content";
import { absoluteUrl, getSiteUrlString } from "@/lib/site-url";

const siteUrl = getSiteUrlString();
const ogImageUrl = absoluteUrl(defaultSocialImage.src);

const serif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Advocacia`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "pt_BR",
    type: "website",
    siteName: site.name,
    url: `${siteUrl}/`,
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        alt: defaultSocialImage.alt,
        type: "image/jpeg",
        width: 1200,
        height: 1200,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-canvas)] font-sans text-[var(--color-ink)]">
        <JsonLd />
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
