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
      <body className={`${inter.className} bg-white relative min-h-screen`}>
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url('/images/N-HiTec_filigrane.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            opacity: 0.05,
          }}
        ></div> 

        <div className="md:hidden flex justify-center p-4">
          <Logo />
        </div>

        <div className="flex flex-col md:flex-row">
          <Navigation />
          <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto relative z-10">
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