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
    <section ref={sectionRef} className="section-modern bg-black text-white opacity-0">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24">
          <div ref={infoRef} className="opacity-0">
            <div className="mb-12">
              <span className="text-sm font-medium tracking-widest uppercase text-white/60 mb-4 block">
                Contact
              </span>
              <h2 className="heading-2 text-white mb-8">
                Let's make something<br />
                <span className="text-white/60">unforgettable</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white/60 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-white">Adres</h3>
                  <p className="text-white/80 text-lg">
                    ul. Elegancka 15<br />
                    00-001 Warszawa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white/60 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-white">Telefon</h3>
                  <p className="text-white/80 text-lg">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white/60 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-white">Email</h3>
                  <p className="text-white/80 text-lg">kontakt@lapassione.pl</p>
                </div>
              </div>

              <div className="flex items-start gap-6 hover:translate-x-2 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white/60 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-white">Godziny otwarcia</h3>
                  <div className="text-white/80 text-lg space-y-1">
                    <p>Pon - Pt: 9:00 - 20:00</p>
                    <p>Sobota: 9:00 - 18:00</p>
                    <p>Niedziela: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="font-semibold mb-6 text-white">Śledź nas</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-14 h-14 border border-white/20 text-white rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 border border-white/20 text-white rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div ref={mapRef} className="relative opacity-0">
            <div className="bg-white/5 border border-white/10 rounded-lg h-[500px] flex items-center justify-center hover:bg-white/10 transition-all duration-500 hover-lift">
              <div className="text-center text-white/60">
                <MapPin className="w-16 h-16 mx-auto mb-6" />
                <p className="text-lg mb-2">Mapa lokalizacji</p>
                <p className="text-sm">ul. Elegancka 15, Warszawa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white/60">
              <p className="text-sm">All content © La Passione 2025</p>
            </div>
            <div className="flex gap-8 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
