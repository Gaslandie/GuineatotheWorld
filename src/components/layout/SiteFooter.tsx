import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

/** Pied de page : marque, navigation, contact, bureaux, filigrane géant. */
export default function SiteFooter({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const navLinks = [
    { label: dict.nav.home, href: `/${lang}` },
    { label: dict.nav.services, href: `/${lang}/services` },
    { label: dict.nav.about, href: `/${lang}/a-propos` },
    { label: dict.nav.gallery, href: `/${lang}/galerie` },
    { label: dict.nav.blog, href: `/${lang}/blog` },
    { label: dict.nav.faq, href: `/${lang}/faq` },
  ];

  const h4Class =
    "mb-[6px] mt-0 text-[11px] font-semibold uppercase tracking-[3.5px] text-or font-sans";
  const linkClass = "text-[14.5px] font-light text-white/65 hover:text-or";
  const socialClass =
    "flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(216,168,24,0.35)] font-semibold text-or hover:bg-or hover:text-black";

  return (
    <footer className="bg-black text-white/65">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 sm:px-10">
        <div className="flex flex-wrap items-start justify-between gap-12 border-b border-[rgba(216,168,24,0.2)] pb-16">
          {/* Marque */}
          <div className="flex max-w-[340px] flex-col gap-5">
            <div className="flex items-center gap-[14px]">
              <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-or bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element -- petit logo statique, l'optimisation next/image est inutile ici */}
                <img
                  src="/logo_GTTW.jpg"
                  alt="Logo Guinea to the World"
                  width={44}
                  height={44}
                  className="h-full w-full scale-[1.08] object-contain"
                />
              </div>
              <span className="font-serif text-[19px] font-medium text-white">
                Guinea to the World
              </span>
            </div>
            <p className="m-0 text-[14.5px] font-light leading-[1.75]">
              {dict.footer.about}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-[72px] gap-y-10">
            {/* Navigation */}
            <div className="flex flex-col gap-[13px]">
              <h4 className={h4Class}>{dict.footer.nav}</h4>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-[13px]">
              <h4 className={h4Class}>{dict.nav.contact}</h4>
              <a href="tel:+224623655468" className={linkClass}>
                {siteConfig.phones.guinea}
              </a>
              <a href="tel:+233531691086" className={linkClass}>
                {siteConfig.phones.ghana}
              </a>
              <a
                href={`mailto:${siteConfig.emails.primary}`}
                className={linkClass}
              >
                {siteConfig.emails.primary}
              </a>
            </div>

            {/* Bureaux + réseaux */}
            <div className="flex flex-col gap-[13px]">
              <h4 className={h4Class}>{dict.footer.offices}</h4>
              <span className="text-[14.5px] font-light">
                {dict.footer.accraLine}
              </span>
              <span className="text-[14.5px] font-light">
                {dict.footer.conakryLine}
              </span>
              <div className="mt-2 flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className={`${socialClass} text-[13px]`}
                >
                  f
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className={`${socialClass} text-[10px]`}
                >
                  IG
                </a>
                <a
                  href="#"
                  aria-label="TikTok"
                  className={`${socialClass} text-[10px]`}
                >
                  TT
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filigrane géant — masqué sur mobile : réduit à ~28px et presque
            transparent, il ressemblait à un défaut d'affichage plus qu'à un effet */}
        <div className="hidden overflow-hidden pb-3 pt-[34px] sm:block">
          <div className="whitespace-nowrap text-center font-serif text-[clamp(20px,7.2vw,104px)] font-medium leading-none tracking-[2px] text-[rgba(250,247,240,0.08)]">
            Guinea to the World
          </div>
        </div>

        {/* Barre de copyright — empilée et centrée sur mobile, avec un grand
            pb pour que le bouton WhatsApp flottant ne recouvre pas les textes ;
            sur desktop, marge à droite pour la même raison */}
        <div className="flex flex-col items-center gap-2 pb-[96px] pt-7 text-center text-[12.5px] font-light text-white/35 sm:flex-row sm:justify-between sm:pb-[26px] sm:pr-[84px] sm:pt-[18px] sm:text-left">
          <span>{dict.footer.copyright}</span>
          <span className="tracking-[3px]">CONAKRY · ACCRA</span>
        </div>
      </div>
    </footer>
  );
}
