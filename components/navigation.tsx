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
  Home,
} from "lucide-react"
import Logo from "./logo"

const navItems = [
  { path: "/", label: "Accueil", icon: <Home className="w-4 h-4" /> },
  { path: "/introduction", label: "Introduction", icon: <BookOpen className="w-4 h-4" /> },
  { path: "/bases", label: "Bases de Git", icon: <GitCommit className="w-4 h-4" /> },
  { path: "/creation-projet", label: "Création Projet", icon: <CirclePlus className="w-4 h-4" /> },
  { path: "/branches", label: "Branches et Fusion", icon: <GitMerge className="w-4 h-4" /> },
  { path: "/conflits", label: "Gestion des conflits", icon: <GitFork className="w-4 h-4" /> },
  { path: "/pull-request", label: "Pull Requests", icon: <GitPullRequest className="w-4 h-4" /> },
  { path: "/bonnes-pratiques", label: "Bonnes pratiques", icon: <CheckCircle className="w-4 h-4" /> },
  { path: "/outils", label: "Outils", icon: <Wrench className="w-4 h-4" /> },
  { path: "/glossaire", label: "Glossaire", icon: <BookOpen className="w-4 h-4" /> },
  { path: "/cle-ssh", label: "Clé SSH", icon: <Key className="w-4 h-4" /> },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <motion.button
          onClick={toggleMenu}
          className="p-2.5 rounded-lg shadow-md bg-white border border-gray-200"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={20} className="text-gray-700" /> : <Menu size={20} className="text-gray-700" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-30 md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-40 md:hidden overflow-y-auto border-r border-gray-200"
            >
              <div className="p-6 pt-16">
                <div className="mb-6">
                  <Logo />
                </div>
                <nav>
                  <ul className="space-y-1 p-0">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.path
                      return (
                        <motion.li
                          key={item.path}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.04 }}
                          className="p-0 m-0"
                        >
                          <Link
                            href={item.path}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                              isActive
                                ? "bg-[#e03838] text-white"
                                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                            onClick={toggleMenu}
                          >
                            <span className={isActive ? "text-white" : "text-gray-400"}>
                              {item.icon}
                            </span>
                            {item.label}
                            {isActive && (
                              <motion.div
                                layoutId="mobile-active-pill"
                                className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80"
                              />
                            )}
                          </Link>
                        </motion.li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 min-h-screen relative flex-shrink-0">
        <div className="fixed w-64 h-full bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-5">
            {/* Formation badge */}
            <div className="mb-6 px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50">
              <p className="text-xs font-bold text-[#e03838] tracking-widest uppercase mb-0.5">Formation</p>
              <p className="text-xs text-gray-500">Git & GitHub · 11 chapitres</p>
            </div>

            <nav>
              <ul className="space-y-0.5 p-0">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="p-0 m-0"
                    >
                      <Link
                        href={item.path}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                          isActive
                            ? "bg-[#e03838] text-white"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        <span className={`flex-shrink-0 ${isActive ? "text-white" : "text-gray-400"}`}>
                          {item.icon}
                        </span>
                        <span className="flex-1 leading-tight">{item.label}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"
                          />
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            {/* Footer info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-500">
                <Github className="w-3.5 h-3.5" />
                <p className="text-xs">Formation complète Git & GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
