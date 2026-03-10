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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h1 className="font-[family-name:var(--font-syne)]">Branches et Fusion (Merging)</h1>

      <ContentSection delay={0.1}>
        <div className="flex items-start gap-3 mb-5">
          <Lightbulb className="h-5 w-5 text-[#e03838] flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2 mt-0">Qu'est-ce qu'une branche ?</h3>
            <p className="text-gray-700 leading-relaxed m-0">
              Les branches dans Git sont des <strong className="text-[#e03838]">copies isolées</strong> de votre code qui permettent de travailler sur des
              fonctionnalités ou corrections sans perturber la branche principale.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            { icon: "🔒", title: "Isolation", desc: "Développez et testez sans risquer d'introduire des erreurs dans le code stable" },
            { icon: "👥", title: "Collaboration", desc: "Travaillez en parallèle sur différentes parties du projet" },
            { icon: "📋", title: "Gestion des versions", desc: "Maintenez un historique clair des évolutions" },
            { icon: "🧪", title: "Expérimentation", desc: "Testez de nouvelles idées sans impact sur le projet principal" },
          ].map((item) => (
            <div key={item.title} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{item.icon}</span>
                <h4 className="font-semibold text-gray-900 text-sm mt-0 mb-0">{item.title}</h4>
              </div>
              <p className="text-gray-600 text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#e03838] rounded-lg">
            <GitBranch className="h-5 w-5 text-white" />
          </div>
          <h2 className="mt-0 mb-0">Création et navigation de branches</h2>
        </div>

        <div className="space-y-4">
          <div className="p-5 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
            <h4 className="font-semibold text-gray-900 mb-2 mt-0 flex items-center gap-2 text-sm">
              <GitBranch className="h-4 w-4 text-[#e03838]" />
              Créer une nouvelle branche
            </h4>
            <CodeBlock code="git branch [nom-branche]" />
            <p className="mt-3 text-gray-700 m-0 text-sm">
              Crée une nouvelle branche sans basculer dessus.
            </p>
            <CommandImage command="branch" />
          </div>

          <div className="p-5 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
            <h4 className="font-semibold text-gray-900 mb-2 mt-0 flex items-center gap-2 text-sm">
              <ArrowRight className="h-4 w-4 text-[#e03838]" />
              Changer de branche
            </h4>
            <CodeBlock code="git checkout [nom-branche]" />
            <p className="mt-3 text-gray-700 mb-3 text-sm">
              Bascule vers la branche spécifiée. <strong>Méthode classique.</strong>
            </p>

            <div className="mt-4 p-3 bg-white border border-red-100 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2 text-sm m-0">Méthode moderne (recommandée) :</p>
              <CodeBlock code="git switch [nom-branche]" />
              <p className="text-gray-700 text-sm mt-2 m-0">
                Plus explicite et intuitif que <code className="bg-red-100 px-1 rounded">checkout</code>
              </p>
              <CommandImage command="switch" />
            </div>
          </div>

          <div className="p-5 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
            <h4 className="font-semibold text-gray-900 mb-2 mt-0 flex items-center gap-2 text-sm">
              <span>⚡</span>
              Créer et basculer en une commande
            </h4>
            <CodeBlock code="git checkout -b [nom-branche]" />
            <p className="mt-3 text-gray-700 m-0 text-sm">
              Raccourci pratique : crée une nouvelle branche ET bascule dessus immédiatement.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.3}>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#e03838] rounded-lg">
            <Upload className="h-5 w-5 text-white" />
          </div>
          <h2 className="mt-0 mb-0">Pousser la branche sur GitHub</h2>
        </div>

        <div className="p-5 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
          <CodeBlock code="git push --set-upstream origin [nom-branche]" />
          <p className="mt-3 text-gray-700 m-0 text-sm">
            Envoie votre branche locale vers GitHub et configure le suivi automatique.
            Les prochains <code className="bg-red-100 px-2 py-0.5 rounded">git push</code> seront plus simples !
          </p>
          <CommandImage command="upstream" />

          <div className="mt-4 p-3 bg-white border border-red-100 rounded-lg">
            <p className="text-gray-900 text-sm m-0">
              <strong>Raccourci :</strong> Après la première fois, utilisez simplement <code className="bg-red-100 px-2 py-0.5 rounded">git push</code>
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.4}>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#e03838] rounded-lg">
            <GitMerge className="h-5 w-5 text-white" />
          </div>
          <h2 className="mt-0 mb-0">Fusionner des branches</h2>
        </div>

        <div className="p-5 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
          <h4 className="font-semibold text-gray-900 mb-3 mt-0 text-sm">Workflow de fusion</h4>

          <div className="space-y-3 mb-4">
            {[
              "Retournez sur la branche de destination (généralement main)",
              "Fusionnez la branche de fonctionnalité",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#e03838] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{i + 1}</div>
                <p className="text-gray-700 text-sm m-0">{text}</p>
              </div>
            ))}
          </div>

          <CodeBlock code={`git checkout main\ngit merge [nom-branche]`} />

          <p className="mt-3 text-gray-700 m-0 text-sm">
            Intègre les modifications de <code className="bg-red-100 px-2 py-0.5 rounded">[nom-branche]</code> dans <code className="bg-red-100 px-2 py-0.5 rounded">main</code>.
          </p>

          <CommandImage command="merge" />
        </div>
      </ContentSection>

      <ContentSection delay={0.5}>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-[#e03838] rounded-lg">
            <Trash2 className="h-5 w-5 text-white" />
          </div>
          <h2 className="mt-0 mb-0">Supprimer une branche</h2>
        </div>

        <div className="p-5 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
          <h4 className="font-semibold text-gray-900 mb-3 mt-0 text-sm">Nettoyage après fusion</h4>
          <CodeBlock code="git branch -d [nom-branche]" />
          <p className="mt-3 text-gray-700 m-0 text-sm">
            Supprime une branche locale une fois fusionnée. L'option <code className="bg-red-100 px-2 py-0.5 rounded">-d</code> est sécurisée :
            elle refuse de supprimer une branche non fusionnée.
          </p>
          <CommandImage command="branch-d" />

          <div className="mt-4 p-3 bg-white border border-red-100 rounded-lg">
            <p className="text-gray-900 text-sm m-0">
              <strong>Suppression forcée :</strong> Utilisez <code className="bg-red-100 px-2 py-0.5 rounded">-D</code> (majuscule) pour forcer la suppression même si non fusionnée. <strong>À utiliser avec précaution !</strong>
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.6}>
        <h3 className="text-base font-bold text-gray-900 mb-4 mt-0">Workflow typique avec les branches</h3>
        <div className="space-y-2">
          {[
            { code: "git checkout -b feature/nouvelle-fonctionnalite", desc: "Créer une branche de fonctionnalité" },
            { code: "git add . && git commit -m \"...\"", desc: "Travailler et commiter sur la branche" },
            { code: "git push -u origin feature/nouvelle-fonctionnalite", desc: "Pousser vers GitHub" },
            { code: "git checkout main && git merge feature/nouvelle-fonctionnalite", desc: "Fusionner dans main" },
            { code: "git branch -d feature/nouvelle-fonctionnalite", desc: "Supprimer la branche fusionnée" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-6 h-6 bg-[#e03838] rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</div>
              <div>
                <code className="bg-[#fef2f2] border border-red-100 px-2 py-1 rounded text-xs font-mono block mb-1">{item.code}</code>
                <p className="text-gray-600 text-xs m-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
