/**
 * Emplacement d'image en attente des vrais visuels.
 * Reproduit le langage visuel des placeholders du design
 * (bordure pointillée + libellé monospace, cf. logos partenaires).
 */
export default function ImageSlot({
  label,
  tone = "light",
  radius = 0,
}: {
  label: string;
  /** "light" sur fond crème/blanc, "dark" sur fond sombre (hero). */
  tone?: "light" | "dark";
  /** Rayon des coins en px (0 = angles droits). */
  radius?: number;
}) {
  const dark = tone === "dark";
  return (
    <div
      aria-hidden="true"
      className={`flex h-full w-full items-center justify-center px-6 text-center ${
        dark ? "bg-[#0d1f15]" : "bg-[#efe9dc]"
      }`}
      style={{
        borderRadius: radius,
        border: dark
          ? "1px dashed rgba(216,168,24,0.25)"
          : "1px dashed rgba(24,72,48,0.3)",
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke={dark ? "rgba(216,168,24,0.5)" : "rgba(24,72,48,0.45)"}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span
          className={`font-mono text-[10.5px] leading-relaxed tracking-wide ${
            dark ? "text-[rgba(250,247,240,0.45)]" : "text-[rgba(24,72,48,0.55)]"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
