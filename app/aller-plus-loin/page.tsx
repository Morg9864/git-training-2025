"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import { ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import CommandImage from "@/components/command-image"

export default function AllerPlusLoin() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>8. Aller plus loin</h1>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center">
            <ArrowRight className="mr-2 text-[#8C2626]" /> Revert et Reset
          </h3>
          <CodeBlock
            code={`git revert [commit-hash] # Annule un commit précis
git reset [commit-hash] # Retourne à un commit précis (attention, opération sensible)`}
          />
          <CommandImage command="revert" />
          <CommandImage command="reset" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center">
            <ArrowRight className="mr-2 text-[#8C2626]" /> Stash
          </h3>
          <CodeBlock
            code={`git stash # Enregistre temporairement les modifications en cours
git stash pop # Récupère les modifications enregistrées`}
          />
          <CommandImage command="stash" />
          <CommandImage command="pop" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center">
            <ArrowRight className="mr-2 text-[#8C2626]" /> Tags
          </h3>
          <CodeBlock
            code={`git tag -a v1.0 -m "Version stable 1.0" # Crée un tag annoté
git push origin v1.0 # Pousse le tag vers le dépôt distant`}
          />
          <CommandImage command="tag" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center">
            <ArrowRight className="mr-2 text-[#8C2626]" /> Historique plus propre
          </h3>
          <CodeBlock
            code={`git log --oneline --graph --decorate --all # Affiche un historique compact et visuel`}
          />
          <CommandImage command="log-oneline" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center">
            <ArrowRight className="mr-2 text-[#8C2626]" /> Modifications et Annulations
          </h3>
          <CodeBlock
            code={`git commit --amend # Modifie le dernier commit (message ou contenu)
git checkout -- nom-du-fichier # Annule les modifications locales non indexées
git reset HEAD nom-du-fichier # Retire un fichier de l'index`}
          />
          <CommandImage command="amend" />
          <CommandImage command="checkout-file" />
          <CommandImage command="head" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center">
            <ArrowRight className="mr-2 text-[#8C2626]" /> Synchronisation
          </h3>
          <CodeBlock
            code={`git fetch origin # Récupère les mises à jour du dépôt distant
git reset --hard origin/nom-de-la-branche # Réinitialise la branche locale pour qu'elle corresponde au distant (attention, cette commande supprime les modifications locales)`}
          />
          <CommandImage command="fetch" />
          <CommandImage command="reset-hard" />
        </motion.div>
      </section>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
