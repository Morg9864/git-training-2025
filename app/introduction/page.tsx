"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import ContentSection from "@/components/content-section"

export default function Introduction() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h1 className="font-[family-name:var(--font-syne)]">Introduction à Git, GitHub et GitLab</h1>

      <ContentSection delay={0.1}>
        <p className="text-lg text-gray-700 leading-relaxed m-0">
          Découvrez les outils essentiels du développement moderne qui révolutionnent
          la collaboration et la gestion de code.
        </p>
      </ContentSection>

      {/* Git */}
      <ContentSection delay={0.2}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#727477] rounded-xl flex-shrink-0">
            <Image src="/images/git.png" alt="Git" width={32} height={32} />
          </div>
          <div>
            <h2 className="mt-0 mb-0.5">Git</h2>
            <p className="text-gray-500 text-sm m-0">Système de contrôle de version décentralisé</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              title: "Système de contrôle de version décentralisé",
              body: <>Créé par <strong className="text-[#e03838]">Linus Torvalds en 2005</strong>, Git permet de suivre l'historique des modifications d'un projet, de gérer différentes branches et de faciliter la collaboration entre développeurs.</>,
            },
            {
              title: "Gestion des modifications",
              body: <>Chaque <strong className="text-[#e03838]">commit</strong> sauvegarde l'état du projet, ce qui rend le retour en arrière ou l'exploration d'historiques très simples et sûrs.</>,
            },
            {
              title: "Collaboration simplifiée",
              body: <>Grâce à son <strong className="text-[#e03838]">mode distribué</strong>, tout le monde peut travailler en parallèle sur le même projet, puis fusionner ses changements sans perdre l'historique.</>,
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 bg-[#fef2f2] rounded-lg border-l-4 border-[#e03838]">
              <div className="flex-shrink-0 mt-1">
                <div className="p-1.5 bg-[#e03838] rounded-md">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">{item.title}</h4>
                <p className="text-gray-700 m-0 text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* GitHub */}
      <ContentSection delay={0.3}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#727477] rounded-xl flex-shrink-0">
            <Image src="/images/github.png" alt="GitHub" width={32} height={32} />
          </div>
          <div>
            <h2 className="mt-0 mb-0.5">GitHub</h2>
            <p className="text-gray-500 text-sm m-0">Plateforme de collaboration n°1 mondiale</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            { title: "Hébergement Cloud", desc: "GitHub repose sur Git et propose une interface web facilitant le travail collaboratif." },
            { title: "Gestion de projets", desc: "Outils de planification (projets Kanban), suivi des tâches (issues) et revue de code (pull requests)." },
            { title: "Public & Privé", desc: "Créez des dépôts publics (open source) ou privés (équipes restreintes)." },
            { title: "CI/CD Intégré", desc: "GitHub Actions permet d'automatiser les tests et le déploiement de votre code." },
          ].map((item) => (
            <div key={item.title} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <h4 className="font-semibold text-gray-900 text-sm mb-1 mt-0">{item.title}</h4>
              <p className="text-gray-600 text-sm m-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* GitLab */}
      <ContentSection delay={0.4}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#727477] rounded-xl flex-shrink-0">
            <Image src="/images/gitlab.png" alt="GitLab" width={32} height={32} />
          </div>
          <div>
            <h2 className="mt-0 mb-0.5">GitLab</h2>
            <p className="text-gray-500 text-sm m-0">Alternative DevOps complète</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { title: "Fonctionnalités similaires à GitHub", body: "GitLab propose également l'hébergement de dépôts Git, la gestion de projets, les merge requests, etc." },
            { title: "Plus personnalisable", body: "GitLab offre des options d'auto-hébergement et de configuration avancée, idéal pour les équipes ayant besoin d'un contrôle total sur leur infrastructure." },
            { title: "Intégration DevOps native", body: "GitLab inclut nativement des outils de CI/CD, de gestion de conteneurs (Registry) et de planification de projets (issues, milestones)." },
          ].map((item) => (
            <div key={item.title} className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#e03838]">
              <h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">{item.title}</h4>
              <p className="text-gray-700 m-0 text-sm">{item.body}</p>
            </div>
          ))}

          <div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100">
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-[#e03838] rounded-md flex-shrink-0 mt-0.5">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">GitLab ULiège</h4>
                <p className="text-gray-700 mb-1 text-sm m-0">
                  L'Université de Liège propose sa propre instance GitLab à{" "}
                  <a href="https://gitlab.uliege.be" target="_blank" rel="noopener noreferrer" className="text-[#e03838] hover:underline font-semibold">
                    gitlab.uliege.be
                  </a>
                </p>
                <p className="text-gray-600 text-sm m-0">
                  Elle offre les mêmes avantages que GitLab.com tout en étant hébergée localement pour la communauté universitaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Pourquoi Git */}
      <ContentSection delay={0.5}>
        <h2 className="mt-0 mb-5">Pourquoi utiliser Git ?</h2>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            { title: "Suivi précis des modifications", desc: "Historique complet de chaque changement" },
            { title: "Collaboration simplifiée", desc: "Travaillez en équipe sans conflits" },
            { title: "Gestion des versions et branches", desc: "Développez plusieurs fonctionnalités en parallèle" },
            { title: "Sécurisation et sauvegarde", desc: "Votre code est en sécurité dans le cloud" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
              <div className="w-5 h-5 bg-[#e03838] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-0.5 mt-0 text-sm">{item.title}</h4>
                <p className="text-gray-600 text-sm m-0">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="md:col-span-2 flex items-start gap-3 p-4 bg-[#fef2f2] rounded-lg border border-red-100 hover:border-[#e03838] transition-colors">
            <div className="w-5 h-5 bg-[#e03838] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white font-bold text-xs">✓</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-0.5 mt-0 text-sm">Intégration continue et déploiement</h4>
              <p className="text-gray-600 text-sm m-0">Automatisez vos tests et déploiements avec CI/CD pour gagner du temps et réduire les erreurs</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
