/**
 * Source unique de vérité pour les informations de contact et la config du site.
 * Ces données ne sont pas traduites — le libellé autour est géré dans les dictionnaires i18n.
 */
export const siteConfig = {
  name: "Guinea to the World",
  shortName: "GTTW",
  url: "https://guineatotheworld.com",

  // Téléphones (format affiché)
  phones: {
    guinea: "+224 623 65 54 68",
    ghana: "+233 53 16 91 086",
  },

  // Numéros WhatsApp au format wa.me (chiffres uniquement, indicatif compris)
  whatsapp: {
    guinea: "224623655468",
    ghana: "233531691086",
  },

  emails: {
    primary: "guineatotheworld@gmail.com",
    secondary: "gassamasekou2465@gmail.com",
  },

  locations: {
    ghana: "Accra, Ghana",
    guinea: "Conakry, Guinée",
  },

  // Réseaux sociaux (à compléter plus tard)
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
} as const;

/** Construit un lien wa.me avec un message pré-rempli optionnel. */
export function whatsappLink(number: string, message?: string): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Les 6 services de GTTW. Les libellés/descriptions traduits vivent dans les
 * dictionnaires (clé `slug`) ; ici on garde l'identifiant stable et la route.
 */
export const services = [
  { slug: "immersion-langues", href: "/services/immersion-langues" },
  { slug: "tourisme", href: "/services/tourisme" },
  { slug: "billets-avion", href: "/services/billets-avion" },
  { slug: "visa", href: "/services/visa" },
  { slug: "hebergement", href: "/services/hebergement" },
  { slug: "accompagnement-affaires", href: "/services/accompagnement-affaires" },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

/** Partenaires affichés dans la bande de confiance (logos à venir). */
export const partners = ["TAS School", "Vision Ford", "Modern English"] as const;
