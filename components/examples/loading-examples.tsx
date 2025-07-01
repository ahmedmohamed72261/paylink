"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LoadingButton from "@/components/ui/loading-button"
import LoadingSpinner from "@/components/ui/loading-spinner"
import SectionLoader from "@/components/ui/section-loader"
import { Zap, Download, Send, CreditCard } from "lucide-react"

export default function LoadingExamples() {
  const [buttonLoading, setButtonLoading] = useState(false)
  const [sectionLoading, setSectionLoading] = useState(false)

  const handleButtonClick = () => {
    setButtonLoading(true)
    setTimeout(() => setButtonLoading(false), 3000)
  }

  const handleSectionToggle = () => {
    setSectionLoading(!sectionLoading)
  }

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        أمثلة على مكونات التحميل
      </h1>

      {/* Loading Spinners */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Loading Spinners</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <LoadingSpinner size="sm" variant="primary" />
            <span className="text-gray-300">Small Primary</span>
          </div>
          <div className="flex items-center gap-4">
            <LoadingSpinner size="md" variant="gradient" />
            <span className="text-gray-300">Medium Gradient</span>
          </div>
          <div className="flex items-center gap-4">
            <LoadingSpinner size="lg" variant="white" />
            <span className="text-gray-300">Large White</span>
          </div>
          <div className="flex items-center gap-4">
            <LoadingSpinner size="xl" variant="secondary" />
            <span className="text-gray-300">Extra Large Secondary</span>
          </div>
        </CardContent>
      </Card>

      {/* Loading Buttons */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Loading Buttons</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <LoadingButton
              loading={buttonLoading}
              onClick={handleButtonClick}
              className="bg-blue-600 hover:bg-blue-700"
              loadingText="جاري التحميل..."
            >
              <Zap className="w-4 h-4 ml-2" />
              ابدأ الآن
            </LoadingButton>

            <LoadingButton
              loading={buttonLoading}
              onClick={handleButtonClick}
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
              loadingText="تحميل..."
            >
              <Download className="w-4 h-4 ml-2" />
              تحميل
            </LoadingButton>

            <LoadingButton
              loading={buttonLoading}
              onClick={handleButtonClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600"
              loadingText="إرسال..."
            >
              <Send className="w-4 h-4 ml-2" />
              إرسال
            </LoadingButton>
          </div>
        </CardContent>
      </Card>

      {/* Section Loader */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Section Loader</CardTitle>
          <button
            onClick={handleSectionToggle}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            {sectionLoading ? "إيقاف التحميل" : "بدء التحميل"}
          </button>
        </CardHeader>
        <CardContent>
          <SectionLoader
            isLoading={sectionLoading}
            variant="overlay"
            loadingText="تحميل المحتوى..."
          >
            <div className="p-8 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">محتوى القسم</h3>
              <p className="text-gray-300 mb-4">
                هذا مثال على محتوى القسم الذي يمكن أن يكون له حالة تحميل.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-600 p-4 rounded">
                  <CreditCard className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="text-white font-semibold">وسائل الدفع</h4>
                  <p className="text-gray-300 text-sm">جميع البطاقات مدعومة</p>
                </div>
                <div className="bg-gray-600 p-4 rounded">
                  <Zap className="w-8 h-8 text-green-400 mb-2" />
                  <h4 className="text-white font-semibold">سرعة فائقة</h4>
                  <p className="text-gray-300 text-sm">معالجة فورية</p>
                </div>
              </div>
            </div>
          </SectionLoader>
        </CardContent>
      </Card>

      {/* Skeleton Loading */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Skeleton Loading</CardTitle>
        </CardHeader>
        <CardContent>
          <SectionLoader
            isLoading={sectionLoading}
            variant="skeleton"
            className="space-y-4"
          >
            <div className="space-y-4">
              <div className="h-8 bg-gray-600 rounded w-3/4"></div>
              <div className="h-4 bg-gray-600 rounded w-full"></div>
              <div className="h-4 bg-gray-600 rounded w-5/6"></div>
              <div className="h-4 bg-gray-600 rounded w-2/3"></div>
            </div>
          </SectionLoader>
        </CardContent>
      </Card>
    </div>
  )
}