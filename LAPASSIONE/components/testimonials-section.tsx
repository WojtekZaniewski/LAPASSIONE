"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

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
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Opinie Klientów</h2>
          <div className="w-16 h-px bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Poznaj opinie naszych zadowolonych klientów, którzy zaufali naszej ekspertyzie i doświadczeniu w świecie
            luksusowego fryzjerstwa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:shadow-lg transition-all duration-700 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-secondary text-4xl mb-4 font-serif">"</div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">{testimonial.text}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
