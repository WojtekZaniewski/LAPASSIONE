"use client"

import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/use-intersection-observer"

const services = [
  {
    title: "Strzyżenie Premium",
    description: "Precyzyjne cięcie wykonane przez mistrzów fryzjerstwa z wykorzystaniem najnowszych technik.",
    price: "od 200 zł",
    category: "Haircut"
  },
  {
    title: "Koloryzacja Haute Couture",
    description: "Ekskluzywne techniki koloryzacji inspirowane najnowszymi trendami z wybiegów mody.",
    price: "od 350 zł",
    category: "Coloring"
  },
  {
    title: "Stylizacje Modowe",
    description: "Unikalne fryzury na specjalne okazje, tworzone z myślą o najwyższych standardach elegancji.",
    price: "od 180 zł",
    category: "Styling"
  },
  {
    title: "Pielęgnacja VIP",
    description: "Luksusowe zabiegi regenerujące z wykorzystaniem najlepszych produktów premium.",
    price: "od 250 zł",
    category: "Treatment"
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
    <section ref={sectionRef} className="section-modern bg-black text-white opacity-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={headerRef} className="text-center mb-24 opacity-0">
          <span className="text-sm font-medium tracking-widest uppercase text-white/60 mb-4 block">
            Services
          </span>
          <h2 className="heading-2 text-white mb-8">
            WHY leading brands<br />
            partner with <span className="text-white/60">la passione</span>
          </h2>
          <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            From premium haircuts to luxury treatments, we are pioneering hair artistry & styling that redefines visual storytelling. See how we help brands make a mark.
          </p>
        </div>

        <div ref={servicesRef} className="grid-modern">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover-lift opacity-0"
            >
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-medium tracking-widest uppercase text-white/60">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-display text-2xl font-semibold mb-6 text-white group-hover:text-white/80 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/70 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">
                    {service.price}
                  </span>
                  <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center group-hover:border-white/60 transition-colors">
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-modern">
            Zobacz wszystkie usługi
          </button>
        </div>
      </div>
    </section>
  )
}
