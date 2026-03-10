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
    { icon: FolderPlus, title: "Créer le répertoire du projet", code: "mkdir nom-du-projet\ncd nom-du-projet", description: "Crée un nouveau dossier pour votre projet et naviguez dedans.", command: "mkdir" },
    { icon: GitBranch, title: "Initialiser le dépôt Git", code: "git init", description: "Initialise un nouveau dépôt Git dans le dossier du projet. Un dossier caché .git est créé.", command: "init" },
    { icon: FileText, title: "Créer un fichier README", code: "touch README.md", description: "Crée un fichier README pour documenter votre projet. C'est la première chose que les visiteurs verront !", command: "touch" },
    { icon: Package, title: "Premier commit", code: `git add .\ngit commit -m "Initial commit"`, description: "Ajoute tous les fichiers au staging et crée votre premier commit.", command: "add-commit" },
    { icon: Github, title: "Créer le dépôt sur GitHub", code: "gh repo create nom-du-projet --public", description: "Crée un nouveau dépôt GitHub via la CLI (ou via l'interface web).", command: "repo", extra: true },
    { icon: Link2, title: "Lier le dépôt local à GitHub", code: "git remote add origin git@github.com:votre-utilisateur/nom-du-projet.git", description: "Associe votre dépôt local au dépôt distant sur GitHub.", command: "remote" },
    { icon: Upload, title: "Pousser le commit initial", code: "git push -u origin main", description: "Envoie votre premier commit sur GitHub. L'option -u définit la branche par défaut.", command: "push-main" },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h1 className="font-[family-name:var(--font-syne)]">Création d'un projet sur Git et GitHub</h1>

      <ContentSection delay={0.1}>
        <p className="text-lg text-gray-700 leading-relaxed m-0">
          Suivez ce guide étape par étape pour créer et publier votre premier projet sur GitHub.
        </p>
      </ContentSection>

      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-[#e03838] rounded-lg">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <h2 className="mt-0 mb-0">Guide complet en 7 étapes</h2>
        </div>

        <div className="space-y-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.35 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 bg-[#e03838] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-red-100 mt-2" style={{ minHeight: "24px" }} />
                )}
              </div>

              <div className="flex-1 pb-5">
                <div className="bg-white rounded-lg border border-gray-200 hover:border-[#e03838] hover:shadow-sm transition-all p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#e03838] rounded-lg">
                      <step.icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mt-0 mb-0">{step.title}</h3>
                  </div>
                  <CodeBlock code={step.code} />
                  <p className="mt-3 text-gray-700 m-0 text-sm">{step.description}</p>
                  <CommandImage command={step.command} />
                  {step.extra && (
                    <div className="mt-4 p-3 bg-[#fef2f2] border border-red-100 rounded-lg">
                      <p className="text-gray-700 text-sm m-0">
                        <strong>Alternative :</strong> Vous pouvez aussi créer le dépôt via l'interface web sur{" "}
                        <a href="https://github.com/new" target="_blank" rel="noopener noreferrer" className="text-[#e03838] hover:underline font-semibold">
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
        <h3 className="text-base font-bold text-gray-900 mb-4 mt-0 flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-[#e03838]" />
          Récapitulatif du workflow complet
        </h3>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            { label: "Local", items: ["Créer le dossier", "Initialiser Git", "Créer README.md", "Premier commit"] },
            { label: "GitHub", items: ["Créer le dépôt distant", "Lier local ↔ distant"] },
            { label: "Publication", items: ["Push vers GitHub", "Projet en ligne !"] },
          ].map(({ label, items }) => (
            <div key={label} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 mt-0 text-sm">{label}</h4>
              <ul className="space-y-1 text-sm text-gray-700 m-0 p-0">
                {items.map((item) => (
                  <li key={item} className="m-0 flex items-center gap-1.5">
                    <span className="text-[#e03838] text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection delay={0.4}>
        <div className="p-5 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
          <h3 className="text-sm font-bold text-gray-900 mb-3 mt-0">Bonnes pratiques</h3>
          <ul className="space-y-2 text-gray-700 m-0 p-0">
            {[
              "Utilisez des noms de projet clairs et descriptifs (en minuscules, avec des tirets)",
              "Rédigez un README.md complet avec description, installation et utilisation",
              "Ajoutez un .gitignore pour exclure les fichiers inutiles (node_modules, .env, etc.)",
              "Choisissez une licence appropriée pour votre projet (MIT, GPL, Apache, etc.)",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 m-0">
                <span className="text-[#e03838] mt-0.5 flex-shrink-0">•</span>
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
