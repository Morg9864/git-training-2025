"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import CodeBlock from "@/components/code-block"
import { Key, Shield, Terminal, CheckCircle } from "lucide-react"
import PageNavigation from "@/components/page-navigation"

export default function CleSsh() {
	const pathname = usePathname()

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
			<h1>Configuration d'une clé SSH pour GitHub</h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1, duration: 0.5 }}
				className="text-lg"
			>
				L'utilisation d'une clé SSH permet une authentification sécurisée auprès de GitHub sans devoir saisir votre nom
				d'utilisateur et mot de passe à chaque opération.
			</motion.p>

			<section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="mb-8"
				>
					<h3 className="flex items-center">
						<Key className="mr-2 text-[#8C2626]" /> Générer une clé SSH
					</h3>

					<p className="font-medium mt-4 mb-2">Linux/macOS :</p>
					<CodeBlock code='ssh-keygen -t ed25519 -C "votre_email@example.com"' />

					<p className="mt-4 mb-2">Si nécessaire (compatibilité), utilisez :</p>
					<CodeBlock code='ssh-keygen -t rsa -b 4096 -C "votre_email@example.com"' />

					<p className="font-medium mt-4 mb-2">Windows (Git Bash) :</p>
					<CodeBlock code='ssh-keygen -t ed25519 -C "votre_email@example.com"' />
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
						<Terminal className="mr-2 text-[#8C2626]" /> Ajouter la clé à l'agent SSH
					</h3>

					<p className="font-medium mt-4 mb-2">Linux/macOS :</p>
					<CodeBlock
						code={`eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519`}
					/>

					<p className="font-medium mt-4 mb-2">Windows :</p>
					<CodeBlock
						code={`Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
ssh-add /c/Users/votre_utilisateur/.ssh/id_ed25519`}
						language="powershell"
					/>
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
						<Shield className="mr-2 text-[#8C2626]" /> Ajouter la clé SSH à GitHub
					</h3>

					<ol className="list-decimal pl-6 space-y-4 mt-4">
						<li>
							<p>Copiez votre clé publique :</p>
							<CodeBlock code="cat ~/.ssh/id_ed25519.pub" />
						</li>
						<li>
							<p>
								Rendez-vous sur GitHub : <strong>Settings → SSH and GPG keys → New SSH key</strong>.
							</p>
						</li>
						<li>
							<p>Collez la clé, ajoutez un titre descriptif, puis validez.</p>
						</li>
					</ol>
				</motion.div>
			</section>

			<section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="mb-8"
				>
					<h3 className="flex items-center">
						<CheckCircle className="mr-2 text-[#8C2626]" /> Tester la configuration SSH
					</h3>

					<CodeBlock code="ssh -T git@github.com" />

					<p className="mt-3">Un message de succès indique une configuration correcte.</p>
				</motion.div>
			</section>

			<section>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.5 }}
				>
					<h3 className="flex items-center">
						<Terminal className="mr-2 text-[#8C2626]" /> Utiliser SSH avec Git
					</h3>

					<p className="mt-3 mb-2">Pour configurer votre dépôt avec SSH :</p>

					<CodeBlock code="git remote set-url origin git@github.com:votre_nom_utilisateur/votre_depot.git" />
				</motion.div>
			</section>

			<PageNavigation currentPath={pathname} />
		</motion.div>
	)
}

