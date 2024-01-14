"use client"
import { useState } from "react";
import NavBar from "./NavBar";
import SecretButton from "./SecretButton";
import ThemeButton from "./ThemeButton";

export default function Header() {

    const [secretCounter, setSecretCounter] = useState(3);

    function secretEvent() {
        setSecretCounter(secretCounter - 1);
        console.log(secretCounter);
        if (secretCounter === 0) {
            setSecretCounter(3);
            const secretBtn = document.getElementById("secretBtn");
            const nav = document.getElementById("nav");
            const themeBtn = document.getElementById("themeBtn");
            const selector = document.getElementById("nav-selector");
            const selected = document.getElementById("nav-selected");
            const robotBtn = document.getElementById("robotBtn");
            
            selector?.classList.remove("duration-100");
            selected?.classList.remove("duration-300");
            selected?.classList.add("duration-[4000ms]");
            selector?.classList.add("duration-[4000ms]");
            selector?.classList.add("translate-x-[6000px]");
            selected?.classList.add("translate-x-[6000px]");

            robotBtn?.classList.add("animate-spin");
            themeBtn?.classList.add("delay-1000");
            themeBtn?.classList.add("translate-y-full");
            nav?.classList.add("rotate-12");
            secretBtn?.classList.add("animate-bounce");
            setTimeout(() => {
                selector?.classList.remove("translate-x-[6000px]");
                selected?.classList.remove("translate-x-[6000px]");
                setTimeout(() => {
                    selector?.classList.remove("duration-[4000ms]");
                    selected?.classList.remove("duration-[4000ms]");
                    selected?.classList.add("duration-300");
                    selector?.classList.add("duration-100");
                    themeBtn?.classList.remove("translate-y-full");
                    robotBtn?.classList.remove("animate-spin");
                }, 500);
                secretBtn?.classList.remove("animate-bounce");
                nav?.classList.remove("rotate-12");
                themeBtn?.classList.remove("delay-1000");
            }, 1500);
            

        }
    }

    return (
        <header className="sticky top-0 z-10 font-semibold text-black/90 dark:text-white/90 flex gap-2 justify-center items-center mx-auto py-5 w-full xl:w-[1200px]">
            <SecretButton onClick={secretEvent} />
            <NavBar />
            <ThemeButton />
        </header>
    )
}