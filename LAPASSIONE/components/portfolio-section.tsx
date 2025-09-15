"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function PortfolioSection() {
  const [ref, isVisible] = useIntersectionObserver()

  const portfolioImages = [
    { id: 1, query: "elegant+bob+haircut+fashion+model+black+and+white+professional" },
    { id: 2, query: "luxury+hair+coloring+blonde+highlights+fashion+photography" },
    { id: 3, query: "avant+garde+hairstyle+editorial+fashion+creative+styling" },
    { id: 4, query: "classic+updo+wedding+hairstyle+elegant+sophisticated" },
    { id: 5, query: "modern+pixie+cut+edgy+fashion+model+studio+lighting" },
    { id: 6, query: "long+wavy+hair+luxury+salon+treatment+glossy+finish" },
  ]

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Portfolio</h2>
          <div className="w-16 h-px bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Poznaj nasze najnowsze kreacje inspirowane światem haute couture i najnowszymi trendami z międzynarodowych
            wybiegów.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-lg aspect-[4/5] bg-muted transition-all duration-700 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={`/abstract-geometric-shapes.png?height=600&width=480&query=${image.query}`}
                alt={`Portfolio ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-medium">
                    Zobacz więcej
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
