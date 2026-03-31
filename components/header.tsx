'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Shield, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleThemeChange = toggleTheme; // Declare the variable before using it

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Shield className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold text-foreground">InternShield</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <Link href="/check">
            <Button variant="ghost" size="sm">
              Check Offer
            </Button>
          </Link>
          <Link href="/awareness">
            <Button variant="ghost" size="sm">
              Learn
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" size="sm">
              About
            </Button>
          </Link>
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link href="/check">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Check Offer
              </Button>
            </Link>
            <Link href="/awareness">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Learn
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                About
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
