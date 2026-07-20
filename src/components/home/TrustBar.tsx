import type { Dictionary } from "@/i18n/dictionaries";
import { partners } from "@/lib/site";

/** Bande de confiance : partenaires (logos à venir → pastille pointillée). */
export default function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-creme">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-[72px] px-10 py-14">
        <span className="text-[11px] font-semibold uppercase tracking-[4px] text-[rgba(10,10,10,0.4)]">
          {dict.trust.label}
        </span>
        {partners.map((p) => (
          <div key={p} className="flex items-center gap-[14px] opacity-80">
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-dashed border-[rgba(24,72,48,0.35)] font-mono text-[9px] text-vert">
              logo
            </div>
            <span className="font-serif text-[20px] font-medium tracking-[0.5px] text-vert">
              {p}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
