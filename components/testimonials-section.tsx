"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useIntersectionObserver, useStaggeredAnimation } from "@/hooks/use-intersection-observer"

const testimonials = [
  {
    text: "La Passione to miejsce, gdzie marzenia o idealnej fryzurze stają się rzeczywistością. Profesjonalizm na najwyższym poziomie.",
    author: "Anna Kowalska",
    role: "Modelka",
  },
  {
    text: "Każda wizyta to wyjątkowe doświadczenie. Zespół La Passione rozumie moje potrzeby i zawsze przekracza oczekiwania.",
    author: "Magdalena Nowak",
    role: "Dyrektor kreatywny",
  },
  {
    text: "Salon, który łączy luksus z najnowszymi trendami. Moja fryzura zawsze przyciąga uwagę i komplementy.",
    author: "Katarzyna Wiśniewska",
    role: "Influencerka",
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
    <section id="testimonials" ref={sectionRef} className="snap-section min-h-screen w-screen opacity-0 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <div className="glass-container p-8 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Opinie Klientów</h2>
            <div className="w-16 h-px bg-secondary mx-auto mb-6 liquid-wave"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Poznaj opinie naszych zadowolonych klientów, którzy zaufali naszej ekspertyzie i doświadczeniu w świecie
              luksusowego fryzjerstwa.
            </p>
          </div>
        </div>

        <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card hover:shadow-lg transition-all duration-700 hover:scale-105 opacity-0 p-8 reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-secondary text-4xl mb-4 font-serif">"</div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.text}</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
