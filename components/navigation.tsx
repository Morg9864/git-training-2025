"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import PageNavigation from "@/components/page-navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  GitCommit,
  GitMerge,
  GitPullRequest,
  CirclePlus,
  GitFork,
  Github,
  BookOpen,
  CheckCircle,
  Wrench,
  Key,
} from "lucide-react"
import Logo from "./logo"

const navItems = [
  { path: "/", label: "Accueil", icon: <Github className="w-5 h-5 mr-2" /> },
  { path: "/introduction", label: "1. Introduction", icon: <BookOpen className="w-5 h-5 mr-2" /> },
  { path: "/bases", label: "2. Bases de Git", icon: <GitCommit className="w-5 h-5 mr-2" /> },
  { path: "/creation-projet", label: "3.  Création Projet", icon: <CirclePlus className="w-5 h-5 mr-2" /> },
  { path: "/branches", label: "4. Branches et Fusion", icon: <GitMerge className="w-5 h-5 mr-2" /> },
  { path: "/conflits", label: "5. Gestion des conflits", icon: <GitFork className="w-5 h-5 mr-2" /> },
  { path: "/pull-request", label: "6. Pull Requests", icon: <GitPullRequest className="w-5 h-5 mr-2" /> },
  { path: "/bonnes-pratiques", label: "7. Bonnes pratiques", icon: <CheckCircle className="w-5 h-5 mr-2" /> },
  { path: "/outils", label: "8. Outils recommandés", icon: <Wrench className="w-5 h-5 mr-2" /> },
  { path: "/glossaire", label: "9. Glossaire", icon: <BookOpen className="w-5 h-5 mr-2" /> },
  { path: "/cle-ssh", label: "Configuration clé SSH", icon: <Key className="w-5 h-5 mr-2" /> },
  
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full shadow-lg"
          style={{ backgroundColor: "#F24141", color: "white" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-white z-40 md:hidden overflow-y-auto pt-16 pb-8 px-4"
          >
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`nav-link flex items-center ${pathname === item.path ? "active" : ""}`}
                      onClick={toggleMenu}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:block w-64 bg-gray-50 min-h-screen p-6 shadow-md">
        <div className="mb-8">
          <Logo />
        </div>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`nav-link flex items-center ${pathname === item.path ? "active" : ""}`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
