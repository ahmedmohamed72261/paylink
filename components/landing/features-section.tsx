"use client"

import { Badge } from "@/components/ui/badge"
import { CreditCard, Smartphone, Shield, Zap, Link2, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "روابط دفع فورية",
    description: "أنشئ روابط دفع جاهزة للاستخدام في دقائق",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20"
  },
  {
    icon: Smartphone,
    title: "تجربة دفع سلسة",
    description: "محسّن للعمل بسلاسة على جميع الأجهزة المحمولة",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    icon: Shield,
    title: "أمان وموثوقية عالمية",
    description: "حماية عالية المستوى لبياناتك ومدفوعاتك",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20"
  },
  {
    icon: CreditCard,
    title: "جميع وسائل الدفع",
    description: "فيزا، مدى، ماستركارد، أبل باي، جوجل باي",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20"
  },
  {
    icon: Link2,
    title: "رابط مخصص لعلامتك التجارية",
    description: "رابط دفع مخصص يظهر شعارك واسم مشروعك",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20"
  },
  {
    icon: Clock,
    title: "استلام الأموال خلال 3 أيام",
    description: "تحويل سريع لأموالك إلى حسابك البنكي",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  }
]

export default function FeaturesSection() {
  return (
    <section id="why-paylink" className="py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto text-center">
        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-6 px-4 py-2 text-sm font-medium">
          <Star className="w-4 h-4 ml-2" />
          مميزات استثنائية
        </Badge>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
          لماذا <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">PayLink</span> هو خيارك الأفضل؟
        </h2>
        <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
          نقدم لك حلولاً متطورة ومبتكرة لتسهيل عملية قبول المدفوعات وتنمية أعمالك
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-2xl border ${feature.bgColor} ${feature.borderColor} backdrop-blur-sm hover:shadow-2xl transition-all duration-300 group glass`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}