"use client"

import { useEffect, useRef } from "react"

export function SmoothWheelScroll() {
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't interfere with form inputs or buttons
      const target = e.target as HTMLElement
      if (target.closest('input') || target.closest('textarea') || target.closest('button')) {
        return
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
      
      // Find current section based on scroll position
      let currentSectionIndex = 0
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        
        if (currentScrollPosition >= sectionTop - viewportHeight/2 && currentScrollPosition < sectionBottom - viewportHeight/2) {
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
          const headerHeight = 80 // Account for navigation bar
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
      }, 1000)
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
