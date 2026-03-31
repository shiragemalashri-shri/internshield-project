'use client'

import Link from 'next/link'
import { ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/20 px-4 py-1.5 text-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-foreground">Your Safety, Our Priority</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-balance mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Spot Fake Internships Before They Cost You
        </h1>

        {/* Subtitle */}
        <p className="text-balance mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl">
           InternShield helps students and freshers identify fraudulent job offers, internship scams, and training programs. Get instant risk assessment and stay safe.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/check">
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
              Check Internship Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/awareness">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Learn Common Scams
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-2xl font-bold text-primary">100%</div>
            <p className="mt-2 text-sm text-muted-foreground">Free & Anonymous</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-2xl font-bold text-accent">Instant</div>
            <p className="mt-2 text-sm text-muted-foreground">Real-time Results</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-2xl font-bold text-secondary">Secure</div>
            <p className="mt-2 text-sm text-muted-foreground">Data Protection</p>
          </div>
        </div>
      </div>
    </section>
  )
}
