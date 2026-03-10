"use client"

import { motion } from "framer-motion"
import { CheckCircle, GitBranch, MessageSquare, FileText, Users, Shield, RefreshCw, Lightbulb, XCircle, AlertTriangle } from "lucide-react"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import ContentSection from "@/components/content-section"
import CodeBlock from "@/components/code-block"

export default function BonnesPratiques() {
  const pathname = usePathname()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <h1 className="font-[family-name:var(--font-syne)]">Bonnes pratiques et conseils en équipe</h1>

      {/* Introduction */}
      <ContentSection delay={0.1}>
        <div className="flex items-center gap-3 mb-3">
          <Users className="w-5 h-5 text-[#e03838]" />
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Travailler efficacement en équipe</h2>
        </div>
        <p className="text-base leading-relaxed m-0">
          Voici les <strong>bonnes pratiques essentielles</strong> pour collaborer efficacement avec Git et GitHub. Suivre ces conventions vous aidera à maintenir un code propre et une équipe productive !
        </p>
      </ContentSection>

      {/* Branches */}
      <ContentSection delay={0.2}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <GitBranch className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">1. Stratégie de branches</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 mt-0 mb-0 text-sm">Une branche = Une fonctionnalité</h3>
            </div>
            <p className="text-gray-700 mb-3 text-sm m-0">
              Créez une nouvelle branche pour chaque fonctionnalité ou correction de bug. Ne jamais travailler directement sur <code>main</code> !
            </p>
            <CodeBlock
              code={`# ✅ BON : Nom descriptif et organisé
git checkout -b feature/ajout-authentification
git checkout -b fix/correction-bug-login
git checkout -b docs/mise-a-jour-readme

# ❌ MAUVAIS : Nom vague ou générique
git checkout -b test
git checkout -b ma-branche
git checkout -b nouveau`}
            />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 mt-0 mb-0 text-sm">Convention de nommage</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                { prefix: "feature/", desc: "Nouvelles fonctionnalités" },
                { prefix: "fix/", desc: "Corrections de bugs" },
                { prefix: "docs/", desc: "Documentation" },
                { prefix: "refactor/", desc: "Refactorisation" },
                { prefix: "test/", desc: "Ajout de tests" },
                { prefix: "chore/", desc: "Tâches diverses" },
              ].map((item) => (
                <div key={item.prefix} className="p-3 rounded-lg border border-gray-200 bg-white">
                  <p className="font-mono text-xs font-bold mb-0.5 m-0 text-[#e03838]">{item.prefix}</p>
                  <p className="text-xs text-gray-600 m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3 mb-2">
              <Shield className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 mt-0 mb-0 text-sm">Protéger la branche principale</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2 m-0">
              La branche <code>main</code> doit toujours être <strong>stable et déployable</strong>. Configurez GitHub pour :
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 m-0 p-0">
              {[
                "Empêcher les push directs sur main",
                "Exiger au moins 1 approbation de PR",
                "Exiger que les tests passent avant la fusion",
              ].map((item, i) => <li key={i} className="m-0">• {item}</li>)}
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Messages de commit */}
      <ContentSection delay={0.3}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">2. Messages de commit clairs</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 mt-0 flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-[#e03838]" />
              Format recommandé
            </h3>
            <CodeBlock
              code={`# Structure d'un bon message de commit
type(scope): sujet court (max 50 caractères)

Description détaillée optionnelle expliquant :
- Pourquoi ce changement est nécessaire
- Ce qui a été modifié
- Impact potentiel`}
            />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 mt-0 text-sm">Exemples concrets</h3>
            <div className="space-y-2">
              <div className="bg-gray-50 border-l-4 border-gray-400 p-3 rounded-r-lg">
                <p className="text-xs text-gray-500 font-bold mb-1 m-0">EXCELLENT</p>
                <code className="text-sm text-gray-800">feat(auth): ajout de l'authentification OAuth2</code>
                <p className="text-xs text-gray-500 mt-1 m-0">→ Précis, descriptif, avec contexte</p>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-300 p-3 rounded-r-lg">
                <p className="text-xs text-gray-500 font-bold mb-1 m-0">BON</p>
                <code className="text-sm text-gray-800">fix(api): correction de la validation des emails</code>
                <p className="text-xs text-gray-500 mt-1 m-0">→ Clair et spécifique</p>
              </div>
              <div className="bg-[#fef2f2] border-l-4 border-[#e03838] p-3 rounded-r-lg">
                <p className="text-xs text-[#e03838] font-bold mb-1 m-0">MAUVAIS</p>
                <code className="text-sm text-gray-800">fix bug</code>
                <p className="text-xs text-gray-500 mt-1 m-0">→ Trop vague, quel bug ?</p>
              </div>
              <div className="bg-[#fef2f2] border-l-4 border-[#e03838] p-3 rounded-r-lg">
                <p className="text-xs text-[#e03838] font-bold mb-1 m-0">TRÈS MAUVAIS</p>
                <code className="text-sm text-gray-800">update</code>
                <p className="text-xs text-gray-500 mt-1 m-0">→ Aucune information utile</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 mt-0 text-sm">Types de commits courants</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { type: "feat", desc: "Nouvelle fonctionnalité" },
                { type: "fix", desc: "Correction de bug" },
                { type: "docs", desc: "Documentation" },
                { type: "refactor", desc: "Refactorisation" },
                { type: "test", desc: "Ajout de tests" },
                { type: "chore", desc: "Maintenance" },
              ].map(({ type, desc }) => (
                <div key={type} className="flex items-center gap-2">
                  <code className="px-2 py-0.5 rounded text-xs font-bold bg-[#fef2f2] text-[#e03838]">{type}</code>
                  <span className="text-gray-600 text-xs">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Pull Requests */}
      <ContentSection delay={0.4}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">3. Pull Requests de qualité</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 mt-0 mb-0 text-sm">Taille idéale d'une PR</h3>
            </div>
            <p className="text-gray-700 mb-3 text-sm m-0">
              Une bonne PR est <strong>petite et focalisée</strong> sur un seul objectif.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 border border-gray-200 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#e03838]" />
                  <p className="font-semibold text-gray-900 text-sm m-0">Idéal</p>
                </div>
                <p className="text-sm text-gray-700 m-0">50–200 lignes modifiées</p>
                <p className="text-xs text-gray-500 mt-1 m-0">Facile à réviser, fusion rapide</p>
              </div>
              <div className="bg-[#fef2f2] border border-red-100 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="w-3.5 h-3.5 text-[#e03838]" />
                  <p className="font-semibold text-[#e03838] text-sm m-0">À éviter</p>
                </div>
                <p className="text-sm text-gray-700 m-0">+1000 lignes modifiées</p>
                <p className="text-xs text-gray-500 mt-1 m-0">Difficile à réviser, risque élevé</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 mt-0 mb-0 text-sm">Description complète</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 m-0 p-0">
              {[
                { label: "Qu'est-ce qui change ?", detail: "Description des modifications" },
                { label: "Pourquoi ?", detail: "Contexte et motivation" },
                { label: "Comment tester ?", detail: "Instructions pour vérifier" },
                { label: "Captures d'écran", detail: "(si changements visuels)" },
                { label: "Issues liées", detail: "(ex: \"Fixes #123\")" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 m-0">
                  <span className="text-[#e03838] font-bold flex-shrink-0">•</span>
                  <span><strong>{item.label}</strong> {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 mt-0 mb-0 text-sm">Revue de code bienveillante</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <p className="text-gray-700 font-semibold mb-1 m-0 text-xs">À faire</p>
                <ul className="text-gray-700 space-y-1 m-0 p-0">
                  {["Être constructif et courtois", "Expliquer le \"pourquoi\"", "Suggérer des solutions", "Valoriser le bon travail"].map((t, i) => <li key={i} className="m-0 text-xs">• {t}</li>)}
                </ul>
              </div>
              <div className="bg-[#fef2f2] p-3 rounded-lg border border-red-100">
                <p className="text-[#e03838] font-semibold mb-1 m-0 text-xs">À éviter</p>
                <ul className="text-gray-700 space-y-1 m-0 p-0">
                  {["Commentaires vagues", "Critiques personnelles", "Ton agressif ou méprisant", "Bloquer sans raison valable"].map((t, i) => <li key={i} className="m-0 text-xs">• {t}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Synchronisation */}
      <ContentSection delay={0.5}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <RefreshCw className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">4. Rester synchronisé</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900 mt-0 mb-0 text-sm">Pull régulièrement</h3>
            </div>
            <p className="text-gray-700 mb-3 text-sm m-0">
              Faites un <code>git pull</code> <strong>au début de chaque session de travail</strong> pour éviter les conflits.
            </p>
            <CodeBlock
              code={`# Avant de commencer à travailler
git checkout main
git pull origin main

# Mettre à jour votre branche de travail
git checkout feature/ma-fonctionnalite
git merge main`}
            />
          </div>

          {[
            { icon: AlertTriangle, title: "Résoudre les conflits rapidement", desc: "Plus vous attendez pour résoudre un conflit, plus il devient complexe. Traitez-les dès qu'ils apparaissent !" },
            { icon: RefreshCw, title: "Push fréquemment", desc: "Poussez vos commits plusieurs fois par jour. Cela sauvegarde votre travail et permet aux autres de voir votre progression." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start gap-3 mb-2">
                <Icon className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
                <h3 className="font-semibold text-gray-900 mt-0 mb-0 text-sm">{title}</h3>
              </div>
              <p className="text-gray-700 text-sm m-0 ml-7">{desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Communication */}
      <ContentSection delay={0.6}>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#e03838] rounded-lg">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">5. Communication en équipe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: Users, title: "Prévenir avant de modifier", desc: "Si vous travaillez sur un fichier critique, informez l'équipe pour éviter les conflits." },
            { icon: MessageSquare, title: "Utiliser les issues", desc: "Documentez les bugs et fonctionnalités dans les issues GitHub pour garder une trace." },
            { icon: FileText, title: "Documenter les décisions", desc: "Utilisez le README, le wiki ou les commentaires de PR pour expliquer les choix techniques." },
            { icon: Lightbulb, title: "Partager les connaissances", desc: "N'hésitez pas à demander de l'aide ou à partager vos découvertes avec l'équipe." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
              <Icon className="w-4 h-4 text-[#e03838] mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">{title}</h3>
              <p className="text-sm text-gray-700 m-0">{desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Récapitulatif */}
      <ContentSection delay={0.7}>
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="w-5 h-5 text-[#e03838]" />
          <h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Les règles d'or</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            "Une branche par fonctionnalité avec un nom descriptif",
            "Messages de commit clairs et structurés",
            "PR de petite taille (50-200 lignes)",
            "Pull régulièrement pour rester à jour",
            "Protéger la branche main",
            "Faire réviser son code par les pairs",
            "Résoudre les conflits rapidement",
            "Communiquer fréquemment avec l'équipe",
            "Documenter les décisions importantes",
            "Être bienveillant dans les revues de code",
          ].map((rule, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <CheckCircle className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm m-0">{rule}</p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100 mt-4">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#e03838] mb-1 m-0">Le secret du succès</p>
              <p className="text-sm text-gray-700 m-0">
                Les meilleures équipes ne sont pas celles qui ne font jamais d'erreurs, mais celles qui <strong>communiquent ouvertement</strong>, <strong>apprennent ensemble</strong> et suivent des conventions communes. Git est un outil puissant, mais c'est la collaboration humaine qui fait la différence !
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <PageNavigation currentPath={pathname} />
    </motion.div>
  )
}
