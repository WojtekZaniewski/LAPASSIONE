"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

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
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Nasze Usługi</h2>
          <div className="w-16 h-px bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Odkryj pełną gamę luksusowych usług fryzjerskich, które podkreślą Twoją naturalną elegancję i styl.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-xl font-semibold mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
                <div className="text-secondary font-semibold text-lg">{service.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
