"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { GitPullRequest, MessageSquare, CheckCircle, GitMerge } from "lucide-react"
import PageNavigation from "@/components/page-navigation"

export default function PullRequest() {
	const pathname = usePathname()

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
			<h1>Pull Requests sur GitHub</h1>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, duration: 0.5 }}
				className="mb-8"
			>
				<p className="text-lg">
					Les pull requests sont un mécanisme essentiel de GitHub qui permet aux développeurs de collaborer efficacement
					sur des projets. Elles constituent une méthode structurée pour proposer, discuter et intégrer des
					modifications de code dans un projet.
				</p>
			</motion.div>

			<section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="mb-8"
				>
					<h3 className="flex items-center">
						<GitPullRequest className="mr-2 text-[#8C2626]" /> Proposition de changements
					</h3>
					<div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#F24141] mt-4">
						<p>
							Une pull request permet à un contributeur de proposer des modifications qu'il a effectuées dans une
							branche de son dépôt. Cela offre une méthode structurée pour intégrer de nouvelles fonctionnalités ou
							corrections de bugs.
						</p>
					</div>
				</motion.div>
			</section>

			<section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="mb-8"
				>
					<h3 className="flex items-center">
						<CheckCircle className="mr-2 text-[#8C2626]" /> Collaboration et révision
					</h3>
					<div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#F24141] mt-4">
						<p>
							Une fois la pull request ouverte, les autres membres du projet peuvent consulter les modifications,
							ajouter des commentaires et suggérer des améliorations. Ce processus favorise la revue de code et permet
							de garantir que seuls des changements validés sont fusionnés dans la branche principale.
						</p>
					</div>
				</motion.div>
			</section>

			<section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="mb-8"
				>
					<h3 className="flex items-center">
						<MessageSquare className="mr-2 text-[#8C2626]" /> Processus de discussion
					</h3>
					<div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#F24141] mt-4">
						<p>
							La plateforme offre des outils pour discuter des modifications proposées, résoudre les conflits et
							apporter des ajustements, assurant ainsi une meilleure communication entre les collaborateurs.
						</p>
					</div>
				</motion.div>
			</section>

			<section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					<h3 className="flex items-center">
						<GitMerge className="mr-2 text-[#8C2626]" /> Fusion des modifications
					</h3>
					<div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#F24141] mt-4">
						<p>
							Après approbation par les parties concernées, la pull request peut être fusionnée, ce qui intègre les
							modifications dans le projet principal.
						</p>
					</div>
				</motion.div>
			</section>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6, duration: 0.5 }}
				className="bg-gray-50 p-5 rounded-lg border border-gray-200 mt-8"
			>
				<p className="font-medium text-lg text-[#8C2626]">En résumé</p>
				<p>
					La pull request est un mécanisme clé pour proposer, examiner et intégrer des modifications dans un projet
					collaboratif sur GitHub. Cette approche garantit la qualité du code et facilite la coordination entre
					développeurs.
				</p>
			</motion.div>

			{/* Navigation entre les pages */}
			<PageNavigation currentPath={pathname} />
		</motion.div>
	)
}

