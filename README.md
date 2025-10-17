# Formation Complète Git & GitHub

![N-HiTec Logo](/public/images/N-HiTec_logo_slogan.png)

Bienvenue dans cette application réalisée dans le cadre de la [Formation Git & GitHub de N-HiTec](https://github.com/N-HiTec)! Cette formation vous permettra de maîtriser Git et les plateformes associées (GitHub, GitLab) afin de collaborer efficacement sur vos projets de développement.

---

## 🎨 Design Moderne

Cette application a été entièrement **modernisée** avec :

-   **Interface glassmorphism** : Effets de verre translucide (opacité 90-95%) avec backdrop-blur pour une UI élégante
-   **Navigation colorée** : Cards avec codes couleur par section (rouge, bleu, orange, vert, violet, indigo, jaune)
-   **Indicateurs actifs** : Points animés pour la page courante avec Framer Motion
-   **Responsive design** : Adapté mobile, tablette et desktop avec breakpoints optimisés
-   **Animations fluides** : Transitions, hover effects et micro-interactions
-   **Gradient backgrounds** : Dégradés N-HiTec (rouge #F24141 → #ff6b6b)
-   **ContentSection component** : Composant réutilisable pour une structure cohérente

---

## 🚀 Technologies

Ce projet utilise les technologies modernes suivantes :

-   **Next.js 15** (App Router) - Framework React pour les performances et le SEO
-   **TypeScript** - Typage statique pour un code plus robuste
-   **Tailwind CSS** - Utility-first CSS pour un styling rapide et cohérent
-   **Framer Motion** - Animations et transitions fluides
-   **Lucide React** - Bibliothèque d'icônes moderne
-   **shadcn/ui** - Composants UI accessibles et personnalisables

---

## 📚 Contenu de la Formation

### 🏠 Pages principales

-   **Accueil** : Vue d'ensemble et présentation de la formation
-   **Introduction** : Découverte de Git, GitHub et GitLab
-   **Bases de Git** : Commandes fondamentales et initialisation
-   **Création d'un projet** : Créer un projet Git et le connecter à GitHub
-   **Branches et Fusion** : Créer, gérer et fusionner des branches
-   **Gestion des conflits** : Identifier et résoudre les conflits de fusion
-   **Pull Requests** : Workflow de collaboration et revue de code
-   **Bonnes pratiques** : Conventions de nommage et travail en équipe
-   **Outils recommandés** : VS Code, extensions Git, clients GUI
-   **Glossaire** : Dictionnaire des termes Git essentiels
-   **Aller plus loin** : Commandes avancées et cas d'usage complexes
-   **Configuration clé SSH** : Authentification sécurisée sans mot de passe

### 🎯 Fonctionnalités

-   **Navigation intuitive** : Sidebar avec icônes colorées et menu hamburger mobile
-   **Recherche glossaire** : Barre de recherche en temps réel
-   **Code blocks** : Blocs de code avec syntax highlighting
-   **CommandImage** : Aperçus visuels des commandes Git
-   **Page Navigation** : Boutons Précédent/Suivant entre les chapitres
-   **Theme provider** : Support du mode sombre (à venir)

---

## 🛠️ Installation et Développement

### Prérequis

-   Node.js 18+
-   pnpm (gestionnaire de paquets recommandé)

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
│   └── images/            # Images et logos
└── styles/                # Styles globaux
```

---

## 🎨 Design System

### Palette de Couleurs N-HiTec

-   **Rouge principal** : `#F24141` (brand color)
-   **Rouge clair** : `#ff6b6b` (gradients)
-   **Rouge foncé** : `#bf3434` (hover states)

### Codes Couleur par Section

-   🔴 **Rouge** : Accueil
-   🔵 **Bleu** : Introduction, Outils
-   🟠 **Orange** : Bases de Git, Conflits
-   🟢 **Vert** : Création Projet, Bonnes pratiques
-   🟣 **Violet** : Branches, Pull Requests
-   🔷 **Indigo** : Glossaire
-   🟡 **Jaune** : Clé SSH, Aller plus loin

### Composants Clés

-   **ContentSection** : Wrapper avec animations Framer Motion (delay, className)
-   **CodeBlock** : Blocs de code avec fond sombre et syntax highlighting
-   **CommandImage** : Images illustratives des commandes Git
-   **Navigation** : Sidebar responsive avec glassmorphism et indicateurs actifs

---

## 📱 Responsive Design

L'application est entièrement responsive avec 3 breakpoints principaux :

-   **Mobile** (< 768px) : Menu hamburger, layout vertical, padding optimisé
-   **Tablette** (768px - 1024px) : Navigation visible, grilles adaptées
-   **Desktop** (> 1024px) : Sidebar fixe, layout 2-3 colonnes, animations complètes

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

-   🐛 **Bug** : Signalez les bugs via les [Issues GitHub](https://github.com/Morg9864/git-training-2025/issues)
-   💡 **Suggestion** : Proposez de nouvelles fonctionnalités
-   📝 **Documentation** : Améliorez le contenu pédagogique

---

## 📄 License

Ce projet est mis à disposition sous licence **GNU General Public License v3.0**.

Vous êtes libres de :

-   ✅ Utiliser ce code pour vos propres projets
-   ✅ Modifier et adapter le contenu
-   ✅ Étudier le code source

Restrictions :

-   ❌ Distribution commerciale sans autorisation
-   ❌ Suppression des attributions N-HiTec

Pour plus de détails, consultez le fichier [LICENSE](./LICENSE).

---

## 🙏 Remerciements

Merci à **N-HiTec** pour cette formation complète et à tous les contributeurs qui ont participé à l'amélioration de cette application.

**Développé avec ❤️ par N-HiTec**

---

## 📞 Contact

-   🌐 Site web : [N-HiTec](https://n-hitec.com)
-   📧 Email : contact@n-hitec.com
-   💼 GitHub : [@N-HiTec](https://github.com/N-HiTec)

---

**Bonne formation Git & GitHub ! 🚀**
