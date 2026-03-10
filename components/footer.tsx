import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
	return (
		<footer className="relative mt-16 py-6 border-t border-gray-200 bg-white">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center gap-3">
					<p className="text-gray-500 text-sm">
						© {new Date().getFullYear()} Formation Git & GitHub
					</p>
					<div className="flex items-center gap-3">
						<p className="text-gray-500 text-sm">Créé par <span className="text-gray-700 font-medium">Morgan Phemba</span></p>
						<Link
							href="https://github.com/Morg9864"
							target="_blank"
							rel="noopener noreferrer"
							className="group p-2 rounded-lg border border-gray-200 bg-white hover:bg-[#e03838] hover:border-[#e03838] transition-all duration-200"
							aria-label="Profil GitHub de Morgan Phemba"
						>
							<Github size={16} className="text-gray-500 group-hover:text-white transition-colors duration-200" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
