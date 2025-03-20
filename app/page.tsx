"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-5xl font-bold text-center mb-8" style={{ color: "#F24141" }}>
          Formation Complète Git &amp; GitHub
        </h1>

        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-6"
          >
            <Image src="/images/github.png" alt="GitHub" width={64} height={64} />
            <Image src="/images/git.png" alt="Git" width={64} height={64} />
            <Image src="/images/gitlab.png" alt="GitLab" width={64} height={64} />
          </motion.div>
        </div>

        <p className="text-xl text-center mb-12">
          Bienvenue dans cette formation complète sur Git et GitHub. Parcourez les différentes sections pour maîtriser
          ces outils essentiels au développement collaboratif.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Introduction", path: "/introduction", description: "Découvrez Git, GitHub et GitLab" },
            { title: "Bases de Git", path: "/bases", description: "Commandes fondamentales et initialisation" },
            {
              title: "Création projet",
              path: "/creation-projet",
              description: "Création d'un projet sur Git et GitHub",
            },
            { title: "Branches et Fusion", path: "/branches", description: "Création et fusion de branches" },
            { title: "Gestion des conflits", path: "/conflits", description: "Résoudre les conflits de fusion" },
            { title: "Pull Requests", path: "/pull-request", description: "Collaboration et revue de code" },
            { title: "Bonnes pratiques", path: "/bonnes-pratiques", description: "Conseils pour le travail en équipe" },
            { title: "Outils recommandés", path: "/outils", description: "Extensions et outils utiles" },
            { title: "Aller plus loin", path: "/aller-plus-loin", description: "Fonctionnalités avancées" },
            { title: "Configuration clé SSH", path: "/cle-ssh", description: "Authentification sécurisée avec GitHub" },
          ].map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link href={item.path} className="block group-hover:text-white">
                <div
                  className="group bg-white border-2 rounded-xl p-6 h-full transition-all duration-300 hover:bg-[#F24141] hover:shadow-lg"
                  style={{ borderColor: "#F24141" }}
                >
                  <h2
                    className="text-2xl text-[#F24141] font-semibold mb-2 transition-colors duration-300 group-hover:text-white"
                  >
                    {item.title}
                  </h2>
                  <p className="text-gray-700 transition-colors duration-300 group-hover:text-white">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

