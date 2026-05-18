import type { Metadata } from 'next'
import { Hanken_Grotesk, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-41KVWTVFHW'

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
  title: {
    default: 'SuperAgentK — AI Employees for Every Business',
    template: '%s | SuperAgentK',
  },
  description:
    'SuperAgentK deploys intelligent AI employees that handle admin, payroll, EPF, SOCSO, SST submissions, compliance, sales and more.',
  themeColor: '#4f378a',
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        {children}
      </body>
    </html>
  )
}
