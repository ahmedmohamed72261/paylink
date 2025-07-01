"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Zap, Sparkles } from "lucide-react"

export default function MainHeader() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "/#why-paylink", label: "لماذا PayLink؟" },
    { href: "/#how-it-works", label: "كيف يعمل" },
    { href: "/#partners", label: "شركاؤنا" },
    { href: "/#pricing", label: "الأسعار" },
    { href: "/help", label: "المساعدة" },
    { href: "/blog", label: "المدونة" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' 
          : 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/30'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  PayLink
                </span>
                <span className="text-xs text-gray-400 -mt-1 hidden sm:block">
                  روابط الدفع الذكية
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  className="text-gray-400 hover:text-white transition-all duration-300 relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={() => router.push("/contact")}
              className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-300"
            >
              تواصل معنا
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => router.push("/about")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Zap className="w-4 h-4 ml-2" />
                اعرف المزيد
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-800"
            >
              <nav className="flex flex-col gap-4 pt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
                  <Button
                    onClick={() => {
                      router.push("/contact")
                      setIsMenuOpen(false)
                    }}
                    variant="ghost"
                    className="text-gray-400 hover:text-white hover:bg-gray-800 py-3 rounded-xl"
                  >
                    تواصل معنا
                  </Button>
                  <Button
                    onClick={() => {
                      router.push("/about")
                      setIsMenuOpen(false)
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    <Zap className="w-4 h-4 ml-2" />
                    اعرف المزيد
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
