"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gradient">
          Formation Complète Git &amp; GitHub
        </h1>

        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-8 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <Image src="/images/github.png" alt="GitHub" width={64} height={64} className="relative" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <Image src="/images/git.png" alt="Git" width={64} height={64} className="relative" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <Image src="/images/gitlab.png" alt="GitLab" width={64} height={64} className="relative" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 mb-12 text-center"
        >
          <p className="text-xl text-gray-700 leading-relaxed">
            Bienvenue dans cette formation complète sur Git et GitHub. Parcourez les différentes sections pour maîtriser
            ces outils essentiels au développement collaboratif. 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Introduction", path: "/introduction", description: "Découvrez Git, GitHub et GitLab", emoji: "📚" },
            { title: "Bases de Git", path: "/bases", description: "Commandes fondamentales et initialisation", emoji: "🎯" },
            {
              title: "Création projet",
              path: "/creation-projet",
              description: "Création d'un projet sur Git et GitHub",
              emoji: "✨"
            },
            { title: "Branches et Fusion", path: "/branches", description: "Création et fusion de branches", emoji: "🌿" },
            { title: "Gestion des conflits", path: "/conflits", description: "Résoudre les conflits de fusion", emoji: "⚔️" },
            { title: "Pull Requests", path: "/pull-request", description: "Collaboration et revue de code", emoji: "🔄" },
            { title: "Bonnes pratiques", path: "/bonnes-pratiques", description: "Conseils pour le travail en équipe", emoji: "✅" },
            { title: "Outils recommandés", path: "/outils", description: "Extensions et outils utiles", emoji: "🛠️" },
            { title: "Glossaire", path: "/glossaire", description: "Référence complète des commandes Git", emoji: "📖" },
            { title: "Configuration clé SSH", path: "/cle-ssh", description: "Authentification sécurisée avec GitHub", emoji: "🔐" },
          ].map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <Link href={item.path} className="block h-full">
                <div className="group relative h-full bg-white/80 backdrop-blur-sm border-2 border-transparent rounded-2xl p-6 transition-all duration-300 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                      <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

