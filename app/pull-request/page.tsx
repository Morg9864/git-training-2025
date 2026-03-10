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
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<h1 className="font-[family-name:var(--font-syne)]">Pull Requests sur GitHub</h1>

			{/* Introduction */}
			<ContentSection delay={0.1}>
				<div className="flex items-center gap-3 mb-4">
					<div className="p-2 bg-[#e03838] rounded-lg">
						<GitPullRequest className="w-4 h-4 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Qu'est-ce qu'une Pull Request ?</h2>
				</div>

				<p className="text-base leading-relaxed mb-5 m-0">
					Les <strong>pull requests</strong> (ou PR) sont un mécanisme essentiel de GitHub qui permet aux développeurs de collaborer efficacement sur des projets. C'est la pierre angulaire du travail collaboratif moderne !
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					{[
						{ icon: Eye, title: "Revue de code", desc: "Permet de valider la qualité avant l'intégration" },
						{ icon: MessageSquare, title: "Discussion", desc: "Facilite les échanges sur les modifications" },
						{ icon: Users, title: "Collaboration", desc: "Plusieurs personnes peuvent contribuer" },
						{ icon: CheckCircle, title: "Traçabilité", desc: "Historique complet des changements" },
					].map(({ icon: Icon, title, desc }) => (
						<div key={title} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
							<div className="flex items-start gap-3">
								<Icon className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
								<div>
									<h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">{title}</h4>
									<p className="text-sm text-gray-600 m-0">{desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</ContentSection>

			{/* Créer une PR */}
			<ContentSection delay={0.2}>
				<div className="flex items-center gap-3 mb-4">
					<div className="p-2 bg-[#e03838] rounded-lg">
						<GitPullRequest className="w-4 h-4 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Créer une Pull Request</h2>
				</div>

				<p className="mb-5 text-gray-700 m-0">
					Avant de créer une PR, assurez-vous que votre branche est à jour et poussée sur GitHub :
				</p>

				<div className="space-y-3">
					<div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
						<div className="flex items-start gap-3">
							<div className="w-7 h-7 rounded-full bg-[#e03838] flex items-center justify-center flex-shrink-0">
								<span className="text-white font-bold text-sm">1</span>
							</div>
							<div className="flex-1">
								<h4 className="font-semibold text-gray-900 mb-2 mt-0 text-sm">Créer et pousser votre branche</h4>
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

					<div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
						<div className="flex items-start gap-3">
							<div className="w-7 h-7 rounded-full bg-[#e03838] flex items-center justify-center flex-shrink-0">
								<span className="text-white font-bold text-sm">2</span>
							</div>
							<div className="flex-1">
								<h4 className="font-semibold text-gray-900 mb-3 mt-0 text-sm">Ouvrir la PR sur GitHub</h4>
								<ul className="space-y-2 text-sm text-gray-700 m-0 p-0">
									{[
										"Aller sur le dépôt GitHub",
										"Cliquer sur \"Compare & pull request\"",
										"Remplir le titre et la description",
										"Sélectionner les reviewers (si nécessaire)",
										"Cliquer sur \"Create pull request\"",
									].map((step, i) => (
										<li key={i} className="flex items-center gap-2 m-0">
											<ArrowRight className="w-3.5 h-3.5 text-[#e03838] flex-shrink-0" />
											{step}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</ContentSection>

			{/* Processus de révision */}
			<ContentSection delay={0.3}>
				<div className="flex items-center gap-3 mb-4">
					<div className="p-2 bg-[#e03838] rounded-lg">
						<Eye className="w-4 h-4 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Processus de révision</h2>
				</div>

				<p className="mb-5 text-gray-700 m-0">
					Une fois la PR créée, elle passe par un processus de révision collaboratif :
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					{[
						{ icon: MessageSquare, title: "Commentaires généraux", desc: "Les reviewers peuvent laisser des commentaires sur la PR dans son ensemble pour discuter de l'approche ou des choix techniques." },
						{ icon: MessageSquare, title: "Commentaires ligne par ligne", desc: "Possibilité de commenter des lignes spécifiques de code pour suggérer des améliorations précises." },
						{ icon: ThumbsUp, title: "Approbations", desc: "Les reviewers peuvent approuver la PR une fois qu'ils sont satisfaits des modifications." },
						{ icon: GitMerge, title: "Demandes de modifications", desc: "Si des changements sont nécessaires, les reviewers peuvent bloquer la fusion jusqu'à correction." },
					].map(({ icon: Icon, title, desc }) => (
						<div key={title} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
							<Icon className="w-4 h-4 text-[#e03838] mb-2" />
							<h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">{title}</h4>
							<p className="text-sm text-gray-600 m-0">{desc}</p>
						</div>
					))}
				</div>
			</ContentSection>

			{/* Répondre aux commentaires */}
			<ContentSection delay={0.4}>
				<div className="flex items-center gap-3 mb-4">
					<div className="p-2 bg-[#e03838] rounded-lg">
						<MessageSquare className="w-4 h-4 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Répondre aux commentaires</h2>
				</div>

				<p className="mb-4 text-gray-700 m-0">
					Après la révision, vous devrez peut-être apporter des modifications :
				</p>

				<CodeBlock
					code={`# Faire les modifications demandées
git add .
git commit -m "Corrections suite à la revue de code"

# Pousser les modifications (la PR se met à jour automatiquement)
git push origin feature/nouvelle-fonctionnalite`}
				/>

				<div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100 mt-5">
					<div className="flex items-start gap-3">
						<Lightbulb className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
						<div>
							<p className="text-sm font-semibold text-[#e03838] mb-2 m-0">Bonnes pratiques</p>
							<ul className="text-sm text-gray-700 space-y-1 m-0 p-0">
								{[
									"Répondez à chaque commentaire, même si c'est juste \"Corrigé\"",
									"Soyez ouvert aux suggestions et aux critiques constructives",
									"Marquez les conversations comme résolues une fois traitées",
									"Pushez régulièrement pour que les reviewers voient vos progrès",
								].map((tip, i) => (
									<li key={i} className="m-0">{tip}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</ContentSection>

			{/* Fusion */}
			<ContentSection delay={0.5}>
				<div className="flex items-center gap-3 mb-4">
					<div className="p-2 bg-[#e03838] rounded-lg">
						<GitMerge className="w-4 h-4 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">Fusionner la Pull Request</h2>
				</div>

				<p className="mb-5 text-gray-700 m-0">
					Une fois la PR approuvée, vous pouvez la fusionner. GitHub propose plusieurs méthodes :
				</p>

				<div className="space-y-3">
					{[
						{ num: 1, title: "Merge commit", desc: "Crée un commit de merge. Conserve tout l'historique de la branche. Recommandé pour les grosses fonctionnalités." },
						{ num: 2, title: "Squash and merge", desc: "Combine tous les commits en un seul. Rend l'historique plus propre. Idéal pour les petites PR." },
						{ num: 3, title: "Rebase and merge", desc: "Réapplique les commits sur la branche principale. Historique linéaire sans commit de merge. Pour les puristes." },
					].map((method) => (
						<div key={method.num} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#e03838] transition-colors">
							<h4 className="font-semibold text-gray-900 mb-1 mt-0 flex items-center gap-2 text-sm">
								<div className="w-5 h-5 rounded bg-[#e03838] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
									{method.num}
								</div>
								{method.title}
							</h4>
							<p className="text-sm text-gray-600 ml-7 m-0">{method.desc}</p>
						</div>
					))}
				</div>

				<div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-4">
					<p className="text-sm text-gray-700 mb-3 m-0">
						<strong className="text-[#e03838]">Après la fusion :</strong>
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
			<ContentSection delay={0.6}>
				<div className="flex items-center gap-3 mb-4">
					<CheckCircle className="w-5 h-5 text-[#e03838]" />
					<h2 className="text-xl font-bold text-gray-900 mt-0 mb-0">En résumé</h2>
				</div>

				<div className="space-y-2">
					{[
						"Les PR permettent de proposer des modifications de manière structurée",
						"Elles facilitent la revue de code et la collaboration",
						"Le processus inclut : création, révision, corrections, approbation, fusion",
						"Choisissez la méthode de fusion adaptée à votre projet",
						"N'oubliez pas de supprimer les branches après fusion !",
					].map((item, index) => (
						<div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
							<CheckCircle className="w-4 h-4 text-[#e03838] mt-0.5 flex-shrink-0" />
							<p className="text-gray-700 text-sm m-0">{item}</p>
						</div>
					))}
				</div>

				<div className="p-4 bg-[#fef2f2] rounded-lg border border-red-100 mt-4">
					<p className="text-sm text-gray-700 m-0">
						<strong className="text-[#e03838]">Conseil pro :</strong> Faites des PR de petite taille ! Elles sont plus faciles à réviser et ont plus de chances d'être approuvées rapidement. Une bonne PR = une fonctionnalité ou un fix à la fois.
					</p>
				</div>
			</ContentSection>

			<PageNavigation currentPath={pathname} />
		</motion.div>
	)
}
