import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQPage() {
  const faqs = [
    {
      question: "ما هو PayLink وكيف يعمل؟",
      answer:
        "PayLink هي منصة دفع إلكترونية تتيح لك إنشاء روابط دفع مخصصة لمنتجاتك أو خدماتك. يمكنك مشاركة هذه الروابط مع عملائك عبر أي وسيلة (واتساب، بريد إلكتروني، وسائل تواصل اجتماعي)، ليتمكنوا من الدفع بسهولة وأمان. بعد الدفع، يتم تحويل الأموال إلى حسابك البنكي.",
    },
    {
      question: "ما هي طرق الدفع التي يدعمها PayLink؟",
      answer:
        "يدعم PayLink مجموعة واسعة من طرق الدفع الشائعة في منطقة الخليج والعالم، بما في ذلك بطاقات فيزا، ماستركارد، مدى، أبل باي، وجوجل باي، بالإضافة إلى طرق دفع محلية أخرى.",
    },
    {
      question: "هل PayLink آمن لمعاملات الدفع؟",
      answer:
        "نعم، الأمان هو أولويتنا القصوى. PayLink يلتزم بأعلى معايير الأمان العالمية، بما في ذلك معيار PCI DSS لتأمين بيانات البطاقات، ويدعم معايير الحماية الثلاثية (3D Secure) لجميع البطاقات لضمان أقصى درجات الأمان لمعاملاتك وعملائك.",
    },
    {
      question: "كم يستغرق تحويل الأموال إلى حسابي البنكي؟",
      answer:
        "بعد إتمام عملية الدفع بنجاح، يتم تحويل الأموال إلى حسابك البنكي المسجل خلال 3 أيام عمل، بعد خصم عمولة المنصة المتفق عليها.",
    },
    {
      question: "هل أحتاج إلى خبرة برمجية لاستخدام PayLink؟",
      answer:
        "لا، PayLink مصمم ليكون سهل الاستخدام ولا يتطلب أي خبرة برمجية أو تصميم. يمكنك إنشاء روابط الدفع وإدارة معاملاتك من خلال لوحة تحكم بسيطة وبديهية.",
    },
    {
      question: "هل يمكنني تخصيص رابط الدفع الخاص بي؟",
      answer:
        "نعم، يمكنك اختيار اسم مشروع مخصص لرابط الدفع الخاص بك (مثال: paylink.com/paylink/اسم-مشروعك)، مما يمنح علامتك التجارية مظهرًا احترافيًا وموثوقًا.",
    },
    {
      question: "كيف يمكنني التواصل مع دعم العملاء؟",
      answer:
        "يمكنك التواصل مع فريق دعم العملاء لدينا عبر صفحة 'تواصل معنا' على موقعنا، أو من خلال البريد الإلكتروني/رقم الهاتف الموضحين في قسم المساعدة. نحن هنا لمساعدتك في أي استفسارات أو مشكلات قد تواجهها.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4" dir="rtl">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">الأسئلة الشائعة</h1>
        <p className="text-xl text-gray-400 mb-12 text-center">
          ابحث عن إجابات لأسئلتك الأكثر شيوعًا حول PayLink وخدماتنا.
        </p>

        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">كل ما تحتاج لمعرفته عن PayLink</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                  <AccordionTrigger className="text-lg font-semibold text-right hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-right leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
