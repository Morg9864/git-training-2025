"use client"

import { motion } from "framer-motion"
import CodeBlock from "@/components/code-block"
import ContentSection from "@/components/content-section"
import { AlertTriangle, Search, Edit3, Check, FileWarning, GitMerge, Lightbulb } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import CommandImage from "@/components/command-image"

export default function Conflits() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h1 className="font-[family-name:var(--font-syne)]">Gestion des conflits</h1>

      {/* Introduction */}
      <ContentSection delay={0.1}>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-[#e03838]" />
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Comprendre les conflits Git</h2>
        </div>

        <p className="text-base leading-relaxed mb-5 m-0">
          Un conflit Git survient lorsque deux personnes modifient <strong>la même partie d'un même fichier</strong> et que Git ne peut pas fusionner automatiquement ces changements. C'est une situation normale dans le travail collaboratif !
        </p>

        <CommandImage command="conflit" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3">
              <GitMerge className="w-4 h-4 text-[#e03838] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">Merge de branches</h4>
                <p className="text-sm text-gray-600 m-0">Deux branches ont modifié les mêmes lignes de code</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3">
              <FileWarning className="w-4 h-4 text-[#e03838] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">Pull avec modifications locales</h4>
                <p className="text-sm text-gray-600 m-0">Vous avez modifié un fichier que quelqu'un d'autre a aussi changé</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Identifier les conflits */}
      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Search className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">1. Identifier les fichiers en conflit</h2>
        </div>

        <p className="mb-4 text-gray-700 m-0">
          La première étape est d'identifier quels fichiers sont en conflit. Git vous l'indiquera clairement.
        </p>

        <CodeBlock
          code={`# Voir les fichiers en conflit
git status`}
        />

        <div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100 mt-4">
          <p className="text-sm text-gray-700 mb-2 m-0">
            <strong className="text-[#e03838]">Résultat attendu :</strong>
          </p>
          <code className="text-xs text-gray-600 block whitespace-pre font-mono">
            {`both modified:   src/app.js\nboth modified:   README.md`}
          </code>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-3">
          <p className="text-sm font-medium text-gray-700 mb-2 m-0">Comparer les différences</p>
          <CodeBlock
            code={`# Voir les différences dans les fichiers en conflit
git diff`}
          />
        </div>
      </ContentSection>

      {/* Ouvrir et examiner */}
      <ContentSection delay={0.3}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Edit3 className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">2. Ouvrir et examiner les conflits</h2>
        </div>

        <p className="mb-4 text-gray-700 m-0">
          Git marque les conflits directement dans vos fichiers avec des marqueurs spéciaux :
        </p>

        <div className="p-4 bg-gray-900 rounded-lg border border-gray-700 mb-4">
          <code className="text-sm text-gray-100 block whitespace-pre font-mono">
            {`<<<<<<< HEAD\nVotre version du code (branche actuelle)\n=======\nLa version distante du code (branche à fusionner)\n>>>>>>> nom-de-la-branche`}
          </code>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3 mt-0 flex items-center gap-2 text-sm">
              <FileWarning className="w-4 h-4 text-[#e03838]" />
              Ouvrir dans VSCode
            </h4>
            <CodeBlock
              code={`# Ouvrir le fichier en conflit\ncode [nom_du_fichier]`}
            />
            <CommandImage command="code" />
            <CommandImage command="vscode" />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3 mt-0 flex items-center gap-2 text-sm">
              <GitMerge className="w-4 h-4 text-[#e03838]" />
              Outil de merge
            </h4>
            <CodeBlock
              code={`# Lancer l'outil de merge\ngit mergetool`}
            />
            <CommandImage command="mergetool" />
          </div>
        </div>
      </ContentSection>

      {/* Résoudre le conflit */}
      <ContentSection delay={0.4}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Edit3 className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">3. Résoudre le conflit</h2>
        </div>

        <p className="mb-5 text-gray-700 m-0">
          Vous avez <strong>trois options</strong> pour résoudre un conflit :
        </p>

        <div className="space-y-3">
          {[
            {
              title: "Accepter la version locale (HEAD)",
              desc: "Garder votre version et rejeter les changements distants",
              detail: "Supprimez les marqueurs de conflit et gardez uniquement la partie entre <<<<<< HEAD et ======="
            },
            {
              title: "Accepter la version distante",
              desc: "Rejeter vos changements et garder la version distante",
              detail: "Supprimez les marqueurs de conflit et gardez uniquement la partie entre ======= et >>>>>>>"
            },
            {
              title: "Fusionner les deux versions",
              desc: "Combiner manuellement les deux changements",
              detail: "Supprimez les marqueurs de conflit et écrivez un code qui intègre les deux modifications de manière cohérente"
            },
          ].map((option, i) => (
            <div key={i} className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#e03838] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">{option.title}</h4>
                  <p className="text-sm text-gray-600 mb-2 m-0">{option.desc}</p>
                  <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded border border-gray-200">
                    {option.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Valider la résolution */}
      <ContentSection delay={0.5}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <Check className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">4. Valider la résolution</h2>
        </div>

        <p className="mb-4 text-gray-700 m-0">
          Une fois tous les conflits résolus et les marqueurs supprimés, validez la résolution :
        </p>

        <CodeBlock
          code={`# Ajouter les fichiers résolus\ngit add [nom_du_fichier]\n\n# Commiter la résolution\ngit commit -m "Résolution du conflit"`}
        />

        <CommandImage command="resolve" />

        <div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100 mt-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#e03838] mb-1 m-0">Astuce : Vérification</p>
              <p className="text-sm text-gray-700 m-0">
                Après avoir résolu les conflits, testez toujours votre code pour vous assurer qu'il fonctionne correctement. Les conflits résolus automatiquement ne garantissent pas que la logique du code est intacte !
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Workflow complet */}
      <ContentSection delay={0.6}>
        <div className="flex items-center gap-3 mb-4">
          <GitMerge className="w-5 h-5 text-[#e03838]" />
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Workflow complet de résolution</h2>
        </div>

        <div className="space-y-2">
          {[
            { step: 1, title: "Identifier", desc: "git status pour voir les fichiers en conflit" },
            { step: 2, title: "Examiner", desc: "Ouvrir les fichiers et analyser les marqueurs" },
            { step: 3, title: "Choisir", desc: "Décider quelle version garder ou fusionner" },
            { step: 4, title: "Nettoyer", desc: "Supprimer tous les marqueurs de conflit" },
            { step: 5, title: "Valider", desc: "git add + git commit" },
            { step: 6, title: "Tester", desc: "Vérifier que le code fonctionne correctement" },
          ].map((item) => (
            <div
              key={item.step}
              className="p-3.5 bg-white rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e03838] flex items-center justify-center flex-shrink-0 font-bold text-white text-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm m-0 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-gray-600 m-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100 mt-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#e03838] mb-1 m-0">Important</p>
              <p className="text-sm text-gray-700 m-0">
                Ne paniquez pas face à un conflit ! C'est une situation normale. Prenez le temps de bien comprendre les deux versions avant de décider comment les fusionner.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
