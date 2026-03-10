"use client"

import { motion } from "framer-motion"
import { Code, GitPullRequest, GitBranch, Eye, Terminal, Puzzle, ExternalLink, Monitor, Smartphone, Globe, Lightbulb } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import ContentSection from "@/components/content-section"

export default function Outils() {
  const pathname = usePathname()

  const vscodeFeatures = [
    { icon: <GitBranch className="w-4 h-4" />, title: "Gestion des branches", description: "Créer, changer et supprimer des branches en un clic" },
    { icon: <GitPullRequest className="w-4 h-4" />, title: "Commits visuels", description: "Voir les modifications et créer des commits facilement" },
    { icon: <Eye className="w-4 h-4" />, title: "Diff intégré", description: "Comparer les versions côte à côte" },
    { icon: <GitPullRequest className="w-4 h-4" />, title: "Pull Requests", description: "Créer et réviser les PR sans quitter l'éditeur" },
  ]

  const extensions = [
    {
      name: "GitLens",
      description: "Supercharge Git dans VS Code avec des informations détaillées sur chaque ligne de code",
      features: ["Blame inline", "Historique de fichier", "Comparaison de branches", "Visualisation de commits"],
      icon: <Eye className="w-5 h-5" />,
    },
    {
      name: "GitHub Pull Requests",
      description: "Gérer les PR GitHub directement dans VS Code",
      features: ["Créer des PR", "Réviser du code", "Commenter", "Fusionner"],
      icon: <GitPullRequest className="w-5 h-5" />,
    },
    {
      name: "Git Graph",
      description: "Visualiser l'historique Git sous forme de graphique interactif",
      features: ["Graphique des commits", "Navigation visuelle", "Actions Git rapides", "Filtres avancés"],
      icon: <GitBranch className="w-5 h-5" />,
    },
    {
      name: "Git History",
      description: "Explorer l'historique complet de vos fichiers et dépôts",
      features: ["Historique de fichier", "Comparaison de commits", "Recherche dans l'historique", "Statistiques"],
      icon: <Terminal className="w-5 h-5" />,
    },
  ]

  const guiTools = [
    { name: "GitHub Desktop", description: "Application officielle GitHub pour gérer vos dépôts", platforms: ["Windows", "Mac"], url: "https://desktop.github.com/", icon: <Monitor className="w-5 h-5" /> },
    { name: "GitKraken", description: "Client Git visuel puissant avec interface intuitive", platforms: ["Windows", "Mac", "Linux"], url: "https://www.gitkraken.com/", icon: <Globe className="w-5 h-5" /> },
    { name: "Sourcetree", description: "Client Git gratuit par Atlassian", platforms: ["Windows", "Mac"], url: "https://www.sourcetreeapp.com/", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Fork", description: "Client Git rapide et élégant", platforms: ["Windows", "Mac"], url: "https://git-fork.com/", icon: <Code className="w-5 h-5" /> },
  ]

  const onlineTools = [
    { icon: <Globe className="w-4 h-4" />, title: "Git Visualizer", desc: "Comprendre les commandes Git avec des visualisations interactives", href: "https://git-school.github.io/visualizing-git/", cta: "Essayer" },
    { icon: <Terminal className="w-4 h-4" />, title: "Explain Git with D3", desc: "Animations interactives pour comprendre les concepts Git", href: "https://onlywei.github.io/explain-git-with-d3/", cta: "Découvrir" },
    { icon: <Code className="w-4 h-4" />, title: "Oh Shit, Git!?!", desc: "Solutions rapides pour les problèmes Git courants", href: "https://ohshitgit.com/", cta: "Sauver la situation" },
    { icon: <GitBranch className="w-4 h-4" />, title: "Learn Git Branching", desc: "Tutoriel interactif pour maîtriser les branches Git", href: "https://learngitbranching.js.org/", cta: "Apprendre" },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h1 className="font-[family-name:var(--font-syne)]">Outils et extensions recommandés</h1>

      {/* VS Code Source Control */}
      <ContentSection delay={0.1}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Code className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Source Control dans VS Code</h2>
        </div>

        <p className="text-base leading-relaxed mb-5 m-0">
          VS Code intègre nativement un <strong>système de contrôle de version puissant</strong> qui simplifie votre travail quotidien avec Git. Pas besoin de terminal pour les tâches courantes !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {vscodeFeatures.map((feature, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-[#e03838] mt-0.5 flex-shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">{feature.title}</h4>
                  <p className="text-sm text-gray-600 m-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100">
          <h4 className="font-semibold text-gray-900 mb-3 mt-0 flex items-center gap-2 text-sm">
            <Lightbulb className="w-4 h-4 text-[#e03838]" />
            Comment accéder ?
          </h4>
          <ul className="space-y-1.5 text-sm text-gray-700 m-0 p-0">
            <li className="m-0">• Cliquez sur l'icône <strong>Source Control</strong> dans la barre latérale gauche</li>
            <li className="m-0">• Ou utilisez <code className="bg-red-100 px-1.5 py-0.5 rounded text-xs">Ctrl+Shift+G</code> (Windows/Linux) ou <code className="bg-red-100 px-1.5 py-0.5 rounded text-xs">Cmd+Shift+G</code> (Mac)</li>
            <li className="m-0">• Connectez-vous à GitHub via VS Code pour accéder aux fonctionnalités avancées</li>
          </ul>
          <a
            href="https://code.visualstudio.com/docs/sourcecontrol/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-[#e03838] hover:underline font-medium text-sm transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Voir la documentation officielle
          </a>
        </div>
      </ContentSection>

      {/* Extensions VS Code */}
      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Puzzle className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Extensions VS Code incontournables</h2>
        </div>

        <p className="mb-5 text-gray-700 m-0">
          Boostez votre productivité avec ces extensions Git pour VS Code :
        </p>

        <div className="space-y-3">
          {extensions.map((ext, index) => (
            <div key={index} className="p-5 bg-white rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-[#e03838] p-2.5 rounded-lg flex-shrink-0">
                  <span className="text-white">{ext.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 mt-0">{ext.name}</h3>
                  <p className="text-gray-600 text-sm m-0 mb-3">{ext.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ext.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-2.5 py-1 rounded-full font-medium bg-gray-100 text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100 mt-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#e03838] mb-1 m-0">Installation rapide</p>
              <p className="text-sm text-gray-700 m-0">
                Ouvrez la palette de commandes (<code className="bg-red-100 px-1.5 py-0.5 rounded text-xs">Ctrl+P</code>) et tapez <code className="bg-red-100 px-1.5 py-0.5 rounded text-xs">ext install</code> suivi du nom de l'extension.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Clients Git GUI */}
      <ContentSection delay={0.3}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Monitor className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Clients Git avec interface graphique</h2>
        </div>

        <p className="mb-5 text-gray-700 m-0">
          Si vous préférez une application dédiée, ces clients Git offrent des interfaces visuelles puissantes :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {guiTools.map((tool, index) => (
            <div key={index} className="p-5 bg-white rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#e03838] p-2.5 rounded-lg flex-shrink-0 text-white">
                  {tool.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 mb-1 mt-0">{tool.name}</h3>
                  <p className="text-xs text-gray-600 mb-2 m-0">{tool.description}</p>
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {tool.platforms.map((platform, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 flex items-center gap-1">
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
                    className="inline-flex items-center gap-1.5 text-[#e03838] hover:underline font-medium text-xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Visiter le site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Outils en ligne */}
      <ContentSection delay={0.4}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Globe className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Outils en ligne utiles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {onlineTools.map((tool, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1 mt-0 flex items-center gap-2 text-sm">
                <span className="text-[#e03838]">{tool.icon}</span>
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 m-0">{tool.desc}</p>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#e03838] hover:underline font-medium text-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {tool.cta}
              </a>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Conseils */}
      <ContentSection delay={0.5}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Lightbulb className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Quel outil choisir ?</h2>
        </div>

        <div className="space-y-3">
          {[
            { icon: Code, title: "Pour les développeurs VS Code", rec: "Source Control natif + extensions GitLens et GitHub Pull Requests" },
            { icon: Monitor, title: "Pour les débutants", rec: "GitHub Desktop (simple et intuitif)" },
            { icon: Terminal, title: "Pour les utilisateurs avancés", rec: "Terminal + GitKraken pour la visualisation complexe" },
          ].map(({ icon: Icon, title, rec }) => (
            <div key={title} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1 mt-0 flex items-center gap-2 text-sm">
                <Icon className="w-4 h-4 text-[#e03838]" />
                {title}
              </h3>
              <p className="text-sm text-gray-700 m-0 ml-6">
                <strong className="text-[#e03838]">Recommandé :</strong> {rec}
              </p>
            </div>
          ))}

          <div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#e03838] mb-1 m-0">Conseil final</p>
                <p className="text-sm text-gray-700 m-0">
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
