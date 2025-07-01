"use client"

import { useState, useEffect } from "react"

interface UseLoadingOptions {
  initialDelay?: number
  minDuration?: number
}

export function useLoading(options: UseLoadingOptions = {}) {
  const { initialDelay = 0, minDuration = 2000 } = options
  const [isLoading, setIsLoading] = useState(true)
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null)

  useEffect(() => {
    const startTime = Date.now()
    setLoadingStartTime(startTime)

    const timer = setTimeout(() => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minDuration - elapsed)
      
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    }, initialDelay)

    return () => clearTimeout(timer)
  }, [initialDelay, minDuration])

  const setLoading = (loading: boolean) => {
    if (!loading && loadingStartTime) {
      const elapsed = Date.now() - loadingStartTime
      const remainingTime = Math.max(0, minDuration - elapsed)
      
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    } else {
      setIsLoading(loading)
    }
  }

  return { isLoading, setLoading }
}

export function usePageLoading() {
  return useLoading({ minDuration: 3000 })
}

export function useSectionLoading() {
  return useLoading({ minDuration: 1000 })
}