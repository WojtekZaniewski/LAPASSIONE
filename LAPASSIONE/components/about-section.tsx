"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-card-foreground">Filozofia Piękna</h2>
            <div className="w-16 h-px bg-secondary mb-8"></div>
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
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <img
              src="/luxury-hair-salon-interior-modern-elegant-design-w.jpg"
              alt="Wnętrze salonu La Passione"
              className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
