export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8" dir="rtl">
      <h1 className="text-5xl font-bold mb-8 text-center">كيف يعمل PayLink بالتفصيل؟</h1>
      <div className="text-lg text-gray-400 max-w-3xl mx-auto text-right space-y-6">
        <h2 className="text-3xl font-bold text-white">تسجيل الحساب:</h2>
        <ul className="list-disc list-inside space-y-2 pr-4">
          <li>يدخل العميل إلى موقع Paylink.</li>
          <li>يختار إنشاء حساب جديد.</li>
          <li>
            يملأ جميع البيانات المشروعة مثل:
            <ul className="list-circle list-inside space-y-1 pr-4 mt-2">
              <li>الاسم الكامل</li>
              <li>رقم الهوية أو السجل التجاري</li>
              <li>البريد الإلكتروني</li>
              <li>رقم الجوال</li>
              <li>بيانات الحساب البنكي لاستلام الأموال</li>
              <li>تفاصيل النشاط التجاري إذا كان يستخدمه كتاجر أو صاحب خدمة.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-white mt-8">توثيق الحساب:</h2>
        <ul className="list-disc list-inside space-y-2 pr-4">
          <li>يرفع المستندات المطلوبة (هوية/سجل تجاري).</li>
          <li>يتم التأكد من صحة البيانات وتفعيل الحساب.</li>
        </ul>

        <h2 className="text-3xl font-bold text-white mt-8">إنشاء رابط الدفع:</h2>
        <ul className="list-disc list-inside space-y-2 pr-4">
          <li>
            بعد تسجيل الدخول وتفعيل الحساب، ينشئ العميل رابط دفع خاص به عبر لوحة التحكم:
            <ul className="list-circle list-inside space-y-1 pr-4 mt-2">
              <li>يحدد المبلغ المطلوب.</li>
              <li>يكتب وصف الخدمة أو المنتج.</li>
              <li>ينشئ الرابط ويكون خاص به فقط.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-white mt-8">استلام رابط الدفع:</h2>
        <ul className="list-disc list-inside space-y-2 pr-4">
          <li>بعد إنشاء الرابط، يستلم العميل رابط الدفع الخاص به فورًا عبر الموقع.</li>
          <li>يستطيع نسخه ومشاركته مع عملائه عبر واتساب أو وسائل التواصل.</li>
        </ul>

        <h2 className="text-3xl font-bold text-white mt-8">استقبال المدفوعات:</h2>
        <ul className="list-disc list-inside space-y-2 pr-4">
          <li>العملاء يدفعون من خلال الرابط.</li>
          <li>يتم تحويل الأموال إلى حساب العميل البنكي المسجل بعد خصم عمولة المنصة.</li>
        </ul>

        <h2 className="text-3xl font-bold text-white mt-8">ملخص العملية:</h2>
        <p className="text-xl text-gray-300">
          Paylink يتيح للعميل تسجيل حساب موثق، إنشاء رابط دفع خاص به لأي مبلغ أو خدمة، ثم استلام هذا الرابط ومشاركته مع
          العملاء لاستقبال المدفوعات بأمان وسهولة.
        </p>
      </div>
    </div>
  )
}
