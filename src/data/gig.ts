/**
 * Textes de la page Gig, repris à l'identique de classic-punk_contenus.md (§2).
 * Les surtitres, crédits et légendes viennent de la maquette (design/maquettes/gig.html).
 */
import setlistClientDark from '../assets/apps/gig-setlist-client-dark.png';

// TODO: réponses de FAQ encore à trancher (affichées telles quelles jusqu'à décision)
const TODO_MIN_OS = '[À COMPLÉTER : version minimale]';
const TODO_SILICON_INTEL = '[À VÉRIFIER]';
const TODO_DATA_TRANSFER = '[À COMPLÉTER : comment transférer les données — export CSV, sauvegarde Time Machine…]';
const TODO_ARCHIVED = '[À TRANCHER — proposition : oui, tous les clients comptent, archivés compris.]';
const TODO_LANGUAGE = '[À COMPLÉTER selon la décision de langue de lancement.]';

export const gig = {
  hero: {
    credits: ['CP-001', 'Gig', 'Mac', 'Achat unique', 'Sans compte ni cloud'],
    eyebrow: 'Gig · un set Classic Punk',
    titleStart: 'Le time tracker qui ne te loue',
    titleHighlight: 'rien.',
    lead: 'Gig compte tes heures depuis la barre de menu de ton Mac. Tu choisis un client, tu tapes ta tâche, tu cries 1-2-3-4! — et à la fin du mois, ta Setlist te donne tes heures par client, prêtes à facturer.',
    secondary: { label: 'Voir comment ça marche', href: '#comment' },
    sleeveTag: 'CP-001 · Face A · Mac',
  },

  slogan: "Pas d'abonnement. Pas de bullshit.",

  steps: {
    id: 'comment',
    number: 'A1',
    eyebrow: 'Comment ça marche',
    title: 'Deux clics, et ça joue.',
    items: [
      { title: 'Choisis ton client.', text: 'Depuis l\'icône de la barre de menu, sans ouvrir de fenêtre.' },
      {
        title: 'Tape ta tâche et lance le set.',
        text: '1-2-3-4! : le chrono démarre. L\'autocomplétion retrouve tes tâches récentes.',
      },
      { title: "Stop, c'est dans la boîte.", text: 'Un set oublié ? Ajoute-le à la main ou corrige les horaires.' },
      {
        title: 'Sors ta Setlist.',
        text: 'Le total du mois par client, en 12:30 comme en 12,5 h. Export CSV pour ton rapport ou ton tableur.',
      },
    ],
  },

  features: {
    id: 'pourquoi',
    number: 'A2',
    eyebrow: 'Pourquoi Gig',
    title: 'Les trackers de temps sont gris. Pas celui-là.',
    items: [
      {
        title: 'Une seule chose, bien faite.',
        text: 'Démarrer, arrêter, corriger, sortir le total du mois. Pas de mode équipe, pas de tableau de bord, pas de facturation.',
      },
      {
        title: 'Tes données restent sur ton Mac.',
        text: 'Pas de compte à créer, pas de cloud. Gig ne collecte rien et ne synchronise rien.',
      },
      { title: "Tu l'achètes, il est à toi.", text: 'Un achat unique, et les mises à jour sont incluses.' },
      {
        title: 'Une vraie direction artistique.',
        text: 'Rose fluo, ruban adhésif, grain photocopie : un flyer de concert dans ta barre de menu.',
      },
    ],
    figure: {
      src: setlistClientDark,
      alt: "Le détail d'un client dans la Setlist de Gig, en mode sombre",
      caption: "Setlist d'un client, en mode sombre",
    },
  },

  pricing: {
    id: 'prix',
    number: 'A3',
    eyebrow: 'Prix',
    title: 'Gratuit pour deux clients. 4,99 € pour la tournée complète.',
    caption: 'Prix de Gig',
    priceLabel: 'Prix',
    plans: [
      { name: 'Gratuit', price: '0 €' },
      { name: 'Gig illimité', price: '4,99 €', note: 'une fois pour toutes', highlight: true },
    ],
    rows: [
      { label: 'Clients', values: ['2', 'Illimités'] },
      { label: 'Timer, sets, Setlist, export CSV', values: [true, true] },
      { label: 'Compte, abonnement, cloud', values: ['Aucun', 'Aucun'] },
    ],
    text: "Deux clients suffisent pour juger Gig sur un vrai mois de travail. Le jour où le troisième arrive, 4,99 €, c'est moins qu'un mois de n'importe quel tracker par abonnement. Et c'est pour toujours.",
    notDoing: {
      title: 'Ce que Gig ne fait pas',
      text: "Pas de facturation. Pas de mode équipe. Pas de surveillance de ton écran. Gig compte ton temps, c'est tout.",
    },
  },

  faq: {
    id: 'faq',
    number: 'B1',
    eyebrow: 'FAQ',
    title: 'Questions de tournée',
    items: [
      {
        q: 'Sur quels Mac fonctionne Gig ?',
        a: `macOS ${TODO_MIN_OS} et versions ultérieures, sur Mac Apple Silicon et Intel ${TODO_SILICON_INTEL}.`,
        open: true,
      },
      {
        q: 'Mes données sont-elles envoyées quelque part ?',
        a: "Non. Tout reste sur ton Mac. Gig n'a ni serveur, ni compte, ni outil de mesure d'audience.",
      },
      {
        q: 'Que se passe-t-il si je change de Mac ?',
        a: `Ton achat se restaure depuis l'App Store avec ton identifiant Apple (bouton « Restaurer les achats » dans l'app). ${TODO_DATA_TRANSFER}`,
      },
      { q: 'Les clients archivés comptent-ils dans la limite gratuite ?', a: TODO_ARCHIVED },
      { q: 'Gig est-il disponible en anglais ?', a: TODO_LANGUAGE },
      {
        q: "Besoin d'aide ?",
        a: 'Écris-moi depuis la page contact en choisissant',
        link: { label: '« Support Gig »', href: '/contact/?sujet=gig' },
        after: '.',
      },
    ],
  },

  cta: {
    kicker: 'B2 · CP-001 Gig',
    titleStart: 'Prêt pour le premier',
    titleHighlight: 'set ?',
    link: { label: 'Confidentialité et conditions de Gig', href: '/legal/#gig' },
  },
} as const;
