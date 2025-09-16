"use client"

// Scroll animation observer
export function initScrollAnimations() {
  // Reveal animations
  const reveals = document.querySelectorAll('.reveal')
  const glassReveals = document.querySelectorAll('.glass-reveal')
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  reveals.forEach(reveal => revealObserver.observe(reveal))
  glassReveals.forEach(reveal => revealObserver.observe(reveal))

  // Text reveal animations
  const textReveals = document.querySelectorAll('.text-reveal')
  
  textReveals.forEach(textReveal => {
    const text = textReveal.textContent || ''
    textReveal.innerHTML = text.split('').map(char => 
      char === ' ' ? ' ' : `<span>${char}</span>`
    ).join('')
    
    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, { threshold: 0.5 })
    
    textObserver.observe(textReveal)
  })

  // Parallax scrolling
  const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-fast')
  
  const parallaxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const speed = entry.target.classList.contains('parallax-slow') ? 0.5 : 1.5
        const updateParallax = () => {
          const scrolled = window.pageYOffset
          const rate = scrolled * -speed
          entry.target.style.setProperty('--scroll-slow', `${rate}px`)
          entry.target.style.setProperty('--scroll-fast', `${rate}px`)
        }
        
        window.addEventListener('scroll', updateParallax)
        
        // Cleanup
        const cleanup = () => {
          window.removeEventListener('scroll', updateParallax)
        }
        
        // Store cleanup function
        ;(entry.target as any).__cleanup = cleanup
      } else {
        // Cleanup when element is not visible
        if ((entry.target as any).__cleanup) {
          (entry.target as any).__cleanup()
        }
      }
    })
  }, { threshold: 0 })
  
  parallaxElements.forEach(el => parallaxObserver.observe(el))
}

// Smooth scroll to element
export function smoothScrollTo(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Scroll progress tracking
export function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress') as HTMLElement
  if (!progressBar) return

  const updateProgress = () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = `${scrollPercent}%`
  }

  window.addEventListener('scroll', updateProgress)
  updateProgress() // Initial call
}

// Initialize all scroll animations
export function initAllScrollAnimations() {
  if (typeof window !== 'undefined') {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initScrollAnimations()
        initScrollProgress()
      })
    } else {
      initScrollAnimations()
      initScrollProgress()
    }
  }
}
