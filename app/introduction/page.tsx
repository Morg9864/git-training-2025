"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import ContentSection from "@/components/content-section"

export default function Introduction() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Introduction à Git, GitHub et GitLab</h1>

      <ContentSection delay={0.1}>
        <div className="text-center mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            Découvrez les outils essentiels du développement moderne qui révolutionnent
            la collaboration et la gestion de code ! 🚀
          </p>
        </div>
      </ContentSection>

      <ContentSection delay={0.2}>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-600 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
            <div className="relative p-3 bg-gradient-to-br from-red-300 to-orange-300 rounded-2xl">
              <Image
                src="/images/git.png"
                alt="Git"
                width={48}
                height={48}
                className="relative"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Git</h2>
            <p className="text-gray-600">Système de contrôle de version décentralisé</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500">
            <div className="flex-shrink-0 mt-1">
              <div className="p-2 bg-red-500 rounded-lg">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-red-900 mb-1">Système de contrôle de version décentralisé</h4>
              <p className="text-red-800">
                Créé par <strong className="text-gradient">Linus Torvalds en 2005</strong>, Git permet de suivre l'historique
                des modifications d'un projet, de gérer différentes branches et de faciliter la collaboration entre développeurs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
            <div className="flex-shrink-0 mt-1">
              <div className="p-2 bg-blue-500 rounded-lg">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Gestion des modifications</h4>
              <p className="text-blue-800">
                Chaque <strong className="text-gradient">commit</strong> sauvegarde l'état du projet, ce qui rend le retour en arrière
                ou l'exploration d'historiques très simples et sûrs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
            <div className="flex-shrink-0 mt-1">
              <div className="p-2 bg-green-500 rounded-lg">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-1">Collaboration simplifiée</h4>
              <p className="text-green-800">
                Grâce à son <strong className="text-gradient">mode distribué</strong>, tout le monde peut travailler en parallèle
                sur le même projet, puis fusionner ses changements sans perdre l'historique.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.3}>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-600 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
            <div className="relative p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl">
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={48}
                height={48}
                className="relative"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">GitHub</h2>
            <p className="text-gray-600">Plateforme de collaboration n°1 mondiale</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-purple-500 rounded-lg">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-900">Hébergement Cloud</h4>
            </div>
            <p className="text-purple-800 text-sm">
              GitHub repose sur Git et propose une interface web facilitant le travail collaboratif.
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-blue-500 rounded-lg">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-blue-900">Gestion de projets</h4>
            </div>
            <p className="text-blue-800 text-sm">
              Outils de planification (projets Kanban), suivi des tâches (issues) et revue de code (pull requests).
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-green-500 rounded-lg">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-900">Public & Privé</h4>
            </div>
            <p className="text-green-800 text-sm">
              Créez des dépôts publics (open source) ou privés (équipes restreintes).
            </p>
          </div>

          <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-orange-500 rounded-lg">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-orange-900">CI/CD Intégré</h4>
            </div>
            <p className="text-orange-800 text-sm">
              GitHub Actions permet d'automatiser les tests et le déploiement de votre code.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.4}>
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
            <div className="relative p-3 bg-gradient-to-br from-orange-300 to-red-300 rounded-2xl">
              <Image
                src="/images/gitlab.png"
                alt="GitLab"
                width={48}
                height={48}
                className="relative"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">GitLab</h2>
            <p className="text-gray-600">Alternative DevOps complète</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-900 mb-2">Fonctionnalités similaires à GitHub</h4>
            <p className="text-orange-800">
              GitLab propose également l'hébergement de dépôts Git, la gestion de projets, les merge requests, etc.
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-900 mb-2">Plus personnalisable</h4>
            <p className="text-purple-800">
              GitLab offre des options d'<strong className="text-gradient">auto-hébergement</strong> et de configuration avancée,
              idéal pour les équipes ayant besoin d'un contrôle total sur leur infrastructure.
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 mb-2">Intégration DevOps native</h4>
            <p className="text-blue-800">
              GitLab inclut nativement des outils de <strong className="text-gradient">CI/CD</strong>, de gestion de conteneurs
              (Registry) et de planification de projets (issues, milestones).
            </p>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-300">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-500 rounded-lg flex-shrink-0">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-2">GitLab ULiège 🎓</h4>
                <p className="text-green-800 mb-2">
                  L'Université de Liège propose sa propre instance GitLab accessible à l'adresse{" "}
                  <a
                    href="https://gitlab.uliege.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 underline decoration-2 underline-offset-2 font-semibold"
                  >
                    gitlab.uliege.be
                  </a>
                </p>
                <p className="text-green-700 text-sm">
                  Elle offre les mêmes avantages que GitLab.com tout en étant hébergée localement pour mieux
                  répondre aux besoins spécifiques de la communauté universitaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection delay={0.5}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Pourquoi utiliser Git ? 🤔</h2>
          <p className="text-gray-600">Les avantages incontournables pour tout développeur</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Suivi précis des modifications</h4>
              <p className="text-gray-600 text-sm">Historique complet de chaque changement</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Collaboration simplifiée</h4>
              <p className="text-gray-600 text-sm">Travaillez en équipe sans conflits</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Gestion des versions et branches</h4>
              <p className="text-gray-600 text-sm">Développez plusieurs fonctionnalités en parallèle</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Sécurisation et sauvegarde</h4>
              <p className="text-gray-600 text-sm">Votre code est en sécurité dans le cloud</p>
            </div>
          </div>

          <div className="md:col-span-2 flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all duration-300">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Intégration continue et déploiement</h4>
              <p className="text-gray-600 text-sm">Automatisez vos tests et déploiements avec CI/CD pour gagner du temps et réduire les erreurs</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
