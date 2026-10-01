/** Libellés d'interface (français). Les textes éditoriaux sont dans les composants de section. */

export const fr = {
  skipLink: 'Aller au contenu',
  nav: {
    label: 'Navigation principale',
    home: 'Accueil',
    homeAria: 'Classic Punk, accueil',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Gig', href: '/gig/' },
      { label: 'Last Round', href: '/last-round/' },
      { label: 'Contact', href: '/contact/' },
    ],
    cta: { label: 'Parler de votre projet', href: '/contact/' },
    open: 'Ouvrir le menu',
    close: 'Fermer le menu',
  },
  footer: {
    label: 'Pied de page',
    text: 'Studio de développement indépendant. Fait main, sans investisseurs, sans abonnement.',
    links: [
      { label: 'Gig', href: '/gig/' },
      { label: 'Last Round', href: '/last-round/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Mentions légales et confidentialité', href: '/legal/' },
    ],
    copyright: '© 2026 Classic Punk',
    catalog: 'CP-000 · Développement indépendant',
  },
  newTab: '(nouvel onglet)',
  status: {
    available: 'Disponible',
    'coming-soon': 'Bientôt',
    beta: 'Bêta',
    dev: 'En développement',
  },
  storeSoon: {
    macos: 'Bientôt sur le Mac App Store',
    ios: "Bientôt sur l'App Store",
  },
  platform: {
    macos: 'Mac',
    ios: 'iPhone',
  },
  side: 'Face',
  home: {
    // Textes de structure issus de la maquette (absents des contenus) — TODO: à valider
    credits: ['CP-000', 'Classic Punk', 'Développement indépendant', 'Depuis 2024'],
    toc: {
      label: 'Sommaire de la page',
      title: 'Sommaire',
    },
    eyebrows: {
      manifesto: 'Le manifeste',
      apps: 'Les apps',
      services: 'Services',
      reference: 'Référence',
      about: 'À propos',
      contact: 'Contact',
    },
    portraitCaption: 'Arnaud — ingénieur du son, puis développeur',
    discover: 'Découvrir',
  },
} as const;

export type Dictionary = typeof fr;
