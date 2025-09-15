"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  animationType?: string
  delay?: number
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const {
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    triggerOnce = true,
    animationType = "fade-in-up",
    delay = 0,
  } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (triggerOnce) {
            setHasAnimated(true)
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  // Apply animation class when element comes into view
  useEffect(() => {
    if (isIntersecting && ref.current) {
      const element = ref.current
      
      // Add delay if specified
      if (delay > 0) {
        setTimeout(() => {
          element.classList.add(`animate-${animationType}`)
        }, delay)
      } else {
        element.classList.add(`animate-${animationType}`)
      }
    }
  }, [isIntersecting, animationType, delay])

  return [ref, isIntersecting, hasAnimated] as const
}

// Hook for staggered animations
export function useStaggeredAnimation(
  itemCount: number,
  staggerDelay: number = 100,
  baseAnimation: string = "fade-in-up"
) {
  const [ref, isIntersecting] = useIntersectionObserver({
    animationType: baseAnimation,
    threshold: 0.1,
  })

  useEffect(() => {
    if (isIntersecting && ref.current) {
      const children = ref.current.children
      Array.from(children).forEach((child, index) => {
        const element = child as HTMLElement
        setTimeout(() => {
          element.classList.add(`animate-${baseAnimation}`)
        }, index * staggerDelay)
      })
    }
  }, [isIntersecting, staggerDelay, baseAnimation])

  return ref
}
