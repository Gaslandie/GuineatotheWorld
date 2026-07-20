/** Icônes SVG du design (tracés repris à l'identique). */

/** Tracés des 6 icônes de services, dans l'ordre des services. */
export const servicePaths = [
  // Immersion & langues — chapeau d'étudiant
  "M12 3l9 5-9 5-9-5 9-5zM5 11v5c0 1.5 3 3 7 3s7-1.5 7-3v-5",
  // Tourisme — globe
  "M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zM3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z",
  // Billets d'avion — avion en papier
  "M2 16l20-6-9 5-2 6-2-4-7-1zM22 10L11 15",
  // Visa — document
  "M4 4h16v16H4zM8 9h8M8 13h5M8 17h3",
  // Hébergement — maison
  "M3 21V8l9-5 9 5v13M9 21v-6h6v6",
  // Achats & affaires — sac
  "M6 7V5a3 3 0 0 1 6 0v2M3 7h18l-1.5 13h-15L3 7z",
] as const;

export function ServiceIcon({ d, size = 22 }: { d: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

const WA_PATH =
  "M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98.99-3.63-.23-.37a9.8 9.8 0 0 1-1.5-5.22c0-5.42 4.41-9.83 9.84-9.83a9.77 9.77 0 0 1 9.82 9.84c0 5.42-4.41 9.81-9.83 9.81m8.36-18.18A11.77 11.77 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.58 5.93L.08 24l6.36-1.67a11.85 11.85 0 0 0 5.61 1.43c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.49-8.39";

export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={WA_PATH} />
    </svg>
  );
}
