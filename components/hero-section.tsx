"use client"

import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with modern overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/elegant-fashion-model-with-perfect-hairstyle-in-lu.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Modern geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 border border-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/5 rounded-full animate-pulse"></div>
      </div>

      {/* Content - Inertia Studios inspired layout */}
      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        {/* Main heading with bold typography */}
        <div className="mb-16">
          <h1 
            ref={titleRef}
            className="heading-1 mb-8 opacity-0"
          >
            LA <span className="text-white/60">PASSIONE</span>
          </h1>
          
          <div 
            ref={subtitleRef}
            className="text-display text-2xl md:text-3xl lg:text-4xl font-light tracking-widest uppercase mb-8 opacity-0"
          >
            Moving Hair, Brands and Visual Culture
          </div>
        </div>

        {/* Description with modern typography */}
        <div 
          ref={descriptionRef}
          className="max-w-4xl mx-auto mb-16 opacity-0"
        >
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/80 mb-8">
            A creative <strong className="text-white font-medium">hair studio</strong><br />
            Setting brands <strong className="text-white font-medium">in motion</strong>
          </p>
          
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Odkryj świat luksusowego fryzjerstwa, gdzie każda wizyta to wyjątkowe doświadczenie inspirowane najnowszymi trendami z wybiegów mody.
          </p>
        </div>

        {/* Modern CTA buttons */}
        <div 
          ref={buttonRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0"
        >
          <Button className="btn-modern-primary text-sm px-12 py-4">
            Umów wizytę
          </Button>
          <Button className="btn-modern text-sm px-12 py-4">
            Zobacz portfolio
          </Button>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div 
        ref={scrollRef}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 opacity-0"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-white/30"></div>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
