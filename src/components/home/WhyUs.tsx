import type { Dictionary } from "@/i18n/dictionaries";

const NUMERALS = ["I", "II", "III", "IV"];

/** Pourquoi nous choisir : 4 raisons sur fond vert profond. */
export default function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-foret">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#D8A818,transparent)]" />
      {/* Cercles décoratifs */}
      <div className="pointer-events-none absolute -right-[140px] -top-[140px] h-[420px] w-[420px] rounded-full border border-[rgba(216,168,24,0.15)]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[rgba(216,168,24,0.12)]" />

      <div className="mx-auto max-w-[1400px] px-10 py-[130px] max-md:py-20 max-sm:px-6">
        <div className="mb-20 flex max-w-[660px] flex-col gap-[18px] max-sm:mb-12">
          <span className="font-serif text-[15px] italic text-or">
            ( {dict.why.paren} )
          </span>
          <h2 className="m-0 text-balance font-serif text-[clamp(36px,4vw,58px)] font-medium leading-[1.08] text-creme">
            {dict.why.title1} <em className="text-or">{dict.why.titleEm}</em>
          </h2>
        </div>

        {/* 2×2 équilibré dès 640px, 4 colonnes au même seuil (~1224px) que l'auto-fit d'origine */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 sm:grid-cols-2 min-[1224px]:grid-cols-4">
          {dict.why.items.map((r, i) => (
            <div key={r.title} className="flex min-w-0 flex-col gap-[18px]">
              <span className="font-serif text-[44px] font-normal italic leading-none text-[rgba(216,168,24,0.5)]">
                {NUMERALS[i]}
              </span>
              <span className="block h-px w-11 bg-or" />
              <h3 className="m-0 font-serif text-[21px] font-medium tracking-[0.3px] text-creme">
                {r.title}
              </h3>
              <p className="m-0 text-[14.5px] font-light leading-[1.7] text-[rgba(250,247,240,0.65)]">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
