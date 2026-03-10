"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const chapters = [
  { title: "Introduction", path: "/introduction", description: "Découvrez Git, GitHub et GitLab", index: "01" },
  { title: "Bases de Git", path: "/bases", description: "Commandes fondamentales et initialisation", index: "02" },
  { title: "Création projet", path: "/creation-projet", description: "Créer et publier votre premier projet", index: "03" },
  { title: "Branches et Fusion", path: "/branches", description: "Créer et fusionner des branches", index: "04" },
  { title: "Gestion des conflits", path: "/conflits", description: "Résoudre les conflits de fusion", index: "05" },
  { title: "Pull Requests", path: "/pull-request", description: "Collaboration et revue de code", index: "06" },
  { title: "Bonnes pratiques", path: "/bonnes-pratiques", description: "Conseils pour le travail en équipe", index: "07" },
  { title: "Outils recommandés", path: "/outils", description: "Extensions et outils utiles", index: "08" },
  { title: "Glossaire", path: "/glossaire", description: "Référence complète des commandes Git", index: "09" },
  { title: "Configuration clé SSH", path: "/cle-ssh", description: "Authentification sécurisée avec GitHub", index: "10" },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

        {/* Hero */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-0.5 bg-[#e03838]" />
            <span className="text-xs font-bold text-[#e03838] tracking-widest uppercase">N-HiTec</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-syne)] font-extrabold text-gray-900 mb-6 leading-[1.05] tracking-tight">
            Formation<br />Git & GitHub
          </h1>

          <div className="flex gap-5 items-center mb-8">
            <motion.div whileHover={{ scale: 1.08, rotate: -3 }} transition={{ type: "spring", stiffness: 400 }}>
              <Image src="/images/github.png" alt="GitHub" width={48} height={48} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.08, rotate: 3 }} transition={{ type: "spring", stiffness: 400 }}>
              <Image src="/images/git.png" alt="Git" width={48} height={48} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.08, rotate: -3 }} transition={{ type: "spring", stiffness: 400 }}>
              <Image src="/images/gitlab.png" alt="GitLab" width={48} height={48} />
            </motion.div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl border-l-4 border-[#e03838] pl-5">
            Une formation complète sur Git et GitHub, des bases aux bonnes pratiques. Parcourez les chapitres dans l'ordre ou consultez le glossaire pour référence rapide.
          </p>
        </div>

        {/* Chapters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {chapters.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
            >
              <Link href={item.path} className="block h-full">
                <div className="group h-full border border-gray-200 rounded-xl p-5 bg-white hover:border-[#e03838] hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1.5">{item.index}</p>
                      <h2 className="text-base font-bold text-gray-900 group-hover:text-[#e03838] transition-colors duration-200 mb-1 mt-0">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed m-0">{item.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#e03838] flex-shrink-0 mt-1 transition-all duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
