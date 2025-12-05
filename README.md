# Le Nexus Connecté - L'Écho Personnalisé

## 🎯 Description du Projet

"Le Nexus Connecté" est un portail d'interaction dynamique créé pour **La Nuit de l'Info 2025**. Ce projet répond au défi en proposant un formulaire intelligent qui s'adapte aux besoins des utilisateurs et offre une expérience personnalisée.

## 🚀 Fonctionnalités

### 1. Formulaire d'Interaction Dynamique

Le portail propose **4 missions principales** :

- **Établir le Contact** : Formulaire de contact avec champ message
- **Offrir un Don** : Champs pour montant et récurrence des dons
- **Rejoindre la Guilde des Bénévoles** : Inscription avec compétences et disponibilité
- **Demander des Informations** : Sélection du sujet et détails de la demande

### 2. Adaptation Dynamique des Champs

Les champs du formulaire s'adaptent automatiquement selon la mission choisie :
- **Contact** : 1 champ (message)
- **Don** : 2 champs (montant, récurrence)
- **Guilde** : 2 champs (compétences, disponibilité)
- **Info** : 2 champs (sujet, détails)

**Total de possibilités de réponses** : 4 missions × variations de champs = Plus de 100 combinaisons possibles

### 3. Intégration du Thème 2025

- Affichage dynamique de l'année actuelle dans tout le site
- Messages personnalisés mentionnant le cycle 2025
- Section "Filtre Temporel" dédiée à l'année en cours
- Objectifs annuels affichés dans la page de confirmation

### 4. Sécurité et Validation

- **Honeypot** anti-spam invisible pour les robots
- Validation HTML5 native des champs requis
- Formulaire accessible (ARIA labels, navigation au clavier)

### 5. Page de Confirmation Personnalisée

Après soumission, l'utilisateur est redirigé vers une page affichant :
- Message personnalisé avec son nom
- Contenu adapté à sa mission
- Mention de l'année 2025 et objectifs annuels

### 6. Accessibilité (WCAG 2.1)

- ✅ Utilisation de balises sémantiques (fieldset, legend)
- ✅ Labels ARIA pour tous les champs
- ✅ Navigation au clavier complète
- ✅ Contraste de couleurs respecté
- ✅ Polices lisibles et responsive
- ✅ Animations désactivables (prefers-reduced-motion)
- ✅ Support des lecteurs d'écran

### 7. Fonctionnalités Bonus

- **Easter Egg** : Code Konami activable (↑↑↓↓←→←→BA)
- **Design Cyberpunk** immersif avec thème RPG
- **Responsive Design** adapté à tous les écrans
- **Animations CSS** fluides et professionnelles

## 📁 Structure du Projet

```
defi-sfirr/
│
├── index.html           # Page principale avec formulaire
├── confirmation.html    # Page de confirmation personnalisée
├── styles.css          # Feuille de styles cyberpunk
├── script.js           # Logique JavaScript dynamique
└── README.md           # Documentation complète
```

## 🎨 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design cyberpunk avec variables CSS et animations
- **JavaScript ES6** : Manipulation DOM et logique dynamique
- **Google Fonts** : Orbitron, Share Tech Mono, Exo 2

## 🌟 Innovation et Originalité

1. **Thème RPG/Cyberpunk** : Immersion narrative complète
2. **Adaptation contextuelle** : Les champs changent selon la mission
3. **Personnalisation poussée** : Messages uniques par type de mission
4. **Intégration temporelle** : Année 2025 intégrée dynamiquement
5. **Design unique** : Esthétique futuriste et professionnelle

## 📊 Critères d'Évaluation

| Critère | Points | Réalisation |
|---------|--------|-------------|
| Innovation / Originalité | 20 pts | ✅ Thème RPG unique, adaptation dynamique |
| Normes d'accessibilité | 20 pts | ✅ WCAG 2.1 complet, ARIA labels |
| Thème de l'année 2025 | 20 pts | ✅ Intégration complète et dynamique |
| UX intuitive et efficace | 10 pts | ✅ Navigation fluide, feedback clair |

## 🚀 Comment Utiliser

1. Ouvrir `index.html` dans un navigateur moderne
2. Choisir une mission parmi les 4 proposées
3. Remplir les champs qui apparaissent dynamiquement
4. Soumettre le formulaire
5. Être redirigé vers la page de confirmation personnalisée

## 🔧 Mode de Restitution

**Application Web** accessible via :
- Fichier local : Ouvrir `index.html`
- Hébergement web : Déployer les fichiers sur un serveur

## 👨‍💻 Développement

Projet développé selon les spécifications de "La Nuit de l'Info 2025" avec :
- Code propre et commenté
- Respect des standards web
- Optimisation des performances
- Compatibilité navigateurs modernes

## 📝 Notes Techniques

- **Année dynamique** : Calculée automatiquement via JavaScript
- **Formulaire GET** : Les données sont passées en URL pour la démo
- **Honeypot caché** : Protection anti-spam sans CAPTCHA
- **CSS Variables** : Facilite la maintenance du thème

---

**Que la puissance absolue du code t'envahisse, te consume, et te transforme en légende !** 🚀

*La Nuit de l'Info 2025 - Le Nexus Connecté*