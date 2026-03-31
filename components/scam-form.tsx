'use client'

import React from "react"

import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { detectScam, DetectionResult } from '@/lib/detection'

interface ScamFormProps {
  onSubmit: (result: DetectionResult) => void
}

export function ScamForm({ onSubmit }: ScamFormProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    email: '',
    offerText: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.offerText.trim()) {
      newErrors.offerText = 'Offer details are required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    
    // Simulate processing
    setTimeout(() => {
      const result = detectScam(formData)
      onSubmit(result)
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-balance mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Check Your Internship Offer
        </h1>
        <p className="text-lg text-muted-foreground">
          Paste the details below and we'll scan for red flags
        </p>
      </div>

      {/* Disclaimer */}
      <Card className="border-secondary/50 bg-secondary/5 p-4">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-secondary" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">Disclaimer:</span> This tool is for educational and awareness purposes. Always verify opportunities independently through your university placement office or official job portals.
          </p>
        </div>
      </Card>

      {/* Form */}
      <Card className="border-border p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Name */}
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-foreground">
              Company Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="e.g., TechCorp Solutions"
              value={formData.companyName}
              onChange={handleChange}
              disabled={isLoading}
              className="border-border"
            />
            {errors.companyName && (
              <p className="text-sm text-red-500">{errors.companyName}</p>
            )}
          </div>

          {/* Website */}
          <div className="space-y-2">
            <Label htmlFor="website" className="text-foreground">
              Company Website <span className="text-muted-foreground">(Optional)</span>
            </Label>
            <Input
              id="website"
              name="website"
              placeholder="e.g., www.techcorp.com"
              value={formData.website}
              onChange={handleChange}
              disabled={isLoading}
              className="border-border"
            />
          </div>

          {/* Recruiter Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              Recruiter Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="recruiter@company.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className="border-border"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Offer Text */}
          <div className="space-y-2">
            <Label htmlFor="offerText" className="text-foreground">
              Offer Letter or Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="offerText"
              name="offerText"
              placeholder="Copy and paste the full offer letter, email, or message here..."
              value={formData.offerText}
              onChange={handleChange}
              disabled={isLoading}
              rows={8}
              className="border-border resize-none"
            />
            <p className="text-xs text-blue-500">
  💡 Tip: Paste the complete internship message for more accurate detection
</p>
            {errors.offerText && (
              <p className="text-sm text-red-500">{errors.offerText}</p>
            )}
            <p className="text-xs text-muted-foreground">
              {formData.offerText.length} characters
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90"
          >
            {isLoading ? 'Analyzing...' : 'Scan for Scams'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
