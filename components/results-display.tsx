'use client'

import { AlertTriangle, CheckCircle2, Info } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { DetectionResult } from '@/lib/detection'

interface ResultsDisplayProps {
  result: DetectionResult
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  const getRiskIcon = () => {
    switch (result.risk) {
      case 'Low':
        return <CheckCircle2 className="h-16 w-16 text-green-500" />
      case 'Medium':
        return <AlertTriangle className="h-16 w-16 text-yellow-500" />
      case 'High':
        return <AlertTriangle className="h-16 w-16 text-red-500" />
    }
  }

  const getRiskBgColor = () => {
    switch (result.risk) {
      case 'Low':
        return 'bg-green-500/10 border-green-500/20'
      case 'Medium':
        return 'bg-yellow-500/10 border-yellow-500/20'
      case 'High':
        return 'bg-red-500/10 border-red-500/20'
    }
  }

  const getRiskTextColor = () => {
    switch (result.risk) {
      case 'Low':
        return 'text-green-700 dark:text-green-300'
      case 'Medium':
        return 'text-yellow-700 dark:text-yellow-300'
      case 'High':
        return 'text-red-700 dark:text-red-300'
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Main Risk Card */}
      <Card className={`border-2 p-12 ${getRiskBgColor()}`}>
        <div className="text-center">
          {/* Risk Icon */}
          <div className="flex justify-center mb-6">
            {getRiskIcon()}
          </div>

          {/* Risk Label */}
          <div className={`inline-block rounded-full px-4 py-2 font-semibold text-sm mb-4 ${
            result.risk === 'Low' ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300' :
            result.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300' :
            'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
          }`}>
            {result.risk === 'Low' && "🟢 Safe Opportunity"}
{result.risk === 'Medium' && "🟡 Suspicious Offer"}
{result.risk === 'High' && "🔴 High Risk / Scam Likely"}
          </div>

          {/* Score */}
          <h2 className="mb-2 text-5xl font-bold text-foreground">
            {result.score}<span className="text-2xl text-muted-foreground">/100</span>
          </h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
  <div
    className={`h-4 rounded-full ${
      result.risk === 'Low'
        ? 'bg-green-500'
        : result.risk === 'Medium'
        ? 'bg-yellow-500'
        : 'bg-red-500'
    }`}
    style={{ width: `${result.score}%` }}
  ></div>
</div>

          {/* Status Message */}
          <p className={`text-lg font-medium ${getRiskTextColor()}`}>
            {result.risk === 'Low' && "This opportunity looks legitimate. Proceed with caution and verify details."}
            {result.risk === 'Medium' && "Caution advised. Research the company thoroughly before responding."}
            {result.risk === 'High' && "High risk detected. We recommend not proceeding. Report this opportunity."}
          </p>
        </div>
      </Card>

      {/* Score Breakdown */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-border p-4">
          <p className="text-xs text-muted-foreground font-semibold uppercase">Score</p>
          <p className="mt-2 text-3xl font-bold text-primary">{result.score}</p>
        </Card>
        <Card className="border-border p-4">
          <p className="text-xs text-muted-foreground font-semibold uppercase">Risk Level</p>
          <p className={`mt-2 text-2xl font-bold ${getRiskTextColor()}`}>{result.risk}</p>
        </Card>
        <Card className="border-border p-4">
          <p className="text-xs text-muted-foreground font-semibold uppercase">Red Flags</p>
          <p className="mt-2 text-3xl font-bold text-accent">{result.flags.length}</p>
        </Card>
        <Card className="border-border p-4">
  <p className="text-xs text-muted-foreground font-semibold uppercase">Confidence</p>
  <p className="mt-2 text-2xl font-bold text-primary">
    {100 - result.score}%
  </p>
</Card>
      </div>

      <Card className="border-border p-6">
  <h3 className="text-lg font-semibold mb-4 text-foreground">Analysis Report</h3>

  <div className="space-y-3 text-sm">
    <p>📧 Email Analysis: {result.flags.some(f => f.toLowerCase().includes('email')) ? 'Suspicious' : 'Looks Safe'}</p>
    
    <p>💸 Payment Check: {result.flags.some(f => f.toLowerCase().includes('payment')) ? 'Detected' : 'Not Detected'}</p>
    
    <p>📝 Description Quality: {result.flags.some(f => f.toLowerCase().includes('description')) ? 'Poor' : 'Good'}</p>
    
    <p>🌐 Company Presence: {result.flags.some(f => f.toLowerCase().includes('website')) ? 'Weak / Missing' : 'Available'}</p>
  </div>
</Card>

      {/* Red Flags Section */}
      <h3 className="mb-4 text-xl font-semibold text-foreground"></h3>
      <div>
        <h3 className="mb-4 text-xl font-semibold text-foreground">Why this internship may be risky</h3>
        <div className="space-y-3">
          {result.flags.map((flag, index) => (
            <Card key={index} className="border-border bg-card p-4">
              <div className="flex gap-3">
                <div className="mt-0.5">
                  <div className={`h-2 w-2 rounded-full ${
                    result.risk === 'Low' ? 'bg-green-500' :
                    result.risk === 'Medium' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                </div>
                <p className="text-foreground leading-relaxed">{flag}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Card className="border-2 border-primary/30 bg-primary/5 p-6">
  <h3 className="text-lg font-semibold mb-3 text-foreground">Final Decision</h3>

  {result.risk === 'Low' && (
    <p className="text-green-600 font-medium">
      ✅ This opportunity seems safe, but still verify once.
    </p>
  )}

  {result.risk === 'Medium' && (
    <p className="text-yellow-600 font-medium">
      ⚠️ Be cautious. Verify details carefully.
    </p>
  )}

  {result.risk === 'High' && (
    <p className="text-red-600 font-medium">
      ❌ High risk. Avoid this internship.
    </p>
  )}
</Card>
<Card className="border-border p-6">
  <h3 className="text-lg font-semibold mb-3 text-foreground">Why this score?</h3>
  <ul className="text-sm text-muted-foreground space-y-2">
    <li>• Email type (free vs company)</li>
    <li>• Payment request detection</li>
    <li>• Job description quality</li>
    <li>• Company presence</li>
  </ul>
</Card>
<Card className="border-border p-6">
  <h3 className="text-lg font-semibold mb-4 text-foreground">Fake vs Real Internship</h3>

  <div className="grid sm:grid-cols-2 gap-4 text-sm">
    <div className="p-4 border rounded-lg bg-red-100 dark:bg-red-900/30">
      <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Fake</h4>
      <ul>
        <li>• Free email (Gmail)</li>
        <li>• Asks for money</li>
        <li>• No clear details</li>
      </ul>
    </div>

    <div className="p-4 border rounded-lg bg-green-100 dark:bg-green-900/30">
      <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Real</h4>
      <ul className="text-sm text-black dark:text-white">
        <li>• Official email</li>
        <li>• No payment</li>
        <li>• Proper job info</li>
      </ul>
    </div>
  </div>
</Card>

      {/* Safety Advice */}
      <Card className="border-secondary/50 bg-secondary/5 p-6">
        <div className="flex gap-3">
          <Info className="h-5 w-5 flex-shrink-0 text-secondary" />
          <div>
            <h4 className="font-semibold text-foreground mb-2">What You Should Do:</h4>
            <ul className="space-y-2 text-sm text-foreground">
              <li>✓ Verify the company through official channels (LinkedIn, official website)</li>
              <li>✓ Contact your university placement office to confirm</li>
              <li>✓ Research employee reviews on Glassdoor or Indeed</li>
              <li>✓ Never share personal documents or pay money upfront</li>
              <li>✓ Report suspicious offers to your campus authorities</li>
            </ul>
          </div>
        </div>
      </Card>
      <div className="text-center">
  <button
    onClick={() => alert("Reported successfully!")}
    className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
  >
    Report this internship
  </button>
</div>

      {/* Disclaimer */}
      <Card className="border-border bg-muted/30 p-4">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold">Note:</span> This analysis is automated and for awareness purposes only. Always exercise due diligence and verify through official channels. Scamtern is not liable for any decisions made based on this assessment.
        </p>
      </Card>
    </div>
  )
}
