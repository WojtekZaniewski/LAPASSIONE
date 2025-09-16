"use client"

import { useEffect, useRef } from "react"

export function SmoothWheelScroll() {
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      console.log('Wheel event detected:', e.deltaY)
      e.preventDefault()
      e.stopPropagation()
      
      if (isScrolling.current) return
      
      isScrolling.current = true
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      
      const sections = document.querySelectorAll('.snap-section')
      const currentScrollPosition = window.pageYOffset
      const currentSectionIndex = Math.round(currentScrollPosition / window.innerHeight)
      
      let nextIndex = currentSectionIndex

      // Determine scroll direction and next section
      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scrolling down
        nextIndex = currentSectionIndex + 1
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        // Scrolling up
        nextIndex = currentSectionIndex - 1
      } else {
        // Already at first or last section
        isScrolling.current = false
        return
      }

      if (nextIndex !== currentSectionIndex) {
        // Smooth scroll to next section
        const scrollPosition = nextIndex * window.innerHeight

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      }

      // Reset scrolling flag after animation completes
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false
      }, 1000)
    }

    // Add wheel event listener to document
    document.addEventListener('wheel', handleWheel, { passive: false })

    // Also add to window for better coverage
    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.removeEventListener('wheel', handleWheel)
      window.removeEventListener('wheel', handleWheel)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  return null
}
