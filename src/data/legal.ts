/**
 * Textes de la page Légal, repris de classic-punk_contenus.md (§5).
 * Les informations de l'entreprise viennent de site.ts > legal.
 * Les ancres (id) sont des URL déclarées chez Apple : ne jamais les modifier.
 */
import { site } from '../config/site';

const l = site.legal;

export const legal = {
  seo: {
    title: 'Mentions légales et confidentialité — Classic Punk',
    description:
      'Mentions légales de Classic Punk, politique de confidentialité du site et des applications Gig et Last Round.',
  },
  hero: {
    credits: ['CP-000', 'Légal', 'Mentions · Confidentialité · Conditions'],
    title: 'Mentions légales, confidentialité et conditions',
    lead: "Tout ce qu'il faut savoir sur Classic Punk, ce site et ses applications, sans jargon inutile.",
  },
  toc: { label: 'Sommaire', title: 'Sommaire', count: '5 parties' },

  mentions: {
    id: 'mentions',
    title: 'Mentions légales',
    facts: [
      { label: 'Éditeur', value: `${l.company}, ${l.form} au capital de ${l.capital} €` },
      { label: 'Siège social', value: l.address },
      { label: 'RCS et SIREN', value: `RCS ${l.rcs} — SIREN ${l.siren}` },
      { label: 'N° de TVA intracommunautaire', value: l.vat },
      { label: 'Directeur de la publication', value: `${l.director}, président` },
      { label: 'Contact', value: site.email, href: `mailto:${site.email}` },
      { label: 'Hébergeur', value: l.host },
    ],
  },

  privacy: {
    id: 'confidentialite',
    title: 'Confidentialité du site',
    paragraphs: [
      "Ce site ne dépose aucun cookie et n'utilise aucun outil de suivi, de mesure d'audience ni de publicité.",
      // Texte adapté au formulaire mailto (le contenu d'origine citait un service d'envoi).
      `Les seules données collectées sont celles que vous saisissez dans le formulaire de contact (nom, e-mail, message). Le formulaire ne les envoie à aucun serveur : il prépare un e-mail dans votre propre messagerie, que vous choisissez d'envoyer. Les messages reçus sont hébergés par ${l.mailHost}. Ils servent uniquement à vous répondre et sont conservés ${l.retention}.`,
    ],
    rights: {
      before: "Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à",
      after: '. Vous pouvez aussi adresser une réclamation à la CNIL.',
    },
  },

  apps: [
    {
      id: 'gig',
      title: 'Gig',
      parts: [
        {
          id: 'gig-confidentialite',
          title: 'Confidentialité de Gig',
          text: "Gig ne collecte aucune donnée. Les clients, tâches et sessions sont stockés uniquement sur votre Mac. L'application ne contient ni compte, ni synchronisation, ni outil de mesure d'audience. Les achats intégrés sont traités par Apple ; Classic Punk ne reçoit aucune donnée de paiement.",
        },
        {
          id: 'gig-conditions',
          title: "Conditions d'utilisation de Gig",
          text: "Gig est distribué via le Mac App Store et soumis au contrat de licence standard d'Apple pour les applications (EULA). La version gratuite permet de gérer deux clients. L'achat intégré unique « Gig illimité » débloque un nombre illimité de clients ; il est restaurable sur vos appareils via le bouton « Restaurer les achats ». Les remboursements sont gérés par Apple.",
        },
      ],
    },
    {
      id: 'last-round',
      title: 'Last Round',
      parts: [
        {
          id: 'last-round-confidentialite',
          title: 'Confidentialité de Last Round',
          text: "Last Round ne collecte aucune donnée. Les réglages, sessions et historiques sont stockés uniquement sur votre iPhone. Pas de compte, pas de serveur, pas de publicité, pas de traceur. L'application demande l'autorisation d'envoyer des notifications locales, uniquement pour les alertes de fin de manche et de budget.",
        },
        {
          id: 'last-round-conditions',
          title: "Conditions d'utilisation de Last Round",
          text: "Last Round est distribué via l'App Store et soumis au contrat de licence standard d'Apple (EULA). L'application s'essaie gratuitement pendant 14 jours. Un achat intégré unique de 3,99 €, sans abonnement, permet ensuite de continuer à l'utiliser ; il est partagé avec votre famille grâce au Partage familial d'Apple et restaurable sur vos appareils via le bouton « Restaurer les achats ». Les remboursements sont gérés par Apple.",
        },
      ],
    },
  ],

  property: {
    id: 'propriete',
    title: 'Propriété intellectuelle',
    text: "Les textes, visuels, logos et applications présentés sur ce site appartiennent à Classic Punk, sauf mention contraire. Guitar Social Club est une marque de ses propriétaires respectifs. Apple, App Store, Mac et iPhone sont des marques d'Apple Inc.",
    /** Crédit du portrait (site.ts > about.portraitCredit), affiché seulement s'il existe. */
    photoCredit: site.about.portraitCredit ? `Portrait d'Arnaud : © ${site.about.portraitCredit.name}.` : null,
    updatedLabel: 'Dernière mise à jour :',
    updatedAt: l.updatedAt,
  },
} as const;
