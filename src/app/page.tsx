import React from 'react'
import Chatbot from '@/components/Chatbot'
import Introduction from '@/components/home/Introduction'
import Projects from '@/components/home/projects/Projects'
import Experience from '@/components/home/experience/Experience';


export default function Home() {
  return (
  
    <main className="p-4 min-h-screen">
      <Introduction />
      
      <Projects />

      <Experience />

      <Chatbot /> 
    </main>
 
  )
}
