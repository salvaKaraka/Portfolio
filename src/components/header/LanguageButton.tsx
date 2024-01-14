"use client"

import { primaryStyle } from "@/styles/styles"

export default function LanguageButton(){

    function toggleLanguage() {
        //toggle language logic
      }    

    return (
        <button onClick={toggleLanguage} id="toggleLangBtn" className={`${primaryStyle} rounded-full px-1 py-1 hover:scale-105 transition-all`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7 rounded-full dark:hover:bg-white/30 hover:bg-black/10 p-1 transition icon icon-tabler icon-tabler-language" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5h7" /><path d="M9 3v2c0 4.418 -2.239 8 -5 8" /><path d="M5 9c0 2.144 2.952 3.908 6.7 4" /><path d="M12 20l4 -9l4 9" /><path d="M19.1 18h-6.2" /></svg>
        </button>
    )
}