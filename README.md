# CSCA Academy

Plateforme de préparation à l'examen CSCA pour Campus International Maroc — orientation des étudiants marocains vers les universités partenaires chinoises.

## Fonctionnalités

- **Leçons interactives** par matière (Mathématiques, Physique, Chimie, Chinois académique)
- **10 examens blancs chronométrés** — 720 questions au total, dont 288 issues de vrais sujets d'examens CSCA, avec correction automatique
- **Formulaire d'inscription étudiant** — génère un message personnalisé estimant le tier d'université chinoise accessible selon le profil (notes, score bac)
- **Centralisation des leads** vers un Google Sheet partagé avec l'équipe commerciale, avec vue de suivi protégée

## Stack technique

- **Frontend** : HTML / CSS / JavaScript vanilla — un seul fichier autonome, sans framework, sans build
- **Données** : leçons et examens stockés en JS statique ; les leçons peuvent aussi être chargées dynamiquement depuis un Google Sheet publié en CSV (via PapaParse)
- **Formulaire** : envoi des inscriptions vers Google Sheet via webhook Google Apps Script
- **Hébergement** : [Netlify](https://csca-academy.netlify.app) (déploiement statique, gratuit)

## Architecture

Le site tourne entièrement côté client (pas de backend serveur). Le seul point d'écriture externe est le webhook Apps Script qui reçoit les données du formulaire et les enregistre dans Google Sheet.

## Auteur

Khalil Abqar — Campus International Maroc
