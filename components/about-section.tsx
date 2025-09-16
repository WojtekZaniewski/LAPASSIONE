"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function AboutSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
  })

  const [textRef, isTextVisible] = useIntersectionObserver({
    animationType: "slide-in-left",
    threshold: 0.1,
    delay: 200,
  })

  const [imageRef, isImageVisible] = useIntersectionObserver({
    animationType: "slide-in-right",
    threshold: 0.1,
    delay: 400,
  })

  return (
    <section ref={sectionRef} className="py-20 bg-card opacity-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="opacity-0">
            <div className="glass-container p-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Filozofia Piękna
              </h2>
              <div className="w-16 h-px bg-secondary mb-8 liquid-wave"></div>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                W La Passione wierzymy, że fryzjerstwo to sztuka, która łączy technikę z kreatywnością. Nasz zespół
                ekspertów czerpie inspirację z najnowszych trendów haute couture, tworząc unikalne stylizacje dopasowane
                do Twojej osobowości.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Każda wizyta w naszym salonie to podróż przez świat luksusu i elegancji, gdzie dbałość o detale spotyka
                się z najwyższą jakością obsługi.
              </p>
            </div>
          </div>
          <div ref={imageRef} className="relative opacity-0">
            <img
              src="/luxury-hair-salon-interior-modern-elegant-design-w.jpg"
              alt="Wnętrze salonu La Passione"
              className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-full blur-lg animate-pulse animate-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
