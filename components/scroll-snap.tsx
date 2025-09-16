"use client"

import { useEffect, useRef } from "react"

export function ScrollSnap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true
        container.classList.add('scrolling')
      }

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
        container.classList.remove('scrolling')
      }, 150)
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      const sections = container.querySelectorAll('.snap-section')
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (!currentSection) return

      const currentIndex = Array.from(sections).indexOf(currentSection)
      let nextIndex = currentIndex

      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        // Scrolling down
        nextIndex = currentIndex + 1
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scrolling up
        nextIndex = currentIndex - 1
      }

      if (nextIndex !== currentIndex) {
        const nextSection = sections[nextIndex] as HTMLElement
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="snap-container"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}
