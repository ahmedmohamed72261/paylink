"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "secondary" | "white" | "gradient"
  className?: string
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6", 
  lg: "w-8 h-8",
  xl: "w-12 h-12"
}

const variantClasses = {
  primary: "border-blue-500",
  secondary: "border-gray-400",
  white: "border-white",
  gradient: "border-transparent bg-gradient-to-r from-blue-500 to-purple-500"
}

export default function LoadingSpinner({ 
  size = "md", 
  variant = "primary", 
  className 
}: LoadingSpinnerProps) {
  return (
    <motion.div
      className={cn(
        "border-2 border-t-transparent rounded-full",
        sizeClasses[size],
        variant !== "gradient" && variantClasses[variant],
        variant === "gradient" && "bg-gradient-to-r from-blue-500 to-purple-500 rounded-full",
        className
      )}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
      style={variant === "gradient" ? {
        mask: "radial-gradient(circle at center, transparent 40%, black 40%)",
        WebkitMask: "radial-gradient(circle at center, transparent 40%, black 40%)"
      } : {}}
    />
  )
}