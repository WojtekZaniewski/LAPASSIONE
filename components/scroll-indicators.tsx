"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div 
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    />
  )
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </button>
  )
}
