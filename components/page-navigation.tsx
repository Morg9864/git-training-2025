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
  { path: "/aller-plus-loin", label: "9. Aller plus loin" },
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
      className="mt-16 pt-8 border-t border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex justify-between items-center">
        {prevPage ? (
          <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
            <Link href={prevPage.path} className="flex items-center group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#F24141] transition-colors duration-300">
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-500">Précédent</p>
                <p className="font-medium text-[#8C2626] group-hover:text-[#F24141] transition-colors duration-300">
                  {prevPage.label}
                </p>
              </div>
            </Link>
          </motion.div>
        ) : (
          <div></div>
        )}

        {nextPage ? (
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <Link href={nextPage.path} className="flex items-center group text-right">
              <div className="mr-3">
                <p className="text-sm text-gray-500">Suivant</p>
                <p className="font-medium text-[#8C2626] group-hover:text-[#F24141] transition-colors duration-300">
                  {nextPage.label}
                </p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#F24141] transition-colors duration-300">
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
            </Link>
          </motion.div>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  )
}

