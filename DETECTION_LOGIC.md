# Scamtern Detection Logic Guide

This document explains how Scamtern analyzes internship offers for scam indicators.

## Overview

The detection system uses rule-based analysis to identify suspicious patterns in job offers. Each pattern adds points to a cumulative "risk score" which ranges from 0-100.

## Risk Score Calculation

- **0-29**: Low Risk ✓
- **30-59**: Medium Risk ⚠️
- **60-100**: High Risk ✗

## Detection Categories

### 1. Email Domain Verification (up to 15 points)

**What it checks:**
- Whether the recruiter email uses a corporate domain or free service

**Red Flags:**
- Gmail, Yahoo, Outlook, Hotmail, Mail.com, etc.
- Free email domains suggest lack of legitimate infrastructure

**Why it matters:**
- Professional companies use branded email addresses
- Scammers often use personal email accounts to avoid tracing

**Score:** +15 points if red flag detected

### 2. Payment/Money Requests (up to 20 points)

**What it checks:**
- Requests for upfront payment of any kind
- Registration fees, admission charges, processing costs
- Payment methods (bank transfer, Western Union, crypto, UPI)

**Patterns detected:**
- "pay now/today/upfront"
- "registration/processing/admission fee"
- "bank transfer/details"
- "Western Union/wire transfer"
- Cryptocurrency mentions

**Why it matters:**
- Legitimate internships NEVER charge upfront fees
- Payment requests are a major scam indicator

**Score:** +20 points per money request pattern found

### 3. Unrealistic Salary/Perks (up to 18 points)

**What it checks:**
- Promises of unusually high daily earnings (₹50,000+/day)
- "Earn money from home" claims
- Guaranteed income promises
- Work from home without clear job description

**Why it matters:**
- These are classic scam lures
- Real internships have realistic compensation
- Too-good-to-be-true offers are usually scams

**Score:** +18 points if unrealistic claims detected

### 4. Urgency Tactics (up to 12 points)

**What it checks:**
- Artificial time pressure to make decisions
- Limited slots or positions
- Deadline-based pressure
- Phrases like "act now", "limited time"

**Patterns detected:**
- "limited slots/positions/spots"
- "hurry/rush/act now"
- "deadline/expires/last chance"
- "respond immediately/ASAP"

**Why it matters:**
- Scammers pressure victims into quick decisions
- Legitimate companies allow time for evaluation

**Score:** +12 points if urgency tactics found

### 5. Grammar and Writing Quality (up to 15 points)

**What it checks:**
- Text speak and abbreviations (u, ur, r, b4, etc.)
- Excessive punctuation (!!!, ???)
- Unnecessary ALL CAPS usage
- Professional writing standards

**Why it matters:**
- Professional companies maintain written standards
- Poor grammar often indicates scams
- Multiple instances suggest unprofessionalism

**Score:** +15 points if 3+ grammar issues found

### 6. Job Description Clarity (up to 10 points)

**What it checks:**
- Whether job description is detailed and comprehensive
- Text length as indicator of effort and specificity
- Minimum of 50 words for reasonable description

**Why it matters:**
- Vague descriptions suggest low effort or deception
- Real companies invest in detailed job postings
- Too brief descriptions may hide important details

**Score:** +10 points if description is very brief

### 7. Website Information (up to 12 points)

**What it checks:**
- Whether company website is provided
- Minimum URL length (indicating substance)
- Website presence as legitimacy indicator

**Why it matters:**
- Legitimate companies have established websites
- Missing website information is suspicious
- Provides verification opportunity

**Score:** +12 points if website info is minimal

### 8. Contact Information Verification (up to 8 points)

**What it checks:**
- Presence of phone numbers
- LinkedIn profile links
- Multiple contact methods

**Why it matters:**
- Real companies provide verifiable contacts
- Multiple contact options suggest legitimacy
- Allows for independent verification

**Score:** +8 points if contact info is missing

### 9. Suspicious Language (up to 15 points)

**What it checks:**
- Lottery or prize language
- Unrealistic inclusivity ("anyone/everyone")
- Secretive language ("confidential/secret")
- Specific scam references

**Patterns detected:**
- "lottery/prize/won/claim"
- "no experience/anyone/everyone"
- "confidential/secret/underground"
- Nigerian scam references

**Why it matters:**
- These terms are common in known scam types
- Legitimate jobs require qualifications
- Secretive language raises suspicion

**Score:** +15 points if suspicious language found

## Combined Risk Assessment

The system applies multiple checks and accumulates scores:

### Example 1: Low Risk Offer
- Corporate email domain: 0 points
- No money requests: 0 points
- Realistic salary: 0 points
- No urgency tactics: 0 points
- Professional writing: 0 points
- Detailed job description: 0 points
- Company website provided: 0 points
- Contact info included: 0 points
- **Total: 0-15 points → LOW RISK**

### Example 2: Medium Risk Offer
- Free email domain: +15 points
- No money requests: 0 points
- Somewhat unrealistic salary claims: +10 points
- Some urgency language: +8 points
- Decent grammar: 0 points
- Moderate description: 0 points
- Website provided: 0 points
- **Total: ~35 points → MEDIUM RISK**

### Example 3: High Risk Offer
- Free email domain: +15 points
- Money request for registration: +20 points
- Unrealistic earnings promise: +18 points
- High urgency ("limited slots, apply today"): +12 points
- Multiple grammar errors: +15 points
- Very vague description: +10 points
- No website info: +12 points
- **Total: ~102 points (capped at 100) → HIGH RISK**

## Important Limitations

This system:
- ✓ Catches common scam patterns
- ✓ Identifies obvious red flags
- ✓ Provides a starting point for evaluation
- ✗ Cannot catch sophisticated scams
- ✗ May have false positives
- ✗ Should not be your only verification method

## Always Verify Independently

Scamtern results should be combined with:

1. **University Verification**
   - Contact your placement office
   - Check official job board
   - Verify through institutional channels

2. **Company Research**
   - Visit official company website independently
   - Search for employee reviews
   - Check LinkedIn company page
   - Look for company news and credibility

3. **Direct Contact**
   - Call company using phone from official website
   - Don't use phone numbers from offer email
   - Ask HR department directly
   - Verify recruiter credentials

4. **Trust Your Instincts**
   - If something feels off, investigate more
   - Don't let pressure force quick decisions
   - Never share sensitive info with unverified sources

## Reporting Scams

If you identify a scam:
1. Report to university placement office
2. Report to local cybercrime units
3. File complaint with relevant authorities
4. Share details with Scamtern (helps improve detection)

## Future Improvements

Planned enhancements to detection:
- Machine learning model training
- Real-time threat intelligence database
- Community-reported scams
- Email verification APIs
- Domain reputation checking
- Employment verification services

---

**Remember:** This tool is for awareness and education. Always verify opportunities through official channels before making any commitments.
