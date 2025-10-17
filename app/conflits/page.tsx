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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Gestion des conflits</h1>

      {/* Introduction */}
      <ContentSection delay={0.1} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-orange-600" />
          <h2 className="text-2xl font-bold text-gray-900">Comprendre les conflits Git</h2>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          Un conflit Git survient lorsque deux personnes modifient <strong>la même partie d'un même fichier</strong> et que Git ne peut pas fusionner automatiquement ces changements. C'est une situation normale dans le travail collaboratif !
        </p>

        <CommandImage command="conflit" />

        {/* Causes communes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <div className="glass-panel p-5 rounded-xl border border-orange-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-3">
              <GitMerge className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Merge de branches</h4>
                <p className="text-sm text-gray-600">Deux branches ont modifié les mêmes lignes de code</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-orange-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start gap-3">
              <FileWarning className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pull avec modifications locales</h4>
                <p className="text-sm text-gray-600">Vous avez modifié un fichier que quelqu'un d'autre a aussi changé</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Identifier les conflits */}
      <ContentSection delay={0.2} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <Search className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">1. Identifier les fichiers en conflit</h2>
        </div>

        <p className="mb-4">
          La première étape est d'identifier quels fichiers sont en conflit. Git vous l'indiquera clairement.
        </p>

        <CodeBlock
          code={`# Voir les fichiers en conflit
git status`}
        />

        <div className="glass-panel p-5 rounded-xl border border-blue-200/50 mt-4">
          <p className="text-sm text-gray-700 mb-2">
            <strong className="text-blue-700">💡 Résultat attendu :</strong>
          </p>
          <code className="text-xs text-gray-600 block whitespace-pre">
            {`both modified:   src/app.js
both modified:   README.md`}
          </code>
        </div>

        <div className="glass-panel p-5 rounded-xl border border-blue-200/50 mt-4">
          <p className="text-sm font-medium text-blue-700 mb-2">Comparer les différences</p>
          <CodeBlock
            code={`# Voir les différences dans les fichiers en conflit
git diff`}
          />
        </div>
      </ContentSection>

      {/* Ouvrir et examiner */}
      <ContentSection delay={0.3} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
        <div className="flex items-center gap-3 mb-4">
          <Edit3 className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">2. Ouvrir et examiner les conflits</h2>
        </div>

        <p className="mb-4">
          Git marque les conflits directement dans vos fichiers avec des marqueurs spéciaux :
        </p>

        <div className="glass-panel p-5 rounded-xl border border-purple-200/50 mb-4">
          <code className="text-sm text-gray-800 block whitespace-pre font-mono">
            {`<<<<<<< HEAD
Votre version du code (branche actuelle)
=======
La version distante du code (branche à fusionner)
>>>>>>> nom-de-la-branche`}
          </code>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="glass-panel p-5 rounded-xl border border-purple-200/50">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-purple-600" />
              Ouvrir dans VSCode
            </h4>
            <CodeBlock
              code={`# Ouvrir le fichier en conflit
code [nom_du_fichier]`}
            />
            <CommandImage command="code" />
            <CommandImage command="vscode" />
          </div>

          <div className="glass-panel p-5 rounded-xl border border-purple-200/50">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <GitMerge className="w-5 h-5 text-purple-600" />
              Outil de merge
            </h4>
            <CodeBlock
              code={`# Lancer l'outil de merge
git mergetool`}
            />
            <CommandImage command="mergetool" />
          </div>
        </div>
      </ContentSection>

      {/* Résoudre le conflit */}
      <ContentSection delay={0.4} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <Edit3 className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">3. Résoudre le conflit</h2>
        </div>

        <p className="mb-6">
          Vous avez <strong>trois options</strong> pour résoudre un conflit :
        </p>

        <div className="space-y-4">
          <div className="glass-panel p-5 rounded-xl border border-green-200/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 font-bold">1</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Accepter la version locale (HEAD)</h4>
                <p className="text-sm text-gray-600 mb-3">Garder votre version et rejeter les changements distants</p>
                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                  Supprimez les marqueurs de conflit et gardez uniquement la partie entre <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> et <code>=======</code>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-green-200/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 font-bold">2</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Accepter la version distante</h4>
                <p className="text-sm text-gray-600 mb-3">Rejeter vos changements et garder la version distante</p>
                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                  Supprimez les marqueurs de conflit et gardez uniquement la partie entre <code>=======</code> et <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-green-200/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 font-bold">3</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Fusionner les deux versions</h4>
                <p className="text-sm text-gray-600 mb-3">Combiner manuellement les deux changements</p>
                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                  Supprimez les marqueurs de conflit et écrivez un code qui intègre les deux modifications de manière cohérente
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Valider la résolution */}
      <ContentSection delay={0.5} className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200">
        <div className="flex items-center gap-3 mb-4">
          <Check className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">4. Valider la résolution</h2>
        </div>

        <p className="mb-4">
          Une fois tous les conflits résolus et les marqueurs supprimés, validez la résolution :
        </p>

        <CodeBlock
          code={`# Ajouter les fichiers résolus
git add [nom_du_fichier]

# Commiter la résolution
git commit -m "Résolution du conflit"`}
        />

        <CommandImage command="resolve" />

        <div className="glass-panel p-5 rounded-xl border border-indigo-200/50 mt-6 bg-gradient-to-br from-indigo-50/50 to-blue-50/50">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-indigo-700 mb-2">Astuce : Vérification</p>
              <p className="text-sm text-gray-700">
                Après avoir résolu les conflits, testez toujours votre code pour vous assurer qu'il fonctionne correctement. Les conflits résolus automatiquement ne garantissent pas que la logique du code est intacte !
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Workflow complet */}
      <ContentSection delay={0.6} className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
        <div className="flex items-center gap-3 mb-4">
          <GitMerge className="w-6 h-6 text-yellow-600" />
          <h2 className="text-2xl font-bold text-gray-900">Workflow complet de résolution</h2>
        </div>

        <div className="space-y-4">
          {[
            { step: 1, title: "Identifier", desc: "git status pour voir les fichiers en conflit", color: "blue" },
            { step: 2, title: "Examiner", desc: "Ouvrir les fichiers et analyser les marqueurs", color: "purple" },
            { step: 3, title: "Choisir", desc: "Décider quelle version garder ou fusionner", color: "green" },
            { step: 4, title: "Nettoyer", desc: "Supprimer tous les marqueurs de conflit", color: "orange" },
            { step: 5, title: "Valider", desc: "git add + git commit", color: "indigo" },
            { step: 6, title: "Tester", desc: "Vérifier que le code fonctionne correctement", color: "red" },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-panel p-4 rounded-xl border border-yellow-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full bg-${item.color}-100 flex items-center justify-center flex-shrink-0 font-bold text-${item.color}-700`}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel p-5 rounded-xl border border-yellow-200/50 mt-6 bg-gradient-to-br from-yellow-50/50 to-orange-50/50">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-yellow-700 mb-2">Important</p>
              <p className="text-sm text-gray-700">
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

