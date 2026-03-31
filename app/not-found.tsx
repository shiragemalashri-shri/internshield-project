'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Looks like this page doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Go to Home
              </Button>
            </Link>
            <Link href="/check">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Check Offer
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
