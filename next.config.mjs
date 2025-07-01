/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure proper routing for deployment
  trailingSlash: false,
  // Handle redirects and rewrites
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  },
  // Output configuration for static export if needed
  output: 'standalone',
}

export default nextConfig
