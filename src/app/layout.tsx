import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })
const EXAMPLES = [{"label": "Introduction", "text": "quien sos?"}, {"label": "Introduction", "text": "¿a que te dedicas?"}, {"label": "Contact", "text": "buscas trabajo?"}, {"label": "Contact", "text": "te interesa unirte a mi equipo?"}, {"label": "Introduction", "text": "en donde trabajas?"}, {"label": "Unknown", "text": "te gusta la musica pop?"}, {"label": "Unknown", "text": "las hamburquesas te parecen ricas?"}, {"label": "Unknown", "text": "¿como se llama tu perro?"}, {"label": "Introduction", "text": "que tecnologias conoces?"}, {"label": "Introduction", "text": "hace cuanto trabajas?"}, {"label": "Contact", "text": "tengo una oferta para vos"}, {"label": "Contact", "text": "quiero consultarte algo"}, {"label": "Contact", "text": "te puedo hacer una pregunta?"}, {"label": "Contact", "text": "como puedo contactarte?"}, {"label": "Introduction", "text": "Hola!"}, {"label": "Introduction", "text": "hola, como estas?"}, {"label": "Contact", "text": "cuales son tus redes?"}, {"label": "Contact", "text": "tenes linkedin?"}, {"label": "Contact", "text": "tenes github?"}, {"label": "Contact", "text": "tenes cv?"}, {"label": "Contact", "text": "donde puedo conseguir tu cv?"}, {"label": "Unknown", "text": "que clavito clavo pablito?"}, {"label": "Unknown", "text": "quien mato a roger rabbit?"}];
const INITIAL_MESSAGE="¡Hola! Estoy diseñado para responer algunas preguntas acerca de Salvador ¿Cómo puedo ayudarte en esta ocasión?";
const ANSWERS = {
    Introduction:(<p className="text-pretty">Hola, Soy Salvador! Tengo mas de 5 años de experiencia como desarrollador Web y mas de 2 como Soporte IT.
    Ademas de hacer web apps me gusta programar en Java, C, C++, Python, C#, entre otros lenguajes.
    Soy un estudiante avanzado en las carreras de Ingeniería en Computación y Data Science en la UNLP.
    Me recibí como Técnico Electrónico en 2021. Actualmente vivo en La Plata, Argentina.</p>),
    Contact:(<p>Podes contactarme enviandome un mensaje directo por LinkedIn <a target="_blank" rel="noopener noreferrer" href="https://Linkedin.com/in/salvador-karakachoff/" >@Salvador_Karakachoff</a>,
     Instagram <a target="_blank" rel="noopener noreferrer" href="https://Instagram.com/salva_karaka">@Salva_Karaka</a> o enviandome un correo electronico a <a target="_blank" rel="noopener noreferrer" href="mailto:salvador.karakachoff@gmail.com">salvador.karakachoff@gmail.com</a>.
     Si queres ver algunos de mis proyectos podes visitar mi GitHub <a target="_blank" rel="noopener noreferrer" href="https://Github.com/salvakaraka">@Salvakaraka</a>.</p>),
    Unknown:(<p>Como soy un bot hay preguntas que no estoy preparado para responder, si te resulta importante que te conteste podes escribirme por alguna de mis redes.</p>),
    Default:(<p>Lo siento, no entendi la pregunta, por favor reformulala.</p>),
};

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
      <body className={inter.className}>
      <Chatbot initialMessage={INITIAL_MESSAGE} answers={ANSWERS}/>
        {children}</body>
    </html>
  )
}
