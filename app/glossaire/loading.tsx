"use client"

import { motion } from "framer-motion"

export default function Loading() {
	return (
		<div className="max-w-5xl mx-auto">
			<div className="animate-pulse space-y-8">
				{/* Titre skeleton */}
				<div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl w-2/3"></div>

				{/* Description skeleton */}
				<div className="glass-card p-6 space-y-3">
					<div className="h-6 bg-gray-200 rounded-lg w-full"></div>
					<div className="h-6 bg-gray-200 rounded-lg w-4/5"></div>
				</div>

				{/* Barre de recherche skeleton */}
				<div className="h-14 glass-card rounded-2xl"></div>

				{/* Filtres skeleton */}
				<div className="flex flex-wrap gap-3">
					{[1, 2, 3, 4, 5].map((i) => (
						<div key={i} className="h-10 w-32 bg-gray-200 rounded-xl"></div>
					))}
				</div>

				{/* Cartes skeleton */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: i * 0.05 }}
							className="glass-card p-5 space-y-3"
						>
							<div className="flex items-start gap-3">
								<div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex-shrink-0"></div>
								<div className="flex-1">
									<div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
								</div>
							</div>
							<div className="space-y-2 pl-11">
								<div className="h-4 bg-gray-200 rounded w-full"></div>
								<div className="h-4 bg-gray-200 rounded w-5/6"></div>
								<div className="h-6 bg-gray-100 rounded-full w-32 mt-3"></div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Loading indicator animé */}
			<div className="fixed bottom-8 right-8">
				<motion.div
					animate={{
						rotate: 360,
					}}
					transition={{
						duration: 1,
						repeat: Infinity,
						ease: "linear",
					}}
					className="w-12 h-12 border-4 border-gray-200 border-t-red-500 rounded-full"
				></motion.div>
			</div>
		</div>
	)
}