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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1>Bonnes pratiques et conseils en équipe</h1>

      {/* Introduction */}
      <ContentSection delay={0.1} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Travailler efficacement en équipe</h2>
        </div>

        <p className="text-lg leading-relaxed">
          Voici les <strong>bonnes pratiques essentielles</strong> pour collaborer efficacement avec Git et GitHub. Suivre ces conventions vous aidera à maintenir un code propre et une équipe productive !
        </p>
      </ContentSection>

      {/* Branches */}
      <ContentSection delay={0.2} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <GitBranch className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">1. Stratégie de branches</h2>
        </div>

        <div className="space-y-4">
          <div className="glass-panel p-5 rounded-xl border border-green-200/50">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Une branche = Une fonctionnalité</h3>
            </div>
            <p className="text-gray-700 mb-3">
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

          <div className="glass-panel p-5 rounded-xl border border-green-200/50">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Convention de nommage</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="font-mono text-sm text-green-700 font-semibold mb-1">feature/</p>
                <p className="text-xs text-gray-600">Nouvelles fonctionnalités</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="font-mono text-sm text-red-700 font-semibold mb-1">fix/</p>
                <p className="text-xs text-gray-600">Corrections de bugs</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="font-mono text-sm text-blue-700 font-semibold mb-1">docs/</p>
                <p className="text-xs text-gray-600">Documentation</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="font-mono text-sm text-purple-700 font-semibold mb-1">refactor/</p>
                <p className="text-xs text-gray-600">Refactorisation</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="font-mono text-sm text-orange-700 font-semibold mb-1">test/</p>
                <p className="text-xs text-gray-600">Ajout de tests</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="font-mono text-sm text-yellow-700 font-semibold mb-1">chore/</p>
                <p className="text-xs text-gray-600">Tâches diverses</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-green-200/50">
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Protéger la branche principale</h3>
            </div>
            <p className="text-gray-700">
              La branche <code>main</code> doit toujours être <strong>stable et déployable</strong>. Configurez GitHub pour :
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li>• Empêcher les push directs sur <code>main</code></li>
              <li>• Exiger au moins 1 approbation de PR</li>
              <li>• Exiger que les tests passent avant la fusion</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Messages de commit */}
      <ContentSection delay={0.3} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">2. Messages de commit clairs</h2>
        </div>

        <div className="space-y-4">
          <div className="glass-panel p-5 rounded-xl border border-purple-200/50">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-600" />
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

          <div className="glass-panel p-5 rounded-xl border border-purple-200/50">
            <h3 className="font-semibold text-gray-900 mb-3">Exemples concrets</h3>

            <div className="space-y-3">
              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                <p className="text-xs text-green-600 font-semibold mb-1">✅ EXCELLENT</p>
                <code className="text-sm text-gray-800">feat(auth): ajout de l'authentification OAuth2</code>
                <p className="text-xs text-gray-600 mt-2">→ Précis, descriptif, avec contexte</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                <p className="text-xs text-green-600 font-semibold mb-1">✅ BON</p>
                <code className="text-sm text-gray-800">fix(api): correction de la validation des emails</code>
                <p className="text-xs text-gray-600 mt-2">→ Clair et spécifique</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                <p className="text-xs text-red-600 font-semibold mb-1">❌ MAUVAIS</p>
                <code className="text-sm text-gray-800">fix bug</code>
                <p className="text-xs text-gray-600 mt-2">→ Trop vague, quel bug ?</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                <p className="text-xs text-red-600 font-semibold mb-1">❌ TRÈS MAUVAIS</p>
                <code className="text-sm text-gray-800">update</code>
                <p className="text-xs text-gray-600 mt-2">→ Aucune information utile</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-purple-200/50">
            <h3 className="font-semibold text-gray-900 mb-3">Types de commits courants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <code className="bg-green-100 text-green-700 px-2 py-1 rounded">feat</code>
                <span className="text-gray-600">Nouvelle fonctionnalité</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-red-100 text-red-700 px-2 py-1 rounded">fix</code>
                <span className="text-gray-600">Correction de bug</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-blue-100 text-blue-700 px-2 py-1 rounded">docs</code>
                <span className="text-gray-600">Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-purple-100 text-purple-700 px-2 py-1 rounded">refactor</code>
                <span className="text-gray-600">Refactorisation</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-orange-100 text-orange-700 px-2 py-1 rounded">test</code>
                <span className="text-gray-600">Ajout de tests</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">chore</code>
                <span className="text-gray-600">Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Pull Requests */}
      <ContentSection delay={0.4} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-orange-600" />
          <h2 className="text-2xl font-bold text-gray-900">3. Pull Requests de qualité</h2>
        </div>

        <div className="space-y-4">
          <div className="glass-panel p-5 rounded-xl border border-orange-200/50">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Taille idéale d'une PR</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Une bonne PR est <strong>petite et focalisée</strong> sur un seul objectif.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <p className="font-semibold text-green-700">✅ Idéal</p>
                </div>
                <p className="text-sm text-gray-700">50-200 lignes modifiées</p>
                <p className="text-xs text-gray-600 mt-1">Facile à réviser, fusion rapide</p>
              </div>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-600" />
                  <p className="font-semibold text-red-700">❌ À éviter</p>
                </div>
                <p className="text-sm text-gray-700">+1000 lignes modifiées</p>
                <p className="text-xs text-gray-600 mt-1">Difficile à réviser, risque élevé</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-orange-200/50">
            <div className="flex items-start gap-3 mb-3">
              <FileText className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Description complète</h3>
            </div>
            <p className="text-gray-700 mb-3">Incluez toujours ces informations dans votre PR :</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Qu'est-ce qui change ?</strong> Description des modifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Pourquoi ?</strong> Contexte et motivation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Comment tester ?</strong> Instructions pour vérifier</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Captures d'écran</strong> (si changements visuels)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Issues liées</strong> (ex: "Fixes #123")</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-orange-200/50">
            <div className="flex items-start gap-3 mb-3">
              <Users className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Revue de code bienveillante</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-700 font-semibold mb-1">✅ À faire</p>
                <ul className="text-gray-700 space-y-1">
                  <li>Être constructif et courtois</li>
                  <li>Expliquer le "pourquoi"</li>
                  <li>Suggérer des solutions</li>
                  <li>Valoriser le bon travail</li>
                </ul>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <p className="text-red-700 font-semibold mb-1">❌ À éviter</p>
                <ul className="text-gray-700 space-y-1">
                  <li>Commentaires vagues</li>
                  <li>Critiques personnelles</li>
                  <li>Ton agressif ou méprisant</li>
                  <li>Bloquer sans raison valable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Synchronisation */}
      <ContentSection delay={0.5} className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200">
        <div className="flex items-center gap-3 mb-4">
          <RefreshCw className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">4. Rester synchronisé</h2>
        </div>

        <div className="space-y-4">
          <div className="glass-panel p-5 rounded-xl border border-indigo-200/50">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Pull régulièrement</h3>
            </div>
            <p className="text-gray-700 mb-3">
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

          <div className="glass-panel p-5 rounded-xl border border-indigo-200/50">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Résoudre les conflits rapidement</h3>
            </div>
            <p className="text-gray-700">
              Plus vous attendez pour résoudre un conflit, plus il devient complexe. Traitez-les dès qu'ils apparaissent !
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-indigo-200/50">
            <div className="flex items-start gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
              <h3 className="font-semibold text-gray-900">Push fréquemment</h3>
            </div>
            <p className="text-gray-700">
              Poussez vos commits plusieurs fois par jour. Cela sauvegarde votre travail et permet aux autres de voir votre progression.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Communication */}
      <ContentSection delay={0.6} className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-6 h-6 text-yellow-600" />
          <h2 className="text-2xl font-bold text-gray-900">5. Communication en équipe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-panel p-5 rounded-xl border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
            <Users className="w-6 h-6 text-yellow-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Prévenir avant de modifier</h3>
            <p className="text-sm text-gray-700">
              Si vous travaillez sur un fichier critique, informez l'équipe pour éviter les conflits.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
            <MessageSquare className="w-6 h-6 text-yellow-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Utiliser les issues</h3>
            <p className="text-sm text-gray-700">
              Documentez les bugs et fonctionnalités dans les issues GitHub pour garder une trace.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
            <FileText className="w-6 h-6 text-yellow-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Documenter les décisions</h3>
            <p className="text-sm text-gray-700">
              Utilisez le README, le wiki ou les commentaires de PR pour expliquer les choix techniques.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-xl border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
            <Lightbulb className="w-6 h-6 text-yellow-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Partager les connaissances</h3>
            <p className="text-sm text-gray-700">
              N'hésitez pas à demander de l'aide ou à partager vos découvertes avec l'équipe.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Récapitulatif */}
      <ContentSection delay={0.7} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-900">Récapitulatif : Les règles d'or</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
            "Être bienveillant dans les revues de code"
          ].map((rule, index) => (
            <div key={index} className="flex items-start gap-3 glass-panel p-4 rounded-lg border border-green-200/50 hover:shadow-md transition-all duration-300">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm">{rule}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel p-5 rounded-xl border border-green-200/50 mt-6 bg-gradient-to-br from-green-50/50 to-emerald-50/50">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-green-700 mb-2">💡 Le secret du succès</p>
              <p className="text-sm text-gray-700">
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

