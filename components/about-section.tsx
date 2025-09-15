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
    <section ref={sectionRef} className="section-modern bg-white opacity-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div ref={textRef} className="opacity-0">
            <div className="mb-8">
              <span className="text-sm font-medium tracking-widest uppercase text-black/60 mb-4 block">
                About Us
              </span>
              <h2 className="heading-2 text-black mb-8">
                HELPING BRANDS<br />
                MOVE THE WORLD<br />
                <span className="text-black/40">FORWARD</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed text-black/70">
              <p>
                W La Passione wierzymy, że fryzjerstwo to sztuka, która łączy technikę z kreatywnością. Nasz zespół
                ekspertów czerpie inspirację z najnowszych trendów haute couture, tworząc unikalne stylizacje dopasowane
                do Twojej osobowości.
              </p>
              <p>
                Każda wizyta w naszym salonie to podróż przez świat luksusu i elegancji, gdzie dbałość o detale spotyka
                się z najwyższą jakością obsługi.
              </p>
            </div>

            <div className="mt-12">
              <button className="btn-modern">
                Dowiedz się więcej
              </button>
            </div>
          </div>
          
          <div ref={imageRef} className="relative opacity-0">
            <div className="relative group">
              <img
                src="/luxury-hair-salon-interior-modern-elegant-design-w.jpg"
                alt="Wnętrze salonu La Passione"
                className="w-full h-[600px] object-cover hover-lift"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
            </div>
            
            {/* Modern geometric overlays */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-black/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-black/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
