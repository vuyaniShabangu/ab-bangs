import type React from "react"
import type { Metadata } from "next"
import { Lexend_Deca } from "next/font/google"
import "./globals.css"

const lexendDeca = Lexend_Deca({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bang's Kitchen - Farm-to-Table Catering Excellence",
  description: "Delivering freshly prepared, healthy meals for individuals, corporations, and schools.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexendDeca.className}>{children}</body>
    </html>
  )
}
