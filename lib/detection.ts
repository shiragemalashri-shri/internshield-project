export interface DetectionResult {
  score: number
  risk: 'Low' | 'Medium' | 'High'
  flags: string[]
  color: string
}

interface DetectionInput {
  companyName: string
  website: string
  email: string
  offerText: string
}

export function detectScam(input: DetectionInput): DetectionResult {
  let score = 0
  const flags: string[] = []

  const { companyName, website, email, offerText } = input
  const combinedText = `${companyName} ${website} ${email} ${offerText}`.toLowerCase()

  // Email domain checks
  const freeEmailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'mail.com', 'ymail.com']
  const emailDomain = email.split('@')[1]?.toLowerCase() || ''
  
  if (freeEmailDomains.includes(emailDomain)) {
    score += 15
    flags.push('Free email domain used (Gmail, Yahoo, etc.) - Legitimate companies use corporate emails')
  }

  // Money request checks
  const moneyPatterns = [
    /pay\s+(?:now|today|upfront|registration|processing)/i,
    /registration\s+(?:fee|charge|cost)/i,
    /admission\s+(?:fee|charge|cost)/i,
    /processing\s+(?:fee|charge|cost)/i,
    /bank\s+(?:transfer|details|account)/i,
    /western\s+union/i,
    /wire\s+(?:transfer|money)/i,
    /crypto|bitcoin|upi|paytm/i,
  ]

  moneyPatterns.forEach(pattern => {
    if (pattern.test(offerText)) {
      score += 20
      flags.push('Request for money or payment detected - Legitimate internships don\'t ask for upfront fees')
    }
  })

  // Unrealistic salary/perks
  const salaryPatterns = [
    /(?:rs\.?|₹)\s*(?:50000|60000|70000|80000|90000|100000)\s*(?:per|daily|per day)/i,
    /earn\s*(?:money|cash)\s*(?:at home|from home|easily|quickly)/i,
    /guaranteed\s*(?:payment|income|money|earning)/i,
    /work\s*from\s*home.*earn/i,
  ]

  salaryPatterns.forEach(pattern => {
    if (pattern.test(offerText)) {
      score += 18
      flags.push('Unrealistic salary or earnings claim - Verify actual market rates')
    }
  })

  // Urgency tactics
  const urgencyPatterns = [
    /(?:limited|only|just)\s+(?:\d+\s+)?(?:seats|slots|positions|spots)/i,
    /(?:hurry|rush|quick|act\s+now|apply\s+today)/i,
    /(?:deadline|expires?|last\s+(?:chance|day|moment))/i,
    /respond\s+(?:immediately|asap|within\s+\d+\s+(?:hours|days))/i,
  ]

  urgencyPatterns.forEach(pattern => {
    if (pattern.test(offerText)) {
      score += 12
      flags.push('Urgency tactics detected - Legitimate companies allow time for decision making')
    }
  })

  // Grammar and quality checks
  const poorGrammarIndicators = [
    /\b(?:u|ur|r|b4|2day|nw|2morrow)\b/i, // Text speak
    /(?:!!!|\?{2,})/g, // Multiple punctuation
    /(?:[A-Z]){4,}/g, // ALL CAPS words (excluding acronyms)
  ]

  let grammarScore = 0
  poorGrammarIndicators.forEach(pattern => {
    const matches = offerText.match(pattern) || []
    grammarScore += matches.length
  })

  if (grammarScore > 3) {
    score += 15
    flags.push('Poor grammar and spelling detected - Professional companies maintain written standards')
  }

  // Vague job description
  if (offerText.split(' ').length < 50) {
    score += 10
    flags.push('Vague job description - Legitimate internships provide detailed role information')
  }

  // Website verification
  if (!website || website.length < 5) {
    score += 12
    flags.push('Missing or minimal website information - Verify company website independently')
  }

  // Suspicious words
  const suspiciousPatterns = [
    /(?:lottery|prize|won|claim)/i,
    /(?:no experience|anyone|everyone)/i,
    /(?:confidential|secret|underground)/i,
    /(?:nigerian|nigerian\s+prince|nigerian\s+scam)/i,
  ]

  suspiciousPatterns.forEach(pattern => {
    if (pattern.test(combinedText)) {
      score += 15
      flags.push('Suspicious language detected - Check legitimacy with official channels')
    }
  })

  // Contact info verification
  const hasPhoneOrLinkedin = /(?:\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}|linkedin\.com)/i.test(offerText)
  if (!hasPhoneOrLinkedin && !website.includes('company')) {
    score += 8
    flags.push('No proper contact information provided - Legitimate companies provide verifiable contacts')
  }

  // Clamp score between 0-100
  score = Math.min(Math.max(score, 0), 100)

  // Determine risk level
  let risk: 'Low' | 'Medium' | 'High'
  let color: string

  if (score < 30) {
    risk = 'Low'
    color = 'text-green-600 dark:text-green-400'
  } else if (score < 60) {
    risk = 'Medium'
    color = 'text-yellow-600 dark:text-yellow-400'
  } else {
    risk = 'High'
    color = 'text-red-600 dark:text-red-400'
  }

  return {
    score: Math.round(score),
    risk,
    flags: flags.length > 0 ? flags : ['No major red flags detected. Still verify independently.'],
    color,
  }
}
