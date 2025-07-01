import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4" dir="rtl">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">تواصل معنا</h1>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          فريق PayLink مستعد دائمًا لمساعدتك. سواء كان لديك سؤال، اقتراح، أو تحتاج إلى دعم فني، لا تتردد في التواصل معنا.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information Card */}
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">معلومات الاتصال</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">البريد الإلكتروني</h3>
                  <p className="text-gray-300">support@paylink.com</p>
                  <p className="text-gray-400 text-sm">نرد عادةً خلال 24 ساعة عمل.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">رقم الهاتف</h3>
                  <p className="text-gray-300">+966 50 123 4567</p>
                  <p className="text-gray-400 text-sm">متاح من الأحد إلى الخميس، 9 صباحًا - 5 مساءً (بتوقيت الرياض).</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">عنوان المكتب</h3>
                  <p className="text-gray-300">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                  <p className="text-gray-400 text-sm">نحن نعمل عن بعد بشكل أساسي، يرجى تحديد موعد مسبق للزيارة.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">ساعات العمل</h3>
                  <p className="text-gray-300">الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً</p>
                  <p className="text-gray-300">الجمعة - السبت: مغلق</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    الاسم الكامل
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="أدخل اسمك"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 text-right"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    البريد الإلكتروني
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 text-right"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    الموضوع
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="موضوع رسالتك"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 text-right"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    رسالتك
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 text-right"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Important Links Section */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">روابط مهمة قد تهمك</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Link href="/faq" className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold text-lg mb-2">الأسئلة الشائعة</h3>
              <p className="text-gray-400 text-sm">ابحث عن إجابات لأسئلتك المتكررة.</p>
            </Link>
            <Link href="/help" className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold text-lg mb-2">مركز المساعدة</h3>
              <p className="text-gray-400 text-sm">إرشادات مفصلة وحلول للمشكلات.</p>
            </Link>
            <Link href="/terms" className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="font-semibold text-lg mb-2">شروط الخدمة</h3>
              <p className="text-gray-400 text-sm">تعرف على شروط استخدام منصتنا.</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Note: Label component is typically imported from "@/components/ui/label"
// Adding a placeholder here if it's not already in the project's shadcn/ui components.
// If it exists, this can be removed.
function Label({ htmlFor, children, className }: { htmlFor: string; children: React.ReactNode; className?: string }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  )
}
