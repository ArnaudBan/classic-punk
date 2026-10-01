/**
 * Tout ce qui est susceptible de changer : domaine, e-mail, chiffres, options d'affichage.
 * Chaque valeur provisoire est marquée `// TODO:` (voir `npm run todo`).
 */

export const site = {
  // Domaine du site (à garder synchronisé avec astro.config.mjs et public/robots.txt)
  url: 'https://classic-punk.fr',
  name: 'Classic Punk',
  signature: "La rigueur du classique. L'énergie du punk.",
  email: 'contact@classic-punk.fr',
  founder: {
    name: 'Arnaud',
    fullName: 'Arnaud Banvillet',
    jobTitle: 'Développeur indépendant',
  },
  since: 2024,
  catalog: 'CP-000',

  guitarSocialClub: {
    url: 'https://guitarsocialclub.com/',
    // TODO: chiffres à valider avec l'associé avant publication
    stats: [
      { value: '4,8/5', label: "sur l'App Store" },
      { value: '33', label: 'outils gratuits dans le navigateur' },
      { value: 'CNRS', label: 'pédagogie développée avec le CNRS' },
      { value: 'Rock&Folk', label: 'et Le Parisien : vu dans la presse (septembre 2026)' },
    ],
  },

  about: {
    // TODO: phrase [OPTION] sur le groupe de punk hardcore, à valider
    showBand: false,
    // TODO: portrait d'Arnaud (noir et blanc, grain, cadrage serré, 4:5)
    portrait: null as ImageMetadata | null,
  },

  /** Formulaire de contact : pas de service tiers, le formulaire prépare un e-mail (mailto:). */
  contact: {
    provider: 'mailto' as const,
    // TODO: [OPTION] réseaux (LinkedIn, GitHub, Mastodon / Bluesky)
    socials: '[OPTION] LinkedIn, GitHub, Mastodon / Bluesky : [À COMPLÉTER]',
  },

  /**
   * Mentions légales (source : registre du commerce, fiche Classic Punk, SIREN 931 433 304).
   * Toute valeur contenant encore [À COMPLÉTER] / [À VÉRIFIER] déclenche un avertissement au build.
   */
  legal: {
    company: 'Classic Punk',
    form: 'SASU',
    capital: '700',
    address: '3 Mail Pablo Picasso, 44000 Nantes',
    rcs: 'Nantes',
    siren: '931 433 304',
    vat: 'FR69931433304',
    director: 'Arnaud Banvillet',
    host: 'Infomaniak Network SA, Rue Eugène-Marziano 25, 1227 Les Acacias (GE), Suisse — +41 22 820 35 44',
    // TODO: durée de conservation des messages
    retention: '[À COMPLÉTER : durée, ex. 3 ans après le dernier échange]',
    // TODO: à mettre à jour à chaque modification de la page légale
    updatedAt: '1er octobre 2026',
  },
} as const;
