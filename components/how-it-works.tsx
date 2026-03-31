'use client'

import { CheckCircle2, FileText, AlertCircle, Zap } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Paste Details',
      description: 'Share company name, website, email, and offer text',
    },
    {
      icon: Zap,
      title: 'Instant Analysis',
      description: 'Our AI checks for red flags and scam patterns',
    },
    {
      icon: AlertCircle,
      title: 'Risk Score',
      description: 'Get a clear risk rating from Low to High',
    },
    {
      icon: CheckCircle2,
      title: 'Safe Decision',
      description: 'Make informed choices about job opportunities',
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/5 px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            How InternShield Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent, and designed for students
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-8 hidden h-0.5 w-8 bg-gradient-to-r from-primary to-transparent lg:block" />
                )}

                {/* Card */}
                <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  {/* Step Number Background */}
                  <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 rounded-xl border border-border bg-secondary/10 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Educational Purpose:</span> InternShield provides awareness and detection assistance. Always verify opportunities with your university placement office or official job portals.
          </p>
        </div>
      </div>
    </section>
  )
}
