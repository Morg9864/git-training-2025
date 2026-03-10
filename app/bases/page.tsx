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
    { icon: FolderGit2, title: "git clone", code: "git clone [url]", description: "Clone un dépôt distant à partir d'une URL.", command: "clone" },
    { icon: FileText, title: "git add", code: "git add [fichier/dossier]", description: "Ajoute le(s) fichier(s) ou dossier(s) à l'index (staging area).", command: "add" },
    { icon: GitBranch, title: "git commit", code: 'git commit -m "message clair et précis"', description: "Enregistre les modifications avec un message de commit descriptif.", command: "commit" },
    { icon: Download, title: "git pull", code: "git pull", description: "Récupère et fusionne les modifications du dépôt distant.", command: "pull" },
    { icon: Upload, title: "git push", code: "git push", description: "Envoie les modifications locales vers le dépôt distant.", command: "push" },
    { icon: FileText, title: "git status", code: "git status", description: "Affiche l'état actuel du dépôt (fichiers modifiés, staged, etc.).", command: "status" },
    { icon: Clock, title: "git log", code: "git log", description: "Affiche l'historique des commits avec leurs détails.", command: "log" },
    { icon: GitCompare, title: "git diff", code: "git diff", description: "Montre les différences entre les modifications non commitées.", command: "diff" },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h1 className="font-[family-name:var(--font-syne)]">Bases de Git</h1>

      <ContentSection delay={0.1}>
        <p className="text-lg text-gray-700 leading-relaxed m-0">
          Maîtrisez les commandes essentielles pour gérer vos projets avec Git au quotidien.
        </p>
      </ContentSection>

      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#e03838] rounded-lg">
            <GitBranch className="h-5 w-5 text-white" />
          </div>
          <h2 className="mt-0 mb-0">Initialisation d'un dépôt Git</h2>
        </div>

        <div className="p-5 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
          <h4 className="font-semibold text-gray-900 mb-3 mt-0 text-sm">Créer un nouveau dépôt Git</h4>
          <CodeBlock code="git init" />
          <p className="mt-3 text-gray-700 m-0 text-sm">
            Cette commande initialise un nouveau dépôt Git dans le répertoire courant.
            Un dossier caché <code>.git</code> est créé pour stocker l'historique et la configuration.
          </p>
          <CommandImage command="init" />
        </div>
      </ContentSection>

      <ContentSection delay={0.3}>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#e03838] rounded-lg">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <h2 className="mt-0 mb-0">Commandes fondamentales</h2>
        </div>

        <div className="grid gap-4">
          {commands.map((cmd, index) => (
            <motion.div
              key={cmd.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#e03838] rounded-lg">
                  <cmd.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mt-0 mb-0">{cmd.title}</h3>
              </div>
              <CodeBlock code={cmd.code} />
              <p className="mt-3 text-gray-700 m-0 text-sm">{cmd.description}</p>
              <CommandImage command={cmd.command} />
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection delay={0.4}>
        <div className="p-5 bg-[#fef2f2] rounded-lg border border-red-100">
          <h3 className="text-base font-bold text-gray-900 mb-4 mt-0">Workflow Git typique</h3>
          <div className="space-y-3">
            {[
              { step: 1, code: "git add .", desc: "Ajouter les fichiers modifiés" },
              { step: 2, code: 'git commit -m "..."', desc: "Créer un commit" },
              { step: 3, code: "git push", desc: "Envoyer vers le dépôt distant" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#e03838] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{item.step}</div>
                <code className="bg-white border border-red-100 px-3 py-1 rounded text-gray-900 font-mono text-sm">{item.code}</code>
                <span className="text-gray-600 text-sm">→ {item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
