"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { GitPullRequest, MessageSquare, CheckCircle, GitMerge, Users, Eye, ThumbsUp, Lightbulb, ArrowRight } from "lucide-react"
import PageNavigation from "@/components/page-navigation"
import ContentSection from "@/components/content-section"
import CodeBlock from "@/components/code-block"

export default function PullRequest() {
	const pathname = usePathname()

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
			<h1>Pull Requests sur GitHub</h1>

			{/* Introduction */}
			<ContentSection delay={0.1} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
				<div className="flex items-center gap-3 mb-4">
					<GitPullRequest className="w-6 h-6 text-purple-600" />
					<h2 className="text-2xl font-bold text-gray-900">Qu'est-ce qu'une Pull Request ?</h2>
				</div>

				<p className="text-lg leading-relaxed mb-6">
					Les <strong>pull requests</strong> (ou PR) sont un mécanisme essentiel de GitHub qui permet aux développeurs de collaborer efficacement sur des projets. C'est la pierre angulaire du travail collaboratif moderne !
				</p>

				{/* Avantages */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="glass-panel p-5 rounded-xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
						<div className="flex items-start gap-3">
							<Eye className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
							<div>
								<h4 className="font-semibold text-gray-900 mb-2">Revue de code</h4>
								<p className="text-sm text-gray-600">Permet de valider la qualité avant l'intégration</p>
							</div>
						</div>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
						<div className="flex items-start gap-3">
							<MessageSquare className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
							<div>
								<h4 className="font-semibold text-gray-900 mb-2">Discussion</h4>
								<p className="text-sm text-gray-600">Facilite les échanges sur les modifications</p>
							</div>
						</div>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
						<div className="flex items-start gap-3">
							<Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
							<div>
								<h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
								<p className="text-sm text-gray-600">Plusieurs personnes peuvent contribuer</p>
							</div>
						</div>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
						<div className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
							<div>
								<h4 className="font-semibold text-gray-900 mb-2">Traçabilité</h4>
								<p className="text-sm text-gray-600">Historique complet des changements</p>
							</div>
						</div>
					</div>
				</div>
			</ContentSection>

			{/* Créer une PR */}
			<ContentSection delay={0.2} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
				<div className="flex items-center gap-3 mb-4">
					<GitPullRequest className="w-6 h-6 text-blue-600" />
					<h2 className="text-2xl font-bold text-gray-900">Créer une Pull Request</h2>
				</div>

				<p className="mb-6">
					Avant de créer une PR, assurez-vous que votre branche est à jour et poussée sur GitHub :
				</p>

				<div className="space-y-4">
					<div className="glass-panel p-5 rounded-xl border border-blue-200/50">
						<div className="flex items-start gap-4">
							<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
								<span className="text-blue-700 font-bold">1</span>
							</div>
							<div className="flex-1">
								<h4 className="font-semibold text-gray-900 mb-2">Créer et pousser votre branche</h4>
								<CodeBlock
									code={`# Créer une branche pour votre fonctionnalité
git checkout -b feature/nouvelle-fonctionnalite

# Faire vos modifications et commiter
git add .
git commit -m "Ajout de la nouvelle fonctionnalité"

# Pousser vers GitHub
git push origin feature/nouvelle-fonctionnalite`}
								/>
							</div>
						</div>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-blue-200/50">
						<div className="flex items-start gap-4">
							<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
								<span className="text-blue-700 font-bold">2</span>
							</div>
							<div className="flex-1">
								<h4 className="font-semibold text-gray-900 mb-3">Ouvrir la PR sur GitHub</h4>
								<ul className="space-y-2 text-sm text-gray-700">
									<li className="flex items-center gap-2">
										<ArrowRight className="w-4 h-4 text-blue-600" />
										Aller sur le dépôt GitHub
									</li>
									<li className="flex items-center gap-2">
										<ArrowRight className="w-4 h-4 text-blue-600" />
										Cliquer sur "Compare & pull request"
									</li>
									<li className="flex items-center gap-2">
										<ArrowRight className="w-4 h-4 text-blue-600" />
										Remplir le titre et la description
									</li>
									<li className="flex items-center gap-2">
										<ArrowRight className="w-4 h-4 text-blue-600" />
										Sélectionner les reviewers (si nécessaire)
									</li>
									<li className="flex items-center gap-2">
										<ArrowRight className="w-4 h-4 text-blue-600" />
										Cliquer sur "Create pull request"
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</ContentSection>

			{/* Processus de révision */}
			<ContentSection delay={0.3} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
				<div className="flex items-center gap-3 mb-4">
					<Eye className="w-6 h-6 text-green-600" />
					<h2 className="text-2xl font-bold text-gray-900">Processus de révision</h2>
				</div>

				<p className="mb-6">
					Une fois la PR créée, elle passe par un processus de révision collaboratif :
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="glass-panel p-5 rounded-xl border border-green-200/50 hover:shadow-lg transition-all duration-300">
						<MessageSquare className="w-6 h-6 text-green-600 mb-3" />
						<h4 className="font-semibold text-gray-900 mb-2">Commentaires généraux</h4>
						<p className="text-sm text-gray-600">
							Les reviewers peuvent laisser des commentaires sur la PR dans son ensemble pour discuter de l'approche ou des choix techniques.
						</p>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-green-200/50 hover:shadow-lg transition-all duration-300">
						<MessageSquare className="w-6 h-6 text-green-600 mb-3" />
						<h4 className="font-semibold text-gray-900 mb-2">Commentaires ligne par ligne</h4>
						<p className="text-sm text-gray-600">
							Possibilité de commenter des lignes spécifiques de code pour suggérer des améliorations précises.
						</p>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-green-200/50 hover:shadow-lg transition-all duration-300">
						<ThumbsUp className="w-6 h-6 text-green-600 mb-3" />
						<h4 className="font-semibold text-gray-900 mb-2">Approbations</h4>
						<p className="text-sm text-gray-600">
							Les reviewers peuvent approuver la PR une fois qu'ils sont satisfaits des modifications.
						</p>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-green-200/50 hover:shadow-lg transition-all duration-300">
						<GitMerge className="w-6 h-6 text-green-600 mb-3" />
						<h4 className="font-semibold text-gray-900 mb-2">Demandes de modifications</h4>
						<p className="text-sm text-gray-600">
							Si des changements sont nécessaires, les reviewers peuvent bloquer la fusion jusqu'à correction.
						</p>
					</div>
				</div>
			</ContentSection>

			{/* Répondre aux commentaires */}
			<ContentSection delay={0.4} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200">
				<div className="flex items-center gap-3 mb-4">
					<MessageSquare className="w-6 h-6 text-orange-600" />
					<h2 className="text-2xl font-bold text-gray-900">Répondre aux commentaires</h2>
				</div>

				<p className="mb-4">
					Après la révision, vous devrez peut-être apporter des modifications :
				</p>

				<CodeBlock
					code={`# Faire les modifications demandées
git add .
git commit -m "Corrections suite à la revue de code"

# Pousser les modifications (la PR se met à jour automatiquement)
git push origin feature/nouvelle-fonctionnalite`}
				/>

				<div className="glass-panel p-5 rounded-xl border border-orange-200/50 mt-6 bg-gradient-to-br from-orange-50/50 to-yellow-50/50">
					<div className="flex items-start gap-3">
						<Lightbulb className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
						<div>
							<p className="text-sm font-medium text-orange-700 mb-2">Bonnes pratiques</p>
							<ul className="text-sm text-gray-700 space-y-1">
								<li>Répondez à chaque commentaire, même si c'est juste "✅ Corrigé"</li>
								<li>Soyez ouvert aux suggestions et aux critiques constructives</li>
								<li>Marquez les conversations comme résolues une fois traitées</li>
								<li>Pushez régulièrement pour que les reviewers voient vos progrès</li>
							</ul>
						</div>
					</div>
				</div>
			</ContentSection>

			{/* Fusion */}
			<ContentSection delay={0.5} className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200">
				<div className="flex items-center gap-3 mb-4">
					<GitMerge className="w-6 h-6 text-indigo-600" />
					<h2 className="text-2xl font-bold text-gray-900">Fusionner la Pull Request</h2>
				</div>

				<p className="mb-6">
					Une fois la PR approuvée, vous pouvez la fusionner. GitHub propose plusieurs méthodes :
				</p>

				<div className="space-y-4">
					<div className="glass-panel p-5 rounded-xl border border-indigo-200/50 hover:shadow-lg transition-all duration-300">
						<h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
							<div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm font-bold">
								1
							</div>
							Merge commit
						</h4>
						<p className="text-sm text-gray-600 ml-8">
							Crée un commit de merge. Conserve tout l'historique de la branche. <strong>Recommandé pour les grosses fonctionnalités.</strong>
						</p>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-indigo-200/50 hover:shadow-lg transition-all duration-300">
						<h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
							<div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm font-bold">
								2
							</div>
							Squash and merge
						</h4>
						<p className="text-sm text-gray-600 ml-8">
							Combine tous les commits en un seul. Rend l'historique plus propre. <strong>Idéal pour les petites PR.</strong>
						</p>
					</div>

					<div className="glass-panel p-5 rounded-xl border border-indigo-200/50 hover:shadow-lg transition-all duration-300">
						<h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
							<div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm font-bold">
								3
							</div>
							Rebase and merge
						</h4>
						<p className="text-sm text-gray-600 ml-8">
							Réapplique les commits sur la branche principale. Historique linéaire sans commit de merge. <strong>Pour les puristes.</strong>
						</p>
					</div>
				</div>

				<div className="glass-panel p-5 rounded-xl border border-indigo-200/50 mt-6">
					<p className="text-sm text-gray-700 mb-3">
						<strong className="text-indigo-700">Après la fusion :</strong>
					</p>
					<CodeBlock
						code={`# Supprimer la branche locale
git branch -d feature/nouvelle-fonctionnalite

# Supprimer la branche distante (GitHub le propose automatiquement)
git push origin --delete feature/nouvelle-fonctionnalite`}
					/>
				</div>
			</ContentSection>

			{/* Résumé */}
			<ContentSection delay={0.6} className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
				<div className="flex items-center gap-3 mb-4">
					<CheckCircle className="w-6 h-6 text-yellow-600" />
					<h2 className="text-2xl font-bold text-gray-900">En résumé</h2>
				</div>

				<div className="space-y-3">
					{[
						"Les PR permettent de proposer des modifications de manière structurée",
						"Elles facilitent la revue de code et la collaboration",
						"Le processus inclut : création, révision, corrections, approbation, fusion",
						"Choisissez la méthode de fusion adaptée à votre projet",
						"N'oubliez pas de supprimer les branches après fusion !"
					].map((item, index) => (
						<div key={index} className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
							<p className="text-gray-700">{item}</p>
						</div>
					))}
				</div>

				<div className="glass-panel p-5 rounded-xl border border-yellow-200/50 mt-6 bg-gradient-to-br from-yellow-50/50 to-orange-50/50">
					<p className="text-sm text-gray-700">
						<strong className="text-yellow-700">💡 Conseil pro :</strong> Faites des PR de petite taille ! Elles sont plus faciles à réviser et ont plus de chances d'être approuvées rapidement. Une bonne PR = une fonctionnalité ou un fix à la fois.
					</p>
				</div>
			</ContentSection>

			<PageNavigation currentPath={pathname} />
		</motion.div>
	)
}

