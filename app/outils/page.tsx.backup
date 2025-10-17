"use client"

import { motion } from "framer-motion"
import { Code, GitPullRequest, TextSearch } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"

export default function Outils() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>7. Outils recommandés : Built-in Source Control pour VS Code</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-lg">VS Code simplifie la gestion quotidienne des tâches Git avec sa feature "Source Control" :</p>

        <ul className="mt-4">
          <li className="flex items-start mb-3">
            <GitPullRequest className="text-[#BF3434] mr-3 mt-1" />
            <span>Création et gestion des commits</span>
          </li>
          <li className="flex items-start mb-3">
            <GitPullRequest className="text-[#BF3434] mr-3 mt-1" />
            <span>Gestion des branches</span>
          </li>
          <li className="flex items-start mb-3">
            <GitPullRequest className="text-[#BF3434] mr-3 mt-1" />
            <span>Création et révision des pull requests directement depuis VS Code</span>
          </li>
        </ul>
      </motion.div>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3>Utilisation</h3>

          <ul>
            <li className="flex items-start mb-3">
              <Code className="text-[#8C2626] mr-3 mt-1" />
              <span>Se connecter à GitHub via VS Code</span>
            </li>
            <li className="flex items-start mb-3">
              <Code className="text-[#8C2626] mr-3 mt-1" />
              <span>Gérer directement les branches, commits et pull requests via l'interface utilisateur</span>
            </li>
          </ul>
        </motion.div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3>Documentation</h3>

          <ul>
            <li className="flex items-start mb-3">
              <TextSearch className="text-[#8C2626] mr-3 mt-1" />
              <span>Lien vers la <a href="https://code.visualstudio.com/docs/sourcecontrol/overview" target="_blank" rel="noopener noreferrer" className="text-[#8C2626] hover:underline">documentation</a></span>
            </li>
          </ul>
        </motion.div>
      </section>
      

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
