import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Logo from "@/components/logo"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

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
      <body className={`${inter.className} relative min-h-screen`}>
        {/* Gradient Background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-gray-50 via-white to-red-50"></div>

        {/* Animated Background Shapes */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Watermark */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url('/images/N-HiTec_filigrane.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            opacity: 0.03,
          }}
        ></div>

        <div className="md:hidden flex justify-center p-4 relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <Logo />
        </div>

        <div className="flex flex-col md:flex-row relative z-10">
          <Navigation />
          <main className="flex-1 p-6 md:p-10 pt-20 md:pt-10 max-w-5xl mx-auto w-full md:w-auto">
            <div className="hidden md:flex justify-start mb-6">
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



import './globals.css'