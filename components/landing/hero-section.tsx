"use client"

import { Button } from "@/components/ui/button"
import LoadingButton from "@/components/ui/loading-button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Smartphone, Zap, ArrowRight, Apple, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

// Animation variants
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { 
    scale: 1.08, 
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" } 
  },
  whileTap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

const floatingAnimation = {
  animate: {
    y: [-15, 15, -15],
    rotate: [-2, 2, -2],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.6)",
      "0 0 20px rgba(59, 130, 246, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

function CounterAnimation({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
}

export default function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <GradientBlob className="w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 -top-48 -right-48" />
      <GradientBlob className="w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 -bottom-32 -left-32" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -80 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 ml-2" />
              الحل الأمثل للمدفوعات الرقمية
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              وداعاً للحوالات البنكية!{" "}
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                استقبل مدفوعات عملائك بسهولة وأمان
              </motion.span>{" "}
              في الخليج.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              مع PayLink، أنشئ روابط دفع مخصصة لخدماتك ومنتجاتك في دقائق، واقبل المدفوعات من جميع عملائك في منطقة
              الخليج بكل يسر وأمان. وفر الوقت والجهد، وركز على تنمية أعمالك!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => router.push("/auth/signup")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 ml-2" />
                  جربها مجاناً
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="bg-white text-gray-900 border-white hover:bg-gray-100 hover:text-gray-800 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg"
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                  شاهد العرض التوضيحي
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                  <CounterAnimation end={1000} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">عميل راضٍ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">
                  <CounterAnimation end={50} suffix="K+" />
                </div>
                <div className="text-sm text-gray-400">معاملة شهرياً</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                  <CounterAnimation end={99} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">معدل النجاح</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <motion.div 
              className="relative max-w-md mx-auto"
              variants={floatingAnimation}
              animate="animate"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur-xl opacity-30"
                variants={pulseGlow}
                animate="animate"
              />
              
              <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      م
                    </motion.div>
                    <div className="text-right">
                      <h3 className="font-bold text-gray-900 text-lg">محمد أحمد</h3>
                      <p className="text-sm text-gray-500">متجر إلكتروني</p>
                    </div>
                  </div>

                  <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-3">
                    <motion.div
                      variants={scaleOnHover}
                      whileHover="whileHover"
                      whileTap="whileTap"
                      className="bg-blue-50 p-3 sm:p-4 rounded-xl flex items-center gap-3 cursor-pointer transition-smooth hover-lift"
                    >
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-medium text-sm sm:text-base">ادفع بالفيزا</span>
                    </motion.div>

                    <motion.div
                      variants={scaleOnHover}
                      whileHover="whileHover"
                      whileTap="whileTap"
                      className="bg-orange-50 p-3 sm:p-4 rounded-xl flex items-center gap-3 cursor-pointer transition-smooth hover-lift"
                    >
                      <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-medium text-sm sm:text-base">ماستركارد</span>
                    </motion.div>

                    <motion.div
                      variants={scaleOnHover}
                      whileHover="whileHover"
                      whileTap="whileTap"
                      className="bg-gray-50 p-3 sm:p-4 rounded-xl flex items-center gap-3 cursor-pointer transition-smooth hover-lift"
                    >
                      <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                        <Apple className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <span className="text-gray-900 font-medium text-sm sm:text-base">أبل باي</span>
                    </motion.div>

                    <motion.div
                      variants={scaleOnHover}
                      whileHover="whileHover"
                      whileTap="whileTap"
                      className="bg-green-50 p-3 sm:p-4 rounded-xl flex items-center gap-3 cursor-pointer transition-smooth hover-lift"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs">G</span>
                      </div>
                      <span className="text-gray-900 font-medium text-sm sm:text-base">جوجل باي</span>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition-all duration-300 shadow-lg">
                      ادفع الآن - 299 ريال
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}