"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"

const partnerLogos = [
  { src: "/visa-logo-new.png", alt: "Visa Logo" },
  { src: "/mastercard-logo-new.png", alt: "Mastercard Logo" },
  { src: "/apple-pay-logo-new.png", alt: "Apple Pay Logo" },
  { src: "/google-pay-logo-new.png", alt: "Google Pay Logo" },
  { src: "/mada-logo-transparent.png", alt: "Mada Logo" },
  { src: "/urpay-logo.png", alt: "Urpay Logo" },
  { src: "/sadad-logo.png", alt: "Sadad Logo" },
  { src: "/tamara-logo.png", alt: "Tamara Logo" },
  { src: "/stc-pay-logo.png", alt: "STC Pay Logo" }
]

export default function PartnersSection() {
  const router = useRouter()

  return (
    <section id="partners" className="py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -80 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6 px-4 py-2 text-sm font-medium">
            <Users className="w-4 h-4 ml-2" />
            شراكات استراتيجية
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="text-blue-500">شركاؤنا</span> في النجاح
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
            نحن نفخر بشراكاتنا مع أبرز مزودي خدمات الدفع لضمان تجربة دفع سلسة وآمنة لعملائك في جميع أنحاء الخليج.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => router.push("/auth/signup")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Users className="w-5 h-5 ml-2" />
              انضم إلينا
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="p-8 bg-gray-800/50 border border-gray-700 shadow-2xl glass">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-center max-w-6xl mx-auto">
                {partnerLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.5,
                      y: 50,
                      rotateY: -90
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      y: 0,
                      rotateY: 0
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: index * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -8,
                      rotateY: 5,
                      rotateX: 5,
                      transition: { 
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="group cursor-pointer"
                  >
                    <motion.div
                      className="relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={150}
                        height={75}
                        className="mx-auto opacity-70 group-hover:opacity-100 transition-all duration-300 filter group-hover:brightness-110 group-hover:drop-shadow-lg"
                      />
                      
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}