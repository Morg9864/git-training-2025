"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import CodeBlock from "@/components/code-block"
import { GitBranch, GitMerge } from "lucide-react"
import PageNavigation from "@/components/page-navigation"
import CommandImage from "@/components/command-image"

export default function Branches() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>4. Branches et Fusion (Merging)</h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="bg-gray-50 border-l-4 border-[#F24141] p-4 mb-8 rounded"
      >
        <p className="text-lg">
          Les branches dans Git sont des copies isolées de votre code qui permettent de travailler sur des
          fonctionnalités ou corrections sans perturber la branche principale. Elles offrent plusieurs avantages :
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start">
            <span className="text-[#F24141] mr-2">•</span>
            <span>
              <strong>Isolation</strong> : Développez et testez sans risquer d'introduire des erreurs dans le code
              stable
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#F24141] mr-2">•</span>
            <span>
              <strong>Collaboration</strong> : Travaillez en parallèle sur différentes parties du projet
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#F24141] mr-2">•</span>
            <span>
              <strong>Gestion des versions</strong> : Maintenez un historique clair des évolutions
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#F24141] mr-2">•</span>
            <span>
              <strong>Expérimentation</strong> : Testez de nouvelles idées sans impact sur le projet principal
            </span>
          </li>
        </ul>
      </motion.div>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center">
            <GitBranch className="mr-2 text-[#8C2626]" /> Création et navigation de branches
          </h3>
          <CodeBlock
            code={`git branch [nom-branche] # Crée une nouvelle branche
git checkout [nom-branche] # Change vers la branche spécifiée
git checkout -b [nom-branche] # Crée et bascule sur une nouvelle branche`}
          />
          <CommandImage command="branch" />

          <CodeBlock
            code={`git switch [nom-branche] # Change vers la branche spécifiée`}
          />
          <CommandImage command="switch" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="flex items-center">
            <GitBranch className="mr-2 text-[#8C2626]" /> Pousser la branche sur GitHub
          </h3>
          <CodeBlock
            code={`git push --set-upstream origin [nom-branche]`}
          />

          <CommandImage command="upstream" />
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
            <GitMerge className="mr-2 text-[#8C2626]" /> Fusionner des branches
          </h3>
          <CodeBlock
            code={`git checkout main
git merge [nom-branche]`}
          />

          <CommandImage command="merge" />
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3>Supprimer une branche</h3>
          <CodeBlock code="git branch -d [nom-branche]" />

          <CommandImage command="branch-d" />
        </motion.div>
      </section>

      {/* Navigation entre les pages */}
      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}

