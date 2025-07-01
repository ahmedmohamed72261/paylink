"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Shield, Zap, Sparkles, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function HowItWorksSection() {
  const router = useRouter()

  return (
    <section id="how-it-works" className="py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="space-y-4 max-w-md mx-auto">
              <motion.div 
                className="bg-gray-800 rounded-lg p-4 border border-gray-700 glass"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <motion.div 
                    className="h-3 bg-gray-600 rounded w-3/4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-600 rounded w-2/3"></div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm opacity-80">رابط الدفع</p>
                    <p className="font-bold text-lg">PayLink</p>
                  </div>
                  <CreditCard className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <motion.div 
                    className="h-2 bg-white/20 rounded w-full"
                    animate={{ width: ["100%", "80%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="h-2 bg-white/20 rounded w-2/3"></div>
                </div>
              </motion.div>

              <div className="flex gap-3">
                <motion.div 
                  className="bg-blue-500 rounded-lg p-3 flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded h-16 mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-2 bg-white/30 rounded"></div>
                    <div className="h-2 bg-white/30 rounded w-2/3"></div>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-green-500 rounded-lg p-3 flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded h-16 mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-2 bg-white/30 rounded"></div>
                    <div className="h-2 bg-white/30 rounded w-2/3"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-6 px-4 py-2 text-sm font-medium">
              <Layers className="w-4 h-4 ml-2" />
              سهولة الإنشاء
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-green-400">أنشئ رابط دفعك في 3 خطوات بسيطة</span>
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              مع PayLink، يمكنك إنشاء صفحة دفع مخصصة لخدماتك أو منتجاتك في دقائق معدودة، دون الحاجة لخبرة برمجية أو
              تصميم. ابدأ في استقبال المدفوعات اليوم!
            </p>

            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">سرعة فائقة</h4>
                  <p className="text-gray-400 text-sm">رابط دفع جاهز في دقائق</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">سهولة الاستخدام</h4>
                  <p className="text-gray-400 text-sm">واجهة بسيطة وبديهية</p>
                </div>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => router.push("/auth/signup")}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 ml-2" />
                ابدأ الآن
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}