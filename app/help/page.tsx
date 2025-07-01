"use client" // This page will contain client-side interactivity for search/filters if implemented later

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, Search } from "lucide-react"

// Re-export faqs from app/faq/page.tsx if it's not already exported
// For this example, I'll assume it's available or copy it here for self-containment.
// If app/faq/page.tsx exports `faqs`, then `import { faqs } from "@/app/faq/page"` is correct.
// Otherwise, I'd define them here or create a shared lib.
// For now, let's assume it's exported from app/faq/page.tsx.

export default function HelpCenterPage() {
  // Placeholder for search functionality
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const searchTerm = (event.currentTarget.elements.namedItem("search") as HTMLInputElement).value
    console.log("Searching for:", searchTerm)
    // Implement actual search logic here (e.g., filter FAQs, redirect to search results)
  }

  const faqsData = [
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
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      {/* Hero Section */}
      <header className="py-20 px-6 bg-gray-800 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">مركز مساعدة PayLink</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          ابحث عن الإجابات، الإرشادات، والحلول لمساعدتك على تحقيق أقصى استفادة من PayLink.
        </p>
        <form onSubmit={handleSearch} className="mt-8 max-w-md mx-auto relative">
          <Input
            id="search"
            name="search"
            type="search"
            placeholder="ابحث عن سؤال أو موضوع..."
            className="w-full pr-10 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 text-right"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-gray-600 text-gray-400"
          >
            <Search className="w-5 h-5" />
          </Button>
        </form>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* FAQ Section */}
        <Card className="bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">الأسئلة الشائعة</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqsData.map((faq, index) => (
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

        {/* Still Need Help Section */}
        <Card className="bg-gray-800 border-gray-700 text-white text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">هل ما زلت بحاجة إلى مساعدة؟</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              إذا لم تجد الإجابة التي تبحث عنها في الأسئلة الشائعة، فلا تتردد في التواصل مع فريق الدعم لدينا.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
              <Link href="/contact" passHref>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  تواصل عبر البريد الإلكتروني
                </Button>
              </Link>
              <Link href="tel:+966501234567" passHref>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  اتصل بنا
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
