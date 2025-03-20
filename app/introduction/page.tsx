"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"

export default function Introduction() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>1. Introduction à Git, GitHub et GitLab</h1>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="flex items-center">
            <Image
              src="/images/git.png"
              alt="Git"
              width={24}
              height={24}
              className="mr-2"
            />{" "}
            Git
          </h3>
          <p>
            <strong>Système de contrôle de version décentralisé</strong> : créé par Linus Torvalds en 2005, Git permet de
            suivre l’historique des modifications d’un projet, de gérer différentes branches et de faciliter la
            collaboration entre développeurs.
          </p>
          <p>
            <strong>Gestion des modifications</strong> : chaque commit sauvegarde l’état du projet, ce qui rend le
            retour en arrière ou l’exploration d’historiques très simples.
          </p>
          <p>
            <strong>Collaboration simplifiée</strong> : grâce à son mode distribué, tout le monde peut travailler en
            parallèle sur le même projet, puis fusionner ses changements sans perdre l’historique.
          </p>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="flex items-center">
            <Image
              src="/images/github.png"
              alt="GitHub"
              width={24}
              height={24}
              className="mr-2"
            />{" "}
            GitHub
          </h3>
          <p>
            <strong>Plateforme d’hébergement et de collaboration</strong> : GitHub repose sur Git et propose une
            interface web facilitant le travail collaboratif.
          </p>
          <p>
            <strong>Gestion de projets et de versions</strong> : en plus de stocker le code, GitHub inclut des outils de
            planification (projets, tableaux Kanban), de suivi des tâches (issues) et de revue de code (pull requests).
          </p>
          <p>
            <strong>Hébergement public et privé</strong> : il est possible de créer des dépôts publics (ouverts à tous)
            ou privés (accessibles à une équipe restreinte).
          </p>
          <p>
            <strong>Intégration continue</strong> : grâce à GitHub Actions, vous pouvez automatiser les tests et le
            déploiement de votre code.
          </p>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="flex items-center">
            <Image
              src="/images/gitlab.png"
              alt="GitLab"
              width={24}
              height={24}
              className="mr-2"
            />{" "}
            GitLab
          </h3>
          <p>
            <strong>Fonctionnalités similaires à GitHub</strong> : GitLab propose également l’hébergement de dépôts Git,
            la gestion de projets, les merge requests, etc.
          </p>
          <p>
            <strong>Plus personnalisable</strong> : GitLab offre des options d’auto-hébergement et de configuration
            avancée, ce qui peut être intéressant pour des équipes ayant besoin d’un contrôle total sur leur
            infrastructure.
          </p>
          <p>
            <strong>Intégration DevOps</strong> : GitLab inclut nativement des outils de CI/CD (intégration et
            déploiement continus), de gestion de conteneurs (Registry) et de planification de projets (issues,
            milestones).
          </p>
          <p>
            <strong>GitLab ULiège</strong> : l’Université de Liège propose sa propre instance GitLab accessible à l’adresse{" "}
            <a
              href="https://gitlab.uliege.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F24141] hover:underline"
            >
              gitlab.uliege.be
            </a>. Elle offre les mêmes avantages que GitLab.com tout en étant hébergée localement pour mieux répondre aux
            besoins spécifiques de la communauté universitaire.
          </p>
        </motion.div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3>Pourquoi utiliser Git ?</h3>
          <ul>
            <li>Suivi précis des modifications</li>
            <li>Collaboration simplifiée</li>
            <li>Gestion efficace des versions et des branches</li>
            <li>Sécurisation et sauvegarde du code</li>
            <li>Intégration continue et déploiement</li>
          </ul>
        </motion.div>
      </section>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
