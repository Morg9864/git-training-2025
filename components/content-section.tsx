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
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.5 }}
			className={`glass-card p-6 md:p-8 mb-6 hover:shadow-xl transition-shadow duration-300 ${className}`}
		>
			{children}
		</motion.section>
	)
}
