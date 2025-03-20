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
      className="relative my-6 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="px-4 py-2 text-sm flex justify-between items-center"
        style={{ backgroundColor: "#0D0D0D", color: "white" }}
      >
        <span>{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-300 hover:text-white transition-colors"
          aria-label="Copier le code"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      <pre className="bg-gray-100 p-4 whitespace-pre-wrap break-words">
        <code className="text-[#0D0D0D]">{code}</code>
      </pre>
    </motion.div>
  )
}
