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
  { path: "/", label: "Accueil", icon: <Home className="w-5 h-5" />, color: "red" },
  { path: "/introduction", label: "Introduction", icon: <BookOpen className="w-5 h-5" />, color: "blue" },
  { path: "/bases", label: "Bases de Git", icon: <GitCommit className="w-5 h-5" />, color: "orange" },
  { path: "/creation-projet", label: "Création Projet", icon: <CirclePlus className="w-5 h-5" />, color: "green" },
  { path: "/branches", label: "Branches et Fusion", icon: <GitMerge className="w-5 h-5" />, color: "purple" },
  { path: "/conflits", label: "Gestion des conflits", icon: <GitFork className="w-5 h-5" />, color: "orange" },
  { path: "/pull-request", label: "Pull Requests", icon: <GitPullRequest className="w-5 h-5" />, color: "purple" },
  { path: "/bonnes-pratiques", label: "Bonnes pratiques", icon: <CheckCircle className="w-5 h-5" />, color: "green" },
  { path: "/outils", label: "Outils", icon: <Wrench className="w-5 h-5" />, color: "blue" },
  { path: "/glossaire", label: "Glossaire", icon: <BookOpen className="w-5 h-5" />, color: "indigo" },
  { path: "/cle-ssh", label: "Clé SSH", icon: <Key className="w-5 h-5" />, color: "yellow" },
]

const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", hover: "hover:bg-red-100" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hover: "hover:bg-blue-100" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hover: "hover:bg-orange-100" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", hover: "hover:bg-green-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hover: "hover:bg-purple-100" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", hover: "hover:bg-indigo-100" },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200", hover: "hover:bg-yellow-100" },
}

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
          className="p-3 rounded-xl shadow-lg bg-white/90 backdrop-blur-xl border border-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </motion.div>
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              className="fixed inset-y-0 left-0 w-80 bg-white/95 backdrop-blur-xl z-40 md:hidden overflow-y-auto shadow-2xl border-r border-gray-200/50"
            >
              <div className="p-6 pt-20">
                <div className="mb-6">
                  <Logo />
                </div>
                <nav>
                  <ul className="space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = pathname === item.path
                      const colors = colorClasses[item.color]
                      return (
                        <motion.li
                          key={item.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.path}
                            className={`
                              group flex items-center gap-3 px-4 py-3 rounded-xl
                              transition-all duration-300 border
                              ${isActive
                                ? `${colors.bg} ${colors.text} ${colors.border} shadow-md scale-105`
                                : `hover:bg-gray-50 text-gray-700 border-transparent ${colors.hover}`
                              }
                            `}
                            onClick={toggleMenu}
                          >
                            <div className={`${isActive ? colors.text : 'text-gray-400 group-hover:text-gray-600'} transition-colors`}>
                              {item.icon}
                            </div>
                            <span className="font-medium text-sm">{item.label}</span>
                            {isActive && (
                              <motion.div
                                layoutId="mobile-active-pill"
                                className="ml-auto w-2 h-2 rounded-full bg-current"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
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
      <div className="hidden md:block w-72 min-h-screen relative">
        <div className="fixed w-72 h-full bg-white/90 backdrop-blur-xl border-r border-gray-200/50 shadow-xl overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <Logo />
            </div>

            {/* Progress indicator */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50">
              <p className="text-xs font-semibold text-blue-600 mb-1">FORMATION GIT & GITHUB</p>
              <p className="text-xs text-gray-600">11 chapitres • Débutant</p>
            </div>

            <nav>
              <ul className="space-y-1.5">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path
                  const colors = colorClasses[item.color]
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Link
                        href={item.path}
                        className={`
                          group relative flex items-center gap-3 px-4 py-3 rounded-xl
                          transition-all duration-300 border overflow-hidden
                          ${isActive
                            ? `${colors.bg} ${colors.text} ${colors.border} shadow-md`
                            : `hover:bg-gray-50 text-gray-700 border-transparent hover:border-gray-200`
                          }
                        `}
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="desktop-active-bg"
                            className={`absolute inset-0 ${colors.bg} -z-10`}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}

                        {/* Icon */}
                        <div className={`
                          flex-shrink-0 transition-all duration-300
                          ${isActive
                            ? `${colors.text} scale-110`
                            : 'text-gray-400 group-hover:text-gray-600 group-hover:scale-110'
                          }
                        `}>
                          {item.icon}
                        </div>

                        {/* Label */}
                        <span className="font-medium text-sm flex-1">{item.label}</span>

                        {/* Active dot */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-current"
                            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            {/* Footer info */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50">
              <div className="flex items-center gap-2 mb-2">
                <Github className="w-4 h-4 text-gray-600" />
                <p className="text-xs font-semibold text-gray-700">Formation complète</p>
              </div>
              <p className="text-xs text-gray-600">
                Apprenez Git et GitHub de A à Z avec des exemples pratiques
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
