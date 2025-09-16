"use client"

import { useEffect, useRef } from "react"

export function SmoothWheelScroll() {
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const lastWheelTime = useRef(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      const now = Date.now()
      
      // Throttle wheel events to prevent rapid scrolling
      if (now - lastWheelTime.current < 100) {
        return
      }
      
      lastWheelTime.current = now
      
      if (isScrolling.current) return
      
      isScrolling.current = true
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      
      const sections = document.querySelectorAll('.snap-section')
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect()
        return rect.top <= 80 && rect.bottom >= 80
      })

      if (!currentSection) {
        isScrolling.current = false
        return
      }

      const currentIndex = Array.from(sections).indexOf(currentSection)
      let nextIndex = currentIndex

      // Determine scroll direction and next section
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        // Scrolling down
        nextIndex = currentIndex + 1
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scrolling up
        nextIndex = currentIndex - 1
      } else {
        // Already at first or last section
        isScrolling.current = false
        return
      }

      if (nextIndex !== currentIndex) {
        const nextSection = sections[nextIndex] as HTMLElement
        
        // Smooth scroll to next section
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        
        // Add smooth transition class
        document.body.classList.add('smooth-scroll-active')
      }

      // Reset scrolling flag after animation completes
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false
        document.body.classList.remove('smooth-scroll-active')
      }, 1200)
    }

    // Add wheel event listener with passive: false to allow preventDefault
    document.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.removeEventListener('wheel', handleWheel)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      document.body.classList.remove('smooth-scroll-active')
    }
  }, [])

  return null
}
