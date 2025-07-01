import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center" dir="rtl">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-blue-400">404</h1>
          <h2 className="text-2xl font-semibold">الصفحة غير موجودة</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            عذراً، لا يمكننا العثور على الصفحة التي تبحث عنها. قد تكون الصفحة قد تم نقلها أو حذفها.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              العودة للصف��ة الرئيسية
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            <Link href="/contact">
              تواصل معنا
            </Link>
          </Button>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            إذا كنت تعتقد أن هذا خطأ، يرجى{" "}
            <Link href="/contact" className="text-blue-400 hover:underline">
              التواصل مع فريق الدعم
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}