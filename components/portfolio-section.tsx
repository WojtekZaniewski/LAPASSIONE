"use client"

import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/use-intersection-observer"

export function PortfolioSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
  })

  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    animationType: "slide-in-from-top",
    threshold: 0.1,
    delay: 200,
  })

  const portfolioItems = [
    { 
      id: 1, 
      title: "Elegant Bob Cut",
      category: "Haircut",
      client: "Fashion Model",
      query: "elegant+bob+haircut+fashion+model+black+and+white+professional"
    },
    { 
      id: 2, 
      title: "Luxury Hair Coloring",
      category: "Coloring",
      client: "Haute Couture",
      query: "luxury+hair+coloring+blonde+highlights+fashion+photography"
    },
    { 
      id: 3, 
      title: "Avant Garde Styling",
      category: "Styling",
      client: "Editorial",
      query: "avant+garde+hairstyle+editorial+fashion+creative+styling"
    },
    { 
      id: 4, 
      title: "Classic Updo",
      category: "Wedding",
      client: "Bridal Collection",
      query: "classic+updo+wedding+hairstyle+elegant+sophisticated"
    },
    { 
      id: 5, 
      title: "Modern Pixie",
      category: "Haircut",
      client: "Fashion Week",
      query: "modern+pixie+cut+edgy+fashion+model+studio+lighting"
    },
    { 
      id: 6, 
      title: "Luxury Treatment",
      category: "Treatment",
      client: "VIP Client",
      query: "long+wavy+hair+luxury+salon+treatment+glossy+finish"
    },
  ]

  const portfolioRef = useStaggeredAnimation(portfolioItems.length, 100, "zoom-in")

  return (
    <section ref={sectionRef} className="section-modern bg-white opacity-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={headerRef} className="text-center mb-24 opacity-0">
          <span className="text-sm font-medium tracking-widest uppercase text-black/60 mb-4 block">
            Portfolio
          </span>
          <h2 className="heading-2 text-black mb-8">
            Case studies<br />
            <span className="text-black/40">Featured Projects</span>
          </h2>
          <p className="text-lg text-black/70 max-w-4xl mx-auto leading-relaxed">
            Poznaj nasze najnowsze kreacje inspirowane światem haute couture i najnowszymi trendami z międzynarodowych wybiegów.
          </p>
        </div>

        <div ref={portfolioRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-black overflow-hidden hover-lift opacity-0"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={`/abstract-geometric-shapes.png?height=600&width=480&query=${item.query}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white">
                    <div className="mb-2">
                      <span className="text-xs font-medium tracking-widest uppercase text-white/60">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-display text-xl font-semibold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">
                      {item.client}
                    </p>
                    <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                      <span className="text-sm">Zobacz więcej</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-modern">
            Zobacz więcej projektów
          </button>
        </div>
      </div>
    </section>
  )
}
