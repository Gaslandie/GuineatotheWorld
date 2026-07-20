# Guinea to the World (GTTW)

Site vitrine bilingue (FR/EN) de **Guinea to the World**, agence de voyage
internationale basée en Guinée (Conakry) avec une présence au Ghana (Accra).

> Site vitrine — **pas** d'e-commerce. Objectif : générer des demandes de
> contact et des inscriptions. Aucun paiement en ligne.

## Stack

- **Next.js 16** (App Router) + React 19
- **Tailwind CSS v4** (config CSS-first via `@theme` dans `globals.css`)
- **i18n FR/EN** maison (segment `[lang]` + dictionnaires JSON + middleware)
- Formulaire de contact via service tiers (à venir — pas de backend)
- Blog via Sanity (CMS headless, à venir)

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000 → redirige vers /fr
```

Autres scripts : `npm run build`, `npm start`, `npm run lint`.

## Structure

```
src/
├─ middleware.ts              Détection de langue + redirection / → /fr
├─ app/
│  ├─ globals.css             Palette de marque + polices (Tailwind @theme)
│  └─ [lang]/                 Routes localisées (fr | en)
│     ├─ layout.tsx           <html lang>, polices, métadonnées
│     └─ page.tsx             Page d'accueil
├─ components/                Composants UI réutilisables
├─ i18n/
│  ├─ config.ts               Locales et langue par défaut
│  ├─ dictionaries.ts         Chargeur de traductions
│  └─ dictionaries/           fr.json · en.json
└─ lib/
   └─ site.ts                 Contacts, WhatsApp, liste des services
```

## Direction artistique

| Rôle              | Couleur   | Token Tailwind |
| ----------------- | --------- | -------------- |
| Texte             | `#000000` | `noir`         |
| Accent premium    | `#D8A818` | `or`           |
| Secondaire        | `#184830` | `vert`         |
| Boutons d'action  | `#A80000` | `rouge`        |
| Fond              | `#FAF7F0` | `creme`        |

Typographies : **Playfair Display** (titres, `font-serif`) ·
**Source Sans 3** (texte, `font-sans`).

## Contact

- Guinée : +224 623 65 54 68 · Ghana : +233 53 16 91 086
- guineatotheworld@gmail.com · gassamasekou2465@gmail.com
- Accra (Ghana) · Conakry (Guinée)
