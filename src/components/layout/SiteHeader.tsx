"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

/**
 * En-tête fixe : logo, navigation, sélecteur FR/EN, bouton Contact.
 * Au-dessus de 1150px : navigation complète en ligne (fidèle au design).
 * En dessous : bouton hamburger + panneau déroulant.
 */
export default function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.services, href: `/${lang}/services` },
    { label: dict.nav.about, href: `/${lang}/a-propos` },
    { label: dict.nav.gallery, href: `/${lang}/galerie` },
    { label: dict.nav.blog, href: `/${lang}/blog` },
    { label: dict.nav.faq, href: `/${lang}/faq` },
  ];

  // Sur mobile/tablette, zone tactile élargie (~40px) sans changer l'encombrement visuel
  const langBtn = (active: boolean) =>
    `px-[2px] py-[4px] max-[1149px]:px-[10px] max-[1149px]:py-[10px] max-[1149px]:-my-[6px] text-[12px] tracking-[1.5px] border-b ${
      active
        ? "font-bold text-or border-or"
        : "font-normal text-white/65 border-transparent hover:text-or"
    }`;

  const burgerBar = "block h-[1.5px] w-[16px] bg-or transition-all duration-300";

  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-[rgba(216,168,24,0.18)] bg-[rgba(7,17,12,0.82)] backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1400px] items-center gap-x-[clamp(14px,2.5vw,40px)] px-[clamp(18px,3vw,40px)] py-[clamp(14px,2vw,22px)]">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex min-w-0 items-center gap-[14px]"
          onClick={() => setOpen(false)}
        >
          {/* Pastille blanche : le logo JPG a un fond blanc, invisible ainsi sur fond sombre */}
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-or bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element -- petit logo statique, l'optimisation next/image est inutile ici */}
            <img
              src="/logo_GTTW.jpg"
              alt="Logo Guinea to the World"
              width={46}
              height={46}
              className="h-full w-full scale-[1.08] object-contain"
            />
          </div>
          <div className="flex min-w-0 flex-col leading-[1.15]">
            <span className="truncate font-serif text-[clamp(16px,4vw,19px)] font-medium tracking-[0.4px] text-white">
              Guinea to the World
            </span>
            <span className="hidden text-[9.5px] font-semibold uppercase tracking-[4px] text-or max-md:text-[8.5px] max-md:tracking-[1.5px] min-[480px]:block">
              {dict.header.tagline}
            </span>
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav className="ml-auto hidden gap-x-[clamp(16px,2vw,32px)] text-[12px] font-medium uppercase tracking-[2.2px] min-[1150px]:flex">
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

        {/* Langue + Contact + hamburger */}
        <div className="ml-auto flex shrink-0 items-center gap-[clamp(12px,1.6vw,22px)] min-[1150px]:ml-0">
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
            className="hidden whitespace-nowrap rounded-full bg-rouge px-[clamp(18px,2vw,30px)] py-[12px] text-[12px] font-semibold uppercase tracking-[2px] text-white hover:bg-rouge-vif min-[1150px]:block"
          >
            {dict.nav.contact}
          </Link>

          {/* Bouton hamburger (mobile / tablette) */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-[42px] w-[42px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-[rgba(216,168,24,0.4)] min-[1150px]:hidden"
          >
            <span
              className={`${burgerBar} ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span className={`${burgerBar} ${open ? "opacity-0" : ""}`} />
            <span
              className={`${burgerBar} ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Panneau mobile */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 min-[1150px]:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="min-h-0 overflow-hidden">
          <div className="flex flex-col border-t border-[rgba(216,168,24,0.18)] px-[clamp(18px,3vw,40px)] pb-7 pt-2">
            <Link
              href={`/${lang}`}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-[14px] text-[13px] font-semibold uppercase tracking-[2.5px] text-or"
            >
              {dict.nav.home}
            </Link>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-[14px] text-[13px] font-medium uppercase tracking-[2.5px] text-white/90 hover:text-or"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/contact`}
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-rouge px-[30px] py-[14px] text-center text-[12px] font-semibold uppercase tracking-[2px] text-white hover:bg-rouge-vif"
            >
              {dict.nav.contact}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
