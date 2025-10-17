"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import CodeBlock from "@/components/code-block"
import { GitBranch, GitMerge, ArrowRight, Upload, Trash2, Lightbulb } from "lucide-react"
import PageNavigation from "@/components/page-navigation"
import CommandImage from "@/components/command-image"
import ContentSection from "@/components/content-section"

export default function Branches() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Branches et Fusion (Merging)</h1>

      <ContentSection delay={0.1}>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Qu'est-ce qu'une branche ?</h3>
              <p className="text-blue-800 leading-relaxed">
                Les branches dans Git sont des <strong className="text-gradient">copies isolées</strong> de votre code qui permettent de travailler sur des
                fonctionnalités ou corrections sans perturber la branche principale.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-xl p-5 flex items-center justify-center">
                  <span className="text-white font-bold">🔒</span>
                </div>
                <h4 className="font-semibold text-blue-900">Isolation</h4>
              </div>
              <p className="text-blue-800 text-sm">Développez et testez sans risquer d'introduire des erreurs dans le code stable</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-500 p-5 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">👥</span>
                </div>
                <h4 className="font-semibold text-blue-900">Collaboration</h4>
              </div>
              <p className="text-blue-800 text-sm">Travaillez en parallèle sur différentes parties du projet</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-500 rounded-xl p-5 flex items-center justify-center">
                  <span className="text-white font-bold">📋</span>
                </div>
                <h4 className="font-semibold text-blue-900">Gestion des versions</h4>
              </div>
              <p className="text-blue-800 text-sm">Maintenez un historique clair des évolutions</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-orange-500 rounded-xl p-5 flex items-center justify-center">
                  <span className="text-white font-bold">🧪</span>
                </div>
                <h4 className="font-semibold text-blue-900">Expérimentation</h4>
              </div>
              <p className="text-blue-800 text-sm">Testez de nouvelles idées sans impact sur le projet principal</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
            <GitBranch className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Création et navigation de branches</h2>
        </div>

        <div className="space-y-6">
          {/* Créer une branche */}
          <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900 mb-3 text-lg flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Créer une nouvelle branche
            </h4>
            <CodeBlock code="git branch [nom-branche]" />
            <p className="mt-3 text-green-800">
              Crée une nouvelle branche sans basculer dessus.
            </p>
            <CommandImage command="branch" />
          </div>

          {/* Changer de branche */}
          <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 mb-3 text-lg flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Changer de branche
            </h4>
            <CodeBlock code="git checkout [nom-branche]" />
            <p className="mt-3 text-blue-800 mb-3">
              Bascule vers la branche spécifiée. <strong>Méthode classique.</strong>
            </p>

            <div className="mt-4 p-3 bg-cyan-100 rounded-lg">
              <p className="text-cyan-900 font-semibold mb-2">✨ Méthode moderne (recommandée) :</p>
              <CodeBlock code="git switch [nom-branche]" />
              <p className="text-cyan-800 text-sm mt-2">
                Plus explicite et intuitif que <code className="bg-cyan-200 px-1 rounded">checkout</code>
              </p>
              <CommandImage command="switch" />
            </div>
          </div>

          {/* Créer et basculer */}
          <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-900 mb-3 text-lg flex items-center gap-2">
              <span className="text-xl">⚡</span>
              Créer et basculer en une commande
            </h4>
            <CodeBlock code="git checkout -b [nom-branche]" />
            <p className="mt-3 text-purple-800">
              Raccourci pratique : crée une nouvelle branche ET bascule dessus immédiatement.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.3}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
            <Upload className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Pousser la branche sur GitHub</h2>
        </div>

        <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-l-4 border-orange-500">
          <CodeBlock code="git push --set-upstream origin [nom-branche]" />
          <p className="mt-3 text-orange-800">
            Envoie votre branche locale vers GitHub et configure le suivi automatique.
            Les prochains <code className="bg-orange-100 px-2 py-0.5 rounded">git push</code> seront plus simples !
          </p>
          <CommandImage command="upstream" />

          <div className="mt-4 p-3 bg-orange-100 rounded-lg">
            <p className="text-orange-900 text-sm">
              💡 <strong>Raccourci :</strong> Après la première fois, utilisez simplement <code className="bg-orange-200 px-2 py-0.5 rounded">git push</code>
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.4}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
            <GitMerge className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Fusionner des branches</h2>
        </div>

        <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-l-4 border-indigo-500">
          <h4 className="font-semibold text-indigo-900 mb-3 text-lg">Workflow de fusion</h4>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1">
                <p className="text-indigo-800 mb-2">Retournez sur la branche de destination (généralement <code className="bg-indigo-100 px-2 py-0.5 rounded">main</code>)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1">
                <p className="text-indigo-800 mb-2">Fusionnez la branche de fonctionnalité</p>
              </div>
            </div>
          </div>

          <CodeBlock code={`git checkout main\ngit merge [nom-branche]`} />

          <p className="mt-3 text-indigo-800">
            Intègre les modifications de <code className="bg-indigo-100 px-2 py-0.5 rounded">[nom-branche]</code> dans <code className="bg-indigo-100 px-2 py-0.5 rounded">main</code>.
          </p>

          <CommandImage command="merge" />
        </div>
      </ContentSection>

      <ContentSection delay={0.5}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
            <Trash2 className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Supprimer une branche</h2>
        </div>

        <div className="p-5 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl border-l-4 border-red-500">
          <h4 className="font-semibold text-red-900 mb-3 text-lg">Nettoyage après fusion</h4>
          <CodeBlock code="git branch -d [nom-branche]" />
          <p className="mt-3 text-red-800">
            Supprime une branche locale une fois fusionnée. L'option <code className="bg-red-100 px-2 py-0.5 rounded">-d</code> est sécurisée :
            elle refuse de supprimer une branche non fusionnée.
          </p>
          <CommandImage command="branch-d" />

          <div className="mt-4 p-3 bg-red-100 rounded-lg">
            <p className="text-red-900 text-sm">
              ⚠️ <strong>Suppression forcée :</strong> Utilisez <code className="bg-red-200 px-2 py-0.5 rounded">-D</code> (majuscule) pour forcer la suppression même si non fusionnée. <strong>À utiliser avec précaution !</strong>
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.6}>
        <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-300">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Workflow typique avec les branches
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <code className="bg-yellow-100 px-2 py-1 rounded text-sm">git checkout -b feature/nouvelle-fonctionnalite</code>
                <p className="text-yellow-800 text-sm mt-1">Créer une branche de fonctionnalité</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <code className="bg-yellow-100 px-2 py-1 rounded text-sm">git add . && git commit -m "..."</code>
                <p className="text-yellow-800 text-sm mt-1">Travailler et commiter sur la branche</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <code className="bg-yellow-100 px-2 py-1 rounded text-sm">git push -u origin feature/nouvelle-fonctionnalite</code>
                <p className="text-yellow-800 text-sm mt-1">Pousser vers GitHub</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
              <div>
                <code className="bg-yellow-100 px-2 py-1 rounded text-sm">git checkout main && git merge feature/nouvelle-fonctionnalite</code>
                <p className="text-yellow-800 text-sm mt-1">Fusionner dans main</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
              <div>
                <code className="bg-yellow-100 px-2 py-1 rounded text-sm">git branch -d feature/nouvelle-fonctionnalite</code>
                <p className="text-yellow-800 text-sm mt-1">Supprimer la branche fusionnée</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}

