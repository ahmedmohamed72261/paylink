"use client"

import { Button } from "@/components/ui/button"
import LoadingSpinner from "./loading-spinner"
import { cn } from "@/lib/utils"
import { ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
  loadingText?: string
  spinnerSize?: "sm" | "md" | "lg"
}

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ 
    children, 
    loading = false, 
    loadingText, 
    spinnerSize = "sm",
    disabled,
    className,
    ...props 
  }, ref) => {
    return (
      <Button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "relative transition-all duration-200",
          loading && "cursor-not-allowed",
          className
        )}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner 
              size={spinnerSize} 
              variant="white" 
              className="mr-2" 
            />
            {loadingText && (
              <span className="text-sm">{loadingText}</span>
            )}
          </div>
        )}
        
        <span className={cn(
          "transition-opacity duration-200",
          loading ? "opacity-0" : "opacity-100"
        )}>
          {children}
        </span>
      </Button>
    )
  }
)

LoadingButton.displayName = "LoadingButton"

export default LoadingButton