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
    <section id="services" ref={sectionRef} className="snap-section min-h-screen w-screen bg-background opacity-0 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Nasze Usługi</h2>
          <div className="w-16 h-px bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Odkryj pełną gamę luksusowych usług fryzjerskich, które podkreślą Twoją naturalną elegancję i styl.
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card group hover:shadow-xl transition-all duration-500 border-border/50 hover:scale-105 opacity-0 p-6 text-center reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{service.description}</p>
              <div className="text-secondary font-semibold text-base">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
