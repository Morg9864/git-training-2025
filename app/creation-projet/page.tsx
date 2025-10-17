"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import CommandImage from "@/components/command-image"
import ContentSection from "@/components/content-section"
import { FolderPlus, GitBranch, FileText, Package, Github, Link2, Upload, CheckCircle } from "lucide-react"

export default function CreationProjetGithub() {
  const pathname = usePathname()

  const steps = [
    {
      icon: FolderPlus,
      color: "from-blue-500 to-cyan-500",
      title: "Créer le répertoire du projet",
      code: "mkdir nom-du-projet\ncd nom-du-projet",
      description: "Crée un nouveau dossier pour votre projet et naviguez dedans.",
      command: "mkdir"
    },
    {
      icon: GitBranch,
      color: "from-red-500 to-orange-500",
      title: "Initialiser le dépôt Git",
      code: "git init",
      description: "Initialise un nouveau dépôt Git dans le dossier du projet. Un dossier caché .git est créé.",
      command: "init"
    },
    {
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      title: "Créer un fichier README",
      code: "touch README.md",
      description: "Crée un fichier README pour documenter votre projet. C'est la première chose que les visiteurs verront !",
      command: "touch"
    },
    {
      icon: Package,
      color: "from-purple-500 to-pink-500",
      title: "Premier commit",
      code: `git add .\ngit commit -m "Initial commit"`,
      description: "Ajoute tous les fichiers au staging et crée votre premier commit.",
      command: "add-commit"
    },
    {
      icon: Github,
      color: "from-indigo-500 to-purple-500",
      title: "Créer le dépôt sur GitHub",
      code: "gh repo create nom-du-projet --public",
      description: "Crée un nouveau dépôt GitHub via la CLI (ou via l'interface web).",
      command: "repo",
      extra: true
    },
    {
      icon: Link2,
      color: "from-orange-500 to-red-500",
      title: "Lier le dépôt local à GitHub",
      code: "git remote add origin git@github.com:votre-utilisateur/nom-du-projet.git",
      description: "Associe votre dépôt local au dépôt distant sur GitHub.",
      command: "remote"
    },
    {
      icon: Upload,
      color: "from-teal-500 to-cyan-500",
      title: "Pousser le commit initial",
      code: "git push -u origin main",
      description: "Envoie votre premier commit sur GitHub. L'option -u définit la branche par défaut.",
      command: "push-main"
    }
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Création d'un projet sur Git et GitHub</h1>

      <ContentSection delay={0.1}>
        <div className="text-center mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            Suivez ce guide étape par étape pour créer et publier votre premier projet sur GitHub ! 🚀
          </p>
        </div>
      </ContentSection>

      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Guide complet en 7 étapes</h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="flex gap-4"
            >
              {/* Numéro de l'étape */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-gray-300 to-transparent mt-2"></div>
                )}
              </div>

              {/* Contenu de l'étape */}
              <div className="flex-1 pb-8">
                <div className="bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 bg-gradient-to-br ${step.color} rounded-lg`}>
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  </div>

                  <CodeBlock code={step.code} />

                  <p className="mt-3 text-gray-700">
                    {step.description}
                  </p>

                  <CommandImage command={step.command} />

                  {step.extra && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-blue-900 text-sm">
                        💡 <strong>Alternative :</strong> Vous pouvez aussi créer le dépôt via l'interface web sur{" "}
                        <a
                          href="https://github.com/new"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 underline font-semibold"
                        >
                          github.com/new
                        </a>
                      </p>
                      <CommandImage command="gui" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection delay={0.3}>
        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-300">
          <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
            <CheckCircle className="h-7 w-7" />
            Récapitulatif du workflow complet
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">📁 Local</h4>
              <ul className="space-y-1 text-sm text-green-800">
                <li>✓ Créer le dossier</li>
                <li>✓ Initialiser Git</li>
                <li>✓ Créer README.md</li>
                <li>✓ Premier commit</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">☁️ GitHub</h4>
              <ul className="space-y-1 text-sm text-green-800">
                <li>✓ Créer le dépôt distant</li>
                <li>✓ Lier local ↔ distant</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">🚀 Publication</h4>
              <ul className="space-y-1 text-sm text-green-800">
                <li>✓ Push vers GitHub</li>
                <li>✓ Projet en ligne !</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.4}>
        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-purple-900 mb-3">🎓 Bonnes pratiques</h3>
          <ul className="space-y-2 text-purple-800">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
              <span>Utilisez des <strong>noms de projet clairs et descriptifs</strong> (en minuscules, avec des tirets)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
              <span>Rédigez un <strong>README.md complet</strong> avec description, installation et utilisation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
              <span>Ajoutez un <strong>.gitignore</strong> pour exclure les fichiers inutiles (node_modules, .env, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
              <span>Choisissez une <strong>licence appropriée</strong> pour votre projet (MIT, GPL, Apache, etc.)</span>
            </li>
          </ul>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
