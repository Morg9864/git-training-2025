"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Structure des pages pour la navigation
export const pageStructure = [
  { path: "/", label: "Accueil" },
  { path: "/introduction", label: "1. Introduction" },
  { path: "/bases", label: "2. Bases de Git" },
  { path: "/creation-projet", label: "3. Création Projet" },
  { path: "/branches", label: "4. Branches et Fusion" },
  { path: "/conflits", label: "5. Gestion des conflits" },
  { path: "/pull-request", label: "6. Pull Requests" },
  { path: "/bonnes-pratiques", label: "7. Bonnes pratiques" },
  { path: "/outils", label: "8. Outils recommandés" },
  { path: "/glossaire", label: "9. Glossaire" },
  { path: "/cle-ssh", label: "Configuration clé SSH" },
]

interface PageNavigationProps {
  currentPath: string
}

export default function PageNavigation({ currentPath }: PageNavigationProps) {
  const currentIndex = pageStructure.findIndex((page) => page.path === currentPath)

  const prevPage = currentIndex > 0 ? pageStructure[currentIndex - 1] : null
  const nextPage = currentIndex < pageStructure.length - 1 ? pageStructure[currentIndex + 1] : null

  return (
    <motion.div
      className="mt-12 pt-8 border-t border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex justify-between items-center">
        {prevPage ? (
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link href={prevPage.path} className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-white group-hover:bg-[#e03838] group-hover:border-[#e03838] transition-all duration-200">
                <ChevronLeft className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Précédent</p>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#e03838] transition-colors duration-200">
                  {prevPage.label}
                </p>
              </div>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}

        {nextPage ? (
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link href={nextPage.path} className="flex items-center gap-3 group text-right">
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Suivant</p>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-[#e03838] transition-colors duration-200">
                  {nextPage.label}
                </p>
              </div>
              <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 bg-white group-hover:bg-[#e03838] group-hover:border-[#e03838] transition-all duration-200">
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-200" />
              </div>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}
      </div>
    </motion.div>
  )
}
