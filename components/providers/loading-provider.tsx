"use client"

import { createContext, useContext, useState, useEffect } from "react"
import PageLoader from "@/components/ui/page-loader"
import { usePageLoading } from "@/hooks/use-loading"

interface LoadingContextType {
  isPageLoading: boolean
  setPageLoading: (loading: boolean) => void
  showPageLoader: () => void
  hidePageLoader: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function useLoadingContext() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error("useLoadingContext must be used within LoadingProvider")
  }
  return context
}

interface LoadingProviderProps {
  children: React.ReactNode
  enableInitialLoading?: boolean
}

export default function LoadingProvider({ 
  children, 
  enableInitialLoading = true 
}: LoadingProviderProps) {
  const { isLoading: initialLoading, setLoading } = usePageLoading()
  const [isPageLoading, setIsPageLoading] = useState(enableInitialLoading)

  useEffect(() => {
    if (enableInitialLoading) {
      setIsPageLoading(initialLoading)
    } else {
      setIsPageLoading(false)
    }
  }, [initialLoading, enableInitialLoading])

  const setPageLoading = (loading: boolean) => {
    setIsPageLoading(loading)
  }

  const showPageLoader = () => {
    setIsPageLoading(true)
  }

  const hidePageLoader = () => {
    setIsPageLoading(false)
  }

  const handleLoadingComplete = () => {
    setIsPageLoading(false)
  }

  return (
    <LoadingContext.Provider
      value={{
        isPageLoading,
        setPageLoading,
        showPageLoader,
        hidePageLoader
      }}
    >
      <PageLoader 
        isLoading={isPageLoading} 
        onComplete={handleLoadingComplete}
      />
      {/* Hide children (navbar, content, footer) when loading */}
      <div style={{ display: isPageLoading ? 'none' : 'block' }}>
        {children}
      </div>
    </LoadingContext.Provider>
  )
}