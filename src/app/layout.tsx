import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import SectionContainer from '@/components/section/SectionContainer'


export const metadata: Metadata = {
  title: 'Salvador Karakachoff - Ingeniería en computación y data science',
  description: 'Desarrollador web con más de 5 años de experiencia. Soporte en IT. Estudiante avanzado en Ingeniería en Computación y Data Science.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">

      <body  className="bg-slate-100/90 dark:bg-neutral-800 overflow-x-hidden">
        <div className="invisible dark:visible absolute top-0 z-[-2] h-screen w-screen bg-neutral-800 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(144,101,199,0.2),rgba(255,255,255,0))]"></div>
        <div className="dark:invisible absolute top-0 z-[-2] h-screen w-screen bg-slate-100/90 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(144,101,199,0.4),rgba(255,255,255,0))]"></div>
        <Header />

        {children}

        <Footer />
        
      </body>
    </html>
  )
}
