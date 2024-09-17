// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: "Care Connect",
  description: "Conectando você ao seu bem-estar",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`} style={{ backgroundColor: '#ffffff', minHeight: '100vh', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
