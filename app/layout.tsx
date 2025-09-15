import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata: Metadata = {
  title: "La Passione - Ekskluzywny Salon Fryzjerski",
  description: "Luksusowy salon fryzjerski w stylu high fashion. Twoje włosy, Twoja pasja.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`font-sans ${inter.variable} ${crimsonText.variable} antialiased relative`}>
        {/* Background glass elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="floating-glass w-32 h-32 top-1/4 left-1/4 opacity-30"></div>
          <div className="floating-glass w-24 h-24 top-3/4 right-1/3 opacity-20"></div>
          <div className="floating-glass w-40 h-40 bottom-1/4 left-1/2 opacity-25"></div>
          <div className="floating-glass w-16 h-16 top-1/2 right-1/4 opacity-35"></div>
        </div>
        
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
