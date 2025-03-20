"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import CommandImage from "@/components/command-image"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"

export default function BasesDeGit() {
  const pathname = usePathname()

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">2. Bases de Git</h1>

      <section className="mb-8">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Initialisation d'un dépôt Git</h3>

          <div className="overflow-x-auto">
            <CodeBlock code="git init" />
          </div>

          <p className="mt-2">Initialise un nouveau dépôt Git.</p>
          <CommandImage command="init" />
        </motion.div>
      </section>

      <section className="mb-8">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold">Commandes fondamentales</h3>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <CodeBlock code="git clone [url]" />
            </div>
            <p className="mt-2">Clone un dépôt distant à partir d'une URL.</p>
            <CommandImage command="clone" />
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <CodeBlock code="git add [fichier/dossier]" />
            </div>
            <p className="mt-2">Ajoute le(s) fichier(s) ou dossier(s) à l'index.</p>
            <CommandImage command="add" />
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <CodeBlock code='git commit -m "message clair et précis"' />
            </div>
            <p className="mt-2">Enregistre les modifications avec un message de commit.</p>
            <CommandImage command="commit" />
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <CodeBlock code="git pull" />
            </div>
            <p className="mt-2">Récupère les modifications du dépôt distant.</p>
            <CommandImage command="pull" />
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <CodeBlock code="git push" />
            </div>
            <p className="mt-2">Envoie les modifications locales vers le dépôt distant.</p>
            <CommandImage command="push" />
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <CodeBlock code="git status" />
            </div>
            <p className="mt-2">Affiche l'état actuel du dépôt.</p>
            <CommandImage command="status" />
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <CodeBlock code="git log" />
            </div>
            <p className="mt-2">Affiche l'historique des commits.</p>
            <CommandImage command="log" />
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <CodeBlock code="git diff" />
            </div>
            <p className="mt-2">Montre les différences entre les modifications.</p>
            <CommandImage command="diff" />
          </div>
        </motion.div>
      </section>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}

