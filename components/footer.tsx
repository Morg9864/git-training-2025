import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
	return (
		<footer className="mt-16 py-6 border-t border-gray-200">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-gray-600 text-sm">© {new Date().getFullYear()} Formation Git & GitHub</p>
					</div>

					<div className="flex items-center">
						<p className="text-gray-600 text-sm mr-2">Créé par Morgan Phemba</p>
						<Link
							href="https://github.com/Morg9864"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-[#F24141] transition-colors"
							aria-label="Profil GitHub de Morgan Phemba"
						>
							<Github size={20} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

