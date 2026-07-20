import type { Dictionary } from "@/i18n/dictionaries";

/** Bandeau défilant des destinations (liste doublée pour une boucle continue). */
export default function Ticker({ dict }: { dict: Dictionary }) {
  const items = [...dict.ticker, ...dict.ticker];
  return (
    <div className="overflow-hidden border-b border-[rgba(216,168,24,0.25)] bg-foret py-4">
      <div className="flex w-max animate-[marquee_30s_linear_infinite]">
        {items.map((dest, i) => (
          <span
            key={`${dest}-${i}`}
            className="flex items-center gap-7 whitespace-nowrap px-7"
          >
            <span className="font-serif text-[17px] italic tracking-[1px] text-[rgba(250,247,240,0.85)]">
              {dest}
            </span>
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-or" />
          </span>
        ))}
      </div>
    </div>
  );
}
