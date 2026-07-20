import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

/** En-tête fixe : logo, navigation, sélecteur FR/EN, bouton Contact. */
export default function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const navLinks = [
    { label: dict.nav.services, href: `/${lang}/services` },
    { label: dict.nav.about, href: `/${lang}/a-propos` },
    { label: dict.nav.gallery, href: `/${lang}/galerie` },
    { label: dict.nav.blog, href: `/${lang}/blog` },
    { label: dict.nav.faq, href: `/${lang}/faq` },
  ];

  const langBtn = (active: boolean) =>
    `px-[2px] py-[4px] text-[12px] tracking-[1.5px] border-b ${
      active
        ? "font-bold text-or border-or"
        : "font-normal text-white/65 border-transparent hover:text-or"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-[rgba(216,168,24,0.18)] bg-[rgba(7,17,12,0.82)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-[clamp(14px,2.5vw,40px)] gap-y-[10px] px-[clamp(18px,3vw,40px)] py-[clamp(14px,2vw,22px)]">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-[14px] whitespace-nowrap"
        >
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-or font-serif text-[16px] font-medium tracking-[1px] text-or">
            GT
          </div>
          <div className="flex flex-col leading-[1.15]">
            <span className="font-serif text-[19px] font-medium tracking-[0.4px] text-white">
              Guinea to the World
            </span>
            <span className="text-[9.5px] font-semibold uppercase tracking-[4px] text-or">
              {dict.header.tagline}
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="ml-auto flex flex-wrap gap-y-[10px] gap-x-[clamp(16px,2vw,32px)] text-[12px] font-medium uppercase tracking-[2.2px]">
          <Link
            href={`/${lang}`}
            className="whitespace-nowrap border-b border-or pb-[2px] text-or"
          >
            {dict.nav.home}
          </Link>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-white/90 hover:text-or"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Langue + Contact */}
        <div className="flex items-center gap-[clamp(12px,1.6vw,22px)]">
          <div className="flex items-center gap-[6px] text-[12px] font-semibold tracking-[1.5px]">
            <Link href="/fr" className={langBtn(lang === "fr")}>
              FR
            </Link>
            <span className="text-white/35">·</span>
            <Link href="/en" className={langBtn(lang === "en")}>
              EN
            </Link>
          </div>
          <Link
            href={`/${lang}/contact`}
            className="whitespace-nowrap rounded-full bg-rouge px-[clamp(18px,2vw,30px)] py-[12px] text-[12px] font-semibold uppercase tracking-[2px] text-white hover:bg-rouge-vif"
          >
            {dict.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
