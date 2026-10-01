/**
 * Tout ce qui est susceptible de changer : domaine, e-mail, chiffres, options d'affichage.
 * Chaque valeur provisoire est marquée `// TODO:` (voir `npm run todo`).
 */

export const site = {
  // Domaine du site (à garder synchronisé avec astro.config.mjs et public/robots.txt)
  url: 'https://classic-punk.fr',
  name: 'Classic Punk',
  signature: "La rigueur du classique. L'énergie du punk.",
  // TODO: adresse e-mail de contact
  email: '[À COMPLÉTER : adresse e-mail]',
  founder: {
    name: 'Arnaud',
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
} as const;
