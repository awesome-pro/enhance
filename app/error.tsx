'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { HomeIcon, RefreshCcw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <h1 className="text-6xl font-bold mb-4">Oops!</h1>
      <p className="text-2xl mb-8">Something went terribly wrong</p>
      <div className="max-w-md text-center mb-8">
        <p className="text-lg mb-4">
          Don&apos;t panic! Our team of highly caffeinated developers is
          probably spilling coffee on keyboards right now to fix this.
        </p>
        <p className="text-sm italic">Error: {error.message}</p>
      </div>
      <div className="flex space-x-4">
        <Button
          onClick={reset}
          variant="outline"
          className="bg-white text-pink-500 hover:bg-pink-100"
        >
          <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
        </Button>
        <Link href="/">
          <Button
            variant="outline"
            className="bg-white text-pink-500 hover:bg-pink-100"
          >
            <HomeIcon className="mr-2 h-4 w-4" /> Go Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
