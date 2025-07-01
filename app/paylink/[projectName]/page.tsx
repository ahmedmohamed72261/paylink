interface PaymentLinkPageProps {
  params: {
    projectName: string
  }
}

export default function PaymentLinkPage({ params }: PaymentLinkPageProps) {
  const { projectName } = params

  // Payment link functionality has been removed
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8" dir="rtl">
      <h1 className="text-5xl font-bold mb-8 text-center">خدمة روابط الدفع غير متاحة حالياً</h1>
      <p className="text-xl text-gray-400 max-w-2xl text-center">
        تم إزالة تكامل الدفع من التطبيق. يرجى التواصل مع المطور لمزيد من المعلومات.
      </p>
      <a href="/" className="mt-8 text-blue-500 hover:underline">
        العودة إلى الصفحة الرئيسية
      </a>
    </div>
  )
}
