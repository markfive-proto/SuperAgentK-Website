import type { Metadata } from 'next'
import PageContent from './components/PageContent'

const title = 'SuperAgentK — AI Employees for Every Business'
const description =
  'SuperAgentK deploys intelligent AI employees that handle admin, payroll, EPF, SOCSO, SST submissions, compliance, sales and more. Set up your dedicated AI workforce today.'
const url = 'https://www.superagentk.com'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI employee',
    'AI automation',
    'business automation',
    'EPF SOCSO SST',
    'payroll automation',
    'admin assistant AI',
    'AI agents Malaysia',
    'workflow automation',
    'financial automation',
    'SuperAgentK',
  ],
  metadataBase: new URL(url),
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: 'SuperAgentK',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SuperAgentK — AI Employees for Every Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
}

export default function Page() {
  return <PageContent />
}
