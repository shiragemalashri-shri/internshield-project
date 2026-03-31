'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Heart, Users, Target, Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Student Safety',
      description: 'We are committed to protecting students from financial and emotional harm caused by scams.',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Building a community where students help each other identify and report fraudulent opportunities.',
    },
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Continuously improving our detection algorithms to catch more scams and reduce false positives.',
    },
    {
      icon: Heart,
      title: 'Transparency',
      description: 'Being honest about our capabilities and limitations. No tool is 100% accurate.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-balance mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            About InternShield 
          </h1>
          <p className="text-lg text-muted-foreground">
            Empowering students to make safer career choices
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <Card className="border-border p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg leading-relaxed text-foreground mb-4">
               InternShield exists to protect students and freshers from falling victim to internship and job scams. We believe every student deserves a safe, legitimate career opportunity without fear of financial loss or personal harm.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Our tool provides instant analysis of job offers and internship opportunities, highlighting potential red flags that students might miss. We empower informed decision-making through transparency and education.
            </p>
          </Card>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-foreground">The Problem</h2>
          <div className="space-y-4">
            <Card className="border-border p-6">
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold">Thousands of students fall victim to job scams every year.</span> Many lose money to fraudulent "training programs" or have their personal information compromised. The emotional impact can be devastating for young professionals just starting their careers.
              </p>
            </Card>
            <Card className="border-border p-6">
              <p className="text-foreground leading-relaxed">
                Scammers use sophisticated tactics including fake company websites, spoofed email addresses, and emotional manipulation. Traditional verification methods are slow, and students often lack the experience to identify red flags.
              </p>
            </Card>
            <Card className="border-border p-6">
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold"> InternShield changes this.</span> We provide instant, free analysis that helps students spot suspicious opportunities before they get hurt.
              </p>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        {/* How We Work */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-foreground">How We Work</h2>
          <div className="space-y-4">
            <Card className="border-border p-6">
              <h3 className="mb-2 font-semibold text-foreground">Rule-Based Analysis</h3>
              <p className="text-sm text-muted-foreground">
                We analyze offers against thousands of known scam patterns and red flags identified through research and community reports.
              </p>
            </Card>
            <Card className="border-border p-6">
              <h3 className="mb-2 font-semibold text-foreground">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Our detection system evolves as scammers adapt their tactics. We work with security experts and educational institutions to stay updated.
              </p>
            </Card>
            <Card className="border-border p-6">
              <h3 className="mb-2 font-semibold text-foreground">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Your data is never stored or shared. All analysis happens locally and securely. We prioritize your privacy above everything else.
              </p>
            </Card>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-16 rounded-2xl border border-secondary/50 bg-secondary/5 p-8">
          <h2 className="mb-4 text-xl font-bold text-foreground">Important Limitations</h2>
          <p className="mb-4 text-foreground">
              InternShield is a helpful tool, but not a complete solution. We recommend:
          </p>
          <ul className="space-y-2 text-foreground">
            <li>✓ Always verify opportunities through your university placement office</li>
            <li>✓ Research companies independently on LinkedIn, official websites, and review sites</li>
            <li>✓ Never share sensitive information with unverified sources</li>
            <li>✓ Contact companies directly using official contact information</li>
            <li>✓ Trust your instincts - if something feels wrong, it probably is</li>
          </ul>
        </section>

        {/* Get Started */}
        <div className="rounded-2xl border border-border bg-gradient-to-b from-primary/5 to-transparent p-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Protect Yourself?</h2>
          <p className="mb-8 text-muted-foreground">
            Start checking your internship offers today and make safer career decisions.
          </p>
          <Link href="/check">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Check an Offer
            </Button>
          </Link>
        </div>

        {/* Contact/Support */}
        <section className="mt-16 pt-8 border-t border-border">
          <h2 className="mb-4 text-xl font-bold text-foreground">Have Questions or Feedback?</h2>
          <p className="mb-4 text-foreground">
            We'd love to hear from you. If you have suggestions to improve Scamtern or encountered a scam, please reach out.
          </p>
          <a href="mailto:support@scamtern.com" className="text-primary hover:underline">
            support@InternSheild.com
          </a>
        </section>
      </div>

      <Footer />
    </main>
  )
}
