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
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '25px',
      margin: '20px auto',
      maxWidth: '600px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    }
  }

  return (
    <nav 
      className={getTaskbarClass()}
      style={getTaskbarStyles()}
    >
      <div className="px-6">
        <div className="flex items-center justify-center h-12 space-x-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10 text-sm"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick("#booking")}
              className="glass-button text-gray-300 hover:text-white text-sm px-4 py-2"
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
              className="text-gray-300 hover:text-white hover:bg-white/10"
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
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavClick("#booking")}
                className="glass-button text-gray-300 hover:text-white w-full mt-4"
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
