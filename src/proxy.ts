import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, type Locale } from "@/i18n/config";

/**
 * Convention Next.js 16 : ce fichier remplace `middleware.ts`.
 * Il détecte la langue et redirige les URL sans préfixe de langue.
 */

/** Négocie la langue à partir de l'en-tête Accept-Language, avec repli sur le FR. */
function getLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (header) {
    const preferred = header
      .split(",")
      .map((part) => part.split(";")[0].trim().split("-")[0].toLowerCase());
    for (const lang of preferred) {
      if ((i18n.locales as readonly string[]).includes(lang)) {
        return lang as Locale;
      }
    }
  }
  return i18n.defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // La langue est-elle déjà présente dans le chemin ? (/fr, /en/...)
  const hasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  // Sinon on redirige vers la version localisée (FR par défaut).
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // On ignore les fichiers internes de Next, l'API et tout ce qui a une extension.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
