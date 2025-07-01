import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LoadingProvider from "@/components/providers/loading-provider"
import MainHeader from "@/components/main-header" // Import the new Header component
import MainFooter from "@/components/main-footer" // Import the new Footer component
import WhatsAppButton from "@/components/whatsapp-button" // Import the new WhatsApp button

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PayLink - روابط الدفع الذكية | اربط مشروعك بجميع وسائل الدفع",
  description: "أنشئ روابط دفع مخصصة بسهولة وأمان لمشروعك. اقبل المدفوعات من فيزا، ماستركارد، مدى، أبل باي، وجوجل باي في منطقة الخليج",
  keywords: "روابط الدفع، مدفوعات إلكترونية، فيزا، ماستركارد، مدى، أبل باي، جوجل باي، الخليج، السعودية",
  authors: [{ name: "PayLink Team" }],
  creator: "PayLink",
  publisher: "PayLink",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/paylink-logo.svg', type: 'image/svg+xml', sizes: '64x64' }
    ],
    apple: '/paylink-logo.svg',
  },
  openGraph: {
    title: "PayLink - روابط الدفع الذكية",
    description: "أنشئ روابط دفع مخصصة بسهولة وأمان لمشروعك",
    url: "https://paylink.sa",
    siteName: "PayLink",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayLink - روابط الدفع الذكية",
    description: "أنشئ روابط دفع مخصصة بسهولة وأمان لمشروعك",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <LoadingProvider>
          <MainHeader />
          <main>
            {children}
          </main>
          <MainFooter />
        </LoadingProvider>
        <WhatsAppButton /> {/* WhatsApp button outside LoadingProvider so it appears during loading */}
      </body>
    </html>
  )
}
