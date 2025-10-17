"use client"

import { motion } from "framer-motion"
import { Code, GitPullRequest, GitBranch, Eye, Terminal, Puzzle, ExternalLink, Monitor, Smartphone, Globe, Lightbulb } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import ContentSection from "@/components/content-section"

export default function Outils() {
  const pathname = usePathname()

  const vscodeFeatures = [
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Gestion des branches",
      description: "Créer, changer et supprimer des branches en un clic"
    },
    {
      icon: <GitPullRequest className="w-5 h-5" />,
      title: "Commits visuels",
      description: "Voir les modifications et créer des commits facilement"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Diff intégré",
      description: "Comparer les versions côte à côte"
    },
    {
      icon: <GitPullRequest className="w-5 h-5" />,
      title: "Pull Requests",
      description: "Créer et réviser les PR sans quitter l'éditeur"
    }
  ]

  const extensions = [
    {
      name: "GitLens",
      description: "Supercharge Git dans VS Code avec des informations détaillées sur chaque ligne de code",
      features: ["Blame inline", "Historique de fichier", "Comparaison de branches", "Visualisation de commits"],
      color: "blue",
      icon: <Eye className="w-6 h-6" />
    },
    {
      name: "GitHub Pull Requests",
      description: "Gérer les PR GitHub directement dans VS Code",
      features: ["Créer des PR", "Réviser du code", "Commenter", "Fusionner"],
      color: "purple",
      icon: <GitPullRequest className="w-6 h-6" />
    },
    {
      name: "Git Graph",
      description: "Visualiser l'historique Git sous forme de graphique interactif",
      features: ["Graphique des commits", "Navigation visuelle", "Actions Git rapides", "Filtres avancés"],
      color: "green",
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      name: "Git History",
      description: "Explorer l'historique complet de vos fichiers et dépôts",
      features: ["Historique de fichier", "Comparaison de commits", "Recherche dans l'historique", "Statistiques"],
      color: "orange",
      icon: <Terminal className="w-6 h-6" />
    }
  ]

  const guiTools = [
    {
      name: "GitHub Desktop",
      description: "Application officielle GitHub pour gérer vos dépôts",
      platforms: ["Windows", "Mac"],
      url: "https://desktop.github.com/",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      name: "GitKraken",
      description: "Client Git visuel puissant avec interface intuitive",
      platforms: ["Windows", "Mac", "Linux"],
      url: "https://www.gitkraken.com/",
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Sourcetree",
      description: "Client Git gratuit par Atlassian",
      platforms: ["Windows", "Mac"],
      url: "https://www.sourcetreeapp.com/",
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      name: "Fork",
      description: "Client Git rapide et élégant",
      platforms: ["Windows", "Mac"],
      url: "https://git-fork.com/",
      icon: <Code className="w-6 h-6" />
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1><span className="not-prose">🛠️</span> Outils et extensions recommandés</h1>

      {/* VS Code Source Control */}
      <ContentSection delay={0.1} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <Code className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Source Control dans VS Code</h2>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          VS Code intègre nativement un <strong>système de contrôle de version puissant</strong> qui simplifie votre travail quotidien avec Git. Pas besoin de terminal pour les tâches courantes !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {vscodeFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-panel p-5 rounded-xl border border-blue-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-3">
                <div className="text-blue-600 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel p-5 rounded-xl border border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            Comment accéder ?
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Cliquez sur l'icône <strong>Source Control</strong> dans la barre latérale gauche</li>
            <li>• Ou utilisez le raccourci <code className="bg-blue-100 px-2 py-1 rounded">Ctrl+Shift+G</code> (Windows/Linux) ou <code className="bg-blue-100 px-2 py-1 rounded">Cmd+Shift+G</code> (Mac)</li>
            <li>• Connectez-vous à GitHub via VS Code pour accéder aux fonctionnalités avancées</li>
          </ul>
          <a
            href="https://code.visualstudio.com/docs/sourcecontrol/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Voir la documentation officielle
          </a>
        </div>
      </ContentSection>

      {/* Extensions VS Code */}
      <ContentSection delay={0.2} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
        <div className="flex items-center gap-3 mb-4">
          <Puzzle className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">Extensions VS Code incontournables</h2>
        </div>

        <p className="mb-6">
          Boostez votre productivité avec ces extensions Git pour VS Code :
        </p>

        <div className="space-y-4">
          {extensions.map((ext, index) => (
            <div
              key={index}
              className={`glass-panel p-6 rounded-xl border border-${ext.color}-200/50 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`text-${ext.color}-600 bg-${ext.color}-100 p-3 rounded-lg`}>
                  {ext.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{ext.name}</h3>
                  <p className="text-gray-700 mb-3">{ext.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {ext.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full bg-${ext.color}-100 text-${ext.color}-700 font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel p-5 rounded-xl border border-purple-200/50 mt-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-purple-700 mb-2">💡 Installation rapide</p>
              <p className="text-sm text-gray-700">
                Ouvrez la palette de commandes (<code className="bg-purple-100 px-2 py-1 rounded">Ctrl+P</code>) et tapez <code className="bg-purple-100 px-2 py-1 rounded">ext install</code> suivi du nom de l'extension.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Clients Git GUI */}
      <ContentSection delay={0.3} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <Monitor className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Clients Git avec interface graphique</h2>
        </div>

        <p className="mb-6">
          Si vous préférez une application dédiée, ces clients Git offrent des interfaces visuelles puissantes :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guiTools.map((tool, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-xl border border-green-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-green-600 bg-green-100 p-3 rounded-lg">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-700 mb-3">{tool.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    {tool.platforms.map((platform, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 flex items-center gap-1"
                      >
                        {platform === "Windows" && <Monitor className="w-3 h-3" />}
                        {platform === "Mac" && <Smartphone className="w-3 h-3" />}
                        {platform === "Linux" && <Terminal className="w-3 h-3" />}
                        {platform}
                      </span>
                    ))}
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visiter le site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Outils en ligne */}
      <ContentSection delay={0.4} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-6 h-6 text-orange-600" />
          <h2 className="text-2xl font-bold text-gray-900">Outils en ligne utiles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-panel p-5 rounded-xl border border-orange-200/50 hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Globe className="w-5 h-5 text-orange-600" />
              Git Visualizer
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Comprendre les commandes Git avec des visualisations interactives
            </p>
            <a
              href="https://git-school.github.io/visualizing-git/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Essayer
            </a>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-orange-200/50 hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-orange-600" />
              Explain Git with D3
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Animations interactives pour comprendre les concepts Git
            </p>
            <a
              href="https://onlywei.github.io/explain-git-with-d3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Découvrir
            </a>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-orange-200/50 hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-orange-600" />
              Oh Shit, Git!?!
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Solutions rapides pour les problèmes Git courants
            </p>
            <a
              href="https://ohshitgit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Sauver la situation
            </a>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-orange-200/50 hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-orange-600" />
              Learn Git Branching
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Tutoriel interactif pour maîtriser les branches Git
            </p>
            <a
              href="https://learngitbranching.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium text-sm hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Apprendre
            </a>
          </div>
        </div>
      </ContentSection>

      {/* Conseils */}
      <ContentSection delay={0.5} className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Quel outil choisir ?</h2>
        </div>

        <div className="space-y-4">
          <div className="glass-panel p-5 rounded-xl border border-indigo-200/50">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-indigo-600" />
              Pour les développeurs VS Code
            </h3>
            <p className="text-sm text-gray-700">
              ✅ <strong>Recommandé :</strong> Source Control natif + extensions GitLens et GitHub Pull Requests
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-indigo-200/50">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-indigo-600" />
              Pour les débutants
            </h3>
            <p className="text-sm text-gray-700">
              ✅ <strong>Recommandé :</strong> GitHub Desktop (simple et intuitif)
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-indigo-200/50">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-600" />
              Pour les utilisateurs avancés
            </h3>
            <p className="text-sm text-gray-700">
              ✅ <strong>Recommandé :</strong> Terminal + GitKraken pour la visualisation complexe
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-indigo-200/50 bg-gradient-to-br from-indigo-50/50 to-blue-50/50">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-indigo-700 mb-2">💡 Conseil final</p>
                <p className="text-sm text-gray-700">
                  Le meilleur outil est celui que <strong>vous utilisez réellement</strong> ! Commencez simple avec VS Code, puis explorez d'autres options selon vos besoins. L'important est de maîtriser les concepts Git, pas l'outil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
