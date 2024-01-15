import React from 'react'
import Chatbot from '@/components/Chatbot'
import SectionContainer from '@/components/sections/SectionContainer'
import Introduction from '@/components/home/Introduction'

export default function Home() {
  return (
    <main className="p-4 min-h-screen">
      <Introduction />
      <Chatbot /> 
    </main>
  )
}
