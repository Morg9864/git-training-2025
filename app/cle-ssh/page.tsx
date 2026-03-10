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
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
			<h1 className="font-[family-name:var(--font-syne)]">Configuration d'une clé SSH pour GitHub</h1>

			<ContentSection delay={0.1}>
				<div className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-[#fef2f2] border-l-4 border-[#e03838] rounded-r-lg">
					<Lock className="h-5 w-5 text-[#e03838] flex-shrink-0 mt-0.5" />
					<div>
						<h4 className="font-semibold text-gray-900 mb-1 mt-0 text-sm">Pourquoi utiliser SSH ?</h4>
						<p className="text-gray-700 m-0 text-sm">
							L'utilisation d'une clé SSH permet une <strong className="text-[#e03838]">authentification sécurisée</strong> auprès de GitHub
							sans devoir saisir votre nom d'utilisateur et mot de passe à chaque opération. C'est plus sûr et plus pratique !
						</p>
					</div>
				</div>
			</ContentSection>

			<ContentSection delay={0.2}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
					<div className="p-2.5 bg-[#e03838] rounded-lg flex-shrink-0">
						<Key className="h-5 w-5 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-800 mt-0 mb-0">Étape 1 : Générer une clé SSH</h2>
				</div>

				{/* Linux/macOS */}
				<div className="mb-5">
					<div className="flex items-center gap-2 mb-3">
						<div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-lg">
							<Apple className="h-3.5 w-3.5 text-white" />
							<Laptop className="h-3.5 w-3.5 text-white" />
							<span className="text-white text-xs font-semibold">Linux / macOS</span>
						</div>
					</div>
					<CodeBlock code='ssh-keygen -t ed25519 -C "votre_email@example.com"' />
				</div>

				{/* Alternative RSA */}
				<div className="mb-5 p-4 bg-[#fef2f2] border border-red-100 rounded-lg">
					<div className="flex flex-col sm:flex-row items-start gap-3">
						<AlertCircle className="h-4 w-4 text-[#e03838] flex-shrink-0 mt-0.5" />
						<div className="flex-1 min-w-0">
							<p className="text-gray-900 mb-2 text-sm m-0">
								<strong>Compatibilité :</strong> Si ed25519 n'est pas supporté, utilisez RSA :
							</p>
							<CodeBlock code='ssh-keygen -t rsa -b 4096 -C "votre_email@example.com"' />
						</div>
					</div>
				</div>

				{/* Windows */}
				<div>
					<div className="flex items-center gap-2 mb-3">
						<div className="flex items-center gap-2 px-3 py-1.5 bg-[#e03838] rounded-lg">
							<Monitor className="h-3.5 w-3.5 text-white" />
							<span className="text-white text-xs font-semibold">Windows (Git Bash)</span>
						</div>
					</div>
					<CodeBlock code='ssh-keygen -t ed25519 -C "votre_email@example.com"' />
				</div>

				<div className="mt-4 p-4 bg-[#fef2f2] border-l-4 border-[#e03838] rounded-r-lg">
					<p className="text-gray-700 text-sm m-0">
						<strong>Astuce :</strong> Appuyez sur <code className="bg-red-100 px-1.5 py-0.5 rounded">Enter</code> trois fois
						pour accepter l'emplacement par défaut et ne pas définir de passphrase (ou définissez-en une pour plus de sécurité).
					</p>
				</div>
			</ContentSection>

			<ContentSection delay={0.3}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
					<div className="p-2.5 bg-[#e03838] rounded-lg flex-shrink-0">
						<Terminal className="h-5 w-5 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-800 mt-0 mb-0">Étape 2 : Ajouter la clé à l'agent SSH</h2>
				</div>

				<div className="mb-5">
					<div className="flex items-center gap-2 mb-3">
						<div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 rounded-lg">
							<Apple className="h-3.5 w-3.5 text-white" />
							<Laptop className="h-3.5 w-3.5 text-white" />
							<span className="text-white text-xs font-semibold">Linux / macOS</span>
						</div>
					</div>
					<CodeBlock
						code={`eval "$(ssh-agent -s)"\nssh-add ~/.ssh/id_ed25519`}
					/>
				</div>

				<div>
					<div className="flex items-center gap-2 mb-3">
						<div className="flex items-center gap-2 px-3 py-1.5 bg-[#e03838] rounded-lg">
							<Monitor className="h-3.5 w-3.5 text-white" />
							<span className="text-white text-xs font-semibold">Windows (PowerShell)</span>
						</div>
					</div>
					<CodeBlock
						code={`Get-Service -Name ssh-agent | Set-Service -StartupType Manual\nStart-Service ssh-agent\nssh-add /c/Users/votre_utilisateur/.ssh/id_ed25519`}
						language="powershell"
					/>
				</div>
			</ContentSection>

			<ContentSection delay={0.4}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
					<div className="p-2.5 bg-[#e03838] rounded-lg flex-shrink-0">
						<Shield className="h-5 w-5 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-800 mt-0 mb-0">Étape 3 : Ajouter la clé SSH à GitHub</h2>
				</div>

				<div className="space-y-5">
					{[
						{
							num: 1,
							title: "Copiez votre clé publique",
							content: (
								<>
									<CodeBlock code="cat ~/.ssh/id_ed25519.pub" />
									<p className="text-gray-600 mt-2 text-sm m-0">
										Cette commande affiche votre clé publique. Sélectionnez et copiez tout le contenu.
									</p>
								</>
							)
						},
						{
							num: 2,
							title: "Accédez aux paramètres GitHub",
							content: (
								<div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
									<p className="mb-2 text-sm m-0">Rendez-vous sur GitHub et naviguez vers :</p>
									<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs font-mono bg-white p-3 rounded-lg border border-gray-200 overflow-x-auto">
										<span className="text-[#e03838]">Settings</span>
										<span className="text-gray-400 hidden sm:inline">→</span>
										<span className="text-[#e03838]">SSH and GPG keys</span>
										<span className="text-gray-400 hidden sm:inline">→</span>
										<span className="bg-[#e03838] text-white px-2.5 py-1 rounded whitespace-nowrap">New SSH key</span>
									</div>
								</div>
							)
						},
						{
							num: 3,
							title: "Ajoutez votre clé",
							content: (
								<ul className="space-y-2 text-gray-700 m-0 p-0">
									{[
										"Donnez un titre descriptif (ex: \"Mon PC portable\")",
										"Collez votre clé publique dans le champ \"Key\"",
										"Cliquez sur \"Add SSH key\"",
									].map((item, i) => (
										<li key={i} className="flex items-start gap-2 text-sm m-0">
											<span className="text-[#e03838] mt-0.5 flex-shrink-0">✓</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							)
						},
					].map(({ num, title, content }) => (
						<div key={num} className="flex flex-col sm:flex-row gap-4">
							<div className="flex-shrink-0">
								<div className="w-9 h-9 bg-[#e03838] rounded-full flex items-center justify-center text-white font-bold text-sm">
									{num}
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<h4 className="font-semibold text-base mb-3 text-gray-800 mt-0">{title}</h4>
								{content}
							</div>
						</div>
					))}
				</div>
			</ContentSection>

			<ContentSection delay={0.5}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
					<div className="p-2.5 bg-[#e03838] rounded-lg flex-shrink-0">
						<CheckCircle className="h-5 w-5 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-800 mt-0 mb-0">Étape 4 : Tester la configuration</h2>
				</div>

				<CodeBlock code="ssh -T git@github.com" />

				<div className="mt-4 p-4 bg-[#fef2f2] border border-red-100 rounded-lg">
					<h4 className="font-semibold text-gray-900 mb-2 mt-0 flex items-center gap-2 text-sm">
						<CheckCircle className="h-4 w-4 text-[#e03838]" />
						Message de succès attendu :
					</h4>
					<pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs overflow-x-auto font-mono m-0 border-0">
						Hi votre_nom_utilisateur! You've successfully authenticated, but GitHub does not provide shell access.
					</pre>
					<p className="text-gray-700 mt-3 font-medium text-sm m-0">
						Si vous voyez ce message, votre clé SSH est correctement configurée !
					</p>
				</div>
			</ContentSection>

			<ContentSection delay={0.6}>
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
					<div className="p-2.5 bg-[#e03838] rounded-lg flex-shrink-0">
						<Terminal className="h-5 w-5 text-white" />
					</div>
					<h2 className="text-xl font-bold text-gray-800 mt-0 mb-0">Utiliser SSH avec vos dépôts</h2>
				</div>

				<p className="mb-4 text-gray-700 text-sm m-0">
					Pour configurer un dépôt existant afin qu'il utilise SSH au lieu de HTTPS :
				</p>

				<CodeBlock code="git remote set-url origin git@github.com:votre_nom_utilisateur/votre_depot.git" />

				<div className="mt-5 p-4 bg-[#fef2f2] border-l-4 border-[#e03838] rounded-r-lg">
					<h4 className="font-semibold text-gray-900 mb-2 mt-0 text-sm">Bon à savoir</h4>
					<ul className="space-y-2 text-gray-700 m-0 p-0">
						{[
							<>Lors du clonage, utilisez l'URL SSH : <code className="bg-red-100 px-1.5 py-0.5 rounded text-xs break-all">git@github.com:user/repo.git</code></>,
							"Vous pouvez avoir plusieurs clés SSH (une par machine)",
							"GitHub supporte aussi les clés SSH avec authentification à deux facteurs (2FA)",
						].map((item, i) => (
							<li key={i} className="flex items-start gap-2 text-sm m-0">
								<span className="text-[#e03838] flex-shrink-0">•</span>
								<span className="break-words">{item}</span>
							</li>
						))}
					</ul>
				</div>
			</ContentSection>

			<PageNavigation currentPath={pathname} />
		</motion.div>
	)
}
