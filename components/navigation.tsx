"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { smoothScrollTo } from "@/lib/scroll-animations"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect current section
      const sections = document.querySelectorAll('.snap-section')
      const scrollPosition = window.scrollY + 100
      
      sections.forEach((section) => {
        const element = section as HTMLElement
        const rect = element.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + element.offsetHeight
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(element.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Strona główna", href: "#home" },
    { name: "Usługi", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Opinie", href: "#testimonials" },
    { name: "Rezerwacja", href: "#booking" },
    { name: "Kontakt", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    smoothScrollTo(sectionId, 80) // 80px offset for fixed header
    setIsMobileMenuOpen(false)
  }

  // Determine glass effect based on current section
  const getGlassClass = () => {
    // Always show glass effect, but different types based on section
    const lightSections = ['services', 'testimonials', 'booking']
    if (lightSections.includes(currentSection)) {
      return "glass-nav-dark"
    }
    
    // Use light glass for dark sections (home, portfolio, contact)
    return "glass-nav"
  }

  // Force taskbar to always be visible
  const getTaskbarClass = () => {
    return "fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  }

  // Get dynamic styles based on current section
  const getTaskbarStyles = () => {
    return {
      background: 'linear-gradient(135deg, oklch(0.8 0.15 85 / 0.2) 0%, oklch(0.6 0.1 85 / 0.1) 50%, oklch(0.7 0.12 85 / 0.15) 100%)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid oklch(0.8 0.15 85 / 0.4)',
      borderRadius: '12px',
      margin: '20px auto',
      maxWidth: '700px',
      boxShadow: '0 8px 32px oklch(0.8 0.15 85 / 0.2), inset 0 1px 0 oklch(0.9 0.2 85 / 0.6), inset 0 -1px 0 oklch(0.1 0 0 / 0.3)'
    }
  }

  return (
    <nav 
      className={getTaskbarClass()}
      style={getTaskbarStyles()}
    >
      <div className="px-6">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="glass-button text-sm font-medium py-2 px-3">
              Strona główna
            </h1>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.slice(1, -1).map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="glass-button text-sm font-medium py-2 px-3"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Button */}
          <div className="flex items-center">
            <Button 
              onClick={() => handleNavClick("#booking")}
              className="glass-button text-yellow-300 hover:text-yellow-100 text-sm px-4 py-2 border-yellow-400/50"
            >
              Umów wizytę
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass-button"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-container mt-4 p-6 rounded-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="glass-button font-medium py-2 text-left w-full"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick("#booking")}
                className="glass-button w-full mt-4"
              >
                Umów wizytę
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
