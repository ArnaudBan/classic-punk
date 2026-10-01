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
| `maquettes/gig-desktop.png`, `gig-mobile.png`, `gig.html` | La page Gig (`/gig/`) à 1440 et 390 px, et son balisage de référence | Référence visuelle et de balisage |
| `maquettes/lastround-desktop.png`, `lastround-mobile.png`, `last-round.html` | La page Last Round (`/last-round/`) à 1440 et 390 px, et son balisage de référence | Référence visuelle et de balisage |
| `maquettes/contact-desktop.png`, `contact-mobile-etats.png`, `contact.html` | La page Contact à 1440 px (formulaire vide) et en mobile dans ses 5 états : vide, rempli, erreurs de champ, échec d'envoi, message envoyé | Référence visuelle et de balisage |
| `maquettes/legal-desktop.png`, `legal-mobile.png`, `legal.html` | La page Légal à 1440 et 390 px | Référence visuelle et de balisage |
| `maquettes/notfound-desktop.png`, `notfound-mobile.png`, `404.html` | La page 404 à 1440 et 390 px | Référence visuelle et de balisage |
| `assets/og/og-*.png` | Les 5 images de partage (1200 × 630) : accueil, Gig, Last Round, contact, légal | `public/og/` (noms attendus par `Seo.astro`) |
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

## La page Gig (`/gig/`)

Même gabarit que les pages d'app du cahier des charges (hero, comment ça marche, fonctions, prix, FAQ, appel final). Textes du § 2 de `classic-punk_contenus.md`, rendu dans `maquettes/gig-*.png`.

- **Thème** : `<main data-theme="gig">` (l'en-tête et le pied de page restent hors du thème). Le thème est déjà dans `reference/bundle.css` : `--cp-accent` devient le rose `--gig-punk`, le papier `--gig-paper`, le focus `--gig-punk-text`, et les titres affiche passent en **Anton** (`--font-condensed` → `--font-gig-display`). Tous les composants suivent sans code en plus : surlignage, bandeau, colonne mise en avant du tableau de prix.
- **Anton** (`fonts/Anton-Regular.woff2`, police de Gig, OFL) ne se charge que sur cette page : déclarée dans `tokens.css`, elle n'est téléchargée que si un élément l'utilise.
- **Sections** :
    1. Hero : crédits `CP-001 · Gig · Mac · Achat unique · Sans compte ni cloud` ; H1 « Le time tracker qui ne te loue rien. » avec « rien. » surligné ; chapeau ; bouton désactivé « Bientôt sur le Mac App Store » (icône Mac) et lien « Voir comment ça marche » (`#comment`). À droite, le lockup de Gig puis une pochette rose avec les captures du menu (clair et sombre) et le ruban.
    2. Bandeau slogan rose « Pas d'abonnement. Pas de bullshit. ».
    3. A1 `#comment` « Deux clics, et ça joue. » : 4 étapes en colonnes, puis 3 captures légendées (au repos, en scène, Setlist).
    4. A2 « Les trackers de temps sont gris. Pas celui-là. » : 4 arguments + capture de la Setlist d'un client en sombre.
    5. A3 `#prix` : tableau Gratuit / Gig illimité, paragraphe, et l'encart « Ce que Gig ne fait pas » sur ruban kraft (`--gig-tape`).
    6. B1 `#faq` « Questions de tournée » : FAQ (les `[À COMPLÉTER]` du fichier de contenus restent visibles tant qu'ils ne sont pas tranchés).
    7. Appel final sur fond noir « Prêt pour le premier set ? » + bouton désactivé + lien vers `/legal/#gig`.
- **Visuels** : `assets/apps/gig-*` (sources haute définition dans `../gig/docs/captures/` et `../gig/design/assets/`). Quand l'app sera publiée, remplacer les boutons « Bientôt » par le badge officiel Apple.

## La page Last Round (`/last-round/`)

Même gabarit que Gig, textes du § 3 de `classic-punk_contenus.md`, rendu dans `maquettes/lastround-*.png`.

- **Thème** : `<main data-theme="last-round">`. Last Round est une app sombre : le thème inverse papier et encre (fond `--lr-background` à points, texte `--lr-text`, filets `--lr-rule`), l'accent devient le jaune `--lr-secondary`, les fonds inversés passent en violet `--lr-primary`, les titres affiche en **Lilita One** et les chiffres en **Rubik ExtraBold** (`fonts/`, OFL, chargées seulement sur cette page). Tout est dans `reference/bundle.css`.
- **Sections** :
    1. Hero (fond à points) : crédits `CP-002 · Last Round · iPhone · iOS 17 et plus · Sans compte ni pub` ; H1 « La dernière manche, c'est toi qui la décides. » avec « toi » surligné ; chapeau ; bouton désactivé « Bientôt sur l'App Store » (icône iPhone) + lien `#comment` ; badge « En développement » + « Sortie : [À COMPLÉTER : période] ». À droite, icône LR et deux écrans (accueil, manche en cours) au contour 3 px et à l'ombre dure de l'app.
    2. A1 `#comment` « Prêt ? Joue. Pause. Game over. » : 4 étapes + 4 écrans légendés (accueil, durée, décompte, fin de manche).
    3. A2 « Tout ce qu'il faut. Rien de plus. » : 6 fonctions + écran Semaine + **widget (petit)**. Le widget n'est pas encore dessiné dans l'app : c'est une proposition construite avec ses tokens (jauge `--lr-ok`, chiffres Rubik), à remplacer par une vraie capture.
    4. A3 `#parents` « Un outil pour apprendre à s'arrêter, pas un mouchard. » : texte + encart « Aucune donnée ne quitte l'iPhone » (4 lignes avec cadenas). La note interne du fichier de contenus sur la V2 n'est pas affichée.
    5. B1 `#faq` « Questions avant la partie ».
    6. Appel final sur violet « Prêt pour la dernière manche ? » + bouton désactivé + lien `/legal/#last-round`.
- **Visuels** : `assets/apps/lr-*.webp` (réduits) ; sources @3x dans `../last-round/design/maquettes/` et l'icône dans `../last-round/design/app-icon/`.

## La page Contact (`/contact/`)

Textes du § 4 de `classic-punk_contenus.md`. Pas de thème d'app.

- **Hero** : crédits `CP-000 · Contact · Réponse sous 48 h ouvrées`, H1 « Parlons-en. » (« en. » surligné), chapeau.
- **Deux colonnes** (une seule sous 768 px) :
    - à gauche, le formulaire dans un cadre (`--cp-paper-raised`, filet 1 px, en-tête mono `CP-000 · Formulaire` + « Tous les champs sont obligatoires ») : Nom et E-mail côte à côte (aide « pour que je puisse vous répondre »), sujet en liste (`Un projet · Support Gig · Support Last Round · Autre chose`), message, bouton `accent` « Envoyer », mention de confidentialité avec lien `/legal/#confidentialite` ;
    - à droite, deux encarts : **Coordonnées** (e-mail et réseaux, encore à compléter) et **Support des apps** (texte + liens « Support Gig » → `/contact/?sujet=gig`, « Support Last Round » → `/contact/?sujet=last-round`, avec les icônes des apps).
- **États** (voir `contact-mobile-etats.png`) :
    - **erreurs de champ** : bordure 2 px `--cp-error`, icône alerte et message sous le champ (« Il me faut un nom pour vous répondre. », « Cette adresse e-mail semble incomplète. », « Le message est vide. »), `aria-invalid` et `aria-describedby` ;
    - **échec d'envoi** : `Notice` d'erreur en haut du formulaire (« Le message n'est pas parti. … »), les champs gardent leur contenu ;
    - **succès** : le formulaire est remplacé par la `Notice` de succès (« Message bien reçu. Je reviens vers vous sous 48 h ouvrées. »), un récapitulatif mono (sujet, e-mail) et un bouton « Retour à l'accueil ».
- Le paramètre `?sujet=gig` ou `?sujet=last-round` présélectionne le sujet (JavaScript vanilla, cf. cahier des charges).

## La page Légal (`/legal/`)

Textes du § 5 de `classic-punk_contenus.md` (la note interne « squelette à faire relire » n'est pas affichée). Page de lecture : priorité à la lisibilité.

- **Hero** : crédits `CP-000 · Légal · Mentions · Confidentialité · Conditions`, H1 en Archivo Condensed 80 px (44 px en mobile), chapeau.
- **Deux colonnes** (4/8) : à gauche un **sommaire** collant (`position: sticky`) numéroté 01 à 05 avec sous-entrées pour Gig et Last Round ; à droite le texte, 680 px de large maximum, corps 17/28.
- Chaque partie s'ouvre sur un filet de 3 px et un numéro mono ; ancres exactes du fichier de contenus : `#mentions`, `#confidentialite`, `#gig`, `#gig-confidentialite`, `#gig-conditions`, `#last-round`, `#last-round-confidentialite`, `#last-round-conditions`, `#propriete`.
- Les mentions légales sont une liste de définitions (`<dl>`) à filets ; en mobile, intitulé au-dessus de la valeur.
- Les valeurs encore inconnues apparaissent en **mono sur fond grisé avec un pointillé** (`[À COMPLÉTER]`), pour qu'aucune ne passe inaperçue. Elles viennent de `site.ts > legal` ; le build doit avertir tant qu'il en reste (cf. cahier des charges).

## La page 404

- Crédits `CP-404 · Erreur 404 · Page introuvable`, H1 « Fausse note. » en Archivo Condensed 136 px (76 px en mobile) avec « note. » surligné, texte « Cette page n'existe pas, ou elle a quitté la scène. », bouton « Retour à l'accueil ».
- À droite (en dessous sur mobile), un **disque rayé** en SVG inline : vinyle noir, sillons `--cp-ink-2`, étiquette jaune « 404 · CP-404 · FACE B », rayure couleur papier. Le SVG est dans `maquettes/404.html`.
- Aucun lien de navigation n'est marqué actif dans l'en-tête.

## Les images de partage (`assets/og/`)

Cinq PNG de 1200 × 630, déjà rendus, à copier dans `public/og/` : `og-home.png`, `og-gig.png`, `og-last-round.png`, `og-contact.png`, `og-legal.png`. Chacune reprend la DA de sa page : accueil (signature + aplat jaune), Gig (Anton, pochette rose, capture du menu), Last Round (nuit à points, Lilita One, deux écrans), contact (« Parlons-en. » sur fond noir), légal (titre sobre). La 404 n'a pas d'image de partage (elle n'est pas indexée).

## Mise à jour du 1er octobre (après la première livraison)

Fichiers modifiés depuis la première version de cet export, à resynchroniser dans le projet : `tokens.css` (Anton, Lilita One, Rubik, nouvelles couleurs `--lr-surface-raised`, `--lr-rule`, `--lr-ok`, `--lr-danger`), `tokens.json`, `reference/bundle.css` (thèmes `[data-theme="gig"]` et `[data-theme="last-round"]` complet, tableau de prix lisible sur mobile, grilles sans débordement, surlignage lisible sur fond sombre), `fonts/` (Anton, Lilita One, Rubik ExtraBold), `brand-book.md`.

## Points encore ouverts

- Portrait d'Arnaud à fournir (noir et blanc, grain, cadrage serré) : prévoir un emplacement 4:5.
- Chiffres de Guitar Social Club à valider avec l'associé.
- Phrase sur le groupe de punk hardcore : option à valider (prévoir un booléen dans `site.ts`).
- Page Gig : prix confirmé à 4,99 € ; restent la version minimale de macOS, le transfert des données, les clients archivés et la langue de lancement (FAQ).
- Page Contact : adresse e-mail de contact et réseaux sociaux à fournir.
- Page Last Round : période de sortie, modèle économique (FAQ « Combien coûte Last Round ? ») et vraie capture du widget.
