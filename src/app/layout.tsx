import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/header/Header'

export const metadata: Metadata = {
  title: 'Salvador Karakachoff - Computer Engineering and Data Science',
  description: 'Web Developer with over 3 years of experience. IT Support. Advanced student in Computer Engineering and Data Science.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="dark">
      <body  className="bg-slate-100/90 dark:bg-neutral-900 overflow-x-hidden"> 
        <Header />

        {children}

        <Footer />

      </body>
    </html>
  )
}
