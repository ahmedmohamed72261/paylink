import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog-posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// لتوليد بيانات وصفية ديناميكية (SEO)
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "مقالة غير موجودة",
      description: "الصفحة التي تبحث عنها غير موجودة.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.imageUrl,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  }
}

// لتوليد مسارات ثابتة (SSG) لجميع المقالات
export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound() // يعرض صفحة 404 إذا لم يتم العثور على المقالة
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <header className="py-16 px-6 bg-gray-800 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-400">{post.date}</p>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div
          className="prose prose-invert prose-lg text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-12 text-center">
          <Link href="/blog" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
              العودة إلى المدونة <ArrowRight className="inline-block mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-10 px-4 border-t border-gray-800 text-center">
        <p className="text-gray-400">© 2024 paylink. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  )
}
