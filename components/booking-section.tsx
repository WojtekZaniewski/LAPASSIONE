"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
    <section ref={sectionRef} className="section-modern bg-white opacity-0">
      <div className="container mx-auto px-6 max-w-4xl">
        <div ref={headerRef} className="text-center mb-24 opacity-0">
          <span className="text-sm font-medium tracking-widest uppercase text-black/60 mb-4 block">
            Booking
          </span>
          <h2 className="heading-2 text-black mb-8">
            Ready to discuss<br />
            <span className="text-black/40">your next project?</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            Zarezerwuj swoją wizytę w La Passione i doświadcz luksusowego fryzjerstwa na najwyższym poziomie.
          </p>
        </div>

        <div
          ref={formRef}
          className="bg-black text-white p-12 hover-lift opacity-0"
        >
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-4 text-white/80">Imię i nazwisko</label>
                <Input
                  placeholder="Wprowadź swoje imię i nazwisko"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-4 text-white/80">Telefon</label>
                <Input
                  placeholder="Wprowadź numer telefonu"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4 text-white/80">Email</label>
              <Input
                type="email"
                placeholder="Wprowadź adres email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-4 text-white/80">Preferowana data</label>
                <Input
                  type="date"
                  className="bg-white/10 border-white/20 text-white focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-4 text-white/80">Preferowana godzina</label>
                <Input
                  type="time"
                  className="bg-white/10 border-white/20 text-white focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4 text-white/80">Rodzaj usługi</label>
              <select className="w-full p-4 bg-white/10 border border-white/20 rounded-md text-white focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300">
                <option className="bg-black text-white">Wybierz usługę</option>
                <option className="bg-black text-white">Strzyżenie Premium</option>
                <option className="bg-black text-white">Koloryzacja Haute Couture</option>
                <option className="bg-black text-white">Stylizacje Modowe</option>
                <option className="bg-black text-white">Pielęgnacja VIP</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4 text-white/80">Dodatkowe uwagi</label>
              <Textarea
                placeholder="Opisz swoje oczekiwania lub specjalne życzenia"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 min-h-[120px] focus:ring-white/50 focus:border-white/50 transition-all duration-300"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-white/90 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Zarezerwuj wizytę
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
