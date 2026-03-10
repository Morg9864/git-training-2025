import type React from "react"
import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Logo from "@/components/logo"
import Footer from "@/components/footer"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Formation Complète Git & GitHub",
  description: "Une formation complète sur Git, GitHub et GitLab, faites par N-HiTec.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${syne.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)] relative min-h-screen bg-white`}>

        {/* Watermark */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url('/images/N-HiTec_filigrane.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            opacity: 0.025,
          }}
        />

        <div className="md:hidden flex justify-center p-4 relative z-10 bg-white border-b border-gray-200">
          <Logo />
        </div>

        <div className="flex flex-col md:flex-row relative z-10">
          <Navigation />
          <main className="flex-1 p-6 md:p-10 pt-20 md:pt-10 max-w-5xl mx-auto w-full md:w-auto">
            <div className="hidden md:flex justify-start mb-8">
              <Logo />
            </div>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
