# Classic Punk — charte (brand book)

Source : le design system Classic Punk (Claude Design). Règles d'usage des tokens, du logo, de la typo et des gestes punk.

> **La rigueur du classique. L'énergie du punk.**

Classic Punk est le studio de développement indépendant d'Arnaud : sites web, applications iPhone, Mac et web, outils sur mesure. L'identité est celle d'un **label indépendant** dont les apps sont les sorties, à la manière d'un verso de pochette : grille stricte, crédits, numéros de catalogue, filets fins. Le punk vient d'un seul aplat jaune posé de travers et de quelques annotations au marqueur.

**Règle d'or : le classique structure, le punk accentue.** La page est rigoureuse, lisible et professionnelle ; on s'autorise **un seul geste punk par écran** (un Aplat, un Highlight, un Marker, un Strike ou un SloganBanner jaune), jamais sur du texte courant.

## Voix et contenu

- Vouvoiement sur l'accueil, le contact et les pages légales (« Parlons de votre projet »). Tutoiement sur les pages Gig et Last Round, dans la voix des apps (« Le time tracker qui ne te loue rien. »).
- Phrases courtes. Le vocabulaire musical est un clin d'œil, jamais une énigme : chaque phrase doit se comprendre sans connaître la métaphore (« Une première version jouée vaut mieux qu'une symphonie jamais finie. »).
- Titres de section et boutons en capitales ; titres d'items courts terminés par un point (« Sites web. », « La justesse. »).
- Les apps sont des sorties numérotées : `CP-001` Gig (« un set Classic Punk »), `CP-002` Last Round (« une manche Classic Punk »). Les sections d'une page sont des pistes : Face A (le label, les apps), Face B (les services, la référence) — `A1`, `A2`, `B1`…
- Pas d'emoji. Pas de chiffres non vérifiés : les chiffres de Guitar Social Club sont validés avec l'associé avant publication.
- Les textes du site sont dans `classic-punk_contenus.md`, à reprendre tels quels.

## Logo

- Le logo dessine les initiales avec un disque et sa pochette : le disque noir, étiquette jaune et trou central, forme le **C** ; la pochette noire porte un **P jaune qui touche ses quatre bords**. Un jour vide sépare le disque de la pochette.
- Utilisez le composant `Logo` ou les fichiers du groupe d'assets Logos. Versions : `light` (sur cp-paper ou blanc), `dark` (sur cp-inverse : disque crème, P jaune seul), `black` et `white` (une couleur, pour le tampon, la gravure et l'impression).
- Formats : horizontal (symbole + « CLASSIC PUNK » en Archivo étendu, vectorisé), symbole seul, symbole carré pour le favicon et l'avatar.
- Tailles minimales : horizontal 28 px de haut ; symbole 32 px ; en dessous, et pour le favicon (16 et 32 px), le symbole carré.
- Zone de protection : un vide égal à la moitié de la hauteur du disque tout autour.
- Interdits : recolorer, ajouter un contour ou une ombre, incliner le logo, le poser sur une photo chargée ou sur cp-accent (utilisez `black`), redessiner le wordmark dans une autre police. Le logo ne contient ni médiator (celui de Gig) ni badge (celui de Last Round), et ne doit jamais les écraser lorsqu'il les côtoie.

## Couleurs

- Fond de page : `cp-paper`. Bandes alternées : `cp-paper-sunk`. Champs et cartes détachées : `cp-paper-raised`.
- Texte : `cp-ink` pour le principal, `cp-ink-2` pour les chapeaux et descriptions, `cp-ink-3` pour les crédits et aides. Les trois tiennent au moins 4,5:1 sur les trois papiers.
- **`cp-accent` (jaune presse) n'est jamais une couleur de texte** : uniquement en aplat (Aplat, Highlight, badge « Bientôt », bandeau, étiquette du logo, colonne mise en avant d'un tableau de prix), avec `cp-on-accent` dessus.
- `cp-marker` (bleu) pour les annotations, le survol des liens et le focus. `cp-inverse` (noir) pour le pied de page, le bandeau slogan, la Face B du manifeste et l'appel final, avec `cp-on-inverse` et `cp-on-inverse-2`.
- États : `cp-success` (« Disponible », envoi réussi) et `cp-error` (erreurs) sont toujours doublés d'une icône et d'un mot ; `cp-disabled` / `cp-on-disabled` pour « Bientôt sur l'App Store ».
- **Couleurs invitées** : chaque app garde sa pochette. Les pages Gig et Last Round, et leurs visuels sur l'accueil, basculent sur les couleurs de l'app (`gig-*` : rose `gig-punk`, papier, ruban ; `lr-*` : nuit `lr-background`, violet `lr-primary`, jaune `lr-secondary`), seulement dans le contenu ; l'en-tête et le pied de page restent Classic Punk. Les bandes de couleur des AppCard prennent `gig-punk` et `lr-primary`. Les polices des apps (Anton pour Gig ; Lilita One et Rubik pour Last Round) ne s'utilisent que dans leurs captures et logos, jamais dans le texte du site.

## Typographie

Une seule famille, Archivo, jouée en trois largeurs, plus une mono et un marqueur. Toutes sont sous licence libre (Archivo et JetBrains Mono : SIL OFL 1.1 ; Permanent Marker : Apache 2.0) et auto-hébergées depuis `fonts/` (≈ 140 ko au total, sous-ensemble latin, français complet).

- **Archivo Condensed** (900) — styles `display-xl`, `display-l`, `display-m` : les titres affiche, en capitales. Un seul `display-xl` par page.
- **Archivo Expanded** (800) — `title-l`, `title-m`, `title-s` : H2, H3, noms d'apps, wordmark du logo.
- **Archivo** (400–700) — `lead`, `body`, `body-s`, `label` : le texte courant (lignes de 60 à 75 caractères, `container-text`), les boutons en capitales.
- **JetBrains Mono** (400–600) — `meta`, `catalog`, `mono-body` : crédits, numéros de catalogue, plateformes, en capitales espacées.
- **Permanent Marker** — `marker` : annotations seulement, en `cp-marker`.
- Mobile (390 px) : `display-xl` et `display-l` descendent à `display-m`, `title-l` à 28 px, `lead` à 18/28.

## Grille, espaces, formes

- Contenu sur 12 colonnes, `container-max` 1200 px ; marges latérales `gutter-desktop` (32 px) et `gutter-mobile` (16 px) ; points de rupture `bp-md` (768), `bp-lg` (1024), maquettes à 1440 et 390 px.
- Structure en cellules séparées par des filets `cp-rule` de `border-hair` (1 px) ; un filet `border-heavy` (3 px) ouvre chaque section, comme le haut d'un verso de pochette. `cp-hairline` n'est qu'un séparateur discret à l'intérieur d'une cellule.
- Espacements sur une base de 4 px (`space-1` à `space-10`) : `space-5` pour le padding des cellules, `space-9` (desktop) et `space-8` (mobile) entre les sections.
- **Tout est carré** (`radius-0`) ; `radius-disc` est réservé aux disques.
- Pas d'ombre floue. Seule ombre : `shadow-sleeve`, un décalage net de 6 px au survol des cartes et des boutons secondaires (la pochette qui glisse).

## Gestes punk

- **Aplat** : rectangle `cp-accent` incliné de `tilt-aplat` (−6°), derrière un titre display. Le geste signature.
- **Highlight** : un mot surligné en jaune dans un titre (« L'énergie du *punk.* »).
- **Marker** : 3 à 6 mots manuscrits en `cp-marker`, inclinés de `tilt-marker`.
- **Strike** : un mot barré au marqueur, pour ce qu'on refuse (« par défaut »).
- Rotation maximale `tilt-max` (±8°), jamais sur du texte courant. Pas de têtes de mort, de « A » anarchiste, d'épingles, de faux sang, de dorures ni de dégradés.

## Iconographie

- Jeu maison dessiné pour le label (groupe d'assets Icons et composant `Icon`) : grille 24 px, trait 2 px, extrémités carrées, angles vifs, sans remplissage. Les SVG sont en encre `#121212` ; le composant prend `currentColor`.
- Icônes : mail, arrow-right, external, mac, iphone, lock, check, chevron-down, menu, close, alert. Tailles 16 à 24 px, toujours avec un mot (sauf menu et fermer, qui ont un titre accessible).

## Photo

- Portrait d'Arnaud en noir et blanc, cadrage serré, grain léger, contraste franc, fond neutre. Jamais teinté en jaune ; l'aplat peut passer derrière l'image, de travers.
- Captures des apps sans cadre d'appareil chargé, sur `cp-paper-sunk` ou sur la couleur invitée de l'app.

## Interaction et accessibilité

- Focus : anneau plein de 2 px `cp-focus`, décalé de 2 px, sur les papiers ; `cp-focus-inverse` (jaune) sur `cp-inverse`. Posez la classe `cp-root` sur `<body>` pour l'activer.
- Mouvements sobres (120 à 150 ms) : décalage de pochette au survol, rotation du chevron de FAQ. Tout est coupé quand `prefers-reduced-motion` est actif.
- Contrastes WCAG AA vérifiés pour chaque couple texte / fond cité dans les notes des tokens.

## Composants

`Logo`, `Icon` · `Button`, `ButtonGroup`, `TextLink` · `Badge`, `Credits`, `Notice` · `SectionHead`, `AppCard`, `TrackList`, `Manifesto`, `Stats`, `SloganBanner`, `Faq`, `PriceTable` · `Aplat`, `Highlight`, `Marker`, `Strike` · `Field` · `SiteHeader`, `SiteFooter`. Ils sont exposés sur `window.ClassicPunk` (React 18) ; chacun a sa fiche d'usage.

Composition de la page d'accueil : `SiteHeader` → hero (`Credits`, titre `display-xl` avec `Highlight` ou `Aplat`, `lead`, `ButtonGroup`) → `SectionHead` + `Manifesto` → `SectionHead` + deux `AppCard` → `SectionHead` + `TrackList` en colonnes (services) → `SectionHead` + `Stats` (Guitar Social Club) → à propos → `SloganBanner` ou appel final → `SiteFooter`.

## Utiliser le système dans une page

Chargez, dans cet ordre : `tokens.css` (variables `--cp-*`, `--gig-*`, `--lr-*`, `--space-*`, `--font-*` et les `@font-face` des polices de `fonts/`), `components/bundle.css`, React 18 et ReactDOM 18, puis `components/bundle.js`, qui expose `window.ClassicPunk`. Posez la classe `cp-root` sur `<body>`.
