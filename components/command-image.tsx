"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

interface CommandImageProps {
  command: string
  width?: number
  height?: number
}

export default function CommandImage({ command, width = 600, height = 300 }: CommandImageProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Extraire le nom de la commande principale (ex: "git clone [url]" -> "clone")
  const commandName = command.split(" ")[1]?.replace(/[[\]]/g, "") || command.split(" ")[0]

  const imagePath = `/images/git-${commandName}.png`

  return (
    <div className="my-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
      >
        <span className="text-[#8C2626]">{isVisible ? "Cacher le résultat" : "Voir le résultat"}</span>
        {isVisible ? (
          <ChevronUp className="h-5 w-5 text-[#8C2626]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#8C2626]" />
        )}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <Image
                src={imagePath || "/placeholder.svg"}
                alt={`Résultat de la commande ${command}`}
                width={width}
                height={height}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

