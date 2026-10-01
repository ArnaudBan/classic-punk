# Classic Punk — site vitrine

Site statique Astro. Cahier des charges : `classic-punk_cdc-dev.md` · textes : `classic-punk_contenus.md` · apparence : `design/` (export Claude Design, fait foi).

## Scripts

| Commande          | Rôle                                                                                   |
| ----------------- | -------------------------------------------------------------------------------------- |
| `npm install`     | Installation (Node ≥ 22.12, version de la CI dans `.nvmrc`)                            |
| `npm run dev`     | Serveur de développement                                                               |
| `npm run build`   | Génère le site dans `dist/`                                                            |
| `npm run preview` | Sert `dist/` en local                                                                  |
| `npm run check`   | Vérification TypeScript / Astro (`astro check`)                                        |
| `npm run lint`    | ESLint, avec les règles d'accessibilité des templates `.astro`                         |
| `npm run format`  | Formate le code avec Prettier (`format:check` pour vérifier sans modifier)             |
| `npm run todo`    | Liste les `TODO` et les marqueurs `[À COMPLÉTER]`, `[À VÉRIFIER]`, `[OPTION]` restants |
| `npm test`        | Build, puis tests sur `dist/` et sur le schéma des apps (voir `tests/`)                |
| `npm run verify`  | Tout ce que vérifie la CI : lint, format, types, build et tests                        |

Les tests vérifient notamment : les ancres légales déclarées chez Apple, un seul `<h1>` et un title / une meta description par page, l'absence de lien interne cassé et de script en ligne (CSP), l'exclusion de la 404 du sitemap, et le refus d'une app `available` sans `storeUrl`.

Prettier ignore volontairement `design/`, les documents `classic-punk_*.md` et les fichiers copiés tels quels depuis l'export design (`src/styles/tokens.css`, `src/styles/components.css`, `src/data/brand-svg.ts`).

## Où modifier quoi

- **Textes de l'accueil** : `src/data/home.ts` (repris à l'identique des contenus).
- **Libellés d'interface** (navigation, boutons, badges) : `src/i18n/fr.ts`.
- **Valeurs susceptibles de changer** (domaine, e-mail, chiffres Guitar Social Club, options) : `src/config/site.ts`. Les valeurs provisoires sont marquées `TODO`.
- **Apps** : `src/content/apps/*.md`. Pour publier une app : `status: available` + `storeUrl` (le build échoue si `storeUrl` manque).

## Styles

- `src/styles/tokens.css` et `src/styles/components.css` sont copiés tels quels depuis `design/tokens.css` et `design/reference/bundle.css` : à remplacer d'un bloc à chaque nouvel export du design, ne pas les modifier à la main.
- Les composants `.astro` reproduisent le balisage et les classes `cp-*` de `design/reference/bundle.js`.
- La mise en page propre à une section est dans le `<style>` de son composant ; `global.css` ne contient que la base.

## Contribuer : pull requests vers `main`

On ne pousse plus directement sur `main` : on travaille sur une branche, puis on ouvre une pull request. Le workflow `.github/workflows/ci.yml` (job « Vérifications ») lance lint, format, `astro check`, build et tests sur chaque PR. Une fois la PR mergée, le déploiement part automatiquement.

Pour que GitHub bloque le merge d'une PR en échec : **Settings → Rules → Rulesets → New branch ruleset**, cible `main`, cocher « Require a pull request before merging » et « Require status checks to pass » avec le check **Vérifications**.

## Déploiement

Automatique à chaque push sur `main` (donc à chaque merge) : `.github/workflows/deploy.yml` lance `npm ci`, `npm run check` et `npm test` (build puis tests), puis envoie `dist/` à la racine de l'hébergement Infomaniak par FTP. Si une vérification ou un test échoue, rien n'est envoyé. Un déploiement peut aussi être lancé à la main depuis l'onglet **Actions** de GitHub (« Run workflow »).

- Secrets GitHub requis : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
- Seuls les fichiers modifiés sont envoyés ; l'état est gardé sur le serveur dans `.ftp-deploy-sync-state.json` (bloqué en lecture par le `.htaccess`).
- `public/.htaccess` (Apache) : page 404, redirections HTTPS et `www` → `classic-punk.fr`, en-têtes de sécurité (dont la CSP), cache. **Quand le formulaire de contact sera branché, élargir `connect-src` / `form-action` de la CSP au service d'envoi choisi.**
- Domaine : `https://classic-punk.fr`, à garder identique dans `astro.config.mjs`, `src/config/site.ts`, `public/robots.txt` et `public/.htaccess`.
