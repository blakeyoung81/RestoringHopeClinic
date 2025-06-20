'use client'

import { useState } from 'react'
import { ExternalLink, AlertCircle } from 'lucide-react'

export default function DonationWidget() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // In production, this would come from environment variables
  const givebutterId = process.env.NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_ID || 'demo-campaign'

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className="w-full h-[750px] border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <div className="text-center p-8">
          <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Unable to load donation form
          </h3>
          <p className="text-gray-500 dark:text-gray-300 mb-4">
            Please try refreshing the page or donate directly through our secure portal.
          </p>
          <a
            href={`https://givebutter.com/c/${givebutterId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors"
          >
            Donate on Givebutter
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[600px] sm:h-[700px] lg:h-[750px] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
          <div className="text-center p-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto mb-4"></div>
            <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base">Loading donation form...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={`https://givebutter.com/embed/c/${givebutterId}`}
        className="w-full h-full border-0"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        title="Donation Form"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
        allow="payment"
      />
      
      {/* Fallback link - Mobile optimized */}
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
        <a
          href={`https://givebutter.com/c/${givebutterId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-brand-primary transition-colors touch-manipulation bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-md shadow-sm"
        >
          Open in new window
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  )
} 