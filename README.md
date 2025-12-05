# Le Nexus Connecté - L'Écho Personnalisé

Application web développée pour La Nuit de l'Info 2025 - Défi SFEIR "Formulaire Augmenté"

## Captures d'écran

### Page d'accueil - Hero Section
![Hero Section avec Avatar 3D Axolotl]
L'interface d'accueil présente un avatar interactif en 3D dont les yeux suivent le curseur de l'utilisateur. L'ensemble adopte une esthétique cyberpunk avec des effets de particules flottantes et des animations de lumière néon cyan.

### Portail d'Intention - Sélection de Mission
![Formulaire de sélection de mission]
Quatre options de mission sont proposées à l'utilisateur sous forme de boutons radio stylisés avec des descriptions contextuelles. Chaque mission déclenche l'affichage de champs de formulaire spécifiques.

### Champs Dynamiques - Adaptation Contextuelle
![Champs de formulaire adaptatifs]
En fonction de la mission sélectionnée (Contact, Don, Guilde, Informations), les champs du formulaire s'adaptent automatiquement pour collecter les informations pertinentes.

### Section Année 2025 - Filtre Temporel
![Intégration du thème 2025]
Une section dédiée met en avant l'année en cours avec des objectifs annuels et des animations visuelles thématiques (vagues temporelles animées).

### Page de Confirmation - Écho Personnalisé
![Message de confirmation personnalisé]
Après soumission, l'utilisateur est redirigé vers une page de confirmation qui affiche un message personnalisé en fonction de sa mission, incluant son nom et des références à l'année 2025.

### Navigation SPA - Transitions 3D
![Animation de transition entre vues]
Le système de Single Page Application permet des transitions fluides avec rotations 3D et effets de particules lors du changement de vue.

## Description du Projet

Le Nexus Connecté est un portail d'interaction dynamique qui répond au besoin d'établir un canal de communication efficace entre une association et ses différents publics. L'application propose une expérience utilisateur personnalisée en adaptant son interface selon l'intention de l'utilisateur.

### Architecture Technique

L'application repose sur une architecture Single Page Application développée en JavaScript pur, sans framework externe. Cette approche garantit des performances optimales et une compatibilité maximale.

**Technologies utilisées:**
- HTML5 pour la structure sémantique
- CSS3 pour les animations et effets visuels avancés
- JavaScript ES6+ pour la logique métier et les interactions
- Hash routing pour la navigation sans rechargement
- LocalStorage et SessionStorage pour la persistance des données

### Fonctionnalités Principales

**1. Formulaire d'Interaction Dynamique**

Le portail propose quatre missions distinctes, chacune avec ses propres champs de saisie:

- Contact: Permet d'établir une communication avec l'association via un champ de message
- Don: Collecte le montant et la récurrence des contributions financières (unique, mensuel, annuel)
- Guilde des Bénévoles: Enregistre les compétences et la disponibilité (temps plein, temps partiel, ponctuel)
- Demande d'Informations: Catégorise les requêtes par sujet (général, projets, partenariat, autre) avec détails

**2. Adaptation Contextuelle des Champs**

Le système détecte la mission sélectionnée et génère dynamiquement les champs appropriés. Cette adaptation se produit instantanément lors du changement de sélection, sans rechargement de page.

**3. Page de Confirmation Personnalisée**

Chaque mission dispose d'un message de confirmation unique qui intègre:
- Le nom de l'utilisateur
- Une référence spécifique à sa mission
- Des mentions de l'année 2025 et des objectifs annuels
- Des animations visuelles de succès

**4. Système de Navigation SPA**

L'application utilise un système de routing basé sur les hash URLs, permettant:
- Navigation sans rechargement de page
- Transitions 3D spectaculaires entre les vues
- Compatibilité avec les boutons précédent/suivant du navigateur
- Gestion du cache pour des performances optimales

**5. Intégration du Thème 2025**

L'année 2025 est intégrée de manière dynamique dans l'ensemble de l'application:
- Affichage automatique de l'année en cours
- Section dédiée "Filtre Temporel" avec objectifs annuels
- Messages personnalisés mentionnant le cycle 2025
- Mise à jour automatique pour les années futures

**6. Effets Visuels Avancés**

L'interface propose une expérience immersive avec:
- Avatar 3D avec yeux suivant le curseur
- 40 particules flottantes animées
- 4 orbes énergétiques pulsantes
- Effet scanlines CRT
- Curseur personnalisé avec trail
- Animations de transition avec explosion de particules
- Gradients néon et effets de glow

**7. Sécurité et Validation**

Plusieurs mécanismes assurent l'intégrité des données:
- Honeypot invisible pour bloquer les robots spammeurs
- Validation HTML5 native des champs requis
- Vérification côté client avant soumission
- Gestion des erreurs avec messages contextuels

**8. Accessibilité WCAG 2.1**

L'application respecte les normes d'accessibilité:
- Balises sémantiques (fieldset, legend, label)
- Attributs ARIA pour les lecteurs d'écran
- Navigation complète au clavier
- Contraste de couleurs conforme
- Structure logique des titres
- Alternatives textuelles pour les éléments visuels

### Estimation des Possibilités de Réponses

Le système offre une grande variété de combinaisons possibles:

**Missions:** 4 options (Contact, Don, Guilde, Info)

**Champs spécifiques par mission:**
- Contact: 1 champ texte libre
- Don: 1 champ numérique + 3 options de récurrence = 3 combinaisons
- Guilde: 1 champ texte + 3 options de disponibilité = 3 combinaisons
- Info: 4 options de sujet + 1 champ texte = 4 combinaisons

**Champs communs:** Nom et Email (texte libre)

**Total estimé:** Plus de 100 combinaisons possibles en tenant compte des variations de contenu dans les champs texte libres et des multiples options de sélection.

### Intégration du Thème 2025

L'année 2025 est présente à plusieurs niveaux:

**Page d'accueil:**
- Sous-titre affichant "Cycle 2025"
- Section "Filtre Temporel" dédiée avec animations

**Section dédiée:**
- Badge "2025" visible
- Message: "Ton soutien pour le cycle 2025 est crucial pour notre progression"
- Objectif affiché: "Renforcer le Canal de Communication et créer l'Écho Personnalisé"

**Page de confirmation:**
- Tous les messages incluent une référence à 2025
- Exemple: "Ton soutien en 2025 est crucial pour notre progression"
- Invitation: "Reste connecté pour suivre nos exploits tout au long de l'année 2025"

**Mise à jour dynamique:**
L'année est calculée automatiquement via JavaScript et s'adaptera aux années futures sans modification du code.

### Mode de Restitution

**Application Web Accessible:**
- Fichier: index.html (peut être ouvert directement dans un navigateur)
- Déploiement: Compatible avec tout hébergement web statique
- Repository GitHub: https://github.com/MohamedBarbych/nuit-info-2025-le-nexus-connecte

**Structure des Fichiers:**
```
defi-sfirr/
├── index.html          (Page principale SPA)
├── confirmation.html   (Référence de structure)
├── styles.css          (Styles et animations)
├── script.js           (Logique applicative)
└── README.md           (Documentation)
```

**Accès au Formulaire:**
L'application démarre directement sur le formulaire d'interaction. Il suffit d'ouvrir index.html ou d'accéder à l'URL de déploiement pour voir l'interface complète.

### Critères d'Évaluation

**Innovation / Originalité (20 pts)**
- Architecture SPA en JavaScript pur sans framework
- Avatar 3D interactif avec suivi du curseur
- Système de transitions 3D avec effets de particules
- Design cyberpunk immersif et unique
- Cache intelligent des vues pour performances optimales

**Normes d'Accessibilité (20 pts)**
- Conformité WCAG 2.1 niveau AA
- Structure HTML5 sémantique complète
- Navigation clavier fonctionnelle
- Attributs ARIA appropriés
- Contraste de couleurs validé
- Support des lecteurs d'écran

**Thème de l'Année 2025 (20 pts)**
- Intégration dans 8 emplacements différents
- Section dédiée "Filtre Temporel"
- Messages personnalisés par mission
- Calcul dynamique de l'année
- Objectifs annuels affichés

**UX Intuitive et Efficace (10 pts)**
- Navigation fluide sans rechargement
- Feedback visuel immédiat
- Messages d'erreur clairs
- Transitions visuelles guidant l'utilisateur
- Interface responsive (mobile, tablette, desktop)

### Caractéristiques Techniques Avancées

**Performance:**
- Temps de chargement initial: moins de 1 seconde
- Transitions fluides à 60 FPS
- Cache des vues pour navigation instantanée
- Optimisation des animations CSS

**Compatibilité:**
- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Support des écrans tactiles
- Responsive de 375px à 4K
- Dégradation gracieuse sur anciens navigateurs

**Code:**
- JavaScript vanilla sans dépendances externes
- Architecture modulaire et maintenable
- Code nettoyé et optimisé
- Conventions de nommage cohérentes

### Conclusion

Le Nexus Connecté propose une solution complète et innovante pour le défi "Formulaire Augmenté". L'application combine une architecture technique moderne avec une expérience utilisateur immersive, tout en respectant les normes d'accessibilité et en intégrant parfaitement le thème de l'année 2025.

L'approche Single Page Application offre une fluidité de navigation inégalée, tandis que les effets visuels cyberpunk créent une identité visuelle forte et mémorable. Le système d'adaptation dynamique des champs garantit que chaque utilisateur bénéficie d'une expérience sur mesure, correspondant exactement à ses besoins.

Développé avec passion pour La Nuit de l'Info 2025.

## Équipe de Développement

Ce projet a été réalisé par une équipe de cinq développeurs passionnés :

- **Mohamed Barbych** - [LinkedIn](https://www.linkedin.com/in/mohamed-barbych/)
- **Mouaad Elhansali** - [LinkedIn](https://www.linkedin.com/in/mouaad-elhansali/)
- **Youness El Mourid** - [LinkedIn](http://www.linkedin.com/in/youness-el-mourid-899b92332)
- **Reda Bouchkouch** - [LinkedIn](https://www.linkedin.com/in/reda-bouchkouch-236aa6367/)
- **Elmahjoub Bentaher** - [LinkedIn](https://www.linkedin.com/in/elmahjoub-bentaher-4a1808285/)

La Nuit de l'Info 2025 - Le Nexus Connecté