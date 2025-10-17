"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import CommandImage from "@/components/command-image"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import ContentSection from "@/components/content-section"
import { GitBranch, Download, Upload, FileText, Clock, GitCompare, FolderGit2 } from "lucide-react"

export default function BasesDeGit() {
  const pathname = usePathname()

  const commands = [
    {
      icon: FolderGit2,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-500",
      title: "git clone",
      code: "git clone [url]",
      description: "Clone un dépôt distant à partir d'une URL.",
      command: "clone"
    },
    {
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-500",
      title: "git add",
      code: "git add [fichier/dossier]",
      description: "Ajoute le(s) fichier(s) ou dossier(s) à l'index (staging area).",
      command: "add"
    },
    {
      icon: GitBranch,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-500",
      title: "git commit",
      code: 'git commit -m "message clair et précis"',
      description: "Enregistre les modifications avec un message de commit descriptif.",
      command: "commit"
    },
    {
      icon: Download,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-500",
      title: "git pull",
      code: "git pull",
      description: "Récupère et fusionne les modifications du dépôt distant.",
      command: "pull"
    },
    {
      icon: Upload,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-500",
      title: "git push",
      code: "git push",
      description: "Envoie les modifications locales vers le dépôt distant.",
      command: "push"
    },
    {
      icon: FileText,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-500",
      title: "git status",
      code: "git status",
      description: "Affiche l'état actuel du dépôt (fichiers modifiés, staged, etc.).",
      command: "status"
    },
    {
      icon: Clock,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      borderColor: "border-yellow-500",
      title: "git log",
      code: "git log",
      description: "Affiche l'historique des commits avec leurs détails.",
      command: "log"
    },
    {
      icon: GitCompare,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-500",
      title: "git diff",
      code: "git diff",
      description: "Montre les différences entre les modifications non commitées.",
      command: "diff"
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Bases de Git</h1>

      <ContentSection delay={0.1}>
        <div className="text-center mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            Maîtrisez les commandes essentielles pour gérer vos projets avec Git au quotidien ! 💡
          </p>
        </div>
      </ContentSection>

      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
            <GitBranch className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Initialisation d'un dépôt Git</h2>
        </div>

        <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500">
          <h4 className="font-semibold text-red-900 mb-3 text-lg">Créer un nouveau dépôt Git</h4>
          <CodeBlock code="git init" />
          <p className="mt-3 text-red-800">
            Cette commande initialise un nouveau dépôt Git dans le répertoire courant.
            Un dossier caché <code className="bg-red-100 px-2 py-0.5 rounded">.git</code> est créé pour stocker l'historique et la configuration.
          </p>
          <CommandImage command="init" />
        </div>
      </ContentSection>

      <ContentSection delay={0.3}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Commandes fondamentales</h2>
        </div>

        <div className="grid gap-6">
          {commands.map((cmd, index) => (
            <motion.div
              key={cmd.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className={`p-5 bg-gradient-to-br ${cmd.bgColor} rounded-xl border-l-4 ${cmd.borderColor} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 bg-gradient-to-br ${cmd.color} rounded-lg`}>
                  <cmd.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{cmd.title}</h3>
              </div>

              <CodeBlock code={cmd.code} />

              <p className="mt-3 text-gray-700">
                {cmd.description}
              </p>

              <CommandImage command={cmd.command} />
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection delay={0.4}>
        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-300">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Workflow Git typique
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <code className="bg-green-100 px-3 py-1 rounded text-green-900 font-mono">git add .</code>
              <span className="text-green-800">→ Ajouter les fichiers modifiés</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <code className="bg-green-100 px-3 py-1 rounded text-green-900 font-mono">git commit -m "..."</code>
              <span className="text-green-800">→ Créer un commit</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <code className="bg-green-100 px-3 py-1 rounded text-green-900 font-mono">git push</code>
              <span className="text-green-800">→ Envoyer vers le dépôt distant</span>
            </div>
          </div>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}

