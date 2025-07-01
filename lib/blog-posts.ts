export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  imageUrl: string // Added for images
  keywords: string[] // Added for SEO
  category: string // New field for categories
}

const generateMockPosts = (count: number): BlogPost[] => {
  const posts: BlogPost[] = []
  const mainKeywords = [
    "بوابة الدفع",
    "المدفوعات الإلكترونية",
    "حلول الدفع",
    "أمان المدفوعات",
    "التجارة الإلكترونية",
    "نمو الأعمال",
    "التحويلات المالية",
    "الابتكار المالي",
    "تجربة العملاء",
    "المدفوعات الرقمية",
  ]
  const benefitsOrContext = [
    "لمشروعك الصغير",
    "في منطقة الخليج",
    "لزيادة مبيعاتك",
    "دليل شامل",
    "أفضل الممارسات",
    "مستقبل المدفوعات",
    "تحديات وحلول",
    "نصائح أساسية",
    "كيف تختار؟",
    "تحسين الأداء",
  ]
  const categories = [
    "التكنولوجيا المالية",
    "ريادة الأعمال",
    "التجارة الإلكترونية",
    "الأمان الرقمي",
    "نصائح الأعمال",
    "المدفوعات",
  ]
  const imageQueries = [
    "digital payment solutions",
    "business growth chart",
    "secure online transactions",
    "fintech innovation",
    "e-commerce success",
    "mobile payment app",
    "global business network",
    "online payment gateway",
    "secure data transfer",
    "financial technology trends",
    "payment processing",
    "online store payments",
    "customer payment experience",
    "secure online shopping",
    "business finance management",
  ]

  for (let i = 1; i <= count; i++) {
    const keyword1 = mainKeywords[Math.floor(Math.random() * mainKeywords.length)]
    const keyword2 = benefitsOrContext[Math.floor(Math.random() * benefitsOrContext.length)]
    const category = categories[Math.floor(Math.random() * categories.length)]
    const title = `${keyword1}: ${keyword2}`

    const finalTitle = `(${i}) ${title.length > 50 ? title.substring(0, 47) + "..." : title}`

    const slug = `article-${i}`

    const excerpt = `اكتشف كيف يمكن لـ ${keyword1} أن يساهم في ${keyword2}، مع نصائح عملية لزيادة الكفاءة والأمان. هذه المقالة تقدم رؤى قيمة لأصحاب الأعمال في منطقة الخليج.`
    const content = `
      <p>مرحباً بك في مقالتنا الشاملة حول <strong>${keyword1}</strong> ودوره المحوري في <strong>${keyword2}</strong>. في عالم الأعمال اليوم، الذي يتسم بالتحول الرقمي السريع، أصبحت الحاجة إلى حلول دفع فعالة وآمنة أكثر أهمية من أي وقت مضى. هذه المقالة تستهدف أصحاب الأعمال في منطقة الخليج، وتقدم لهم رؤى قيمة حول كيفية الاستفادة القصوى من التكنولوجيا المالية لتعزيز عملياتهم التجارية.</p>
      
      <h2>أهمية ${keyword1} في ${keyword2}</h2>
      <p>يساهم ${keyword1} بشكل مباشر في تبسيط العمليات المالية، تقليل الأخطاء البشرية، وتوفير تجربة دفع سلسة وموثوقة للعملاء. هذا لا يعزز فقط رضا العملاء وولائهم، بل يفتح أيضاً آفاقاً جديدة للنمو والتوسع في ${keyword2}، مما يتيح لك الوصول إلى قاعدة عملاء أوسع وتجاوز الحدود الجغرافية التقليدية.</p>
      
      <h3>نصائح عملية لتعزيز ${keyword2} باستخدام ${keyword1}</h3>
      <ul>
        <li><strong>اختيار المنصة المناسبة:</strong> ابحث عن منصة دفع موثوقة تدعم احتياجات ${keyword2} الخاص بك وتوفر ميزات الأمان الضرورية، مثل التشفير المتطور والامتثال لمعايير PCI DSS العالمية.</li>
        <li><strong>تأمين بيانات العملاء:</strong> الأمان هو الأولوية القصوى. استخدم أحدث تقنيات التشفير والامتثال لمعايير الأمان العالمية لحماية معلومات الدفع الحساسة لعملائك وبناء الثقة.</li>
        <li><strong>تحسين تجربة المستخدم (UX):</strong> اجعل عملية الدفع سهلة وسريعة قدر الإمكان. كلما كانت العملية أبسط وأكثر سلاسة، قلّت معدلات التخلي عن السلة وزادت التحويلات والإيرادات.</li>
        <li><strong>مراقبة الأداء والتحليلات:</strong> تتبع مؤشرات الأداء الرئيسية (KPIs) لمدفوعاتك لتحديد مجالات التحسين واتخاذ قرارات مستنيرة مبنية على البيانات.</li>
        <li><strong>التوافق مع اللوائح المحلية:</strong> تأكد من أن حلول الدفع التي تستخدمها تتوافق مع جميع اللوائح والقوانين المحلية في منطقة الخليج لضمان الامتثال الكامل وتجنب أي مشكلات قانونية.</li>
      </ul>
      
      <h4>مستقبل المدفوعات في الخليج</h4>
      <p>تشهد منطقة الخليج نمواً هائلاً في قطاع التكنولوجيا المالية، مع تزايد الاعتماد على المدفوعات الرقمية. ${keyword1} ليس مجرد اتجاه، بل هو ضرورة استراتيجية لأي ${keyword2} يسعى للنجاح والازدهار في هذا السوق الديناميكي. من خلال تبني أفضل الممارسات والاستفادة من التقنيات المتاحة، يمكنك ضمان مستقبل مالي مزدهر لعملك وتحقيق ميزة تنافسية.</p>
      
      <p>نأمل أن تكون هذه المقالة قد قدمت لك رؤى قيمة. لا تتردد في استكشاف المزيد من المقالات في مدونتنا للحصول على نصائح وإرشادات إضافية حول تحسين عمليات الدفع ونمو أعمالك.</p>
    `
    const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split("T")[0] // Simulate different dates
    const imageUrl = `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(
      imageQueries[Math.floor(Math.random() * imageQueries.length)],
    )}`
    const keywords = [
      keyword1,
      keyword2.replace("لمشروعك الصغير", "المشاريع الصغيرة").replace("في منطقة الخليج", "الخليج"),
      category, // Add category as a keyword/tag
      "مدفوعات الخليج",
      "PayLink",
      "حلول دفع",
      "أمان المدفوعات",
      "التكنولوجيا المالية",
      "ريادة الأعمال في الخليج",
      "بوابة دفع إلكترونية",
      "زيادة المبيعات",
    ]

    posts.push({ id: String(i), title: finalTitle, slug, excerpt, content, date, imageUrl, keywords, category })
  }
  return posts
}

const allBlogPosts: BlogPost[] = generateMockPosts(100)

export const getBlogPosts = (): BlogPost[] => {
  return allBlogPosts
}

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return allBlogPosts.find((post) => post.slug === slug)
}
