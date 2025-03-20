"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import { AlertTriangle } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import CommandImage from "@/components/command-image"

export default function Conflits() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>5. Gestion des conflits</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 rounded"
      >
        <div className="flex items-start">
          <AlertTriangle className="text-orange-500 mr-3 mt-1" />
          <p>Les conflits surviennent lorsque deux utilisateurs modifient la même partie d'un fichier.</p>
        </div>

        <CommandImage command="conflit" />
      </motion.div>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3>Résoudre un conflit</h3>
          <ul>
            <li>
              Identifier les fichiers en conflit avec <code>git status</code>
            </li>
            <li>
              Comparer les différences avec <code>git diff</code> ou utiliser l'outil de merge :
              <ul>
                <li>
                  Pour ouvrir le fichier en conflit dans VSCode : <code>code [nom_du_fichier]</code>
                </li>
                <li>
                  Pour lancer l'outil de merge (si configuré) : <code>git mergetool</code>
                </li>
              </ul>
            </li>
            <li>
              Ouvrir le fichier et résoudre manuellement les divergences (choix entre la version locale et distante, ou fusionner les modifications).
            </li>
            <li>
              Valider la résolution du conflit avec <code>git add</code> et <code>git commit</code>
            </li>
          </ul>
          <CodeBlock
            code={`# Ouvrir le fichier en conflit dans VSCode
code [nom_du_fichier]`}
          />

          <CommandImage command="code" />
          <CommandImage command="vscode" />

          <CodeBlock
            code={`# Lancer l'outil de merge si configuré
git mergetool`}
          />

          <CommandImage command="mergetool" />

          <CodeBlock
            code={`# Une fois les conflits résolus
git add [nom_du_fichier]
git commit -m "Résolution du conflit"`}
          />

          <CommandImage command="resolve" />

        </motion.div>
      </section>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}

