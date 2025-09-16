"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { smoothScrollTo } from "@/lib/scroll-animations"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-serif text-2xl font-bold text-white">
              La Passione
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-secondary transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => handleNavClick("#booking")}
              className="glass-button"
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
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                  className="text-white hover:text-secondary transition-colors duration-300 font-medium py-2 text-left"
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
