/**
 * Textes de la page Contact, repris de classic-punk_contenus.md (§4).
 * Le formulaire n'envoie rien à un serveur : il prépare un e-mail (mailto:) dans la messagerie du visiteur.
 * Les textes marqués « mailto » sont adaptés à ce fonctionnement (validés, reportés dans les contenus).
 */
import { site } from '../config/site';

export const subjects = [
  { value: 'projet', label: 'Un projet' },
  { value: 'gig', label: 'Support Gig' },
  { value: 'last-round', label: 'Support Last Round' },
  { value: 'autre', label: 'Autre chose' },
] as const;

export const contact = {
  seo: {
    title: 'Contact — Classic Punk',
    description:
      "Un projet de site, d'app ou d'outil ? Une question sur Gig ou Last Round ? Écrivez-moi, réponse sous 48 h ouvrées.",
  },
  hero: {
    credits: ['CP-000', 'Contact', 'Réponse sous 48 h ouvrées'],
    titleStart: 'Parlons-',
    titleHighlight: 'en.',
    lead: "Un projet de site, d'application ou d'outil ? Une question sur Gig ou Last Round ? Écrivez-moi, je réponds sous 48 h ouvrées.",
  },
  form: {
    label: 'Formulaire de contact',
    head: 'CP-000 · Formulaire',
    allRequired: 'Tous les champs sont obligatoires',
    required: 'obligatoire',
    fields: {
      name: { label: 'Votre nom', error: 'Il me faut un nom pour vous répondre.' },
      email: {
        label: 'Votre e-mail',
        help: 'pour que je puisse vous répondre',
        error: 'Cette adresse e-mail semble incomplète.',
      },
      subject: { label: "C'est à propos de…" },
      message: {
        label: 'Votre message',
        placeholder: 'Racontez-moi votre projet, votre question ou ce qui coince.',
        error: 'Le message est vide.',
      },
    },
    submit: 'Envoyer',
    // mailto
    submitNote: 'Le bouton ouvre votre messagerie avec le message prêt à partir.',
    privacy: {
      text: 'Vos informations servent uniquement à vous répondre. Elles ne sont ni revendues ni utilisées pour de la prospection.',
      link: { label: 'En savoir plus', href: '/legal/#confidentialite' },
    },
  },
  // mailto : remplace le message « bien reçu », inexact sans envoi par serveur
  ready: {
    title: 'Votre message est prêt.',
    text: "Votre messagerie s'est ouverte avec le message : il ne reste qu'à l'envoyer. Je réponds sous 48 h ouvrées.",
    fallback: "Rien ne s'est ouvert ? Écrivez-moi directement à",
    retry: 'Ouvrir à nouveau le message',
    back: "Retour à l'accueil",
  },
  mail: {
    to: site.email,
    subjectPrefix: '[Classic Punk]',
  },
  coords: {
    eyebrow: 'Coordonnées',
    title: 'Écrire directement',
  },
  support: {
    eyebrow: 'Support des apps',
    title: 'Une question sur Gig ou Last Round ?',
    text: "Pour une question sur une app, précisez la version de l'app et celle de votre Mac ou de votre iPhone : vous aurez une réponse plus rapide.",
  },
} as const;
