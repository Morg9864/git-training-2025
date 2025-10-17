"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import CodeBlock from "@/components/code-block"
import ContentSection from "@/components/content-section"
import { Key, Shield, Terminal, CheckCircle, Lock, AlertCircle, Laptop, Apple, Monitor } from "lucide-react"
import PageNavigation from "@/components/page-navigation"

export default function CleSsh() {
	const pathname = usePathname()

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
			<h1>Configuration d'une clé SSH pour GitHub</h1>

			<ContentSection delay={0.1}>
				<div className=" flex flex-col sm:flex-row items-start gap-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
					<Lock className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
					<div>
						<h4 className="font-semibold text-blue-900 mb-2">Pourquoi utiliser SSH ?</h4>
						<p className="text-blue-800">
							L'utilisation d'une clé SSH permet une <strong className="text-gradient">authentification sécurisée</strong> auprès de GitHub
							sans devoir saisir votre nom d'utilisateur et mot de passe à chaque opération. C'est plus sûr et plus pratique ! 🚀
						</p>
					</div>
				</div>
			</ContentSection>

			<ContentSection delay={0.2}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
					<div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex-shrink-0">
						<Key className="h-6 w-6 text-white" />
					</div>
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Étape 1 : Générer une clé SSH</h2>
				</div>

				{/* Linux/macOS */}
				<div className="mb-6">
					<div className="flex items-center gap-2 mb-3">
						<div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg">
							<Apple className="h-4 w-4 text-white" />
							<Laptop className="h-4 w-4 text-white" />
							<span className="text-white text-sm font-semibold">Linux / macOS</span>
						</div>
					</div>
					<CodeBlock code='ssh-keygen -t ed25519 -C "votre_email@example.com"' />
				</div>

				{/* Alternative RSA */}
				<div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
					<div className="flex flex-col sm:flex-row items-start gap-3">
						<AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
						<div className="flex-1 min-w-0">
							<p className="text-amber-900 mb-2">
								<strong>Compatibilité :</strong> Si ed25519 n'est pas supporté, utilisez RSA :
							</p>
							<CodeBlock code='ssh-keygen -t rsa -b 4096 -C "votre_email@example.com"' />
						</div>
					</div>
				</div>

				{/* Windows */}
				<div>
					<div className="flex items-center gap-2 mb-3">
						<div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg">
							<Monitor className="h-4 w-4 text-white" />
							<span className="text-white text-sm font-semibold">Windows (Git Bash)</span>
						</div>
					</div>
					<CodeBlock code='ssh-keygen -t ed25519 -C "votre_email@example.com"' />
				</div>

				<div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
					<p className="text-green-800">
						💡 <strong>Astuce :</strong> Appuyez sur <code className="bg-green-100 px-2 py-0.5 rounded">Enter</code> trois fois
						pour accepter l'emplacement par défaut et ne pas définir de passphrase (ou définissez-en une pour plus de sécurité).
					</p>
				</div>
			</ContentSection>

			<ContentSection delay={0.3}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
					<div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex-shrink-0">
						<Terminal className="h-6 w-6 text-white" />
					</div>
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Étape 2 : Ajouter la clé à l'agent SSH</h2>
				</div>

				{/* Linux/macOS */}
				<div className="mb-6">
					<div className="flex items-center gap-2 mb-3">
						<div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg">
							<Apple className="h-4 w-4 text-white" />
							<Laptop className="h-4 w-4 text-white" />
							<span className="text-white text-sm font-semibold">Linux / macOS</span>
						</div>
					</div>
					<CodeBlock
						code={`eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519`}
					/>
				</div>

				{/* Windows */}
				<div>
					<div className="flex items-center gap-2 mb-3">
						<div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg">
							<Monitor className="h-4 w-4 text-white" />
							<span className="text-white text-sm font-semibold">Windows (PowerShell)</span>
						</div>
					</div>
					<CodeBlock
						code={`Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
ssh-add /c/Users/votre_utilisateur/.ssh/id_ed25519`}
						language="powershell"
					/>
				</div>
			</ContentSection>

			<ContentSection delay={0.4}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
					<div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex-shrink-0">
						<Shield className="h-6 w-6 text-white" />
					</div>
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Étape 3 : Ajouter la clé SSH à GitHub</h2>
				</div>

				<div className="space-y-6">
					{/* Étape 1 */}
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="flex-shrink-0">
							<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
								1
							</div>
						</div>
						<div className="flex-1 min-w-0">
							<h4 className="font-semibold text-lg mb-2 text-gray-800">Copiez votre clé publique</h4>
							<CodeBlock code="cat ~/.ssh/id_ed25519.pub" />
							<p className="text-gray-600 mt-2 text-sm">
								Cette commande affiche votre clé publique. Sélectionnez et copiez tout le contenu.
							</p>
						</div>
					</div>

					{/* Étape 2 */}
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="flex-shrink-0">
							<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
								2
							</div>
						</div>
						<div className="flex-1 min-w-0">
							<h4 className="font-semibold text-lg mb-2 text-gray-800">Accédez aux paramètres GitHub</h4>
							<div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
								<p className="mb-2">Rendez-vous sur GitHub et naviguez vers :</p>
								<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm font-mono bg-white p-3 rounded-lg border border-gray-300 overflow-x-auto">
									<span className="text-blue-600">Settings</span>
									<span className="text-gray-400 hidden sm:inline">→</span>
									<span className="text-blue-600">SSH and GPG keys</span>
									<span className="text-gray-400 hidden sm:inline">→</span>
									<span className="bg-green-600 text-white px-3 py-1 rounded whitespace-nowrap">New SSH key</span>
								</div>
							</div>
						</div>
					</div>

					{/* Étape 3 */}
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="flex-shrink-0">
							<div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
								3
							</div>
						</div>
						<div className="flex-1 min-w-0">
							<h4 className="font-semibold text-lg mb-2 text-gray-800">Ajoutez votre clé</h4>
							<ul className="space-y-2 text-gray-700">
								<li className="flex items-start gap-2">
									<span className="text-green-500 mt-1 flex-shrink-0">✓</span>
									<span>Donnez un <strong>titre descriptif</strong> (ex: "Mon PC portable")</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-green-500 mt-1 flex-shrink-0">✓</span>
									<span>Collez votre clé publique dans le champ <strong>"Key"</strong></span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-green-500 mt-1 flex-shrink-0">✓</span>
									<span>Cliquez sur <strong className="text-green-600">"Add SSH key"</strong></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</ContentSection>

			<ContentSection delay={0.5}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
					<div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex-shrink-0">
						<CheckCircle className="h-6 w-6 text-white" />
					</div>
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Étape 4 : Tester la configuration</h2>
				</div>

				<CodeBlock code="ssh -T git@github.com" />

				<div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
					<h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
						<CheckCircle className="h-5 w-5" />
						Message de succès attendu :
					</h4>
					<pre className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm overflow-x-auto font-mono">
						Hi votre_nom_utilisateur! You've successfully authenticated, but GitHub does not provide shell access.
					</pre>
					<p className="text-green-900 mt-3 font-medium">
						🎉 Si vous voyez ce message, votre clé SSH est correctement configurée !
					</p>
				</div>
			</ContentSection>

			<ContentSection delay={0.6}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
					<div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex-shrink-0">
						<Terminal className="h-6 w-6 text-white" />
					</div>
					<h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Utiliser SSH avec vos dépôts</h2>
				</div>

				<p className="mb-4 text-gray-700">
					Pour configurer un dépôt existant afin qu'il utilise SSH au lieu de HTTPS :
				</p>

				<CodeBlock code="git remote set-url origin git@github.com:votre_nom_utilisateur/votre_depot.git" />

				<div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-xl">
					<h4 className="font-semibold text-purple-900 mb-2">💡 Bon à savoir</h4>
					<ul className="space-y-2 text-purple-800">
						<li className="flex items-start gap-2">
							<span className="text-purple-500 mt-1 flex-shrink-0">•</span>
							<span className="break-words">Lors du clonage, utilisez l'URL SSH : <code className="bg-purple-100 px-2 py-0.5 rounded text-sm break-all">git@github.com:user/repo.git</code></span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-purple-500 mt-1 flex-shrink-0">•</span>
							<span>Vous pouvez avoir plusieurs clés SSH (une par machine)</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-purple-500 mt-1 flex-shrink-0">•</span>
							<span>GitHub supporte aussi les clés SSH avec authentification à deux facteurs (2FA)</span>
						</li>
					</ul>
				</div>
			</ContentSection>

			<PageNavigation currentPath={pathname} />
		</motion.div>
	)
}

