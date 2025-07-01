"use client"

import { motion } from "framer-motion"
import LoadingSpinner from "./loading-spinner"
import { cn } from "@/lib/utils"

interface SectionLoaderProps {
  isLoading: boolean
  children: React.ReactNode
  className?: string
  loadingText?: string
  variant?: "overlay" | "replace" | "skeleton"
  size?: "sm" | "md" | "lg"
}

export default function SectionLoader({
  isLoading,
  children,
  className,
  loadingText = "جاري التحميل...",
  variant = "overlay",
  size = "md"
}: SectionLoaderProps) {
  if (variant === "replace" && isLoading) {
    return (
      <div className={cn("flex flex-col items-center justify-center py-12", className)}>
        <LoadingSpinner size={size} variant="gradient" className="mb-4" />
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 text-sm"
        >
          {loadingText}
        </motion.p>
      </div>
    )
  }

  if (variant === "skeleton" && isLoading) {
    return (
      <div className={cn("space-y-4", className)}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="h-4 bg-gray-700 rounded animate-pulse"
            style={{ width: `${100 - i * 10}%` }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.2 
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={cn("relative", className)}>
      {children}
      
      {isLoading && variant === "overlay" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg"
        >
          <div className="text-center">
            <LoadingSpinner size={size} variant="white" className="mb-3 mx-auto" />
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-sm"
            >
              {loadingText}
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  )
}