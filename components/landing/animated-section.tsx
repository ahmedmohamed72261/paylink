"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export default function AnimatedSection({
  children,
  className = "",
  id = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  )
}