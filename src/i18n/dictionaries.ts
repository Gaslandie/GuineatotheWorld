import type { Locale } from "./config";

// Les dictionnaires sont chargés dynamiquement côté serveur uniquement.
const dictionaries = {
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["fr"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  (dictionaries[locale] ?? dictionaries.fr)();
