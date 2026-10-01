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
    jobTitle: 'Développeur PHP et Laravel indépendant',
    /** Compétences déclarées dans le JSON-LD (Person.knowsAbout). */
    skills: ['PHP', 'Laravel', 'Swift', 'SwiftUI', 'Astro'],
  },
  since: 2024,
  catalog: 'CP-000',

  guitarSocialClub: {
    url: 'https://guitarsocialclub.com/',
    // Chiffres validés avec l'associé (1er octobre 2026)
    stats: [
      { value: '4,8/5', label: "sur l'App Store" },
      { value: '33', label: 'outils gratuits dans le navigateur' },
      { value: 'CNRS', label: 'pédagogie développée avec le CNRS' },
      { value: 'Rock&Folk', label: 'et Le Parisien : vu dans la presse (septembre 2026)' },
    ],
  },

  about: {
    showBand: true,
    // TODO: portrait d'Arnaud (noir et blanc, grain, cadrage serré, 4:5)
    portrait: null as ImageMetadata | null,
  },

  /** Formulaire de contact : pas de service tiers, le formulaire prépare un e-mail (mailto:). */
  contact: {
    provider: 'mailto' as const,
    /** Réseaux affichés sur la page Contact (et dans le JSON-LD sameAs). */
    socials: [{ label: 'GitHub', url: 'https://github.com/ArnaudBan/' }],
  },

  /**
   * Mentions légales (source : registre du commerce, fiche Classic Punk, SIREN 931 433 304).
   * Toute valeur contenant encore un marqueur des contenus déclenche un avertissement au build.
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
    /** Durée de conservation des messages reçus par le formulaire. */
    retention: 'un an après notre dernier échange',
    /** Hébergement de la messagerie de contact. */
    mailHost: 'Infomaniak, en Suisse, sur des serveurs sécurisés',
    // À mettre à jour à chaque modification de la page légale.
    updatedAt: '1er octobre 2026',
  },
} as const;
