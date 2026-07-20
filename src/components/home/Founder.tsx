import type { Dictionary } from "@/i18n/dictionaries";
import ImageSlot from "@/components/ui/ImageSlot";

/** Section fondateur : portrait encadré or, badge Ghana et citation. */
export default function Founder({ dict }: { dict: Dictionary }) {
  return (
    <section id="apropos" className="relative overflow-x-clip bg-creme">
      <div className="mx-auto max-w-[1400px] px-10 py-[130px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] items-center gap-[90px]">
          {/* Portrait */}
          <div className="relative w-full max-w-[470px] justify-self-center">
            <div className="pointer-events-none absolute -left-6 -top-6 h-[180px] w-[180px] border-l border-t border-or" />
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-[180px] w-[180px] border-b border-r border-or" />
            <div className="relative aspect-[4/5] w-full">
              <ImageSlot label={dict.founder.portraitPlaceholder} radius={4} />
            </div>
            <div className="absolute -left-9 bottom-7 flex flex-col gap-[3px] border-l-2 border-or bg-foret px-[30px] py-[22px] text-white shadow-[0_20px_50px_rgba(13,36,24,0.35)]">
              <span className="font-serif text-[24px] italic text-or">
                2023 – 2026
              </span>
              <span className="text-[11px] uppercase tracking-[2.5px] text-white/75">
                {dict.founder.badge}
              </span>
            </div>
          </div>

          {/* Texte */}
          <div className="flex flex-col gap-[26px]">
            <span className="font-serif text-[15px] italic text-or">
              ( {dict.founder.paren} )
            </span>
            <h2 className="m-0 text-balance font-serif text-[clamp(34px,3.8vw,52px)] font-medium leading-[1.1] text-encre">
              {dict.founder.title}
            </h2>
            <p className="m-0 text-[17px] font-light leading-[1.8] text-[rgba(10,10,10,0.65)]">
              {dict.founder.body}
            </p>
            <blockquote className="m-0 font-serif text-[clamp(20px,1.8vw,24px)] font-normal italic leading-[1.55] text-vert">
              {dict.founder.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <span className="block h-px w-11 bg-or" />
              <span className="font-serif text-[18px] text-encre">
                {dict.founder.name}
              </span>
              <span className="text-[12px] uppercase tracking-[2px] text-[rgba(10,10,10,0.45)]">
                {dict.founder.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
