import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Salvador Karakachoff | Software Engineer, AI Systems',
  description: 'Software Engineer specializing in Conversational AI Systems and Data Engineering. Crafting intelligent systems & robust software.',
  openGraph: {
    title: 'Salvador Karakachoff | Software Engineer',
    description: 'Software Engineer specializing in Conversational AI Systems and Data Engineering.',
    url: 'https://salvadorkarakachoff.com',
    siteName: 'Salvador Karakachoff Portfolio',
    images: [
      {
        url: 'https://salvadorkarakachoff.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salvador Karakachoff | Software Engineer',
    description: 'Software Engineer specializing in Conversational AI Systems and Data Engineering.',
    images: ['https://salvadorkarakachoff.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="dark">
      <body  className="bg-slate-100/90 dark:bg-neutral-900 overflow-x-hidden relative"> 
        <div className="fixed inset-0 bg-noise pointer-events-none" />
        <Header />

        {children}
        <Analytics/>
        <SpeedInsights/>
        <Footer />

      </body>
      
    </html>
  )
}
