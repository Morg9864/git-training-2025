"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      className="relative my-4 rounded-lg overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 py-2 text-xs flex justify-between items-center bg-gray-900 text-gray-400 font-mono">
        <span className="text-[#e03838] font-semibold uppercase tracking-wider">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 hover:text-white transition-colors text-xs"
          aria-label="Copier le code"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span className="text-green-400">Copié</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copier</span>
            </>
          )}
        </button>
      </div>
      <pre className="bg-[#111111] p-4 whitespace-pre-wrap break-words m-0 border-0 rounded-none">
        <code className="text-gray-100 font-mono text-sm leading-relaxed">{code}</code>
      </pre>
    </motion.div>
  )
}
