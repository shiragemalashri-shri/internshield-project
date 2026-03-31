'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AlertCircle, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function AwarenessPage() {
  const commonScams = [
    {
      title: 'Advance Payment Scam',
      description: 'Scammers ask for registration, processing, or admission fees before the internship starts.',
      redFlags: ['Payment required upfront', 'Non-refundable fees', 'Urgent payment pressure'],
      icon: AlertCircle,
    },
    {
      title: 'Free Work Promise',
      description: 'Offer of "training" with no pay, unrealistic work-from-home promises with high earnings.',
      redFlags: ['No compensation mentioned', 'Guaranteed high earnings', 'Too good to be true'],
      icon: TrendingUp,
    },
    {
      title: 'Data Harvesting',
      description: 'Requesting excessive personal information (bank details, ID copies, passport scans).',
      redFlags: ['Asking for sensitive documents', 'Immediate data requests', 'Unusual info requests'],
      icon: AlertTriangle,
    },
    {
      title: 'Credential Spoofing',
      description: 'Using fake company websites or email addresses to impersonate legitimate organizations.',
      redFlags: ['Email from free domains', 'Misspelled company domain', 'Poor website quality'],
      icon: AlertCircle,
    },
  ]

  const redFlagsList = [
    'Free email domain (Gmail, Yahoo, Outlook) for recruiter contact',
    'Multiple grammar and spelling errors in communication',
    'Requests for money before joining',
    'Limited job description or vague responsibilities',
    'Unrealistic salary or work-from-home claims',
    'Urgency tactics ("limited slots", "apply today")',
    'No official company contact information',
    'Requests for personal documents via email',
    'No verification through official channels',
    'Too good to be true benefits or flexibility',
  ]

  const realVsFake = [
    {
      aspect: 'Communication',
      real: 'Professional emails from corporate domain',
      fake: 'Gmail or Yahoo addresses, poor grammar',
    },
    {
      aspect: 'Website',
      real: 'Established company domain, secure HTTPS',
      fake: 'New domain, spelling mistakes, or temporary links',
    },
    {
      aspect: 'Fees',
      real: 'No charges for internship opportunity',
      fake: 'Registration, processing, or training fees required',
    },
    {
      aspect: 'Interview Process',
      real: 'Multiple rounds, HR contact, formal process',
      fake: 'Quick approval, minimal screening, immediate offer',
    },
    {
      aspect: 'Job Description',
      real: 'Detailed roles, specific projects, clear requirements',
      fake: 'Vague description, generic duties',
    },
    {
      aspect: 'Verification',
      real: 'Verifiable through LinkedIn and official website',
      fake: 'Cannot verify through official channels',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-balance mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Learn About Common Scams
          </h1>
          <p className="text-lg text-muted-foreground">
            Knowledge is your best defense against fraudulent opportunities
          </p>
        </div>

        {/* Common Scams */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Common Internship & Job Scams</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {commonScams.map((scam, index) => {
              const Icon = scam.icon
              return (
                <Card key={index} className="border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{scam.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{scam.description}</p>
                  <div>
                    <p className="mb-2 text-xs font-semibold text-foreground uppercase">Red Flags:</p>
                    <ul className="space-y-1">
                      {scam.redFlags.map((flag, i) => (
                        <li key={i} className="flex gap-2 text-sm text-foreground">
                          <span className="text-accent">•</span>
                          {flag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Red Flags Checklist */}
        <section className="mb-20 rounded-2xl border border-border bg-gradient-to-b from-secondary/5 to-transparent p-8">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Red Flags Checklist</h2>
          <p className="mb-6 text-muted-foreground">If you see any of these, be cautious:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {redFlagsList.map((flag, index) => (
              <div key={index} className="flex gap-3">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-foreground">{flag}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Real vs Fake */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Real vs Fake Opportunities</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Aspect</th>
                  <th className="px-4 py-3 text-left font-semibold text-green-600 dark:text-green-400">✓ Legitimate</th>
                  <th className="px-4 py-3 text-left font-semibold text-red-600 dark:text-red-400">✗ Suspicious</th>
                </tr>
              </thead>
              <tbody>
                {realVsFake.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-semibold text-foreground">{row.aspect}</td>
                    <td className="px-4 py-3 text-foreground flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400 mt-0.5" />
                      <span>{row.real}</span>
                    </td>
                    <td className="px-4 py-3 text-foreground flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
                      <span>{row.fake}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Action Tips */}
        <section className="rounded-2xl border border-border bg-primary/5 p-8">
          <h2 className="mb-6 text-2xl font-bold text-foreground">If You Suspect a Scam</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">1</div>
              <div>
                <h3 className="font-semibold text-foreground">Do Not Share Personal Information</h3>
                <p className="text-sm text-muted-foreground">Stop communication immediately and don't provide any sensitive data.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">2</div>
              <div>
                <h3 className="font-semibold text-foreground">Report It</h3>
                <p className="text-sm text-muted-foreground">Inform your university placement cell, college authorities, and cybercrime units.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">3</div>
              <div>
                <h3 className="font-semibold text-foreground">Verify Independently</h3>
                <p className="text-sm text-muted-foreground">Contact the company directly using official contact info from their website.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
