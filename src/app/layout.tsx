import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
    <html lang="en">
      <body className="dark">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
