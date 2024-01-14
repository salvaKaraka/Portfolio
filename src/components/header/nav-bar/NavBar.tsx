import ActiveLink from "./ActiveLink"
import { primaryStyle } from "@/styles/styles"

export default function NavBar() {
  return (

        <nav className={`py-1 px-1 flex gap-1 justify-center items-center rounded-full border ${ primaryStyle }`}>
          <ActiveLink 
          href="/" 
          label="Inicio" 
          svg={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home size-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>}
          />          
          <ActiveLink 
          href="/blog" 
          label="Blog" 
          svg={<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-blockquote size-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15h15" /><path d="M21 19h-15" /><path d="M15 11h6" /><path d="M21 7h-6" /><path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" /><path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" /></svg>}
          />
        </nav>
    
  )
}
