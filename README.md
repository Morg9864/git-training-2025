# Formation Complète Git & GitHub

![N-HiTec Logo](/public/images/N-HiTec_logo_slogan.png)

Bienvenue dans cette application réalisée dans le cadre de la [Formation Git & GitHub de N-HiTec](https://github.com/N-HiTec)! Cette formation vous permettra de maîtriser Git et les plateformes associées (GitHub, GitLab) afin de collaborer efficacement sur vos projets de développement.

---

## À propos

Ce projet est une application Next.js mettant en avant une structure de pages dédiée à l'apprentissage et à l'initiation de Git & GitHub. Il inclut notamment :

- **Tailwind CSS** pour la mise en forme et la gestion simplifiée des styles.
- **Framer Motion** pour animer et fluidifier l'expérience utilisateur.
- **Next.js** (React) pour la structure modulaire et les performances élevées.

Dans cette interface, vous trouverez différentes sections telles que :
- **Introduction** : Découverte de Git, GitHub et GitLab
- **Bases de Git** : Commandes fondamentales et initialisation
- **Création d’un projet** : Création d’un projet sur Git et GitHub
- **Branches et Fusion** : Création et fusion de branches
- **Gestion des conflits** : Résolution de conflits de fusion
- **Pull Requests** : Collaboration et revue de code
- **Bonnes pratiques** : Conseils pour le travail en équipe
- **Outils recommandés** : Extensions et outils utiles
- **Aller plus loin** : Commandes avancées
- **Configuration clé SSH** : Authentification sécurisée avec GitHub

---

## 🛠️ Installation et Développement

### Prérequis
- Node.js 18+ 
- pnpm (gestionnaire de paquets recommandé)

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/Morg9864/git-training-2025.git
cd git-training-2025

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev
```

L'application sera accessible sur `http://localhost:3000`

### Commandes disponibles
```bash
pnpm run dev      # Démarrer le serveur de développement
pnpm run build    # Créer un build de production
pnpm run start    # Lancer le build de production
pnpm run lint     # Vérifier le code avec ESLint
```

---

## 🎨 Structure du Projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal avec Navigation
│   ├── page.tsx           # Page d'accueil
│   ├── introduction/      # Page Introduction
│   ├── bases/             # Page Bases de Git
│   ├── creation-projet/   # Page Création de projet
│   ├── branches/          # Page Branches et Fusion
│   ├── conflits/          # Page Gestion des conflits
│   ├── pull-request/      # Page Pull Requests
│   ├── bonnes-pratiques/  # Page Bonnes pratiques
│   ├── outils/            # Page Outils recommandés
│   ├── glossaire/         # Page Glossaire
│   ├── aller-plus-loin/   # Page Commandes avancées
│   └── cle-ssh/           # Page Configuration SSH
├── components/            # Composants réutilisables
│   ├── navigation.tsx     # Sidebar avec navigation colorée
│   ├── content-section.tsx # Wrapper pour sections de contenu
│   ├── code-block.tsx     # Blocs de code stylisés
│   ├── command-image.tsx  # Images de commandes Git
│   ├── page-navigation.tsx # Navigation Précédent/Suivant
│   ├── footer.tsx         # Footer de l'application
│   ├── logo.tsx           # Logo N-HiTec
│   └── ui/                # Composants shadcn/ui
├── lib/                   # Utilitaires
│   └── glossaire.json     # Données du glossaire
├── public/                # Assets statiques
│   ├── formation.html     # Slides de la formation
│   └── images/            # Images et logos
└── styles/                # Styles globaux
```

---

## 🎨 Design System

### Palette de Couleurs N-HiTec
- **Rouge principal** : `#F24141` (brand color)
- **Rouge clair** : `#ff6b6b` (gradients)
- **Rouge foncé** : `#bf3434` (hover states)

### Codes Couleur par Section
- 🔴 **Rouge** : Accueil
- 🔵 **Bleu** : Introduction, Outils
- 🟠 **Orange** : Bases de Git, Conflits
- 🟢 **Vert** : Création Projet, Bonnes pratiques
- 🟣 **Violet** : Branches, Pull Requests
- 🔷 **Indigo** : Glossaire
- 🟡 **Jaune** : Clé SSH, Aller plus loin

### Composants Clés
- **ContentSection** : Wrapper avec animations Framer Motion (delay, className)
- **CodeBlock** : Blocs de code avec fond sombre et syntax highlighting
- **CommandImage** : Images illustratives des commandes Git
- **Navigation** : Sidebar responsive avec glassmorphism et indicateurs actifs

---

## 📱 Responsive Design

L'application est entièrement responsive avec 3 breakpoints principaux :

- **Mobile** (< 768px) : Menu hamburger, layout vertical, padding optimisé
- **Tablette** (768px - 1024px) : Navigation visible, grilles adaptées
- **Desktop** (> 1024px) : Sidebar fixe, layout 2-3 colonnes, animations complètes

Toutes les pages utilisent `flex-col sm:flex-row` et des grilles `lg:grid-cols-2` pour une adaptation fluide.

---

## 🤝 Contribuer 

Vous souhaitez améliorer cette formation ? Voici comment contribuer :

1. **Fork** le dépôt sur GitHub
2. **Créez une branche** pour votre fonctionnalité (`git checkout -b feature/amelioration`)
3. **Committez** vos changements (`git commit -m "Ajout d'une nouvelle section"`)
4. **Push** vers votre branche (`git push origin feature/amelioration`)
5. **Ouvrez une Pull Request** avec une description détaillée

### Signaler un problème
- 🐛 **Bug** : Signalez les bugs via les [Issues GitHub](https://github.com/Morg9864/git-training-2025/issues)
- 💡 **Suggestion** : Proposez de nouvelles fonctionnalités
- 📝 **Documentation** : Améliorez le contenu pédagogique

---

## 📄 License

Ce projet est mis à disposition sous licence **GNU General Public License v3.0**. 

Vous êtes libres de :
- ✅ Utiliser ce code pour vos propres projets
- ✅ Modifier et adapter le contenu
- ✅ Étudier le code source

Restrictions :
- ❌ Distribution commerciale sans autorisation
- ❌ Suppression des attributions N-HiTec

Pour plus de détails, consultez le fichier [LICENSE](./LICENSE).

---

## 🙏 Remerciements

Merci à **N-HiTec** pour cette formation complète et à tous les contributeurs qui ont participé à l'amélioration de cette application.

**Développé avec ❤️ par N-HiTec**

---

## 📞 Contact

- 🌐 Site web : [N-HiTec](https://n-hitec.com) / [P.Morgan](https://morganphemba.be)
- 📧 Email : morgan.phemba@gmail.com
- 💼 GitHub : [@N-HiTec](https://github.com/N-HiTec) / [@P.Morgan](https://github.com/Morg9864)

---

**Bonne formation Git & GitHub ! 🚀**