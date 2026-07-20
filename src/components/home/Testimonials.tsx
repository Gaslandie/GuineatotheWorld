import type { Dictionary } from "@/i18n/dictionaries";

/** Témoignages : 3 colonnes séparées par des filets or. */
export default function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-[rgba(216,168,24,0.3)] bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-10 sm:py-[130px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-[72px]">
          <div className="flex flex-col gap-[18px]">
            <span className="font-serif text-[15px] italic text-or">
              ( {dict.testimonials.paren} )
            </span>
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,56px)] font-medium leading-[1.08] text-encre">
              {dict.testimonials.title1}{" "}
              <em className="text-vert">{dict.testimonials.titleEm}</em>
            </h2>
          </div>
          <span className="font-serif text-[16px] italic text-[rgba(10,10,10,0.4)]">
            {dict.testimonials.aside}
          </span>
        </div>

        {/* min(300px,100%) : évite le débordement horizontal sur les mobiles < 380px */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] border-l border-[rgba(216,168,24,0.35)] max-md:gap-y-10">
          {dict.testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="m-0 flex min-w-0 flex-col gap-6 border-r border-[rgba(216,168,24,0.35)] py-3 pl-5 pr-5 sm:pl-9 sm:pr-11"
            >
              <span className="h-[34px] font-serif text-[80px] italic leading-[0.55] text-or">
                “
              </span>
              <blockquote className="m-0 font-serif text-[19px] font-normal italic leading-[1.65] text-[rgba(10,10,10,0.8)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-[14px] pt-[14px]">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-foret font-serif text-[14px] italic text-or">
                  {t.initials}
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[15px] font-semibold text-encre">
                    {t.name}
                  </span>
                  <span className="text-[12.5px] uppercase tracking-[1px] text-[rgba(10,10,10,0.45)]">
                    {t.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
