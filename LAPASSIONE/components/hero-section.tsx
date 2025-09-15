"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/elegant-fashion-model-with-perfect-hairstyle-in-lu.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 text-balance">La Passione</h1>
          <div className="w-24 h-px bg-secondary mx-auto mb-6 animate-fade-in-up animate-delay-200"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-balance animate-fade-in-up animate-delay-400">
            Twoje włosy, Twoja pasja
          </p>
        </div>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-pretty animate-fade-in-up animate-delay-600">
          Odkryj świat luksusowego fryzjerstwa, gdzie każda wizyta to wyjątkowe doświadczenie inspirowane najnowszymi
          trendami z wybiegów mody.
        </p>

        <Button
          size="lg"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 text-lg font-medium tracking-wide animate-fade-in-up animate-delay-600 hover:scale-105 transition-transform duration-300"
        >
          Umów wizytę
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
