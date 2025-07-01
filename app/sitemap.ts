import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paylink.sa"

  try {
    const staticPages = [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 1,
      },
      {
        url: `${baseUrl}/privacy`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      },
      {
        url: `${baseUrl}/terms`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      },
      {
        url: `${baseUrl}/help`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/templates`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/api-docs`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
      {
        url: `${baseUrl}/careers`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.4,
      },
      {
        url: `${baseUrl}/status`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.3,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/how-it-works`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 0.9,
      },
    ]

    // Try to include dynamic blog post pages, but handle errors gracefully
    let blogPosts: MetadataRoute.Sitemap = []
    try {
      const { getBlogPosts } = require("@/lib/blog-posts")
      blogPosts = getBlogPosts().map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "weekly" as const,
        priority: 0.9,
      }))
    } catch (error) {
      console.warn("Could not load blog posts for sitemap:", error)
      // Continue without blog posts if there's an error
    }

    return [...staticPages, ...blogPosts]
  } catch (error) {
    console.error("Error generating sitemap:", error)
    // Return minimal sitemap if there's an error
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 1,
      },
    ]
  }
}
