"use client"

import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/use-intersection-observer"

const testimonials = [
  {
    text: "La Passione to miejsce, gdzie marzenia o idealnej fryzurze stają się rzeczywistością. Profesjonalizm na najwyższym poziomie.",
    author: "Anna Kowalska",
    role: "Modelka",
    company: "Fashion Week"
  },
  {
    text: "Każda wizyta to wyjątkowe doświadczenie. Zespół La Passione rozumie moje potrzeby i zawsze przekracza oczekiwania.",
    author: "Magdalena Nowak",
    role: "Dyrektor kreatywny",
    company: "Haute Couture"
  },
  {
    text: "Salon, który łączy luksus z najnowszymi trendami. Moja fryzura zawsze przyciąga uwagę i komplementy.",
    author: "Katarzyna Wiśniewska",
    role: "Influencerka",
    company: "Lifestyle"
  },
]

export function TestimonialsSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
  })

  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    animationType: "slide-in-from-top",
    threshold: 0.1,
    delay: 200,
  })

  const testimonialsRef = useStaggeredAnimation(testimonials.length, 200, "bounce-in")

  return (
    <section ref={sectionRef} className="section-modern bg-black text-white opacity-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={headerRef} className="text-center mb-24 opacity-0">
          <span className="text-sm font-medium tracking-widest uppercase text-white/60 mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-2 text-white mb-8">
            <span className="text-white/60">CULTURE</span> IN MOTION<br />
            <span className="text-white/60">IMPACT</span> BY DESIGN
          </h2>
        </div>

        <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover-lift opacity-0"
            >
              <div className="p-8">
                <div className="text-white/60 text-6xl font-serif mb-6">"</div>
                <p className="text-white/80 mb-8 leading-relaxed text-lg">
                  {testimonial.text}
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-semibold text-lg mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-white/60 text-sm mb-2">
                    {testimonial.role}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-modern">
            Zobacz więcej opinii
          </button>
        </div>
      </div>
    </section>
  )
}
