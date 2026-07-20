import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

/** Section hero plein écran : image de fond, titre, CTA et bandeau de chiffres. */
export default function Hero({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen flex-col overflow-hidden bg-nuit"
    >
      {/* Fond en attendant le vrai visuel : dégradé cinématique nuit + halo doré.
          Remplacer ce bloc par la photo (aile d'avion / skyline d'Accra) quand elle sera fournie. */}
      <div className="absolute inset-0 bg-nuit">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_72%_18%,rgba(216,168,24,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_85%,rgba(24,72,48,0.55),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_110%,rgba(15,43,28,0.8),transparent_70%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,12,0.6)_0%,rgba(7,17,12,0.15)_45%,rgba(7,17,12,0.85)_100%)]" />

      {/* Contenu central */}
      {/* pt élargi sous 640px : le header empilé est plus haut que les 150px du design */}
      <div className="pointer-events-none relative flex flex-1 flex-col items-center justify-center gap-[30px] px-8 pb-10 pt-[220px] sm:pt-[150px] text-center">
        <div className="flex items-center gap-[18px]">
          <span className="block h-px w-[60px] bg-[linear-gradient(90deg,transparent,#D8A818)]" />
          <span className="text-[12px] font-semibold uppercase tracking-[5px] text-or">
            {dict.hero.kicker}
          </span>
          <span className="block h-px w-[60px] bg-[linear-gradient(90deg,#D8A818,transparent)]" />
        </div>

        <h1 className="m-0 max-w-[1050px] text-balance font-serif text-[clamp(52px,8vw,112px)] font-normal leading-[1.02] tracking-[-1px] text-white">
          {dict.hero.title1}
          <br />
          <em className="font-normal text-or">{dict.hero.titleEm}</em>
        </h1>

        <p className="m-0 max-w-[620px] text-pretty text-[clamp(16px,1.4vw,20px)] font-light leading-[1.75] text-white/[0.82]">
          {dict.hero.sub}
        </p>

        <div className="pointer-events-auto mt-[10px] flex flex-wrap justify-center gap-5">
          <Link
            href={`/${lang}/contact`}
            className="whitespace-nowrap rounded-full bg-rouge px-[46px] py-[18px] text-[13px] font-semibold uppercase tracking-[2.5px] text-white shadow-[0_16px_44px_rgba(168,0,0,0.45)] hover:-translate-y-[3px] hover:bg-rouge-vif"
          >
            {dict.hero.cta1}
          </Link>
          <Link
            href={`/${lang}/services`}
            className="whitespace-nowrap rounded-full border border-white/40 px-[46px] py-[17px] text-[13px] font-semibold uppercase tracking-[2.5px] text-white backdrop-blur-[8px] hover:border-or hover:text-or"
          >
            {dict.hero.cta2}
          </Link>
        </div>
      </div>

      {/* Indice de défilement */}
      <div className="pointer-events-none relative flex justify-center pb-[26px]">
        <div className="h-[52px] w-px animate-[scrollHint_2.2s_ease-in-out_infinite] bg-[linear-gradient(180deg,#D8A818,transparent)]" />
      </div>

      {/* Bandeau de chiffres */}
      <div className="relative border-t border-[rgba(216,168,24,0.3)] bg-[rgba(7,17,12,0.5)] backdrop-blur-[10px]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-10 py-[30px]">
          {dict.stats.map((st) => (
            <div
              key={st.label}
              className="flex min-w-0 flex-col items-center gap-[6px] border-r border-[rgba(216,168,24,0.2)] px-6 py-[6px]"
            >
              <span className="font-serif text-[34px] font-medium italic text-or">
                {st.value}
              </span>
              <span className="text-center text-[11px] uppercase tracking-[3px] text-white/70">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
