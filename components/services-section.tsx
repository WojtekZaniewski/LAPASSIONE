"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/use-intersection-observer"

const services = [
  {
    title: "Strzyżenie Premium",
    description: "Precyzyjne cięcie wykonane przez mistrzów fryzjerstwa z wykorzystaniem najnowszych technik.",
    price: "od 200 zł",
  },
  {
    title: "Koloryzacja Haute Couture",
    description: "Ekskluzywne techniki koloryzacji inspirowane najnowszymi trendami z wybiegów mody.",
    price: "od 350 zł",
  },
  {
    title: "Stylizacje Modowe",
    description: "Unikalne fryzury na specjalne okazje, tworzone z myślą o najwyższych standardach elegancji.",
    price: "od 180 zł",
  },
  {
    title: "Pielęgnacja VIP",
    description: "Luksusowe zabiegi regenerujące z wykorzystaniem najlepszych produktów premium.",
    price: "od 250 zł",
  },
]

export function ServicesSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
  })

  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    animationType: "slide-in-from-top",
    threshold: 0.1,
    delay: 200,
  })

  const servicesRef = useStaggeredAnimation(services.length, 150, "scale-in")

  return (
    <section id="services" ref={sectionRef} className="snap-section min-h-screen w-screen opacity-0 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'oklch(0.95 0.15 85)' }}
          >
            Nasze Usługi
          </h2>
          <div 
            className="w-16 h-px mx-auto mb-6"
            style={{ backgroundColor: 'oklch(0.8 0.15 85)' }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto text-pretty"
            style={{ color: 'oklch(0.8 0.1 85)' }}
          >
            Odkryj pełną gamę luksusowych usług fryzjerskich, które podkreślą Twoją naturalną elegancję i styl.
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card group hover:shadow-xl transition-all duration-500 hover:scale-105 opacity-0 p-6 text-center reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 
                className="font-serif text-lg font-semibold mb-3 transition-colors"
                style={{ color: 'oklch(0.9 0.1 85)' }}
              >
                {service.title}
              </h3>
              <p 
                className="mb-4 leading-relaxed text-sm"
                style={{ color: 'oklch(0.7 0.1 85)' }}
              >
                {service.description}
              </p>
              <div 
                className="font-semibold text-base"
                style={{ color: 'oklch(0.8 0.15 85)' }}
              >
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
