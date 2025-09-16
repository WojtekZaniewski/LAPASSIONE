"use client"

import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { smoothScrollTo } from "@/lib/scroll-animations"

export function HeroSection() {
  const [titleRef, isTitleVisible] = useIntersectionObserver({
    animationType: "slide-in-from-top",
    threshold: 0.1,
  })

  const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
    delay: 200,
  })

  const [descriptionRef, isDescriptionVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
    delay: 400,
  })

  const [buttonRef, isButtonVisible] = useIntersectionObserver({
    animationType: "bounce-in",
    threshold: 0.1,
    delay: 600,
  })

  const [scrollRef, isScrollVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
    delay: 1000,
  })

  return (
    <section id="home" className="snap-section relative min-h-screen w-screen flex items-center justify-center">
      {/* Background Image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/elegant-fashion-model-with-perfect-hairstyle-in-lu.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      {/* Floating glass elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-enhanced w-20 h-20 top-20 left-10"></div>
        <div className="floating-enhanced w-16 h-16 top-40 right-20"></div>
        <div className="floating-enhanced w-12 h-12 bottom-40 left-1/4"></div>
        <div className="floating-enhanced w-24 h-24 bottom-20 right-1/4"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/50 rounded-full animate-pulse animate-delay-500"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-pulse animate-delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 
            ref={titleRef}
            className="font-serif text-6xl md:text-8xl font-bold mb-4 text-balance opacity-0 gold-shimmer-text"
          >
            La Passione
          </h1>
          <div 
            ref={subtitleRef}
            className="w-24 h-px mx-auto mb-6 opacity-0 liquid-wave"
            style={{ backgroundColor: 'oklch(0.8 0.15 85)' }}
          ></div>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl font-light tracking-wide text-balance opacity-0"
            style={{ color: 'oklch(0.9 0.1 85)' }}
          >
            Twoje włosy, Twoja pasja
          </p>
        </div>

        <div 
          ref={descriptionRef}
          className="glass-container p-8 mb-8 max-w-2xl mx-auto opacity-0"
        >
          <p 
            className="text-lg md:text-xl leading-relaxed text-pretty"
            style={{ color: 'oklch(0.9 0.1 85)' }}
          >
            Odkryj świat luksusowego fryzjerstwa, gdzie każda wizyta to wyjątkowe doświadczenie inspirowane najnowszymi
            trendami z wybiegów mody.
          </p>
        </div>

        <Button
          ref={buttonRef}
          size="lg"
          onClick={() => smoothScrollTo("booking", 80)}
          className="glass-button px-8 py-3 text-lg font-medium tracking-wide opacity-0"
        >
          Umów wizytę
        </Button>
      </div>

      {/* Enhanced scroll indicator */}
      <button 
        ref={scrollRef}
        onClick={() => smoothScrollTo("services", 80)}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:scale-110 transition-transform duration-300"
        style={{ color: 'oklch(0.9 0.1 85)' }}
      >
        <div 
          className="w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-300"
          style={{ 
            borderColor: 'oklch(0.8 0.15 85)',
            '--hover-border-color': 'oklch(0.9 0.2 85)'
          }}
        >
          <div 
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{ backgroundColor: 'oklch(0.8 0.15 85)' }}
          ></div>
        </div>
        <p className="text-xs mt-2 tracking-wider">PRZEWIŃ W DÓŁ</p>
      </button>
    </section>
  )
}
