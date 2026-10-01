/**
 * Textes de la page d'accueil, repris à l'identique de classic-punk_contenus.md (§1).
 * Les surtitres et libellés de sommaire viennent de la maquette (design/maquettes/home.html).
 */
import { fr } from '../i18n/fr';

const e = fr.home.eyebrows;

export const home = {
  seo: {
    title: 'Classic Punk — Développeur PHP et Laravel indépendant',
    description:
      "Développeur indépendant spécialisé PHP et Laravel : sites, applications web, iPhone et Mac, outils sur mesure. La rigueur du classique, l'énergie du punk.",
  },

  hero: {
    credits: fr.home.credits,
    titleLine1: 'La rigueur du classique.',
    titleLine2: "L'énergie du punk.",
    lead: "Je conçois et développe des sites, des applications et des outils sur mesure. Écrits avec la précision d'une partition, joués avec l'énergie d'un premier concert.",
    primary: { label: 'Découvrir les apps', href: '#apps' },
    secondary: { label: 'Parler de votre projet', href: '/contact/' },
  },

  manifesto: {
    id: 'manifeste',
    number: 'A1',
    eyebrow: e.manifesto,
    toc: 'Le manifeste',
    title: 'Deux écoles que tout oppose. Un seul son.',
    intro:
      "Le classique, c'est des années de gammes pour qu'une note tombe juste. Le punk, c'est trois accords, un ampli et l'envie de le faire maintenant. On les croit ennemis. En studio, j'ai appris qu'ils avaient besoin l'un de l'autre.",
    left: {
      title: 'Classique',
      items: [
        {
          title: 'La partition.',
          text: "Une architecture pensée avant d'être jouée. Du code lisible, documenté, que quelqu'un d'autre pourra reprendre.",
        },
        {
          title: 'La justesse.',
          text: "Performance, accessibilité, référencement : les détails qu'on ne voit pas, mais qu'on entend tout de suite quand ils manquent.",
        },
        {
          title: 'La durée.',
          text: 'Des choix techniques sobres, faits pour tenir des années, pas pour suivre la mode du trimestre.',
        },
      ],
    },
    right: {
      title: 'Punk',
      items: [
        {
          title: 'Le DIY.',
          text: 'Je fais moi-même, de la première idée à la mise en ligne. Un seul interlocuteur, pas de chaîne de sous-traitance.',
        },
        {
          title: "L'énergie.",
          text: "Livrer vite, tester en conditions réelles, corriger. Une première version jouée vaut mieux qu'une symphonie jamais finie.",
        },
        {
          title: "L'insolence.",
          text: 'Oser une identité forte, refuser le gris par défaut et les modèles qui vous louent ce que vous devriez posséder.',
        },
      ],
    },
    outro:
      "Le classique sans le punk, c'est un musée. Le punk sans le classique, c'est du bruit. Ensemble, c'est un disque qu'on réécoute.",
  },

  apps: {
    id: 'apps',
    number: 'A2',
    eyebrow: e.apps,
    title: 'Les sorties du label',
    intro:
      'Classic Punk développe aussi ses propres applications. Petites, indépendantes, sans abonnement ni collecte de données. Chacune a sa pochette, toutes ont le même son.',
  },

  services: {
    id: 'services',
    number: 'B1',
    eyebrow: e.services,
    title: 'Ce que je joue pour vous',
    items: [
      {
        title: 'Sites web.',
        text: 'Des sites rapides, accessibles et bien référencés, construits avec des outils modernes comme Astro. Du site vitrine au site éditorial de plusieurs centaines de pages.',
      },
      {
        title: 'Applications.',
        text: "Applications web, iPhone et Mac. Ma spécialité : PHP et Laravel, pour des applications web solides et faciles à faire évoluer. Code natif (Swift, SwiftUI) quand c'est pertinent.",
      },
      {
        title: 'Outils sur mesure.',
        text: "Outils métier, back-offices, automatisations. Et une spécialité héritée du studio : les outils audio qui tournent directement dans le navigateur — accordeur, métronome, analyse du jeu d'un musicien.",
      },
    ],
    transition: {
      text: 'Vous avez un projet, une idée, ou une app qui sonne faux ?',
      link: { label: 'Parlons-en.', href: '/contact/' },
    },
  },

  reference: {
    id: 'reference',
    number: 'B2',
    eyebrow: e.reference,
    title: 'En tournée avec Guitar Social Club',
    paragraphs: [
      "Je suis associé de Guitar Social Club, une méthode pour apprendre ou reprendre la guitare à l'âge adulte, fondée par le professeur Yohann Abbou. J'y développe le site, l'application principale et l'ensemble des outils.",
      "Au programme : une app notée 4,8/5 sur l'App Store, des dizaines d'outils gratuits qui tournent dans le navigateur (accordeur, détecteur d'accords, métronome…), un test qui écoute réellement le jeu du guitariste, et une pédagogie développée avec le CNRS.",
    ],
    link: 'Voir Guitar Social Club',
  },

  about: {
    id: 'a-propos',
    number: 'B3',
    eyebrow: e.about,
    title: 'Derrière la console',
    lead: "Je m'appelle Arnaud. Avant d'écrire du code, j'ai passé des années derrière une console de mixage : ingénieur du son et musicien.",
    paragraphs: [
      "Le studio m'a appris deux choses qui ne m'ont jamais quitté. La première : la technique ne pardonne pas, une phase inversée s'entend, un détail négligé aussi. La seconde : sans énergie, sans parti pris, même un enregistrement parfait ne raconte rien.",
      "En 2010, j'ai changé d'instrument et je me suis mis au développement. Mon instrument principal, c'est PHP et Laravel ; mais comme tout musicien de studio, je joue de ce que le morceau demande. Depuis 2024, je propose mes services en indépendant sous le nom de Classic Punk : un studio d'une personne, sans investisseurs, où chaque projet est mixé avec le même soin.",
    ],
    band: {
      before: "Et je n'ai pas raccroché la guitare : je suis le bassiste de",
      link: { label: 'Vigilante', href: 'https://vigilante.band/' },
      after: ', un groupe de punk hardcore qui vient de sortir son premier vinyle.',
    },
    caption: fr.home.portraitCaption,
  },

  cta: {
    id: 'contact',
    number: 'B4',
    eyebrow: e.contact,
    toc: 'On monte le son ?',
    titleStart: 'On monte',
    titleHighlight: 'le son ?',
    text: 'Un site à construire, une app à lancer, un outil qui vous manque. Racontez-moi votre projet, je réponds sous 48 h ouvrées.',
    button: { label: 'Me contacter', href: '/contact/' },
  },
} as const;

/** Sommaire du hero : une entrée par section numérotée. */
export const homeToc = [home.manifesto, home.apps, home.services, home.reference, home.about, home.cta].map((s) => ({
  href: `#${s.id}`,
  number: s.number,
  label: 'toc' in s ? s.toc : s.title,
}));
