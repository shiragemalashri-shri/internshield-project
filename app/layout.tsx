import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#b393d3' },
    { media: '(prefers-color-scheme: dark)', color: '#a77bc4' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Scamtern - Detect Fake Internships & Job Scams',
  description: 'Protect yourself from internship scams and fraudulent job offers. Use Scamtern to check if your opportunity is legitimate.',
  generator: 'v0.app',
  applicationName: 'Scamtern',
  keywords: ['internship scams', 'fake jobs', 'fraud detection', 'job security', 'student safety'],
  creator: 'Scamtern Team',
  openGraph: {
    title: 'Scamtern - Detect Fake Internships & Job Scams',
    description: 'Protect yourself from internship scams. Check job offers instantly.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme={false}
          disableTransitionOnChange
          storageKey="scamtern-theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
