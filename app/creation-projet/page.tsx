"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import CommandImage from "@/components/command-image"

export default function CreationProjetGithub() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>3. Création d'un projet sur Git et GitHub</h1>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3>Création du répertoire du projet</h3>
          <CodeBlock code="mkdir nom-du-projet" />
          <p>Crée un dossier pour votre projet.</p>
          <CommandImage command="mkdir" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3>Initialisation du dépôt Git</h3>
          <CodeBlock code="git init" />
          <p>Initialise un nouveau dépôt Git dans le dossier du projet.</p>
          <CommandImage command="init" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3>Création d'un fichier README</h3>
          <CodeBlock code="touch README.md" />
          <p>Crée un fichier README pour documenter le projet.</p>
          <CommandImage command="touch" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3>Premier commit</h3>
          <CodeBlock code={`git add .
git commit -m "Initial commit"`} />
          <p>Ajoute les fichiers et enregistre le commit initial.</p>
          <CommandImage command="add-commit" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3>Création du dépôt sur GitHub</h3>
          <CodeBlock code="gh repo create nom-du-projet --public" />
          <p>Crée un dépôt GitHub via l'interface en ligne de commande GitHub CLI.</p>
          <CommandImage command="repo" />

          <p>(Peut être aussi créé via l'interface visuel sur <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-[#8C2626] hover:underline">github</a> )</p>
          <CommandImage command="gui" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h3>Liaison du dépôt local avec GitHub</h3>
          <CodeBlock code="git remote add origin git@github.com:votre-utilisateur/nom-du-projet.git" />
          <p>Associe le dépôt local au dépôt distant sur GitHub.</p>
          <CommandImage command="remote" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3>Pousser le commit initial</h3>
          <CodeBlock code="git push -u origin main" />
          <p>Envoie le commit initial sur le dépôt GitHub.</p>
          <CommandImage command="push-main" />
        </motion.div>
      </section>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
