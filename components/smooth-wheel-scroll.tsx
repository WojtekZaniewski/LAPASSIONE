"use client"

import { useEffect, useRef } from "react"

export function SmoothWheelScroll() {
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events on the main content area
      const target = e.target as HTMLElement
      if (target.closest('.nav-button') || target.closest('button')) {
        return // Allow normal behavior for buttons
      }

      e.preventDefault()
      e.stopPropagation()
      
      if (isScrolling.current) {
        return
      }
      
      isScrolling.current = true
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      
      const sections = document.querySelectorAll('.snap-section')
      if (sections.length === 0) {
        isScrolling.current = false
        return
      }
      
      const currentScrollPosition = window.pageYOffset
      const viewportHeight = window.innerHeight
      
      // Find current section more accurately
      let currentSectionIndex = 0
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        
        if (currentScrollPosition >= sectionTop - 100 && currentScrollPosition < sectionBottom - 100) {
          currentSectionIndex = i
          break
        }
      }
      
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

      if (nextIndex !== currentSectionIndex && nextIndex >= 0 && nextIndex < sections.length) {
        // Smooth scroll to next section
        const nextSection = sections[nextIndex] as HTMLElement

        if (nextSection) {
          const elementPosition = nextSection.offsetTop
          const headerHeight = 100 // Account for navigation bar
          const offsetPosition = Math.max(0, elementPosition - headerHeight)

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }

      // Reset scrolling flag after animation completes
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false
      }, 800)
    }

    // Add wheel event listener with passive: false to allow preventDefault
    document.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.removeEventListener('wheel', handleWheel)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

  return null
}
