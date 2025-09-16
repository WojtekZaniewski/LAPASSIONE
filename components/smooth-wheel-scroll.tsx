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
      
      if (isScrolling.current) {
        console.log('Already scrolling, ignoring')
        return
      }
      
      isScrolling.current = true
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      
      const sections = document.querySelectorAll('.snap-section')
      const currentScrollPosition = window.pageYOffset
      const viewportHeight = window.innerHeight
      const currentSectionIndex = Math.round(currentScrollPosition / viewportHeight)
      
      console.log('Current scroll position:', currentScrollPosition)
      console.log('Current section index:', currentSectionIndex)
      console.log('Total sections:', sections.length)
      
      let nextIndex = currentSectionIndex

      // Determine scroll direction and next section
      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scrolling down
        nextIndex = currentSectionIndex + 1
        console.log('Scrolling down to section:', nextIndex)
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        // Scrolling up
        nextIndex = currentSectionIndex - 1
        console.log('Scrolling up to section:', nextIndex)
      } else {
        // Already at first or last section
        console.log('Already at boundary, not scrolling')
        isScrolling.current = false
        return
      }

      if (nextIndex !== currentSectionIndex) {
        // Smooth scroll to next section
        const nextSection = sections[nextIndex] as HTMLElement
        console.log('Scrolling to section:', nextSection)
        console.log('Section ID:', nextSection.id)

        if (nextSection) {
          const elementPosition = nextSection.offsetTop
          const headerHeight = 80
          const offsetPosition = elementPosition - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }

      // Reset scrolling flag after animation completes
      scrollTimeout.current = setTimeout(() => {
        console.log('Scroll animation completed')
        isScrolling.current = false
      }, 1000)
    }

    // Add wheel event listener to document and window
    document.addEventListener('wheel', handleWheel, { passive: false })
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
