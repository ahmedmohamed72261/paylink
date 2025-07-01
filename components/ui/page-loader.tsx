"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Zap, CreditCard, Shield, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

interface PageLoaderProps {
  isLoading: boolean
  onComplete?: () => void
}

const loadingSteps = [
  { icon: Zap, text: "تحضير PayLink...", color: "text-blue-400" },
  { icon: Shield, text: "تأمين الاتصال...", color: "text-green-400" },
  { icon: CreditCard, text: "تحميل وسائل الدفع...", color: "text-purple-400" },
  { icon: Sparkles, text: "جاهز للانطلاق!", color: "text-yellow-400" }
]

export default function PageLoader({ isLoading, onComplete }: PageLoaderProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    const stepDuration = 800
    const totalDuration = stepDuration * loadingSteps.length

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (totalDuration / 50))
        return Math.min(newProgress, 100)
      })
    }, 50)

    // Step animation
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = prev + 1
        if (nextStep >= loadingSteps.length) {
          clearInterval(stepInterval)
          clearInterval(progressInterval)
          setTimeout(() => {
            onComplete?.()
          }, 500)
          return prev
        }
        return nextStep
      })
    }, stepDuration)

    return () => {
      clearInterval(stepInterval)
      clearInterval(progressInterval)
    }
  }, [isLoading, onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          
          {/* Animated Background Blobs */}
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ top: "10%", right: "10%" }}
          />
          
          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ bottom: "10%", left: "10%" }}
          />

          <div className="relative z-10 text-center max-w-md mx-auto px-6">
            {/* PayLink Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100
              }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <CreditCard className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* PayLink Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-bold text-white mb-2"
            >
              PayLink
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 mb-12"
            >
              منصة المدفوعات الذكية
            </motion.p>

            {/* Loading Steps */}
            <div className="space-y-6 mb-8">
              {loadingSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = index <= currentStep
                const isCompleted = index < currentStep
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.3,
                      x: 0,
                      scale: isActive ? 1 : 0.95
                    }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.4
                    }}
                    className="flex items-center gap-4 justify-center"
                  >
                    <motion.div
                      animate={isActive ? {
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{
                        rotate: { duration: 1, repeat: isActive && !isCompleted ? Infinity : 0 },
                        scale: { duration: 0.5 }
                      }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isCompleted 
                          ? 'bg-green-500' 
                          : isActive 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                            : 'bg-gray-700'
                      }`}
                    >
                      {isCompleted ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          ✓
                        </motion.div>
                      ) : (
                        <Icon className="w-4 h-4 text-white" />
                      )}
                    </motion.div>
                    
                    <span className={`text-sm font-medium ${
                      isActive ? step.color : 'text-gray-500'
                    }`}>
                      {step.text}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm text-gray-400"
            >
              {Math.round(progress)}% مكتمل
            </motion.p>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
                style={{
                  left: `${20 + i * 10}%`,
                  bottom: "20%"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}