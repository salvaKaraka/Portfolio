import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import Head from 'next/head'

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

              <Head>
          <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-7TFF89Y8XW"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-7TFF89Y8XW');
            </script>
        </Head>

      
      <body  className="bg-slate-100/90 dark:bg-neutral-900 overflow-x-hidden"> 
        <Header />

        {children}

        <Footer />

      </body>
    </html>
  )
}
