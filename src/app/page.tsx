import React from 'react'
import Chatbot from '@/components/Chatbot'
import Introduction from '@/components/home/Introduction'
import Projects from '@/components/home/projects/Projects'
import Experience from '@/components/home/experience/Experience';
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <main className="p-4 min-h-screen">
      <Introduction />
      <Projects />
      <Experience />
      <Chatbot /> 
    </main>
    </>
  )
}
