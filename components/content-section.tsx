"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ContentSectionProps {
	children: ReactNode
	delay?: number
	className?: string
}

export default function ContentSection({ children, delay = 0, className = "" }: ContentSectionProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.4 }}
			className={`bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-5 ${className}`}
		>
			{children}
		</motion.section>
	)
}
