"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"

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

export default function CTASection() {
  const router = useRouter()

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <GradientBlob className="w-96 h-96 bg-gradient-to-r from-white/10 to-white/5 -top-48 -left-48" />
      <GradientBlob className="w-64 h-64 bg-gradient-to-r from-white/5 to-white/10 -bottom-32 -right-32" />
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          ابدأ رحلتك مع <span className="text-yellow-300">PayLink</span> اليوم
        </h2>
        <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
          انضم إلى آلاف التجار الذين يستخدمون PayLink لقبول المدفوعات بسهولة وأمان
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <Card className="glass border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">ابدأ مجاناً</h3>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-right focus-enhanced transition-colors"
                />
                <Input
                  type="tel"
                  placeholder="رقم الجوال"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-right focus-enhanced transition-colors"
                />
                <Input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 text-right focus-enhanced transition-colors"
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={() => router.push("/auth/signup")}
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5 ml-2" />
                    ابدأ مجاناً - 14 يوم تجربة
                  </Button>
                </motion.div>
              </form>
              <p className="text-sm mt-6 opacity-80">
                بالتسجيل، أنت توافق على{" "}
                <Link href="/terms" className="underline hover:no-underline transition-all">
                  شروط الخدمة
                </Link>{" "}
                و{" "}
                <Link href="/privacy" className="underline hover:no-underline transition-all">
                  سياسة الخصوصية
                </Link>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}