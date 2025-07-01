"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const pricingPlans = [
  {
    name: "أساسي",
    price: "20",
    features: ["حتى 100 معاملة شهرياً", "جميع وسائل الدفع", "دعم فني"],
    popular: false,
    gradient: "from-gray-700 to-gray-800"
  },
  {
    name: "متقدم",
    price: "50",
    features: ["حتى 500 معاملة شهرياً", "تقارير مفصلة", "دعم أولوية"],
    popular: true,
    gradient: "from-blue-600 to-purple-600"
  },
  {
    name: "شركات",
    price: "150",
    features: ["معاملات غير محدودة", "API متقدم", "مدير حساب مخصص"],
    popular: false,
    gradient: "from-gray-700 to-gray-800"
  }
]

export default function PricingSection() {
  const router = useRouter()

  return (
    <section id="pricing" className="py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto text-center">
        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-6 px-4 py-2 text-sm font-medium">
          <DollarSign className="w-4 h-4 ml-2" />
          أسعار تنافسية
        </Badge>
        <h2 className="text-4xl font-bold mb-4 text-white">خطط بسيطة وواضحة</h2>
        <p className="text-xl text-gray-400 mb-16">اختر الخطة المناسبة لك</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, y: -10 }} 
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className={`p-8 ${plan.popular ? `bg-gradient-to-br ${plan.gradient}` : 'bg-gray-900/50'} border ${plan.popular ? 'border-blue-500' : 'border-gray-700'} relative glass hover:shadow-2xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 right-1/2 transform translate-x-1/2 bg-green-500 text-white px-3 py-1">
                    الأكثر شعبية
                  </Badge>
                )}
                <CardContent className="p-0 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-white">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-lg text-gray-400 mr-2">ريال/شهر</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-right">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => router.push("/auth/signup")}
                      className={`w-full ${plan.popular ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'} py-3 rounded-xl font-semibold transition-all duration-300`}
                    >
                      {plan.name === "شركات" ? "تواصل معنا" : "ابدأ الآن"}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}