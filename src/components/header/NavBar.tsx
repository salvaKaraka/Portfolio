"use client"
import { useState } from "react";
import { primaryStyle } from "@/styles/styles"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();

  const active = path === "/" ? 0 : 1;
  const subPage = path.startsWith("/blog/") ? 0 : 1;

  const backgroundHeight = (20*subPage)+60;
  const backgroundWidth = (4*subPage)+90;
  const [backgroundPosition, setBackgroundPosition] = useState((active * 100) + 4);
  const [selectorPosition, setSelectorPosition] = useState((active * 100) + 4);

  const handleBackgroundPosition = (index: number) => {
    // Define la posición del fondo para cada enlace
    const newPosition = (index * 100) + 4; // Ajusta según tus necesidades
    setBackgroundPosition(newPosition);
  };

  const handleSelectorPosition = (index: number) => {
    // Define la posición del fondo para cada enlace
    const newPosition = (index * 100) + 4; // Ajusta según tus necesidades
    setSelectorPosition(newPosition);
  };


  return (

    <nav className={`py-1 px-1 flex gap-1 items-center rounded-full border ${primaryStyle}`}>
      <Link href="/"
        className={`relative flex justify-center items-center gap-[3px] w-24 rounded-full py-1 px-4 transition`}
        onMouseEnter={() => handleSelectorPosition(0)}
        onMouseLeave={() => handleSelectorPosition(active)}
        onClick={() => handleBackgroundPosition(0)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home size-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
        Inicio
      </Link>
      <Link href="/blog"
        className={`hover:text-black/50 dark:hover:text-white/50 relative flex justify-center items-center gap-[3px] w-24 rounded-full py-1 px-4 transition`}
        onMouseEnter={() => handleSelectorPosition(1)}
        onMouseLeave={(i: any) => handleSelectorPosition(active)}
        onClick={() => handleBackgroundPosition(1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-blockquote size-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15h15" /><path d="M21 19h-15" /><path d="M15 11h6" /><path d="M21 7h-6" /><path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" /><path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" /></svg>
        Blog
      </Link>
      <div className="absolute w-24 h-[80%] rounded-full bg-black/10 dark:bg-white/10 transition-all duration-100 z-[-1]" style={{ left: `${selectorPosition}px` }}></div>
      <div className="absolute w-24 h-[80%] rounded-full bg-black/20 dark:bg-white/20 transition-all duration-300 z-[-2]" style={{ left: `${backgroundPosition}px`, height: `${backgroundHeight}%`, width: `${backgroundWidth}px` }}></div>
    </nav>

  )
}
