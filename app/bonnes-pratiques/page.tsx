"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"

export default function BonnesPratiques() {
  const pathname = usePathname()

  const practices = [
    "Utiliser une branche par fonctionnalité (`feature branches`)",
    "Utiliser des pull requests pour la revue de code",
    "Écrire des messages de commit détaillés",
    "Documenter le code et les décisions techniques",
    "Garder la branche `main` propre et prête à être déployée",
    "Effectuer des pulls réguliers pour rester synchronisé",
    "Communiquer fréquemment et clairement",
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>6. Bonnes pratiques et conseils en équipe</h1>

      <div className="grid gap-6 mt-8">
        {practices.map((practice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#F24141]"
          >
            <CheckCircle className="text-[#F24141] mr-3 mt-1 flex-shrink-0" />
            <p className="m-0">{practice}</p>
          </motion.div>
        ))}
      </div>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}

