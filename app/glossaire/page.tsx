"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Search, GitBranch, GitCommit, GitMerge, Server, Settings, Archive, Terminal, X, Filter } from "lucide-react"
import PageNavigation from "@/components/page-navigation"

type GlossaireItem = {
	command: string
	description: string
	category: string
}

const glossaireData: Record<string, string> = {
	"git init": "Initialise un nouveau dépôt Git local.",
	"git clone [repo_url]": "Clone un dépôt distant dans le répertoire courant.",
	"git add [fichier]": "Ajoute des fichiers à l'index pour préparer un commit.",
	"git commit -m \"message\"": "Enregistre les modifications avec un message de commit.",
	"git status": "Affiche l'état des fichiers dans le répertoire de travail et l'index.",
	"git push [remote] [branch]": "Envoie les commits locaux vers le dépôt distant spécifié.",
	"git pull [remote] [branch]": "Récupère et fusionne les commits du dépôt distant dans la branche courante.",
	"git fetch": "Télécharge les objets et références depuis un dépôt distant sans fusionner.",
	"git merge [branch]": "Fusionne la branche indiquée dans la branche courante.",
	"git branch": "Liste, crée ou supprime des branches.",
	"git checkout [branch]": "Change de branche ou restaure des fichiers spécifiques.",
	"git log": "Affiche l'historique des commits.",
	"git diff": "Montre les différences entre les commits, branches ou entre l'index et le répertoire de travail.",
	"git reset [--soft|--mixed|--hard] [commit]": "Réinitialise l'index et/ou le répertoire de travail à un commit donné.",
	"git revert [commit]": "Crée un nouveau commit annulant les changements d'un commit antérieur.",
	"git stash": "Stocke temporairement les modifications en cours pour les reprendre plus tard.",
	"git stash pop": "Réapplique les modifications stockées et les retire de la pile de stash.",
	"git remote": "Gère les dépôts distants.",
	"git remote add [nom] [url]": "Ajoute un dépôt distant sous un nom défini.",
	"git tag [tag]": "Crée une étiquette pour marquer un commit spécifique.",
	"git show [commit]": "Affiche les détails d'un commit (différences, métadonnées, etc.).",
	"git config [--global] [key] [value]": "Configure une option Git globalement ou localement.",
	"git rm [fichier]": "Supprime un fichier du répertoire de travail et de l'index.",
	"git mv [ancien] [nouveau]": "Déplace ou renomme un fichier dans le dépôt.",
	"git bisect": "Utilise une recherche binaire pour identifier le commit introduisant un bug.",
	"git cherry-pick [commit]": "Applique les changements d'un commit spécifique sur la branche courante.",
	"git blame [fichier]": "Affiche la dernière modification de chaque ligne d'un fichier avec l'auteur et le commit correspondant.",
	"git clean": "Supprime les fichiers non suivis dans le répertoire de travail.",
	"git archive": "Crée une archive compressée d'une branche ou d'un commit.",
	"git rebase [branch]": "Rejoue les commits de la branche courante sur une autre branche.",
	"git reflog": "Affiche l'historique des références mises à jour (commits, changements de branches, etc.).",
	"git submodule add [url] [path]": "Ajoute un sous-module à un dépôt Git.",
	"git submodule update": "Met à jour les sous-modules du dépôt.",
	"git submodule init": "Initialise les sous-modules référencés dans le dépôt.",
	"git describe": "Fournit une description lisible d'un commit en référence à un tag proche.",
	"git shortlog": "Affiche un résumé des commits regroupés par auteur.",
	"git diff --cached": "Affiche les différences entre l'index et le dernier commit.",
	"git diff [commit] [commit]": "Affiche les différences entre deux commits spécifiques.",
	"git merge --no-ff [branch]": "Fusionne une branche en créant toujours un commit de fusion, même si un fast-forward est possible.",
	"git commit --amend": "Modifie le dernier commit avec les changements en cours dans l'index.",
	"git cherry": "Compare les commits entre deux branches pour afficher ceux non appliqués.",
	"git reflog expire": "Nettoie l'historique reflog pour libérer de l'espace disque.",
	"git gc": "Exécute la collecte des ordures pour optimiser la base de données Git.",
	"git fsck": "Vérifie l'intégrité et la cohérence des objets du dépôt.",
	"git instaweb": "Démarre une interface web locale pour visualiser le dépôt Git.",
	"git apply [patch]": "Applique un patch contenu dans un fichier.",
	"git blame -L [start,end] [fichier]": "Affiche l'auteur et le commit pour une plage de lignes dans un fichier.",
	"git log --graph": "Affiche l'historique des commits sous forme de graphe.",
	"git pull --rebase": "Effectue un pull en rebasant les commits locaux sur ceux distants.",
	"git push --force": "Force l'envoi des commits locaux, écrasant potentiellement l'historique distant.",
	"git push --set-upstream [remote] [branch]": "Configure la branche courante pour suivre une branche distante.",
	"git config --list": "Affiche la liste des configurations Git actuelles.",
	"git remote show [nom]": "Affiche des informations détaillées sur un dépôt distant.",
	"git remote prune [nom]": "Supprime les références distantes obsolètes pour le dépôt donné.",
	"git log --oneline": "Affiche l'historique des commits de façon condensée.",
	"git log -p": "Affiche les différences (patch) pour chaque commit de l'historique.",
	"git merge --squash [branch]": "Fusionne tous les commits d'une branche en un seul commit, sans créer de commit de fusion.",
	"git revert --no-edit [commit]": "Annule un commit sans ouvrir l'éditeur pour modifier le message de commit.",
	"git rebase -i [commit]": "Permet de réécrire l'historique via une rebase interactive à partir d'un commit donné.",
	"git config --global user.name [nom]": "Configure globalement le nom d'utilisateur pour Git.",
	"git config --global user.email [email]": "Configure globalement l'adresse email pour Git.",
	"git commit -a": "Ajoute automatiquement les fichiers modifiés (mais pas les nouveaux fichiers) et effectue un commit.",
	"git commit --allow-empty": "Crée un commit même si aucun changement n'a été détecté.",
	"git revert -n [commit]": "Prépare l'annulation d'un commit sans créer immédiatement un commit de revert.",
	"git push origin --delete [branch]": "Supprime une branche sur le dépôt distant.",
	"git log --stat": "Affiche l'historique des commits avec les statistiques de modifications par fichier.",
	"git shortlog -s": "Affiche un résumé chiffré des commits par auteur.",
	"git tag -a [tag] -m [message]": "Crée une étiquette annotée avec un message associé.",
	"git tag -l": "Liste toutes les étiquettes existantes dans le dépôt.",
	"git pull --ff-only": "Récupère et fusionne uniquement si la fusion est possible en fast-forward.",
}

const categorizeCommand = (command: string): string => {
	if (command.includes("branch") || command.includes("checkout")) return "branches"
	if (command.includes("commit") || command.includes("add") || command.includes("status")) return "commits"
	if (command.includes("merge") || command.includes("rebase") || command.includes("cherry")) return "fusion"
	if (command.includes("push") || command.includes("pull") || command.includes("fetch") || command.includes("clone") || command.includes("remote")) return "distant"
	if (command.includes("config") || command.includes("init")) return "config"
	if (command.includes("log") || command.includes("show") || command.includes("diff") || command.includes("reflog") || command.includes("blame")) return "historique"
	if (command.includes("stash") || command.includes("clean") || command.includes("reset") || command.includes("revert")) return "gestion"
	if (command.includes("tag") || command.includes("archive") || command.includes("submodule")) return "avance"
	return "autres"
}

const categoryConfig = {
	commits: { label: "Commits & Status", icon: GitCommit, accent: "border-gray-300 bg-gray-100 text-gray-600" },
	branches: { label: "Branches", icon: GitBranch, accent: "border-gray-300 bg-gray-100 text-gray-600" },
	fusion: { label: "Fusion & Rebase", icon: GitMerge, accent: "border-gray-300 bg-gray-100 text-gray-600" },
	distant: { label: "Dépôts Distants", icon: Server, accent: "border-gray-300 bg-gray-100 text-gray-600" },
	config: { label: "Configuration", icon: Settings, accent: "border-gray-300 bg-gray-100 text-gray-600" },
	historique: { label: "Historique & Logs", icon: Archive, accent: "border-gray-300 bg-gray-100 text-gray-600" },
	gestion: { label: "Gestion & Nettoyage", icon: Terminal, accent: "border-red-200 bg-[#fef2f2] text-[#e03838]" },
	avance: { label: "Fonctions Avancées", icon: Archive, accent: "border-gray-300 bg-gray-100 text-gray-600" },
	autres: { label: "Autres", icon: Terminal, accent: "border-gray-300 bg-gray-100 text-gray-600" },
}

export default function Glossaire() {
	const pathname = usePathname()
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [glossaireItems, setGlossaireItems] = useState<GlossaireItem[]>([])

	useEffect(() => {
		const items = Object.entries(glossaireData).map(([command, description]) => ({
			command,
			description,
			category: categorizeCommand(command),
		}))
		setGlossaireItems(items)
	}, [])

	const filteredItems = useMemo(() => {
		let items = glossaireItems
		if (selectedCategory) items = items.filter((item) => item.category === selectedCategory)
		if (searchTerm.length >= 2) {
			const s = searchTerm.toLowerCase()
			items = items.filter((item) => item.command.toLowerCase().includes(s) || item.description.toLowerCase().includes(s))
		}
		return items
	}, [searchTerm, glossaireItems, selectedCategory])

	const categoryCounts = useMemo(() => {
		const counts: Record<string, number> = {}
		glossaireItems.forEach((item) => { counts[item.category] = (counts[item.category] || 0) + 1 })
		return counts
	}, [glossaireItems])

	const categories = Object.keys(categoryConfig).filter((cat) => categoryCounts[cat] > 0)

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<h1 className="font-[family-name:var(--font-syne)] mb-4">Glossaire des commandes Git</h1>

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, duration: 0.4 }}
				className="p-5 bg-white border border-gray-200 rounded-xl mb-6"
			>
				<p className="text-base text-gray-700 m-0">
					Explorez <strong className="text-[#e03838]">{glossaireItems.length} commandes Git</strong> organisées par catégories.
					Utilisez la recherche ou filtrez par catégorie pour trouver rapidement ce dont vous avez besoin.
				</p>
			</motion.div>

			{/* Barre de recherche */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.4 }}
				className="relative mb-5"
			>
				<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
					<Search className="h-4 w-4 text-gray-400" />
				</div>
				<input
					type="text"
					className="block w-full pl-11 pr-11 py-3 border border-gray-200 focus:border-[#e03838] rounded-xl leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 transition-all duration-200 text-base bg-white"
					placeholder="Rechercher une commande (ex: commit, branch, push...)"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				{searchTerm.length > 0 && (
					<motion.button
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						onClick={() => setSearchTerm("")}
						className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#e03838] transition-colors"
						aria-label="Effacer la recherche"
					>
						<X className="h-4 w-4" />
					</motion.button>
				)}
			</motion.div>

			{/* Filtres par catégorie */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.4 }}
				className="mb-6"
			>
				<div className="flex items-center gap-2 mb-3">
					<Filter className="h-4 w-4 text-gray-400" />
					<h3 className="text-sm font-semibold text-gray-600 m-0">Filtrer par catégorie</h3>
				</div>
				<div className="flex flex-wrap gap-2">
					<motion.button
						whileTap={{ scale: 0.97 }}
						onClick={() => setSelectedCategory(null)}
						className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 border ${
							selectedCategory === null
								? "bg-[#e03838] text-white border-[#e03838]"
								: "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
						}`}
					>
						Toutes ({glossaireItems.length})
					</motion.button>
					{categories.map((cat) => {
						const config = categoryConfig[cat as keyof typeof categoryConfig]
						const Icon = config.icon
						return (
							<motion.button
								key={cat}
								whileTap={{ scale: 0.97 }}
								onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
								className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-200 border flex items-center gap-1.5 ${
									selectedCategory === cat
										? "bg-[#e03838] text-white border-[#e03838]"
										: "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
								}`}
							>
								<Icon className="h-3.5 w-3.5" />
								{config.label} ({categoryCounts[cat] || 0})
							</motion.button>
						)
					})}
				</div>
			</motion.div>

			{/* Résultats count */}
			{(searchTerm.length >= 2 || selectedCategory) && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="mb-4 text-sm text-gray-500"
				>
					<span className="font-bold text-[#e03838]">{filteredItems.length}</span>
					{" "}résultat{filteredItems.length !== 1 ? "s" : ""} trouvé{filteredItems.length !== 1 ? "s" : ""}
				</motion.div>
			)}

			{/* Liste des commandes */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-8">
				<AnimatePresence mode="popLayout">
					{filteredItems.map((item, index) => {
						const config = categoryConfig[item.category as keyof typeof categoryConfig]
						const Icon = config.icon
						return (
							<motion.div
								key={item.command}
								layout
								initial={{ opacity: 0, scale: 0.96 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.96 }}
								transition={{ delay: index * 0.015, duration: 0.25 }}
								className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#e03838] hover:shadow-sm transition-all duration-200"
							>
								<div className="flex items-start gap-3 mb-2">
									<div className="p-1.5 rounded-md bg-gray-100 flex-shrink-0">
										<Icon className="h-3.5 w-3.5 text-gray-600" />
									</div>
									<div className="flex-1 min-w-0">
										<code className="text-xs font-mono font-semibold text-gray-800 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md block overflow-x-auto">
											{item.command}
										</code>
									</div>
								</div>
								<p className="text-gray-600 text-sm leading-relaxed pl-9 m-0">{item.description}</p>
								<div className="mt-2 pl-9">
									<span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${config.accent}`}>
										{config.label}
									</span>
								</div>
							</motion.div>
						)
					})}
				</AnimatePresence>
			</div>

			{filteredItems.length === 0 && (
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					className="p-12 text-center bg-white border border-gray-200 rounded-xl"
				>
					<Search className="w-10 h-10 text-gray-300 mx-auto mb-4" />
					<h3 className="text-base font-semibold text-gray-600 mb-2 mt-0">Aucune commande trouvée</h3>
					<p className="text-gray-400 text-sm m-0">
						Essayez avec d'autres mots-clés ou{" "}
						<button
							onClick={() => { setSearchTerm(""); setSelectedCategory(null) }}
							className="text-[#e03838] hover:underline font-medium"
						>
							réinitialisez les filtres
						</button>
					</p>
				</motion.div>
			)}

			<PageNavigation currentPath={pathname} />
		</motion.div>
	)
}
