"use client"

import { useEffect } from "react"
import { initAllScrollAnimations } from "@/lib/scroll-animations"

export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initAllScrollAnimations()
  }, [])

  return <>{children}</>
}
