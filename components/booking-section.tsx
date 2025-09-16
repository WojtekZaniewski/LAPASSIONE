"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function BookingSection() {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({
    animationType: "fade-in-up",
    threshold: 0.1,
  })

  const [headerRef, isHeaderVisible] = useIntersectionObserver({
    animationType: "slide-in-from-top",
    threshold: 0.1,
    delay: 200,
  })

  const [formRef, isFormVisible] = useIntersectionObserver({
    animationType: "scale-in",
    threshold: 0.1,
    delay: 400,
  })

  return (
    <section id="booking" ref={sectionRef} className="snap-section py-20 bg-card opacity-0 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} className="text-center mb-16 opacity-0">
            <div className="glass-container p-8 max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-secondary">Rezerwacja Online</h2>
              <div className="w-16 h-px bg-secondary mx-auto mb-6 liquid-wave"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Zarezerwuj swoją wizytę w La Passione i doświadcz luksusowego fryzjerstwa na najwyższym poziomie.
              </p>
            </div>
          </div>

          <div
            ref={formRef}
            className="glass-card shadow-xl hover:shadow-2xl opacity-0 p-8"
          >
            <div className="text-center pb-8">
              <h3 className="font-serif text-2xl text-secondary">Umów wizytę</h3>
            </div>
            <div className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Imię i nazwisko</label>
                    <Input
                      placeholder="Wprowadź swoje imię i nazwisko"
                      className="bg-input border-border focus:ring-secondary transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <Input
                      placeholder="Wprowadź numer telefonu"
                      className="bg-input border-border focus:ring-secondary transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Wprowadź adres email"
                    className="bg-input border-border focus:ring-secondary transition-all duration-300 focus:scale-105"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferowana data</label>
                    <Input
                      type="date"
                      className="bg-input border-border focus:ring-secondary transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferowana godzina</label>
                    <Input
                      type="time"
                      className="bg-input border-border focus:ring-secondary transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Rodzaj usługi</label>
                  <select className="w-full p-3 bg-input border border-border rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 focus:scale-105">
                    <option>Wybierz usługę</option>
                    <option>Strzyżenie Premium</option>
                    <option>Koloryzacja Haute Couture</option>
                    <option>Stylizacje Modowe</option>
                    <option>Pielęgnacja VIP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Dodatkowe uwagi</label>
                  <Textarea
                    placeholder="Opisz swoje oczekiwania lub specjalne życzenia"
                    className="bg-input border-border focus:ring-secondary min-h-[100px] transition-all duration-300 focus:scale-105"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glass-button py-3 text-lg font-medium hover:scale-105 transition-all duration-300"
                >
                  Zarezerwuj wizytę
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
