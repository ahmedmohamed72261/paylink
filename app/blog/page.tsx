"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getBlogPosts } from "@/lib/blog-posts"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BlogPage() {
  const allPosts = useMemo(() => getBlogPosts(), []) // Fetch all posts once
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTag, setSelectedTag] = useState<string>("all")

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const uniqueCategories = new Set(allPosts.map((post) => post.category))
    return ["all", ...Array.from(uniqueCategories).sort()]
  }, [allPosts])

  const popularTags = useMemo(() => {
    const tagCounts: { [key: string]: number } = {}
    allPosts.forEach((post) => {
      post.keywords.forEach((keyword) => {
        tagCounts[keyword] = (tagCounts[keyword] || 0) + 1
      })
    })
    // Sort tags by frequency and take top N (e.g., 10)
    return Object.entries(tagCounts)
      .sort(([, countA], [, countB]) => countB - countA)
      .slice(0, 10)
      .map(([tag]) => tag)
  }, [allPosts])

  // Filtered posts based on selected category and tag
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
      const matchesTag = selectedTag === "all" || post.keywords.includes(selectedTag)
      return matchesCategory && matchesTag
    })
  }, [allPosts, selectedCategory, selectedTag])

  const handleClearFilters = () => {
    setSelectedCategory("all")
    setSelectedTag("all")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      <header className="py-20 px-6 bg-gray-800 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">مدونة PayLink</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          ابقَ على اطلاع بأحدث الأخبار، النصائح، والتحليلات في عالم المدفوعات الرقمية وريادة الأعمال في الخليج.
        </p>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Filters Section */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="اختر تصنيف" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "جميع التصنيفات" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters Button */}
            {(selectedCategory !== "all" || selectedTag !== "all") && (
              <Button
                variant="outline"
                onClick={handleClearFilters}
                className="bg-gray-700 hover:bg-gray-600 border-gray-600 text-white"
              >
                مسح الفلاتر
              </Button>
            )}
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className={`cursor-pointer px-3 py-1 text-sm ${
                  selectedTag === tag
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 border-gray-600 text-gray-300"
                }`}
                onClick={() => setSelectedTag(selectedTag === tag ? "all" : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-400 text-xl py-10">عذراً، لا توجد مقالات مطابقة لمعايير الفلترة.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-gray-800 border-gray-700 text-white overflow-hidden hover:border-blue-500 transition-colors duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{post.date}</CardDescription>
                  <Badge className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full self-start">
                    {post.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="secondary"
                        className="bg-gray-700 text-gray-300 hover:bg-gray-600 cursor-pointer"
                        onClick={() => setSelectedTag(keyword)}
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Button
                      variant="outline"
                      className="w-full bg-gray-700 hover:bg-gray-600 border-gray-600 text-white"
                    >
                      اقرأ المزيد
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-10 px-4 border-t border-gray-800 text-center">
        <p className="text-gray-400">© 2024 paylink. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  )
}
