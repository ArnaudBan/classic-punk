/**
 * Textes de la page Last Round, repris à l'identique de classic-punk_contenus.md (§3).
 * Les surtitres, crédits et légendes viennent de la maquette (design/maquettes/last-round.html).
 */
import enCours from '../assets/apps/lr-09-manche-en-cours.webp';
import semaine from '../assets/apps/lr-11-semaine.webp';

export const lastRound = {
  hero: {
    credits: ['CP-002', 'Last Round', 'iPhone', 'iOS 17 et plus', 'Sans compte ni pub'],
    eyebrow: 'Last Round · un set Classic Punk',
    titleStart: "La dernière manche, c'est",
    titleHighlight: 'toi',
    titleEnd: 'qui la décides.',
    lead: "Last Round t'aide à garder la main sur ton temps de jeu. Tu te fixes un budget pour la semaine, tu lances un décompte avant chaque partie, et tu sais toujours combien il te reste. Sans mouchard, sans compte, sans pub.",
    secondary: { label: 'Voir comment ça marche', href: '#comment' },
    releaseLabel: 'Sortie :',
    secondShot: { src: enCours, alt: "Le décompte d'une manche en cours dans Last Round" },
  },

  steps: {
    id: 'comment',
    number: 'A1',
    eyebrow: 'Comment ça marche',
    title: 'Prêt ? Joue. Pause. Game over.',
    items: [
      {
        title: 'Fixe ton budget.',
        text: 'Combien de temps de jeu pour la semaine ? Tu choisis, et tu peux le changer quand tu veux.',
      },
      {
        title: 'Lance une manche.',
        text: 'Choisis la durée — 15, 30, 60 minutes — et le décompte démarre. Il continue même téléphone verrouillé.',
      },
      {
        title: 'Garde un œil sur la jauge.',
        text: "Le temps restant de la semaine s'affiche sur l'écran d'accueil de l'app et dans un widget sur ton iPhone.",
      },
      {
        title: 'Entends le gong.',
        text: 'Une notification sonne à la fin de la manche, et une autre si tu dépasses ton budget.',
      },
    ],
  },

  features: {
    id: 'fonctions',
    number: 'A2',
    eyebrow: 'Les fonctions',
    title: "Tout ce qu'il faut. Rien de plus.",
    items: [
      {
        title: 'Un décompte qui ne triche pas.',
        text: 'Pause, reprise, arrêt : seul le temps réellement joué est compté.',
      },
      { title: 'Un budget hebdomadaire.', text: "Il repart à zéro le jour et à l'heure que tu choisis." },
      {
        title: 'Des alertes avant la fin.',
        text: 'À 75 % et 90 % du budget, puis au moment exact où tu le dépasses.',
      },
      {
        title: 'Des jours sans manette.',
        text: 'Marque les jours où tu ne joues pas. Ces jours-là, impossible de lancer une manche sans le vouloir vraiment.',
      },
      {
        title: "Un widget et l'écran verrouillé.",
        text: "Le temps restant en un coup d'œil, et la manche en cours dans la Dynamic Island.",
      },
      { title: "L'historique de tes semaines.", text: 'Budget respecté ou dépassé, semaine après semaine.' },
    ],
    week: { src: semaine, alt: "L'écran Semaine : totaux, histogramme et manches du jour" },
    widget: {
      alt: "Le widget Last Round sur l'écran d'accueil de l'iPhone",
      remaining: '6 h 20',
      label: 'restantes sur 10 h',
      ratio: 0.63,
      caption: 'Widget (petit) · jauge et temps restant',
    },
  },

  parents: {
    id: 'parents',
    number: 'A3',
    eyebrow: 'Pour les parents',
    title: "Un outil pour apprendre à s'arrêter, pas un mouchard.",
    lead: "Last Round n'est pas un contrôle parental. Il ne surveille pas les autres applications et ne bloque rien à distance : c'est le joueur qui tient la manette, et qui apprend à poser ses propres limites.",
    text: "Un budget décidé ensemble, une jauge que tout le monde comprend, et moins de négociations à l'heure du dîner.",
    noData: {
      title: "Aucune donnée ne quitte l'iPhone",
      items: ['Pas de compte', 'Pas de serveur', 'Pas de publicité', 'Pas de traceur'],
    },
  },

  faq: {
    id: 'faq',
    number: 'B1',
    eyebrow: 'FAQ',
    title: 'Questions avant la partie',
    items: [
      {
        q: 'Last Round bloque-t-il mes jeux ?',
        a: "Non, pas dans cette version. Last Round compte le temps des manches que tu lances et te prévient. C'est un outil d'autodiscipline, pas une serrure.",
        open: true,
      },
      { q: 'Sur quels appareils ?', a: 'iPhone avec iOS 17 ou ultérieur.' },
      { q: 'Mes données sont-elles envoyées quelque part ?', a: 'Non. Tout reste sur ton iPhone.' },
      {
        q: 'Combien coûte Last Round ?',
        a: '14 jours gratuits, puis 3,99 € une fois, sans abonnement. Avec le Partage familial, un seul achat couvre toute la famille.',
      },
      {
        q: "Besoin d'aide ?",
        a: 'Écris-moi depuis la page contact en choisissant',
        link: { label: '« Support Last Round »', href: '/contact/?sujet=last-round' },
        after: '.',
      },
    ],
  },

  cta: {
    kicker: 'B2 · CP-002 Last Round',
    titleStart: 'Prêt pour la',
    titleHighlight: 'dernière manche ?',
    link: { label: 'Confidentialité et conditions de Last Round', href: '/legal/#last-round' },
  },
} as const;
