'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScamForm } from '@/components/scam-form'
import { ResultsDisplay } from '@/components/results-display'
import { DetectionResult } from '@/lib/detection'

export default function CheckPage() {
  const [result, setResult] = useState<DetectionResult | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (detectionResult: DetectionResult) => {
    setResult(detectionResult)
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {!submitted ? (
          <ScamForm onSubmit={handleSubmit} />
        ) : result ? (
          <>
            <ResultsDisplay result={result} />
            <div className="mt-12 text-center">
              <button
                onClick={() => {
                  setSubmitted(false)
                  setResult(null)
                }}
                className="text-primary hover:underline"
              >
                ← Check Another Offer
              </button>
            </div>
          </>
        ) : null}
      </div>

      <Footer />
    </main>
  )
}
