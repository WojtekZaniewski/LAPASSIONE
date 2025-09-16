"use client"

import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ContactSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
  })

  const [infoRef, isInfoVisible] = useIntersectionObserver({
    animationType: "slide-in-left",
    threshold: 0.1,
    delay: 200,
  })

  const [mapRef, isMapVisible] = useIntersectionObserver({
    animationType: "slide-in-right",
    threshold: 0.1,
    delay: 400,
  })

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-primary text-primary-foreground opacity-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div ref={infoRef} className="opacity-0">
            <div className="glass-container p-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">Kontakt</h2>
              <div className="w-16 h-px bg-secondary mb-8 liquid-wave"></div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-primary-foreground/80">
                      ul. Elegancka 15
                      <br />
                      00-001 Warszawa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-primary-foreground/80">+48 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-primary-foreground/80">kontakt@lapassione.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Godziny otwarcia</h3>
                    <div className="text-primary-foreground/80 space-y-1">
                      <p>Pon - Pt: 9:00 - 20:00</p>
                      <p>Sobota: 9:00 - 18:00</p>
                      <p>Niedziela: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold mb-4">Śledź nas</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 glass-button rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div ref={mapRef} className="relative opacity-0">
            <div className="glass-card rounded-lg h-96 flex items-center justify-center hover:scale-105 transition-transform duration-500">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p>Mapa lokalizacji</p>
                <p className="text-sm">ul. Elegancka 15, Warszawa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
