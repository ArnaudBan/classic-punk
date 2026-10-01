# Classic Punk — composants

Fiches d'usage des composants du design system. L'implémentation de référence (React, à ne PAS livrer) est dans `reference/bundle.js` ; les styles dans `reference/bundle.css` (classes `cp-*`, réutilisables telles quelles en Astro). Les props sont typées dans `reference/index.d.ts`.


## Logo

Le logo Classic Punk : le disque à étiquette jaune forme le C, la pochette noire porte un P jaune qui touche ses quatre bords.

**Props** : `variant` `"horizontal"` (défaut, symbole + « CLASSIC PUNK ») · `"symbol"` (130 × 100) · `"square"` (version resserrée pour les petites tailles) ; `tone` `"light"` (sur cp-paper ou blanc) · `"dark"` (sur cp-inverse) · `"black"` · `"white"` (monochromes : tampon, gravure, impression une couleur) ; `height` en px (défaut 40) ; `title` (texte alternatif, défaut « Classic Punk »).

- Le logo horizontal mesure au minimum 28 px de haut (≈ 160 px de large). Le symbole large descend jusqu'à 32 px de haut. En dessous, et pour le favicon, utilisez `variant="square"` (lisible à 16 px).
- Zone de protection : laissez autour du logo un vide égal à la moitié de la hauteur du disque (50 unités sur 100).
- Le jaune ne change jamais. Sur fond sombre, `tone="dark"` : le disque passe en crème, la pochette disparaît et le P jaune reste seul.
- Ne pas : recolorer, ajouter un contour ou une ombre, incliner le logo, poser la version `light` sur une photo ou sur cp-accent (utilisez `black`).
- Les fichiers SVG équivalents sont dans le groupe d'assets Logos.

## Icon

Jeu d'icônes au trait du label : grille 24 px, trait de 2 px, extrémités carrées, angles vifs.

**Props** : `name` (`mail`, `arrow-right`, `external`, `mac`, `iphone`, `lock`, `check`, `chevron-down`, `menu`, `close`, `alert`) ; `size` en px (défaut 20) ; `title` pour une icône porteuse de sens (sinon elle est décorative et masquée aux lecteurs d'écran).

- L'icône prend la couleur du texte (`currentColor`) : cp-ink sur papier, cp-on-inverse sur fond sombre.
- Tailles : 16, 18, 20, 24 px. Jamais en dessous de 16.
- Toujours accompagnée d'un mot, sauf pour les boutons menu / fermer (qui portent alors un `title`).

## Button

Bouton d'action, carré et en capitales, rendu en `<a>` quand il a un `href`, sinon en `<button>`.

**Props** : `variant` `"primary"` (noir plein, l'action principale d'un écran) · `"secondary"` (contour, la pochette se décale au survol) · `"accent"` (jaune, réservé à l'envoi d'un formulaire ou à un appel unique sur fond clair) · `"inverse"` (sur cp-inverse) ; `size` `"md"` · `"lg"` ; `href`, `target` ; `icon` / `iconAfter` (nom d'Icon) ; `soon` (état « Bientôt » : désactivé mais lisible, `aria-disabled`) ; `disabled` ; `onClick` ; `children` (libellé).

- Un seul `primary` par section. Libellés au vouvoiement sur l'accueil et le contact (« Parler de votre projet »), au tutoiement sur les pages d'app.
- `soon` remplace les badges App Store tant que les apps ne sont pas publiées (« Bientôt sur le Mac App Store », icône `mac`). Les badges officiels d'Apple ne sont jamais redessinés ni recolorés.
- La flèche `arrow-right` se place après le libellé, pour un lien qui mène ailleurs.

## ButtonGroup

Rangée de boutons espacés de space-3, qui passe à la ligne sur mobile.

**Props** : `children` (des Button). Mettez le `primary` en premier, puis un `secondary`. Deux boutons au maximum dans un hero.

## TextLink

Lien dans le texte : graisse 600, soulignement jaune de 2 px qui devient bleu marqueur au survol.

**Props** : `href` ; `external` (ouvre dans un nouvel onglet et ajoute l'icône `external`) ; `children`.

- Pour les liens de fin de carte (« Découvrir Gig ») et les liens dans le texte courant.
- Sur cp-inverse, le soulignement reste jaune et passe en crème au survol.

## Badge

Étiquette de statut en mono capitales : « Disponible », « Bientôt », « En développement », ou un mot libre (plateforme).

**Props** : `status` `"available"` (vert succès + check) · `"soon"` (aplat jaune) · `"dev"` (contour pointillé + puce) · `"neutral"` (contour) ; `children` remplace le texte par défaut (« Bientôt sur le Mac App Store »).

- Le statut ne repose jamais sur la couleur seule : chaque variante a un mot et une forme distincte.

## Credits

Ligne de crédits en mono capitales, comme au dos d'une pochette ; le premier élément (numéro de catalogue) est en noir et en gras.

**Props** : `items` (tableau de chaînes). Exemple de surtitre de hero : `['CP-000', 'Classic Punk', 'Développement indépendant', 'Depuis 2024']`.

## Notice

Message de retour après une action (envoi du formulaire de contact).

**Props** : `tone` `"success"` · `"error"` ; `title` ; `children` (précision). Annoncé aux lecteurs d'écran (`status` ou `alert`).

- Textes de référence : « Message bien reçu. » / « Je reviens vers vous sous 48 h ouvrées. » et « Le message n'est pas parti. » / « Réessayez dans un instant, ou écrivez-moi directement. »

## SectionHead

En-tête de section façon verso de pochette : filet de tête de 3 px, numéro de piste à gauche, surtitre mono, H2 en Archivo étendu, chapeau.

**Props** : `number` (repère de face et de piste : `A1`, `A2`, `B1`…) ; `eyebrow` ; `title` ; `intro` ; `as` (`"h2"` par défaut) ; `id` (ancre).

- Numérotez les sections de la page dans l'ordre (Face A pour le label, Face B pour les services et la référence).
- Sur mobile, le numéro passe au-dessus du titre et le titre descend à 28 px.

## AppCard

Carte d'une sortie du label (une app) : numéro de catalogue, plateforme, nom, ligne d'endossement, accroche, description, statut et lien.

**Props** : `catalog` (`CP-001`) ; `side` (`A1`) ; `platform` (`Mac`, `iPhone`) ; `name` ; `endorsement` (« un set Classic Punk ») ; `tagline` ; `description` ; `status` et `statusLabel` (voir Badge) ; `href` et `linkLabel` ; `guestColor` (la couleur de l'app, en bande de 12 px en pied de carte).

- `guestColor` reçoit la couleur invitée de l'app : `var(--gig-punk)` pour Gig, `var(--lr-primary)` pour Last Round.
- La carte se décale (shadow-sleeve) au survol. Deux cartes côte à côte au-delà de bp-md, empilées en dessous.

## TrackList

Liste numérotée comme la face d'un disque (A1, A2, A3…) : services, étapes « comment ça marche », fonctions.

**Props** : `items` (`{title, text, number?}`) ; `side` (lettre de face, défaut `A`) ; `columns` (nombre de colonnes en grille ; sans, liste verticale à filets).

- Titres courts terminés par un point (« Sites web. »), texte de 1 à 2 phrases.

## Manifesto

Le manifeste « Classique / Punk », pièce maîtresse de l'accueil : deux faces côte à côte, la Face A claire et ordonnée, la Face B sur cp-inverse avec le mot PUNK sur aplat jaune.

**Props** : `left` et `right` (`{title, items:[{title, text}]}`) ; `outro` (phrase de conclusion sur toute la largeur).

- Une seule fois sur le site. Les deux colonnes doivent avoir le même nombre d'items.
- Sur mobile, la Face B passe sous la Face A.

## Stats

Chiffres clés en grand (Archivo condensé), dans une grille à filets.

**Props** : `items` (`{value, label}`). Trois ou quatre chiffres au maximum.

- Uniquement des chiffres vérifiés. Ceux de Guitar Social Club sont à faire valider avant publication.

## SloganBanner

Bandeau slogan pleine largeur en Archivo condensé capitales.

**Props** : `tone` `"inverse"` (défaut, noir) · `"accent"` (jaune) ; `children` (le slogan, court : « Pas d'abonnement. Pas de bullshit. »).

- Un bandeau par page au maximum. Le bandeau jaune compte comme le geste punk de l'écran.

## Faq

Questions fréquentes dépliables (`details` / `summary` natifs, accessibles au clavier).

**Props** : `items` (`{q, a, open?}`).

- Questions en Archivo étendu 18 px, réponses en body-s. Tutoiement sur les pages d'app.

## PriceTable

Tableau de prix à filets, avec la formule mise en avant sur aplat jaune.

**Props** : `plans` (`{name, price, note?, highlight?}`) ; `rows` (`{label, values}` : une chaîne, ou `true` pour un « Oui » avec check) ; `priceLabel` ; `caption` (titre lu par les lecteurs d'écran).

- Deux formules au maximum. Prix en Archivo condensé.

## Aplat

L'aplat jaune posé de travers (tilt-aplat, −6°) : le geste punk principal de la piste B.

**Props** : `width`, `height` (px) ; `style` (pour le positionner en absolu derrière un titre ou une image).

- Décoratif (`aria-hidden`). Un aplat par écran au maximum, jamais sous du texte courant.
- Placez-le derrière un titre en display, qui doit rester entièrement lisible en cp-ink.

## Highlight

Surlignage jaune légèrement incliné derrière un mot ou deux (« punk. »).

**Props** : `children`. Réservé aux titres en display ou en title ; un seul mot surligné par titre.

## Marker

Annotation manuscrite au marqueur bleu (Permanent Marker, cp-marker, inclinée de tilt-marker).

**Props** : `children` (3 à 6 mots) ; `style` (position).

- Au plus une par écran. Jamais pour une information indispensable : ce n'est qu'un clin d'œil (« on monte le son ? »).

## Strike

Mot barré d'un trait de marqueur bleu, pour ce que Classic Punk refuse (« par défaut », « abonnement »).

**Props** : `children`. Le texte barré reste lisible et lu par les lecteurs d'écran.

## Field

Champ de formulaire avec libellé, aide et erreur : texte, e-mail, liste déroulante ou zone de message.

**Props** : `name` ; `label` ; `type` `"text"` · `"email"` · `"select"` · `"textarea"` ; `options` (pour `select`) ; `required` (affiche « obligatoire ») ; `help` ; `error` (message ; bordure 2 px cp-error, icône `alert`, `aria-invalid`) ; `placeholder` ; `value` / `defaultValue` / `onChange` ; `disabled`.

- États : vide, rempli, focus (bordure 2 px + anneau bleu), erreur, désactivé.
- Messages d'erreur du site : « Il me faut un nom pour vous répondre. », « Cette adresse e-mail semble incomplète. », « Le message est vide. »

## SiteHeader

En-tête du site : logo horizontal à gauche, navigation en capitales à droite ; sous 768 px, un bouton menu ouvre un panneau plein écran aux liens en display.

**Props** : `current` (href ou libellé de la page active, soulignée en jaune) ; `links` (`{label, href}`, défaut : Accueil · Gig · Last Round · Contact) ; `cta` (`{label, href}`, bouton en bas du menu mobile) ; `homeHref` ; `compact` (force la mise en page mobile, pour les maquettes) ; `defaultOpen` (menu ouvert au rendu).

- Le même en-tête sert aussi aux pages d'app : il ne prend pas la couleur de l'app.

## SiteFooter

Pied de page sur cp-inverse : logo `dark`, signature en display, phrase « fait main », liens, copyright et numéro de catalogue.

**Props** : `signature` ; `text` ; `links` (`{label, href}`) ; `copyright` ; `catalog`. Les valeurs par défaut sont les textes du site.
