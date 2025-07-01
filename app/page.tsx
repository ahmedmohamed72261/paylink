"use client"

import { useState, useEffect } from "react"
import { 
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  PartnersSection,
  PricingSection,
  CTASection,
  AnimatedSection
} from "@/components/landing"
import SectionLoader from "@/components/ui/section-loader"
import { useSectionLoading } from "@/hooks/use-loading"

export default function PayLinkLanding() {
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    features: false,
    howItWorks: false,
    partners: false,
    pricing: false,
    cta: false
  })

  // Simulate section loading with staggered delays
  useEffect(() => {
    const loadSections = async () => {
      const sections = ['hero', 'features', 'howItWorks', 'partners', 'pricing', 'cta']
      
      for (let i = 0; i < sections.length; i++) {
        setTimeout(() => {
          setSectionsLoaded(prev => ({
            ...prev,
            [sections[i]]: true
          }))
        }, i * 500) // Stagger loading by 500ms
      }
    }

    // Start loading sections after a brief delay
    setTimeout(loadSections, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden scrollbar-thin" dir="rtl">
      {/* Hero Section */}
      <AnimatedSection>
        <SectionLoader 
          isLoading={!sectionsLoaded.hero} 
          variant="replace"
          loadingText="تحميل الصفحة الرئيسية..."
          size="lg"
        >
          <HeroSection />
        </SectionLoader>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection delay={0.2}>
        <SectionLoader 
          isLoading={!sectionsLoaded.features} 
          variant="skeleton"
          loadingText="تحميل المميزات..."
        >
          <FeaturesSection />
        </SectionLoader>
      </AnimatedSection>

      {/* How it Works Section */}
      <AnimatedSection delay={0.4}>
        <SectionLoader 
          isLoading={!sectionsLoaded.howItWorks} 
          variant="overlay"
          loadingText="تحميل طريقة العمل..."
        >
          <HowItWorksSection />
        </SectionLoader>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection delay={0.6}>
        <SectionLoader 
          isLoading={!sectionsLoaded.partners} 
          variant="replace"
          loadingText="تحميل الشركاء..."
        >
          <PartnersSection />
        </SectionLoader>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection delay={0.8}>
        <SectionLoader 
          isLoading={!sectionsLoaded.pricing} 
          variant="skeleton"
          loadingText="تحميل الأسعار..."
        >
          <PricingSection />
        </SectionLoader>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={1.0}>
        <SectionLoader 
          isLoading={!sectionsLoaded.cta} 
          variant="overlay"
          loadingText="تحميل نموذج التسجيل..."
        >
          <CTASection />
        </SectionLoader>
      </AnimatedSection>
    </div>
  )
}