"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Search } from "lucide-react"
import CodeBlock from "@/components/code-block"
import PageNavigation from "@/components/page-navigation"
import glossaireData from "@/lib/glossaire.json"

type GlossaireItem = {
	command: string
	description: string
}

export default function Glossaire() {
	const pathname = usePathname()
	const [searchTerm, setSearchTerm] = useState("")
	const [glossaireItems, setGlossaireItems] = useState<GlossaireItem[]>([])
	const [filteredItems, setFilteredItems] = useState<GlossaireItem[]>([])

	useEffect(() => {
		const items = Object.entries(glossaireData).map(([command, description]) => ({
			command,
			description,
		}))
		setGlossaireItems(items)
		setFilteredItems(items)
	}, [])

	useEffect(() => {
		if (searchTerm.length < 3) {
			setFilteredItems(glossaireItems)
			return
		}

		const searchTermLower = searchTerm.toLowerCase()
		const filtered = glossaireItems.filter(
			(item) =>
				item.command.toLowerCase().includes(searchTermLower) ||
				item.description.toLowerCase().includes(searchTermLower),
		)
		setFilteredItems(filtered)
	}, [searchTerm, glossaireItems])

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
			<h1>Glossaire des commandes Git</h1>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, duration: 0.5 }}
				className="mb-8"
			>
				<p className="text-lg">
					Ce glossaire regroupe les principales commandes Git et leurs descriptions. Utilisez la barre de recherche
					ci-dessous pour filtrer les commandes par nom ou description.
				</p>
			</motion.div>

			<div className="relative mb-8">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<Search className="h-5 w-5 text-gray-400" />
				</div>
				<input
					type="text"
					className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F24141] focus:border-[#F24141] transition duration-150 ease-in-out"
					placeholder="Rechercher une commande ou une description..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				{searchTerm.length > 0 && (
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center">
						<button
							onClick={() => setSearchTerm("")}
							className="text-gray-400 hover:text-gray-600"
							aria-label="Effacer la recherche"
						>
							×
						</button>
					</div>
				)}
			</div>

			{searchTerm.length >= 3 && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-sm text-gray-600">
					{filteredItems.length} résultat{filteredItems.length !== 1 ? "s" : ""} trouvé
					{filteredItems.length !== 1 ? "s" : ""}
				</motion.div>
			)}

			<div className="space-y-8">
				{filteredItems.map((item, index) => (
					<motion.div
						key={item.command}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 + index * 0.03, duration: 0.5 }}
						className="border-b border-gray-200 pb-6 last:border-b-0"
					>
						<CodeBlock code={item.command} />
						<p className="mt-2 text-gray-700">{item.description}</p>
					</motion.div>
				))}

				{filteredItems.length === 0 && (
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 text-gray-500">
						Aucune commande ne correspond à votre recherche.
					</motion.div>
				)}
			</div>

			<PageNavigation currentPath={pathname} />
		</motion.div>
	)
}

