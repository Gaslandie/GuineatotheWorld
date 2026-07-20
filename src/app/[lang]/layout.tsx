import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "../globals.css";
import { i18n, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : i18n.defaultLocale;
  const dict = await getDictionary(locale);
  return {
    title: {
      default: dict.meta.title,
      template: `%s | Guinea to the World`,
    },
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${playfair.variable} ${sourceSans.variable} h-full`}
    >
      <body className="flex min-h-dvh flex-col bg-creme text-encre">
        {children}
      </body>
    </html>
  );
}
