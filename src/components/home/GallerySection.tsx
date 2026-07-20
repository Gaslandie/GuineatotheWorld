import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import ImageSlot from "@/components/ui/ImageSlot";

/** Aperçu de la galerie : mosaïque de 5 emplacements photo. */
export default function GallerySection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="galerie" className="bg-creme">
      <div className="mx-auto max-w-[1400px] px-5 pb-[70px] pt-20 sm:px-10 sm:pb-[110px] sm:pt-[130px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-[60px]">
          <div className="flex max-w-[600px] flex-col gap-[18px]">
            <span className="font-serif text-[15px] italic text-or">
              ( {dict.gallery.paren} )
            </span>
            <h2 className="m-0 text-balance font-serif text-[clamp(36px,4vw,56px)] font-medium leading-[1.08] text-encre">
              {dict.gallery.title1}{" "}
              <em className="text-vert">{dict.gallery.titleEm}</em>
            </h2>
          </div>
          <Link
            href={`/${lang}/galerie`}
            className="inline-flex items-center gap-3 border-b border-or pb-2 text-[13px] font-semibold uppercase tracking-[2.5px] text-vert transition-all hover:gap-[18px] hover:text-or"
          >
            {dict.gallery.link} <span className="text-[16px]">→</span>
          </Link>
        </div>

        <div className="grid auto-rows-[250px] grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
          {dict.gallery.slots.map((label, i) => (
            <div
              key={label}
              // Le span 2×2 ne s'applique que lorsque la grille a au moins 2 colonnes
              // (≥520px de viewport avec le px-5 mobile)
              className={`min-w-0 ${i === 0 ? "min-[520px]:col-span-2 min-[520px]:row-span-2" : ""}`}
            >
              <ImageSlot label={label} radius={6} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
