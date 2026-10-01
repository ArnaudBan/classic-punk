# Classic Punk — export design pour Claude Code

Ce dossier est **l'export de Claude Design** cité par le cahier des charges (`../classic-punk_cdc-dev.md`, § sources) : il **fait foi pour l'apparence**. Les textes viennent de `../classic-punk_contenus.md`, le comportement et la technique du cahier des charges.

## Contenu

| Chemin | Quoi | Où ça va dans le projet Astro |
|---|---|---|
| `tokens.css` | Toutes les variables (`--cp-*`, couleurs invitées `--gig-*` / `--lr-*`, `--space-*`, `--radius-*`, `--border-*`, `--tilt-*`, layout, `--font-*`), les `@font-face` et les classes de styles de texte (`.display-xl`, `.title-l`, `.body`, `.meta`…) | `src/styles/tokens.css` (tel quel) |
| `tokens.json` | Les mêmes valeurs avec une note d'usage par token (contrastes inclus) | Référence, ne pas importer |
| `fonts/*.woff2` + licences | Archivo (3 largeurs figées : Text 400–700, Condensed 800–900, Expanded 700–800), JetBrains Mono 400–600, Permanent Marker. Sous-ensemble latin, ≈ 140 ko au total | `public/fonts/` (les `@font-face` pointent vers `/fonts/…`). Précharger `Archivo-Condensed` et `Archivo-Text` |
| `brand-book.md` | La charte : voix, logo, couleurs, typo, grille, gestes punk, icônes, photo, accessibilité | À lire en premier |
| `components.md` | Une fiche par composant : rôle, props, règles | À lire avant de coder un composant |
| `reference/bundle.css` | Les styles de tous les composants, en classes `cp-*` qui n'utilisent que les variables de `tokens.css` | `src/styles/components.css` (ou découpé par composant) |
| `reference/bundle.js`, `reference/index.d.ts` | Implémentation **React de référence** (structure HTML exacte, classes, états, textes par défaut) | **Ne pas livrer** : le site n'a pas de framework UI. Porter en `.astro` |
| `assets/logos/` | Logo en SVG vectorisé : horizontal, symbole, symbole carré × `light`, `dark`, `black`, `white` | `src/assets/brand/` ou en SVG inline dans `Logo.astro` |
| `assets/icons/` | 11 icônes au trait (24 px, trait 2, extrémités carrées) | `Icon.astro` en SVG inline, `stroke="currentColor"` |
| `assets/favicon/` | `favicon.svg`, `favicon.ico` (16/32/64), `apple-touch-icon.png` (180) | `public/` |
| `assets/apps/` | Visuels de la home : icônes et captures de Gig et Last Round, ruban de Gig | `src/assets/apps/` (via `astro:assets`). Sources haute définition : `../gig/docs/captures/`, `../gig/design/assets/`, `../last-round/design/app-icon/`, `../last-round/design/maquettes/02-accueil.png` |
| `maquettes/home-desktop.png`, `home-mobile.png`, `home-menu-mobile.png` | Le rendu attendu de la home à 1440 px, 390 px, et menu mobile ouvert | Référence visuelle |
| `maquettes/home.html` | La home rendue en HTML statique avec les vraies classes `cp-*` (à ouvrir dans un navigateur) | Référence de balisage, pas du code à livrer |

## Règles d'implémentation

1. **Pas de React.** Chaque composant du design system devient un composant `.astro` qui produit **le même HTML et les mêmes classes `cp-*`** que `reference/bundle.js`, stylé par `bundle.css`. JavaScript vanilla seulement pour le menu mobile (bouton `aria-expanded`, panneau `#cp-menu`, classe `cp-header--open`) et le formulaire.
2. **Correspondance avec la structure du cahier des charges :**

| Design system | Composant du cahier des charges |
|---|---|
| `SiteHeader` | `Header.astro` + `MobileMenu.astro` |
| `SiteFooter` | `Footer.astro` |
| `Credits`, `Aplat`, titre `.h1` | `Hero.astro` |
| `SectionHead` | nouveau `SectionHead.astro` (en-tête numéroté A1, A2, B1… de chaque section) |
| `Manifesto` | `Manifesto.astro` |
| `AppCard` (+ visuel « pochette ») | `AppCard.astro` |
| `TrackList` | `ServiceList.astro`, `Steps.astro`, `FeatureList.astro` |
| `Stats` | dans `Reference.astro` |
| `Button` (`soon`) | `StoreButton.astro` (état « Bientôt » désactivé) et boutons d'action |
| `Badge` | `StatusBadge.astro` |
| `SloganBanner`, `Faq`, `PriceTable` | composants du même nom |
| `Field`, `Notice` | `ContactForm.astro` |
| `Logo`, `Icon`, `Highlight`, `Marker`, `Strike` | petits composants utilitaires |

3. **Tokens uniquement**, jamais de valeur en dur. Les pages d'app posent `data-theme="gig"` ou `data-theme="last-round"` et redéfinissent leurs accents à partir de `--gig-*` / `--lr-*` ; l'en-tête et le pied de page restent Classic Punk.
4. **Un seul geste punk par écran** (aplat, surlignage, marqueur ou mot barré), jamais sur du texte courant. Le jaune `--cp-accent` n'est jamais une couleur de texte.
5. **Accessibilité** : focus visible (anneau 2 px `--cp-focus`, jaune sur fond sombre), `prefers-reduced-motion` respecté (déjà dans `bundle.css`), contrastes AA déjà vérifiés pour les couples cités dans `tokens.json`.
6. **Responsive** : un seul point de rupture principal à 768 px (`--bp-md`). Les règles mobiles des composants sont dans `bundle.css` ; celles de la page dans le `<style>` de `maquettes/home.html`.

## La home (`src/pages/index.astro`)

Ordre des sections, textes du § 1 de `classic-punk_contenus.md`, rendu dans `maquettes/` :

1. En-tête (Accueil actif).
2. **Hero** : crédits mono `CP-000 · Classic Punk · Développement indépendant · Depuis 2024`, H1 « La rigueur du classique. » en Archivo Condensed + « L'énergie du punk. » en Archivo Expanded, aplat jaune incliné derrière, chapeau, boutons « Découvrir les apps » (`#apps`) et « Parler de votre projet » (`/contact/`). À droite, un sommaire numéroté avec ancres vers les sections.
3. **A1 `#manifeste`** : « Deux écoles que tout oppose. Un seul son. » + manifeste Classique / Punk.
4. **A2 `#apps`** : « Les sorties du label » ; deux colonnes, chacune = une pochette aux couleurs de l'app (Gig : `--gig-punk`, icône, capture du menu inclinée avec le ruban ; Last Round : `--lr-background` à points, icône, écran d'accueil) + une `AppCard`.
5. **B1 `#services`** : « Ce que je joue pour vous » en trois colonnes, puis « Vous avez un projet… ? Parlons-en. »
6. **B2 `#reference`** (fond `--cp-paper-sunk`) : Guitar Social Club, texte + chiffres clés (valeurs dans `src/config/site.ts`).
7. **B3 `#a-propos`** : « Derrière la console », portrait + texte.
8. **B4 `#contact`** (fond `--cp-inverse`) : « On monte le son ? » avec surlignage jaune, bouton « Me contacter ».
9. Pied de page.

## Points encore ouverts

- Portrait d'Arnaud à fournir (noir et blanc, grain, cadrage serré) : prévoir un emplacement 4:5.
- Chiffres de Guitar Social Club à valider avec l'associé.
- Phrase sur le groupe de punk hardcore : option à valider (prévoir un booléen dans `site.ts`).
- Images Open Graph (`og-*.png`, 1200 × 630) : pas encore produites.
