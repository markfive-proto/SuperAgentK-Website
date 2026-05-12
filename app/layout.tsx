import type { Metadata } from 'next'
import { Hanken_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-hanken',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SuperAgentK | AI Employees for Financial Teams',
  description:
    'Your AI teammate that thinks ahead, takes action, and delivers results across every financial workflow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`light text-[16px] ${hanken.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  )
}
