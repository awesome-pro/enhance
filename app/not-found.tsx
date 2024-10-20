import React from 'react'
import { Button } from '@/components/ui/button'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-64 h-64 mb-8">
        <Image
          src="/lost-robot.svg" // Make sure to add this image to your public folder
          alt="Lost Robot"
          layout="fill"
          className="animate-bounce"
        />
      </div>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <div className="max-w-md text-center mb-8">
        <p className="text-lg mb-4">
          Looks like our robot got lost in cyberspace. Don&apos;t worry, it
          happens to the best of us!
        </p>
        <p className="text-sm italic">
          Maybe it&apos;s off enhancing its circuits somewhere?
        </p>
      </div>
      <div className="flex space-x-4">
        <Link href="/">
          <Button
            variant="outline"
            className="bg-white text-blue-500 hover:bg-blue-100"
          >
            <HomeIcon className="mr-2 h-4 w-4" /> Go Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
