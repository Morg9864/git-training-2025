import Link from "next/link"
import { Github, Heart } from "lucide-react"

export default function Footer() {
	return (
		<footer className="relative mt-16 py-8 border-t border-gray-200/50 backdrop-blur-sm bg-white/30">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-2">
						<p className="text-gray-600 text-sm">
							© {new Date().getFullYear()} Formation Git & GitHub
						</p>
					</div>
					<div className="flex items-center gap-3">
						<p className="text-gray-600 text-sm">Créé par Morgan Phemba</p>
						<Link
							href="https://github.com/Morg9864"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative p-2 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 transition-all duration-300"
							aria-label="Profil GitHub de Morgan Phemba"
						>
							<Github size={20} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
							<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
								Voir sur GitHub
							</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

