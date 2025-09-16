"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  animationType?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "bounce" | "zoom" | "rotate"
  delay?: number
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
    animationType = "fade",
    delay = 0
  } = options

  const elementRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true)
              if (triggerOnce) setHasAnimated(true)
            }, delay)
          } else {
            setIsVisible(true)
            if (triggerOnce) setHasAnimated(true)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, delay])

  const getAnimationClass = () => {
    if (!isVisible && !hasAnimated) return ""
    
    const baseClasses = "opacity-0"
    const animationClasses = {
      fade: "animate-fade-in-up",
      "slide-up": "animate-slide-in-bottom",
      "slide-left": "animate-slide-in-left",
      "slide-right": "animate-slide-in-right",
      scale: "animate-scale-in",
      bounce: "animate-bounce-in",
      zoom: "animate-zoom-in",
      rotate: "animate-rotate-in"
    }

    return `${baseClasses} ${animationClasses[animationType]}`
  }

  return {
    ref: elementRef,
    isVisible,
    animationClass: getAnimationClass()
  }
}

export function useParallaxScroll(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return offset
}

export function useStaggeredScrollAnimation(
  itemCount: number,
  staggerDelay: number = 100,
  animationType: string = "fade"
) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false))
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev]
                newState[i] = true
                return newState
              })
            }, i * staggerDelay)
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(container)

    return () => {
      observer.unobserve(container)
    }
  }, [itemCount, staggerDelay])

  return {
    containerRef,
    visibleItems
  }
}
