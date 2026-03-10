"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import { ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import CommandImage from "@/components/command-image"

const sections = [
  {
    title: "Revert et Reset",
    code: `git revert [commit-hash] # Annule un commit précis\ngit reset [commit-hash] # Retourne à un commit précis (attention, opération sensible)`,
    commands: ["revert", "reset"],
  },
  {
    title: "Stash",
    code: `git stash # Enregistre temporairement les modifications en cours\ngit stash pop # Récupère les modifications enregistrées`,
    commands: ["stash", "pop"],
  },
  {
    title: "Tags",
    code: `git tag -a v1.0 -m "Version stable 1.0" # Crée un tag annoté\ngit push origin v1.0 # Pousse le tag vers le dépôt distant`,
    commands: ["tag"],
  },
  {
    title: "Historique plus propre",
    code: `git log --oneline --graph --decorate --all # Affiche un historique compact et visuel`,
    commands: ["log-oneline"],
  },
  {
    title: "Modifications et Annulations",
    code: `git commit --amend # Modifie le dernier commit (message ou contenu)\ngit checkout -- nom-du-fichier # Annule les modifications locales non indexées\ngit reset HEAD nom-du-fichier # Retire un fichier de l'index`,
    commands: ["amend", "checkout-file", "head"],
  },
  {
    title: "Synchronisation",
    code: `git fetch origin # Récupère les mises à jour du dépôt distant\ngit reset --hard origin/nom-de-la-branche # Réinitialise la branche locale pour qu'elle corresponde au distant (attention, cette commande supprime les modifications locales)`,
    commands: ["fetch", "reset-hard"],
  },
]

export default function AllerPlusLoin() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h1 className="font-[family-name:var(--font-syne)]">Aller plus loin</h1>

      <div className="space-y-4">
        {sections.map((section, i) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.35 }}
            className="bg-white border border-gray-200 rounded-xl p-5 md:p-6"
          >
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-900 mt-0 mb-4">
              <ArrowRight className="w-4 h-4 text-[#e03838] flex-shrink-0" />
              {section.title}
            </h3>
            <CodeBlock code={section.code} />
            {section.commands.map((cmd) => (
              <CommandImage key={cmd} command={cmd} />
            ))}
          </motion.section>
        ))}
      </div>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
