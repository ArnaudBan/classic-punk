# Classic Punk — Cahier des charges technique du site vitrine

**Version :** 1.0 — 1er octobre 2026
**Destinataire :** Claude Code
**Stack :** Astro (dernière version stable), site 100 % statique.

## 0. À lire avant de commencer

Ce projet s'appuie sur trois documents :

| Document | Rôle | Règle |
|---|---|---|
| `classic-punk_cdc-dev.md` (ce fichier) | Architecture, pages, exigences techniques | Fait foi pour le « comment » |
| `classic-punk_contenus.md` | Tous les textes, balises SEO, textes alternatifs | **Reprendre les textes à l'identique.** Ne pas réécrire, ne pas inventer. Les marqueurs `[À COMPLÉTER]`, `[À VÉRIFIER]`, `[OPTION]` deviennent des constantes faciles à retrouver (voir §5.3), jamais du texte affiché inventé |
| Export de Claude Design (`tokens.css` / `design-tokens.md`, maquettes, assets) | Couleurs, typographies, composants, visuels | Fait foi pour l'apparence |

Si l'export design n'est pas encore disponible : construire la structure, le contenu et les composants avec des tokens provisoires neutres (noir, blanc, une police système), isolés dans `src/styles/tokens.css`, pour qu'ils soient remplaçables d'un bloc.

En cas de doute ou de contradiction entre les documents : s'arrêter et demander, ne pas trancher seul.

---

## 1. Objectifs

1. Présenter Classic Punk (développement indépendant) et donner envie de prendre contact.
2. Mettre en avant les deux applications, **Gig** (macOS) et **Last Round** (iOS), avec une page chacune.
3. Fournir les URL exigées par Apple pour la soumission des apps : **politique de confidentialité** (obligatoire) et **URL de support** (obligatoire).
4. Respecter les obligations légales françaises d'un site professionnel (mentions légales, information RGPD sur le formulaire).
5. Être excellent techniquement : rapide, accessible, bien référencé. Le site est aussi une vitrine du savoir-faire.
6. Être prêt pour une version anglaise, sans la publier en V1.

## 2. Plan du site et routes

| Page | Route | Notes |
|---|---|---|
| Accueil | `/` | |
| Gig | `/gig/` | |
| Last Round | `/last-round/` | |
| Contact | `/contact/` | Accepte `?sujet=gig` / `?sujet=last-round` pour présélectionner le sujet |
| Légal | `/legal/` | Une seule page avec ancres stables (voir §4.5) |
| 404 | `/404.html` | |

- Slash final systématique (`trailingSlash: 'always'`), `build.format: 'directory'`.
- URL des apps pour App Store Connect (à documenter dans le README) :
  - Gig — confidentialité : `https://[DOMAINE]/legal/#gig-confidentialite` ; support : `https://[DOMAINE]/contact/?sujet=gig`
  - Last Round — confidentialité : `https://[DOMAINE]/legal/#last-round-confidentialite` ; support : `https://[DOMAINE]/contact/?sujet=last-round`
- Ces ancres sont des **URL publiques déclarées chez Apple** : elles ne doivent plus jamais changer. Ajouter un test qui vérifie leur présence dans le HTML généré.
- Domaine : `[À CONFIRMER]` (ex. `classicpunk.fr`). Le centraliser dans `astro.config` (`site`) et `src/config/site.ts`.

## 3. Architecture technique

### 3.1 Principes

- `output: 'static'`. Aucun serveur, aucune base de données.
- TypeScript en mode `strict`.
- **Pas de framework UI** (React, Vue…) : composants `.astro`, et JavaScript vanilla minimal uniquement là où c'est nécessaire (menu mobile, formulaire, présélection du sujet).
- Budget JS côté client : **< 10 ko** compressés au total.
- Polices **auto-hébergées** (aucun appel à Google Fonts au chargement), en WOFF2, avec `font-display: swap` et préchargement des polices du premier écran.
- Images via `astro:assets` (`<Image>` / `<Picture>`), formats AVIF + WebP, dimensions explicites.
- Aucun cookie, aucun traceur en V1.

### 3.2 Arborescence

```text
/
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ README.md                      # installation, scripts, déploiement, URL App Store
├─ public/
│  ├─ favicon.svg  favicon.ico  apple-touch-icon.png
│  ├─ og/                          # og-home.png, og-gig.png, og-last-round.png…
│  ├─ fonts/                       # WOFF2 auto-hébergées
│  └─ robots.txt
└─ src/
   ├─ config/
   │  └─ site.ts                   # domaine, nom, e-mail, réseaux, placeholders légaux
   ├─ content.config.ts            # schémas des collections
   ├─ content/
   │  └─ apps/
   │     ├─ gig.md
   │     └─ last-round.md
   ├─ i18n/
   │  ├─ fr.ts                     # libellés d'interface (nav, boutons, formulaire, erreurs)
   │  └─ en.ts                     # préparé, non publié
   ├─ styles/
   │  ├─ tokens.css                # issu de Claude Design
   │  ├─ fonts.css
   │  └─ global.css
   ├─ assets/                      # images traitées par astro:assets
   │  ├─ brand/  gig/  last-round/
   ├─ layouts/
   │  ├─ BaseLayout.astro          # <head>, header, footer, skip link
   │  └─ AppLayout.astro           # gabarit commun aux pages d'app
   ├─ components/
   │  ├─ Seo.astro
   │  ├─ JsonLd.astro
   │  ├─ Header.astro  MobileMenu.astro  Footer.astro
   │  ├─ Hero.astro
   │  ├─ Manifesto.astro           # bloc Classique / Punk
   │  ├─ AppCard.astro
   │  ├─ ServiceList.astro
   │  ├─ Reference.astro           # Guitar Social Club
   │  ├─ About.astro
   │  ├─ Steps.astro               # « comment ça marche »
   │  ├─ FeatureList.astro
   │  ├─ PriceTable.astro
   │  ├─ Faq.astro                 # <details>/<summary>, sans JS
   │  ├─ StoreButton.astro         # badge officiel Apple ou « Bientôt » désactivé
   │  ├─ StatusBadge.astro
   │  ├─ Screenshots.astro
   │  ├─ SloganBanner.astro
   │  ├─ CtaBlock.astro
   │  ├─ ContactForm.astro
   │  └─ LegalToc.astro
   └─ pages/
      ├─ index.astro
      ├─ gig.astro
      ├─ last-round.astro
      ├─ contact.astro
      ├─ legal.astro
      └─ 404.astro
```

Les deux pages d'app peuvent aussi être générées par une route dynamique `[app].astro` à partir de la collection : au choix, tant que les URL finales restent `/gig/` et `/last-round/`.

### 3.3 Collection `apps`

Schéma Zod indicatif :

```ts
// src/content.config.ts
const apps = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/apps' }),
  schema: ({ image }) => z.object({
    name: z.string(),                       // "Gig"
    slug: z.enum(['gig', 'last-round']),
    catalog: z.string(),                    // "CP-001"
    endorsement: z.string(),                // "un set Classic Punk"
    platform: z.enum(['macos', 'ios']),
    minOS: z.string().optional(),           // "iOS 17"
    status: z.enum(['dev', 'coming-soon', 'beta', 'available']),
    storeUrl: z.string().url().optional(),  // requis si status = available
    price: z.string().optional(),
    theme: z.enum(['gig', 'last-round']),   // active les tokens de l'app
    tagline: z.string(),
    summary: z.string(),                    // texte des cartes de l'accueil
    icon: image(),
    screenshots: z.array(z.object({ src: image(), alt: z.string() })),
    seo: z.object({ title: z.string(), description: z.string() }),
  }),
});
```

- Le corps Markdown de chaque fichier peut contenir les sections longues ; sinon structurer les sections (étapes, fonctions, FAQ) en frontmatter. Choisir l'option la plus simple à maintenir, et la documenter.
- **Passage en ligne d'une app** : changer `status` en `available` et renseigner `storeUrl` doit suffire à afficher le badge officiel Apple partout (accueil, page d'app, appel final). Valider : `status: 'available'` sans `storeUrl` fait échouer le build.

### 3.4 Thèmes des pages d'app

- Le shell (header, footer) reste toujours aux couleurs de Classic Punk.
- Le contenu de la page d'app porte `data-theme="gig"` ou `data-theme="last-round"`, qui redéfinit les tokens d'accent (`--accent`, `--accent-ink`, typographie d'accent…) à partir de `--gig-*` / `--lr-*`.
- Les polices propres à une app ne sont chargées que sur sa page.

### 3.5 Internationalisation (préparation)

- Configurer `i18n` d'Astro : `defaultLocale: 'fr'`, `locales: ['fr', 'en']`, `prefixDefaultLocale: false`.
- Tous les libellés d'interface passent par `src/i18n/fr.ts` (pas de chaîne en dur dans les composants).
- **Ne générer aucune page `/en/` en V1.** Le `<html lang="fr">` est correct. Quand la version anglaise existera : pages sous `/en/`, balises `hreflang` réciproques et `x-default`, sitemap multilingue.

## 4. Spécification des pages

Les textes de chaque section sont dans `classic-punk_contenus.md` (numéros de section entre parenthèses).

### 4.1 Accueil `/` (contenus §1)

Ordre des sections :

1. **Hero** (§1.1) — H1 = signature. Deux boutons : ancre `#apps` et `/contact/`.
2. **Manifeste** (§1.2) — deux colonnes Classique / Punk côte à côte sur desktop, empilées sur mobile, conclusion pleine largeur. C'est la pièce maîtresse visuelle : suivre fidèlement la maquette.
3. **Les apps** (§1.3) — `id="apps"`. Deux `AppCard` alimentées par la collection (nom, plateforme, statut, accroche, résumé, numéro de catalogue, lien).
4. **Services** (§1.4).
5. **Référence Guitar Social Club** (§1.5) — lien externe avec `rel="noopener"` ; les chiffres viennent de `site.ts` pour être modifiables facilement.
6. **À propos** (§1.6) — la phrase `[OPTION]` n'est affichée que si `site.ts > about.showBand` vaut `true` (par défaut `false`).
7. **Appel final** (§1.7).

### 4.2 Pages d'app `/gig/` et `/last-round/` (contenus §2 et §3)

Gabarit commun `AppLayout` :

1. Hero : surtitre (endossement), H1, chapeau, `StoreButton`, `StatusBadge`, icône de l'app, capture principale.
2. Bandeau slogan (Gig uniquement, §2.2).
3. Comment ça marche (`Steps`), `id="comment"`.
4. Fonctions / arguments (`FeatureList`).
5. Prix (`PriceTable`, Gig) ou section « Pour les parents » (Last Round).
6. « Ce que l'app ne fait pas » (Gig).
7. Galerie de captures (`Screenshots`), avec textes alternatifs du §9 des contenus.
8. FAQ (`Faq`).
9. Appel final : `StoreButton` + lien vers l'ancre légale de l'app.

`StoreButton` :
- `status = available` → badge officiel Apple (« Télécharger dans le Mac App Store » ou « … dans l'App Store », version française, fichiers SVG fournis par Apple, non modifiés) pointant vers `storeUrl`.
- sinon → bouton maison « Bientôt sur le Mac App Store » / « Bientôt sur l'App Store », `aria-disabled="true"`, non focalisable comme lien.

### 4.3 Contact `/contact/` (contenus §4)

- Champs : nom, e-mail, sujet (`select` : projet, support Gig, support Last Round, autre), message. Tous requis.
- Lecture du paramètre `?sujet=` pour présélectionner le sujet (JS vanilla ; sans JS, le formulaire fonctionne avec la valeur par défaut).
- Validation HTML5 native + messages d'erreur du §4 des contenus, reliés aux champs (`aria-describedby`, `aria-invalid`).
- Anti-spam : champ *honeypot* caché + délai minimal avant envoi. **Pas de reCAPTCHA** (traceur tiers).
- Envoi : service de formulaires pour site statique. **Choix à valider par Arnaud** avant implémentation, par ordre de préférence :
  1. Fonction de formulaire native de l'hébergeur retenu (ex. Netlify Forms) si l'hébergeur en propose une ;
  2. Service tiers hébergé dans l'UE ou conforme RGPD (ex. Web3Forms, Formspree) ;
  3. Repli `mailto:` si aucun service n'est retenu.
- Implémenter l'envoi derrière une petite abstraction (`src/config/site.ts > contact.provider`) pour pouvoir changer de service sans toucher au composant.
- États : envoi en cours (bouton désactivé), succès (message §4, focus déplacé dessus), erreur (message §4 avec l'e-mail en clair).
- Mention RGPD sous le bouton, avec lien vers `/legal/#confidentialite`.
- L'e-mail de contact est affiché en clair dans la page (pas d'obfuscation JS qui casse l'accessibilité).

### 4.4 Légal `/legal/` (contenus §5)

- Sommaire en tête (`LegalToc`) listant les sections.
- **Ancres obligatoires et figées :** `#mentions`, `#confidentialite`, `#gig`, `#gig-confidentialite`, `#gig-conditions`, `#last-round`, `#last-round-confidentialite`, `#last-round-conditions`, `#propriete`.
- Les informations légales (capital, siège, SIREN, hébergeur…) viennent de `site.ts > legal`. Tant qu'une valeur est un placeholder, le build affiche un **avertissement** dans la console (pas une erreur), pour ne rien oublier avant la mise en production.
- Date de dernière mise à jour affichée, renseignée dans `site.ts`.
- `scroll-margin-top` sur les titres pour que l'en-tête ne masque pas les ancres.

### 4.5 404

Texte §6 des contenus, lien vers l'accueil, `noindex`.

### 4.6 Header et footer (contenus §7)

- Header : logo (lien accueil), navigation Accueil · Gig · Last Round · Contact, lien actif indiqué visuellement et par `aria-current="page"`.
- Menu mobile : bouton avec `aria-expanded` / `aria-controls`, fermeture par Échap, focus géré, fonctionne sans bibliothèque.
- Footer : signature, liens, mention légale, ©.

## 5. Exigences transverses

### 5.1 SEO

- `Seo.astro` : `<title>`, meta description (§8 des contenus), `<link rel="canonical">`, Open Graph (`og:title`, `og:description`, `og:image` = `/og/og-<page>.png`, `og:url`, `og:type`, `og:locale = fr_FR`), Twitter `summary_large_image`.
- `@astrojs/sitemap` ; 404 exclue. `robots.txt` pointant vers le sitemap.
- Données structurées JSON-LD :
  - Accueil : `Organization` (Classic Punk, logo, url, e-mail) et `Person` (Arnaud, `jobTitle`, `worksFor`).
  - Pages d'app : `SoftwareApplication` (`name`, `operatingSystem`, `applicationCategory`, `offers` avec prix en EUR si connu). **Ne jamais inventer** de note (`aggregateRating`) ni d'avis.
  - `BreadcrumbList` sur les pages internes.
- Un seul `<h1>` par page, hiérarchie de titres sans saut.
- Valider avec l'outil de test des résultats enrichis de Google avant mise en ligne.

### 5.2 Accessibilité (WCAG 2.2 AA)

- Lien d'évitement « Aller au contenu ».
- Contrastes AA (les valeurs du design font foi ; signaler toute paire non conforme plutôt que la corriger en silence).
- Focus visible sur tous les éléments interactifs.
- Textes alternatifs pertinents ; images décoratives (textures, rubans) avec `alt=""` ou en CSS.
- Les effets « punk » (rotations, textures) ne doivent jamais gêner la lecture ni la navigation au clavier.
- `prefers-reduced-motion` : désactive toutes les animations et transitions non essentielles.
- Testé au clavier seul et avec VoiceOver (Safari macOS et iOS).

### 5.3 Configuration et placeholders

- `src/config/site.ts` regroupe tout ce qui est susceptible de changer : domaine, e-mail, réseaux, chiffres Guitar Social Club, informations légales, fournisseur du formulaire, options d'affichage.
- Chaque marqueur `[À COMPLÉTER]` / `[À VÉRIFIER]` des contenus devient une valeur de `site.ts` (ou du frontmatter d'app) commentée `// TODO:` ; une commande `npm run todo` liste tous les TODO restants.

### 5.4 Performance

- Lighthouse mobile ≥ 95 dans les quatre catégories, sur chaque page.
- LCP < 2 s, CLS < 0,05 (simulation mobile).
- Textures légères (SVG ou images compressées) ; pas de vidéo en fond.
- Polices : sous-ensemble latin, nombre de fichiers limité au strict nécessaire.

### 5.5 Mesure d'audience

Aucune en V1. Si Arnaud en demande une plus tard : outil sans cookie (ex. Plausible, auto-hébergé ou hébergé UE), pour éviter tout bandeau de consentement, et mise à jour de la section `#confidentialite`.

### 5.6 Navigateurs

Deux dernières versions de Safari (macOS, iOS), Chrome, Firefox, Edge. Rendu soigné en particulier sur Safari : c'est le navigateur de la cible des apps.

## 6. Qualité, outillage, déploiement

- Scripts : `dev`, `build`, `preview`, `check` (`astro check`), `lint`, `format` (Prettier + plugin Astro), `todo`, `test`.
- Tests minimum (script Node ou Playwright, au choix) sur le build :
  - présence des ancres légales figées (§4.4) ;
  - un seul `<h1>` par page, `title` et meta description non vides ;
  - aucun lien interne cassé ;
  - `status: available` sans `storeUrl` → échec.
- Hébergement : statique, **à choisir par Arnaud** (Netlify, Cloudflare Pages, Vercel ou hébergeur français). Rester agnostique ; ajouter seulement le fichier de config de l'hébergeur retenu. HTTPS, redirection `www` ↔ apex, en-têtes de sécurité de base (CSP stricte compatible avec le formulaire, `Referrer-Policy`, `X-Content-Type-Options`).
- README : installation, scripts, comment passer une app en « disponible », comment modifier les textes, liste des URL à déclarer dans App Store Connect.

## 7. Critères d'acceptation

1. Les cinq pages et la 404 sont générées en statique, sans erreur `astro check`.
2. Tous les textes visibles correspondent à `classic-punk_contenus.md`.
3. `https://[DOMAINE]/legal/#gig-confidentialite` ouvre la page légale positionnée sur la confidentialité de Gig (idem pour Last Round).
4. `/contact/?sujet=last-round` présélectionne « Support Last Round ».
5. Le formulaire affiche une erreur explicite pour un e-mail invalide, et un message de succès après envoi ; il est utilisable au clavier et avec VoiceOver.
6. Passer Gig en `status: 'available'` avec une `storeUrl` affiche le badge officiel Apple sur l'accueil et sur `/gig/`, sans autre modification.
7. Lighthouse mobile ≥ 95 partout ; aucune requête vers un domaine tiers au chargement des pages (hors envoi du formulaire).
8. Les animations sont coupées avec « Réduire les animations ».
9. Sitemap, robots.txt, balises canonical, Open Graph et JSON-LD présents et valides.

## 8. Ordre de réalisation proposé

1. Initialisation Astro, config, `site.ts`, tokens provisoires, `BaseLayout`, header / footer, `Seo`.
2. Accueil complet avec contenus réels.
3. Collection `apps` et gabarit `AppLayout` ; pages Gig et Last Round.
4. Page légale et page contact (formulaire branché sur le fournisseur choisi).
5. Intégration de l'export Claude Design (tokens, polices, assets, ajustements fidèles aux maquettes).
6. SEO, JSON-LD, sitemap, tests, audit Lighthouse et accessibilité.
7. Configuration de l'hébergeur et mise en ligne.

## 9. Décisions en attente (côté Arnaud)

- Nom de domaine définitif (et sort de l'idée `gig.classicpunk.fr` : redirection vers `/gig/` ?).
- Hébergeur et service d'envoi du formulaire.
- Informations légales de la SASU et de l'hébergeur.
- Prix de Gig (4,99 € ou 6,99 €), modèle économique de Last Round, versions minimales des OS.
- Validation par l'associé du bloc Guitar Social Club.
