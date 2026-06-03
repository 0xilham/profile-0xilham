import type React from "react"
import { Kalam, Patrick_Hand } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
})

const patrickHand = Patrick_Hand({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-patrick-hand",
})

export const metadata = {
  title: "Ilham Nur Hermawan | Portfolio",
  description: "Web3 & Game Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={`${kalam.variable} ${patrickHand.variable} font-patrick-hand text-lg leading-relaxed overflow-x-hidden pb-20 md:pb-0`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
