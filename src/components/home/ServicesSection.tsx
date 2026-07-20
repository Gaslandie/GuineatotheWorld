import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ServiceIcon, servicePaths } from "@/components/ui/icons";

/** Les 6 services : colonne d'intro sticky à gauche, liste détaillée à droite. */
export default function ServicesSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section
      id="services"
      className="border-t border-[rgba(216,168,24,0.3)] bg-creme"
    >
      <div className="svc-grid mx-auto grid max-w-[1400px] grid-cols-[minmax(280px,420px)_1fr] gap-20 px-5 py-20 sm:px-10 sm:py-[130px]">
        {/* Colonne gauche (sticky) */}
        <div className="sticky top-[120px] flex flex-col gap-[22px] self-start">
          <span className="font-serif text-[15px] italic text-or">
            ( {dict.services.paren} )
          </span>
          <h2 className="m-0 text-balance font-serif text-[clamp(36px,3.8vw,56px)] font-medium leading-[1.08] text-encre">
            {dict.services.title1} <em className="text-vert">{dict.services.titleEm}</em>
          </h2>
          <p className="m-0 max-w-[360px] text-[16.5px] font-light leading-[1.75] text-[rgba(10,10,10,0.6)]">
            {dict.services.intro}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-3 self-start border-b border-or pb-2 text-[13px] font-semibold uppercase tracking-[2.5px] text-vert transition-all hover:gap-[18px] hover:text-or"
          >
            {dict.services.link} <span className="text-[16px]">→</span>
          </Link>
        </div>

        {/* Liste des services */}
        <div className="flex flex-col border-t border-[rgba(216,168,24,0.4)]">
          {dict.services.items.map((s, i) => (
            <div
              key={s.title}
              className="grid cursor-default grid-cols-[34px_minmax(0,1fr)_44px] items-center gap-4 border-b border-[rgba(216,168,24,0.4)] px-2 py-6 transition-[background,padding] duration-300 hover:bg-white sm:grid-cols-[70px_1fr_auto] sm:gap-7 sm:px-5 sm:py-[34px] sm:hover:px-7"
            >
              <span className="font-serif text-[15px] italic text-[rgba(10,10,10,0.35)]">
                0{i + 1}
              </span>
              <div className="flex min-w-0 flex-col gap-2">
                <h3 className="m-0 font-serif text-[clamp(22px,2vw,28px)] font-medium text-encre">
                  {s.title}
                </h3>
                <p className="m-0 max-w-[560px] text-[15px] font-light leading-[1.65] text-[rgba(10,10,10,0.55)]">
                  {s.desc}
                </p>
              </div>
              <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[rgba(24,72,48,0.3)] text-vert sm:h-[52px] sm:w-[52px]">
                <ServiceIcon d={servicePaths[i]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
