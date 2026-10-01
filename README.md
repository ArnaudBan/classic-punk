# Classic Punk — site vitrine

Site statique Astro. Cahier des charges : `classic-punk_cdc-dev.md` · textes : `classic-punk_contenus.md` · apparence : `design/` (export Claude Design, fait foi).

## Scripts

| Commande | Rôle |
|---|---|
| `npm install` | Installation (Node ≥ 22.12) |
| `npm run dev` | Serveur de développement |
| `npm run build` | Génère le site dans `dist/` |
| `npm run preview` | Sert `dist/` en local |
| `npm run check` | Vérification TypeScript / Astro |

## Où modifier quoi

- **Textes de l'accueil** : `src/data/home.ts` (repris à l'identique des contenus).
- **Libellés d'interface** (navigation, boutons, badges) : `src/i18n/fr.ts`.
- **Valeurs susceptibles de changer** (domaine, e-mail, chiffres Guitar Social Club, options) : `src/config/site.ts`. Les valeurs provisoires sont marquées `TODO`.
- **Apps** : `src/content/apps/*.md`. Pour publier une app : `status: available` + `storeUrl` (le build échoue si `storeUrl` manque).

## Styles

- `src/styles/tokens.css` et `src/styles/components.css` sont copiés tels quels depuis `design/tokens.css` et `design/reference/bundle.css` : à remplacer d'un bloc à chaque nouvel export du design, ne pas les modifier à la main.
- Les composants `.astro` reproduisent le balisage et les classes `cp-*` de `design/reference/bundle.js`.
- La mise en page propre à une section est dans le `<style>` de son composant ; `global.css` ne contient que la base.
